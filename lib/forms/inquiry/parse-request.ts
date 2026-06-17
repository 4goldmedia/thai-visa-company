import { inquiryLeadSources } from "@/lib/forms/inquiry/constants"
import {
  inquiryFieldNames,
  type InquiryFormValues,
  type InquiryLeadSource,
} from "@/lib/forms/inquiry/types"

export type InquiryApiRequestMeta = {
  leadSource: InquiryLeadSource
  pagePath?: string
}

export type ParseInquiryApiBodyResult =
  | { ok: true; values: InquiryFormValues; meta: InquiryApiRequestMeta }
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

function isLeadSource(value: string): value is InquiryLeadSource {
  return (inquiryLeadSources as readonly string[]).includes(value)
}

/**
 * Normalize and coerce a JSON body into inquiry form values.
 * Does not validate business rules  -  use `validateInquiryForm` after parsing.
 */
export function parseInquiryApiBody(body: unknown): ParseInquiryApiBodyResult {
  if (!isRecord(body)) {
    return { ok: false, message: "Request body must be a JSON object." }
  }

  const name = readString(body, inquiryFieldNames.name)
  const email = readString(body, inquiryFieldNames.email)
  const nationality = readString(body, inquiryFieldNames.nationality)
  const visaInterest = readString(body, inquiryFieldNames.visaInterest)
  const currentLocation = readString(body, inquiryFieldNames.currentLocation)
  const message = readString(body, inquiryFieldNames.message)

  if (
    name === undefined ||
    nationality === undefined ||
    visaInterest === undefined ||
    currentLocation === undefined ||
    message === undefined
  ) {
    return {
      ok: false,
      message:
        "Missing or invalid fields. Send name, nationality, visaInterest, currentLocation, and message as strings.",
    }
  }

  const leadSourceRaw = readString(body, "leadSource") ?? "contact-page"
  if (!isLeadSource(leadSourceRaw)) {
    return { ok: false, message: "Invalid leadSource." }
  }

  const pagePath = readString(body, "pagePath")
  if (pagePath !== undefined && pagePath.length > 256) {
    return { ok: false, message: "pagePath is too long." }
  }

  const values: InquiryFormValues = {
    name,
    email: email ?? "",
    nationality,
    visaInterest: visaInterest as InquiryFormValues["visaInterest"],
    currentLocation,
    message,
  }

  return {
    ok: true,
    values,
    meta: {
      leadSource: leadSourceRaw,
      pagePath: pagePath?.trim() || undefined,
    },
  }
}
