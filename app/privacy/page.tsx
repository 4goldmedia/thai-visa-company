import type { Metadata } from "next"

import {
  LegalDocument,
  LegalIntro,
  LegalSection,
} from "@/components/legal/legal-document"
import { PageHero } from "@/components/layout/page-hero"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { PageBreadcrumbs } from "@/components/navigation/page-breadcrumbs"
import { homeBreadcrumb } from "@/lib/breadcrumbs/presets"
import { createPageMetadata } from "@/lib/seo"
import { siteUrls } from "@/lib/site"

const privacyHeadingId = "privacy-page-heading"
const canonicalSiteUrl = siteUrls.productionPlaceholder

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
            headingId={privacyHeadingId}
          />

          <LegalDocument>
            <LegalIntro>
              <p className="legal-document__meta">Last updated: July 2026</p>

              <p>
                At Thai Visa Company (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or
                &ldquo;us&rdquo;), we value your privacy and are committed to
                protecting your personal information. This Privacy Policy explains
                how we collect, use, and safeguard the information you provide when
                visiting{" "}
                <a
                  href={canonicalSiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {canonicalSiteUrl}
                </a>
                .
              </p>
            </LegalIntro>

            <LegalSection title="Information We Collect">
              <p>When you contact us or request a consultation, we may collect:</p>
              <ul>
                <li>Full name</li>
                <li>Email address</li>
                <li>Nationality</li>
                <li>Visa type or service you are interested in</li>
                <li>Any information you choose to include in your message</li>
              </ul>
              <p>
                We may also automatically collect limited technical information
                including:
              </p>
              <ul>
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Pages visited</li>
                <li>Referral source</li>
                <li>Cookies and analytics data</li>
              </ul>
            </LegalSection>

            <LegalSection title="How We Use Your Information">
              <p>We use your information to:</p>
              <ul>
                <li>Respond to your enquiries</li>
                <li>Provide visa consultation services</li>
                <li>Recommend suitable visa pathways</li>
                <li>Manage your consultation requests</li>
                <li>Improve our website and customer experience</li>
                <li>Communicate with you regarding your enquiry</li>
                <li>Maintain internal business records</li>
                <li>Comply with applicable legal obligations</li>
              </ul>
              <p>
                We only collect information that is reasonably necessary to
                provide our services.
              </p>
            </LegalSection>

            <LegalSection title="Consultation Requests & CRM">
              <p>
                When you submit a consultation request through our website, your
                information is securely stored in our internal customer
                relationship management (CRM) system so our team can review,
                manage, and respond to your enquiry efficiently.
              </p>
              <p>
                We do not sell or share your personal information with third
                parties for marketing purposes.
              </p>
            </LegalSection>

            <LegalSection title="Cookies">
              <p>Our website may use cookies and similar technologies to:</p>
              <ul>
                <li>Improve website performance</li>
                <li>Understand visitor behaviour</li>
                <li>Measure website traffic</li>
                <li>Enhance user experience</li>
              </ul>
              <p>
                You may disable cookies through your browser settings if you
                prefer.
              </p>
            </LegalSection>

            <LegalSection title="Third-Party Services">
              <p>
                We use trusted third-party providers to operate our business.
                These services may include:
              </p>
              <ul>
                <li>Website hosting</li>
                <li>Customer relationship management (CRM)</li>
                <li>Email communication services</li>
                <li>Website analytics</li>
              </ul>
              <p>
                These providers only receive the information necessary to perform
                their services on our behalf.
              </p>
            </LegalSection>

            <LegalSection title="Data Security">
              <p>
                We take reasonable technical and organisational measures to
                protect your personal information against unauthorised access,
                disclosure, alteration, or destruction.
              </p>
              <p>
                While no internet transmission can be guaranteed to be completely
                secure, we follow industry best practices to safeguard your
                information.
              </p>
            </LegalSection>

            <LegalSection title="Data Retention">
              <p>
                We retain personal information only for as long as necessary to:
              </p>
              <ul>
                <li>Respond to your enquiry</li>
                <li>Provide our services</li>
                <li>Meet legal, accounting, or regulatory obligations</li>
              </ul>
              <p>
                When information is no longer required, it will be securely
                deleted or anonymised where appropriate.
              </p>
            </LegalSection>

            <LegalSection title="Your Rights">
              <p>Depending on your location, you may have the right to:</p>
              <ul>
                <li>Request access to your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Withdraw consent where applicable</li>
                <li>Request a copy of the information we hold about you</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us using the
                contact information available on our website.
              </p>
            </LegalSection>

            <LegalSection title="External Links">
              <p>
                Our website may contain links to third-party websites. We are not
                responsible for the privacy practices or content of those websites.
              </p>
            </LegalSection>

            <LegalSection title="Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be published on this page together with an updated revision
                date.
              </p>
            </LegalSection>

            <LegalSection title="Contact">
              <p>
                If you have any questions regarding this Privacy Policy or how we
                handle your personal information, please contact us through the
                contact methods listed on{" "}
                <a
                  href={canonicalSiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {canonicalSiteUrl}
                </a>
                .
              </p>
            </LegalSection>
          </LegalDocument>
        </Container>
      </Section>
    </main>
  )
}
