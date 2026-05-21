import type { Metadata } from "next"

import { ResourcesIndexTemplate } from "@/components/templates/resources-index"
import { resourcesIndexContent } from "@/lib/resources"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: resourcesIndexContent.seo.title,
  description: resourcesIndexContent.seo.description,
  path: "/resources",
  keywords: resourcesIndexContent.seo.keywords,
})

export default function ResourcesPage() {
  return <ResourcesIndexTemplate />
}
