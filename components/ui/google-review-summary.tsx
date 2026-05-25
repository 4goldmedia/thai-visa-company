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
  /** `dark` — reviews band (#23211E) */
  variant?: "light" | "dark"
  /** Stacked layout only — hide stars (e.g. when cards already show ratings) */
  showStackedStars?: boolean
  /** Stacked layout — editorial score with /5 denominator */
  stackedScoreStyle?: "default" | "editorial"
  className?: string
}

function GoogleMark({
  className,
  variant = "light",
}: {
  className?: string
  variant?: "light" | "dark"
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-1.5 py-px",
        "text-[10px] font-medium tracking-tight sm:text-[11px]",
        variant === "dark"
          ? "border-[color-mix(in_srgb,#f6f3ee_14%,transparent)] bg-[color-mix(in_srgb,#f6f3ee_6%,transparent)] text-[color-mix(in_srgb,#f6f3ee_55%,transparent)]"
          : "border-border/50 bg-muted/30 text-muted-foreground",
        className,
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
  variant = "light",
  showStackedStars = true,
  stackedScoreStyle = "default",
  className,
}: GoogleReviewSummaryProps) {
  const isDark = variant === "dark"
  const isEditorialStacked =
    stackedScoreStyle === "editorial" && layout === "stacked"
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

  const best = bestRating ?? 5

  const ratingClass = cn(
    "tabular-nums tracking-tight",
    isEditorialStacked
      ? "google-review-summary__score-value font-display font-medium text-[clamp(2rem,4vw,2.75rem)] leading-none text-[#f6f3ee]"
      : cn(
          "font-semibold",
          isDark ? "text-[#f6f3ee]" : "text-foreground",
          isStacked
            ? isMd
              ? "text-2xl sm:text-3xl"
              : "text-xl sm:text-2xl"
            : isMd
              ? "text-base sm:text-lg"
              : "text-sm",
        ),
  )

  const metaClass = cn(
    "leading-snug",
    isEditorialStacked
      ? "google-review-summary__meta-line text-[length:var(--text-small)] text-[color-mix(in_srgb,#f6f3ee_62%,transparent)]"
      : cn(
          isDark
            ? "text-[color-mix(in_srgb,#f6f3ee_68%,transparent)]"
            : "text-muted-foreground",
          isMd ? "text-sm sm:text-[15px]" : "text-[13px] sm:text-sm",
        ),
  )

  const content = (
    <div
      data-slot="google-review-summary"
      data-layout={layout}
      role="group"
      aria-label={ariaLabel}
      className={cn(
        isStacked
          ? cn(
              "flex flex-col",
              isEditorialStacked
                ? "google-review-summary--editorial items-start gap-2 sm:items-end sm:gap-2.5 sm:text-right"
                : "items-start gap-1.5 sm:items-end sm:text-right",
            )
          : "flex flex-wrap items-center gap-x-2.5 gap-y-1.5",
        isDark && "google-review-summary--dark",
        isEditorialStacked && "google-review-summary--editorial",
        className,
      )}
    >
      {isStacked ? (
        <>
          <p className={ratingClass} data-rating>
            {isEditorialStacked ? (
              <>
                {rating}
                <span className="google-review-summary__score-denominator text-[0.58em] font-normal tracking-normal text-[color-mix(in_srgb,#f6f3ee_52%,transparent)]">
                  /{best}
                </span>
              </>
            ) : (
              rating
            )}
          </p>
          {showStackedStars && !isEditorialStacked ? (
            <StarRating rating={rating} size={isMd ? "md" : "sm"} />
          ) : null}
          <div
            className={cn(
              "flex flex-wrap items-center gap-x-2 gap-y-1",
              isEditorialStacked &&
                "google-review-summary__meta-row gap-x-2.5 gap-y-1.5",
            )}
          >
            <p className={metaClass}>{countLabel}</p>
            <GoogleMark variant={variant} />
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center gap-1.5" aria-hidden>
            <StarRating rating={rating} size={isMd ? "md" : "sm"} />
            <span className={ratingClass}>{rating}</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <p className={metaClass}>
              on {sourceLabel} · {countLabel}
            </p>
            <GoogleMark variant={variant} />
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
          isDark
            ? "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[color-mix(in_srgb,#f6f3ee_35%,transparent)]"
            : "focus-visible:ring-3 focus-visible:ring-ring/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
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
