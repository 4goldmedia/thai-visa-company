"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  isVisasSectionActive,
  visaNavItems,
  visasHubPath,
} from "@/lib/visas/navigation"
import { cn } from "@/lib/utils"

const FLYOUT_CLOSE_DELAY_MS = 100

function VisasNavFlyout() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)
  const closeTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)
  const panelId = React.useId()

  const isActive = isVisasSectionActive(pathname)

  const clearCloseTimer = React.useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }, [])

  const openPanel = React.useCallback(() => {
    clearCloseTimer()
    setOpen(true)
  }, [clearCloseTimer])

  const scheduleClose = React.useCallback(() => {
    clearCloseTimer()
    closeTimerRef.current = setTimeout(() => {
      setOpen(false)
    }, FLYOUT_CLOSE_DELAY_MS)
  }, [clearCloseTimer])

  React.useEffect(() => () => clearCloseTimer(), [clearCloseTimer])

  return (
    <li
      className="navbar-visas-nav"
      onMouseEnter={openPanel}
      onMouseLeave={scheduleClose}
      onFocus={openPanel}
      onBlur={(event) => {
        if (event.currentTarget.contains(event.relatedTarget as Node | null)) {
          return
        }
        scheduleClose()
      }}
    >
      <Link
        href={visasHubPath}
        className="navbar-ref__nav-link"
        aria-current={isActive ? "page" : undefined}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={panelId}
      >
        Visas
      </Link>

      <div
        id={panelId}
        className={cn(
          "navbar-visas-flyout",
          open && "navbar-visas-flyout--open",
        )}
        onMouseEnter={openPanel}
        onMouseLeave={scheduleClose}
      >
        <div className="navbar-visas-flyout__panel">
          <ul className="navbar-visas-flyout__list">
            {visaNavItems.map((item) => (
              <li key={item.href} className="navbar-visas-flyout__item">
                <Link href={item.href} className="navbar-visas-flyout__link">
                  <span className="navbar-visas-flyout__title">{item.title}</span>
                  <span className="navbar-visas-flyout__description">
                    {item.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <Link href={visasHubPath} className="navbar-visas-flyout__footer">
            <span>View All Visas</span>
            <span className="navbar-visas-flyout__footer-arrow" aria-hidden>
              →
            </span>
          </Link>
        </div>
      </div>
    </li>
  )
}

export { VisasNavFlyout }
