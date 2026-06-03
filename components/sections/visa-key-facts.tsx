import { SectionReveal } from "@/components/motion"
import { VisaFactGrid } from "@/components/visa-editorial/visa-fact-grid"
import {
  VisaEditorialContent,
  VisaEditorialHeading,
} from "@/components/visa-editorial/visa-editorial-heading"
import { VisaEditorialSection } from "@/components/visa-editorial/visa-editorial-section"
import type { ContentVisaKeyFactsSection } from "@/lib/content/types"
import { cn } from "@/lib/utils"

type VisaKeyFactsSectionProps = ContentVisaKeyFactsSection & {
  sectionId: string
  headingId: string
  className?: string
}

function VisaKeyFactsSection({
  sectionId,
  headingId,
  title = "Key facts",
  description,
  eyebrow,
  items,
  className,
}: VisaKeyFactsSectionProps) {
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
          <VisaFactGrid items={items} />
        </VisaEditorialContent>
      </SectionReveal>
    </VisaEditorialSection>
  )
}

export { VisaKeyFactsSection }
export type { VisaKeyFactsSectionProps }
