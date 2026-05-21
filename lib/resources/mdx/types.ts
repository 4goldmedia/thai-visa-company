/**
 * @deprecated Import from `@/lib/content` instead.
 */
export type {
  ContentArticleTocItem as ResourceArticleTocItem,
  ResourceArticleDefinition,
  ResourceArticleMeta,
  ResourceArticlePageContent,
} from "@/lib/content"

export type ResourceMdxModule = {
  default: React.ComponentType
  article: import("@/lib/content").ResourceArticleMeta
}
