import type { Metadata } from "next";
export const dynamic = 'force-dynamic';

import ContactForm from "./ContactForm";
import FadeIn from "@/components/animations/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/data/site";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import { Phone, Mail, MapPin } from "lucide-react";
import { getBreadcrumbSchema, getHotelSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = {
  title: "Contact Us & Reservations | Tropical Bay by Malpe, Udupi",
  description:
    "Contact Tropical Bay by Malpe in Pithrody, Udyavara, Udupi. Reserve a suite, inquire about rates, or reach our concierge by phone or email.",
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: {
    title: "Contact Us & Reservations | Tropical Bay by Malpe, Udupi",
    description:
      "Contact Tropical Bay by Malpe in Pithrody, Udyavara, Udupi. Reserve a suite, inquire about rates, or reach our concierge by phone or email.",
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/hero-desktop.webp",
        width: 1200,
        height: 630,
        alt: "Contact Tropical Bay by Malpe in Udyavara, Udupi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us & Reservations | Tropical Bay by Malpe, Udupi",
    description:
      "Contact Tropical Bay by Malpe in Pithrody, Udyavara, Udupi. Reserve a suite or reach our concierge.",
    images: ["/images/home/hero-desktop.webp"],
  },
};

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Contact Us", url: `${siteConfig.url}/contact` },
  ]);

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact Us | ${siteConfig.name}`,
    description:
      "Contact details, address, and location map for Tropical Bay by Malpe in Udyavara, Udupi.",
    url: `${siteConfig.url}/contact`,
    mainEntity: getHotelSchema(),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      {/* Hero */}
      <section className="page-hero contact-hero" style={{ paddingTop: "7rem", paddingBottom: "2rem" }}>
        <div className="page-hero-overlay" aria-hidden="true" />
        <FadeIn className="container-resort">
          <div className="page-hero-content" style={{ display: "flex", flexDirection: "column", gap: "1.25rem", alignItems: "center", textAlign: "center", marginInline: "auto" }}>
            <h1 className="text-h1 page-hero-title" style={{ margin: "0", fontSize: "clamp(2.2rem, 5vw, 3rem)" }}>Contact Us</h1>
            <p className="page-hero-desc" style={{ margin: "0", opacity: 0.85, fontSize: "1.05rem", maxWidth: "600px" }}>
              Whether you have a query or are ready to book your stay, our team is here to assist.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Contact Grid */}
      <section className="bg-off-white" aria-labelledby="contact-heading" style={{ paddingBlock: "3rem var(--section-y)" }}>
        <div className="container-resort contact-grid">
          {/* Form Side */}
          <div className="contact-form-side">
            <FadeIn>
              <SectionHeading
                overline="Send Us a Message"
                title="How Can We Help?"
                id="contact-heading"
              />
              <div className="form-wrapper">
                <ContactForm />
              </div>
            </FadeIn>
          </div>

          {/* Info Side */}
          <aside className="contact-info-side" aria-label="Contact information">
            <FadeIn delay={0.15}>
              <div className="contact-info-card">
                <h2 className="info-section-title">Visit Us</h2>

                <ul className="info-list">
                  <li className="info-item">
                    <div className="info-icon-wrap">
                      <MapPin size={16} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="info-label">Address</p>
                      <address className="info-value" style={{ fontStyle: "normal" }}>
                        {siteConfig.address.line1}<br />
                        {siteConfig.address.line2}<br />
                        {siteConfig.address.city}, {siteConfig.address.state} — {siteConfig.address.pin}<br />
                        {siteConfig.address.country}
                      </address>
                    </div>
                  </li>

                  <li className="info-item">
                    <div className="info-icon-wrap">
                      <Phone size={16} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="info-label">Call Us</p>
                      <div className="info-phones">
                        {siteConfig.phones.map((phone) => (
                          <a key={phone.tel} href={`tel:${phone.tel}`} className="info-value info-link">
                            {phone.display}
                          </a>
                        ))}
                      </div>
                    </div>
                  </li>

                  <li className="info-item">
                    <div className="info-icon-wrap">
                      <Mail size={16} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="info-label">Email</p>
                      <a href={`mailto:${siteConfig.email}`} className="info-value info-link">
                        {siteConfig.email}
                      </a>
                    </div>
                  </li>
                </ul>

                <div className="info-socials">
                  <p className="info-label">Follow Us</p>
                  <div className="social-links">
                    <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                      <InstagramIcon size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </aside>
        </div>
      </section>

      {/* Local Proximity Section */}
      <section className="section-padding bg-cream" aria-labelledby="proximity-heading">
        <div className="container-resort">
          <FadeIn>
            <SectionHeading
              overline="Neighborhood Essentials"
              title="Local Proximity"
              subtitle="Tropical Bay by Malpe is conveniently connected to major transport hubs and emergency services."
              id="proximity-heading"
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="proximity-list" style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              marginTop: "2.5rem",
              maxWidth: "600px"
            }}>
              <div style={{ borderBottom: "1px solid rgba(30, 41, 59, 0.06)", paddingBottom: "1rem" }}>
                <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-text-dark)", marginBottom: "0.35rem" }}>Nearest Airport</h4>
                <p className="info-value" style={{ fontSize: "0.95rem", color: "rgba(22, 38, 43, 0.8)" }}>
                  Mangaluru International Airport (IXE) — 60 km (approx. 75 min drive)
                </p>
              </div>

              <div style={{ borderBottom: "1px solid rgba(30, 41, 59, 0.06)", paddingBottom: "1rem" }}>
                <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-text-dark)", marginBottom: "0.35rem" }}>Nearest Railway Station</h4>
                <p className="info-value" style={{ fontSize: "0.95rem", color: "rgba(22, 38, 43, 0.8)" }}>
                  Udupi Railway Station (UD) — 9 km (approx. 15 min drive)
                </p>
              </div>

              <div style={{ borderBottom: "1px solid rgba(30, 41, 59, 0.06)", paddingBottom: "1rem" }}>
                <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-text-dark)", marginBottom: "0.35rem" }}>Hospital</h4>
                <p className="info-value" style={{ fontSize: "0.95rem", color: "rgba(22, 38, 43, 0.8)" }}>
                  Kasturba Hospital (KMC), Manipal — 12 km (approx. 20 min drive)
                </p>
              </div>

              <div>
                <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-text-dark)", marginBottom: "0.35rem" }}>Police Station</h4>
                <p className="info-value" style={{ fontSize: "0.95rem", color: "rgba(22, 38, 43, 0.8)" }}>
                  Malpe Police Station — 5 km (approx. 8 min drive)
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding bg-off-white" aria-labelledby="map-heading-contact">
        <div className="container-resort">
          <FadeIn>
            <SectionHeading
              overline="Find Us"
              title="Located in the Scenic Backwaters of Pithrody"
              subtitle="Tropical Bay by Malpe is nestled in the peaceful backwaters of Pithrody, Udyavara, just minutes from Malpe Beach and Udupi. Enjoy a serene waterfront stay with easy access to St. Mary's Island, Malpe Fishing Harbour, and Udupi's top attractions."
              id="map-heading-contact"
            />
          </FadeIn>
          <FadeIn delay={0.2} className="contact-map">
            <iframe
              src={siteConfig.mapEmbedUrl}
              width="100%"
              height="420"
              style={{ border: 0, borderRadius: "4px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tropical Bay by Malpe location on Google Maps"
              aria-label="Map showing resort location"
            />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
