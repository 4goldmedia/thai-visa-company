import { MovingSectionHeader, mergeEditorialIntro } from "@/components/moving/moving-section-header"
import { EditorialWhyMoveGrid } from "@/components/moving/editorial-why-move-grid"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionReveal } from "@/components/motion"
import { movingPageContent } from "@/lib/moving/content"
import { movingPageSectionIds } from "@/lib/moving/section-ids"
import { sectionContentOffsetClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

function MovingWhyMoveSection() {
  const { whyMove } = movingPageContent

  return (
    <Section
      id={movingPageSectionIds.whyMove}
      spacing="default"
      aria-labelledby={movingPageSectionIds.whyMoveHeading}
      className="moving-why-move"
    >
      <Container>
        <SectionReveal>
          <MovingSectionHeader
            title={whyMove.title}
            intro={mergeEditorialIntro(whyMove)}
            headingId={movingPageSectionIds.whyMoveHeading}
          />

          {whyMove.subsections ? (
            <EditorialWhyMoveGrid
              subsections={whyMove.subsections}
              className={cn("moving-why-move__grid", sectionContentOffsetClass)}
            />
          ) : null}
        </SectionReveal>
      </Container>
    </Section>
  )
}

export { MovingWhyMoveSection }
