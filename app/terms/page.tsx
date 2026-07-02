import type { Metadata } from "next"
import Link from "next/link"

import {
  LegalDocument,
  LegalIntro,
  LegalSection,
} from "@/components/legal/legal-document"
import { PageHero } from "@/components/layout/page-hero"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { PageBreadcrumbs } from "@/components/navigation/page-breadcrumbs"
import { CONTACT_URLS } from "@/lib/contact/constants"
import { homeBreadcrumb } from "@/lib/breadcrumbs/presets"
import { consultationPath } from "@/lib/navigation"
import { createPageMetadata } from "@/lib/seo"
import { siteUrls } from "@/lib/site"

const termsHeadingId = "terms-page-heading"
const canonicalSiteUrl = siteUrls.productionPlaceholder

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
            headingId={termsHeadingId}
          />

          <LegalDocument>
            <LegalIntro>
              <p className="legal-document__meta">Last updated: July 2026</p>

              <p>
                Welcome to Thai Visa Company (&ldquo;we&rdquo;, &ldquo;our&rdquo;,
                or &ldquo;us&rdquo;). By accessing or using{" "}
                <a
                  href={canonicalSiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {canonicalSiteUrl}
                </a>
                , you agree to these Terms of Service. If you do not agree with
                these terms, please do not use our website or services.
              </p>
            </LegalIntro>

            <LegalSection title="Our Services">
              <p>
                Thai Visa Company provides information and consultation services
                relating to Thai visas, residency, immigration, and relocation.
              </p>
              <p>
                Information published on this website is provided for general
                guidance only and should not be considered legal advice or a
                guarantee of visa approval.
              </p>
              <p>
                Each immigration case is unique, and eligibility is determined
                solely by the relevant Thai government authorities.
              </p>
            </LegalSection>

            <LegalSection title="Consultations">
              <p>
                Submitting a consultation request does not create a client
                relationship or guarantee that we will provide services.
              </p>
              <p>
                Consultations are intended to help us understand your circumstances
                and recommend suitable visa options. You can{" "}
                <Link href={consultationPath}>request a consultation</Link> through
                our website.
              </p>
              <p>
                Additional documentation or information may be required before we
                can provide recommendations or quotations.
              </p>
            </LegalSection>

            <LegalSection title="Accuracy of Information">
              <p>
                You agree to provide complete, accurate, and truthful information
                when contacting us or requesting a consultation.
              </p>
              <p>
                Providing inaccurate or misleading information may affect our
                ability to assist you.
              </p>
            </LegalSection>

            <LegalSection title="Government Decisions">
              <p>
                Visa approvals, extensions, permits, and immigration decisions are
                made exclusively by the relevant Thai government authorities.
              </p>
              <p>Thai Visa Company cannot guarantee:</p>
              <ul>
                <li>Visa approval</li>
                <li>Processing times</li>
                <li>Government decisions</li>
                <li>Changes in immigration regulations</li>
              </ul>
            </LegalSection>

            <LegalSection title="Website Content">
              <p>
                We make reasonable efforts to keep the information on this website
                accurate and up to date.
              </p>
              <p>
                However, immigration laws, regulations, and government policies may
                change without notice.
              </p>
              <p>
                We do not guarantee that all information on this website will
                always be current, complete, or error-free.
              </p>
            </LegalSection>

            <LegalSection title="Intellectual Property">
              <p>
                Unless otherwise stated, all content on this website, including:
              </p>
              <ul>
                <li>Text</li>
                <li>Graphics</li>
                <li>Logos</li>
                <li>Branding</li>
                <li>Images</li>
                <li>Design</li>
                <li>Layout</li>
              </ul>
              <p>
                is the property of Thai Visa Company and may not be copied,
                reproduced, distributed, or modified without prior written
                permission.
              </p>
            </LegalSection>

            <LegalSection title="Third-Party Links">
              <p>Our website may contain links to third-party websites.</p>
              <p>These links are provided for convenience only.</p>
              <p>
                We are not responsible for the content, services, or privacy
                practices of external websites.
              </p>
            </LegalSection>

            <LegalSection title="Limitation of Liability">
              <p>
                To the fullest extent permitted by law, Thai Visa Company shall not
                be liable for any direct, indirect, incidental, or consequential
                damages arising from:
              </p>
              <ul>
                <li>Use of this website</li>
                <li>Reliance on website content</li>
                <li>Delays or interruptions</li>
                <li>Government decisions</li>
                <li>Changes to immigration policies</li>
              </ul>
            </LegalSection>

            <LegalSection title="Privacy">
              <p>
                Your use of this website is also governed by our{" "}
                <Link href="/privacy">Privacy Policy</Link>.
              </p>
              <p>
                Please review our Privacy Policy to understand how we collect and
                process your personal information.
              </p>
            </LegalSection>

            <LegalSection title="Changes to These Terms">
              <p>We may update these Terms of Service at any time.</p>
              <p>
                Any changes will become effective immediately upon publication on
                this page.
              </p>
              <p>
                The &ldquo;Last updated&rdquo; date will always indicate the latest
                revision.
              </p>
            </LegalSection>

            <LegalSection title="Governing Law">
              <p>
                These Terms of Service shall be governed by the applicable laws of
                Thailand, without regard to conflict of law principles.
              </p>
            </LegalSection>

            <LegalSection title="Contact">
              <p>
                If you have any questions regarding these Terms of Service or our
                visa services, please feel free to get in touch.
              </p>
              <p>You can:</p>
              <ul>
                <li>
                  <Link href={consultationPath}>Request a consultation</Link>
                </li>
                <li>
                  <a
                    href={CONTACT_URLS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact us via WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT_URLS.line}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat with us on LINE
                  </a>
                </li>
              </ul>
              <p>
                You can also visit our website at{" "}
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
