import { EditorialInsightGrid } from "@/components/moving/editorial-insight-grid"
import { MovingSectionHeader, mergeEditorialIntro } from "@/components/moving/moving-section-header"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionReveal } from "@/components/motion"
import { movingPageContent } from "@/lib/moving/content"
import { movingEverydayLifeSubsectionIcons } from "@/lib/moving/everyday-life-section-icons"
import { movingPageSectionIds } from "@/lib/moving/section-ids"
import { sectionContentOffsetClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

function MovingEverydayLifeSection() {
  const { everydayLife } = movingPageContent

  return (
    <Section
      id={movingPageSectionIds.everydayLife}
      spacing="default"
      aria-labelledby={movingPageSectionIds.everydayLifeHeading}
      className="moving-everyday-life"
    >
      <Container>
        <SectionReveal>
          <MovingSectionHeader
            title={everydayLife.title}
            intro={mergeEditorialIntro(everydayLife)}
            headingId={movingPageSectionIds.everydayLifeHeading}
          />

          {everydayLife.subsections ? (
            <EditorialInsightGrid
              subsections={everydayLife.subsections}
              columns={3}
              className={cn("moving-everyday-life__grid", sectionContentOffsetClass)}
              icons={movingEverydayLifeSubsectionIcons}
            />
          ) : null}
        </SectionReveal>
      </Container>
    </Section>
  )
}

export { MovingEverydayLifeSection }
