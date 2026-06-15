import Link from "next/link"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { guidesIndexSectionIds } from "@/lib/guides/section-ids"
import type { GuidePostCard as GuidePost } from "@/lib/guides/types"
import { editorialLinkCompactClass } from "@/lib/section-styles"

type GuidesFeaturedProps = {
  article: GuidePost
}

function GuidesFeatured({ article }: GuidesFeaturedProps) {
  if (article.status === "planned") return null

  return (
    <Section
      id={guidesIndexSectionIds.featured}
      spacing="default"
      aria-labelledby={`${guidesIndexSectionIds.featured}-heading`}
    >
      <Container>
        <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
          Featured guide
        </p>
        <h2
          id={`${guidesIndexSectionIds.featured}-heading`}
          className="mt-2 max-w-3xl text-[1.5rem] font-semibold tracking-[-0.03em] text-foreground sm:text-[1.75rem]"
        >
          <Link href={article.path} className="transition-colors hover:text-foreground/80">
            {article.title}
          </Link>
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-[1.7] text-muted-foreground sm:text-[16px]">
          {article.description}
        </p>
        <Link href={article.path} className={`mt-4 inline-flex ${editorialLinkCompactClass}`}>
          Read the guide
        </Link>
      </Container>
    </Section>
  )
}

export { GuidesFeatured }
