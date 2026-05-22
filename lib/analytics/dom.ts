import {
  trackArticleCtaClick,
  trackPageCtaClick,
  trackVisaPageCtaClick,
} from "@/lib/analytics/cta"
import { parseAnalyticsClickContext } from "@/lib/analytics/context"
import type { AnalyticsSurface } from "@/lib/analytics/types"

export type ParsedAnalyticsClick = {
  cta_id: string
  surface: AnalyticsSurface
  visa_slug?: string
  article_slug?: string
  cta_label?: string
  link_url?: string
}

export function parseAnalyticsClickTarget(
  element: Element,
): ParsedAnalyticsClick | null {
  const context = parseAnalyticsClickContext(element)
  if (!context?.cta_id || !context.surface) return null

  const anchor =
    element instanceof HTMLAnchorElement
      ? element
      : element.closest<HTMLAnchorElement>("a[href]")

  return {
    cta_id: context.cta_id,
    surface: context.surface,
    visa_slug: context.visa_slug,
    article_slug: context.article_slug,
    cta_label: context.cta_label,
    link_url: anchor?.href,
  }
}

export function trackCtaClickFromElement(
  element: Element,
  pagePath: string,
): boolean {
  const parsed = parseAnalyticsClickTarget(element)
  if (!parsed) return false

  const base = {
    page_path: pagePath,
    cta_id: parsed.cta_id,
    cta_label: parsed.cta_label,
    link_url: parsed.link_url,
  }

  if (parsed.surface === "visa_page" && parsed.visa_slug) {
    trackVisaPageCtaClick({
      ...base,
      visa_slug: parsed.visa_slug,
    })
    return true
  }

  if (parsed.surface === "article" && parsed.article_slug) {
    trackArticleCtaClick({
      ...base,
      article_slug: parsed.article_slug,
    })
    return true
  }

  trackPageCtaClick({
    ...base,
    surface: parsed.surface,
    visa_slug: parsed.visa_slug,
    article_slug: parsed.article_slug,
  })
  return true
}
