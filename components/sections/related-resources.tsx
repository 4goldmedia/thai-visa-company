import Link from "next/link"

import { ResourceCard } from "@/components/cards/resource-card"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionReveal } from "@/components/motion"
import { sectionContentOffsetClass, textLinkClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

import type { RelatedResourceItem } from "@/lib/content/types"

export type { RelatedResourceItem }

type RelatedResourcesProps = {
  /** Stable id for `aria-labelledby` on the parent `<section>` */
  headingId: string
  title?: string
  description?: string
  eyebrow?: string
  items: ReadonlyArray<RelatedResourceItem>
  /** Cap visible cards  -  keeps the section calm (default 3) */
  maxItems?: number
  listAriaLabel?: string
  className?: string
}

const defaultIndexHref = "/guides"

const headingClass =
  "text-lg font-semibold tracking-tight text-balance text-foreground sm:text-xl"

const eyebrowClass =
  "text-[11px] font-medium text-muted-foreground sm:text-xs sm:text-[13px]"

const descriptionClass =
  "mt-2 max-w-2xl text-[15px] leading-[1.7] text-pretty text-muted-foreground sm:mt-2.5 sm:text-base sm:leading-relaxed"

function RelatedResourcesGrid({
  items,
  listAriaLabel,
}: {
  items: ReadonlyArray<RelatedResourceItem>
  listAriaLabel: string
}) {
  const count = items.length

  return (
    <ul
      aria-label={listAriaLabel}
      className={cn(
        "grid list-none grid-cols-1 gap-3.5 p-0 sm:gap-4",
        count === 1 && "max-w-md",
        count === 2 && "sm:grid-cols-2",
        count >= 3 && "sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
      )}
    >
      {items.map((item) => (
        <li key={item.href} className="flex min-w-0 sm:h-full">
          <ResourceCard
            category={item.category}
            title={item.title}
            description={item.description}
            href={item.href}
            className="w-full"
          />
        </li>
      ))}
    </ul>
  )
}

function RelatedResources({
  headingId,
  title = "Related guides",
  description,
  eyebrow,
  items,
  maxItems = 3,
  listAriaLabel = "Related articles",
  className,
}: RelatedResourcesProps) {
  const visibleItems = items.slice(0, maxItems)

  if (visibleItems.length === 0) {
    return null
  }

  return (
    <div className={cn("flex flex-col", className)}>
      <header>
        {eyebrow ? <p className={eyebrowClass}>{eyebrow}</p> : null}
        <h2
          id={headingId}
          className={cn(headingClass, eyebrow ? "mt-2" : undefined)}
        >
          {title}
        </h2>
        {description ? (
          <p className={descriptionClass}>{description}</p>
        ) : null}
      </header>

      <RelatedResourcesGrid
        items={visibleItems}
        listAriaLabel={listAriaLabel}
      />
    </div>
  )
}

type RelatedResourcesSectionProps = RelatedResourcesProps & {
  sectionId?: string
  sectionClassName?: string
  indexHref?: string
  indexLabel?: string
  showIndexLink?: boolean
}

function RelatedResourcesSection({
  sectionId = "related-resources",
  sectionClassName,
  headingId,
  indexHref = defaultIndexHref,
  indexLabel = "Browse all guides",
  showIndexLink = true,
  items,
  maxItems = 3,
  ...resourcesProps
}: RelatedResourcesSectionProps) {
  const visibleItems = items.slice(0, maxItems)

  if (visibleItems.length === 0) {
    return null
  }

  return (
    <Section
      id={sectionId}
      spacing="default"
      aria-labelledby={headingId}
      className={cn("border-t border-border/50", sectionClassName)}
    >
      <Container>
        <SectionReveal>
          <RelatedResources
            headingId={headingId}
            items={visibleItems}
            maxItems={maxItems}
            {...resourcesProps}
          />

          {showIndexLink ? (
            <div
              className={cn(
                sectionContentOffsetClass,
                "border-t border-border/50 pt-6 sm:pt-7"
              )}
            >
              <Link href={indexHref} className={textLinkClass}>
                {indexLabel}
              </Link>
            </div>
          ) : null}
        </SectionReveal>
      </Container>
    </Section>
  )
}

export { RelatedResources, RelatedResourcesSection, RelatedResourcesGrid }
