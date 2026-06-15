import type { Metadata } from "next"

import { GuidesIndexTemplate } from "@/components/templates/guides-index"
import { guidesIndexContent } from "@/lib/guides/content/index"
import { guidesPath } from "@/lib/navigation"
import { createPageMetadata } from "@/lib/seo"

const { seo } = guidesIndexContent

export const metadata: Metadata = createPageMetadata({
  title: seo.title,
  description: seo.description,
  path: guidesPath,
  keywords: [...seo.keywords],
})

export default function GuidesPage() {
  return <GuidesIndexTemplate />
}
