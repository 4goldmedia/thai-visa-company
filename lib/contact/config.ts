import { CONTACT_URLS } from "./constants"
import { siteBrand, siteContact } from "@/lib/site/config"

/** Business contact metadata — messaging URLs from `CONTACT_URLS`; identity from `lib/site/config` */
export const CONTACT_CONFIG = {
  companyName: siteBrand.name,
  get email() {
    return CONTACT_URLS.email
  },
  get supportEmail() {
    return siteContact.supportEmail
  },
  get phone() {
    return siteContact.phone
  },
  get lineUrl() {
    return CONTACT_URLS.line
  },
  get whatsappUrl() {
    return CONTACT_URLS.whatsapp
  },
} as const
