import { notFound } from "next/navigation"

import { VisaPageView } from "@/components/templates/visa-page-view"
import {
  getVisaPageStaticParams,
  resolveVisaPageContext,
} from "@/lib/visas/routing"
import type { VisaPageRouteParams } from "@/lib/visas/routing"

type VisaPageProps = {
  params: Promise<VisaPageRouteParams>
}

export function generateStaticParams() {
  return getVisaPageStaticParams()
}

export async function generateMetadata({ params }: VisaPageProps) {
  const { slug } = await params
  const context = await resolveVisaPageContext(slug)
  return context?.metadata ?? {}
}

export default async function VisaPage({ params }: VisaPageProps) {
  const { slug } = await params
  const context = await resolveVisaPageContext(slug)

  if (!context) {
    notFound()
  }

  return <VisaPageView context={context} />
}
