import { notFound } from "next/navigation"

import { VisaPageView } from "@/components/templates/visa-page-view"
import { resolveVisaPageContext } from "@/lib/visas/routing"

/**
 * Thailand Retirement Visa — dedicated route at `/visas/retirement`.
 * Content: `lib/visas/content/retirement.ts` · Routing: `lib/visas/routing`
 */
export async function generateMetadata() {
  const context = await resolveVisaPageContext("retirement")
  return context?.metadata ?? {}
}

export default async function RetirementVisaPage() {
  const context = await resolveVisaPageContext("retirement")

  if (!context) {
    notFound()
  }

  return <VisaPageView context={context} />
}
