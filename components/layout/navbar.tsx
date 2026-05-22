"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import { MessagingCtaPair } from "@/components/cta/messaging-cta-pair"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { motionClass } from "@/lib/motion-classes"
import { mainNavLinks } from "@/lib/navigation"
import { siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"

const SCROLL_THRESHOLD = 8

const navLinkClass =
  "rounded-md px-2 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"

const mobileNavLinkClass = cn(
  "flex min-h-11 items-center rounded-xl px-3.5",
  "text-[15px] font-medium leading-snug tracking-normal text-foreground",
  "transition-[color,background-color] duration-200 ease-out hover:bg-muted active:bg-muted/80 motion-reduce:transition-none",
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
)

function isNavLinkActive(pathname: string, href: string): boolean {
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
  const [scrolled, setScrolled] = React.useState(false)
  const [menuOpen, setMenuOpen] = React.useState(false)
  const headerRef = React.useRef<HTMLElement>(null)
  const menuPanelId = React.useId()

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
      className={cn(
        "sticky top-0 z-50 w-full shrink-0 transition-[background-color,box-shadow,border-color] duration-200 ease-out motion-reduce:transition-none",
        scrolled || menuOpen
          ? "border-b border-border/70 bg-background/90 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-background/80"
          : "border-b border-transparent bg-transparent",
        className
      )}
    >
      <Container>
        <div className="relative flex h-14 items-center justify-between gap-3 lg:h-16">
          <NavbarLogo />

          <nav
            className="absolute left-1/2 hidden -translate-x-1/2 lg:flex"
            aria-label="Main navigation"
          >
            <ul className="flex items-center gap-1 xl:gap-2">
              {mainNavLinks.map((item) => (
                <li key={item.href}>
                  <NavbarNavLink
                    href={item.href}
                    label={item.label}
                    className={navLinkClass}
                  />
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <NavbarCTAs layout="desktop" />
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <NavbarCTAs layout="mobile-bar" />
            <button
              type="button"
              className={cn(
                "inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-foreground transition-colors",
                "hover:bg-muted active:bg-muted/80",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                menuOpen && "border-border bg-muted"
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
        "absolute inset-x-0 top-full z-50 border-b border-border bg-background shadow-sm lg:hidden",
        motionClass.mobileMenuIn
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
          <h3 className="mb-3 px-3.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Contact
          </h3>
          <NavbarCTAs layout="mobile-menu" onNavigate={onClose} />
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
        "rounded-md text-sm font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80",
        "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      )}
    >
      <span className="sr-only">{siteConfig.name} — Home</span>
      <span aria-hidden>{siteConfig.name}</span>
    </Link>
  )
}

type NavbarCTAsProps = {
  layout: "desktop" | "mobile-bar" | "mobile-menu"
  onNavigate?: () => void
}

function NavbarCTAs({ layout, onNavigate }: NavbarCTAsProps) {
  const pairLayout =
    layout === "mobile-menu"
      ? "navbar-menu"
      : "navbar-compact"

  return (
    <MessagingCtaPair layout={pairLayout} onNavigate={onNavigate} />
  )
}

export { Navbar }
