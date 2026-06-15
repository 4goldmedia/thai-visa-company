export {
  extractFaqFromBlogArticle,
  extractFaqFromGuideArticle,
  extractFaqFromVisaPage,
} from "@/lib/faq/extract"
export { buildFaqHubSchemaGraph } from "@/lib/faq/schema"
export type {
  FaqHubConfig,
  FaqHubTopicSlug,
  FaqRecord,
  FaqSource,
  FaqSourceType,
} from "@/lib/faq/types"
