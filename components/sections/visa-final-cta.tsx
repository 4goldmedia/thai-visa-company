import type { ContentVisaFinalCta } from "@/lib/content/types"
import {
  PremiumCtaSection,
  premiumCtaButtonLabel,
} from "@/components/sections/premium-cta-section"
import { analyticsCtaIds } from "@/lib/analytics/cta-ids"
import { visaPageClass } from "@/lib/visa-editorial-styles"
import { cn } from "@/lib/utils"

type VisaFinalCtaSectionProps = ContentVisaFinalCta & {
  sectionId: string
  headingId: string
  className?: string
}

function VisaFinalCtaSection({
  sectionId,
  headingId,
  title,
  description,
  headline,
  buttonLabel = premiumCtaButtonLabel,
  className,
}: VisaFinalCtaSectionProps) {
  const displayTitle = headline ?? title

  return (
    <PremiumCtaSection
      sectionId={sectionId}
      headingId={headingId}
      title={displayTitle}
      description={description}
      buttonLabel={buttonLabel}
      analyticsSurface="visa_page"
      analyticsCtaId={analyticsCtaIds.finalCtaContact}
      sectionClassName={cn(visaPageClass, "visa-final-cta", className)}
    />
  )
}

export { VisaFinalCtaSection }
export type { VisaFinalCtaSectionProps }
