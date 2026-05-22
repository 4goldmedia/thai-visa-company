import { ContactPageJsonLd } from "@/components/seo/contact-page-json-ld"
import { ContactHeroSection } from "@/components/sections/contact-hero"
import { ContactInquirySection } from "@/components/sections/contact-inquiry-section"
import { ContactTrustStrip } from "@/components/sections/contact-trust-strip"
import { PageBreadcrumbs } from "@/components/navigation/page-breadcrumbs"
import { getContactPageBreadcrumbs } from "@/lib/breadcrumbs"
import { siteBrand } from "@/lib/site"

function ContactPageTemplate() {
  return (
    <>
      <ContactPageJsonLd />
      <main
        id="main-content"
        tabIndex={-1}
        aria-label={`Contact ${siteBrand.name}`}
        className="flex flex-1 flex-col overflow-x-clip bg-background"
      >
        <PageBreadcrumbs
          items={getContactPageBreadcrumbs()}
          containerSize="content"
        />
        <ContactHeroSection />
        <ContactInquirySection />
        <ContactTrustStrip />
      </main>
    </>
  )
}

export { ContactPageTemplate }
