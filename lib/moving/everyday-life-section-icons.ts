import {
  BusFront,
  CalendarDays,
  Dumbbell,
  HeartPulse,
  Languages,
  Palmtree,
  ShoppingBag,
  Utensils,
  Users,
  Wifi,
  type LucideIcon,
} from "lucide-react"

export const movingEverydayLifeSubsectionIcons: Record<string, LucideIcon> = {
  "daily-routine": CalendarDays,
  shopping: ShoppingBag,
  transportation: BusFront,
  food: Utensils,
  internet: Wifi,
  healthcare: HeartPulse,
  exercise: Dumbbell,
  community: Users,
  weekends: Palmtree,
  language: Languages,
}
