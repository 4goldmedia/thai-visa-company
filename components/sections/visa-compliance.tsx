import { Check } from "lucide-react"

import { SectionReveal } from "@/components/motion"
import { VisaFactGrid } from "@/components/visa-editorial/visa-fact-grid"
import {
  VisaEditorialContent,
  VisaEditorialHeading,
} from "@/components/visa-editorial/visa-editorial-heading"
import { VisaEditorialSection } from "@/components/visa-editorial/visa-editorial-section"
import type { ContentVisaComplianceSection } from "@/lib/content/types"
import { cn } from "@/lib/utils"

type VisaComplianceSectionProps = ContentVisaComplianceSection & {
  sectionId: string
  headingId: string
  className?: string
}

function VisaComplianceSection({
  sectionId,
  headingId,
  title = "After approval",
  description,
  eyebrow,
  cards,
  reminders,
  className,
}: VisaComplianceSectionProps) {
  if (!cards.length) return null

  return (
    <VisaEditorialSection
      id={sectionId}
      labelledBy={headingId}
      width="wide"
      band
      className={cn("visa-compliance-section", className)}
    >
      <SectionReveal>
        <VisaEditorialHeading
          id={headingId}
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <VisaEditorialContent>
          <VisaFactGrid items={cards} className="visa-metric-grid--quad" />
          {reminders?.items.length ? (
            <div className="visa-compliance-reminders">
              <h3 className="visa-compliance-reminders__title">{reminders.title}</h3>
              <ul className="visa-compliance-reminders__list">
                {reminders.items.map((item) => (
                  <li key={item} className="visa-compliance-reminders__item">
                    <Check
                      className="visa-compliance-reminders__icon"
                      aria-hidden
                      strokeWidth={2}
                    />
                    <span className="visa-compliance-reminders__text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </VisaEditorialContent>
      </SectionReveal>
    </VisaEditorialSection>
  )
}

export { VisaComplianceSection }
export type { VisaComplianceSectionProps }
