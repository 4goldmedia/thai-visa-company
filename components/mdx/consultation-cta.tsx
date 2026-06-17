import {
  PremiumCtaSection,
  premiumCtaButtonLabel,
} from "@/components/sections/premium-cta-section"
import { analyticsCtaIds } from "@/lib/analytics/cta-ids"

type ConsultationCtaProps = {
  title?: string
  description?: string
}

/** Opt-in MDX consultation band  -  use sparingly in article bodies */
function ConsultationCta({ title, description }: ConsultationCtaProps) {
  return (
    <PremiumCtaSection
      layout="inset"
      title={title ?? "Need help with your application?"}
      description={
        description ??
        "Share your situation and we will outline clear next steps for your visa file."
      }
      buttonLabel={premiumCtaButtonLabel}
      analyticsSurface="article"
      analyticsCtaId={analyticsCtaIds.bookConsultation}
    />
  )
}

export { ConsultationCta }
