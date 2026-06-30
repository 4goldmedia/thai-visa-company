import { Fragment } from "react"

import { MovingBudgetEstimatorSection } from "@/components/sections/moving/moving-budget-estimator"
import { MovingCanForeignersMoveSection } from "@/components/sections/moving/moving-can-foreigners-move"
import { MovingCitiesSection } from "@/components/sections/moving/moving-cities"
import { MovingCostOfLivingSection } from "@/components/sections/moving/moving-cost-of-living"
import { MovingEverydayLifeSection } from "@/components/sections/moving/moving-everyday-life"
import { MovingFaqSection } from "@/components/sections/moving/moving-faq"
import { MovingFinalCtaSection } from "@/components/sections/moving/moving-final-cta"
import { MovingHeroSection } from "@/components/sections/moving/moving-hero"
import { MovingIsThailandGoodSection } from "@/components/sections/moving/moving-is-thailand-good"
import { MovingRetirementSection } from "@/components/sections/moving/moving-retirement"
import { MovingWorkingSection } from "@/components/sections/moving/moving-working"
import { MovingFamiliesSection } from "@/components/sections/moving/moving-families"
import { MovingVisaRoutesSection } from "@/components/sections/moving/moving-visa-routes"
import { MovingWhyMoveSection } from "@/components/sections/moving/moving-why-move"
import { movingPageContent } from "@/lib/moving/content"
import type { MovingSectionId } from "@/lib/moving/layout"
import { resolveMovingPageLayout } from "@/lib/moving/layout"
import type { MovingPageSectionIds } from "@/lib/moving/section-ids"

export type MovingPageSectionRenderContext = {
  ids: MovingPageSectionIds
}

export function renderMovingPageSection(
  sectionId: MovingSectionId,
  _context: MovingPageSectionRenderContext,
): React.ReactNode | null {
  switch (sectionId) {
    case "hero":
      return <MovingHeroSection />
    case "why-move":
      return <MovingWhyMoveSection />
    case "is-thailand-good":
      return <MovingIsThailandGoodSection />
    case "can-foreigners-move":
      return <MovingCanForeignersMoveSection />
    case "everyday-life":
      return <MovingEverydayLifeSection />
    case "cost-of-living":
      return <MovingCostOfLivingSection />
    case "budget-estimator":
      return <MovingBudgetEstimatorSection />
    case "cities":
      return <MovingCitiesSection />
    case "working":
      return <MovingWorkingSection />
    case "families":
      return <MovingFamiliesSection />
    case "retirement":
      return <MovingRetirementSection />
    case "visa-routes":
      return <MovingVisaRoutesSection />
    case "faq":
      return <MovingFaqSection />
    case "final-cta":
      return <MovingFinalCtaSection />
    default:
      return null
  }
}

export function renderMovingPageSections(
  context: MovingPageSectionRenderContext,
): React.ReactNode {
  const layout = resolveMovingPageLayout(movingPageContent.layout)

  return layout.map((sectionId) => {
    const node = renderMovingPageSection(sectionId, context)
    if (!node) return null
    return <Fragment key={sectionId}>{node}</Fragment>
  })
}
