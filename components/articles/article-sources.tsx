import type { ContentSourceRef } from "@/lib/content/types"
import { cn } from "@/lib/utils"

type ArticleSourcesProps = {
  items: ReadonlyArray<ContentSourceRef>
  headingId?: string
  title?: string
  className?: string
}

function ArticleSources({
  items,
  headingId = "article-sources-heading",
  title = "Sources",
  className,
}: ArticleSourcesProps) {
  if (items.length === 0) return null

  return (
    <section
      aria-labelledby={headingId}
      className={cn(
        "mt-[var(--article-section-gap,2.75rem)] scroll-mt-28 border-t border-border/35 pt-10 sm:pt-12",
        className,
      )}
    >
      <h2
        id={headingId}
        className="text-[1.125rem] font-semibold tracking-[-0.02em] text-foreground sm:text-[1.1875rem]"
      >
        {title}
      </h2>
      <ol className="mt-6 list-decimal space-y-3 pl-5 text-[15px] leading-[1.72] text-muted-foreground sm:text-[16px]">
        {items.map((source) => (
          <li key={`${source.href}-${source.title}`} className="pl-1">
            <a
              href={source.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground/75 underline decoration-foreground/20 underline-offset-[3px] transition-colors hover:text-foreground hover:decoration-foreground/40"
            >
              {source.title}
            </a>
            {source.accessedAt ? (
              <span className="text-muted-foreground/70"> (accessed {source.accessedAt})</span>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  )
}

export { ArticleSources }
