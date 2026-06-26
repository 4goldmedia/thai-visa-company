import { BlogPostCard } from "@/components/cards/blog-post-card"
import type { ContentRelatedLink } from "@/lib/content/types"
import { cn } from "@/lib/utils"

type RelatedArticlesProps = {
  title?: string
  items: ReadonlyArray<ContentRelatedLink>
  className?: string
}

function RelatedArticles({
  title = "Keep reading",
  items,
  className,
}: RelatedArticlesProps) {
  if (items.length === 0) return null

  return (
    <section
      className={cn("editorial-keep-reading", className)}
      aria-labelledby="related-articles-heading"
    >
      <h2 id="related-articles-heading" className="editorial-keep-reading__title">
        {title}
      </h2>
      <ul className="editorial-keep-reading__grid">
        {items.map((item) => (
          <li key={item.href} className="editorial-keep-reading__item">
            <BlogPostCard
              variant="editorial"
              title={item.title}
              description={item.description}
              category={item.category}
              href={item.href}
              image={item.image}
              publishedAt={item.publishedAt}
              readingTime={item.readingTime}
              authorName={item.authorName}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export { RelatedArticles }
