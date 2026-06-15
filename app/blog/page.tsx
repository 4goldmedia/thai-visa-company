import type { Metadata } from "next"
import { Suspense } from "react"

import { BlogIndexTemplate } from "@/components/templates/blog-index"
import { blogIndexContent } from "@/lib/blog/content/index"
import type { BlogPostSort } from "@/lib/blog/types"
import { blogPath } from "@/lib/navigation"
import { createPageMetadata } from "@/lib/seo"

const { seo } = blogIndexContent

export const metadata: Metadata = createPageMetadata({
  title: seo.title,
  description: seo.description,
  path: blogPath,
  keywords: [...seo.keywords],
})

type PageProps = {
  searchParams: Promise<{ sort?: string }>
}

function resolveSort(value?: string): BlogPostSort {
  return value === "recent" ? "recent" : "updated"
}

export default async function BlogPage({ searchParams }: PageProps) {
  const { sort: sortParam } = await searchParams
  const sort = resolveSort(sortParam)

  return (
    <Suspense fallback={<BlogIndexTemplate sort={sort} />}>
      <BlogIndexTemplate sort={sort} />
    </Suspense>
  )
}
