import {
  BadgeCheck,
  ClipboardList,
  LifeBuoy,
  MessageCircle,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

import { TrustCard } from "@/components/cards/trust-card"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { SectionReveal } from "@/components/motion"
import { sectionHeadingIds, sectionIds } from "@/lib/section-ids"
import { sectionBandClass, sectionContentOffsetClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

const trustPoints: ReadonlyArray<{
  icon: LucideIcon
  title: string
  description: string
}> = [
  {
    icon: MessageCircle,
    title: "Fast LINE & WhatsApp support",
    description:
      "Reach us on familiar channels. Most questions get a clear reply without long waits.",
  },
  {
    icon: ClipboardList,
    title: "Clear visa guidance",
    description:
      "Requirements, timelines, and documents explained step by step, in plain language.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted visa expertise",
    description:
      "Practical guidance across common and specialist visas, based on real applications.",
  },
  {
    icon: LifeBuoy,
    title: "Support through the full process",
    description:
      "From eligibility review to submission and follow-up, we stay involved as things move forward.",
  },
]

function WhyChooseUs() {
  return (
    <div className="flex flex-col">
      <SectionReveal>
        <SectionHeading
          id={sectionHeadingIds.whyChooseUs}
          eyebrow="Why work with us"
          title="Clear support at every step"
          description="Responsive communication and organized guidance, so you always know what comes next."
          titleClassName="max-w-lg"
          descriptionClassName="max-w-xl"
        />
      </SectionReveal>

      <ul
        aria-label="Reasons to choose our visa support"
        className={cn(
          sectionContentOffsetClass,
          "grid list-none grid-cols-1 gap-3.5 p-0 sm:grid-cols-2 sm:gap-4"
        )}
      >
        {trustPoints.map((point) => (
          <li key={point.title} className="flex min-w-0 sm:h-full">
            <TrustCard
              icon={point.icon}
              title={point.title}
              description={point.description}
              className="w-full"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

function WhyChooseUsSection() {
  return (
    <Section
      id={sectionIds.whyChooseUs}
      aria-labelledby={sectionHeadingIds.whyChooseUs}
      className={sectionBandClass}
    >
      <Container>
        <WhyChooseUs />
      </Container>
    </Section>
  )
}

export { WhyChooseUs, WhyChooseUsSection, trustPoints }
