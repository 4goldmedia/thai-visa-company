import Link from "next/link"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { blogIndexSectionIds } from "@/lib/blog/section-ids"
import type { BlogPostCard as BlogPost } from "@/lib/blog/types"
import { editorialLinkCompactClass } from "@/lib/section-styles"

type BlogFeaturedArticleProps = {
  article: BlogPost
}

function formatDate(value?: string): string | null {
  if (!value) return null
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return null
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

function BlogFeaturedArticle({ article }: BlogFeaturedArticleProps) {
  if (article.status === "planned") return null

  const freshness = formatDate(article.updatedAt ?? article.publishedAt)

  return (
    <Section
      id={blogIndexSectionIds.featured}
      spacing="default"
      aria-labelledby={`${blogIndexSectionIds.featured}-heading`}
      className="border-b border-border/40 bg-muted/10"
    >
      <Container>
        <article className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-12">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
              Featured · {article.category}
            </p>
            <h2
              id={`${blogIndexSectionIds.featured}-heading`}
              className="mt-3 text-[1.75rem] font-semibold tracking-[-0.03em] text-foreground sm:text-[2rem] sm:leading-[1.1]"
            >
              <Link href={article.path} className="transition-colors hover:text-foreground/85">
                {article.title}
              </Link>
            </h2>
            <p className="mt-4 max-w-2xl text-[16px] leading-[1.7] text-muted-foreground">
              {article.description}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-[13px] text-muted-foreground">
              {freshness ? <time dateTime={article.updatedAt ?? article.publishedAt}>{freshness}</time> : null}
              {article.readingTime ? (
                <>
                  <span aria-hidden>·</span>
                  <span>{article.readingTime}</span>
                </>
              ) : null}
            </div>
            <Link href={article.path} className={`mt-6 inline-flex ${editorialLinkCompactClass}`}>
              Read article
            </Link>
          </div>

          <div
            className="aspect-[16/10] rounded-[var(--radius-card)] border border-border/50 bg-gradient-to-br from-muted/40 to-muted/10"
            aria-hidden
          />
        </article>
      </Container>
    </Section>
  )
}

export { BlogFeaturedArticle }
