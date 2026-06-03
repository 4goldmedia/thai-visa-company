import { formatContentIsoDate } from "@/lib/content/dates"
import type { ContentIsoDate, ContentVisaLastReviewed } from "@/lib/content/types"
import { cn } from "@/lib/utils"

const DEFAULT_REVIEWED_BY = "Thai Visa Company"

type VisaPageMetaProps = {
  updatedAt: ContentIsoDate
  lastReviewed?: ContentVisaLastReviewed
  className?: string
}

function VisaPageMeta({
  updatedAt,
  lastReviewed,
  className,
}: VisaPageMetaProps) {
  const reviewedBy = lastReviewed?.reviewedBy ?? DEFAULT_REVIEWED_BY

  return (
    <p className={cn("visa-hero-premium__meta", className)}>
      <span>Last updated </span>
      <time dateTime={updatedAt}>{formatContentIsoDate(updatedAt)}</time>
      <span className="visa-hero-premium__meta-sep" aria-hidden>
        {" "}
        ·{" "}
      </span>
      <span>
        Reviewed by <span className="visa-hero-premium__meta-by">{reviewedBy}</span>
      </span>
    </p>
  )
}

export { VisaPageMeta, DEFAULT_REVIEWED_BY }
export type { VisaPageMetaProps }
