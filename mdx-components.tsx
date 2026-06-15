import Link from "next/link"
import type { MDXComponents } from "mdx/types"

import { ContactCtaGroup } from "@/components/cta"
import {
  ArticleCallout,
  ArticleChecklist,
  ArticleComparison,
  ArticleImage,
  ArticleKeyValueTable,
  ArticleLinkCard,
  ArticleQuickAnswer,
  ArticleStat,
  ArticleTable,
  ArticleTimeline,
} from "@/components/editorial"
import { Callout } from "@/components/mdx/callout"
import { Citation } from "@/components/mdx/citation"
import { ComparisonTable } from "@/components/mdx/comparison-table"
import { ConsultationCta } from "@/components/mdx/consultation-cta"
import { Definition } from "@/components/mdx/definition"
import { KeyFacts } from "@/components/mdx/key-facts"
import { ProcessSteps } from "@/components/mdx/process-steps"
import { Timeline } from "@/components/mdx/timeline"
import { VisaLink } from "@/components/mdx/visa-link"
import { cn } from "@/lib/utils"

/**
 * Global MDX component map. Blog article body uses `editorial-prose`;
 * these overrides keep semantics, tables, and internal routing correct.
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
    table: ({ className, ...props }) => (
      <div className="editorial-table-wrap">
        <table className={cn("editorial-table", className)} {...props} />
      </div>
    ),
    thead: ({ className, ...props }) => (
      <thead className={cn(className)} {...props} />
    ),
    tbody: ({ className, ...props }) => (
      <tbody className={cn(className)} {...props} />
    ),
    tr: ({ className, ...props }) => <tr className={cn(className)} {...props} />,
    th: ({ className, ...props }) => <th className={cn(className)} {...props} />,
    td: ({ className, ...props }) => <td className={cn(className)} {...props} />,
    Callout,
    ContactCtaGroup,
    ConsultationCta,
    Definition,
    KeyFacts,
    VisaLink,
    Citation,
    ComparisonTable,
    ProcessSteps,
    Timeline,
    ArticleCallout,
    ArticleChecklist,
    ArticleComparison,
    ArticleImage,
    ArticleKeyValueTable,
    ArticleLinkCard,
    ArticleQuickAnswer,
    ArticleStat,
    ArticleTable,
    ArticleTimeline,
    ...components,
  }
}
