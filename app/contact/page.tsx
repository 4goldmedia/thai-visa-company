import type { Metadata } from "next"

import { ContactPageTemplate } from "@/components/templates/contact-page"
import { contactPageContent } from "@/lib/contact/page-content"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: contactPageContent.seo.title,
  description: contactPageContent.seo.description,
  path: "/contact",
  keywords: [...contactPageContent.seo.keywords],
})

export default function ContactPage() {
  return <ContactPageTemplate />
}
