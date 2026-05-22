import { INQUIRY_API_MAX_BODY_BYTES } from "@/lib/forms/inquiry/constants"
import { processInquirySubmission } from "@/lib/forms/inquiry/handler"
import { parseInquiryApiBody } from "@/lib/forms/inquiry/parse-request"
import {
  jsonError,
  jsonSuccess,
} from "@/lib/api/json-response"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const JSON_CONTENT_TYPE = "application/json"

function isJsonRequest(request: Request): boolean {
  const contentType = request.headers.get("content-type") ?? ""
  return contentType.toLowerCase().includes(JSON_CONTENT_TYPE)
}

async function readJsonBody(request: Request): Promise<
  | { ok: true; body: unknown }
  | { ok: false; response: ReturnType<typeof jsonError> }
> {
  const contentLength = request.headers.get("content-length")
  if (contentLength) {
    const size = Number.parseInt(contentLength, 10)
    if (!Number.isNaN(size) && size > INQUIRY_API_MAX_BODY_BYTES) {
      return {
        ok: false,
        response: jsonError(
          "PAYLOAD_TOO_LARGE",
          "Request body is too large.",
          { status: 413 },
        ),
      }
    }
  }

  let raw: string
  try {
    raw = await request.text()
  } catch {
    return {
      ok: false,
      response: jsonError(
        "INVALID_BODY",
        "Could not read the request body.",
        { status: 400 },
      ),
    }
  }

  if (raw.length > INQUIRY_API_MAX_BODY_BYTES) {
    return {
      ok: false,
      response: jsonError(
        "PAYLOAD_TOO_LARGE",
        "Request body is too large.",
        { status: 413 },
      ),
    }
  }

  if (!raw.trim()) {
    return {
      ok: false,
      response: jsonError(
        "INVALID_BODY",
        "Request body is required.",
        { status: 400 },
      ),
    }
  }

  try {
    return { ok: true, body: JSON.parse(raw) as unknown }
  } catch {
    return {
      ok: false,
      response: jsonError(
        "INVALID_JSON",
        "Request body must be valid JSON.",
        { status: 400 },
      ),
    }
  }
}

export async function POST(request: Request) {
  if (!isJsonRequest(request)) {
    return jsonError(
      "UNSUPPORTED_MEDIA_TYPE",
      `Content-Type must include ${JSON_CONTENT_TYPE}.`,
      { status: 415 },
    )
  }

  const parsedBody = await readJsonBody(request)
  if (!parsedBody.ok) {
    return parsedBody.response
  }

  const parsed = parseInquiryApiBody(parsedBody.body)
  if (!parsed.ok) {
    return jsonError("INVALID_BODY", parsed.message, { status: 400 })
  }

  const result = await processInquirySubmission({
    values: parsed.values,
    leadSource: parsed.meta.leadSource,
    pagePath: parsed.meta.pagePath,
  })

  if (!result.ok) {
    if (result.kind === "validation") {
      return jsonError("VALIDATION", result.message, {
        status: 400,
        fields: result.fields,
      })
    }

    const isConfig =
      result.message.includes("temporarily unavailable") ||
      result.message.includes("not configured")

    return jsonError(
      "SERVICE_UNAVAILABLE",
      result.message,
      { status: isConfig ? 503 : 502 },
    )
  }

  return jsonSuccess(
    {
      id: result.id,
      ...(result.skipped ? { skipped: true as const } : {}),
    },
    { status: 201 },
  )
}

export async function GET() {
  return jsonError(
    "METHOD_NOT_ALLOWED",
    "Use POST to submit an inquiry.",
    { status: 405 },
  )
}

export async function PUT() {
  return GET()
}

export async function PATCH() {
  return GET()
}

export async function DELETE() {
  return GET()
}
