import { Mail } from "lucide-react"

import { LineIcon, WhatsAppIcon } from "@/components/icons/platform-icons"
import { analyticsDataAttributes } from "@/lib/analytics/attributes"
import { analyticsCtaIds } from "@/lib/analytics/cta-ids"
import { CONTACT_URLS, getMessagingChannels } from "@/lib/contact"

/**
 * Footer contact list  -  LINE, WhatsApp, and email with outline-style icons.
 */
function FooterMessagingLinks() {
  const channels = getMessagingChannels()

  return (
    <div
      className="contents"
      {...analyticsDataAttributes({
        ctaId: analyticsCtaIds.footerContact,
        surface: "global",
      })}
    >
      {channels.map((channel) => (
        <li key={channel.id}>
          <a
            href={channel.url}
            className="site-footer__contact-link"
            target="_blank"
            rel="noopener noreferrer"
            data-contact-channel={channel.id}
          >
            {channel.id === "line" ? (
              <LineIcon size="xs" tone="concierge" className="site-footer__contact-icon" />
            ) : (
              <WhatsAppIcon
                size="xs"
                tone="concierge"
                className="site-footer__contact-icon"
              />
            )}
            <span>{channel.label}</span>
            <span className="sr-only"> (opens in new tab)</span>
          </a>
        </li>
      ))}

      <li>
        <a
          href={`mailto:${CONTACT_URLS.email}`}
          className="site-footer__contact-link site-footer__contact-link--email"
        >
          <Mail
            className="site-footer__contact-icon site-footer__contact-icon--lucide"
            strokeWidth={1.5}
            aria-hidden
          />
          <span>{CONTACT_URLS.email}</span>
        </a>
      </li>
    </div>
  )
}

export { FooterMessagingLinks }
