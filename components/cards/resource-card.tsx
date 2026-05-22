import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { ctaLabels } from "@/lib/cta"
import type { ResourceArticleStatus } from "@/lib/resources/types"
import { cardSurfaceClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

type ResourceCardProps = {
  /** Article title — natural search-style phrasing */
  title: string
  /** Short supporting description */
  description: string
  /** Category or topic label, e.g. Retirement, DTV, Timelines */
  category: string
  /** Destination URL — omit when `status` is `planned` */
  href: string
  /** Published guides are linked; planned stubs show a calm coming-soon state */
  status?: ResourceArticleStatus
  /** CTA label — defaults to "Read guide" */
  ctaLabel?: string
  className?: string
}

function ResourceCard({
  title,
  description,
  category,
  href,
  status = "published",
  ctaLabel = ctaLabels.readGuide,
  className,
}: ResourceCardProps) {
  const isPlanned = status === "planned"

  return (
    <article
      data-slot="resource-card"
      data-status={status}
      className={cn(
        "relative flex h-full min-h-0 flex-col rounded-xl",
        cardSurfaceClass,
        !isPlanned && "group",
        isPlanned && "border-dashed bg-muted/5",
        className
      )}
    >
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-xs leading-none text-muted-foreground">
            <span className="sr-only">Topic: </span>
            {category}
          </p>
          {isPlanned ? (
            <span className="rounded-md bg-muted/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground sm:text-xs">
              Coming soon
            </span>
          ) : null}
        </div>

        <h3 className="mt-2.5 text-[15px] font-medium leading-snug text-foreground sm:mt-3">
          {title}
        </h3>

        <p className="mt-2 flex-1 text-[14px] leading-[1.65] text-muted-foreground sm:mt-2.5">
          {description}
        </p>

        {!isPlanned ? (
          <span
            className="mt-3.5 inline-flex items-center gap-1 text-[13px] font-medium text-foreground/70 transition-colors group-hover:text-foreground sm:mt-4"
            aria-hidden
          >
            {ctaLabel}
            <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        ) : (
          <p className="mt-3.5 text-[13px] leading-snug text-muted-foreground sm:mt-4">
            Guide in progress — message us on LINE if you need this topic now.
          </p>
        )}
      </div>

      {!isPlanned ? (
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
      ) : null}
    </article>
  )
}

export { ResourceCard }
export type { ResourceCardProps }
