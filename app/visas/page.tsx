import type { Metadata } from "next"

import { VisasHubTemplate } from "@/components/templates/visas-hub"
import { visasHubContent } from "@/lib/visas/hub-content"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: visasHubContent.seo.title,
  description: visasHubContent.seo.description,
  path: visasHubContent.path,
  keywords: [...visasHubContent.seo.keywords],
})

export default function VisasHubPage() {
  return <VisasHubTemplate />
}
