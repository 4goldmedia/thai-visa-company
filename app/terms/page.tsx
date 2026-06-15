import type { Metadata } from "next"

import { PageHero } from "@/components/layout/page-hero"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { PageBreadcrumbs } from "@/components/navigation/page-breadcrumbs"
import { homeBreadcrumb } from "@/lib/breadcrumbs/presets"
import { createPageMetadata } from "@/lib/seo"

const termsHeadingId = "terms-page-heading"

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Service",
  description:
    "Terms governing use of the Thai Visa Company website and consultation services.",
  path: "/terms",
  keywords: ["terms of service", "Thai Visa Company", "website terms"],
})

export default function TermsPage() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      aria-label="Terms of Service"
      className="flex flex-1 flex-col overflow-x-clip bg-background"
    >
      <PageBreadcrumbs
        items={[homeBreadcrumb, { label: "Terms of Service", href: "/terms" }]}
        containerSize="prose"
      />

      <Section spacing="spacious" aria-labelledby={termsHeadingId}>
        <Container size="prose">
          <PageHero
            eyebrow="Legal"
            title="Terms of Service"
            lead="We are preparing the full terms of service for this site. Contact us if you need clarification before requesting a consultation."
            headingId={termsHeadingId}
          />
        </Container>
      </Section>
    </main>
  )
}
