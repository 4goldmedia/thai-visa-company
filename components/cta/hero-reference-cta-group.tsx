import Link from "next/link"
import { ArrowRight } from "lucide-react"

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
        <ArrowRight
          className="size-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
          aria-hidden
        />
      </Link>
    </div>
  )
}

export { HeroReferenceCtaGroup }
