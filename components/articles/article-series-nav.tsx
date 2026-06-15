import Link from "next/link"

import type { ArticleSeriesNav } from "@/lib/content/series"
import { cn } from "@/lib/utils"

type ArticleSeriesNavProps = ArticleSeriesNav & {
  className?: string
}

function ArticleSeriesNav({
  prev,
  next,
  seriesTitle,
  className,
}: ArticleSeriesNavProps) {
  if (!prev && !next) return null

  return (
    <nav
      aria-label={seriesTitle ? `${seriesTitle} navigation` : "Article series navigation"}
      className={cn(
        "mt-[var(--article-section-gap,2.75rem)] grid gap-4 border-t border-border/35 pt-10 sm:grid-cols-2 sm:pt-12",
        className,
      )}
    >
      {prev ? (
        <Link
          href={prev.href}
          className="group rounded-lg border border-border/40 px-4 py-3.5 transition-colors hover:border-border/70 hover:bg-muted/10 sm:px-5 sm:py-4"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-muted-foreground/75">
            {prev.label}
          </span>
          <span className="mt-1.5 block text-[15px] font-medium leading-snug text-foreground/85 transition-colors group-hover:text-foreground sm:text-[16px]">
            {prev.title}
          </span>
        </Link>
      ) : (
        <span aria-hidden className="hidden sm:block" />
      )}
      {next ? (
        <Link
          href={next.href}
          className="group rounded-lg border border-border/40 px-4 py-3.5 text-left transition-colors hover:border-border/70 hover:bg-muted/10 sm:px-5 sm:py-4 sm:text-right"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-muted-foreground/75">
            {next.label}
          </span>
          <span className="mt-1.5 block text-[15px] font-medium leading-snug text-foreground/85 transition-colors group-hover:text-foreground sm:text-[16px]">
            {next.title}
          </span>
        </Link>
      ) : null}
    </nav>
  )
}

export { ArticleSeriesNav }
