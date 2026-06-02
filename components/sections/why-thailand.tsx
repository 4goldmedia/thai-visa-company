import Link from "next/link"

import { WhyThailandCollage } from "@/components/collage/why-thailand-collage"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionReveal } from "@/components/motion"
import {
  whyThailandCollageImages,
  whyThailandSectionCopy,
} from "@/lib/content/why-thailand"
import { editorialLinkSectionClass } from "@/lib/section-styles"
import { sectionHeadingIds, sectionIds } from "@/lib/section-ids"
import { cn } from "@/lib/utils"

function WhyThailand() {
  const { eyebrow, titleLine1, titleLine2, body, ctaLabel, ctaHref } =
    whyThailandSectionCopy

  return (
    <SectionReveal>
      <div className="why-thailand__grid">
        <div className="why-thailand__copy">
          <p className="why-thailand__eyebrow">{eyebrow}</p>

          <h2
            id={sectionHeadingIds.whyThailand}
            className="why-thailand__title"
          >
            {titleLine1}
            <br />
            {titleLine2}
          </h2>

          <p className="why-thailand__body">{body}</p>

          <Link href={ctaHref} className={editorialLinkSectionClass}>
            {ctaLabel}
          </Link>
        </div>

        <WhyThailandCollage images={whyThailandCollageImages} />
      </div>
    </SectionReveal>
  )
}

function WhyThailandSection() {
  return (
    <Section
      id={sectionIds.whyThailand}
      aria-labelledby={sectionHeadingIds.whyThailand}
      spacing="spacious"
      className={cn("why-thailand", "lg:py-24")}
    >
      <Container>
        <WhyThailand />
      </Container>
    </Section>
  )
}

export { WhyThailand, WhyThailandSection }
