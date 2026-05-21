import type { Metadata } from "next"

import { VisaPageTemplate } from "@/components/templates/visa-page"
import { retirementVisaPage } from "@/lib/visas/content/retirement"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: retirementVisaPage.seo.title,
  description: retirementVisaPage.seo.description,
  path: retirementVisaPage.path,
  keywords: retirementVisaPage.seo.keywords,
})

/**
 * Thailand Retirement Visa — first dedicated visa service page.
 * Content: `lib/visas/content/retirement.ts` · Layout: `VisaPageTemplate`
 */
export default function RetirementVisaPage() {
  return <VisaPageTemplate visa={retirementVisaPage} />
}
