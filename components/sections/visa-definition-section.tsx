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

function splitDefinitionIntro(body: string): string[] {
  return body
    .split(/\n\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
}

function VisaDefinitionSection({
  sectionId,
  headingId,
  title = "What is this visa?",
  eyebrow,
  body,
  className,
}: VisaDefinitionSectionProps) {
  if (!body.trim()) return null

  const introParagraphs = splitDefinitionIntro(body)

  return (
    <VisaEditorialSection
      id={sectionId}
      labelledBy={headingId}
      width="wide"
      band
      className={cn("visa-definition-section", className)}
    >
      <SectionReveal>
        <VisaEditorialHeading id={headingId} eyebrow={eyebrow} title={title} />
        <VisaEditorialContent className="visa-definition">
          <div className="visa-definition__intro">
            {introParagraphs.map((paragraph, index) => (
              <p key={index} className="visa-definition__paragraph">
                {paragraph}
              </p>
            ))}
          </div>
        </VisaEditorialContent>
      </SectionReveal>
    </VisaEditorialSection>
  )
}

export { VisaDefinitionSection }
