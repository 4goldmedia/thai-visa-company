const GA_ID_ENV = "NEXT_PUBLIC_GA_ID"
const AHREFS_DATA_KEY_ENV = "NEXT_PUBLIC_AHREFS_DATA_KEY"

/** Ahrefs Web Analytics data key  -  override via env when rotating keys */
const AHREFS_DATA_KEY_FALLBACK = "I340I27TOHDKfQ+kGR94OA"

/** GA4 measurement ID format: `G-XXXXXXXXXX` */
const GA_ID_PATTERN = /^G-[A-Z0-9]+$/i

function readEnv(name: string): string | undefined {
  const value = process.env[name]?.trim()
  return value && value.length > 0 ? value : undefined
}

/**
 * Returns the GA4 measurement ID when configured.
 * Safe to call on server and client (`NEXT_PUBLIC_` prefix).
 */
export function getGaMeasurementId(): string | undefined {
  const id = readEnv(GA_ID_ENV)
  if (!id) return undefined
  if (!GA_ID_PATTERN.test(id)) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        `[analytics] ${GA_ID_ENV} should match G-XXXXXXXXXX; got "${id}"`,
      )
    }
    return id
  }
  return id
}

export function isAnalyticsEnabled(): boolean {
  return getGaMeasurementId() !== undefined
}

/**
 * Returns the Ahrefs Web Analytics data key when configured.
 * Falls back to the site key when `NEXT_PUBLIC_AHREFS_DATA_KEY` is unset.
 */
export function getAhrefsDataKey(): string | undefined {
  return readEnv(AHREFS_DATA_KEY_ENV) ?? AHREFS_DATA_KEY_FALLBACK
}
