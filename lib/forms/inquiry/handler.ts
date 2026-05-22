import "server-only"

import { submitInquiryToAirtable } from "@/lib/airtable"
import {
  toInquiryPayload,
  validateInquiryForm,
} from "@/lib/forms/inquiry/validation"
import type {
  InquiryFormErrors,
  InquiryFormValues,
  InquiryLeadSource,
} from "@/lib/forms/inquiry/types"

export type ProcessInquirySubmissionInput = {
  values: InquiryFormValues
  leadSource: InquiryLeadSource
  pagePath?: string
}

export type ProcessInquirySubmissionResult =
  | { ok: true; id: string; skipped?: boolean }
  | {
      ok: false
      kind: "validation"
      message: string
      fields: InquiryFormErrors
    }
  | { ok: false; kind: "crm"; message: string }

const VALIDATION_SUMMARY =
  "Please check the highlighted fields and try again."

/**
 * Shared server pipeline for inquiry submissions (API route + Server Actions).
 */
export async function processInquirySubmission(
  input: ProcessInquirySubmissionInput,
): Promise<ProcessInquirySubmissionResult> {
  const fieldErrors = validateInquiryForm(input.values)
  if (fieldErrors) {
    return {
      ok: false,
      kind: "validation",
      message: VALIDATION_SUMMARY,
      fields: fieldErrors,
    }
  }

  const payload = toInquiryPayload(input.values, {
    leadSource: input.leadSource,
    pagePath: input.pagePath,
  })

  const allowUnconfigured = process.env.NODE_ENV !== "production"
  const airtable = await submitInquiryToAirtable(payload, {
    allowUnconfigured,
  })

  if (!airtable.ok) {
    return { ok: false, kind: "crm", message: airtable.message }
  }

  return {
    ok: true,
    id: airtable.id ?? "unknown",
    skipped: airtable.skipped,
  }
}
