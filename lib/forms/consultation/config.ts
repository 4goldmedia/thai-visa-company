import "server-only"

const ENV_KEYS = {
  apiToken: "AIRTABLE_API_TOKEN",
  baseId: "AIRTABLE_BASE_ID",
  tableName: "AIRTABLE_TABLE_NAME",
} as const

export type ConsultationAirtableConfig = {
  apiToken: string
  baseId: string
  tableName: string
}

export type ConsultationAirtableConfigDiagnostics = {
  configured: boolean
  missing: string[]
  present: {
    apiToken: boolean
    baseId: boolean
    tableName: boolean
  }
  /** Safe to log — no secrets */
  summary: {
    baseId: string | null
    tableName: string | null
    hasApiToken: boolean
  }
}

function readEnv(name: string): string | undefined {
  const value = process.env[name]?.trim()
  return value && value.length > 0 ? value : undefined
}

export function getConsultationAirtableConfigDiagnostics(): ConsultationAirtableConfigDiagnostics {
  const apiToken = readEnv(ENV_KEYS.apiToken)
  const baseId = readEnv(ENV_KEYS.baseId)
  const tableName = readEnv(ENV_KEYS.tableName)

  const missing: string[] = []
  if (!apiToken) missing.push(ENV_KEYS.apiToken)
  if (!baseId) missing.push(ENV_KEYS.baseId)
  if (!tableName) missing.push(ENV_KEYS.tableName)

  return {
    configured: missing.length === 0,
    missing,
    present: {
      apiToken: Boolean(apiToken),
      baseId: Boolean(baseId),
      tableName: Boolean(tableName),
    },
    summary: {
      baseId: baseId ?? null,
      tableName: tableName ?? null,
      hasApiToken: Boolean(apiToken),
    },
  }
}

export function getConsultationAirtableConfig(): ConsultationAirtableConfig | null {
  const diagnostics = getConsultationAirtableConfigDiagnostics()
  if (!diagnostics.configured) {
    return null
  }

  return {
    apiToken: readEnv(ENV_KEYS.apiToken)!,
    baseId: readEnv(ENV_KEYS.baseId)!,
    tableName: readEnv(ENV_KEYS.tableName)!,
  }
}

export { ENV_KEYS as consultationAirtableEnvKeys }
