export type AirtableErrorCode =
  | "CONFIG"
  | "NETWORK"
  | "API"
  | "VALIDATION"
  | "NOT_FOUND"

export class AirtableError extends Error {
  readonly name = "AirtableError"
  readonly code: AirtableErrorCode
  readonly status?: number
  readonly details?: unknown

  constructor(
    message: string,
    options: {
      code: AirtableErrorCode
      status?: number
      details?: unknown
      cause?: unknown
    },
  ) {
    super(message, { cause: options.cause })
    this.code = options.code
    this.status = options.status
    this.details = options.details
  }
}

export function isAirtableError(error: unknown): error is AirtableError {
  return error instanceof AirtableError
}

/** Safe message for API responses  -  never expose tokens or raw Airtable bodies */
export function toPublicAirtableMessage(error: unknown): string {
  if (error instanceof AirtableError) {
    if (error.code === "CONFIG") {
      return "Lead capture is temporarily unavailable. Please message us on LINE or WhatsApp."
    }
    return "We could not save your inquiry. Please try again or contact us on LINE or WhatsApp."
  }
  return "We could not save your inquiry. Please try again or contact us on LINE or WhatsApp."
}
