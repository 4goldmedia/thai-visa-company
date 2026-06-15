export type SearchedTopicLink = {
  label: string
  href: string
  description?: string
}

export const frequentlySearchedTopics = [
  {
    label: "What is a DTV visa?",
    href: "/guides/what-is-thailand-dtv-visa",
    description: "Who qualifies and how it differs from tourist visas.",
  },
  {
    label: "Retirement visa requirements",
    href: "/guides/how-to-get-thailand-retirement-visa",
    description: "Age, finances, and documents for age 50+ applicants.",
  },
  {
    label: "DTV vs Retirement Visa",
    href: "/guides/topic/dtv",
    description: "Compare routes when deciding how to stay long term.",
  },
  {
    label: "How long does a visa take?",
    href: "/guides/how-long-does-thai-visa-take",
    description: "Typical processing windows by visa type.",
  },
  {
    label: "Thailand retirement visa service",
    href: "/visas/retirement",
    description: "Personalized help with your retirement visa file.",
  },
] as const satisfies readonly SearchedTopicLink[]
