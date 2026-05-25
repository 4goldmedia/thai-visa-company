/**
 * Homepage client reviews — UI copy and enriched review cards (avatars, visa types).
 * Schema excerpts stay aligned in `platformBusinessProfile.reviews`.
 */

export const clientReviewsSectionCopy = {
  eyebrow: "Client reviews",
  title: "People we've helped move to Thailand",
  description:
    "From first questions to final approval, we help make the process easier.",
  footerLink: "View all reviews on Google",
} as const

export type ClientReview = {
  id: string
  name: string
  location: string
  visaType: string
  review: string
  rating: number
  avatar: {
    src: string
    alt: string
  }
}

export const homepageClientReviews: ReadonlyArray<ClientReview> = [
  {
    id: "james-r",
    name: "James R.",
    location: "United Kingdom",
    visaType: "DTV Visa",
    rating: 5,
    review:
      "The process was much easier than expected. Fast replies and clear explanations throughout.",
    avatar: {
      src: "/images/reviews/james-r.jpg",
      alt: "Portrait of James R., United Kingdom",
    },
  },
  {
    id: "emily-k",
    name: "Emily K.",
    location: "United States",
    visaType: "DTV Visa",
    rating: 5,
    review:
      "Every step was explained in plain language. I always knew what to prepare before sending documents.",
    avatar: {
      src: "/images/reviews/emily-k.jpg",
      alt: "Portrait of Emily K., United States",
    },
  },
  {
    id: "markus-w",
    name: "Markus W.",
    location: "Germany",
    visaType: "Business Visa",
    rating: 5,
    review:
      "Consistent support during my business visa application. Practical answers, not vague general advice.",
    avatar: {
      src: "/images/reviews/markus-w.jpg",
      alt: "Portrait of Markus W., Germany",
    },
  },
] as const
