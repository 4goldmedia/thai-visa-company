import type { Metadata } from "next"

import { MovingToThailandPageTemplate } from "@/components/templates/moving-to-thailand-page"
import { getMovingPageMetadataInput } from "@/lib/moving/routing/metadata"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata(getMovingPageMetadataInput())

export default function MovingToThailandPage() {
  return <MovingToThailandPageTemplate />
}
