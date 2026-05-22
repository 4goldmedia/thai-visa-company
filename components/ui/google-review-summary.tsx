import { StarRating } from "@/components/cards/review-card"
import {
  buildGoogleReviewAriaLabel,
  defaultGoogleReviewSummary,
  formatGoogleReviewCount,
  type GoogleReviewSummaryData,
} from "@/lib/reviews/google-summary"
import { siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"

export type GoogleReviewSummaryProps = {
  rating?: number
  reviewCount?: string | number
  bestRating?: number
  href?: string
  sourceLabel?: string
  /** `inline` — hero bars; `stacked` — section aside */
  layout?: "inline" | "stacked"
  size?: "sm" | "md"
  /** Link summary to Google reviews (external) */
  linkToReviews?: boolean
  /** Include business name in screen reader label */
  includeBusinessInLabel?: boolean
  className?: string
}

function GoogleMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border/50 bg-muted/30 px-1.5 py-px",
        "text-[10px] font-medium tracking-tight text-muted-foreground sm:text-[11px]",
        className
      )}
      aria-hidden
    >
      Google
    </span>
  )
}

function GoogleReviewSummary({
  rating = defaultGoogleReviewSummary.rating,
  reviewCount = defaultGoogleReviewSummary.reviewCount,
  bestRating = defaultGoogleReviewSummary.bestRating,
  href = defaultGoogleReviewSummary.href,
  sourceLabel = defaultGoogleReviewSummary.sourceLabel,
  layout = "inline",
  size = "sm",
  linkToReviews = false,
  includeBusinessInLabel = false,
  className,
}: GoogleReviewSummaryProps) {
  const data: GoogleReviewSummaryData = {
    rating,
    reviewCount,
    bestRating,
    href,
    sourceLabel,
  }

  const ariaLabel = buildGoogleReviewAriaLabel(data, {
    businessName: includeBusinessInLabel ? siteConfig.name : undefined,
  })
  const countLabel = formatGoogleReviewCount(reviewCount)
  const isStacked = layout === "stacked"
  const isMd = size === "md"

  const ratingClass = cn(
    "font-semibold tabular-nums tracking-tight text-foreground",
    isStacked
      ? isMd
        ? "text-2xl sm:text-3xl"
        : "text-xl sm:text-2xl"
      : isMd
        ? "text-base sm:text-lg"
        : "text-sm"
  )

  const metaClass = cn(
    "leading-snug text-muted-foreground",
    isMd ? "text-sm sm:text-[15px]" : "text-[13px] sm:text-sm"
  )

  const content = (
    <div
      data-slot="google-review-summary"
      data-layout={layout}
      role="group"
      aria-label={ariaLabel}
      className={cn(
        isStacked
          ? "flex flex-col items-start gap-1.5 sm:items-end sm:text-right"
          : "flex flex-wrap items-center gap-x-2.5 gap-y-1.5",
        className
      )}
    >
      {isStacked ? (
        <>
          <p className={ratingClass}>{rating}</p>
          <StarRating
            rating={rating}
            className={cn(isMd && "[&_svg]:size-3.5")}
          />
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <p className={metaClass}>{countLabel}</p>
            <GoogleMark />
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center gap-1.5" aria-hidden>
            <StarRating rating={rating} />
            <span className={ratingClass}>{rating}</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <p className={metaClass}>
              on {sourceLabel} · {countLabel}
            </p>
            <GoogleMark />
          </div>
        </>
      )}
    </div>
  )

  if (linkToReviews && href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "rounded-lg outline-none transition-colors",
          "hover:opacity-90",
          "focus-visible:ring-3 focus-visible:ring-ring/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        )}
        aria-label={`${ariaLabel}. View on Google`}
      >
        {content}
      </a>
    )
  }

  return content
}

export { GoogleReviewSummary, GoogleMark }
