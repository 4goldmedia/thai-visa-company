/**
 * Analytics public API — import from `@/lib/analytics`.
 *
 * GA4 loads via `<AnalyticsRoot />` when `NEXT_PUBLIC_GA_ID` is set.
 * Implementation modules live in `lib/analytics/*`.
 *
 * @example
 * import { trackLineClick, trackInquirySubmit, trackVisaPageCtaClick } from "@/lib/analytics"
 *
 * trackLineClick({ page_path: "/visas/retirement", link_url: lineUrl })
 * trackInquirySubmit({ lead_source: "contact-page", page_path: "/contact" })
 * trackVisaPageCtaClick({ visa_slug: "retirement", cta_id: "explore_visas", page_path: "..." })
 */

export {
  getGaMeasurementId,
  isAnalyticsEnabled,
} from "@/lib/analytics/env"

export {
  analyticsEvents,
  analyticsCategories,
} from "@/lib/analytics/events"
export type { AnalyticsEventName } from "@/lib/analytics/events"

export { analyticsCtaIds } from "@/lib/analytics/cta-ids"
export type { AnalyticsCtaId } from "@/lib/analytics/cta-ids"

export {
  analyticsAttributes,
  analyticsDataAttributes,
} from "@/lib/analytics/attributes"
export type { AnalyticsDataAttributes } from "@/lib/analytics/attributes"

export type {
  AnalyticsSurface,
  VisaPageCtaId,
  ArticleCtaId,
  AnalyticsEventParams,
  ContactClickParams,
  PageCtaClickParams,
  InquirySubmitParams,
  VisaPageCtaClickParams,
  ArticleCtaClickParams,
} from "@/lib/analytics/types"

export { trackEvent, trackPageView } from "@/lib/analytics/track"

export {
  trackLineClick,
  trackWhatsAppClick,
  trackContactChannelClick,
} from "@/lib/analytics/contact"

export {
  trackInquirySubmit,
  trackInquirySubmission,
  trackInquiryEvent,
} from "@/lib/analytics/inquiry"
export type {
  InquiryAnalyticsEvent,
  InquiryAnalyticsEventName,
} from "@/lib/analytics/inquiry"

export {
  trackVisaPageCtaClick,
  trackArticleCtaClick,
  trackPageCtaClick,
} from "@/lib/analytics/cta"

export {
  parseAnalyticsClickContext,
  type AnalyticsClickContext,
} from "@/lib/analytics/context"

export {
  parseAnalyticsClickTarget,
  trackCtaClickFromElement,
} from "@/lib/analytics/dom"
export type { ParsedAnalyticsClick } from "@/lib/analytics/dom"

export { attachAnalyticsClickListener } from "@/lib/analytics/document-listeners"
export { useInquiryAnalytics } from "@/lib/analytics/use-inquiry-analytics"
