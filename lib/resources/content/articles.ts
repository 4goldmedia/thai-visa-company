import { getResourceIndexArticlesSync } from "@/lib/content/articles"

/** Resources index — published MDX (registry) + planned stubs from `lib/content/planned` */
export const resourceArticles = getResourceIndexArticlesSync()
