import "server-only"

import {
  createLeadFromInquiry,
  type CreateLeadOptions,
} from "@/lib/airtable/leads"
import type { InquiryFormPayload } from "@/lib/forms/inquiry/types"
import type { AirtableOperationResult, AirtableMutationResult } from "@/lib/airtable/types"

export type SubmitInquiryToAirtableOptions = CreateLeadOptions

export type SubmitInquiryToAirtableResult =
  | { ok: true; id?: string; skipped?: boolean }
  | { ok: false; message: string }

/**
 * Persist an inquiry form submission to the Airtable Leads table.
 * Server-only — call from Server Actions or Route Handlers.
 */
export async function submitInquiryToAirtable(
  payload: InquiryFormPayload,
  options: SubmitInquiryToAirtableOptions = { allowUnconfigured: true },
): Promise<SubmitInquiryToAirtableResult> {
  const result: AirtableOperationResult<AirtableMutationResult> =
    await createLeadFromInquiry(payload, options)

  if (!result.ok) {
    return { ok: false, message: result.message }
  }

  return {
    ok: true,
    id: result.data.recordId,
    skipped: result.skipped,
  }
}
