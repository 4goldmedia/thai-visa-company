import {
  PremiumCtaSection,
  premiumCtaButtonLabel,
} from "@/components/sections/premium-cta-section"
import { analyticsCtaIds } from "@/lib/analytics/cta-ids"

type ArticleCTAProps = {
  title?: string
  description?: string
  articleSlug?: string
  className?: string
}

function ArticleCTA({
  title = "Need help with your Thailand visa application?",
  description = "We help applicants understand eligibility, prepare documentation, and avoid common mistakes before submitting their application.",
  articleSlug,
  className,
}: ArticleCTAProps) {
  return (
    <PremiumCtaSection
      title={title}
      description={description}
      buttonLabel={premiumCtaButtonLabel}
      analyticsSurface="article"
      analyticsCtaId={analyticsCtaIds.articleCtaContact}
      articleSlug={articleSlug}
      sectionClassName={className}
    />
  )
}

export { ArticleCTA }
