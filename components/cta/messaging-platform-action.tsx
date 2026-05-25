import { MessagingCta } from "@/components/cta/messaging-cta"
import { LineIcon, WhatsAppIcon } from "@/components/icons/platform-icons"
import type { PlatformIconSize } from "@/components/icons/platform-icons"
import type { MessagingChannelId } from "@/lib/contact"
import { getMessagingChannel } from "@/lib/contact"
import {
  heroContactStripActionClass,
  mobileMessagingBarActionClass,
} from "@/lib/section-styles"
import { cn } from "@/lib/utils"

export type MessagingPlatformActionDensity = "hero" | "bar"

type MessagingPlatformActionProps = {
  channel: MessagingChannelId
  density?: MessagingPlatformActionDensity
  className?: string
}

const iconByChannel = {
  line: LineIcon,
  whatsapp: WhatsAppIcon,
} as const

const iconSizeByDensity: Record<MessagingPlatformActionDensity, PlatformIconSize> =
  {
    hero: "lg",
    bar: "md",
  }

/**
 * LINE or WhatsApp — neutral surface, official brand icon for recognition.
 */
function MessagingPlatformAction({
  channel,
  density = "hero",
  className,
}: MessagingPlatformActionProps) {
  const config = getMessagingChannel(channel)
  const Icon = iconByChannel[channel]
  const iconSize = iconSizeByDensity[density]

  return (
    <MessagingCta
      channel={channel}
      variant="outline"
      labelMode="short"
      className={cn(
        density === "hero"
          ? heroContactStripActionClass
          : mobileMessagingBarActionClass,
        className,
      )}
    >
      <span
        className="inline-flex shrink-0 items-center justify-center leading-none"
        aria-hidden
      >
        <Icon size={iconSize} />
      </span>
      <span className="messaging-platform-action__label leading-none">
        {config.shortLabel}
      </span>
      <span className="sr-only"> (opens in new tab)</span>
    </MessagingCta>
  )
}

export { MessagingPlatformAction }
