import type { Metadata } from "next"

import { ConsultationPageTemplate } from "@/components/templates/consultation-page"
import { consultationPageContent } from "@/lib/content/consultation-page"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: consultationPageContent.seo.title,
  description: consultationPageContent.seo.description,
  path: "/consultation",
  keywords: [...consultationPageContent.seo.keywords],
})

export default function ConsultationPage() {
  return <ConsultationPageTemplate />
}
