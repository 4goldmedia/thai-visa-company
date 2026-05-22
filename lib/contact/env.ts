const ENV_KEYS = {
  line: "NEXT_PUBLIC_LINE_URL",
  whatsapp: "NEXT_PUBLIC_WHATSAPP_URL",
  email: "NEXT_PUBLIC_CONTACT_EMAIL",
} as const

/** Safe fallbacks when env vars are unset (local dev) */
const FALLBACK_URLS = {
  line: "https://line.me/",
  whatsapp: "https://wa.me/",
  email: "hello@thaivisacompany.com",
} as const

function readEnv(name: string): string | undefined {
  const value = process.env[name]?.trim()
  return value && value.length > 0 ? value : undefined
}

export function getLineUrl(): string {
  return readEnv(ENV_KEYS.line) ?? FALLBACK_URLS.line
}

export function getWhatsAppUrl(): string {
  return readEnv(ENV_KEYS.whatsapp) ?? FALLBACK_URLS.whatsapp
}

export function getContactEmail(): string {
  return readEnv(ENV_KEYS.email) ?? FALLBACK_URLS.email
}
