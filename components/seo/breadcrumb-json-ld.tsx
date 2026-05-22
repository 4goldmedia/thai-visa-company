import type { BreadcrumbLink } from "@/lib/breadcrumbs"
import {
  breadcrumbsToSchemaItems,
  buildBreadcrumbSchemaGraph,
  JsonLdScript,
} from "@/lib/seo/schema"

type BreadcrumbJsonLdProps = {
  items: ReadonlyArray<BreadcrumbLink>
  id?: string
}

function BreadcrumbJsonLd({ items, id = "schema-breadcrumb" }: BreadcrumbJsonLdProps) {
  const graph = buildBreadcrumbSchemaGraph(breadcrumbsToSchemaItems(items))
  if (!graph) return null

  return <JsonLdScript data={graph} id={id} />
}

export { BreadcrumbJsonLd }
