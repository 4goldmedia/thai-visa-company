import { EditorialMovingCost } from "@/components/moving/editorial-moving-cost"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionReveal } from "@/components/motion"
import { movingPageContent } from "@/lib/moving/content"
import { movingPageSectionIds } from "@/lib/moving/section-ids"

function MovingCostOfLivingSection() {
  const { costOfLiving } = movingPageContent

  return (
    <Section
      id={movingPageSectionIds.costOfLiving}
      spacing="default"
      aria-labelledby={movingPageSectionIds.costOfLivingHeading}
      className="moving-cost-band"
    >
      <Container>
        <SectionReveal>
          <EditorialMovingCost
            eyebrow={costOfLiving.eyebrow}
            title={costOfLiving.title}
            intro={costOfLiving.intro}
            headingId={movingPageSectionIds.costOfLivingHeading}
            tiers={costOfLiving.tiers}
            categories={costOfLiving.categories}
            featuredCategoryIds={costOfLiving.featuredCategoryIds}
            summary={costOfLiving.summary}
            disclaimer={costOfLiving.disclaimer}
            links={costOfLiving.links}
          />
        </SectionReveal>
      </Container>
    </Section>
  )
}

export { MovingCostOfLivingSection }
