import { SignatureMessagingCtaGroup } from "@/components/cta/signature-messaging-cta-group"
import { InquiryForm } from "@/components/forms/inquiry-form"
import { Container } from "@/components/layout/container"
import { consultationPageContent } from "@/lib/content/consultation-page"
import type { InquiryLeadSource } from "@/lib/forms/inquiry/types"

type ConsultationExperienceProps = {
  headingId: string
  leadSource?: InquiryLeadSource
  pagePath?: string
  formId?: string
}

/**
 * Two-column consultation layout  -  reusable on the dedicated consultation page.
 * Additional blocks (testimonials, FAQ) can be composed above/below in the page template.
 */
function ConsultationExperience({
  headingId,
  leadSource = "consultation-page",
  pagePath = "/consultation",
  formId = "consultation-form",
}: ConsultationExperienceProps) {
  const {
    eyebrow,
    title,
    description,
    messagingLabel,
    submitLabel,
  } = consultationPageContent

  return (
    <section
      className="consultation-experience"
      aria-labelledby={headingId}
    >
      <Container>
        <div className="consultation-experience__inner">
          <div className="consultation-experience__grid">
            <div className="consultation-experience__intro">
              <p className="consultation-experience__eyebrow">{eyebrow}</p>
              <h1 id={headingId} className="consultation-experience__title">
                {title}
              </h1>
              <p className="consultation-experience__description">
                {description}
              </p>

              <div className="consultation-experience__messaging">
                <p className="consultation-experience__messaging-label">
                  {messagingLabel}
                </p>
                <SignatureMessagingCtaGroup />
              </div>
            </div>

            <InquiryForm
              id={formId}
              variant="consultation"
              leadSource={leadSource}
              pagePath={pagePath}
              submitLabel={submitLabel}
              trackView
              ariaLabelledBy={headingId}
              className="consultation-experience__form min-w-0"
              controlClassName="consultation-experience__control"
              selectClassName="consultation-experience__select"
              textareaClassName="consultation-experience__textarea"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export { ConsultationExperience }
