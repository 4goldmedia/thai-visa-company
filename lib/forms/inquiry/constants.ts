/** Max JSON body size for inquiry API (bytes) */
export const INQUIRY_API_MAX_BODY_BYTES = 32_768

export const inquiryLeadSources = [
  "homepage",
  "consultation-page",
  "visa-page",
  "resource-article",
  "contact-page",
  "footer",
  "other",
] as const
