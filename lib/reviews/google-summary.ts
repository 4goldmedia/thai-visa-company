import {
  googleReviewsUrl,
  platformBusinessProfile,
} from "@/lib/schema/business-profile"

/** Default Google review summary  -  single source for UI + trust blocks */
export const defaultGoogleReviewSummary = {
  rating: platformBusinessProfile.googleReviews.aggregateRating.ratingValue,
  reviewCount:
    platformBusinessProfile.googleReviews.aggregateRating.reviewCount,
  bestRating:
    platformBusinessProfile.googleReviews.aggregateRating.bestRating ?? 5,
  href: googleReviewsUrl,
  sourceLabel: "Google",
} as const

export type GoogleReviewSummaryData = {
  rating: number
  reviewCount: string | number
  bestRating?: number
  href?: string
  sourceLabel?: string
}

export function formatGoogleReviewCount(count: string | number): string {
  if (typeof count === "number") {
    return `${count} reviews`
  }
  const trimmed = count.trim()
  return trimmed.endsWith("reviews") ? trimmed : `${trimmed} reviews`
}

export function buildGoogleReviewAriaLabel(
  data: Pick<
    GoogleReviewSummaryData,
    "rating" | "reviewCount" | "sourceLabel" | "bestRating"
  >,
  options?: { businessName?: string; includeCount?: boolean },
): string {
  const source = data.sourceLabel ?? "Google"
  const best = data.bestRating ?? 5
  const countSuffix =
    options?.includeCount === false
      ? ""
      : ` from ${formatGoogleReviewCount(data.reviewCount)}`

  if (options?.businessName) {
    return `${options.businessName} is rated ${data.rating} out of ${best} on ${source}${countSuffix}`
  }

  return `Rated ${data.rating} out of ${best} on ${source}${countSuffix}`
}
