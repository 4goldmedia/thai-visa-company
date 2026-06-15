import type { Metadata } from "next"

import { PageHero } from "@/components/layout/page-hero"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { PageBreadcrumbs } from "@/components/navigation/page-breadcrumbs"
import { homeBreadcrumb } from "@/lib/breadcrumbs/presets"
import { createPageMetadata } from "@/lib/seo"

const privacyHeadingId = "privacy-page-heading"

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "How Thai Visa Company collects, uses, and protects your personal information.",
  path: "/privacy",
  keywords: ["privacy policy", "Thai Visa Company", "data protection"],
})

export default function PrivacyPage() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      aria-label="Privacy Policy"
      className="flex flex-1 flex-col overflow-x-clip bg-background"
    >
      <PageBreadcrumbs
        items={[homeBreadcrumb, { label: "Privacy Policy", href: "/privacy" }]}
        containerSize="prose"
      />

      <Section spacing="spacious" aria-labelledby={privacyHeadingId}>
        <Container size="prose">
          <PageHero
            eyebrow="Legal"
            title="Privacy Policy"
            lead="We are preparing the full privacy policy for this site. Contact us if you have questions about how we handle inquiry information today."
            headingId={privacyHeadingId}
          />
        </Container>
      </Section>
    </main>
  )
}
