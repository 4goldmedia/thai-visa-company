import { Suspense } from "react"

import { BlogPublicationHub } from "@/components/blog/blog-publication-hub"
import { BlogIndexHero } from "@/components/sections/blog-index-hero"
import { BlogIndexJsonLd } from "@/components/seo/blog-index-json-ld"
import { getSortedBlogIndexArticles } from "@/lib/blog"
import { blogIndexContent } from "@/lib/blog/content/index"
import type { BlogPostSort } from "@/lib/blog/types"

type BlogIndexTemplateProps = {
  sort?: BlogPostSort
}

function BlogIndexTemplate({ sort = "updated" }: BlogIndexTemplateProps) {
  const articles = getSortedBlogIndexArticles(sort)
  const { hero } = blogIndexContent

  return (
    <>
      <BlogIndexJsonLd />
      <main
        id="main-content"
        tabIndex={-1}
        aria-label="Thailand visa blog"
        data-slot="blog-index"
        className="blog-index flex flex-1 flex-col overflow-x-clip bg-background"
      >
        <BlogIndexHero eyebrow={hero.eyebrow} title={hero.title} overview={hero.overview} />
        <Suspense fallback={null}>
          <BlogPublicationHub articles={articles} />
        </Suspense>
      </main>
    </>
  )
}

export { BlogIndexTemplate }
