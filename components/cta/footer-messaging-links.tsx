import { analyticsDataAttributes } from "@/lib/analytics/attributes"
import { analyticsCtaIds } from "@/lib/analytics/cta-ids"
import { getMessagingChannels } from "@/lib/contact"

/**
 * Footer list of LINE and WhatsApp links — `getMessagingChannels()` registry.
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
            className="site-footer__link"
            target="_blank"
            rel="noopener noreferrer"
            data-contact-channel={channel.id}
          >
            {channel.label}
            <span className="sr-only"> (opens in new tab)</span>
          </a>
        </li>
      ))}
    </div>
  )
}

export { FooterMessagingLinks }
