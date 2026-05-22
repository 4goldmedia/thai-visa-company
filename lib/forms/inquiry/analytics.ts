import type { InquiryLeadSource } from "@/lib/forms/inquiry/types"

export type InquiryAnalyticsEventName =
  | "inquiry_form_view"
  | "inquiry_form_start"
  | "inquiry_form_submit"
  | "inquiry_form_success"
  | "inquiry_form_error"

export type InquiryAnalyticsEvent = {
  name: InquiryAnalyticsEventName
  leadSource: InquiryLeadSource
  pagePath?: string
}

declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      params?: Record<string, string | number | boolean>,
    ) => void
    plausible?: (
      eventName: string,
      options?: { props?: Record<string, string> },
    ) => void
  }
}

/**
 * Analytics hook — extend when GA4, Plausible, or PostHog is configured.
 * Safe no-op in SSR and when trackers are absent.
 */
export function trackInquiryEvent(event: InquiryAnalyticsEvent): void {
  if (typeof window === "undefined") return

  const props = {
    lead_source: event.leadSource,
    ...(event.pagePath ? { page_path: event.pagePath } : {}),
  }

  window.gtag?.("event", event.name, props)
  window.plausible?.(event.name, { props })
}
