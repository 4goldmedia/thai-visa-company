"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

type ArticleStickySidebarProps = {
  children: React.ReactNode
  className?: string
}

/**
 * Measures the hero band height so the sticky TOC aligns with the featured
 * image row, then scrolls naturally until it reaches --editorial-sticky-top.
 */
function ArticleStickySidebar({ children, className }: ArticleStickySidebarProps) {
  const trackRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const track = trackRef.current
    const grid = track?.closest<HTMLElement>(".editorial-article-layout-grid")
    const hero = grid?.querySelector<HTMLElement>(".editorial-article-hero-band")

    if (!grid || !hero) return

    const syncOffset = () => {
      const mainColumn = grid.querySelector<HTMLElement>(".editorial-article-main-column")
      const gapSource = mainColumn ?? grid
      const gap = Number.parseFloat(getComputedStyle(gapSource).rowGap) || 0
      const offset = hero.offsetHeight + gap
      grid.style.setProperty("--editorial-sidebar-sticky-offset", `${offset}px`)
    }

    syncOffset()

    const observer = new ResizeObserver(syncOffset)
    observer.observe(hero)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={trackRef} className={cn("editorial-sidebar-track", className)}>
      <aside className="editorial-sidebar" aria-label="Article tools">
        {children}
      </aside>
    </div>
  )
}

export { ArticleStickySidebar }
