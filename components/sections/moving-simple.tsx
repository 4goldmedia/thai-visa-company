import Link from "next/link"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionReveal } from "@/components/motion"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { movingSimpleSectionCopy } from "@/lib/content/moving-simple"
import { editorialPhotography } from "@/lib/media/photography"
import { editorialLinkSectionClass } from "@/lib/section-styles"
import { sectionHeadingIds, sectionIds } from "@/lib/section-ids"

const image = editorialPhotography.movingSimple

function MovingSimple() {
  const { eyebrow, titleLine1, titleLine2, body, ctaLabel, ctaHref } =
    movingSimpleSectionCopy

  return (
    <SectionReveal>
      <div className="moving-simple__grid">
        <div className="moving-simple__media">
          <OptimizedImage
            src={image.src}
            alt={image.alt}
            fill
            quality={95}
            sizes="(max-width: 1023px) 100vw, 60vw"
            className="moving-simple__image object-cover"
            style={
              image.objectPosition
                ? { objectPosition: image.objectPosition }
                : undefined
            }
          />
        </div>

        <div className="moving-simple__copy">
          <p className="moving-simple__eyebrow">{eyebrow}</p>

          <h2
            id={sectionHeadingIds.movingSimple}
            className="moving-simple__title"
          >
            {titleLine1}
            <br />
            {titleLine2}
          </h2>

          <p className="moving-simple__body">{body}</p>

          <Link href={ctaHref} className={editorialLinkSectionClass}>
            {ctaLabel}
          </Link>
        </div>
      </div>
    </SectionReveal>
  )
}

function MovingSimpleSection() {
  return (
    <Section
      id={sectionIds.movingSimple}
      aria-labelledby={sectionHeadingIds.movingSimple}
      spacing="spacious"
      className="moving-simple"
    >
      <Container>
        <MovingSimple />
      </Container>
    </Section>
  )
}

export { MovingSimple, MovingSimpleSection }
