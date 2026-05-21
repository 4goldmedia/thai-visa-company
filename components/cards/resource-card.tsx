import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { ctaLabels } from "@/lib/cta"
import { cardSurfaceClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

type ResourceCardProps = {
  /** Article title — natural search-style phrasing */
  title: string
  /** Short supporting description */
  description: string
  /** Category or topic label, e.g. Retirement, DTV, Timelines */
  category: string
  /** Destination URL */
  href: string
  /** CTA label — defaults to "Read guide" */
  ctaLabel?: string
  className?: string
}

function ResourceCard({
  title,
  description,
  category,
  href,
  ctaLabel = ctaLabels.readGuide,
  className,
}: ResourceCardProps) {
  return (
    <article
      data-slot="resource-card"
      className={cn(
        "group relative flex h-full min-h-0 flex-col rounded-xl",
        cardSurfaceClass,
        className
      )}
    >
      <div className="flex min-w-0 flex-1 flex-col">
        <p className="text-xs leading-none text-muted-foreground">
          <span className="sr-only">Topic: </span>
          {category}
        </p>

        <h3 className="mt-2.5 text-[15px] font-medium leading-snug text-foreground sm:mt-3">
          {title}
        </h3>

        <p className="mt-2 flex-1 text-[14px] leading-[1.65] text-muted-foreground sm:mt-2.5">
          {description}
        </p>

        <span
          className="mt-3.5 inline-flex items-center gap-1 text-[13px] font-medium text-foreground/70 transition-colors group-hover:text-foreground sm:mt-4"
          aria-hidden
        >
          {ctaLabel}
          <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </span>
      </div>

      <Link
        href={href}
        className={cn(
          "absolute inset-0 rounded-xl",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        )}
      >
        <span className="sr-only">
          {ctaLabel} — {title}
        </span>
      </Link>
    </article>
  )
}

export { ResourceCard }
export type { ResourceCardProps }
