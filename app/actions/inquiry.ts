"use server"

import { processInquirySubmission } from "@/lib/forms/inquiry/handler"
import type {
  InquiryFormResult,
  InquiryFormValues,
  InquiryLeadSource,
} from "@/lib/forms/inquiry/types"

export type SubmitInquiryActionInput = {
  values: InquiryFormValues
  leadSource: InquiryLeadSource
  pagePath?: string
}

/**
 * Server action entry point for InquiryForm.
 */
export async function submitInquiryAction(
  input: SubmitInquiryActionInput,
): Promise<InquiryFormResult> {
  const result = await processInquirySubmission(input)

  if (!result.ok) {
    return {
      ok: false,
      message: result.message,
      ...(result.kind === "validation" ? { fields: result.fields } : {}),
    }
  }

  return { ok: true, id: result.id }
}
