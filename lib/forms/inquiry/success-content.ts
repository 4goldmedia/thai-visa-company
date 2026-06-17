/** Canonical inquiry success copy  -  keep UI and analytics aligned */
export const inquirySuccessContent = {
  title: "We've received your inquiry",
  lead: "Our team will respond shortly - usually within one business day.",
  stepsHeading: "What happens next",
  steps: [
    "We review your details and visa interest.",
    "We reply on LINE, WhatsApp, or email with clear next steps.",
    "You decide how to proceed - there is no obligation to continue.",
  ] as const,
  supportHeading: "Fast support",
  supportLead: "Message us directly if you would like a quicker reply.",
  resetLabel: "Send another message",
} as const

/** Full message for screen readers on success */
export function getInquirySuccessAnnouncement(): string {
  const { title, lead, steps, supportLead } = inquirySuccessContent
  return [
    title,
    lead,
    ...steps,
    supportLead,
  ].join(" ")
}
