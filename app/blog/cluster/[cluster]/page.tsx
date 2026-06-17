import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { BlogPostCard } from "@/components/cards/blog-post-card"
import { Container } from "@/components/layout/container"
import { PageHero } from "@/components/layout/page-hero"
import { Section } from "@/components/layout/section"
import { PageBreadcrumbs } from "@/components/navigation/page-breadcrumbs"
import { BlogClusterJsonLd } from "@/components/seo/blog-cluster-json-ld"
import { blogIndexBreadcrumb, homeBreadcrumb } from "@/lib/breadcrumbs/presets"
import {
  getBlogClusterStaticParams,
  resolveBlogClusterArchive,
} from "@/lib/blog/routing"
import { blogClusterPath } from "@/lib/blog/types"
import { createPageMetadata } from "@/lib/seo"

export const dynamicParams = false

type PageProps = {
  params: Promise<{ cluster: string }>
}

export async function generateStaticParams() {
  return getBlogClusterStaticParams()
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { cluster } = await params
  const context = resolveBlogClusterArchive(cluster)
  if (!context) return {}

  return createPageMetadata({
    title: `${context.cluster.label}: Thailand Visa Answers`,
    description: context.cluster.description,
    path: blogClusterPath(context.cluster.id),
  })
}

export default async function BlogClusterPage({ params }: PageProps) {
  const { cluster } = await params
  const context = resolveBlogClusterArchive(cluster)

  if (!context) {
    notFound()
  }

  const { cluster: clusterMeta, articles } = context
  const headingId = `blog-cluster-${clusterMeta.id}-heading`
  const path = blogClusterPath(clusterMeta.id)

  return (
    <>
      <BlogClusterJsonLd context={context} />
      <main
        id="main-content"
        tabIndex={-1}
        aria-label={clusterMeta.label}
        className="flex flex-1 flex-col overflow-x-clip bg-background"
        data-slot="blog-index"
      >
        <PageBreadcrumbs
          items={[
            homeBreadcrumb,
            blogIndexBreadcrumb,
            { label: clusterMeta.label, href: path },
          ]}
        />

        <Section spacing="default" aria-labelledby={headingId}>
          <Container>
            <PageHero
              eyebrow="Subject"
              title={clusterMeta.label}
              lead={clusterMeta.description}
              headingId={headingId}
            />

            {articles.length > 0 ? (
              <ul className="blog-index__grid mt-8">
                {articles.map((article) => (
                  <li key={article.slug}>
                    <BlogPostCard
                      title={article.title}
                      description={article.description}
                      category={article.category}
                      href={article.path}
                      status={article.status}
                      readingTime={article.readingTime}
                      publishedAt={article.publishedAt}
                      updatedAt={article.updatedAt}
                      image={article.heroImage}
                      variant="editorial"
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-10 text-[15px] leading-[1.7] text-muted-foreground">
                Articles for this subject are on the way.
              </p>
            )}
          </Container>
        </Section>
      </main>
    </>
  )
}
