import { EditorialIsThailandGood } from "@/components/moving/editorial-is-thailand-good"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionReveal } from "@/components/motion"
import { movingPageContent } from "@/lib/moving/content"
import { movingPageSectionIds } from "@/lib/moving/section-ids"

function MovingIsThailandGoodSection() {
  const { isThailandGood } = movingPageContent

  return (
    <Section
      id={movingPageSectionIds.isThailandGood}
      spacing="default"
      aria-labelledby={movingPageSectionIds.isThailandGoodHeading}
      className="moving-is-thailand-good"
    >
      <Container>
        <SectionReveal>
          <EditorialIsThailandGood
            data={isThailandGood}
            headingId={movingPageSectionIds.isThailandGoodHeading}
          />
        </SectionReveal>
      </Container>
    </Section>
  )
}

export { MovingIsThailandGoodSection }
