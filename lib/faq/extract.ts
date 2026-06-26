import type { BlogArticleMeta } from "@/lib/content/collections/blog"
import type { FaqRecord } from "@/lib/faq/types"
import type { VisaPageContent } from "@/lib/visas/types"

function extractFaqFromArticleMeta(
  meta: Pick<
    BlogArticleMeta,
    "slug" | "path" | "title" | "topicId" | "pillarSlug" | "faq" | "updatedAt" | "publishedAt"
  >,
): FaqRecord[] {
  return meta.faq.map((item) => ({
    id: `${meta.slug}-${item.value}`,
    question: item.question,
    answer: item.answer,
    source: {
      type: "article",
      path: meta.path,
      title: meta.title,
      topicId: meta.topicId,
      visaSlug: meta.pillarSlug,
    },
    updatedAt: meta.updatedAt ?? meta.publishedAt,
  }))
}

export function extractFaqFromBlogArticle(meta: BlogArticleMeta): FaqRecord[] {
  return extractFaqFromArticleMeta(meta)
}

/** @deprecated Use `extractFaqFromBlogArticle` */
export const extractFaqFromGuideArticle = extractFaqFromBlogArticle

export function extractFaqFromVisaPage(visa: VisaPageContent): FaqRecord[] {
  return visa.faq.items.map((item) => ({
    id: `${visa.slug}-${item.value}`,
    question: item.question,
    answer: item.answer,
    source: {
      type: "visa",
      path: visa.path,
      title: visa.hero.title,
      visaSlug: visa.slug,
    },
  }))
}
