/** GA4 event names — single source for reporting */
export const analyticsEvents = {
  pageView: "page_view",
  lineClick: "line_click",
  whatsappClick: "whatsapp_click",
  inquirySubmission: "inquiry_submission",
  inquiryFormView: "inquiry_form_view",
  inquiryFormStart: "inquiry_form_start",
  inquiryFormSubmit: "inquiry_form_submit",
  inquiryFormError: "inquiry_form_error",
  visaPageCtaClick: "visa_page_cta_click",
  articleCtaClick: "article_cta_click",
  pageCtaClick: "page_cta_click",
} as const

export type AnalyticsEventName =
  (typeof analyticsEvents)[keyof typeof analyticsEvents]

/** GA4 `event_category` values */
export const analyticsCategories = {
  contact: "contact",
  conversion: "conversion",
  inquiry: "inquiry",
  cta: "cta",
} as const
