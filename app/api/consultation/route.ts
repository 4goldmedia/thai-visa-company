import { NextResponse } from "next/server"

import {
  createConsultationAirtableRecord,
  getConsultationAirtableConfig,
  getConsultationAirtableConfigDiagnostics,
  toConsultationAirtableRecordFields,
} from "@/lib/forms/consultation/airtable"
import {
  logConsultationError,
  logConsultationInfo,
} from "@/lib/forms/consultation/logging"
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
      logConsultationError("Request body too large", { contentLength: size })
      return {
        ok: false,
        response: jsonError("Request body is too large.", 413),
      }
    }
  }

  let raw: string
  try {
    raw = await request.text()
  } catch (cause) {
    logConsultationError("Failed to read request body", {
      cause:
        cause instanceof Error
          ? { name: cause.name, message: cause.message }
          : cause,
    })
    return {
      ok: false,
      response: jsonError("Could not read the request body.", 400),
    }
  }

  if (raw.length > INQUIRY_API_MAX_BODY_BYTES) {
    logConsultationError("Request body too large", { bytes: raw.length })
    return {
      ok: false,
      response: jsonError("Request body is too large.", 413),
    }
  }

  if (!raw.trim()) {
    logConsultationError("Request body empty")
    return {
      ok: false,
      response: jsonError("Request body is required.", 400),
    }
  }

  try {
    return { ok: true, body: JSON.parse(raw) as unknown }
  } catch (cause) {
    logConsultationError("Request body is not valid JSON", {
      cause:
        cause instanceof Error
          ? { name: cause.name, message: cause.message }
          : cause,
    })
    return {
      ok: false,
      response: jsonError("Request body must be valid JSON.", 400),
    }
  }
}

export async function POST(request: Request) {
  logConsultationInfo("Incoming consultation POST received", {
    contentType: request.headers.get("content-type"),
    vercelEnv: process.env.VERCEL_ENV ?? "unknown",
  })

  try {
    if (!isJsonRequest(request)) {
      logConsultationError("Unsupported content type", {
        contentType: request.headers.get("content-type"),
      })
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
      logConsultationError("Request parse failed", { message: parsed.message })
      return jsonError(parsed.message, 400)
    }

    const validationErrors = validateConsultationInquiryForm(parsed.data.values)
    if (validationErrors) {
      logConsultationError("Validation failed", { fields: validationErrors })
      return jsonError("Please complete all required fields.", 400)
    }

    logConsultationInfo("Validation passed", {
      sourceUrl: parsed.data.sourceUrl,
      visaInterest: parsed.data.values.visaInterest,
    })

    const configDiagnostics = getConsultationAirtableConfigDiagnostics()
    if (!configDiagnostics.configured) {
      logConsultationError("Airtable configuration missing", {
        missingEnvironmentVariables: configDiagnostics.missing,
        present: configDiagnostics.present,
        summary: configDiagnostics.summary,
      })
      return jsonError(
        "Consultation submissions are temporarily unavailable.",
        500,
      )
    }

    const config = getConsultationAirtableConfig()
    if (!config) {
      logConsultationError("Airtable configuration unavailable after diagnostics passed")
      return jsonError(
        "Consultation submissions are temporarily unavailable.",
        500,
      )
    }

    logConsultationInfo("Airtable configuration loaded", configDiagnostics.summary)

    const fields = toConsultationAirtableRecordFields(
      parsed.data.values,
      parsed.data.sourceUrl,
    )

    await createConsultationAirtableRecord(config, fields)

    logConsultationInfo("Consultation submission saved to Airtable")
    return jsonSuccess()
  } catch (error) {
    logConsultationError("Unexpected consultation API error", {
      error:
        error instanceof Error
          ? { name: error.name, message: error.message, stack: error.stack }
          : error,
    })
    return jsonError("Failed to save your consultation request.", 500)
  }
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
