import type { AnalyticsSurface } from "@/lib/analytics/types"

export type AnalyticsClickContext = {
  cta_id?: string
  surface?: AnalyticsSurface
  visa_slug?: string
  article_slug?: string
  cta_label?: string
}

/** Nearest `data-analytics-*` host for delegated click enrichment */
export function parseAnalyticsClickContext(
  element: Element,
): AnalyticsClickContext | null {
  const host =
    element.closest<HTMLElement>("[data-analytics-cta]") ??
    (element.matches("[data-analytics-cta]") ? element : null)

  if (!(host instanceof HTMLElement) || !host.dataset.analyticsCta) {
    return null
  }

  const surface = host.dataset.analyticsSurface as AnalyticsSurface | undefined

  return {
    cta_id: host.dataset.analyticsCta,
    surface,
    visa_slug: host.dataset.analyticsVisaSlug,
    article_slug: host.dataset.analyticsArticleSlug,
    cta_label: host.dataset.analyticsCtaLabel,
  }
}
