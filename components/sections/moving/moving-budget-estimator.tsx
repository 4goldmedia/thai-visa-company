import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionReveal } from "@/components/motion"
import { EditorialFaqGrid } from "@/components/moving/editorial-faq-grid"
import { MovingSectionHeader } from "@/components/moving/moving-section-header"
import { MonthlyBudgetEstimator } from "@/components/moving/monthly-budget-estimator"
import { FaqJsonLd } from "@/components/seo/faq-json-ld"
import { movingPageContent, movingPagePath } from "@/lib/moving/content"
import { movingPageSectionIds } from "@/lib/moving/section-ids"
import { sectionContentOffsetClass, sectionDividerClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

function MovingBudgetEstimatorSection() {
  const { budgetEstimator } = movingPageContent

  return (
    <Section
      id={movingPageSectionIds.budgetEstimator}
      spacing="default"
      aria-labelledby={movingPageSectionIds.budgetEstimatorHeading}
      className="moving-budget-band"
    >
      <FaqJsonLd
        items={budgetEstimator.faq.items}
        name={budgetEstimator.faq.title}
        path={movingPagePath}
        description={budgetEstimator.intro}
        id="schema-faq-moving-budget-estimator"
      />
      <Container>
        <SectionReveal>
          <MovingSectionHeader
            eyebrow={budgetEstimator.eyebrow}
            title={budgetEstimator.title}
            intro={budgetEstimator.intro}
            headingId={movingPageSectionIds.budgetEstimatorHeading}
            tone="dark"
          />

          <div className={sectionContentOffsetClass}>
            <MonthlyBudgetEstimator
              controls={budgetEstimator.controls}
              results={budgetEstimator.results}
              disclaimer={budgetEstimator.disclaimer}
            />
          </div>

          <div
            className={cn("moving-budget-estimator__faq", sectionDividerClass)}
            aria-labelledby={movingPageSectionIds.budgetEstimatorFaqHeading}
          >
            <h2
              id={movingPageSectionIds.budgetEstimatorFaqHeading}
              className="moving-budget-estimator__faq-title"
            >
              {budgetEstimator.faq.title}
            </h2>
            <EditorialFaqGrid
              items={budgetEstimator.faq.items}
              className="moving-budget-estimator__faq-grid"
            />
          </div>
        </SectionReveal>
      </Container>
    </Section>
  )
}

export { MovingBudgetEstimatorSection }
