import {
  PremiumCtaSection,
  premiumCtaButtonLabel,
} from "@/components/sections/premium-cta-section"
import { sectionHeadingIds, sectionIds } from "@/lib/section-ids"

type HomeFinalCtaSectionProps = {
  sectionId?: string
  className?: string
}

function HomeFinalCtaSection({
  sectionId = "final-cta",
  className,
}: HomeFinalCtaSectionProps) {
  return (
    <PremiumCtaSection
      sectionId={sectionId}
      headingId={sectionHeadingIds.finalCta}
      title="Ready to start your life in Thailand?"
      description="Get clear guidance on visa options, documentation, and next steps from licensed Thai immigration specialists."
      buttonLabel={premiumCtaButtonLabel}
      analyticsSurface="homepage"
      sectionClassName={className}
    />
  )
}

export { HomeFinalCtaSection, premiumCtaButtonLabel }
export type { HomeFinalCtaSectionProps }
