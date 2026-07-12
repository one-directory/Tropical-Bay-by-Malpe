import type { Metadata } from "next";



import FAQsClient from "./FAQsClient";
import FadeIn from "@/components/animations/FadeIn";

import { siteConfig } from "@/lib/data/site";
import { Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Frequently asked questions about staying at Tropical Bay by Malpe — reservations, rooms, dining, experiences, policies, and local travel.",
  alternates: { canonical: `${siteConfig.url}/faqs` },
  openGraph: {
    title: "FAQs | Tropical Bay by Malpe",
    description: "Everything you need to know before your stay at Malpe's premier boutique resort.",
    url: `${siteConfig.url}/faqs`,
  },
};

export default function FAQsPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero faqs-hero">
        <div className="page-hero-overlay" aria-hidden="true" />
        <FadeIn className="container-resort page-hero-content">
          <span className="text-overline page-hero-overline">Help Centre</span>
          <h1 className="text-h1 page-hero-title">Frequently Asked Questions</h1>
          <p className="page-hero-desc">
            Find answers to the most common questions about your stay. If you need
            anything beyond what's here, our team is just a call away.
          </p>
        </FadeIn>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding-lg bg-off-white" aria-labelledby="faqs-heading">
        <div className="container-narrow">
          <FAQsClient />
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-sand">
        <FadeIn className="container-narrow faqs-contact-block">
          <div>
            <h2 className="text-h2 faqs-contact-title">Still have a question?</h2>
            <p className="faqs-contact-desc">
              Our concierge team is available from 6 AM to 10 PM daily.
              We're always happy to help you plan the perfect stay.
            </p>
          </div>
          <div className="faqs-contact-actions">
            <a href={`tel:${siteConfig.phones[0].tel}`} className="btn btn-secondary faqs-contact-btn">
              <Phone size={15} aria-hidden="true" />
              Call Us
            </a>
            <a href={`mailto:${siteConfig.email}`} className="btn btn-outline text-navy faqs-contact-btn">
              <Mail size={15} aria-hidden="true" />
              Email Us
            </a>
          </div>
        </FadeIn>
      </section>

      
    </>
  );
}
