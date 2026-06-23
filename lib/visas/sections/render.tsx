import { Fragment } from "react"

import {
  VisaDecisionGuidesSection,
  VisaEmbassyVarianceTableSection,
  VisaEntityGlossarySection,
  VisaFeesAndTimelinesSection,
  VisaGovernmentProcessSection,
  VisaLegalBoundariesSection,
  VisaOfficialSourcesSection,
  VisaPitfallsSection,
  VisaPracticeInsightsSection,
} from "@/components/sections/visa-authority-blocks"
import { VisaFaqSection } from "@/components/sections/visa-faq"
import { VisaProcessSection } from "@/components/sections/visa-process"
import { VisaRelatedResourcesSection } from "@/components/sections/visa-related-resources"
import { VisaRelatedVisasSection } from "@/components/sections/visa-related-visas"
import { VisaBestForSection } from "@/components/sections/visa-best-for"
import { VisaComparisonSection } from "@/components/sections/visa-comparison"
import { VisaComplianceSection } from "@/components/sections/visa-compliance"
import { VisaDocumentChecklistSection } from "@/components/sections/visa-document-checklist"
import { VisaDefinitionSection } from "@/components/sections/visa-definition-section"
import { VisaEeatSection } from "@/components/sections/visa-eeat-section"
import { VisaFinalCtaSection } from "@/components/sections/visa-final-cta"
import { VisaHeroSection } from "@/components/sections/visa-hero"
import { VisaKeyFactsSection } from "@/components/sections/visa-key-facts"
import { VisaLastUpdatedSection } from "@/components/sections/visa-last-updated"
import { VisaOverviewSection } from "@/components/sections/visa-overview"
import { VisaRequirementsSection } from "@/components/sections/visa-requirements"
import type { VisaSectionId } from "@/lib/visas/layout"
import { resolveVisaPageLayout } from "@/lib/visas/layout"
import type { ResolvedVisaPageContext } from "@/lib/visas/routing"
import type { VisaSectionIds } from "@/lib/visas/section-ids"

export type VisaPageSectionRenderContext = {
  context: ResolvedVisaPageContext
  ids: VisaSectionIds
}

/**
 * Renders one visa page section. Returns null when optional data is absent.
 * FAQ JSON-LD must match visible `visa.faq.items` (see FaqSection).
 */
export function renderVisaPageSection(
  sectionId: VisaSectionId,
  { context, ids }: VisaPageSectionRenderContext,
): React.ReactNode | null {
  const { visa, relatedVisas, relatedResources, clusterHref } = context

  switch (sectionId) {
    case "hero":
      return (
        <VisaHeroSection
          sectionId={ids.hero}
          headingId={ids.heroHeading}
          visaSlug={visa.slug}
          {...visa.hero}
        />
      )

    case "lastUpdated":
      if (!visa.updatedAt) return null
      return (
        <VisaLastUpdatedSection
          sectionId={ids.lastUpdated}
          updatedAt={visa.updatedAt}
          lastReviewed={visa.lastReviewed}
        />
      )

    case "definition":
      if (!visa.definition?.body) return null
      return (
        <VisaDefinitionSection
          sectionId={ids.definition}
          headingId={ids.definitionHeading}
          {...visa.definition}
        />
      )

    case "keyFacts":
      if (!visa.keyFacts?.items.length) return null
      return (
        <VisaKeyFactsSection
          sectionId={ids.keyFacts}
          headingId={ids.keyFactsHeading}
          {...visa.keyFacts}
        />
      )

    case "bestFor":
      if (!visa.bestFor) return null
      return (
        <VisaBestForSection
          sectionId={ids.bestFor}
          headingId={ids.bestForHeading}
          {...visa.bestFor}
        />
      )

    case "overview":
      return (
        <VisaOverviewSection
          sectionId={ids.overview}
          headingId={ids.overviewHeading}
          title={visa.overview.title}
          description={visa.overview.description}
          intro={visa.overview.intro}
          eyebrow={visa.overview.eyebrow}
          audience={visa.overview.audience}
          eligibility={visa.overview.eligibility}
          practicalOverview={visa.overview.practicalOverview}
        />
      )

    case "officialSources":
      if (!visa.officialSources?.items.length) return null
      return (
        <VisaOfficialSourcesSection
          sectionId={ids.officialSources}
          headingId={ids.officialSourcesHeading}
          {...visa.officialSources}
        />
      )

    case "entityGlossary":
      if (!visa.entityGlossary?.entries.length) return null
      return (
        <VisaEntityGlossarySection
          sectionId={ids.entityGlossary}
          headingId={ids.entityGlossaryHeading}
          {...visa.entityGlossary}
        />
      )

    case "comparison":
      if (!visa.comparison?.rows.length) return null
      return (
        <VisaComparisonSection
          sectionId={ids.comparison}
          headingId={ids.comparisonHeading}
          highlightColumnId={visa.slug}
          {...visa.comparison}
        />
      )

    case "requirements":
      return (
        <VisaRequirementsSection
          sectionId={ids.requirements}
          headingId={ids.requirementsHeading}
          {...visa.requirements}
        />
      )

    case "checklist":
      if (!visa.checklist?.groups.length) return null
      return (
        <VisaDocumentChecklistSection
          sectionId={ids.checklist}
          headingId={ids.checklistHeading}
          {...visa.checklist}
        />
      )

    case "feesAndTimelines":
      if (
        !visa.feesAndTimelines?.fees.length &&
        !visa.feesAndTimelines?.timelines?.length
      ) {
        return null
      }
      return (
        <VisaFeesAndTimelinesSection
          sectionId={ids.feesAndTimelines}
          headingId={ids.feesAndTimelinesHeading}
          {...visa.feesAndTimelines}
        />
      )

    case "governmentProcess":
      if (!visa.governmentProcess?.steps.length) return null
      return (
        <VisaGovernmentProcessSection
          sectionId={ids.governmentProcess}
          headingId={ids.governmentProcessHeading}
          processAriaLabel={`${visa.hero.title} government application steps`}
          {...visa.governmentProcess}
        />
      )

    case "pitfalls":
      if (!visa.pitfalls?.rejections?.length && !visa.pitfalls?.mistakes?.length) {
        return null
      }
      return (
        <VisaPitfallsSection
          sectionId={ids.pitfalls}
          headingId={ids.pitfallsHeading}
          {...visa.pitfalls}
        />
      )

    case "practiceInsights":
      if (!visa.practiceInsights?.insights.length) return null
      return (
        <VisaPracticeInsightsSection
          sectionId={ids.practiceInsights}
          headingId={ids.practiceInsightsHeading}
          {...visa.practiceInsights}
        />
      )

    case "embassyVarianceTable":
      if (!visa.embassyVarianceTable?.rows.length) return null
      return (
        <VisaEmbassyVarianceTableSection
          sectionId={ids.embassyVarianceTable}
          headingId={ids.embassyVarianceTableHeading}
          {...visa.embassyVarianceTable}
        />
      )

    case "compliance":
      if (!visa.compliance?.cards.length) return null
      return (
        <VisaComplianceSection
          sectionId={ids.compliance}
          headingId={ids.complianceHeading}
          {...visa.compliance}
        />
      )

    case "legalBoundaries":
      if (!visa.legalBoundaries) return null
      return (
        <VisaLegalBoundariesSection
          sectionId={ids.legalBoundaries}
          headingId={ids.legalBoundariesHeading}
          {...visa.legalBoundaries}
        />
      )

    case "decisionGuides":
      if (!visa.decisionGuides?.guides.length) return null
      return (
        <VisaDecisionGuidesSection
          sectionId={ids.decisionGuides}
          headingId={ids.decisionGuidesHeading}
          {...visa.decisionGuides}
        />
      )

    case "process":
      return (
        <VisaProcessSection
          sectionId={ids.process}
          headingId={ids.processHeading}
          title={visa.process.title}
          description={visa.process.description}
          eyebrow={visa.process.eyebrow}
          steps={visa.process.steps}
          processAriaLabel={`${visa.hero.title}: how we help`}
        />
      )

    case "faq":
      if (!visa.faq.items.length) return null
      return (
        <VisaFaqSection
          sectionId={ids.faq}
          headingId={ids.faqHeading}
          title={visa.faq.title}
          description={visa.faq.description}
          eyebrow={visa.faq.eyebrow}
          items={visa.faq.items}
          jsonLd={{
            name: `${visa.hero.title}: FAQ`,
            path: visa.path,
            description:
              visa.faq.description ??
              `Answers to common questions about ${visa.hero.title}.`,
          }}
        />
      )

    case "eeat":
      if (!visa.eeat?.methodology.length) return null
      return (
        <VisaEeatSection
          sectionId={ids.eeat}
          headingId={ids.eeatHeading}
          lastReviewed={visa.lastReviewed}
          {...visa.eeat}
        />
      )

    case "relatedResources":
      if (!relatedResources.length) return null
      return (
        <VisaRelatedResourcesSection
          sectionId={ids.relatedResources}
          headingId={ids.relatedResourcesHeading}
          title={visa.relatedResources.title}
          description={visa.relatedResources.description}
          eyebrow={visa.relatedResources.eyebrow}
          items={relatedResources}
          clusterHref={clusterHref}
        />
      )

    case "relatedVisas":
      if (!relatedVisas.length) return null
      return (
        <VisaRelatedVisasSection
          sectionId={ids.relatedVisas}
          headingId={ids.relatedVisasHeading}
          eyebrow={visa.relatedVisas?.eyebrow ?? "Explore options"}
          title={visa.relatedVisas?.title ?? "Other visa services"}
          description={
            visa.relatedVisas?.description ??
            "Compare related routes that may fit your situation."
          }
          items={relatedVisas}
          maxItems={3}
          listAriaLabel={`Visa services related to ${visa.hero.title}`}
        />
      )

    case "finalCta":
      return (
        <VisaFinalCtaSection
          sectionId={ids.finalCta}
          headingId={ids.finalCtaHeading}
          {...visa.finalCta}
        />
      )

    default:
      return null
  }
}

export function renderVisaPageSections(
  renderContext: VisaPageSectionRenderContext,
): React.ReactNode {
  const layout = resolveVisaPageLayout(renderContext.context.visa.layout)

  return layout.map((sectionId) => {
    const node = renderVisaPageSection(sectionId, renderContext)
    if (!node) return null
    return <Fragment key={sectionId}>{node}</Fragment>
  })
}
