import type { JsonLdGraphDocument, JsonLdSingleDocument } from "@/lib/schema/types"
import { serializeJsonLd } from "@/lib/schema/utils"

type JsonLdScriptProps = {
  data: JsonLdGraphDocument | JsonLdSingleDocument
  /** Optional id for testing or multiple graphs per page */
  id?: string
}

/**
 * Renders a JSON-LD `<script>` tag for App Router server components.
 */
function JsonLdScript({ data, id }: JsonLdScriptProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  )
}

export { JsonLdScript }
