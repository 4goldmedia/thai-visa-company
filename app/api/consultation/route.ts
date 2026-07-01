import { NextResponse } from "next/server"

import {
  createConsultationAirtableRecord,
  getConsultationAirtableConfig,
  toConsultationAirtableRecordFields,
} from "@/lib/forms/consultation/airtable"
import { parseConsultationRequestBody } from "@/lib/forms/consultation/parse-request"
import type {
  ConsultationApiErrorResponse,
  ConsultationApiSuccessResponse,
} from "@/lib/forms/consultation/types"
import { INQUIRY_API_MAX_BODY_BYTES } from "@/lib/forms/inquiry/constants"
import { validateConsultationInquiryForm } from "@/lib/forms/inquiry/validation"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const JSON_CONTENT_TYPE = "application/json"

function jsonSuccess(): NextResponse<ConsultationApiSuccessResponse> {
  return NextResponse.json(
    { success: true },
    {
      status: 200,
      headers: { "Cache-Control": "no-store" },
    },
  )
}

function jsonError(
  message: string,
  status: number,
): NextResponse<ConsultationApiErrorResponse> {
  return NextResponse.json(
    { success: false, message },
    {
      status,
      headers: { "Cache-Control": "no-store" },
    },
  )
}

function methodNotAllowed(): NextResponse<ConsultationApiErrorResponse> {
  return jsonError("Method not allowed.", 405)
}

function isJsonRequest(request: Request): boolean {
  const contentType = request.headers.get("content-type") ?? ""
  return contentType.toLowerCase().includes(JSON_CONTENT_TYPE)
}

async function readJsonBody(request: Request): Promise<
  | { ok: true; body: unknown }
  | { ok: false; response: NextResponse<ConsultationApiErrorResponse> }
> {
  const contentLength = request.headers.get("content-length")
  if (contentLength) {
    const size = Number.parseInt(contentLength, 10)
    if (!Number.isNaN(size) && size > INQUIRY_API_MAX_BODY_BYTES) {
      return {
        ok: false,
        response: jsonError("Request body is too large.", 413),
      }
    }
  }

  let raw: string
  try {
    raw = await request.text()
  } catch {
    return {
      ok: false,
      response: jsonError("Could not read the request body.", 400),
    }
  }

  if (raw.length > INQUIRY_API_MAX_BODY_BYTES) {
    return {
      ok: false,
      response: jsonError("Request body is too large.", 413),
    }
  }

  if (!raw.trim()) {
    return {
      ok: false,
      response: jsonError("Request body is required.", 400),
    }
  }

  try {
    return { ok: true, body: JSON.parse(raw) as unknown }
  } catch {
    return {
      ok: false,
      response: jsonError("Request body must be valid JSON.", 400),
    }
  }
}

export async function POST(request: Request) {
  if (!isJsonRequest(request)) {
    return jsonError(
      `Content-Type must include ${JSON_CONTENT_TYPE}.`,
      415,
    )
  }

  const parsedBody = await readJsonBody(request)
  if (!parsedBody.ok) {
    return parsedBody.response
  }

  const parsed = parseConsultationRequestBody(parsedBody.body)
  if (!parsed.ok) {
    return jsonError(parsed.message, 400)
  }

  const validationErrors = validateConsultationInquiryForm(parsed.data.values)
  if (validationErrors) {
    return jsonError("Please complete all required fields.", 400)
  }

  const config = getConsultationAirtableConfig()
  if (!config) {
    return jsonError(
      "Consultation submissions are temporarily unavailable.",
      500,
    )
  }

  const fields = toConsultationAirtableRecordFields(
    parsed.data.values,
    parsed.data.sourceUrl,
  )

  try {
    await createConsultationAirtableRecord(config, fields)
  } catch {
    return jsonError("Failed to save your consultation request.", 500)
  }

  return jsonSuccess()
}

export async function GET() {
  return methodNotAllowed()
}

export async function PUT() {
  return methodNotAllowed()
}

export async function PATCH() {
  return methodNotAllowed()
}

export async function DELETE() {
  return methodNotAllowed()
}
