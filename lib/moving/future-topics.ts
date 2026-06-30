/**
 * Future child pages under the Moving to Thailand pillar.
 * Registry only — routes ship when dedicated guides are ready.
 */

export type MovingFutureTopicId =
  | "healthcare"
  | "cost-of-living"
  | "housing"
  | "banking"
  | "taxes"
  | "driving"
  | "property"
  | "schools"
  | "city-guides"

export type MovingFutureTopic = {
  id: MovingFutureTopicId
  label: string
  /** In-page anchor until a dedicated route exists */
  anchorId?: string
  /** Populated when the guide page ships */
  href?: string
}

export const movingFutureTopics = {
  healthcare: {
    id: "healthcare",
    label: "Healthcare in Thailand",
    anchorId: "moment-healthcare",
  },
  costOfLiving: {
    id: "cost-of-living",
    label: "Cost of living in Thailand",
    anchorId: "cost-of-living",
  },
  housing: {
    id: "housing",
    label: "Housing in Thailand",
  },
  banking: {
    id: "banking",
    label: "Banking in Thailand",
  },
  taxes: {
    id: "taxes",
    label: "Taxes for expats in Thailand",
  },
  driving: {
    id: "driving",
    label: "Driving in Thailand",
  },
  property: {
    id: "property",
    label: "Buying property in Thailand",
  },
  schools: {
    id: "schools",
    label: "International schools in Thailand",
  },
  cityGuides: {
    id: "city-guides",
    label: "City guides",
    anchorId: "cities",
  },
} as const satisfies Record<string, MovingFutureTopic>
