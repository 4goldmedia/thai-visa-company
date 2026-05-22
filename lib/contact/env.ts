/**
 * @deprecated Import from `@/lib/contact/constants` or `@/lib/contact`.
 */
export {
  CONTACT_ENV_KEYS,
  CONTACT_URL_FALLBACKS,
  CONTACT_URLS,
  getContactEmail,
  getContactUrl,
  getLineUrl,
  getWhatsAppUrl,
  isDefaultContactUrl,
  normalizeContactUrl,
} from "@/lib/contact/constants"

/** @deprecated Use `normalizeContactUrl` */
export { normalizeContactUrl as normalizeMessagingUrl } from "@/lib/contact/constants"
