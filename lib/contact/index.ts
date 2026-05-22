/**
 * Centralized contact URLs and messaging channel metadata.
 * Set `NEXT_PUBLIC_LINE_URL` and `NEXT_PUBLIC_WHATSAPP_URL` in production.
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

export type { ContactUrlKey } from "@/lib/contact/constants"

export {
  contactLinks,
  getMessagingChannel,
  getMessagingChannelUrl,
  getMessagingChannels,
  isMessagingChannelConfigured,
  messagingChannelLabels,
  messagingChannelOrder,
} from "@/lib/contact/channels"

export type {
  MessagingChannel,
  MessagingChannelId,
} from "@/lib/contact/channels"
