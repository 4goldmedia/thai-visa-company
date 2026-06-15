import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { GuidePostCard } from "@/components/cards/guide-post-card"
import { Container } from "@/components/layout/container"
import { PageHero } from "@/components/layout/page-hero"
import { Section } from "@/components/layout/section"
import { PageBreadcrumbs } from "@/components/navigation/page-breadcrumbs"
import { guidesIndexBreadcrumb, homeBreadcrumb } from "@/lib/breadcrumbs/presets"
import { getGuideCategoryStaticParams, resolveGuideCategoryArchive } from "@/lib/guides/routing"
import { guideCategoryPath } from "@/lib/guides/types"
import { createPageMetadata } from "@/lib/seo"

export const dynamicParams = false

type PageProps = {
  params: Promise<{ category: string }>
}

export async function generateStaticParams() {
  return getGuideCategoryStaticParams()
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params
  const context = resolveGuideCategoryArchive(category)
  if (!context) return {}

  return createPageMetadata({
    title: `${context.category.label} — Thailand Visa Guides`,
    description: context.category.description,
    path: guideCategoryPath(context.category.id),
  })
}

export default async function GuideCategoryPage({ params }: PageProps) {
  const { category } = await params
  const context = resolveGuideCategoryArchive(category)

  if (!context) {
    notFound()
  }

  const { category: categoryMeta, articles } = context
  const headingId = `guides-category-${categoryMeta.id}-heading`
  const path = guideCategoryPath(categoryMeta.id)

  return (
    <main
      id="main-content"
      tabIndex={-1}
      aria-label={categoryMeta.label}
      className="flex flex-1 flex-col overflow-x-clip bg-background"
    >
      <PageBreadcrumbs
        items={[homeBreadcrumb, guidesIndexBreadcrumb, { label: categoryMeta.label, href: path }]}
        containerSize="content"
      />
      <Section spacing="spacious" aria-labelledby={headingId}>
        <Container>
          <PageHero
            eyebrow="Category"
            title={categoryMeta.label}
            lead={categoryMeta.description}
            headingId={headingId}
          />
          {articles.length > 0 ? (
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <li key={article.slug}>
                  <GuidePostCard
                    title={article.title}
                    description={article.description}
                    category={article.category}
                    href={article.path}
                    status={article.status}
                    readingTime={article.readingTime}
                    publishedAt={article.publishedAt}
                    updatedAt={article.updatedAt}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-10 text-[15px] leading-[1.7] text-muted-foreground">
              No guides in this category yet.
            </p>
          )}
        </Container>
      </Section>
    </main>
  )
}
