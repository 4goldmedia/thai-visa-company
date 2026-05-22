import { MessagingCtaPair } from "@/components/cta/messaging-cta-pair"
import { analyticsDataAttributes } from "@/lib/analytics/attributes"
import { analyticsCtaIds } from "@/lib/analytics/cta-ids"
import { mobileContactBarShellClass } from "@/lib/mobile-contact-bar-styles"
import { cn } from "@/lib/utils"

type MobileContactBarProps = {
  className?: string
}

/**
 * Sticky bottom contact bar — mobile only (`lg:hidden`).
 * LINE first, WhatsApp second — `MessagingCtaPair` / `CONTACT_URLS`.
 * Hidden while mobile nav is open (`data-mobile-nav-open` on `<html>`).
 */
function MobileContactBar({ className }: MobileContactBarProps) {
  return (
    <nav
      data-slot="mobile-contact-bar"
      aria-label="Quick contact"
      className={cn(mobileContactBarShellClass, className)}
    >
      <div
        {...analyticsDataAttributes({
          ctaId: analyticsCtaIds.mobileBarContact,
          surface: "global",
        })}
      >
        <MessagingCtaPair layout="mobile-bar" />
      </div>
    </nav>
  )
}

export { MobileContactBar }
export type { MobileContactBarProps }
