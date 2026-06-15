import { PageHero } from "@/components/layout/page-hero"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { guidesIndexSectionIds } from "@/lib/guides/section-ids"

type GuidesIndexHeroProps = {
  eyebrow: string
  title: string
  overview: string
}

function GuidesIndexHero({ eyebrow, title, overview }: GuidesIndexHeroProps) {
  return (
    <Section
      id={guidesIndexSectionIds.hero}
      spacing="spacious"
      aria-labelledby={guidesIndexSectionIds.heroHeading}
      className="border-b border-border/50"
    >
      <Container>
        <PageHero eyebrow={eyebrow} title={title} lead={overview} headingId={guidesIndexSectionIds.heroHeading} />
      </Container>
    </Section>
  )
}

export { GuidesIndexHero }
