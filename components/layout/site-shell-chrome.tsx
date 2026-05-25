"use client"

import { Footer } from "@/components/layout/footer"
import { MobileContactBar } from "@/components/layout/mobile-contact-bar"
import { mobileContactBarOffsetClass } from "@/lib/mobile-contact-bar-styles"
import { cn } from "@/lib/utils"

type SiteShellChromeProps = {
  children: React.ReactNode
  className?: string
}

/**
 * Footer, sticky messaging bar (mobile), and bottom safe-area offset.
 */
function SiteShellChrome({ children, className }: SiteShellChromeProps) {
  return (
    <>
      <div
        className={cn(
          "flex min-h-0 flex-1 flex-col",
          mobileContactBarOffsetClass,
          className,
        )}
      >
        {children}
        <Footer />
      </div>
      <MobileContactBar />
    </>
  )
}

export { SiteShellChrome }
