/**
 * Structured “At a glance” facts — executive-summary layer for homepage and landings.
 */

export type AtAGlanceIcon = "routes" | "response" | "location"

export type AtAGlanceItem = {
  icon: AtAGlanceIcon
  /** Short scan label */
  label: string
  /** Supporting detail — one controlled line */
  description: string
}

export type AtAGlanceContent = {
  title: string
  context: string
  items: ReadonlyArray<AtAGlanceItem>
}
