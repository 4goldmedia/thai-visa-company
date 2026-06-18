import { RelatedResourcesSection } from "@/components/sections/related-resources"
import type { ContentRelatedLink } from "@/lib/content/types"

type VisaRelatedResourcesSectionProps = {
  sectionId: string
  headingId: string
  title?: string
  description?: string
  eyebrow?: string
  items: ReadonlyArray<ContentRelatedLink>
  clusterHref?: string
  clusterLabel?: string
  maxItems?: number
}

function VisaRelatedResourcesSection({
  sectionId,
  headingId,
  title = "Related guides and articles",
  description,
  eyebrow = "Deep dives",
  items,
  clusterHref,
  clusterLabel = "Browse all articles in this subject",
  maxItems = 6,
}: VisaRelatedResourcesSectionProps) {
  if (!items.length) return null

  return (
    <RelatedResourcesSection
      sectionId={sectionId}
      headingId={headingId}
      title={title}
      description={description}
      eyebrow={eyebrow}
      items={items}
      maxItems={maxItems}
      listAriaLabel="Related visa guides and articles"
      indexHref={clusterHref}
      indexLabel={clusterLabel}
      showIndexLink={Boolean(clusterHref)}
    />
  )
}

export { VisaRelatedResourcesSection }
