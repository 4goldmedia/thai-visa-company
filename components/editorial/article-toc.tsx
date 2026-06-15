"use client"

import * as React from "react"

import { useArticleTocActive } from "@/components/editorial/use-article-toc-active"
import type { ContentArticleTocItem } from "@/lib/content/types"
import { cn } from "@/lib/utils"

type ArticleTOCProps = {
  items: ReadonlyArray<ContentArticleTocItem>
  className?: string
  /** Wrap in sidebar card chrome */
  variant?: "card" | "plain"
}

function ArticleTOCLinks({
  items,
  activeId,
}: {
  items: ReadonlyArray<ContentArticleTocItem>
  activeId?: string
}) {
  return (
    <ul className="editorial-toc__list">
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className={cn(
              "editorial-toc__link",
              activeId === item.id && "editorial-toc__link--active",
            )}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

function ArticleTOC({ items, className, variant = "card" }: ArticleTOCProps) {
  const activeId = useArticleTocActive(items)

  if (items.length === 0) return null

  const nav = (
    <nav aria-label="On this page">
      <ArticleTOCLinks items={items} activeId={activeId} />
    </nav>
  )

  if (variant === "plain") {
    return <div className={className}>{nav}</div>
  }

  return (
    <div className={cn("editorial-sidebar-card", className)}>
      <p className="editorial-sidebar-card__label">On this page</p>
      <div className="editorial-sidebar-card__body">{nav}</div>
    </div>
  )
}

function ArticleTOCMobile({ items }: { items: ReadonlyArray<ContentArticleTocItem> }) {
  if (items.length === 0) return null

  return (
    <div className="editorial-toc-mobile">
      <ArticleTOC items={items} variant="card" />
    </div>
  )
}

export { ArticleTOC, ArticleTOCMobile, ArticleTOCLinks }
