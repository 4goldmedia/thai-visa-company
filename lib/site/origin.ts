/**
 * Canonical production origin. Sitemap, canonical tags, og:url, and JSON-LD
 * must resolve here  -  never `www` or `http://` for this host.
 */
export const CANONICAL_PRODUCTION_HOST = "thaivisacompany.com" as const
export const CANONICAL_PRODUCTION_ORIGIN = "https://thaivisacompany.com" as const
export const WWW_PRODUCTION_HOST = "www.thaivisacompany.com" as const

function parseOriginCandidate(raw: string): URL | undefined {
  const candidate = raw.trim()
  if (!candidate) return undefined

  try {
    return new URL(candidate)
  } catch {
    try {
      return new URL(`https://${candidate}`)
    } catch {
      return undefined
    }
  }
}

/**
 * Collapse `http://` and `www.` variants of the production host to the
 * canonical HTTPS non-www origin. Localhost and preview hosts are unchanged.
 */
export function normalizeSiteOrigin(raw: string): string {
  const parsed = parseOriginCandidate(raw)
  if (!parsed) return raw.trim()

  const hostname = parsed.hostname.replace(/^www\./i, "").toLowerCase()
  if (hostname === CANONICAL_PRODUCTION_HOST) {
    return CANONICAL_PRODUCTION_ORIGIN
  }

  return parsed.origin
}
