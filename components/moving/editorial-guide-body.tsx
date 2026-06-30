import Link from "next/link"

import type {
  MovingEditorialLink,
  MovingEditorialSection,
  MovingEditorialSubsection,
} from "@/lib/moving/types"
import { editorialLinkCompactClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

type EditorialGuideBodyProps = {
  section: Pick<
    MovingEditorialSection,
    "quickAnswer" | "paragraphs" | "bullets" | "subsections" | "links"
  >
  className?: string
}

function EditorialSubsectionBlock({ subsection }: { subsection: MovingEditorialSubsection }) {
  return (
    <article id={subsection.id} className="moving-guide__subsection">
      <h3 className="moving-guide__subsection-title">{subsection.title}</h3>
      {subsection.quickAnswer ? (
        <p className="moving-guide__quick-answer">{subsection.quickAnswer}</p>
      ) : null}
      {subsection.paragraphs.map((paragraph) => (
        <p key={paragraph} className="moving-guide__paragraph">
          {paragraph}
        </p>
      ))}
      {subsection.bullets && subsection.bullets.length > 0 ? (
        <ul className="moving-guide__bullets">
          {subsection.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </article>
  )
}

function EditorialGuideLinks({ links }: { links: ReadonlyArray<MovingEditorialLink> }) {
  if (links.length === 0) return null

  return (
    <ul className="moving-guide__links" aria-label="Related resources">
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className={editorialLinkCompactClass}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

function EditorialGuideBody({ section, className }: EditorialGuideBodyProps) {
  const { quickAnswer, paragraphs, bullets, subsections, links } = section

  return (
    <div className={cn("moving-guide__body", className)}>
      {quickAnswer ? <p className="moving-guide__quick-answer">{quickAnswer}</p> : null}

      {paragraphs?.map((paragraph) => (
        <p key={paragraph} className="moving-guide__paragraph">
          {paragraph}
        </p>
      ))}

      {bullets && bullets.length > 0 ? (
        <ul className="moving-guide__bullets">
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}

      {subsections && subsections.length > 0 ? (
        <div className="moving-guide__subsections">
          {subsections.map((subsection) => (
            <EditorialSubsectionBlock key={subsection.id} subsection={subsection} />
          ))}
        </div>
      ) : null}

      {links ? <EditorialGuideLinks links={links} /> : null}
    </div>
  )
}

export { EditorialGuideBody, EditorialGuideLinks, EditorialSubsectionBlock }
