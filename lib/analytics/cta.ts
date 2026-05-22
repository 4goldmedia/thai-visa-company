import { analyticsCategories, analyticsEvents } from "@/lib/analytics/events"
import { trackEvent } from "@/lib/analytics/track"
import type {
  ArticleCtaClickParams,
  AnalyticsSurface,
  PageCtaClickParams,
  VisaPageCtaClickParams,
} from "@/lib/analytics/types"

export function trackVisaPageCtaClick(params: VisaPageCtaClickParams): void {
  trackEvent(analyticsEvents.visaPageCtaClick, {
    event_category: analyticsCategories.cta,
    surface: "visa_page" satisfies AnalyticsSurface,
    visa_slug: params.visa_slug,
    cta_id: params.cta_id,
    cta_label: params.cta_label,
    page_path: params.page_path,
    link_url: params.link_url,
  })
}

export function trackArticleCtaClick(params: ArticleCtaClickParams): void {
  trackEvent(analyticsEvents.articleCtaClick, {
    event_category: analyticsCategories.cta,
    surface: "article" satisfies AnalyticsSurface,
    article_slug: params.article_slug,
    cta_id: params.cta_id,
    cta_label: params.cta_label,
    page_path: params.page_path,
    link_url: params.link_url,
  })
}

/** Homepage, contact, resources, and global chrome CTAs */
export function trackPageCtaClick(params: PageCtaClickParams): void {
  trackEvent(analyticsEvents.pageCtaClick, {
    event_category: analyticsCategories.cta,
    surface: params.surface,
    cta_id: params.cta_id,
    cta_label: params.cta_label,
    page_path: params.page_path,
    link_url: params.link_url,
    visa_slug: params.visa_slug,
    article_slug: params.article_slug,
  })
}
