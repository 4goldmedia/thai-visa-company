export type VisaRequirementItemTone = "mandatory" | "supporting" | "note" | "default"

export function getVisaRequirementItemTone(
  text: string,
): VisaRequirementItemTone {
  if (text.startsWith("Mandatory:")) return "mandatory"
  if (text.startsWith("Supporting:")) return "supporting"
  if (text.startsWith("Note:")) return "note"
  return "default"
}

export function formatVisaRequirementItem(text: string): string {
  return text
    .replace(/^Mandatory:\s*/i, "")
    .replace(/^Supporting:\s*/i, "")
    .replace(/^Note:\s*/i, "")
}
