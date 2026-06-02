import Link from "next/link"

import { SignatureMessagingCtaGroup } from "@/components/cta/signature-messaging-cta-group"
import { analyticsDataAttributes } from "@/lib/analytics/attributes"
import { analyticsCtaIds } from "@/lib/analytics/cta-ids"
import type { AnalyticsSurface } from "@/lib/analytics"
import { ctaHref, ctaLabels } from "@/lib/cta"
import {
  editorialLinkClass,
  signatureCtaPrimaryClass,
  heroCtaGroupClass,
  heroCtaReassuranceClass,
  heroPremiumCtaGroupClass,
} from "@/lib/section-styles"
import { cn } from "@/lib/utils"

type ContactCtaGroupProps = {
  /** Visual density for hero vs inner pages */
  layout?: "default" | "hero" | "hero-premium"
  /** Optional line above buttons — set null to hide */
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

/**
 * Primary consultation action with signature LINE + WhatsApp secondary pair.
 */
function ContactCtaGroup({
  layout = "default",
  reassurance = null,
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

  const consultationAnalytics = analyticsDataAttributes({
    ctaId: analyticsCtaIds.bookConsultation,
    surface: analyticsSurface,
    visaSlug,
    articleSlug,
    ctaLabel: ctaLabels.requestConsultation,
  })

  return (
    <div
      className={cn(
        isHeroPremium
          ? heroPremiumCtaGroupClass
          : isHero
            ? heroCtaGroupClass
            : "flex flex-col gap-4",
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

      <Link
        href={ctaHref.requestConsultation}
        className={cn(
          signatureCtaPrimaryClass,
          isHeroPremium ? "w-full" : "sm:w-auto",
        )}
        {...consultationAnalytics}
      >
        {ctaLabels.requestConsultation}
      </Link>

      <div className="flex flex-col gap-3">
        <p className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
          Or message us
        </p>
        <SignatureMessagingCtaGroup />
      </div>

      {showExplore ? (
        <Link
          href={ctaHref.exploreVisas}
          className={editorialLinkClass}
          {...exploreAnalytics}
        >
          {ctaLabels.exploreVisas}
        </Link>
      ) : null}
    </div>
  )
}

export { ContactCtaGroup }
export type { ContactCtaGroupProps }
