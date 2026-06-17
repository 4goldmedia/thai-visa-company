/**
 * Server-only Airtable configuration from environment variables.
 * Never use `NEXT_PUBLIC_` for credentials.
 */

export type AirtableEnvConfig = {
  apiKey: string
  baseId: string
  /** Table name or table ID in the base (e.g. `Leads`) */
  leadsTableName: string
}

const ENV_KEYS = {
  apiKey: "AIRTABLE_API_KEY",
  baseId: "AIRTABLE_BASE_ID",
  leadsTable: "AIRTABLE_LEADS_TABLE_NAME",
  leadsTableLegacy: "AIRTABLE_TABLE_NAME",
} as const

function readEnv(name: string): string | undefined {
  const value = process.env[name]?.trim()
  return value && value.length > 0 ? value : undefined
}

export function getAirtableEnvConfig(): AirtableEnvConfig | null {
  const apiKey = readEnv(ENV_KEYS.apiKey)
  const baseId = readEnv(ENV_KEYS.baseId)
  const leadsTableName =
    readEnv(ENV_KEYS.leadsTable) ?? readEnv(ENV_KEYS.leadsTableLegacy)

  if (!apiKey || !baseId || !leadsTableName) {
    return null
  }

  return { apiKey, baseId, leadsTableName }
}

export function isAirtableConfigured(): boolean {
  return getAirtableEnvConfig() !== null
}

/** Throws when credentials are missing  -  use in server actions that require CRM writes */
export function requireAirtableEnvConfig(): AirtableEnvConfig {
  const config = getAirtableEnvConfig()
  if (!config) {
    throw new AirtableConfigError(
      "Airtable is not configured. Set AIRTABLE_API_KEY, AIRTABLE_BASE_ID, and AIRTABLE_LEADS_TABLE_NAME.",
    )
  }
  return config
}

export class AirtableConfigError extends Error {
  readonly name = "AirtableConfigError"

  constructor(message: string) {
    super(message)
  }
}
