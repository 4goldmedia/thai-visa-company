import Link from "next/link"
import { ArrowRight, CircleCheck } from "lucide-react"

import { ctaLabels } from "@/lib/cta"
import { cardSurfaceClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

type VisaCardProps = {
  /** Visa name, e.g. Tourist Visa */
  title: string
  /** Short supporting description */
  description: string
  /** Primary value proposition for this visa type */
  benefit: string
  /** Destination URL for the card CTA */
  href: string
  /** CTA label — defaults to "Learn more" */
  ctaLabel?: string
  className?: string
}

function VisaCard({
  title,
  description,
  benefit,
  href,
  ctaLabel = ctaLabels.learnMore,
  className,
}: VisaCardProps) {
  return (
    <article
      data-slot="visa-card"
      className={cn(
        "group relative flex h-full min-h-0 flex-col rounded-xl",
        cardSurfaceClass,
        className
      )}
    >
      <div className="flex flex-1 flex-col">
        <h3 className="text-[15px] font-medium leading-snug text-foreground sm:text-base">
          {title}
        </h3>

        <p className="mt-2 flex-1 text-[14px] leading-[1.65] text-muted-foreground sm:mt-2.5 sm:leading-relaxed">
          {description}
        </p>

        <div className="mt-4 flex flex-col gap-3 sm:mt-5">
          <p className="flex items-start gap-2 text-[13px] leading-snug text-foreground/90 sm:text-sm">
            <CircleCheck
              className="mt-0.5 size-3.5 shrink-0 text-foreground/35"
              aria-hidden
            />
            <span>
              <span className="sr-only">Key benefit: </span>
              {benefit}
            </span>
          </p>

          <span
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-foreground/80 transition-colors group-hover:text-foreground"
            aria-hidden
          >
            {ctaLabel}
            <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </div>
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

export { VisaCard }
export type { VisaCardProps }
