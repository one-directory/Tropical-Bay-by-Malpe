import type { Metadata } from "next";
export const dynamic = 'force-dynamic';

import FAQsClient from "./FAQsClient";
import FadeIn from "@/components/animations/FadeIn";
import { siteConfig } from "@/lib/data/site";
import { Phone, Mail } from "lucide-react";

import { getBreadcrumbSchema, getFAQSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Tropical Bay by Malpe, Udupi",
  description:
    "Find answers to common questions about staying at Tropical Bay in Udyavara, Udupi — check-in policies, room features, dining, and local experiences.",
  alternates: { canonical: `${siteConfig.url}/faqs` },
  openGraph: {
    title: "Frequently Asked Questions | Tropical Bay by Malpe, Udupi",
    description:
      "Find answers to common questions about staying at Tropical Bay in Udyavara, Udupi — check-in policies, room features, dining, and local experiences.",
    url: `${siteConfig.url}/faqs`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/hero-desktop.webp",
        width: 1200,
        height: 630,
        alt: "Tropical Bay by Malpe – FAQs in Udyavara, Udupi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | Tropical Bay by Malpe, Udupi",
    description:
      "Find answers to common questions about staying at Tropical Bay in Udyavara, Udupi near Malpe Beach.",
    images: ["/images/home/hero-desktop.webp"],
  },
};

export default function FAQsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "FAQs", url: `${siteConfig.url}/faqs` },
  ]);

  const faqSchema = getFAQSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}
      <section className="page-hero faqs-hero">
        <div className="page-hero-overlay" aria-hidden="true" />
        <FadeIn className="container-resort page-hero-content">
          <span className="text-overline page-hero-overline">Help Centre</span>
          <h1 className="text-h1 page-hero-title">Frequently Asked Questions</h1>
          <p className="page-hero-desc">
            Find answers to the most common questions about your stay. If you need
            anything beyond what&apos;s here, our team is just a call away.
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
              We&apos;re always happy to help you plan the perfect stay.
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
