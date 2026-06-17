import "server-only"

import { type AirtableEnvConfig, requireAirtableEnvConfig } from "@/lib/airtable/config"
import { AirtableError } from "@/lib/airtable/errors"
import type {
  AirtableCreateResponse,
  AirtableRecordFields,
  AirtableUpdateResponse,
} from "@/lib/airtable/types"

const AIRTABLE_API_ORIGIN = "https://api.airtable.com/v0"

type RequestOptions = {
  method: "GET" | "POST" | "PATCH"
  path: string
  body?: unknown
}

export type AirtableClient = {
  createRecord: <T extends AirtableRecordFields>(
    tableNameOrId: string,
    fields: T,
  ) => Promise<AirtableCreateResponse<T>>
  updateRecord: (
    tableNameOrId: string,
    recordId: string,
    fields: AirtableRecordFields,
  ) => Promise<AirtableUpdateResponse<AirtableRecordFields>>
}

function encodeTableSegment(tableNameOrId: string): string {
  return encodeURIComponent(tableNameOrId)
}

function buildTableUrl(config: AirtableEnvConfig, tableNameOrId: string): string {
  return `${AIRTABLE_API_ORIGIN}/${config.baseId}/${encodeTableSegment(tableNameOrId)}`
}

async function airtableFetch<T>(
  config: AirtableEnvConfig,
  options: RequestOptions,
): Promise<T> {
  const url = `${AIRTABLE_API_ORIGIN}${options.path}`

  let response: Response
  try {
    response = await fetch(url, {
      method: options.method,
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        "Content-Type": "application/json",
      },
      body: options.body !== undefined ? JSON.stringify(options.body) : undefined,
      cache: "no-store",
    })
  } catch (cause) {
    throw new AirtableError("Airtable request failed.", {
      code: "NETWORK",
      cause,
    })
  }

  const text = await response.text()
  let payload: unknown = null

  if (text) {
    try {
      payload = JSON.parse(text) as unknown
    } catch {
      payload = { raw: text }
    }
  }

  if (!response.ok) {
    const message =
      typeof payload === "object" &&
      payload !== null &&
      "error" in payload &&
      typeof (payload as { error?: { message?: string } }).error?.message ===
        "string"
        ? (payload as { error: { message: string } }).error.message
        : `Airtable API error (${response.status})`

    throw new AirtableError(message, {
      code: response.status === 404 ? "NOT_FOUND" : "API",
      status: response.status,
      details: payload,
    })
  }

  return payload as T
}

export function createAirtableClient(
  config: AirtableEnvConfig = requireAirtableEnvConfig(),
): AirtableClient {
  return {
    async createRecord(tableNameOrId, fields) {
      const path = `/${config.baseId}/${encodeTableSegment(tableNameOrId)}`
      return airtableFetch<AirtableCreateResponse<typeof fields>>(config, {
        method: "POST",
        path,
        body: {
          records: [{ fields }],
          typecast: true,
        },
      })
    },

    async updateRecord(tableNameOrId, recordId, fields) {
      const path = `/${config.baseId}/${encodeTableSegment(tableNameOrId)}/${recordId}`
      return airtableFetch<AirtableUpdateResponse<AirtableRecordFields>>(config, {
        method: "PATCH",
        path,
        body: {
          fields,
          typecast: true,
        },
      })
    },
  }
}

/** Singleton for server handlers  -  lazy, uses current env on each call */
let cachedClient: AirtableClient | null = null

export function getAirtableClient(): AirtableClient {
  if (!cachedClient) {
    cachedClient = createAirtableClient()
  }
  return cachedClient
}

export function resetAirtableClientForTests(): void {
  cachedClient = null
}
