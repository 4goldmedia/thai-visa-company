import { Fragment } from "react"

import { VisaFaqSection } from "@/components/sections/visa-faq"
import { VisaProcessSection } from "@/components/sections/visa-process"
import { VisaRelatedResourcesSection } from "@/components/sections/visa-related-resources"
import { VisaRelatedVisasSection } from "@/components/sections/visa-related-visas"
import { VisaBestForSection } from "@/components/sections/visa-best-for"
import { VisaComparisonSection } from "@/components/sections/visa-comparison"
import { VisaDocumentChecklistSection } from "@/components/sections/visa-document-checklist"
import { VisaFinalCtaSection } from "@/components/sections/visa-final-cta"
import { VisaHeroSection } from "@/components/sections/visa-hero"
import { VisaKeyFactsSection } from "@/components/sections/visa-key-facts"
import { VisaOverviewSection } from "@/components/sections/visa-overview"
import { VisaRequirementsSection } from "@/components/sections/visa-requirements"
import type { ContentRelatedLink } from "@/lib/content/types"
import {
  filterPublishedRelatedLinks,
  mergeRelatedLinks,
} from "@/lib/content/related"
import type { VisaSectionId } from "@/lib/visas/layout"
import { resolveVisaPageLayout } from "@/lib/visas/layout"
import type { ResolvedVisaPageContext } from "@/lib/visas/routing"
import type { VisaSectionIds } from "@/lib/visas/section-ids"

export type VisaPageSectionRenderContext = {
  context: ResolvedVisaPageContext
  ids: VisaSectionIds
}

function getResourceGuideItems(
  context: ResolvedVisaPageContext,
): ReadonlyArray<ContentRelatedLink> {
  const { visa, relatedArticles } = context
  return filterPublishedRelatedLinks(
    mergeRelatedLinks(visa.relatedResources.items, relatedArticles),
  ).slice(0, 4)
}

/**
 * Renders one visa page section. Returns null when optional data is absent.
 * FAQ JSON-LD must match visible `visa.faq.items` (see FaqSection).
 */
export function renderVisaPageSection(
  sectionId: VisaSectionId,
  { context, ids }: VisaPageSectionRenderContext,
): React.ReactNode | null {
  const { visa, relatedVisas } = context
  const resourceGuideItems = getResourceGuideItems(context)

  switch (sectionId) {
    case "hero":
      return (
        <VisaHeroSection
          sectionId={ids.hero}
          headingId={ids.heroHeading}
          visaSlug={visa.slug}
          updatedAt={visa.updatedAt}
          lastReviewed={visa.lastReviewed}
          {...visa.hero}
        />
      )

    case "lastUpdated":
      return null

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

    case "process":
      return (
        <VisaProcessSection
          sectionId={ids.process}
          headingId={ids.processHeading}
          title={visa.process.title}
          description={visa.process.description}
          eyebrow={visa.process.eyebrow}
          steps={visa.process.steps}
          processAriaLabel={`${visa.hero.title} application process`}
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
            name: `${visa.hero.title} — FAQ`,
            path: visa.path,
            description:
              visa.faq.description ??
              `Answers to common questions about ${visa.hero.title}.`,
          }}
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

    case "relatedResources":
      if (!resourceGuideItems.length) return null
      return (
        <VisaRelatedResourcesSection
          sectionId={ids.resources}
          headingId={ids.resourcesHeading}
          title={visa.relatedResources.title}
          description={visa.relatedResources.description}
          eyebrow={visa.relatedResources.eyebrow}
          items={resourceGuideItems}
          indexHref={visa.relatedResources.indexHref}
          listAriaLabel={`Guides related to ${visa.hero.title}`}
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
