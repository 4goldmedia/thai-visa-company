import type { InquiryVisaInterest } from "@/lib/forms/inquiry/visa-options"

/** Where the inquiry originated — maps to Airtable `Lead Source` */
export type InquiryLeadSource =
  | "homepage"
  | "visa-page"
  | "resource-article"
  | "contact-page"
  | "footer"
  | "other"

/** Canonical field names — stable for Airtable, analytics, and automation */
export const inquiryFieldNames = {
  name: "name",
  nationality: "nationality",
  visaInterest: "visaInterest",
  currentLocation: "currentLocation",
  message: "message",
} as const

export type InquiryFieldName =
  (typeof inquiryFieldNames)[keyof typeof inquiryFieldNames]

export type InquiryFormValues = {
  name: string
  nationality: string
  visaInterest: InquiryVisaInterest | ""
  currentLocation: string
  message: string
}

export type InquiryFormPayload = InquiryFormValues & {
  visaInterest: InquiryVisaInterest
  leadSource: InquiryLeadSource
  /** ISO 8601 */
  submittedAt: string
  /** App path when submitted, e.g. `/visas/retirement` */
  pagePath?: string
}

export type InquiryFormStatus = "idle" | "submitting" | "success" | "error"

export type InquiryFormResult =
  | { ok: true; id?: string }
  | { ok: false; message: string; fields?: InquiryFormErrors }

export type InquiryFormErrors = Partial<Record<InquiryFieldName, string>>
