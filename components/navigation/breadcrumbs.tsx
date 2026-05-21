import Link from "next/link"

import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld"
import {
  breadcrumbCurrentClass,
  breadcrumbItemClass,
  breadcrumbLinkClass,
  breadcrumbListClass,
  breadcrumbNavClass,
  breadcrumbSeparatorClass,
} from "@/lib/breadcrumb-styles"
import type { BreadcrumbLink } from "@/lib/breadcrumbs"
import { cn } from "@/lib/utils"

export type BreadcrumbsProps = {
  items: ReadonlyArray<BreadcrumbLink>
  /** Render matching BreadcrumbList JSON-LD (default true) */
  includeSchema?: boolean
  className?: string
  /** Optional id for `aria-labelledby` when nested in a landmark */
  navLabel?: string
}

function BreadcrumbSeparator() {
  return (
    <span aria-hidden className={breadcrumbSeparatorClass}>
      /
    </span>
  )
}

function Breadcrumbs({
  items,
  includeSchema = true,
  className,
  navLabel = "Breadcrumb",
}: BreadcrumbsProps) {
  if (items.length === 0) return null

  const lastIndex = items.length - 1

  return (
    <>
      {includeSchema ? <BreadcrumbJsonLd items={items} /> : null}
      <nav aria-label={navLabel} className={cn(breadcrumbNavClass, className)}>
        <ol className={breadcrumbListClass}>
          {items.map((item, index) => {
            const isCurrent = index === lastIndex

            return (
              <li
                key={`${item.href}-${index}`}
                className={breadcrumbItemClass}
              >
                {index > 0 ? <BreadcrumbSeparator /> : null}
                {isCurrent ? (
                  <span aria-current="page" className={breadcrumbCurrentClass}>
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className={breadcrumbLinkClass}>
                    {item.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}

export { Breadcrumbs }
