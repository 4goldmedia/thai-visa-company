/**
 * @deprecated Import from `@/lib/schema` instead.
 */
export {
  buildArticlePageSchemaGraph as buildArticleJsonLdGraph,
} from "@/lib/schema"

export type {
  BuildArticlePageSchemaInput as BuildArticleJsonLdInput,
  JsonLdNode as ContentJsonLdNode,
} from "@/lib/schema"

export type { ArticleInput } from "@/lib/schema/types"

/** @deprecated Use `ArticleInput["type"]` */
export type ContentArticleSchemaType = NonNullable<
  import("@/lib/schema/types").ArticleInput["type"]
>
