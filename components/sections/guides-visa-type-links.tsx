import Link from "next/link"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { guideTopicHubs } from "@/lib/guides/content/topics"
import { guidesIndexSectionIds } from "@/lib/guides/section-ids"

function GuidesVisaTypeLinks() {
  return (
    <Section
      id={guidesIndexSectionIds.visaTypes}
      spacing="default"
      aria-labelledby={`${guidesIndexSectionIds.visaTypes}-heading`}
    >
      <Container>
        <h2
          id={`${guidesIndexSectionIds.visaTypes}-heading`}
          className="text-[1.125rem] font-semibold tracking-[-0.02em] text-foreground sm:text-[1.25rem]"
        >
          Browse by visa type
        </h2>
        <ul className="mt-5 flex flex-col gap-2 sm:grid sm:grid-cols-2">
          {guideTopicHubs.map((hub) => (
            <li key={hub.slug}>
              <Link
                href={hub.path}
                className="text-[15px] text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
              >
                {hub.title}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}

export { GuidesVisaTypeLinks }
