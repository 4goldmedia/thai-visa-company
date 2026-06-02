import Link from "next/link"

import { Container } from "@/components/layout/container"
import { FooterMessagingLinks } from "@/components/cta/footer-messaging-links"
import { CONTACT_URLS } from "@/lib/contact"
import {
  consultationPath,
  footerLegalLinks,
  footerResourceLinks,
  footerVisaLinks,
  homeSectionAnchors,
} from "@/lib/navigation"
import { ctaLabels } from "@/lib/cta"
import { siteRoutes } from "@/lib/site-routes"
import { siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"

type FooterNavLink = {
  label: string
  href: string
  external?: boolean
}

type FooterNavGroupProps = {
  title: string
  links: ReadonlyArray<FooterNavLink>
}

function FooterNavGroup({ title, links }: FooterNavGroupProps) {
  const navId = title.toLowerCase().replace(/\s+/g, "-")

  return (
    <nav
      aria-labelledby={`footer-${navId}`}
      className="site-footer__nav-group"
    >
      <h3 id={`footer-${navId}`} className="site-footer__heading">
        {title}
      </h3>
      <ul className="site-footer__links">
        {links.map((item) => (
          <li key={`${item.href}-${item.label}`}>
            {item.external ? (
              <a
                href={item.href}
                className="site-footer__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
            ) : (
              <Link href={item.href} className="site-footer__link">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

type FooterContactItemProps = {
  href: string
  label: string
  external?: boolean
}

function FooterContactItem({
  href,
  label,
  external = false,
}: FooterContactItemProps) {
  if (external) {
    return (
      <a
        href={href}
        className="site-footer__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    )
  }

  if (href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className="site-footer__link site-footer__link--break"
      >
        {label}
      </a>
    )
  }

  return (
    <Link href={href} className="site-footer__link">
      {label}
    </Link>
  )
}

function FooterBrand() {
  return (
    <div className="site-footer__brand">
      <Link href="/" className="site-footer__brand-name">
        <span className="sr-only">{siteConfig.name} — Home</span>
        <span aria-hidden>{siteConfig.name}</span>
      </Link>

      <p className="site-footer__brand-tagline">
        Thailand visa guidance for foreigners, with clear answers and responsive
        support when you need it.
      </p>

      <ul className="site-footer__brand-contact">
        <FooterMessagingLinks />
        <li>
          <FooterContactItem
            href={`mailto:${CONTACT_URLS.email}`}
            label={CONTACT_URLS.email}
          />
        </li>
      </ul>
    </div>
  )
}

function FooterLegalBar() {
  const publishedLegalLinks = footerLegalLinks.filter((item) => {
    const route = siteRoutes.find((entry) => entry.path === item.href)
    return route?.published === true
  })

  return (
    <div className="site-footer__legal">
      <div className="site-footer__legal-row">
        <p className="site-footer__copyright">
          © 2026 {siteConfig.name}
        </p>

        {publishedLegalLinks.length > 0 ? (
          <nav aria-label="Legal">
            <ul className="site-footer__legal-nav">
              {publishedLegalLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="site-footer__link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>
    </div>
  )
}

type FooterProps = {
  className?: string
}

function Footer({ className }: FooterProps) {
  const reviewsLinks = [
    { label: "Client reviews", href: homeSectionAnchors.reviews },
  ] as const
  const consultationNavLinks = [
    {
      label: ctaLabels.requestConsultation,
      href: consultationPath,
    },
  ] as const

  return (
    <footer
      data-slot="footer"
      aria-label="Site footer"
      className={cn("site-footer", className)}
    >
      <Container>
        <div className="site-footer__inner">
          <div className="site-footer__main">
            <FooterBrand />

            <div className="site-footer__nav-grid">
              <FooterNavGroup title="Visa Services" links={footerVisaLinks} />
              <FooterNavGroup title="Resources" links={footerResourceLinks} />
              <FooterNavGroup title="Reviews" links={reviewsLinks} />
              <FooterNavGroup
                title="Consultation"
                links={consultationNavLinks}
              />
            </div>
          </div>

          <FooterLegalBar />
        </div>
      </Container>
    </footer>
  )
}

export { Footer, FooterBrand, FooterNavGroup, FooterLegalBar }
export type { FooterProps }
