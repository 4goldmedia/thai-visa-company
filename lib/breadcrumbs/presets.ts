import { blogPath, guidesPath } from "@/lib/navigation"
import type { BreadcrumbLink } from "@/lib/breadcrumbs/types"

export const homeBreadcrumb: BreadcrumbLink = {
  label: "Home",
  href: "/",
}

export const guidesIndexBreadcrumb: BreadcrumbLink = {
  label: "Guides",
  href: guidesPath,
}

/** @deprecated Use `guidesIndexBreadcrumb` */
export const resourcesIndexBreadcrumb: BreadcrumbLink = {
  label: "Resources",
  href: "/resources",
}

export function getVisaPageBreadcrumbs(input: {
  title: string
  path: string
}): BreadcrumbLink[] {
  return [homeBreadcrumb, { label: input.title, href: input.path }]
}

export function getGuideArticleBreadcrumbs(input: {
  title: string
  path: string
  categoryLabel?: string
  categoryPath?: string
}): BreadcrumbLink[] {
  const crumbs: BreadcrumbLink[] = [homeBreadcrumb, guidesIndexBreadcrumb]

  if (input.categoryLabel && input.categoryPath) {
    crumbs.push({ label: input.categoryLabel, href: input.categoryPath })
  }

  crumbs.push({ label: input.title, href: input.path })
  return crumbs
}

/** @deprecated Use `getGuideArticleBreadcrumbs` */
export function getResourceArticleBreadcrumbs(input: {
  title: string
  path: string
}): BreadcrumbLink[] {
  return getGuideArticleBreadcrumbs(input)
}

export const blogIndexBreadcrumb: BreadcrumbLink = {
  label: "Blog",
  href: blogPath,
}

export function getBlogArticleBreadcrumbs(input: {
  title: string
  path: string
  categoryLabel?: string
  categoryPath?: string
}): BreadcrumbLink[] {
  const crumbs: BreadcrumbLink[] = [homeBreadcrumb, blogIndexBreadcrumb]

  if (input.categoryLabel && input.categoryPath) {
    crumbs.push({ label: input.categoryLabel, href: input.categoryPath })
  }

  crumbs.push({ label: input.title, href: input.path })
  return crumbs
}

export function getConsultationPageBreadcrumbs(): BreadcrumbLink[] {
  return [
    homeBreadcrumb,
    { label: "Request a consultation", href: "/consultation" },
  ]
}

/** @deprecated Contact redirects to `/consultation` */
export function getContactPageBreadcrumbs(): BreadcrumbLink[] {
  return getConsultationPageBreadcrumbs()
}
