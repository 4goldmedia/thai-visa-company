import { MessagingCtaPair } from "@/components/cta/messaging-cta-pair"
import { mobileContactBarShellClass } from "@/lib/mobile-contact-bar-styles"
import { cn } from "@/lib/utils"

type MobileContactBarProps = {
  className?: string
}

/**
 * Sticky bottom contact bar — mobile only (`lg:hidden`).
 * LINE first, WhatsApp second; URLs from `NEXT_PUBLIC_*` env vars.
 * Hidden while mobile nav is open (`data-mobile-nav-open` on `<html>`).
 */
function MobileContactBar({ className }: MobileContactBarProps) {
  return (
    <nav
      data-slot="mobile-contact-bar"
      aria-label="Quick contact"
      className={cn(mobileContactBarShellClass, className)}
    >
      <MessagingCtaPair layout="mobile-bar" />
    </nav>
  )
}

export { MobileContactBar }
export type { MobileContactBarProps }
