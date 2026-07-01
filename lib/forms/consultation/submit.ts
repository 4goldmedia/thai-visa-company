import type {
  ConsultationApiErrorResponse,
  ConsultationApiPayload,
  ConsultationApiSuccessResponse,
} from "@/lib/forms/consultation/types"

export type SubmitConsultationResult =
  | { ok: true }
  | { ok: false; message: string }

const DEFAULT_ERROR_MESSAGE =
  "Something went wrong. Please try again or contact us via LINE or WhatsApp."

export async function submitConsultation(
  payload: ConsultationApiPayload,
): Promise<SubmitConsultationResult> {
  try {
    const response = await fetch("/api/consultation", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      credentials: "same-origin",
    })

    let body: ConsultationApiSuccessResponse | ConsultationApiErrorResponse
    try {
      body = (await response.json()) as
        | ConsultationApiSuccessResponse
        | ConsultationApiErrorResponse
    } catch {
      return { ok: false, message: DEFAULT_ERROR_MESSAGE }
    }

    if (!response.ok || !("success" in body) || body.success !== true) {
      const message =
        "success" in body && body.success === false && body.message
          ? body.message
          : DEFAULT_ERROR_MESSAGE
      return { ok: false, message }
    }

    return { ok: true }
  } catch {
    return { ok: false, message: DEFAULT_ERROR_MESSAGE }
  }
}
