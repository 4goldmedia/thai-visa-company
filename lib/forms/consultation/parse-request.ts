import {
  consultationApiFieldNames,
  type ConsultationApiPayload,
} from "@/lib/forms/consultation/types"
import type { InquiryFormValues } from "@/lib/forms/inquiry/types"
import type { InquiryVisaInterest } from "@/lib/forms/inquiry/visa-options"

export type ParsedConsultationRequest = {
  values: InquiryFormValues
  sourceUrl: string
}

export type ParseConsultationRequestResult =
  | { ok: true; data: ParsedConsultationRequest }
  | { ok: false; message: string }

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}

function readString(
  record: Record<string, unknown>,
  key: string,
): string | undefined {
  const value = record[key]
  if (value === undefined || value === null) return undefined
  if (typeof value !== "string") return undefined
  return value
}

export function parseConsultationRequestBody(
  body: unknown,
): ParseConsultationRequestResult {
  if (!isRecord(body)) {
    return { ok: false, message: "Request body must be a JSON object." }
  }

  const name = readString(body, consultationApiFieldNames.name)
  const email = readString(body, consultationApiFieldNames.email)
  const nationality = readString(body, consultationApiFieldNames.nationality)
  const visaInterest = readString(body, consultationApiFieldNames.visaInterest)
  const message = readString(body, consultationApiFieldNames.message)
  const sourceUrl =
    readString(body, consultationApiFieldNames.sourceUrl)?.trim() ||
    "/consultation"

  if (
    name === undefined ||
    email === undefined ||
    nationality === undefined ||
    visaInterest === undefined ||
    message === undefined
  ) {
    return {
      ok: false,
      message: "Missing or invalid required fields.",
    }
  }

  if (sourceUrl.length > 256) {
    return { ok: false, message: "sourceUrl is too long." }
  }

  const values: InquiryFormValues = {
    name,
    email,
    nationality,
    visaInterest: visaInterest as InquiryFormValues["visaInterest"],
    currentLocation: "",
    message,
  }

  return {
    ok: true,
    data: {
      values,
      sourceUrl,
    },
  }
}

export function toConsultationApiPayload(
  values: InquiryFormValues,
  sourceUrl: string,
): ConsultationApiPayload {
  return {
    name: values.name.trim(),
    email: values.email.trim(),
    nationality: values.nationality.trim(),
    visaInterest: values.visaInterest as InquiryVisaInterest,
    message: values.message.trim(),
    sourceUrl,
  }
}
