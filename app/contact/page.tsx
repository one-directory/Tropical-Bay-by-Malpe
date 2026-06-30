import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import FadeIn from "@/components/animations/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/data/site";
import { Phone, Mail, MapPin, Clock, Share2, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Tropical Bay by Malpe. Reserve a suite, ask a question, or plan your visit. We're available by phone, email, and in person.",
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: {
    title: "Contact Us | Tropical Bay by Malpe",
    description: "Reach our team for reservations, enquiries, and event planning.",
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero contact-hero">
        <div className="page-hero-overlay" aria-hidden="true" />
        <FadeIn className="container-resort page-hero-content">
          <span className="text-overline page-hero-overline">Reach Us</span>
          <h1 className="text-h1 page-hero-title">Let's Begin Your Stay</h1>
          <p className="page-hero-desc">
            Whether you're ready to book, have a question, or want to plan something special —
            our team is here. We typically respond within a few hours.
          </p>
        </FadeIn>
      </section>

      {/* Contact Grid */}
      <section className="section-padding-lg bg-off-white" aria-labelledby="contact-heading">
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
                      <p className="info-label">Phone & WhatsApp</p>
                      <a href={`tel:${siteConfig.phone}`} className="info-value info-link">
                        {siteConfig.phone}
                      </a>
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

                  <li className="info-item">
                    <div className="info-icon-wrap">
                      <Clock size={16} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="info-label">Operating Hours</p>
                      <div className="hours-list">
                        {siteConfig.hours.map((h) => (
                          <div key={h.day} className="hours-row">
                            <span>{h.day}</span>
                            <span>{h.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </li>
                </ul>

                <div className="info-socials">
                  <p className="info-label">Follow Us</p>
                  <div className="social-links">
                    <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                      <Share2 size={16} />
                    </a>
                    <a href={siteConfig.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                      <Globe size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </aside>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding bg-cream" aria-labelledby="map-heading-contact">
        <div className="container-resort">
          <FadeIn>
            <SectionHeading
              overline="Find Us"
              title="Located at the Heart of Malpe"
              subtitle="Tropical Bay by Malpe is conveniently located near the St. Mary's Island Ferry Point, with easy access from Mangaluru and Udupi."
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
