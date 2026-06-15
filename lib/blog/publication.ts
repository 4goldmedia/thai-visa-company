import type { BlogClusterId, BlogPostCard } from "@/lib/blog/types"

export const BLOG_POSTS_PER_PAGE = 9

export function getPublishedBlogPosts(
  articles: ReadonlyArray<BlogPostCard>,
): BlogPostCard[] {
  return articles.filter((article) => article.status !== "planned")
}

export function filterBlogPosts(
  articles: ReadonlyArray<BlogPostCard>,
  input: {
    query?: string
    clusterId?: BlogClusterId | null
    /** @deprecated Use `clusterId` */
    categoryId?: BlogClusterId | null
  },
): BlogPostCard[] {
  const normalizedQuery = input.query?.trim().toLowerCase() ?? ""
  const activeCluster = input.clusterId ?? input.categoryId ?? null

  return articles.filter((article) => {
    if (activeCluster && article.clusterId !== activeCluster) return false
    if (!normalizedQuery) return true

    const haystack = [
      article.title,
      article.description,
      article.category,
      article.slug,
    ]
      .join(" ")
      .toLowerCase()

    return haystack.includes(normalizedQuery)
  })
}

export function paginateBlogPosts<T>(
  items: ReadonlyArray<T>,
  page: number,
  perPage: number = BLOG_POSTS_PER_PAGE,
): {
  items: T[]
  page: number
  totalPages: number
  totalItems: number
} {
  const totalItems = items.length
  const totalPages = Math.max(1, Math.ceil(totalItems / perPage))
  const safePage = Math.min(Math.max(page, 1), totalPages)
  const start = (safePage - 1) * perPage

  return {
    items: items.slice(start, start + perPage),
    page: safePage,
    totalPages,
    totalItems,
  }
}
