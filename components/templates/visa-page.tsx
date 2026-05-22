import { PageBreadcrumbs } from "@/components/navigation/page-breadcrumbs"
import { FaqSection } from "@/components/sections/faq"
import { FinalCTASection } from "@/components/sections/final-cta"
import { ProcessSection } from "@/components/sections/process"
import { RelatedResourcesSection } from "@/components/sections/related-resources"
import { ResourcesPreviewSection } from "@/components/sections/resources-preview"
import { VisaHeroSection } from "@/components/sections/visa-hero"
import { VisaOverviewSection } from "@/components/sections/visa-overview"
import { VisaRequirementsSection } from "@/components/sections/visa-requirements"
import { VisaPageJsonLd } from "@/components/seo/visa-page-json-ld"
import type { ResolvedVisaPageContext } from "@/lib/visas/routing"
import { getVisaPageRouteBreadcrumbs } from "@/lib/visas/routing"
import {
  filterPublishedRelatedLinks,
  mergeRelatedLinks,
} from "@/lib/content/related"
import { getVisaSectionIds } from "@/lib/visas/section-ids"

type VisaPageTemplateProps = {
  context: ResolvedVisaPageContext
}

/**
 * Reusable Thailand visa page layout — compose from visa section components.
 * Content from `lib/visas/content/*`; SEO from `lib/visas/routing`.
 */
function VisaPageTemplate({ context }: VisaPageTemplateProps) {
  const { visa, breadcrumbs, relatedVisas, relatedArticles } = context

  const resourceGuideItems = filterPublishedRelatedLinks(
    mergeRelatedLinks(visa.relatedResources.items, relatedArticles),
  ).slice(0, 4)
  const ids = getVisaSectionIds(visa.slug)
  const crumbs =
    breadcrumbs.length > 0
      ? breadcrumbs
      : getVisaPageRouteBreadcrumbs(visa)

  return (
    <>
      <VisaPageJsonLd visa={visa} />
      <main
        id="main-content"
        tabIndex={-1}
        aria-label={`${visa.hero.title} — Thailand visa information`}
        className="flex flex-1 flex-col overflow-x-clip bg-background"
      >
        <PageBreadcrumbs items={crumbs} />
        <VisaHeroSection
          sectionId={ids.hero}
          headingId={ids.heroHeading}
          visaSlug={visa.slug}
          {...visa.hero}
        />

        <VisaOverviewSection
          sectionId={ids.overview}
          headingId={ids.overviewHeading}
          title={visa.overview.title}
          description={visa.overview.description}
          eyebrow={visa.overview.eyebrow}
          audience={visa.overview.audience}
          eligibility={visa.overview.eligibility}
          practicalOverview={visa.overview.practicalOverview}
        />

        <VisaRequirementsSection
          sectionId={ids.requirements}
          headingId={ids.requirementsHeading}
          title={visa.requirements.title}
          description={visa.requirements.description}
          eyebrow={visa.requirements.eyebrow}
          requirements={visa.requirements.requirements}
          eligibility={visa.requirements.eligibility}
          documents={visa.requirements.documents}
        />

        <ProcessSection
          sectionId={ids.process}
          headingId={ids.processHeading}
          title={visa.process.title}
          description={visa.process.description}
          eyebrow={visa.process.eyebrow}
          steps={visa.process.steps}
          processAriaLabel={`${visa.hero.title} application process`}
        />

        <FinalCTASection
          sectionId={ids.finalCta}
          headingId={ids.finalCtaHeading}
          title={visa.finalCta.title}
          description={visa.finalCta.description}
          eyebrow={visa.finalCta.eyebrow}
          footnote={visa.finalCta.footnote}
          showExploreCta={false}
          analyticsSurface="visa_page"
          analyticsCtaId="final_cta_contact"
          visaSlug={visa.slug}
        />

        <FaqSection
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

        {relatedVisas.length > 0 ? (
          <RelatedResourcesSection
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
        ) : null}

        <ResourcesPreviewSection
          sectionId={ids.resources}
          headingId={ids.resourcesHeading}
          title={visa.relatedResources.title}
          description={visa.relatedResources.description}
          eyebrow={visa.relatedResources.eyebrow}
          items={resourceGuideItems}
          indexHref={visa.relatedResources.indexHref}
          listAriaLabel={`Guides related to ${visa.hero.title}`}
        />

      </main>
    </>
  )
}

export { VisaPageTemplate }
