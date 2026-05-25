import {
  ClipboardList,
  MessageCircle,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react"

import { WhyFeatureItem } from "@/components/cards/why-feature-item"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { SectionReveal } from "@/components/motion"
import { sectionHeadingIds, sectionIds } from "@/lib/section-ids"
import { sectionContentOffsetClass } from "@/lib/section-styles"
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
      "Reach us on familiar channels. All questions get a reply within 24 hours.",
  },
  {
    icon: ClipboardList,
    title: "Clear visa guidance",
    description:
      "Requirements, timelines, and documents explained step by step, in plain language.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted visa expertise",
    description:
      "Practical guidance across common and specialist visas, based on real applications.",
  },
  {
    icon: Users,
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
        className={cn("why-features", sectionContentOffsetClass)}
      >
        {trustPoints.map((point) => (
          <li key={point.title} className="why-features__item">
            <WhyFeatureItem
              icon={point.icon}
              title={point.title}
              description={point.description}
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
      className="why-choose-us-section"
    >
      <Container>
        <WhyChooseUs />
      </Container>
    </Section>
  )
}

export { WhyChooseUs, WhyChooseUsSection, trustPoints }
