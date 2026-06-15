import { Container } from "@/components/layout/container"
import { Breadcrumbs } from "@/components/navigation/breadcrumbs"
import type { BreadcrumbLink } from "@/lib/breadcrumbs"
import { cn } from "@/lib/utils"

type PageBreadcrumbsProps = {
  items: ReadonlyArray<BreadcrumbLink>
  includeSchema?: boolean
  /** Wrap in site container (default true) */
  contained?: boolean
  /** Match surrounding section width */
  containerSize?: "default" | "prose" | "content"
  className?: string
}

/**
 * Page-level breadcrumb bar — visa pages, articles, and other inner pages.
 */
function PageBreadcrumbs({
  items,
  includeSchema = true,
  contained = true,
  containerSize = "default",
  className,
}: PageBreadcrumbsProps) {
  const crumbs = (
    <Breadcrumbs
      items={items}
      includeSchema={includeSchema}
      className={cn("py-1", className)}
    />
  )

  if (!contained) return crumbs

  return (
    <Container size={containerSize} className="pt-6 sm:pt-8">
      {crumbs}
    </Container>
  )
}

export { PageBreadcrumbs }
