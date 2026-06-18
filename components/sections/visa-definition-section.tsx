import { SectionReveal } from "@/components/motion"
import {
  VisaEditorialContent,
  VisaEditorialHeading,
} from "@/components/visa-editorial/visa-editorial-heading"
import { VisaEditorialSection } from "@/components/visa-editorial/visa-editorial-section"
import type { ContentVisaDefinitionSection } from "@/lib/content/types"
import { cn } from "@/lib/utils"

type VisaDefinitionSectionProps = ContentVisaDefinitionSection & {
  sectionId: string
  headingId: string
  className?: string
}

function VisaDefinitionSection({
  sectionId,
  headingId,
  title = "What is this visa?",
  description,
  eyebrow,
  body,
  className,
}: VisaDefinitionSectionProps) {
  if (!body.trim()) return null

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
          <p className={cn("visa-authority-prose max-w-[65ch]")}>{body}</p>
        </VisaEditorialContent>
      </SectionReveal>
    </VisaEditorialSection>
  )
}

export { VisaDefinitionSection }
