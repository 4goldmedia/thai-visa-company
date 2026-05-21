import Link from "next/link"
import type { MDXComponents } from "mdx/types"

import { cn } from "@/lib/utils"

/**
 * Global MDX component map. Article body prose is styled by `articleProseClass`
 * on `ArticleBody`; these overrides keep semantics and internal routing correct.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ href, children, ...props }) => {
      if (href?.startsWith("/")) {
        return (
          <Link href={href} {...props}>
            {children}
          </Link>
        )
      }
      if (href?.startsWith("#")) {
        return (
          <a href={href} {...props}>
            {children}
          </a>
        )
      }
      return (
        <a href={href} rel="noopener noreferrer" target="_blank" {...props}>
          {children}
        </a>
      )
    },
    blockquote: ({ className, ...props }) => (
      <blockquote className={cn(className)} {...props} />
    ),
    ...components,
  }
}
