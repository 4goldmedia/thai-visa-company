/**
 * Centralized contact URLs and messaging channel metadata.
 * Set `NEXT_PUBLIC_LINE_URL` and `NEXT_PUBLIC_WHATSAPP_URL` in production.
 */

export {
  getLineUrl,
  getWhatsAppUrl,
  getContactEmail,
} from "@/lib/contact/env"

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
