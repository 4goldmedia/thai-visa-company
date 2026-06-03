import type { ContentIsoDate } from "@/lib/content/types"

/** Display an ISO calendar date (`YYYY-MM-DD`) for editorial surfaces */
export function formatContentIsoDate(iso: ContentIsoDate): string {
  const [year, month, day] = iso.split("-").map((part) => Number(part))
  if (!year || !month || !day) return iso

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(year, month - 1, day))
}
