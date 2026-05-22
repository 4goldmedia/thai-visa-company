import { parseAnalyticsClickContext } from "@/lib/analytics/context"
import { trackContactChannelClick } from "@/lib/analytics/contact"
import { trackCtaClickFromElement } from "@/lib/analytics/dom"

/**
 * One document-level click listener for LINE/WhatsApp and analytics CTA attributes.
 * Uses a page-path getter so the listener is not re-attached on route changes.
 */
export function attachAnalyticsClickListener(
  getPagePath: () => string,
): () => void {
  function handleClick(event: MouseEvent) {
    const target = event.target
    if (!(target instanceof Element)) return

    const contactAnchor = target.closest<HTMLAnchorElement>(
      "a[data-contact-channel]",
    )
    if (contactAnchor) {
      const channel = contactAnchor.dataset.contactChannel
      if (channel === "line" || channel === "whatsapp") {
        const context = parseAnalyticsClickContext(contactAnchor)
        trackContactChannelClick(channel, {
          page_path: getPagePath(),
          link_url: contactAnchor.href,
          surface: context?.surface,
          cta_id: context?.cta_id,
          visa_slug: context?.visa_slug,
          article_slug: context?.article_slug,
        })
      }
      return
    }

    trackCtaClickFromElement(target, getPagePath())
  }

  document.addEventListener("click", handleClick, { capture: true, passive: true })
  return () => {
    document.removeEventListener("click", handleClick, { capture: true })
  }
}
