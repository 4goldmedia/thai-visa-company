import { notFound } from "next/navigation"

import { ResourceArticlePageView } from "@/components/templates/resource-article-page"
import {
  getResourceArticleStaticParams,
  resolveResourceArticlePageContext,
} from "@/lib/content/routing"
import type { ResourceArticleRouteParams } from "@/lib/content/routing"

/** Only pre-render slugs from the content registry */
export const dynamicParams = false

type PageProps = {
  params: Promise<ResourceArticleRouteParams>
}

export async function generateStaticParams() {
  return getResourceArticleStaticParams()
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const context = await resolveResourceArticlePageContext(slug)
  return context?.metadata ?? {}
}

export default async function ResourceArticlePage({ params }: PageProps) {
  const { slug } = await params
  const context = await resolveResourceArticlePageContext(slug)

  if (!context) {
    notFound()
  }

  return <ResourceArticlePageView context={context} />
}
