import { ConsultationExperience } from "@/components/sections/consultation-experience"
import { PageBreadcrumbs } from "@/components/navigation/page-breadcrumbs"
import { getConsultationPageBreadcrumbs } from "@/lib/breadcrumbs"
import { siteBrand } from "@/lib/site"

const consultationHeadingId = "consultation-page-heading"

/**
 * Dedicated consultation page  -  concierge-led layout with room for future sections.
 */
function ConsultationPageTemplate() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      aria-label={`Request a consultation, ${siteBrand.name}`}
      className="consultation-page flex flex-1 flex-col overflow-x-clip bg-background"
    >
      <PageBreadcrumbs
        items={getConsultationPageBreadcrumbs()}
        containerSize="default"
      />

      <ConsultationExperience headingId={consultationHeadingId} />

      {/* Future: testimonials, FAQ, or consultation details */}
    </main>
  )
}

export { ConsultationPageTemplate, consultationHeadingId }
