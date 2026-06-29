"use client"

import { useEffect, useLayoutEffect, useRef } from "react"
import { usePathname } from "next/navigation"

function scrollPageToTop(): void {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}

function getHashScrollBehavior(): ScrollBehavior {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth"
}

/** Scroll to any in-page section id (TOC, FAQ, homepage anchors, visa page sections). */
function scrollToHashTarget(hash: string): void {
  const id = decodeURIComponent(hash.replace(/^#/, ""))
  if (!id) return

  const target = document.getElementById(id)
  if (!target) return

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: getHashScrollBehavior(), block: "start" })
    })
  })
}

/**
 * Site-wide scroll rules:
 * - Forward internal navigations (pathname change) → top of page, before paint.
 * - Same-page or cross-page hash links → scroll to the target section.
 * - Browser Back/Forward and bfcache restores → preserve native scroll position.
 */
function NavigationScrollHandler() {
  const pathname = usePathname()
  const isHistoryNavigation = useRef(false)

  useLayoutEffect(() => {
    const onPopState = () => {
      isHistoryNavigation.current = true
    }

    const onPageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        isHistoryNavigation.current = true
      }
    }

    window.addEventListener("popstate", onPopState)
    window.addEventListener("pageshow", onPageShow)
    return () => {
      window.removeEventListener("popstate", onPopState)
      window.removeEventListener("pageshow", onPageShow)
    }
  }, [])

  useEffect(() => {
    const scrollFromLocation = () => {
      const { hash } = window.location
      if (!hash) return
      scrollToHashTarget(hash)
    }

    scrollFromLocation()
    window.addEventListener("hashchange", scrollFromLocation)
    return () => window.removeEventListener("hashchange", scrollFromLocation)
  }, [pathname])

  useLayoutEffect(() => {
    if (isHistoryNavigation.current) {
      isHistoryNavigation.current = false
      return
    }

    if (window.location.hash) {
      return
    }

    scrollPageToTop()
    requestAnimationFrame(() => {
      if (!window.location.hash && !isHistoryNavigation.current) {
        scrollPageToTop()
      }
    })
  }, [pathname])

  return null
}

export { NavigationScrollHandler, scrollToHashTarget }
