import type { VisaPageContent, VisaSlug } from "@/lib/visas/types"
import type { ContentVisaPageSeo } from "@/lib/content/types"
import { defaultVisaProcessSteps } from "@/lib/visas/shared"

const STUB_PUBLISHED_AT = "2026-01-01"

type UnpublishedVisaStubInput = {
  slug: VisaSlug
  seo: ContentVisaPageSeo
  heroTitle: string
  heroOverview: string
}

/** Minimal registry entry for unpublished visa slugs  -  not routed or linked publicly */
export function createUnpublishedVisaStub(
  input: UnpublishedVisaStubInput,
): VisaPageContent {
  const path = `/visas/${input.slug}` as const

  return {
    slug: input.slug,
    path,
    published: false,
    publishedAt: STUB_PUBLISHED_AT,
    seo: input.seo,
    hero: {
      title: input.heroTitle,
      overview: input.heroOverview,
    },
    overview: {
      audience: { content: ["Content in preparation."] },
      eligibility: { content: ["Content in preparation."] },
      practicalOverview: { content: "Content in preparation." },
    },
    requirements: {
      requirements: { items: ["Content in preparation."] },
      eligibility: { items: ["Content in preparation."] },
      documents: { items: ["Content in preparation."] },
    },
    process: { steps: defaultVisaProcessSteps },
    faq: { items: [] },
    relatedResources: { items: [] },
    finalCta: {
      title: `Questions about ${input.heroTitle}?`,
      description:
        "Message us when this page is live  -  we are happy to advise in the meantime.",
    },
  }
}
