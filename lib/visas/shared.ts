import type { VisaProcessStep } from "@/lib/visas/types"

/** Default four-step flow  -  shared across visa pages unless overridden */
export const defaultVisaProcessSteps: ReadonlyArray<VisaProcessStep> = [
  {
    step: 1,
    title: "Request a consultation",
    description:
      "Share your plans with a visa specialist. We reply with guidance tailored to your situation.",
  },
  {
    step: 2,
    title: "We review your situation",
    description:
      "We confirm eligibility, timing, and the documents that apply to your nationality.",
  },
  {
    step: 3,
    title: "We prepare your application",
    description:
      "You get a clear checklist and support gathering requirements without guesswork.",
  },
  {
    step: 4,
    title: "Ongoing support",
    description:
      "We stay available for questions and updates as your application moves forward.",
  },
]

export const defaultFinalCtaFootnote =
  "We typically reply within one business day. No obligation to proceed."

/** Shared publish metadata for live visa pages  -  update per editorial review */
export const defaultVisaPublishMeta = {
  published: true as const,
  publishedAt: "2026-01-15",
  updatedAt: "2026-06-01",
}
