import { EditorialGuideBody } from "@/components/moving/editorial-guide-body"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { MovingSectionHeader } from "@/components/moving/moving-section-header"
import { SectionReveal } from "@/components/motion"
import type { MovingEditorialSection } from "@/lib/moving/types"
import { cn } from "@/lib/utils"

type MovingEditorialGuideSectionProps = {
  id: string
  headingId: string
  section: MovingEditorialSection
  className?: string
}

function MovingEditorialGuideSection({
  id,
  headingId,
  section,
  className,
}: MovingEditorialGuideSectionProps) {
  return (
    <Section
      id={id}
      spacing="default"
      aria-labelledby={headingId}
      className={cn("moving-guide", className)}
    >
      <Container>
        <SectionReveal>
          <MovingSectionHeader
            title={section.title}
            subtitle={section.description ?? ""}
            headingId={headingId}
          />
          <EditorialGuideBody section={section} />
        </SectionReveal>
      </Container>
    </Section>
  )
}

export { MovingEditorialGuideSection }
