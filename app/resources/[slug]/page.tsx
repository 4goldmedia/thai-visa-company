import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ResourceArticlePageView } from "@/components/templates/resource-article-page"
import {
  buildResourceArticleMetadata,
  getResourceArticleStaticParams,
  resolveResourceArticleRelated,
  resolveResourceArticleRoute,
} from "@/lib/resources/routing"
import type { ResourceArticleRouteParams } from "@/lib/resources/routing"

/** Only pre-render slugs from the content registry */
export const dynamicParams = false

type PageProps = {
  params: Promise<ResourceArticleRouteParams>
}

export async function generateStaticParams() {
  return getResourceArticleStaticParams()
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const route = await resolveResourceArticleRoute(slug)

  if (!route) {
    return {}
  }

  return buildResourceArticleMetadata(route.module.meta)
}

export default async function ResourceArticlePage({ params }: PageProps) {
  const { slug } = await params
  const route = await resolveResourceArticleRoute(slug)

  if (!route) {
    notFound()
  }

  const related = await resolveResourceArticleRelated(route.page)

  return <ResourceArticlePageView route={route} related={related} />
}
