import { platformBusinessProfile } from "@/lib/schema/business-profile"
import { buildBreadcrumbList } from "@/lib/schema/breadcrumb"
import { buildPageSchemaGraph } from "@/lib/schema/graph"
import { buildHowToFromProcessSteps } from "@/lib/schema/howto"
import { buildOrganizationReference } from "@/lib/schema/organization"
import { buildService } from "@/lib/schema/service"
import { buildWebPage } from "@/lib/schema/web"
import type { ArticleAuthorInput, BreadcrumbItem, JsonLdGraphDocument, JsonLdNode } from "@/lib/schema/types"
import { getSiteUrl } from "@/lib/seo"
import { buildVisaChecklistItemList } from "@/lib/visas/schema/item-list"
import type { VisaPageContent } from "@/lib/visas/types"

export type VisaPageSchemaGraphInput = {
  visa: VisaPageContent
  breadcrumbs?: ReadonlyArray<BreadcrumbItem>
}

function resolveVisaPageAuthor(): ArticleAuthorInput {
  return {
    name: platformBusinessProfile.name,
    type: "Organization",
    url: getSiteUrl().origin,
  }
}

function resolveVisaPageReviewedBy(
  visa: VisaPageContent,
): ArticleAuthorInput | undefined {
  const review = visa.lastReviewed
  if (!review?.reviewerName) return undefined

  return {
    name: review.reviewerName,
    type: "Person",
    url: review.reviewerUrl,
  }
}

function resolveVisaSpeakableSelectors(visa: VisaPageContent): string[] | undefined {
  const selectors: string[] = []
  if (visa.definition?.body || visa.answer || visa.hero.definition) {
    selectors.push(`#${visa.slug}-definition-heading`)
  }
  if (visa.keyFacts?.items.length) {
    selectors.push(`#${visa.slug}-key-facts-heading`)
  }
  return selectors.length ? selectors : undefined
}

function appendOptionalSchemaNodes(visa: VisaPageContent, nodes: JsonLdNode[]): void {
  if (visa.governmentProcess?.steps.length) {
    const howTo = buildHowToFromProcessSteps({
      name: visa.governmentProcess.title ?? `${visa.hero.title}: application steps`,
      description:
        visa.governmentProcess.description ??
        `How to apply for ${visa.hero.title} through a Thai embassy or consulate.`,
      path: visa.path,
      steps: visa.governmentProcess.steps,
    })
    nodes.push(howTo)
  }

  if (visa.checklist?.groups.length) {
    const itemList = buildVisaChecklistItemList(visa.checklist, visa.path)
    if (itemList) nodes.push(itemList)
  }
}

/**
 * Visa landing page `@graph`  -  WebPage + Service (+ optional BreadcrumbList,
 * HowTo, ItemList). FAQ schema is rendered separately via `FaqSection`.
 */
export function buildVisaPageSchemaGraph(
  input: VisaPageSchemaGraphInput,
): JsonLdGraphDocument {
  const { visa } = input
  const speakableSelectors = resolveVisaSpeakableSelectors(visa)

  const nodes: JsonLdNode[] = [
    buildWebPage({
      path: visa.path,
      name: visa.hero.title,
      description: visa.seo.description,
      datePublished: visa.publishedAt,
      dateModified: visa.updatedAt ?? visa.publishedAt,
      author: resolveVisaPageAuthor(),
      reviewedBy: resolveVisaPageReviewedBy(visa),
      speakableSelectors,
    }),
    buildService({
      name: visa.hero.title,
      description: visa.seo.description,
      path: visa.path,
      serviceType: platformBusinessProfile.serviceType,
      areaServed: "Thailand",
      provider: buildOrganizationReference(),
    }),
  ]

  if (input.breadcrumbs?.length) {
    const crumbs = buildBreadcrumbList(input.breadcrumbs)
    if (crumbs) nodes.push(crumbs)
  }

  appendOptionalSchemaNodes(visa, nodes)

  return buildPageSchemaGraph({ nodes })
}
