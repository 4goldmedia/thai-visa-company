import { NextResponse } from "next/server"

export type ApiErrorCode =
  | "VALIDATION"
  | "INVALID_JSON"
  | "INVALID_BODY"
  | "METHOD_NOT_ALLOWED"
  | "PAYLOAD_TOO_LARGE"
  | "UNSUPPORTED_MEDIA_TYPE"
  | "SERVICE_UNAVAILABLE"
  | "INTERNAL"

export type ApiErrorBody = {
  ok: false
  error: {
    code: ApiErrorCode
    message: string
    /** Field-level messages keyed by inquiry field names */
    fields?: Record<string, string>
  }
}

export type ApiSuccessBody<T extends Record<string, unknown> = Record<string, unknown>> =
  {
    ok: true
    data: T
  }

export function jsonSuccess<T extends Record<string, unknown>>(
  data: T,
  init?: { status?: number; headers?: HeadersInit },
): NextResponse<ApiSuccessBody<T>> {
  return NextResponse.json(
    { ok: true, data },
    {
      status: init?.status ?? 201,
      headers: {
        "Cache-Control": "no-store",
        ...init?.headers,
      },
    },
  )
}

export function jsonError(
  code: ApiErrorCode,
  message: string,
  init?: {
    status?: number
    fields?: Record<string, string>
    headers?: HeadersInit
  },
): NextResponse<ApiErrorBody> {
  return NextResponse.json(
    {
      ok: false,
      error: {
        code,
        message,
        ...(init?.fields && Object.keys(init.fields).length > 0
          ? { fields: init.fields }
          : {}),
      },
    },
    {
      status: init?.status ?? 400,
      headers: {
        "Cache-Control": "no-store",
        ...init?.headers,
      },
    },
  )
}
