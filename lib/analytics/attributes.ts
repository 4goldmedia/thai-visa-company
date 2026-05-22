import type { AnalyticsSurface } from "@/lib/analytics/types"

/** `data-*` keys for delegated click tracking */
export const analyticsAttributes = {
  cta: "data-analytics-cta",
  surface: "data-analytics-surface",
  visaSlug: "data-analytics-visa-slug",
  articleSlug: "data-analytics-article-slug",
  ctaLabel: "data-analytics-cta-label",
} as const

export type AnalyticsDataAttributes = {
  "data-analytics-cta"?: string
  "data-analytics-surface"?: AnalyticsSurface
  "data-analytics-visa-slug"?: string
  "data-analytics-article-slug"?: string
  "data-analytics-cta-label"?: string
}

export function analyticsDataAttributes(input: {
  ctaId: string
  surface: AnalyticsSurface
  visaSlug?: string
  articleSlug?: string
  ctaLabel?: string
}): AnalyticsDataAttributes {
  return {
    "data-analytics-cta": input.ctaId,
    "data-analytics-surface": input.surface,
    ...(input.visaSlug ? { "data-analytics-visa-slug": input.visaSlug } : {}),
    ...(input.articleSlug
      ? { "data-analytics-article-slug": input.articleSlug }
      : {}),
    ...(input.ctaLabel ? { "data-analytics-cta-label": input.ctaLabel } : {}),
  }
}
