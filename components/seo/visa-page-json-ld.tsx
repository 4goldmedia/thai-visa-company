import { buildVisaPageRouteSchemaGraph } from "@/lib/visas/routing"
import { JsonLdScript } from "@/lib/seo/schema"
import type { VisaPageContent } from "@/lib/visas/types"

type VisaPageJsonLdProps = {
  visa: VisaPageContent
}

/** Visa page graph  -  WebPage + Service + BreadcrumbList; FAQ via `FaqSection` */
function VisaPageJsonLd({ visa }: VisaPageJsonLdProps) {
  return (
    <JsonLdScript
      data={buildVisaPageRouteSchemaGraph(visa)}
      id={`schema-visa-${visa.slug}`}
    />
  )
}

export { VisaPageJsonLd }
