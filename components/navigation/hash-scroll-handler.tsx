"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

import { homepageHashSectionIds } from "@/lib/section-ids"

/** Homepage sections linked from global nav/footer — must match `sectionIds` */
const HASH_SCROLL_TARGETS = new Set<string>([
  ...homepageHashSectionIds,
  "final-cta",
])

function getScrollBehavior(): ScrollBehavior {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth"
}

function scrollToHashTarget(hash: string): void {
  const id = decodeURIComponent(hash.replace(/^#/, ""))
  if (!id || !HASH_SCROLL_TARGETS.has(id)) return

  const target = document.getElementById(id)
  if (!target) return

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: getScrollBehavior(), block: "start" })
    })
  })
}

/**
 * Corrects hash scroll after client navigations and layout-affecting CSS
 * (e.g. content-visibility) so nav links like `/#reviews` land on the right section.
 */
function HashScrollHandler() {
  const pathname = usePathname()

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

  return null
}

export { HashScrollHandler, scrollToHashTarget }
