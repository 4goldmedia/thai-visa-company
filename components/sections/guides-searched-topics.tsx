import Link from "next/link"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { frequentlySearchedTopics } from "@/lib/guides/content/searched-topics"
import { guidesIndexSectionIds } from "@/lib/guides/section-ids"

function GuidesSearchedTopics() {
  return (
    <Section
      id={guidesIndexSectionIds.searchedTopics}
      spacing="default"
      aria-labelledby={`${guidesIndexSectionIds.searchedTopics}-heading`}
    >
      <Container>
        <h2
          id={`${guidesIndexSectionIds.searchedTopics}-heading`}
          className="text-[1.125rem] font-semibold tracking-[-0.02em] text-foreground sm:text-[1.25rem]"
        >
          Frequently searched topics
        </h2>
        <ul className="mt-5 space-y-4">
          {frequentlySearchedTopics.map((topic) => (
            <li key={topic.href}>
              <Link
                href={topic.href}
                className="text-[15px] font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
              >
                {topic.label}
              </Link>
              {topic.description ? (
                <p className="mt-1 text-[14px] leading-[1.65] text-muted-foreground">
                  {topic.description}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}

export { GuidesSearchedTopics }
