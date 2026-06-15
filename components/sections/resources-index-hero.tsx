import { ContactCtaGroup } from "@/components/cta"
import { PageHero } from "@/components/layout/page-hero"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { resourcesIndexSectionIds } from "@/lib/resources/section-ids"

type ResourcesIndexHeroProps = {
  eyebrow: string
  title: string
  overview: string
  headingId?: string
  sectionId?: string
}

function ResourcesIndexHero({
  eyebrow,
  title,
  overview,
  headingId = resourcesIndexSectionIds.heroHeading,
  sectionId = resourcesIndexSectionIds.hero,
}: ResourcesIndexHeroProps) {
  return (
    <Section
      id={sectionId}
      spacing="spacious"
      aria-labelledby={headingId}
      className="border-b border-border/50"
    >
      <Container>
        <PageHero
          eyebrow={eyebrow}
          title={title}
          lead={overview}
          headingId={headingId}
          metaLine="Prefer a direct answer? Message us on LINE or WhatsApp."
          ctaSlot={
            <ContactCtaGroup
              showExplore={false}
              analyticsSurface="resources"
              analyticsCtaId="hero_contact"
            />
          }
        />
      </Container>
    </Section>
  )
}

export { ResourcesIndexHero }
