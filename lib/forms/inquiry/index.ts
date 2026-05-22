export {
  createInquiryFormDefaults,
} from "@/lib/forms/inquiry/defaults"
export {
  toAirtableLeadRecord,
  submitInquiryToAirtable,
} from "@/lib/forms/inquiry/airtable"
export type { AirtableLeadRecord } from "@/lib/forms/inquiry/airtable"
export {
  trackInquiryEvent,
  trackInquirySubmit,
} from "@/lib/analytics"
export type {
  InquiryAnalyticsEvent,
  InquiryAnalyticsEventName,
} from "@/lib/forms/inquiry/analytics"
export { submitInquiry } from "@/lib/forms/inquiry/submit"
export {
  inquiryFieldNames,
  type InquiryFieldName,
  type InquiryFormErrors,
  type InquiryFormPayload,
  type InquiryFormResult,
  type InquiryFormStatus,
  type InquiryFormValues,
  type InquiryLeadSource,
} from "@/lib/forms/inquiry/types"
export {
  defaultInquiryVisaInterest,
  inquiryVisaInterestValues,
  inquiryVisaOptions,
  type InquiryVisaInterest,
  type InquiryVisaOption,
} from "@/lib/forms/inquiry/visa-options"
export {
  toInquiryPayload,
  validateInquiryForm,
} from "@/lib/forms/inquiry/validation"
export {
  getInquirySuccessAnnouncement,
  inquirySuccessContent,
} from "@/lib/forms/inquiry/success-content"
