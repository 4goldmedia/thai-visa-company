import type { Metadata } from "next"
import { redirect } from "next/navigation"

import { consultationPath } from "@/lib/navigation"
import { createPageMetadata } from "@/lib/seo"
import { contactAiCopy } from "@/lib/seo/ai-search"

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description: contactAiCopy.extractableSummary,
  path: "/contact",
  keywords: [
    "contact Thai Visa Company",
    "Thailand visa specialist contact",
    "LINE WhatsApp visa help",
  ],
})

/** Legacy contact URL  -  consultation lives on a dedicated page. */
export default function ContactPage() {
  redirect(consultationPath)
}
