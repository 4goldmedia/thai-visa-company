import { getContactEmail, getLineUrl, getWhatsAppUrl } from "@/lib/contact/env"

export type MessagingChannelId = "line" | "whatsapp"

export type MessagingChannel = {
  id: MessagingChannelId
  url: string
  label: string
  shortLabel: string
  /** Accessible name when visible label is shortened */
  ariaLabel: string
}

/** Canonical copy for messaging CTAs */
export const messagingChannelLabels = {
  line: "Chat on LINE",
  lineShort: "LINE",
  whatsapp: "WhatsApp",
} as const

const channelDefinitions: Record<
  MessagingChannelId,
  Omit<MessagingChannel, "url">
> = {
  line: {
    id: "line",
    label: messagingChannelLabels.line,
    shortLabel: messagingChannelLabels.lineShort,
    ariaLabel: messagingChannelLabels.line,
  },
  whatsapp: {
    id: "whatsapp",
    label: messagingChannelLabels.whatsapp,
    shortLabel: messagingChannelLabels.whatsapp,
    ariaLabel: messagingChannelLabels.whatsapp,
  },
}

/** Resolved URLs from environment variables */
export const contactLinks = {
  line: getLineUrl(),
  whatsapp: getWhatsAppUrl(),
  email: getContactEmail(),
} as const

/** LINE first, WhatsApp second — site-wide conversion priority */
export const messagingChannelOrder: readonly MessagingChannelId[] = [
  "line",
  "whatsapp",
] as const

export function getMessagingChannelUrl(id: MessagingChannelId): string {
  return contactLinks[id]
}

export function getMessagingChannel(id: MessagingChannelId): MessagingChannel {
  return {
    ...channelDefinitions[id],
    url: getMessagingChannelUrl(id),
  }
}

export function getMessagingChannels(): readonly MessagingChannel[] {
  return messagingChannelOrder.map(getMessagingChannel)
}

export function isMessagingChannelConfigured(id: MessagingChannelId): boolean {
  const url = getMessagingChannelUrl(id)
  const fallback =
    id === "line" ? "https://line.me/" : "https://wa.me/"
  return url !== fallback
}
