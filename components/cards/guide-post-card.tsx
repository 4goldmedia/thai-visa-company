import Link from "next/link"

import { ctaLabels } from "@/lib/cta"
import type { GuidePostStatus } from "@/lib/guides/types"
import { cardSurfaceClass, editorialLinkCompactClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

type GuidePostCardProps = {
  title: string
  description: string
  category: string
  href: string
  status?: GuidePostStatus
  readingTime?: string
  publishedAt?: string
  updatedAt?: string
  className?: string
}

function formatFreshnessDate(value?: string): string | null {
  if (!value) return null
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return null
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

function GuidePostCard({
  title,
  description,
  category,
  href,
  status = "published",
  readingTime,
  publishedAt,
  updatedAt,
  className,
}: GuidePostCardProps) {
  const isPlanned = status === "planned"
  const freshness = formatFreshnessDate(updatedAt ?? publishedAt)

  return (
    <article
      data-slot="guide-post-card"
      data-status={status}
      className={cn(
        "relative flex h-full min-h-0 flex-col",
        cardSurfaceClass,
        !isPlanned && "group",
        isPlanned && "border-dashed bg-muted/5",
        className,
      )}
    >
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-xs leading-none text-muted-foreground">{category}</p>
          {freshness && !isPlanned ? (
            <span className="text-[11px] text-muted-foreground/80 sm:text-xs">
              Updated {freshness}
            </span>
          ) : null}
          {isPlanned ? (
            <span className="rounded-md bg-muted/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground sm:text-xs">
              Coming soon
            </span>
          ) : null}
        </div>
        <h3 className="mt-2.5 text-[15px] font-medium leading-snug text-foreground sm:mt-3">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-[14px] leading-[1.65] text-muted-foreground sm:mt-2.5">
          {description}
        </p>
        {!isPlanned ? (
          <div className="mt-3.5 flex flex-wrap items-center gap-3 sm:mt-4">
            <span
              className={cn(
                editorialLinkCompactClass,
                "transition-colors group-hover:text-foreground",
              )}
              aria-hidden
            >
              {ctaLabels.readGuide}
            </span>
            {readingTime ? (
              <span className="text-[12px] text-muted-foreground">{readingTime}</span>
            ) : null}
          </div>
        ) : null}
      </div>
      {!isPlanned ? (
        <Link
          href={href}
          className="absolute inset-0 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <span className="sr-only">
            {ctaLabels.readGuide}: {title}
          </span>
        </Link>
      ) : null}
    </article>
  )
}

export { GuidePostCard }
