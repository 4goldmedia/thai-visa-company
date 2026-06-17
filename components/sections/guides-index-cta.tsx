import {
  PremiumCtaSection,
  premiumCtaButtonLabel,
} from "@/components/sections/premium-cta-section"
import { analyticsCtaIds } from "@/lib/analytics/cta-ids"
import { guidesIndexSectionIds } from "@/lib/guides/section-ids"

function GuidesIndexCta() {
  return (
    <PremiumCtaSection
      sectionId={guidesIndexSectionIds.cta}
      headingId={`${guidesIndexSectionIds.cta}-heading`}
      title="Need help applying what you read?"
      description="Share your nationality and timeline, and we reply with clear next steps."
      buttonLabel={premiumCtaButtonLabel}
      analyticsSurface="article"
      analyticsCtaId={analyticsCtaIds.bookConsultation}
    />
  )
}

export { GuidesIndexCta }
