import { MessagingCta } from "@/components/cta/messaging-cta"
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
  onNavigate?: () => void
}

/**
 * LINE or WhatsApp — typography-only concierge actions (hero + mobile bar).
 */
function MessagingPlatformAction({
  channel,
  density = "hero",
  className,
  onNavigate,
}: MessagingPlatformActionProps) {
  const config = getMessagingChannel(channel)

  return (
    <MessagingCta
      channel={channel}
      unstyled
      labelMode="short"
      onClick={onNavigate}
      className={cn(
        density === "hero"
          ? heroContactStripActionClass
          : mobileMessagingBarActionClass,
        className,
      )}
    >
      <span className="messaging-platform-action__label">
        {config.shortLabel}
      </span>
      <span className="sr-only"> (opens in new tab)</span>
    </MessagingCta>
  )
}

export { MessagingPlatformAction }
