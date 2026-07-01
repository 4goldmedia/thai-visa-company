import type { InquiryVisaInterest } from "@/lib/forms/inquiry/visa-options"

/** JSON body for POST /api/consultation */
export const consultationApiFieldNames = {
  name: "name",
  email: "email",
  nationality: "nationality",
  visaInterest: "visaInterest",
  message: "message",
  sourceUrl: "sourceUrl",
} as const

export type ConsultationApiPayload = {
  name: string
  email: string
  nationality: string
  visaInterest: InquiryVisaInterest
  message: string
  sourceUrl: string
}

export type ConsultationApiSuccessResponse = {
  success: true
}

export type ConsultationApiErrorResponse = {
  success: false
  message: string
}
