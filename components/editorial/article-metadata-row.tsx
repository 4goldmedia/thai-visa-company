import Link from "next/link"

import type { ContentArticleAuthor } from "@/lib/content/types"
import { cn } from "@/lib/utils"

type ArticleMetadataRowProps = {
  author?: ContentArticleAuthor
  published?: string
  updated?: string
  readingTime?: string
  className?: string
}

function formatDisplayDate(value?: string): string | null {
  if (!value) return null
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

function MetaItem({ children }: { children: React.ReactNode }) {
  return <span className="editorial-meta__item">{children}</span>
}

function MetaSeparator() {
  return (
    <span className="editorial-meta__sep" aria-hidden>
      •
    </span>
  )
}

function ArticleMetadataRow({
  author,
  published,
  updated,
  readingTime,
  className,
}: ArticleMetadataRowProps) {
  const publishedLabel = formatDisplayDate(published)
  const updatedLabel = formatDisplayDate(updated)
  const items: React.ReactNode[] = []

  if (author) {
    items.push(
      <MetaItem key="author">
        <span className="sr-only">Author </span>
        {author.url ? (
          <Link href={author.url} className="hover:text-foreground">
            {author.name}
          </Link>
        ) : (
          author.name
        )}
      </MetaItem>,
    )
  }

  if (publishedLabel) {
    items.push(
      <MetaItem key="published">
        <span className="sr-only">Published </span>
        Published {publishedLabel}
      </MetaItem>,
    )
  }

  if (updatedLabel && updatedLabel !== publishedLabel) {
    items.push(
      <MetaItem key="updated">
        <span className="sr-only">Updated </span>
        Updated {updatedLabel}
      </MetaItem>,
    )
  }

  if (readingTime) {
    items.push(
      <MetaItem key="reading">
        <span className="sr-only">Reading time </span>
        {readingTime}
      </MetaItem>,
    )
  }

  if (items.length === 0) return null

  return (
    <div className={cn("editorial-meta", className)} role="doc-subtitle">
      {items.map((item, index) => (
        <span key={index} className="contents">
          {index > 0 ? <MetaSeparator /> : null}
          {item}
        </span>
      ))}
    </div>
  )
}

export { ArticleMetadataRow }
