import { Footer } from "@/components/layout/footer"
import { MobileContactBar } from "@/components/layout/mobile-contact-bar"
import { Navbar } from "@/components/layout/navbar"
import { SkipLink } from "@/components/layout/skip-link"
import { mobileContactBarOffsetClass } from "@/lib/mobile-contact-bar-styles"
import { cn } from "@/lib/utils"

type SiteShellProps = {
  children: React.ReactNode
  className?: string
}

/**
 * Global marketing site chrome — nav, page content, footer, mobile contact bar.
 * Rendered from `app/layout.tsx` on every public route.
 */
function SiteShell({ children, className }: SiteShellProps) {
  return (
    <>
      <SkipLink />
      <Navbar />
      <div
        className={cn(
          "flex min-h-0 flex-1 flex-col",
          mobileContactBarOffsetClass,
          className
        )}
      >
        {children}
        <Footer />
      </div>
      <MobileContactBar />
    </>
  )
}

export { SiteShell }
export type { SiteShellProps }
