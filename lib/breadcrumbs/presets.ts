import { blogPath } from "@/lib/navigation"
import type { BreadcrumbLink } from "@/lib/breadcrumbs/types"

export const homeBreadcrumb: BreadcrumbLink = {
  label: "Home",
  href: "/",
}

/** @deprecated Use `blogIndexBreadcrumb` */
export const guidesIndexBreadcrumb: BreadcrumbLink = {
  label: "Blog",
  href: blogPath,
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

/** @deprecated Use `getBlogArticleBreadcrumbs` */
export function getGuideArticleBreadcrumbs(
  input: Parameters<typeof getBlogArticleBreadcrumbs>[0],
): BreadcrumbLink[] {
  return getBlogArticleBreadcrumbs(input)
}

/** @deprecated Use `getBlogArticleBreadcrumbs` */
export function getResourceArticleBreadcrumbs(input: {
  title: string
  path: string
}): BreadcrumbLink[] {
  return getBlogArticleBreadcrumbs(input)
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
