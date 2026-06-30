import {
  BriefcaseBusiness,
  Compass,
  Crown,
  GraduationCap,
  Laptop,
  Palmtree,
  type LucideIcon,
} from "lucide-react"

import type { VisaSlug } from "@/lib/visas/types"

export const movingVisaRouteIcons: Partial<Record<VisaSlug, LucideIcon>> = {
  dtv: Laptop,
  retirement: Palmtree,
  business: BriefcaseBusiness,
  education: GraduationCap,
  elite: Crown,
}
