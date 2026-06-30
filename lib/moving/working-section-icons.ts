import {
  BriefcaseBusiness,
  Building2,
  FileCheck,
  Handshake,
  Laptop,
  PenTool,
  Rocket,
  type LucideIcon,
} from "lucide-react"

export const movingWorkingSubsectionIcons: Record<string, LucideIcon> = {
  employment: BriefcaseBusiness,
  "remote-work": Laptop,
  freelancing: PenTool,
  entrepreneurship: Rocket,
  "business-culture": Handshake,
  coworking: Building2,
  "work-permits": FileCheck,
}
