import { CONTACT_CONFIG } from "./config"
import { getContactUrl } from "./constants"

/** WhatsApp URL with optional pre-filled message — uses `CONTACT_CONFIG` / `CONTACT_URLS` */
export function buildWhatsAppUrl(message?: string): string {
  const base = CONTACT_CONFIG.whatsappUrl

  if (!message) return base

  return `${base}?text=${encodeURIComponent(message)}`
}

/** @deprecated Use `getContactUrl("line")` or `CONTACT_URLS.line` from `@/lib/contact` */
export function getLineContactUrl(): string {
  return getContactUrl("line")
}
