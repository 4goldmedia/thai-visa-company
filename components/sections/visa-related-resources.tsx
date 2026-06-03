import Link from "next/link"

import { VisaGuideCard } from "@/components/cards/visa-guide-card"
import { SectionReveal } from "@/components/motion"
import {
  VisaEditorialContent,
  VisaEditorialHeading,
} from "@/components/visa-editorial/visa-editorial-heading"
import { VisaEditorialSection } from "@/components/visa-editorial/visa-editorial-section"
import type { ContentRelatedLink } from "@/lib/content/types"
import { editorialLinkClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

const defaultIndexHref = "/resources"
const defaultIndexLabel = "Browse all guides"

type VisaRelatedResourcesSectionProps = {
  sectionId: string
  headingId: string
  eyebrow?: string
  title?: string
  description?: string
  items: ReadonlyArray<ContentRelatedLink>
  indexHref?: string
  indexLabel?: string
  listAriaLabel?: string
  className?: string
}

function VisaRelatedResourcesSection({
  sectionId,
  headingId,
  eyebrow = "Guides",
  title = "Related resources",
  description,
  items,
  indexHref = defaultIndexHref,
  indexLabel = defaultIndexLabel,
  listAriaLabel = "Related visa guides",
  className,
}: VisaRelatedResourcesSectionProps) {
  if (!items.length) return null

  return (
    <VisaEditorialSection
      id={sectionId}
      labelledBy={headingId}
      width="wide"
      band
      className={className}
    >
      <SectionReveal>
        <VisaEditorialHeading
          id={headingId}
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <VisaEditorialContent>
          <ul
            aria-label={listAriaLabel}
            className={cn(
              "visa-guide-grid list-none p-0",
              items.length >= 3 && "visa-guide-grid--three",
            )}
          >
            {items.map((item) => (
              <li key={item.href} className="flex min-w-0">
                <VisaGuideCard
                  category={item.category}
                  title={item.title}
                  description={item.description}
                  href={item.href}
                  ctaLabel="Read guide"
                  className="w-full"
                />
              </li>
            ))}
          </ul>
          <div className="mt-8 border-t border-border/50 pt-6 sm:mt-10 sm:pt-7">
            <Link href={indexHref} className={editorialLinkClass}>
              {indexLabel}
            </Link>
          </div>
        </VisaEditorialContent>
      </SectionReveal>
    </VisaEditorialSection>
  )
}

export { VisaRelatedResourcesSection }
export type { VisaRelatedResourcesSectionProps }
