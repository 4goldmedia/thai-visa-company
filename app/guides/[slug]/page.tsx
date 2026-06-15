import { notFound } from "next/navigation"

import { GuideArticlePageView } from "@/components/templates/guide-article-page"
import {
  getGuideArticleStaticParams,
  resolveGuideArticlePageContext,
} from "@/lib/content/routing/guides"
import type { GuideArticleRouteParams } from "@/lib/content/routing/guides-types"

export const dynamicParams = false

type PageProps = {
  params: Promise<GuideArticleRouteParams>
}

export async function generateStaticParams() {
  return getGuideArticleStaticParams()
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const context = await resolveGuideArticlePageContext(slug)
  return context?.metadata ?? {}
}

export default async function GuideArticlePage({ params }: PageProps) {
  const { slug } = await params
  const context = await resolveGuideArticlePageContext(slug)

  if (!context) {
    notFound()
  }

  return <GuideArticlePageView context={context} />
}
