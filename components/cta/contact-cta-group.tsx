import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { MessagingCtaPair } from "@/components/cta/messaging-cta-pair"
import { analyticsDataAttributes } from "@/lib/analytics/attributes"
import { analyticsCtaIds } from "@/lib/analytics/cta-ids"
import type { AnalyticsSurface } from "@/lib/analytics"
import { ctaHref, ctaLabels, ctaReassuranceLine } from "@/lib/cta"
import { ctaTertiaryLinkClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

type ContactCtaGroupProps = {
  /** Optional line above buttons — defaults to site-wide reassurance */
  reassurance?: string | null
  /** Show tertiary link to visa services */
  showExplore?: boolean
  /** Analytics surface for CTA click events */
  analyticsSurface?: AnalyticsSurface
  /** Stable CTA id for reporting, e.g. `hero_contact` */
  analyticsCtaId?: string
  visaSlug?: string
  articleSlug?: string
  className?: string
}

function ContactCtaGroup({
  reassurance = ctaReassuranceLine,
  showExplore = true,
  analyticsSurface = "homepage",
  analyticsCtaId = analyticsCtaIds.contactGroup,
  visaSlug,
  articleSlug,
  className,
}: ContactCtaGroupProps) {
  const groupAnalytics = analyticsDataAttributes({
    ctaId: analyticsCtaId,
    surface: analyticsSurface,
    visaSlug,
    articleSlug,
  })

  const exploreAnalytics = showExplore
    ? analyticsDataAttributes({
        ctaId: analyticsCtaIds.exploreVisas,
        surface: analyticsSurface,
        visaSlug,
        articleSlug,
        ctaLabel: ctaLabels.exploreVisas,
      })
    : undefined

  return (
    <div
      className={cn("flex flex-col gap-3", className)}
      {...groupAnalytics}
    >
      {reassurance ? (
        <p className="text-[13px] font-medium leading-snug text-foreground/85 sm:text-sm">
          {reassurance}
        </p>
      ) : null}

      <MessagingCtaPair layout="stack" />

      {showExplore ? (
        <Link
          href={ctaHref.exploreVisas}
          className={ctaTertiaryLinkClass}
          {...exploreAnalytics}
        >
          {ctaLabels.exploreVisas}
          <ArrowRight
            className="size-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
            aria-hidden
          />
        </Link>
      ) : null}
    </div>
  )
}

export { ContactCtaGroup }
export type { ContactCtaGroupProps }
