import { MessagingPlatformAction } from "@/components/cta/messaging-platform-action"
import { analyticsDataAttributes } from "@/lib/analytics/attributes"
import { analyticsCtaIds } from "@/lib/analytics/cta-ids"
import { cn } from "@/lib/utils"

type MobileContactBarProps = {
  className?: string
}

/**
 * Sticky bottom messaging bar  -  mobile/tablet only; conversation-first conversion.
 */
function MobileContactBar({ className }: MobileContactBarProps) {
  return (
    <nav
      data-slot="mobile-contact-bar"
      aria-label="Message us on LINE or WhatsApp"
      className={cn("mobile-messaging-bar", className)}
    >
      <div
        className="mobile-messaging-bar__inner"
        {...analyticsDataAttributes({
          ctaId: analyticsCtaIds.mobileBarContact,
          surface: "global",
        })}
      >
        <MessagingPlatformAction channel="line" density="bar" />
        <MessagingPlatformAction channel="whatsapp" density="bar" />
      </div>
    </nav>
  )
}

export { MobileContactBar }
export type { MobileContactBarProps }
