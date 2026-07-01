import "server-only"

import type { InquiryFormValues } from "@/lib/forms/inquiry/types"
import { consultationVisaOptions } from "@/lib/forms/inquiry/visa-options"
import type { InquiryVisaInterest } from "@/lib/forms/inquiry/visa-options"

const AIRTABLE_API_ORIGIN = "https://api.airtable.com/v0"

export const consultationAirtableFields = {
  fullName: "Full Name",
  email: "Email",
  nationality: "Nationality",
  helpWith: "Help With",
  message: "Message",
  sourceUrl: "Source URL",
  status: "Status",
  submittedAt: "Submitted At",
} as const

/** Server-controlled pipeline value for new consultation leads */
export const consultationAirtableNewStatus = "New" as const

export type ConsultationAirtableConfig = {
  apiToken: string
  baseId: string
  tableName: string
}

export function getConsultationAirtableConfig(): ConsultationAirtableConfig | null {
  const apiToken = process.env.AIRTABLE_API_TOKEN?.trim()
  const baseId = process.env.AIRTABLE_BASE_ID?.trim()
  const tableName = process.env.AIRTABLE_TABLE_NAME?.trim()

  if (!apiToken || !baseId || !tableName) {
    return null
  }

  return { apiToken, baseId, tableName }
}

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
    [consultationAirtableFields.helpWith]: formatHelpWith(visaInterest),
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
    console.error("Airtable error:", { type: "network", cause })
    throw new Error("Airtable request failed.")
  }

  if (!response.ok) {
    const responseText = await response.text()
    let airtableResponse: unknown = responseText

    if (responseText) {
      try {
        airtableResponse = JSON.parse(responseText) as unknown
      } catch {
        // keep raw text
      }
    }

    console.error("Airtable error:", {
      status: response.status,
      response: airtableResponse,
    })
    throw new Error("Airtable API error.")
  }
}
