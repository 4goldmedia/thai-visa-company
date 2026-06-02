"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import { MessagingPlatformAction } from "@/components/cta/messaging-platform-action"
import { ctaHref, ctaLabels, navbarMenuCtaPrimaryClass } from "@/lib/cta"
import { analyticsDataAttributes } from "@/lib/analytics/attributes"
import { analyticsCtaIds } from "@/lib/analytics/cta-ids"
import { Container } from "@/components/layout/container"
import { motionClass } from "@/lib/motion-classes"
import { mainNavLinks } from "@/lib/navigation"
import { siteBrand } from "@/lib/site"
import { cn } from "@/lib/utils"

const SCROLL_THRESHOLD = 8

const mobileNavLinkClass = cn(
  "flex min-h-11 items-center rounded-[var(--radius-button)] px-3.5",
  "text-[15px] font-medium leading-snug tracking-normal text-foreground",
  "transition-[color,background-color] duration-200 ease-out hover:bg-muted active:bg-muted/80 motion-reduce:transition-none",
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
)

function isNavLinkActive(pathname: string, href: string): boolean {
  if (href.startsWith("/#")) return pathname === "/"
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

type NavbarNavLinkProps = {
  href: string
  label: string
  className: string
  onClick?: () => void
} & Pick<React.ComponentProps<typeof Link>, "ref">

function NavbarNavLink({
  href,
  label,
  className,
  onClick,
  ref,
}: NavbarNavLinkProps) {
  const pathname = usePathname()
  const isActive = isNavLinkActive(pathname, href)

  return (
    <Link
      ref={ref}
      href={href}
      className={className}
      aria-current={isActive ? "page" : undefined}
      onClick={onClick}
    >
      {label}
    </Link>
  )
}

type NavbarProps = {
  className?: string
}

function Navbar({ className }: NavbarProps) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = React.useState(false)
  const [menuOpen, setMenuOpen] = React.useState(false)
  const headerRef = React.useRef<HTMLElement>(null)
  const menuPanelId = React.useId()

  const isHome = pathname === "/"
  const immersiveAtTop = isHome && !scrolled && !menuOpen

  const closeMenu = React.useCallback(() => setMenuOpen(false), [])

  React.useEffect(() => {
    let ticking = false

    const updateScrolled = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD)
      ticking = false
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(updateScrolled)
    }

    updateScrolled()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  React.useEffect(() => {
    const root = document.documentElement
    if (menuOpen) {
      root.setAttribute("data-mobile-nav-open", "")
    } else {
      root.removeAttribute("data-mobile-nav-open")
    }
    return () => root.removeAttribute("data-mobile-nav-open")
  }, [menuOpen])

  React.useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu()
    }

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node
      if (headerRef.current?.contains(target)) return
      closeMenu()
    }

    window.addEventListener("keydown", onKeyDown)
    document.addEventListener("pointerdown", onPointerDown)
    return () => {
      window.removeEventListener("keydown", onKeyDown)
      document.removeEventListener("pointerdown", onPointerDown)
    }
  }, [menuOpen, closeMenu])

  return (
    <header
      id="site-header"
      ref={headerRef}
      data-slot="navbar"
      data-scrolled={scrolled || undefined}
      data-hero-immersive={immersiveAtTop || undefined}
      className={cn(
        "sticky top-0 z-50 w-full shrink-0 transition-[background-color,box-shadow,border-color] duration-200 ease-out motion-reduce:transition-none",
        scrolled || menuOpen
          ? "border-b border-border bg-background/95 backdrop-blur-[6px] supports-[backdrop-filter]:bg-background/92"
          : immersiveAtTop
            ? "border-b border-transparent bg-transparent"
            : "border-b border-transparent bg-background",
        className,
      )}
    >
      <Container>
        <div className="relative flex h-14 items-center justify-between gap-4 lg:h-[4.25rem]">
          <NavbarLogo />

          <nav
            className="absolute left-1/2 hidden -translate-x-1/2 lg:flex"
            aria-label="Main navigation"
          >
            <ul className="navbar-ref__nav-list flex items-center">
              {mainNavLinks.map((item) => (
                <li key={item.href}>
                  <NavbarNavLink
                    href={item.href}
                    label={item.label}
                    className="navbar-ref__nav-link"
                  />
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center lg:flex">
            <NavbarConsultCta />
          </div>

          <div className="flex items-center justify-end lg:hidden">
            <button
              type="button"
              className={cn(
                "inline-flex size-11 shrink-0 items-center justify-center rounded-[var(--radius-button)] border border-border/60 bg-background text-foreground transition-colors",
                "hover:bg-muted active:bg-muted/80",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                menuOpen && "border-border bg-muted",
              )}
              aria-expanded={menuOpen}
              aria-controls={menuPanelId}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? (
                <X className="size-5" aria-hidden />
              ) : (
                <Menu className="size-5" aria-hidden />
              )}
            </button>
          </div>
        </div>
      </Container>

      <MobileNavMenu
        open={menuOpen}
        panelId={menuPanelId}
        onClose={closeMenu}
      />
    </header>
  )
}

function NavbarConsultCta() {
  return (
    <Link
      href={ctaHref.requestConsultation}
      className="navbar-ref__consult"
      {...analyticsDataAttributes({
        ctaId: analyticsCtaIds.bookConsultation,
        surface: "global",
        ctaLabel: ctaLabels.requestConsultation,
      })}
    >
      {ctaLabels.requestConsultation}
    </Link>
  )
}

type MobileNavMenuProps = {
  open: boolean
  panelId: string
  onClose: () => void
}

function MobileNavMenu({ open, panelId, onClose }: MobileNavMenuProps) {
  const pathname = usePathname()
  const panelRef = React.useRef<HTMLDivElement>(null)
  const firstLinkRef = React.useRef<HTMLAnchorElement>(null)

  React.useEffect(() => {
    onClose()
  }, [pathname, onClose])

  React.useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const frame = requestAnimationFrame(() => {
      firstLinkRef.current?.focus()
    })

    return () => {
      document.body.style.overflow = previousOverflow
      cancelAnimationFrame(frame)
    }
  }, [open])

  if (!open) return null

  return (
    <div
      id={panelId}
      ref={panelRef}
      className={cn(
        "absolute inset-x-0 top-full z-50 border-b border-border/60 bg-background lg:hidden",
        motionClass.mobileMenuIn,
      )}
    >
      <Container className="py-4 pb-5">
        <nav aria-label="Mobile navigation">
          <ul className="flex flex-col gap-0.5">
            {mainNavLinks.map((item, index) => (
              <li key={item.href}>
                <NavbarNavLink
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  label={item.label}
                  className={mobileNavLinkClass}
                  onClick={onClose}
                />
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-4 border-t border-border/80 pt-4">
          <Link
            href={ctaHref.requestConsultation}
            className={cn(navbarMenuCtaPrimaryClass, "w-full")}
            onClick={onClose}
            {...analyticsDataAttributes({
              ctaId: analyticsCtaIds.bookConsultation,
              surface: "global",
              ctaLabel: ctaLabels.requestConsultation,
            })}
          >
            {ctaLabels.requestConsultation}
          </Link>
          <NavbarMessagingSecondary onNavigate={onClose} />
        </div>
      </Container>
    </div>
  )
}

function NavbarLogo() {
  return (
    <Link
      href="/"
      className={cn(
        "rounded-md transition-opacity hover:opacity-80",
        "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring",
      )}
    >
      <span className="sr-only">{siteBrand.name} — Home</span>
      <span className="navbar-ref__logo" aria-hidden>
        {siteBrand.name}
      </span>
    </Link>
  )
}

type NavbarCTAsProps = {
  onNavigate?: () => void
}

/** WhatsApp + LINE — secondary options in the mobile menu. */
function NavbarMessagingSecondary({ onNavigate }: NavbarCTAsProps) {
  return (
    <div
      className="mt-4 flex flex-col gap-2"
      {...analyticsDataAttributes({
        ctaId: analyticsCtaIds.navbarMenuContact,
        surface: "global",
      })}
    >
      <p className="px-3.5 text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
        Or message us
      </p>
      <div className="grid grid-cols-2 gap-2 px-0.5">
        <MessagingPlatformAction
          channel="line"
          density="bar"
          className="w-full"
          onNavigate={onNavigate}
        />
        <MessagingPlatformAction
          channel="whatsapp"
          density="bar"
          className="w-full"
          onNavigate={onNavigate}
        />
      </div>
    </div>
  )
}

export { Navbar }
