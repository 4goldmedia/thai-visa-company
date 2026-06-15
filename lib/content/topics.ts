/**
 * Semantic topic taxonomy — shared by articles, related linking, and series navigation.
 */

export const contentTopicIds = [
  "retirement",
  "dtv",
  "elite",
  "business",
  "education",
  "marriage",
  "tourist",
  "ltr",
  "process",
  "general",
] as const

export type ContentTopicId = (typeof contentTopicIds)[number]

export function isContentTopicId(value: string): value is ContentTopicId {
  return (contentTopicIds as readonly string[]).includes(value)
}
