"use client"

import * as React from "react"

import type { ContentArticleTocItem } from "@/lib/content/types"

/** Matches `--editorial-sticky-top` in editorial-article.css */
const STICKY_OFFSET_PX = 120
const ACTIVATION_BUFFER_PX = 12

function useArticleTocActive(items: ReadonlyArray<ContentArticleTocItem>) {
  const [activeId, setActiveId] = React.useState<string | undefined>(items[0]?.id)

  React.useEffect(() => {
    if (items.length === 0) return

    const activationLine = STICKY_OFFSET_PX + ACTIVATION_BUFFER_PX

    const headings = items
      .map((item) => ({ id: item.id, el: document.getElementById(item.id) }))
      .filter((entry): entry is { id: string; el: HTMLElement } => entry.el !== null)

    if (headings.length === 0) return

    let frame = 0

    const updateActive = () => {
      let current = headings[0].id

      for (const { id, el } of headings) {
        if (el.getBoundingClientRect().top <= activationLine) {
          current = id
        }
      }

      setActiveId((prev) => (prev === current ? prev : current))
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        frame = 0
        updateActive()
      })
    }

    updateActive()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [items])

  return activeId
}

export { useArticleTocActive }
