import { ContactCtaGroup } from "@/components/cta"
import { Container } from "@/components/layout/container"
import { cn } from "@/lib/utils"

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
    <section className={cn("editorial-cta-band", className)} aria-label="Consultation">
      <Container>
        <div className="editorial-cta-band__inner">
          <h2 className="editorial-cta-band__title">{title}</h2>
          <p className="editorial-cta-band__description">{description}</p>
          <div className="editorial-cta-band__actions">
            <ContactCtaGroup
              showExplore={false}
              analyticsSurface="article"
              analyticsCtaId="article_editorial_cta"
              articleSlug={articleSlug}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export { ArticleCTA }
