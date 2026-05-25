import { ContactCtaGroup } from "@/components/cta"
import { InquiryForm } from "@/components/forms"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { contactPageContent } from "@/lib/contact/page-content"
import { contactSectionIds } from "@/lib/contact/section-ids"
import { sectionDescriptionClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

const { inquiry, messagingAside } = contactPageContent

function ContactInquirySection() {
  return (
    <Section
      id={contactSectionIds.inquiry}
      spacing="default"
      aria-labelledby={contactSectionIds.inquiryHeading}
    >
      <Container size="content">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-start lg:gap-12 xl:gap-14">
          <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:gap-6">
            <div>
              <h2
                id={contactSectionIds.inquiryHeading}
                className="text-base font-semibold tracking-tight text-foreground sm:text-lg"
              >
                {messagingAside.title}
              </h2>
              <p className={cn(sectionDescriptionClass, "mt-2 max-w-md")}>
                {messagingAside.description}
              </p>
            </div>

            <ContactCtaGroup
              showExplore={false}
              analyticsSurface="contact"
              analyticsCtaId="inquiry_sidebar_contact"
            />

            <p className="text-[13px] leading-snug text-muted-foreground sm:text-sm">
              {contactPageContent.hero.responseTime}
            </p>
          </div>

          <InquiryForm
            leadSource="contact-page"
            pagePath="/contact"
            title={inquiry.title}
            description={inquiry.description}
            timeEstimate={inquiry.timeEstimate}
            submitLabel={inquiry.submitLabel}
            trustNote={inquiry.trustNote}
            trackView
          />
        </div>
      </Container>
    </Section>
  )
}

export { ContactInquirySection }
