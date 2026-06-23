import {
  BadgeCheck,
  Briefcase,
  ClipboardList,
  Files,
  Wallet,
  type LucideIcon,
} from "lucide-react"

import type { ContentVisaPitfallIcon } from "@/lib/content/types"

const visaPitfallIcons: Record<ContentVisaPitfallIcon, LucideIcon> = {
  financial: Wallet,
  activity: Briefcase,
  documents: Files,
  checklist: ClipboardList,
  enrolment: BadgeCheck,
}

export function resolveVisaPitfallIcon(
  icon: ContentVisaPitfallIcon | undefined,
): LucideIcon {
  return icon ? visaPitfallIcons[icon] : ClipboardList
}
