import Link from "next/link"

import { isVisaSlug } from "@/lib/visas/registry"
import { visaPath, type VisaSlug } from "@/lib/visas/types"
import { cn } from "@/lib/utils"

type VisaLinkProps = {
  /** Known visa slug  -  preferred */
  slug?: VisaSlug
  /** Full visa path, e.g. `/visas/retirement` */
  href?: `/visas/${string}`
  children: React.ReactNode
  className?: string
}

function resolveVisaHref({
  slug,
  href,
}: Pick<VisaLinkProps, "slug" | "href">): `/visas/${string}` | null {
  if (slug) return visaPath(slug)
  if (!href?.startsWith("/visas/")) return null

  const pathSlug = href.slice("/visas/".length).replace(/\/$/, "")
  if (!pathSlug || !isVisaSlug(pathSlug)) return null

  return href
}

/** MDX link to a published visa landing page */
function VisaLink({ slug, href, children, className }: VisaLinkProps) {
  const resolvedHref = resolveVisaHref({ slug, href })

  if (!resolvedHref) {
    return <span className={className}>{children}</span>
  }

  return (
    <Link href={resolvedHref} className={cn(className)}>
      {children}
    </Link>
  )
}

export { VisaLink }
