import "server-only"

import {
  getAirtableEnvConfig,
  isAirtableConfigured,
} from "@/lib/airtable/config"
import { getAirtableClient } from "@/lib/airtable/client"
import { AirtableError, toPublicAirtableMessage } from "@/lib/airtable/errors"
import type { InquiryFormPayload } from "@/lib/forms/inquiry/types"
import { inquiryVisaOptions } from "@/lib/forms/inquiry/visa-options"
import {
  airtableLeadFields,
  type AirtableLeadCreateInput,
  type AirtableLeadStatus,
  type AirtableLeadUpdateInput,
  type AirtableMutationResult,
  type AirtableOperationResult,
  type AirtableRecordFields,
} from "@/lib/airtable/types"

// -----------------------------------------------------------------------------
// Field mapping
// -----------------------------------------------------------------------------

const EMPTY_PLACEHOLDER = "—"

const leadSourceLabels: Record<InquiryFormPayload["leadSource"], string> = {
  homepage: "Homepage",
  "visa-page": "Visa Pages",
  "resource-article": "Blog Articles",
  "contact-page": "Contact Page",
  footer: "Footer",
  other: "Website",
}

function formatVisaInterest(value: InquiryFormPayload["visaInterest"]): string {
  return (
    inquiryVisaOptions.find((option) => option.value === value)?.label ?? value
  )
}

function formatLeadSource(source: InquiryFormPayload["leadSource"]): string {
  return leadSourceLabels[source] ?? "Website"
}

function toAirtableFields(
  input: AirtableLeadCreateInput,
): AirtableRecordFields {
  const fields: AirtableRecordFields = {
    [airtableLeadFields.fullName]: input.fullName,
    [airtableLeadFields.nationality]: input.nationality || EMPTY_PLACEHOLDER,
    [airtableLeadFields.visaTypeInterest]: input.visaTypeInterest,
    [airtableLeadFields.currentCountry]: input.currentCountry || EMPTY_PLACEHOLDER,
    [airtableLeadFields.leadSource]: input.leadSource,
    [airtableLeadFields.inquiryMessage]: input.inquiryMessage || EMPTY_PLACEHOLDER,
    [airtableLeadFields.status]: input.status ?? "New Inquiry",
    [airtableLeadFields.dateCreated]: input.dateCreated ?? new Date().toISOString(),
  }

  if (input.email) fields[airtableLeadFields.email] = input.email
  if (input.phone) fields[airtableLeadFields.phone] = input.phone
  if (input.lineId) fields[airtableLeadFields.lineId] = input.lineId
  if (input.whatsapp) fields[airtableLeadFields.whatsapp] = input.whatsapp
  if (input.notes) fields[airtableLeadFields.notes] = input.notes

  return fields
}

export function mapInquiryToLeadInput(
  payload: InquiryFormPayload,
): AirtableLeadCreateInput {
  const notes = payload.pagePath
    ? `Submitted from: ${payload.pagePath}`
    : undefined

  return {
    fullName: payload.name,
    nationality: payload.nationality,
    visaTypeInterest: formatVisaInterest(payload.visaInterest),
    currentCountry: payload.currentLocation,
    leadSource: formatLeadSource(payload.leadSource),
    inquiryMessage: payload.message,
    status: "New Inquiry",
    dateCreated: payload.submittedAt,
    notes,
  }
}

/** @deprecated Use `mapInquiryToLeadInput` — kept for backward compatibility */
export function toAirtableLeadRecord(payload: InquiryFormPayload) {
  const input = mapInquiryToLeadInput(payload)
  return toAirtableFields(input)
}

// -----------------------------------------------------------------------------
// CRUD
// -----------------------------------------------------------------------------

export type CreateLeadOptions = {
  /** When true, returns ok without calling Airtable (local dev without credentials) */
  allowUnconfigured?: boolean
}

export async function createLead(
  input: AirtableLeadCreateInput,
  options: CreateLeadOptions = {},
): Promise<AirtableOperationResult<AirtableMutationResult>> {
  if (!isAirtableConfigured()) {
    if (options.allowUnconfigured) {
      if (process.env.NODE_ENV === "development") {
        console.info("[airtable] createLead skipped — not configured", input)
      }
      return { ok: true, data: { recordId: "dev-stub" }, skipped: true }
    }
    return {
      ok: false,
      message: toPublicAirtableMessage(
        new AirtableError("Airtable not configured.", { code: "CONFIG" }),
      ),
    }
  }

  try {
    const config = getAirtableEnvConfig()!
    const client = getAirtableClient()
    const fields = toAirtableFields(input)
    const response = await client.createRecord(config.leadsTableName, fields)
    const record = response.records[0]

    if (!record?.id) {
      throw new AirtableError("Airtable did not return a record id.", {
        code: "API",
        details: response,
      })
    }

    return {
      ok: true,
      data: {
        recordId: record.id,
        createdTime: record.createdTime,
      },
    }
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[airtable] createLead failed", error)
    }
    return { ok: false, message: toPublicAirtableMessage(error) }
  }
}

export async function createLeadFromInquiry(
  payload: InquiryFormPayload,
  options?: CreateLeadOptions,
): Promise<AirtableOperationResult<AirtableMutationResult>> {
  return createLead(mapInquiryToLeadInput(payload), options)
}

export type UpdateLeadInput = {
  recordId: string
  fields: AirtableLeadUpdateInput
}

export async function updateLead(
  input: UpdateLeadInput,
): Promise<AirtableOperationResult<AirtableMutationResult>> {
  if (!isAirtableConfigured()) {
    return {
      ok: false,
      message: toPublicAirtableMessage(
        new AirtableError("Airtable not configured.", { code: "CONFIG" }),
      ),
    }
  }

  if (!input.recordId?.trim()) {
    return {
      ok: false,
      message: toPublicAirtableMessage(
        new AirtableError("Record id is required.", { code: "VALIDATION" }),
      ),
    }
  }

  try {
    const config = getAirtableEnvConfig()!
    const client = getAirtableClient()
    const response = await client.updateRecord(
      config.leadsTableName,
      input.recordId,
      input.fields,
    )
    const record = response.records[0]

    return {
      ok: true,
      data: {
        recordId: record?.id ?? input.recordId,
        createdTime: record?.createdTime,
      },
    }
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[airtable] updateLead failed", error)
    }
    return { ok: false, message: toPublicAirtableMessage(error) }
  }
}

/** Convenience helper for status pipeline updates */
export async function updateLeadStatus(
  recordId: string,
  status: AirtableLeadStatus,
): Promise<AirtableOperationResult<AirtableMutationResult>> {
  return updateLead({
    recordId,
    fields: { [airtableLeadFields.status]: status },
  })
}
