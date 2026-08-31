import { DesktopWhatsAppButton } from "@/components/layout/desktop-whatsapp-button"
import { Navbar } from "@/components/layout/navbar"
import { SiteShellChrome } from "@/components/layout/site-shell-chrome"
import { SkipLink } from "@/components/layout/skip-link"
import { TrustBanner } from "@/components/layout/trust-banner"
import { NavigationScrollHandler } from "@/components/navigation/navigation-scroll-handler"

type SiteShellProps = {
  children: React.ReactNode
  className?: string
}

/**
 * Global marketing site chrome  -  nav, page content, footer, mobile contact bar.
 * Rendered from `app/layout.tsx` on every public route.
 */
function SiteShell({ children, className }: SiteShellProps) {
  return (
    <>
      <SkipLink />
      <NavigationScrollHandler />
      <TrustBanner />
      <Navbar />
      <SiteShellChrome className={className}>{children}</SiteShellChrome>
      <DesktopWhatsAppButton />
    </>
  )
}

export { SiteShell }
export type { SiteShellProps }
