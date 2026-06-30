import { EditorialCanForeignersMove } from "@/components/moving/editorial-can-foreigners-move"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionReveal } from "@/components/motion"
import { movingPageContent } from "@/lib/moving/content"
import { movingPageSectionIds } from "@/lib/moving/section-ids"

function MovingCanForeignersMoveSection() {
  const { canForeignersMove } = movingPageContent

  return (
    <Section
      id={movingPageSectionIds.canForeignersMove}
      spacing="default"
      aria-labelledby={movingPageSectionIds.canForeignersMoveHeading}
      className="moving-can-foreigners-move"
    >
      <Container>
        <SectionReveal>
          <EditorialCanForeignersMove
            data={canForeignersMove}
            headingId={movingPageSectionIds.canForeignersMoveHeading}
            quickAnswerId={movingPageSectionIds.quickAnswer}
          />
        </SectionReveal>
      </Container>
    </Section>
  )
}

export { MovingCanForeignersMoveSection }
