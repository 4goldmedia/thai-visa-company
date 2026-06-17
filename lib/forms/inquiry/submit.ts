import type {
  InquiryFormErrors,
  InquiryFormPayload,
  InquiryFormResult,
} from "@/lib/forms/inquiry/types"

export type SubmitInquiryOptions = {
  /** Skip API submit when handling submission entirely in `onSubmit` */
  skipAirtable?: boolean
}

type InquiryApiSuccess = {
  ok: true
  data: { id: string; skipped?: boolean }
}

type InquiryApiFailure = {
  ok: false
  error: {
    code: string
    message: string
    fields?: InquiryFormErrors
  }
}

const DEFAULT_ERROR_MESSAGE =
  "Something went wrong. Please try again or message us on LINE or WhatsApp."

/**
 * Client-safe submission  -  POSTs to `/api/inquiry`.
 */
export async function submitInquiry(
  payload: InquiryFormPayload,
  options: SubmitInquiryOptions = {},
): Promise<InquiryFormResult> {
  if (options.skipAirtable) {
    return { ok: true }
  }

  try {
    const response = await fetch("/api/inquiry", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: payload.name,
        nationality: payload.nationality,
        visaInterest: payload.visaInterest,
        currentLocation: payload.currentLocation,
        message: payload.message,
        leadSource: payload.leadSource,
        pagePath: payload.pagePath,
      }),
      credentials: "same-origin",
    })

    let body: InquiryApiSuccess | InquiryApiFailure
    try {
      body = (await response.json()) as InquiryApiSuccess | InquiryApiFailure
    } catch {
      return { ok: false, message: DEFAULT_ERROR_MESSAGE }
    }

    if (!response.ok || !body.ok) {
      const message =
        !body.ok && body.error?.message
          ? body.error.message
          : DEFAULT_ERROR_MESSAGE
      const fields =
        !body.ok && body.error?.fields ? body.error.fields : undefined
      return { ok: false, message, fields }
    }

    return { ok: true, id: body.data.id }
  } catch {
    return { ok: false, message: DEFAULT_ERROR_MESSAGE }
  }
}
