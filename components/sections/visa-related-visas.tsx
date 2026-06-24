import { VisaGuideCard } from "@/components/cards/visa-guide-card"
import { SectionReveal } from "@/components/motion"
import {
  VisaEditorialContent,
  VisaEditorialHeading,
} from "@/components/visa-editorial/visa-editorial-heading"
import { VisaEditorialSection } from "@/components/visa-editorial/visa-editorial-section"
import type { ContentRelatedLink } from "@/lib/content/types"
import { cn } from "@/lib/utils"

type VisaRelatedVisasSectionProps = {
  sectionId: string
  headingId: string
  eyebrow?: string
  title?: string
  description?: string
  items: ReadonlyArray<ContentRelatedLink>
  maxItems?: number
  listAriaLabel?: string
  className?: string
}

function VisaRelatedVisasSection({
  sectionId,
  headingId,
  eyebrow = "Explore options",
  title = "Related Thailand visa options",
  description,
  items,
  maxItems = 3,
  listAriaLabel = "Related visa services",
  className,
}: VisaRelatedVisasSectionProps) {
  const visibleItems = items.slice(0, maxItems)

  if (!visibleItems.length) return null

  return (
    <VisaEditorialSection
      id={sectionId}
      labelledBy={headingId}
      width="wide"
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
              visibleItems.length >= 3 && "visa-guide-grid--three",
            )}
          >
            {visibleItems.map((item) => (
              <li key={item.href} className="flex min-w-0">
                <VisaGuideCard
                  category={item.category}
                  title={item.title}
                  description={item.description}
                  href={item.href}
                  image={item.image}
                  imageAlt={item.imageAlt}
                  objectPosition={item.objectPosition}
                  ctaLabel="View visa guide"
                  className="h-full w-full"
                />
              </li>
            ))}
          </ul>
        </VisaEditorialContent>
      </SectionReveal>
    </VisaEditorialSection>
  )
}

export { VisaRelatedVisasSection }
export type { VisaRelatedVisasSectionProps }
