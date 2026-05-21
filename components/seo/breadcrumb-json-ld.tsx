import {
  breadcrumbsToSchemaItems,
  type BreadcrumbLink,
} from "@/lib/breadcrumbs"
import { buildBreadcrumbSchemaGraph } from "@/lib/schema/breadcrumb-schema"
import { JsonLdScript } from "@/lib/schema/json-ld-script"

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
