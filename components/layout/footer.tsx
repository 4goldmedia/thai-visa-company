import Link from "next/link"

import { FooterMessagingLinks } from "@/components/cta/footer-messaging-links"
import { Container } from "@/components/layout/container"
import {
  footerBlogLinks,
  footerCompanyLinks,
  footerLegalLinks,
  footerVisaLinks,
} from "@/lib/navigation"
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

function FooterBrand() {
  return (
    <div className="site-footer__brand">
      <Link href="/" className="site-footer__brand-name">
        <span className="sr-only">{siteConfig.name} — Home</span>
        <span aria-hidden>{siteConfig.name}</span>
      </Link>

      <p className="site-footer__brand-tagline">
        Trusted Thailand visa specialists.
      </p>

      <ul className="site-footer__brand-contact">
        <FooterMessagingLinks />
      </ul>
    </div>
  )
}

function FooterLegalBar() {
  return (
    <div className="site-footer__legal">
      <div className="site-footer__legal-row">
        <p className="site-footer__copyright">
          © 2026 {siteConfig.name}
        </p>

        <nav aria-label="Legal">
          <ul className="site-footer__legal-nav">
            {footerLegalLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="site-footer__link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

type FooterProps = {
  className?: string
}

function Footer({ className }: FooterProps) {
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
              <FooterNavGroup title="Visas" links={footerVisaLinks} />
              <FooterNavGroup title="Blog" links={footerBlogLinks} />
              <FooterNavGroup title="Company" links={footerCompanyLinks} />
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
