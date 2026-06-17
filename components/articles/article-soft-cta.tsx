import {
  PremiumCtaSection,
  premiumCtaButtonLabel,
} from "@/components/sections/premium-cta-section"
import { analyticsCtaIds } from "@/lib/analytics/cta-ids"

type ArticleSoftCtaProps = {
  title: string
  description: string
  articleSlug: string
  className?: string
}

function ArticleSoftCta({
  title,
  description,
  articleSlug,
  className,
}: ArticleSoftCtaProps) {
  return (
    <PremiumCtaSection
      layout="inset"
      title={title}
      description={description}
      buttonLabel={premiumCtaButtonLabel}
      analyticsSurface="article"
      analyticsCtaId="article_soft_cta_contact"
      articleSlug={articleSlug}
      sectionClassName={className}
    />
  )
}

export { ArticleSoftCta }
