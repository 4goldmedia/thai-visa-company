import {
  CONTACT_URLS,
  getContactUrl,
  isDefaultContactUrl,
} from "@/lib/contact/constants"

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

/** @deprecated Use `CONTACT_URLS` from `@/lib/contact` */
export const contactLinks = CONTACT_URLS

/** LINE first, WhatsApp second  -  site-wide conversion priority */
export const messagingChannelOrder: readonly MessagingChannelId[] = [
  "line",
  "whatsapp",
] as const

export function getMessagingChannelUrl(id: MessagingChannelId): string {
  return getContactUrl(id)
}

export function getMessagingChannel(id: MessagingChannelId): MessagingChannel {
  return {
    ...channelDefinitions[id],
    url: getContactUrl(id),
  }
}

export function getMessagingChannels(): readonly MessagingChannel[] {
  return messagingChannelOrder.map(getMessagingChannel)
}

export function isMessagingChannelConfigured(id: MessagingChannelId): boolean {
  return !isDefaultContactUrl(id)
}
