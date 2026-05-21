import type { VisaProcessStep } from "@/lib/visas/types"

/** Default four-step flow — shared across visa pages unless overridden */
export const defaultVisaProcessSteps: ReadonlyArray<VisaProcessStep> = [
  {
    step: 1,
    title: "Contact us",
    description:
      "Message us on LINE or WhatsApp with your plans. We reply with what to check first.",
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
  "Same-day replies on LINE and WhatsApp. Free to ask, with no obligation to proceed."
