import { buildPageSchemaGraph, buildService, buildWebPage, JsonLdScript } from "@/lib/schema"
import type { VisaPageContent } from "@/lib/visas/types"

type VisaPageJsonLdProps = {
  visa: VisaPageContent
}

/** Visa page graph — breadcrumbs via `PageBreadcrumbs`; FAQ via `FaqSection` */
function VisaPageJsonLd({ visa }: VisaPageJsonLdProps) {
  const graph = buildPageSchemaGraph({
    nodes: [
      buildWebPage({
        path: visa.path,
        name: visa.hero.title,
        description: visa.seo.description,
      }),
      buildService({
        name: visa.hero.title,
        description: visa.seo.description,
        path: visa.path,
        serviceType: "Visa consulting",
        areaServed: "Thailand",
      }),
    ],
  })

  return <JsonLdScript data={graph} id={`schema-visa-${visa.slug}`} />
}

export { VisaPageJsonLd }
