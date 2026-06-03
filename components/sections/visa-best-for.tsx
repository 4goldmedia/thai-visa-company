import { SectionReveal } from "@/components/motion"
import {
  VisaEditorialContent,
  VisaEditorialHeading,
} from "@/components/visa-editorial/visa-editorial-heading"
import { VisaEditorialSection } from "@/components/visa-editorial/visa-editorial-section"
import type { ContentVisaBestForSection } from "@/lib/content/types"
import { cn } from "@/lib/utils"

type VisaBestForSectionProps = ContentVisaBestForSection & {
  sectionId: string
  headingId: string
  className?: string
}

function RecommendationGroup({
  panelId,
  title,
  items,
  variant,
}: {
  panelId: string
  title: string
  items: ReadonlyArray<string>
  variant: "good" | "not-ideal"
}) {
  return (
    <section
      aria-labelledby={panelId}
      className={cn(
        "visa-best-for-group",
        variant === "not-ideal" && "visa-best-for-group--not-ideal",
      )}
    >
      <h3 id={panelId} className="visa-best-for-group__title">
        {title}
      </h3>
      <ul className="visa-best-for-group__cards" aria-label={title}>
        {items.map((item) => (
          <li key={item} className="visa-recommendation-card">
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}

function VisaBestForSection({
  sectionId,
  headingId,
  title = "Is this visa right for you?",
  description,
  eyebrow,
  goodFit,
  notIdeal,
  className,
}: VisaBestForSectionProps) {
  const goodFitId = `${sectionId}-good-fit`
  const notIdealId = `${sectionId}-not-ideal`

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
          <div className="visa-best-for-grid">
            <RecommendationGroup
              panelId={goodFitId}
              title={goodFit.title ?? "Good fit"}
              items={goodFit.items}
              variant="good"
            />
            <RecommendationGroup
              panelId={notIdealId}
              title={notIdeal.title ?? "Not ideal"}
              items={notIdeal.items}
              variant="not-ideal"
            />
          </div>
        </VisaEditorialContent>
      </SectionReveal>
    </VisaEditorialSection>
  )
}

export { VisaBestForSection }
export type { VisaBestForSectionProps }
