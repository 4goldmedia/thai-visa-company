import "server-only"

import { consultationAirtableFields } from "@/lib/forms/consultation/fields"

const LOG_PREFIX = "[consultation-api]"

export function logConsultationInfo(
  message: string,
  details?: Record<string, unknown>,
): void {
  if (details) {
    console.log(LOG_PREFIX, message, details)
    return
  }
  console.log(LOG_PREFIX, message)
}

export function logConsultationError(
  message: string,
  details?: Record<string, unknown>,
): void {
  if (details) {
    console.error(LOG_PREFIX, message, details)
    return
  }
  console.error(LOG_PREFIX, message)
}

/** Log Airtable record fields without exposing full message body or email */
export function sanitizeAirtableFieldsForLog(
  fields: Record<string, string>,
): Record<string, unknown> {
  const email = fields[consultationAirtableFields.email] ?? ""
  const atIndex = email.indexOf("@")

  return {
    fieldNames: Object.keys(fields),
    expectedFieldNames: Object.values(consultationAirtableFields),
    fullNameLength: fields[consultationAirtableFields.fullName]?.length ?? 0,
    email:
      atIndex > 0
        ? `${email.slice(0, 1)}***${email.slice(atIndex)}`
        : email
          ? "[redacted]"
          : "",
    nationality: fields[consultationAirtableFields.nationality] ?? "",
    visaType: fields[consultationAirtableFields.visaType] ?? "",
    messageLength: fields[consultationAirtableFields.message]?.length ?? 0,
    sourceUrl: fields[consultationAirtableFields.sourceUrl] ?? "",
    status: fields[consultationAirtableFields.status] ?? "",
    submittedAt: fields[consultationAirtableFields.submittedAt] ?? "",
  }
}

export function buildAirtableRequestLog(
  config: { baseId: string; tableName: string },
  fields: Record<string, string>,
): Record<string, unknown> {
  const tableSegment = encodeURIComponent(config.tableName)

  return {
    method: "POST",
    endpoint: `https://api.airtable.com/v0/${config.baseId}/${tableSegment}`,
    baseId: config.baseId,
    tableName: config.tableName,
    headers: {
      Authorization: "Bearer [redacted]",
      "Content-Type": "application/json",
    },
    body: {
      records: [{ fields: sanitizeAirtableFieldsForLog(fields) }],
      typecast: true,
    },
  }
}

type AirtableErrorAnalysis = {
  summary: string
  errorType: string | null
  errorMessage: string | null
  unknownFieldNames: string[]
  invalidSelectValue: string | null
  isUnknownFieldError: boolean
  isInvalidSelectError: boolean
  isDateParseError: boolean
}

function readAirtableErrorMessage(body: unknown): string | null {
  if (typeof body !== "object" || body === null) return null
  const error = (body as { error?: { message?: string; type?: string } }).error
  return error?.message ?? null
}

function readAirtableErrorType(body: unknown): string | null {
  if (typeof body !== "object" || body === null) return null
  const error = (body as { error?: { type?: string } }).error
  return error?.type ?? null
}

export function analyzeAirtableError(
  body: unknown,
  status: number,
): AirtableErrorAnalysis {
  const errorMessage = readAirtableErrorMessage(body)
  const errorType = readAirtableErrorType(body)
  const message = errorMessage ?? `HTTP ${status}`

  const unknownFieldNames: string[] = []
  const unknownFieldMatch = message.match(/Unknown field name: "([^"]+)"/gi)
  if (unknownFieldMatch) {
    for (const match of unknownFieldMatch) {
      const name = match.match(/"([^"]+)"/)?.[1]
      if (name) unknownFieldNames.push(name)
    }
  }

  const invalidSelectMatch = message.match(
    /Insufficient permissions to create new select option "([^"]+)"/i,
  )
  const invalidSelectValue = invalidSelectMatch?.[1] ?? null

  const isUnknownFieldError =
    unknownFieldNames.length > 0 ||
    /unknown field/i.test(message) ||
    errorType === "UNKNOWN_FIELD_NAME"

  const isInvalidSelectError =
    Boolean(invalidSelectValue) ||
    /select option/i.test(message) ||
    errorType === "INVALID_MULTIPLE_CHOICE_OPTIONS"

  const isDateParseError =
    /cannot parse date/i.test(message) ||
    /invalid date/i.test(message) ||
    errorType === "INVALID_VALUE_FOR_COLUMN"

  let summary = message
  if (isUnknownFieldError) {
    summary = `Airtable rejected one or more field names. Compare expected columns (${Object.values(consultationAirtableFields).join(", ")}) with your table schema.`
  } else if (isInvalidSelectError) {
    summary =
      "Airtable rejected the Status value. Ensure the Status single-select includes a 'New' option."
  } else if (isDateParseError) {
    summary =
      "Airtable rejected the Submitted At value. Confirm the column type accepts ISO date-time strings."
  }

  return {
    summary,
    errorType,
    errorMessage,
    unknownFieldNames,
    invalidSelectValue,
    isUnknownFieldError,
    isInvalidSelectError,
    isDateParseError,
  }
}
