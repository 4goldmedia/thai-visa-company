"use client"

import * as React from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Search } from "lucide-react"

import { BlogPostCard } from "@/components/cards/blog-post-card"
import { Container } from "@/components/layout/container"
import { blogClusters } from "@/lib/blog/content/clusters"
import {
  BLOG_POSTS_PER_PAGE,
  filterBlogPosts,
  getPublishedBlogPosts,
  paginateBlogPosts,
} from "@/lib/blog/publication"
import { blogIndexSectionIds } from "@/lib/blog/section-ids"
import type { BlogClusterId, BlogPostCard as BlogPost } from "@/lib/blog/types"
import { isBlogClusterId } from "@/lib/blog/types"
import { cn } from "@/lib/utils"

type BlogPublicationHubProps = {
  articles: ReadonlyArray<BlogPost>
}

function parsePage(value: string | null): number {
  const parsed = Number.parseInt(value ?? "1", 10)
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 1
}

function resolveClusterParam(
  clusterParam: string | null,
  legacyCategoryParam: string | null,
): BlogClusterId | null {
  if (clusterParam && isBlogClusterId(clusterParam)) return clusterParam
  if (legacyCategoryParam && isBlogClusterId(legacyCategoryParam)) return legacyCategoryParam
  return null
}

function BlogPublicationHub({ articles }: BlogPublicationHubProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const query = searchParams.get("q") ?? ""
  const clusterParam = searchParams.get("cluster")
  const legacyCategoryParam = searchParams.get("category")
  const clusterId = resolveClusterParam(clusterParam, legacyCategoryParam)
  const page = parsePage(searchParams.get("page"))

  const [searchValue, setSearchValue] = React.useState(query)

  React.useEffect(() => {
    setSearchValue(query)
  }, [query])

  const published = getPublishedBlogPosts(articles)
  const filtered = filterBlogPosts(published, { query, clusterId })
  const pagination = paginateBlogPosts(filtered, page, BLOG_POSTS_PER_PAGE)

  const updateParams = React.useCallback(
    (updates: Record<string, string | null>) => {
      const params = new URLSearchParams(searchParams.toString())

      for (const [key, value] of Object.entries(updates)) {
        if (!value) params.delete(key)
        else params.set(key, value)
      }

      if ("cluster" in updates) {
        params.delete("category")
      }

      const next = params.toString()
      router.replace(next ? `${pathname}?${next}` : pathname, { scroll: false })
    },
    [pathname, router, searchParams],
  )

  const onSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    updateParams({ q: searchValue.trim() || null, page: null })
  }

  const activeClusterLabel = clusterId
    ? blogClusters.find((cluster) => cluster.id === clusterId)?.label
    : null

  return (
    <section
      id={blogIndexSectionIds.latest}
      aria-label="Blog articles"
      className="blog-index__content"
    >
      <Container>
        <nav aria-label="Filter by subject" className="blog-index__filters">
          <ul className="blog-index__filter-list">
            <li>
              <button
                type="button"
                onClick={() => updateParams({ cluster: null, category: null, page: null })}
                className={cn(
                  "blog-index__filter-pill",
                  !clusterId && "blog-index__filter-pill--active",
                )}
                aria-pressed={!clusterId}
              >
                All
              </button>
            </li>
            {blogClusters.map((cluster) => (
              <li key={cluster.id}>
                <button
                  type="button"
                  onClick={() =>
                    updateParams({
                      cluster: cluster.id,
                      category: null,
                      page: null,
                    })
                  }
                  className={cn(
                    "blog-index__filter-pill",
                    clusterId === cluster.id && "blog-index__filter-pill--active",
                  )}
                  aria-pressed={clusterId === cluster.id}
                >
                  {cluster.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <form
          role="search"
          aria-label="Search articles"
          onSubmit={onSearchSubmit}
          className="blog-index__search"
        >
          <label htmlFor="blog-search" className="sr-only">
            Search articles
          </label>
          <Search className="blog-index__search-icon" aria-hidden />
          <input
            id="blog-search"
            type="search"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            placeholder="Search articles"
            className="blog-index__search-input"
          />
        </form>

        {(query || activeClusterLabel) && (
          <p className="blog-index__results-meta">
            {pagination.totalItems === 0
              ? "No articles match your filters."
              : `${pagination.totalItems} article${pagination.totalItems === 1 ? "" : "s"}${
                  activeClusterLabel ? ` about ${activeClusterLabel}` : ""
                }${query ? ` for “${query}”` : ""}`}
          </p>
        )}

        {pagination.items.length > 0 ? (
          <ul className="blog-index__grid">
            {pagination.items.map((article) => (
              <li key={article.slug} className="min-h-0">
                <BlogPostCard
                  title={article.title}
                  description={article.description}
                  category={article.category}
                  href={article.path}
                  status={article.status}
                  readingTime={article.readingTime}
                  publishedAt={article.publishedAt}
                  updatedAt={article.updatedAt}
                  image={article.heroImage}
                  ctaLabel="Read article"
                  variant="editorial"
                />
              </li>
            ))}
          </ul>
        ) : (
          <div className="blog-index__empty">
            <p className="blog-index__empty-title">More answers coming soon</p>
            <p className="blog-index__empty-copy">
              We add practical visa guides here as readers ask common questions.
              {query || clusterId ? " Try clearing your filters." : null}
            </p>
            {query || clusterId ? (
              <button
                type="button"
                onClick={() => {
                  setSearchValue("")
                  updateParams({ q: null, cluster: null, category: null, page: null })
                }}
                className="blog-index__empty-action"
              >
                Clear filters
              </button>
            ) : null}
          </div>
        )}

        {pagination.totalPages > 1 ? (
          <nav className="blog-index__pagination" aria-label="Pagination">
            <PaginationButton
              label="Previous page"
              disabled={pagination.page <= 1}
              onClick={() => updateParams({ page: String(pagination.page - 1) })}
            >
              Previous
            </PaginationButton>
            <span className="blog-index__pagination-label">
              Page {pagination.page} of {pagination.totalPages}
            </span>
            <PaginationButton
              label="Next page"
              disabled={pagination.page >= pagination.totalPages}
              onClick={() => updateParams({ page: String(pagination.page + 1) })}
            >
              Next
            </PaginationButton>
          </nav>
        ) : null}
      </Container>
    </section>
  )
}

function PaginationButton({
  children,
  label,
  disabled,
  onClick,
}: {
  children: React.ReactNode
  label: string
  disabled: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "blog-index__pagination-btn",
        disabled && "blog-index__pagination-btn--disabled",
      )}
    >
      {children}
    </button>
  )
}

export { BlogPublicationHub }
