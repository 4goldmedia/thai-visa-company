import { getSiteUrl } from "@/lib/seo"

import { SCHEMA_CONTEXT } from "@/lib/schema/types"
import type {
  JsonLdGraphDocument,
  JsonLdNode,
  JsonLdSingleDocument,
} from "@/lib/schema/types"

/** Resolve an app path to an absolute URL */
export function toAbsoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`
  return new URL(normalized, getSiteUrl()).toString()
}

/** Remove undefined values for cleaner JSON-LD payloads */
export function compactNode<T extends Record<string, unknown>>(node: T): T {
  const entries = Object.entries(node).filter(([, value]) => value !== undefined)
  return Object.fromEntries(entries) as T
}

export function buildJsonLdGraph(nodes: JsonLdNode[]): JsonLdGraphDocument {
  return {
    "@context": SCHEMA_CONTEXT,
    "@graph": nodes.map((node) => compactNode(node)),
  }
}

export function buildJsonLdDocument(node: JsonLdNode): JsonLdSingleDocument {
  return {
    "@context": SCHEMA_CONTEXT,
    ...compactNode(node),
  }
}

/** Safe serialization for inline `<script type="application/ld+json">` */
export function serializeJsonLd(
  data: JsonLdGraphDocument | JsonLdSingleDocument | JsonLdNode,
): string {
  return JSON.stringify(data).replace(/</g, "\\u003c")
}
