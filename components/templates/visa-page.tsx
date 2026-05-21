import { PageBreadcrumbs } from "@/components/navigation/page-breadcrumbs"
import { getVisaPageBreadcrumbs } from "@/lib/breadcrumbs"
import { FaqSection } from "@/components/sections/faq"
import { FinalCTASection } from "@/components/sections/final-cta"
import { ProcessSection } from "@/components/sections/process"
import { ResourcesPreviewSection } from "@/components/sections/resources-preview"
import { VisaHeroSection } from "@/components/sections/visa-hero"
import { VisaOverviewSection } from "@/components/sections/visa-overview"
import { VisaRequirementsSection } from "@/components/sections/visa-requirements"
import { VisaPageJsonLd } from "@/components/seo/visa-page-json-ld"
import { getVisaSectionIds } from "@/lib/visas/section-ids"
import type { VisaPageContent } from "@/lib/visas/types"

type VisaPageTemplateProps = {
  visa: VisaPageContent
}

/**
 * Reusable Thailand visa page layout — compose from visa section components.
 * Content is supplied via `lib/visas/content/*` and rendered by `app/visas/[slug]/page.tsx`.
 */
function VisaPageTemplate({ visa }: VisaPageTemplateProps) {
  const ids = getVisaSectionIds(visa.slug)

  return (
    <>
      <VisaPageJsonLd visa={visa} />
      <main
        id="main-content"
        tabIndex={-1}
        aria-label={`${visa.hero.title} — Thailand visa information`}
        className="flex flex-1 flex-col overflow-x-clip bg-background"
      >
        <PageBreadcrumbs
          items={getVisaPageBreadcrumbs({
            title: visa.hero.title,
            path: visa.path,
          })}
        />
        <VisaHeroSection
          sectionId={ids.hero}
          headingId={ids.heroHeading}
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

        <FaqSection
          sectionId={ids.faq}
          headingId={ids.faqHeading}
          title={visa.faq.title}
          description={visa.faq.description}
          eyebrow={visa.faq.eyebrow}
          items={visa.faq.items}
          jsonLd={{
            name: `${visa.hero.title} FAQ`,
            path: visa.path,
            description: visa.faq.description,
          }}
        />

        <ResourcesPreviewSection
          sectionId={ids.resources}
          headingId={ids.resourcesHeading}
          title={visa.relatedResources.title}
          description={visa.relatedResources.description}
          eyebrow={visa.relatedResources.eyebrow}
          items={visa.relatedResources.items}
          indexHref={visa.relatedResources.indexHref}
          listAriaLabel={`Guides related to ${visa.hero.title}`}
        />

        <FinalCTASection
          sectionId={ids.finalCta}
          headingId={ids.finalCtaHeading}
          title={visa.finalCta.title}
          description={visa.finalCta.description}
          eyebrow={visa.finalCta.eyebrow}
          footnote={visa.finalCta.footnote}
          showExploreCta={false}
        />
      </main>
    </>
  )
}

export { VisaPageTemplate }
