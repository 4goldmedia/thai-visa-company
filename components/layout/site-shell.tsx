import { HashScrollHandler } from "@/components/navigation/hash-scroll-handler"
import { Navbar } from "@/components/layout/navbar"
import { SiteShellChrome } from "@/components/layout/site-shell-chrome"
import { SkipLink } from "@/components/layout/skip-link"

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
      <HashScrollHandler />
      <Navbar />
      <SiteShellChrome className={className}>{children}</SiteShellChrome>
    </>
  )
}

export { SiteShell }
export type { SiteShellProps }
