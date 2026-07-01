import "server-only"

import {
  getConsultationAirtableConfig,
  getConsultationAirtableConfigDiagnostics,
  type ConsultationAirtableConfig,
} from "@/lib/forms/consultation/config"
import {
  consultationAirtableFields,
  consultationAirtableNewStatus,
} from "@/lib/forms/consultation/fields"
import {
  analyzeAirtableError,
  buildAirtableRequestLog,
  logConsultationError,
  logConsultationInfo,
} from "@/lib/forms/consultation/logging"
import type { InquiryFormValues } from "@/lib/forms/inquiry/types"
import { consultationVisaOptions } from "@/lib/forms/inquiry/visa-options"
import type { InquiryVisaInterest } from "@/lib/forms/inquiry/visa-options"

const AIRTABLE_API_ORIGIN = "https://api.airtable.com/v0"

export { getConsultationAirtableConfig, getConsultationAirtableConfigDiagnostics }
export type { ConsultationAirtableConfig }
export { consultationAirtableFields, consultationAirtableNewStatus }

function formatHelpWith(visaInterest: InquiryVisaInterest): string {
  return (
    consultationVisaOptions.find((option) => option.value === visaInterest)
      ?.label ?? visaInterest
  )
}

export function toConsultationAirtableRecordFields(
  values: InquiryFormValues,
  sourceUrl: string,
): Record<string, string> {
  const visaInterest = values.visaInterest as InquiryVisaInterest

  return {
    [consultationAirtableFields.fullName]: values.name.trim(),
    [consultationAirtableFields.email]: values.email.trim(),
    [consultationAirtableFields.nationality]: values.nationality.trim(),
    [consultationAirtableFields.visaType]: formatHelpWith(visaInterest),
    [consultationAirtableFields.message]: values.message.trim(),
    [consultationAirtableFields.sourceUrl]: sourceUrl,
    [consultationAirtableFields.status]: consultationAirtableNewStatus,
    [consultationAirtableFields.submittedAt]: new Date().toISOString(),
  }
}

export async function createConsultationAirtableRecord(
  config: ConsultationAirtableConfig,
  fields: Record<string, string>,
): Promise<void> {
  const tableSegment = encodeURIComponent(config.tableName)
  const url = `${AIRTABLE_API_ORIGIN}/${config.baseId}/${tableSegment}`

  logConsultationInfo("Airtable request started", buildAirtableRequestLog(config, fields))

  let response: Response
  try {
    response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.apiToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [{ fields }],
        typecast: true,
      }),
      cache: "no-store",
    })
  } catch (cause) {
    logConsultationError("Airtable network error", {
      endpoint: url,
      cause:
        cause instanceof Error
          ? { name: cause.name, message: cause.message }
          : cause,
    })
    throw new Error("Airtable network error.")
  }

  const responseText = await response.text()
  let airtableResponse: unknown = responseText

  if (responseText) {
    try {
      airtableResponse = JSON.parse(responseText) as unknown
    } catch {
      // keep raw text
    }
  }

  logConsultationInfo("Airtable response received", {
    status: response.status,
    ok: response.ok,
    body: airtableResponse,
  })

  if (!response.ok) {
    const analysis = analyzeAirtableError(airtableResponse, response.status)

    logConsultationError("Airtable error", {
      httpStatus: response.status,
      response: airtableResponse,
      analysis,
      sentFieldNames: Object.keys(fields),
      expectedFieldNames: Object.values(consultationAirtableFields),
      ...(analysis.isUnknownFieldError
        ? {
            hint: "Check that every Airtable column name matches exactly, including spaces and capitalization.",
            unknownFieldNames: analysis.unknownFieldNames,
          }
        : {}),
      ...(analysis.isInvalidSelectError
        ? {
            hint: `Add '${consultationAirtableNewStatus}' to the Status single-select options in Airtable.`,
            invalidSelectValue: analysis.invalidSelectValue,
          }
        : {}),
      ...(analysis.isDateParseError
        ? {
            hint: "Confirm 'Submitted At' is a Date or Date and time field that accepts ISO 8601 values.",
            submittedAt: fields[consultationAirtableFields.submittedAt],
          }
        : {}),
    })

    throw new Error(analysis.summary)
  }
}
