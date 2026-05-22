import { analyticsCategories, analyticsEvents } from "@/lib/analytics/events"
import { trackEvent } from "@/lib/analytics/track"
import type { InquirySubmitParams } from "@/lib/analytics/types"
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

const inquiryEventMap: Record<
  InquiryAnalyticsEventName,
  (typeof analyticsEvents)[keyof typeof analyticsEvents]
> = {
  inquiry_form_view: analyticsEvents.inquiryFormView,
  inquiry_form_start: analyticsEvents.inquiryFormStart,
  inquiry_form_submit: analyticsEvents.inquiryFormSubmit,
  inquiry_form_success: analyticsEvents.inquirySubmission,
  inquiry_form_error: analyticsEvents.inquiryFormError,
}

/** Primary conversion — successful inquiry form submit */
export function trackInquirySubmit(params: InquirySubmitParams): void {
  trackEvent(analyticsEvents.inquirySubmission, {
    event_category: analyticsCategories.conversion,
    lead_source: params.lead_source,
    page_path: params.page_path,
  })
}

/** @alias trackInquirySubmit */
export const trackInquirySubmission = trackInquirySubmit

export function trackInquiryEvent(event: InquiryAnalyticsEvent): void {
  if (typeof window === "undefined") return

  const params = {
    lead_source: event.leadSource,
    page_path: event.pagePath,
  }

  if (event.name === "inquiry_form_success") {
    trackInquirySubmit({
      lead_source: event.leadSource,
      page_path: event.pagePath,
    })
    return
  }

  trackEvent(inquiryEventMap[event.name], {
    event_category: analyticsCategories.inquiry,
    ...params,
  })
}
