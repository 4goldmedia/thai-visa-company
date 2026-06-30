import Link from "next/link"

import type { BlogPostCard } from "@/lib/blog/types"
import { editorialLinkCompactClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

const MAX_ARTICLE_LINKS = 2

type EditorialPathCardProps = {
  title: string
  description: string
  visaLabel: string
  visaHref?: string
  cityLabel: string
  articles: ReadonlyArray<BlogPostCard>
  index: number
  className?: string
}

function EditorialPathCard({
  title,
  description,
  visaLabel,
  visaHref,
  cityLabel,
  articles,
  index,
  className,
}: EditorialPathCardProps) {
  const visibleArticles = articles.slice(0, MAX_ARTICLE_LINKS)

  return (
    <li className={cn("moving-path-row", className)}>
      <div className="moving-path-row__lead">
        <p className="moving-path-row__index" aria-hidden>
          {String(index + 1).padStart(2, "0")}
        </p>
        <div>
          <h3 className="moving-path-row__title">{title}</h3>
          <p className="moving-path-row__description">{description}</p>
        </div>
      </div>

      <div className="moving-path-row__aside">
        <dl className="moving-path-row__meta">
          <div>
            <dt>Visa</dt>
            <dd>
              {visaHref ? (
                <Link href={visaHref} className={editorialLinkCompactClass}>
                  {visaLabel}
                </Link>
              ) : (
                visaLabel
              )}
            </dd>
          </div>
          <div>
            <dt>City</dt>
            <dd>{cityLabel}</dd>
          </div>
        </dl>

        {visibleArticles.length > 0 ? (
          <ul className="moving-path-row__articles" aria-label={`Guides for ${title}`}>
            {visibleArticles.map((article) => (
              <li key={article.slug}>
                <Link href={article.path} className={editorialLinkCompactClass}>
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </li>
  )
}

export { EditorialPathCard }
export type { EditorialPathCardProps }
