import type { Metadata } from "next"
import Link from "next/link"

import { PageHero } from "@/components/layout/page-hero"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { PageBreadcrumbs } from "@/components/navigation/page-breadcrumbs"
import { homeBreadcrumb } from "@/lib/breadcrumbs/presets"
import { blogPath, resourcesPath } from "@/lib/navigation"
import { createPageMetadata } from "@/lib/seo"

const blogHeadingId = "blog-page-heading"

export const metadata: Metadata = createPageMetadata({
  title: "Thailand Visa Blog",
  description:
    "Updates, insights, and practical guidance on Thailand visas from Thai Visa Company.",
  path: blogPath,
  keywords: [
    "Thailand visa blog",
    "Thailand immigration news",
    "Thailand visa updates",
  ],
})

export default function BlogPage() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      aria-label="Blog"
      className="flex flex-1 flex-col overflow-x-clip bg-background"
    >
      <PageBreadcrumbs
        items={[homeBreadcrumb, { label: "Blog", href: blogPath }]}
        containerSize="content"
      />

      <Section spacing="spacious" aria-labelledby={blogHeadingId}>
        <Container size="content">
          <PageHero
            eyebrow="Insights"
            title="Blog"
            lead="Visa updates, practical guidance, and client-focused insights from our team. New articles will appear here as we publish."
            headingId={blogHeadingId}
          />

          <p className="mt-10 max-w-xl text-[length:var(--text-body)] leading-[var(--leading-body)] text-muted-foreground">
            In the meantime, browse our{" "}
            <Link
              href={resourcesPath}
              className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
            >
              visa guides
            </Link>{" "}
            for step-by-step help on common routes.
          </p>
        </Container>
      </Section>
    </main>
  )
}
