import Link from "next/link";
import { Share2, Globe, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/data/site";
import { rooms } from "@/lib/data/rooms";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

const experienceLinks = [
  { label: "Experiences", href: "/experience" },
  { label: "Around Us", href: "/around-us" },
  { label: "Attractions", href: "/attractions" },
  { label: "Explore", href: "/explore" },
];

const socialLinks = [
  { label: "Instagram", icon: Share2, href: siteConfig.socialLinks.instagram },
  { label: "Facebook", icon: Globe, href: siteConfig.socialLinks.facebook },
  { label: "YouTube", icon: Globe, href: siteConfig.socialLinks.youtube },
  { label: "Twitter / X", icon: Share2, href: siteConfig.socialLinks.twitter },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      {/* Top Wave Decoration */}
      <div className="footer-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,25 1440,30 L1440,0 L0,0 Z"
            fill="var(--color-navy)"
          />
        </svg>
      </div>

      <div className="footer-main">
        <div className="container-resort">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-brand">
              <Link href="/" className="footer-logo" aria-label="Tropical Bay by Malpe">
                <span className="footer-logo-mark">TB</span>
                <span className="footer-logo-text">
                  <span className="footer-logo-name">Tropical Bay</span>
                  <span className="footer-logo-sub">by Malpe</span>
                </span>
              </Link>
              <p className="footer-tagline">
                Where the Arabian Sea meets curated luxury. A boutique beachfront resort on the shores of Malpe, Karnataka.
              </p>
              <div className="footer-socials">
                {socialLinks.map(({ label, icon: Icon, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                    aria-label={label}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Rooms Column */}
            <div className="footer-col">
              <h3 className="footer-col-title">Suites</h3>
              <ul className="footer-links" role="list">
                <li>
                  <Link href="/rooms" className="footer-link">
                    All Rooms <ArrowUpRight size={12} />
                  </Link>
                </li>
                {rooms.map((room) => (
                  <li key={room.id}>
                    <Link href={`/${room.slug}`} className="footer-link">
                      {room.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links Column */}
            <div className="footer-col">
              <h3 className="footer-col-title">Resort</h3>
              <ul className="footer-links" role="list">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="footer-col-title" style={{ marginTop: "1.5rem" }}>Explore</h3>
              <ul className="footer-links" role="list">
                {experienceLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="footer-col">
              <h3 className="footer-col-title">Get In Touch</h3>
              <ul className="footer-contact-list" role="list">
                <li>
                  <MapPin size={14} className="footer-contact-icon" aria-hidden="true" />
                  <address className="footer-address">
                    {siteConfig.address.line1}<br />
                    {siteConfig.address.line2}<br />
                    {siteConfig.address.city}, {siteConfig.address.state} — {siteConfig.address.pin}
                  </address>
                </li>
                <li>
                  <Phone size={14} className="footer-contact-icon" aria-hidden="true" />
                  <a href={`tel:${siteConfig.whatsapp}`} className="footer-link">
                    {siteConfig.phone}
                  </a>
                </li>
                <li>
                  <Mail size={14} className="footer-contact-icon" aria-hidden="true" />
                  <a href={`mailto:${siteConfig.email}`} className="footer-link">
                    {siteConfig.email}
                  </a>
                </li>
              </ul>

              <div className="footer-hours">
                <h4 className="footer-hours-title">Hours</h4>
                {siteConfig.hours.map((h) => (
                  <div key={h.day} className="footer-hours-row">
                    <span>{h.day}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container-resort footer-bottom-inner">
          <p className="footer-copyright">
            © {year} Tropical Bay by Malpe. All rights reserved.
          </p>
          <nav className="footer-legal" aria-label="Legal links">
            <Link href="/privacy" className="footer-legal-link">Privacy Policy</Link>
            <Link href="/terms" className="footer-legal-link">Terms of Service</Link>
          </nav>
        </div>
      </div>

    </footer>
  );
}

