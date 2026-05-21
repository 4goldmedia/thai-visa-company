import { businessVisaPage } from "@/lib/visas/content/business"
import { dtvVisaPage } from "@/lib/visas/content/dtv"
import { educationVisaPage } from "@/lib/visas/content/education"
import { eliteVisaPage } from "@/lib/visas/content/elite"
import { retirementVisaPage } from "@/lib/visas/content/retirement"
import type { VisaPageContent, VisaSlug } from "@/lib/visas/types"

export const visaPages: Record<VisaSlug, VisaPageContent> = {
  retirement: retirementVisaPage,
  dtv: dtvVisaPage,
  elite: eliteVisaPage,
  business: businessVisaPage,
  education: educationVisaPage,
}

export const visaPageList = Object.values(visaPages)

export {
  retirementVisaPage,
  dtvVisaPage,
  eliteVisaPage,
  businessVisaPage,
  educationVisaPage,
}
