import Link from "next/link"

import { ResourceCard } from "@/components/cards/resource-card"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { SectionReveal } from "@/components/motion"
import { sectionHeadingIds, sectionIds } from "@/lib/section-ids"
import {
  sectionContentOffsetClass,
  sectionDividerClass,
  textLinkClass,
} from "@/lib/section-styles"
import { resourceArticles } from "@/lib/resources"
import type { RelatedResourceItem } from "@/components/sections/related-resources"
import { cn } from "@/lib/utils"

const defaultResourcesPreview: ReadonlyArray<RelatedResourceItem> =
  resourceArticles.map((article) => ({
    category: article.category,
    title: article.title,
    description: article.description,
    href: article.path,
  }))

const defaultResourcesIndexHref = "/resources"

type ResourcesPreviewProps = {
  headingId: string
  title?: string
  description?: string
  eyebrow?: string
  items: ReadonlyArray<RelatedResourceItem>
  indexHref?: string
  indexLabel?: string
  listAriaLabel?: string
  className?: string
}

function ResourcesPreview({
  headingId,
  title = "Clear answers to common visa questions",
  description = "Practical guides for foreigners planning time in Thailand. Eligibility, timelines, and requirements explained in plain language.",
  eyebrow = "Visa guides",
  items,
  indexHref = defaultResourcesIndexHref,
  indexLabel = "Browse all guides",
  listAriaLabel = "Related visa guides",
  className,
}: ResourcesPreviewProps) {
  return (
    <SectionReveal className={cn("flex flex-col", className)}>
      <SectionHeading
        id={headingId}
        eyebrow={eyebrow}
        title={title}
        description={description}
        titleClassName="max-w-xl"
      />

      <ul
        aria-label={listAriaLabel}
        className={cn(
          sectionContentOffsetClass,
          "grid list-none grid-cols-1 gap-3.5 p-0",
          items.length >= 3 ? "lg:grid-cols-3 lg:gap-5" : "sm:grid-cols-2 sm:gap-4"
        )}
      >
        {items.map((article) => (
          <li key={article.href} className="flex min-w-0 lg:h-full">
            <ResourceCard
              category={article.category}
              title={article.title}
              description={article.description}
              href={article.href}
              className="w-full"
            />
          </li>
        ))}
      </ul>

      <div className="mt-6 border-t border-border/50 pt-6 sm:mt-7 sm:pt-7">
        <Link href={indexHref} className={textLinkClass}>
          {indexLabel}
        </Link>
      </div>
    </SectionReveal>
  )
}

type ResourcesPreviewSectionProps = {
  sectionId?: string
  sectionClassName?: string
  headingId?: string
  title?: string
  description?: string
  eyebrow?: string
  items?: ReadonlyArray<RelatedResourceItem>
  indexHref?: string
  indexLabel?: string
  listAriaLabel?: string
  className?: string
}

function ResourcesPreviewSection({
  sectionId = sectionIds.resources,
  sectionClassName = sectionDividerClass,
  headingId = sectionHeadingIds.resources,
  items = defaultResourcesPreview,
  ...previewProps
}: ResourcesPreviewSectionProps) {
  return (
    <Section
      id={sectionId}
      aria-labelledby={headingId}
      className={sectionClassName}
    >
      <Container>
        <ResourcesPreview headingId={headingId} items={items} {...previewProps} />
      </Container>
    </Section>
  )
}

export {
  ResourcesPreview,
  ResourcesPreviewSection,
  defaultResourcesPreview,
  defaultResourcesIndexHref,
}
