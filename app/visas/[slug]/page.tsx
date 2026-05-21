import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { VisaPageTemplate } from "@/components/templates/visa-page"
import { createPageMetadata } from "@/lib/seo"
import { getAllVisaSlugs, getVisaBySlug } from "@/lib/visas"

type VisaPageParams = {
  slug: string
}

type VisaPageProps = {
  params: Promise<VisaPageParams>
}

export function generateStaticParams() {
  /** `/visas/retirement` is served by the dedicated page route */
  return getAllVisaSlugs()
    .filter((slug) => slug !== "retirement")
    .map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: VisaPageProps): Promise<Metadata> {
  const { slug } = await params
  const visa = getVisaBySlug(slug)

  if (!visa) {
    return {}
  }

  return createPageMetadata({
    title: visa.seo.title,
    description: visa.seo.description,
    path: visa.path,
    keywords: visa.seo.keywords,
  })
}

export default async function VisaPage({ params }: VisaPageProps) {
  const { slug } = await params
  const visa = getVisaBySlug(slug)

  if (!visa) {
    notFound()
  }

  return <VisaPageTemplate visa={visa} />
}
