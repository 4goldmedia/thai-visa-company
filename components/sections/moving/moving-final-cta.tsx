import { PremiumCtaSection } from "@/components/sections/premium-cta-section"
import { analyticsCtaIds } from "@/lib/analytics/cta-ids"
import { movingPageContent } from "@/lib/moving/content"
import { movingPageSectionIds } from "@/lib/moving/section-ids"

function MovingFinalCtaSection() {
  const { finalCta } = movingPageContent

  return (
    <PremiumCtaSection
      sectionId={movingPageSectionIds.finalCta}
      headingId={movingPageSectionIds.finalCtaHeading}
      title={finalCta.title}
      description={finalCta.description}
      buttonLabel={finalCta.secondaryCta.label}
      analyticsSurface="resources"
      analyticsCtaId={analyticsCtaIds.finalCtaContact}
    />
  )
}

export { MovingFinalCtaSection }
