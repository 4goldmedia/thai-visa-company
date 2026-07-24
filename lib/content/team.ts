import {
  BadgeCheck,
  Heart,
  Users,
  type LucideIcon,
} from "lucide-react"

import { teamPath } from "@/lib/navigation"

export { teamPath }

export type TeamMember = {
  id: string
  name: string
  role: string
  imageSrc: string
  imageAlt: string
  bio: ReadonlyArray<string>
  linkedInUrl?: string
}

export type TeamValue = {
  icon: LucideIcon
  title: string
  description: string
}

export const teamPageContent = {
  hero: {
    eyebrow: "Our team",
    title: "The people behind your move to Thailand.",
    lead:
      "Behind every successful relocation is a team that genuinely cares. We're here to make your move to Thailand simple, transparent, and stress-free, from your first question to your approved visa.",
    imageSrc: "/images/team/immigration.jpg",
    imageAlt:
      "Immigration consultant stamping an official document beside a passport on a wooden desk",
  },
  company: {
    eyebrow: "About our company",
    headingLine1: "Simplifying visas.",
    headingLine2: "Supporting dreams.",
    paragraphs: [
      "Thai Visa Company exists to help people relocate to Thailand with clarity and confidence.",
      "We handle the paperwork, communication, and immigration process so clients can focus on starting their new life.",
      "Every client receives personal guidance rather than a one-size-fits-all service.",
      "Trust, transparency, and honest advice are the foundation of everything we do.",
    ],
  },
  values: [
    {
      icon: BadgeCheck,
      title: "Trusted Expertise",
      description:
        "Years of experience helping people relocate to Thailand.",
    },
    {
      icon: Users,
      title: "Personal Guidance",
      description:
        "Tailored advice for every client and every visa journey.",
    },
    {
      icon: Heart,
      title: "Client First",
      description:
        "Clear communication, honest expectations and genuine support.",
    },
  ] as const satisfies ReadonlyArray<TeamValue>,
  founder: {
    name: "Nongmai",
    role: "Founder & Lead Consultant",
    imageSrc: "/images/team/nongmai.png",
    imageAlt:
      "Nongmai, founder of Thai Visa Company, at a professional gathering",
    bio: [
      "Nongmai founded Thai Visa Company to make relocating to Thailand feel clear, calm, and genuinely supported. She has spent years guiding foreigners through visas, documents, and everyday questions that surface once a move becomes real.",
      "Clients work directly with her for honest advice on the right visa path, what to prepare, and what to expect along the way. There is no generic script, and no pressure to choose a more complicated option than you need.",
      "Her approach is personal and practical: listen carefully, explain the process in plain language, and stay involved until the application is complete. Local expertise matters, and so does trust.",
      "When you speak with Nongmai, you get a clear next step and a partner who cares about the life you are building in Thailand, not just the paperwork.",
    ],
  },
  cta: {
    title: "Ready to start your move to Thailand?",
    description:
      "Get personalized guidance from Nongmai on visa options, documentation and your next steps. We're here to make your relocation simple and stress-free.",
    buttonLabel: "Request a Consultation",
  },
} as const

/** Optional registry for future team members beyond the founder feature card. */
export const teamMembers: ReadonlyArray<TeamMember> = [
  {
    id: "nongmai",
    name: teamPageContent.founder.name,
    role: teamPageContent.founder.role,
    imageSrc: teamPageContent.founder.imageSrc,
    imageAlt: teamPageContent.founder.imageAlt,
    bio: teamPageContent.founder.bio,
  },
]
