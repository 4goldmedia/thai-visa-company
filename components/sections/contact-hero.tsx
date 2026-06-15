import { ContactCtaGroup } from "@/components/cta"
import { PageHero } from "@/components/layout/page-hero"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { contactPageContent } from "@/lib/contact/page-content"
import { contactSectionIds } from "@/lib/contact/section-ids"

const { hero } = contactPageContent

function ContactHeroSection() {
  return (
    <Section
      id={contactSectionIds.hero}
      spacing="spacious"
      aria-labelledby={contactSectionIds.heroHeading}
      className="border-b border-border/50"
    >
      <Container>
        <PageHero
          eyebrow={hero.eyebrow}
          title={hero.title}
          lead={hero.overview}
          headingId={contactSectionIds.heroHeading}
          ctaSlot={
            <ContactCtaGroup
              showExplore={false}
              analyticsSurface="contact"
              analyticsCtaId="hero_contact"
            />
          }
          metaLine={hero.responseTime}
        />
      </Container>
    </Section>
  )
}

export { ContactHeroSection }
