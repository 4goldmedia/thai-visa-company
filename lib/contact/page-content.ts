import { messagingChannelLabels } from "@/lib/contact/channels"

const messagingNames = `${messagingChannelLabels.lineShort} and ${messagingChannelLabels.whatsapp}`

export const contactPageContent = {
  seo: {
    title: "Contact Us",
    description:
      "Ask about your Thailand visa on LINE, WhatsApp, or our short inquiry form. Clear answers, low friction, typically within one business day.",
    keywords: [
      "contact Thailand visa",
      "Thailand visa help",
      "LINE visa Thailand",
      "WhatsApp visa Thailand",
    ],
  },
  hero: {
    eyebrow: "Contact",
    title: "Ask about your Thai visa",
    overview:
      "Planning ahead or already in Thailand, we help you understand options and next steps, without pressure or jargon.",
    responseTime:
      "We typically reply within one business day on LINE, WhatsApp, or email.",
  },
  messagingAside: {
    title: "Prefer messaging?",
    description:
      "Tap LINE or WhatsApp for a quick back-and-forth, especially handy on mobile in Thailand.",
  },
  inquiry: {
    title: "Send a quick message",
    description:
      "A few details are enough. We will reply with clear next steps. About a minute to complete.",
    timeEstimate: "About a minute · No obligation to proceed",
    submitLabel: "Send inquiry",
    trustNote:
      "Your details stay with our team only. We use them to answer your question, not for marketing lists.",
  },
  trust: {
    title: "What to expect",
    items: [
      "Straight answers on eligibility, timing, and documents for your nationality.",
      `Follow-up on ${messagingNames} so you can ask questions in one thread.`,
      "No obligation. Use us for clarity before you decide how to apply.",
    ],
  },
} as const
