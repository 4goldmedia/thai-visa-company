import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { GuidePostCard } from "@/components/cards/guide-post-card"
import { Container } from "@/components/layout/container"
import { PageHero } from "@/components/layout/page-hero"
import { Section } from "@/components/layout/section"
import { PageBreadcrumbs } from "@/components/navigation/page-breadcrumbs"
import { GuidesTopicJsonLd } from "@/components/seo/guides-topic-json-ld"
import { guidesIndexBreadcrumb, homeBreadcrumb } from "@/lib/breadcrumbs/presets"
import { getGuideTopicHubStaticParams, resolveGuideTopicHub } from "@/lib/guides/routing"
import { createPageMetadata } from "@/lib/seo"

export const dynamicParams = false

type PageProps = {
  params: Promise<{ topic: string }>
}

export async function generateStaticParams() {
  return getGuideTopicHubStaticParams()
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { topic } = await params
  const context = resolveGuideTopicHub(topic)
  if (!context) return {}

  return createPageMetadata({
    title: context.hub.title,
    description: context.hub.description,
    path: context.hub.path,
  })
}

export default async function GuideTopicHubPage({ params }: PageProps) {
  const { topic } = await params
  const context = resolveGuideTopicHub(topic)

  if (!context) {
    notFound()
  }

  const { hub, articles, pillar } = context
  const headingId = `guides-topic-${hub.slug}-heading`

  return (
    <>
      <GuidesTopicJsonLd context={context} />
      <main
        id="main-content"
        tabIndex={-1}
        aria-label={hub.title}
        className="flex flex-1 flex-col overflow-x-clip bg-background"
      >
        <PageBreadcrumbs
          items={[homeBreadcrumb, guidesIndexBreadcrumb, { label: hub.title, href: hub.path }]}
        />
        <Section spacing="spacious" aria-labelledby={headingId}>
          <Container>
            <PageHero
              eyebrow="Visa guides"
              title={hub.title}
              lead={hub.description}
              headingId={headingId}
              ctaSlot={
                pillar ? (
                  <Link
                    href={pillar.path}
                    className="text-sm font-medium text-foreground underline decoration-border underline-offset-4"
                  >
                    View {pillar.hero.title} service
                  </Link>
                ) : undefined
              }
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
                Guides for this topic are on the way.
              </p>
            )}
          </Container>
        </Section>
      </main>
    </>
  )
}
