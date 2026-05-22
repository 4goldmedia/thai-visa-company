import { inquiryFieldNames, type InquiryFieldName } from "@/lib/forms/inquiry/types"

/** Stable tab/focus order for validation feedback */
export const inquiryFieldOrder: readonly InquiryFieldName[] = [
  inquiryFieldNames.name,
  inquiryFieldNames.nationality,
  inquiryFieldNames.visaInterest,
  inquiryFieldNames.currentLocation,
  inquiryFieldNames.message,
] as const

/** DOM id suffixes — must match `InquiryForm` field `id` props */
export const inquiryFieldElementId: Record<InquiryFieldName, string> = {
  [inquiryFieldNames.name]: "name",
  [inquiryFieldNames.nationality]: "nationality",
  [inquiryFieldNames.visaInterest]: "visa-interest",
  [inquiryFieldNames.currentLocation]: "location",
  [inquiryFieldNames.message]: "message",
}
