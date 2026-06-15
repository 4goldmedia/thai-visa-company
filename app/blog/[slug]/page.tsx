import { notFound } from "next/navigation"

import { BlogArticlePageView } from "@/components/templates/blog-article-page"
import {
  getBlogArticleStaticParams,
  resolveBlogArticlePageContext,
} from "@/lib/content/routing/blog"
import type { BlogArticleRouteParams } from "@/lib/content/routing/blog-types"

export const dynamicParams = false

type PageProps = {
  params: Promise<BlogArticleRouteParams>
}

export async function generateStaticParams() {
  return getBlogArticleStaticParams()
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const context = await resolveBlogArticlePageContext(slug)
  return context?.metadata ?? {}
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params
  const context = await resolveBlogArticlePageContext(slug)

  if (!context) {
    notFound()
  }

  return <BlogArticlePageView context={context} />
}
