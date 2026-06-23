import {
  Briefcase,
  Building2,
  Camera,
  ClipboardList,
  Home,
  IdCard,
  ShieldCheck,
  Sparkles,
  Stamp,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react"

import type { ContentVisaChecklistDocumentIcon } from "@/lib/content/types"

const visaChecklistDocumentIcons: Record<
  ContentVisaChecklistDocumentIcon,
  LucideIcon
> = {
  passport: IdCard,
  financial: Wallet,
  employment: Briefcase,
  activity: Sparkles,
  relationship: Users,
  insurance: ShieldCheck,
  "application-form": ClipboardList,
  photos: Camera,
  residence: Home,
  "visa-copy": Stamp,
  institution: Building2,
}

export function resolveVisaChecklistDocumentIcon(
  icon: ContentVisaChecklistDocumentIcon | undefined,
): LucideIcon {
  return icon ? visaChecklistDocumentIcons[icon] : ClipboardList
}

export function flattenChecklistGroupItems(
  group: {
    items?: ReadonlyArray<{ text: string; note?: string }>
    categories?: ReadonlyArray<{
      items: ReadonlyArray<{ text: string; note?: string }>
    }>
  },
): ReadonlyArray<{ text: string; note?: string }> {
  if (group.categories?.length) {
    return group.categories.flatMap((category) => category.items)
  }
  return group.items ?? []
}
