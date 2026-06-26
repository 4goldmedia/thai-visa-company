"use client"

import * as React from "react"

import { resolveCanonicalUrlString } from "@/lib/seo"
import type { ContentArticleTocItem } from "@/lib/content/types"
import { cn } from "@/lib/utils"

import { ArticleTOCLinks } from "@/components/editorial/article-toc"
import { useArticleTocActive } from "@/components/editorial/use-article-toc-active"

const QUICK_ANSWER_TOC_ITEM = {
  id: "article-quick-answer-heading",
  label: "Quick answer",
} as const

type ArticleSidebarToolsProps = {
  items: ReadonlyArray<ContentArticleTocItem>
  path: string
  title: string
  showQuickAnswerLink?: boolean
  className?: string
}

function buildShareUrl(
  network: "facebook" | "linkedin" | "x",
  url: string,
  title: string,
): string {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  switch (network) {
    case "facebook":
      return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
    case "linkedin":
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
    case "x":
      return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
  }
}

function ShareButton({
  href,
  label,
  children,
  onClick,
}: {
  href?: string
  label: string
  children: React.ReactNode
  onClick?: () => void
}) {
  const className = "editorial-share__btn"

  if (onClick) {
    return (
      <button type="button" onClick={onClick} aria-label={label} className={className}>
        {children}
      </button>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={className}
    >
      {children}
    </a>
  )
}

function ArticleSidebarTools({
  items,
  path,
  title,
  showQuickAnswerLink = false,
  className,
}: ArticleSidebarToolsProps) {
  const [copied, setCopied] = React.useState(false)
  const url = resolveCanonicalUrlString(path)

  const tocItems = React.useMemo(() => {
    if (!showQuickAnswerLink) return items
    return [QUICK_ANSWER_TOC_ITEM, ...items]
  }, [items, showQuickAnswerLink])

  const activeId = useArticleTocActive(tocItems)
  const hasToc = tocItems.length > 0

  const copyLink = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }, [url])

  return (
    <div className={cn("editorial-sidebar-card", className)}>
      {hasToc ? (
        <section aria-label="On this page">
          <p className="editorial-sidebar-card__label">On this page</p>
          <div className="editorial-sidebar-card__body">
            <ArticleTOCLinks items={tocItems} activeId={activeId} />
          </div>
        </section>
      ) : null}

      <section
        className={cn(hasToc && "editorial-sidebar-tools__share")}
        aria-label="Share this article"
      >
        <p className="editorial-sidebar-card__label">Share this article</p>
        <div className="editorial-sidebar-card__body">
          <div className="editorial-share__actions">
            <ShareButton href={buildShareUrl("facebook", url, title)} label="Share on Facebook">
              <span aria-hidden>f</span>
            </ShareButton>
            <ShareButton href={buildShareUrl("linkedin", url, title)} label="Share on LinkedIn">
              <span aria-hidden>in</span>
            </ShareButton>
            <ShareButton href={buildShareUrl("x", url, title)} label="Share on X">
              <span aria-hidden>X</span>
            </ShareButton>
            <ShareButton
              onClick={copyLink}
              label={copied ? "Link copied" : "Copy link to clipboard"}
            >
              <span aria-hidden>{copied ? "✓" : "⧉"}</span>
            </ShareButton>
          </div>
        </div>
      </section>
    </div>
  )
}

export { ArticleSidebarTools }
