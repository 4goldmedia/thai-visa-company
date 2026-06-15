import type { ArticleMetadata } from "@/components/layout/article-layout"
import { ArticleMetadataRow } from "@/components/editorial/article-metadata-row"
import { cn } from "@/lib/utils"

type ArticleHeroProps = {
  category: string
  title: string
  headingId: string
  summary: string
  metadata?: ArticleMetadata
  className?: string
}

function ArticleHero({
  category,
  title,
  headingId,
  summary,
  metadata,
  className,
}: ArticleHeroProps) {
  return (
    <header className={cn("editorial-hero", className)}>
      <p className="editorial-hero__category">{category}</p>
      <h1 id={headingId} className="editorial-hero__title">
        {title}
      </h1>
      {summary ? <p className="editorial-hero__summary">{summary}</p> : null}
      <ArticleMetadataRow
        author={metadata?.author}
        reviewedBy={metadata?.reviewedBy}
        published={metadata?.published}
        updated={metadata?.updated}
        readingTime={metadata?.readingTime}
      />
    </header>
  )
}

export { ArticleHero }
