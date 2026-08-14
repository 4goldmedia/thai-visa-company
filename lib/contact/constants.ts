import {
  buildWhatsAppUrl,
  siteContactDefaults,
  siteSocialPlaceholders,
  siteWhatsAppPhone,
} from "@/lib/site/config"
import { readContactEmailEnv } from "@/lib/site/env"

/**
 * Contact URL configuration  -  single source of truth.
 *
 * IMPORTANT: Use static `process.env.NEXT_PUBLIC_*` access only.
 * Dynamic `process.env[key]` is not inlined in the client bundle and causes hydration mismatches.
 */

/** Canonical WhatsApp phone (E.164 digits, no +). */
export { siteWhatsAppPhone, buildWhatsAppUrl }

/** Single source for fallback URLs (no trailing slash) */
export const CONTACT_URL_FALLBACKS = {
  line: siteSocialPlaceholders.line,
  whatsapp: siteSocialPlaceholders.whatsapp,
  email: siteContactDefaults.supportEmail,
} as const

/** @deprecated Reference only  -  env is read via static property access below */
export const CONTACT_ENV_KEYS = {
  line: "NEXT_PUBLIC_LINE_URL",
  whatsapp: "NEXT_PUBLIC_WHATSAPP_URL",
  email: "NEXT_PUBLIC_CONTACT_EMAIL",
} as const

/** Strip trailing slash so server and client render identical `href` values */
export function normalizeContactUrl(url: string): string {
  return url.trim().replace(/\/$/, "")
}

/** Reject launch placeholders still present in env (e.g. Vercel `wa.me/0000000000`). */
const WHATSAPP_PLACEHOLDER_PHONE = /(?:^|\D)0{7,10}(?:\D|$)/

function extractWhatsAppPhoneCandidate(url: string): string | undefined {
  try {
    const parsed = new URL(url)
    const phoneParam = parsed.searchParams.get("phone")
    if (phoneParam) return phoneParam.replace(/\D/g, "")

    const host = parsed.hostname.replace(/^www\./, "")
    if (host === "wa.me" || host === "api.whatsapp.com") {
      const pathPhone = parsed.pathname.split("/").filter(Boolean)[0]
      if (pathPhone) return pathPhone.replace(/\D/g, "")
    }
  } catch {
    return undefined
  }

  return undefined
}

export function isPlaceholderWhatsAppUrl(url: string): boolean {
  const candidate = extractWhatsAppPhoneCandidate(url)
  if (!candidate) return false
  return WHATSAPP_PLACEHOLDER_PHONE.test(candidate)
}

function resolveMessagingUrl(
  envValue: string | undefined,
  fallback: string,
): string {
  return normalizeContactUrl(
    envValue && envValue.length > 0 ? envValue : fallback,
  )
}

function resolveWhatsAppUrl(
  envValue: string | undefined,
  fallback: string,
): string {
  if (!envValue || envValue.length === 0) {
    return normalizeContactUrl(fallback)
  }

  const normalized = normalizeContactUrl(envValue)
  if (isPlaceholderWhatsAppUrl(normalized)) {
    return normalizeContactUrl(fallback)
  }

  return normalized
}

/** Static env reads  -  required for Next.js client bundle inlining */
function readLineEnv(): string | undefined {
  return process.env.NEXT_PUBLIC_LINE_URL?.trim()
}

function readWhatsAppEnv(): string | undefined {
  return process.env.NEXT_PUBLIC_WHATSAPP_URL?.trim()
}

type ContactUrls = {
  readonly line: string
  readonly whatsapp: string
  readonly email: string
}

/**
 * Canonical LINE / WhatsApp / email URLs.
 * Getters resolve on each read so server and client use the same inlined env values.
 */
export const CONTACT_URLS: ContactUrls = {
  get line() {
    return resolveMessagingUrl(readLineEnv(), CONTACT_URL_FALLBACKS.line)
  },
  get whatsapp() {
    return resolveWhatsAppUrl(readWhatsAppEnv(), CONTACT_URL_FALLBACKS.whatsapp)
  },
  get email() {
    return readContactEmailEnv() ?? CONTACT_URL_FALLBACKS.email
  },
}

export type ContactUrlKey = keyof typeof CONTACT_URLS

export function getLineUrl(): string {
  return CONTACT_URLS.line
}

export function getWhatsAppUrl(): string {
  return CONTACT_URLS.whatsapp
}

export function getContactEmail(): string {
  return CONTACT_URLS.email
}

export function getContactUrl(channel: "line" | "whatsapp"): string {
  return CONTACT_URLS[channel]
}

export function isDefaultContactUrl(channel: "line" | "whatsapp"): boolean {
  return CONTACT_URLS[channel] === CONTACT_URL_FALLBACKS[channel]
}
