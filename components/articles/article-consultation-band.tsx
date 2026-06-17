import {
  PremiumCtaSection,
  premiumCtaButtonLabel,
} from "@/components/sections/premium-cta-section"
import { analyticsCtaIds } from "@/lib/analytics/cta-ids"

type ArticleConsultationBandProps = {
  title?: string
  description?: string
  articleSlug?: string
}

function ArticleConsultationBand({
  title = "Need help with your application?",
  description = "Share your situation and we will outline clear next steps for your visa file.",
  articleSlug,
}: ArticleConsultationBandProps) {
  return (
    <PremiumCtaSection
      title={title}
      description={description}
      buttonLabel={premiumCtaButtonLabel}
      analyticsSurface="article"
      analyticsCtaId={analyticsCtaIds.bookConsultation}
      articleSlug={articleSlug}
    />
  )
}

export { ArticleConsultationBand }
