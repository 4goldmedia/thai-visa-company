import {
  CalendarDays,
  HeartPulse,
  House,
  Sun,
  Trees,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react"

export const movingRetirementCardIcons: Record<string, LucideIcon> = {
  costs: Wallet,
  community: Users,
  healthcare: HeartPulse,
  "pace-of-life": Trees,
  climate: Sun,
  housing: House,
  "daily-life": CalendarDays,
}
