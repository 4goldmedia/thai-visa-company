import { redirect } from "next/navigation"

import { consultationPath } from "@/lib/navigation"

/** Legacy contact URL  -  consultation lives on a dedicated page. */
export default function ContactPage() {
  redirect(consultationPath)
}
