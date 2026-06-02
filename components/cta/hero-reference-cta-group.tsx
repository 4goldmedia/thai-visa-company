import Link from "next/link"

import { analyticsDataAttributes } from "@/lib/analytics/attributes"
import { analyticsCtaIds } from "@/lib/analytics/cta-ids"
import type { AnalyticsSurface } from "@/lib/analytics"
import { ctaHref, ctaLabels } from "@/lib/cta"
import { heroExploreLinkClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

type HeroReferenceCtaGroupProps = {
  analyticsSurface?: AnalyticsSurface
  className?: string
}

/**
 * Homepage hero — single editorial “Explore visas” link; messaging strip is primary conversion.
 */
function HeroReferenceCtaGroup({
  analyticsSurface = "homepage",
  className,
}: HeroReferenceCtaGroupProps) {
  return (
    <div className={cn(className)}>
      <Link
        href={ctaHref.exploreVisas}
        className={heroExploreLinkClass}
        {...analyticsDataAttributes({
          ctaId: analyticsCtaIds.exploreVisas,
          surface: analyticsSurface,
          ctaLabel: ctaLabels.exploreVisas,
        })}
      >
        {ctaLabels.exploreVisas}
      </Link>
    </div>
  )
}

export { HeroReferenceCtaGroup }
