"use client"

import { resolveCanonicalUrlString } from "@/lib/seo"
import type { ContentArticleTocItem } from "@/lib/content/types"
import { cn } from "@/lib/utils"

import { ArticleTOCLinks } from "@/components/editorial/article-toc"
import { useArticleTocActive } from "@/components/editorial/use-article-toc-active"

type ArticleSidebarToolsProps = {
  items: ReadonlyArray<ContentArticleTocItem>
  path: string
  title: string
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
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="editorial-share__btn"
    >
      {children}
    </a>
  )
}

function ArticleSidebarTools({ items, path, title, className }: ArticleSidebarToolsProps) {
  const activeId = useArticleTocActive(items)
  const url = resolveCanonicalUrlString(path)
  const hasToc = items.length > 0

  return (
    <div className={cn("editorial-sidebar-card", className)}>
      {hasToc ? (
        <section aria-label="On this page">
          <p className="editorial-sidebar-card__label">On this page</p>
          <div className="editorial-sidebar-card__body">
            <ArticleTOCLinks items={items} activeId={activeId} />
          </div>
        </section>
      ) : null}

      <section
        className={cn(hasToc && "editorial-sidebar-tools__share")}
        aria-label="Share article"
      >
        <p className="editorial-sidebar-card__label">Share article</p>
        <div className="editorial-sidebar-card__body">
          <div className="editorial-share__actions editorial-share__actions--toc">
            <ShareButton href={buildShareUrl("facebook", url, title)} label="Share on Facebook">
              <span aria-hidden>f</span>
            </ShareButton>
            <ShareButton href={buildShareUrl("linkedin", url, title)} label="Share on LinkedIn">
              <span aria-hidden>in</span>
            </ShareButton>
            <ShareButton href={buildShareUrl("x", url, title)} label="Share on X">
              <span aria-hidden>X</span>
            </ShareButton>
          </div>
        </div>
      </section>
    </div>
  )
}

export { ArticleSidebarTools }
