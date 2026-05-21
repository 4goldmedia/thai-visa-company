import type { BreadcrumbLink } from "@/lib/breadcrumbs/types"

export const homeBreadcrumb: BreadcrumbLink = {
  label: "Home",
  href: "/",
}

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

export function getResourceArticleBreadcrumbs(input: {
  title: string
  path: string
}): BreadcrumbLink[] {
  return [
    homeBreadcrumb,
    resourcesIndexBreadcrumb,
    { label: input.title, href: input.path },
  ]
}
