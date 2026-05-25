import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { MessagingCtaPair } from "@/components/cta/messaging-cta-pair"
import { analyticsDataAttributes } from "@/lib/analytics/attributes"
import { analyticsCtaIds } from "@/lib/analytics/cta-ids"
import type { AnalyticsSurface } from "@/lib/analytics"
import { ctaHref, ctaLabels, ctaReassuranceLine } from "@/lib/cta"
import {
  ctaTertiaryLinkClass,
  heroCtaGroupClass,
  heroCtaReassuranceClass,
  heroCtaTertiaryLinkClass,
  heroPremiumCtaGroupClass,
  heroPremiumExploreLinkClass,
} from "@/lib/section-styles"
import { cn } from "@/lib/utils"

type ContactCtaGroupProps = {
  /** Visual density for hero vs inner pages */
  layout?: "default" | "hero" | "hero-premium"
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
  layout = "default",
  reassurance = ctaReassuranceLine,
  showExplore = true,
  analyticsSurface = "homepage",
  analyticsCtaId = analyticsCtaIds.contactGroup,
  visaSlug,
  articleSlug,
  className,
}: ContactCtaGroupProps) {
  const isHero = layout === "hero"
  const isHeroPremium = layout === "hero-premium"
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
      className={cn(
        isHeroPremium
          ? heroPremiumCtaGroupClass
          : isHero
            ? heroCtaGroupClass
            : "flex flex-col gap-3",
        className,
      )}
      {...groupAnalytics}
    >
      {reassurance ? (
        <p
          className={cn(
            isHero
              ? heroCtaReassuranceClass
              : "text-sm leading-snug text-muted-foreground",
          )}
        >
          {reassurance}
        </p>
      ) : null}

      <MessagingCtaPair
        layout={
          isHeroPremium ? "hero-premium" : isHero ? "hero" : "stack"
        }
      />

      {showExplore ? (
        <Link
          href={ctaHref.exploreVisas}
          className={
            isHeroPremium
              ? heroPremiumExploreLinkClass
              : isHero
                ? heroCtaTertiaryLinkClass
                : ctaTertiaryLinkClass
          }
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
