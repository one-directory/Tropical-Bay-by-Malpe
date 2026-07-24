import type { Metadata } from "next";
export const dynamic = 'force-dynamic';

import { experiences } from "@/lib/data/experiences";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerReveal";
import { Clock, Gauge, Tag } from "lucide-react";

import { siteConfig } from "@/lib/data/site";

import { getBreadcrumbSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = {
  title: "Coastal Experiences & Activities in Udupi | Tropical Bay",
  description:
    "Discover curated coastal experiences at Tropical Bay in Udyavara, Udupi — sunrise yoga, kayaking, bonfire evenings, boat rides to St. Mary's Island & seafood dining.",
  alternates: { canonical: `${siteConfig.url}/experience` },
  openGraph: {
    title: "Coastal Experiences & Activities in Udupi | Tropical Bay",
    description:
      "Discover curated coastal experiences at Tropical Bay in Udyavara, Udupi — sunrise yoga, kayaking, bonfire evenings, boat rides to St. Mary's Island & seafood dining.",
    url: `${siteConfig.url}/experience`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/hero-desktop.webp",
        width: 1200,
        height: 630,
        alt: "Coastal Experiences at Tropical Bay by Malpe in Udyavara, Udupi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coastal Experiences & Activities in Udupi | Tropical Bay",
    description:
      "Discover curated coastal experiences at Tropical Bay in Udyavara, Udupi — sunrise yoga, kayaking, bonfire evenings, and boat rides to St. Mary's Island.",
    images: ["/images/home/hero-desktop.webp"],
  },
};

export default function ExperiencePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Experiences", url: `${siteConfig.url}/experience` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero */}
      <section className="page-hero experience-hero">
        <div className="page-hero-overlay" aria-hidden="true" />
        <FadeIn className="container-resort page-hero-content">
          <span className="text-overline page-hero-overline">Beyond the Suite</span>
          <h1 className="text-h1 page-hero-title">Curated Coastal Experiences</h1>
          <p className="page-hero-desc">
            The Malpe coast offers a world of wonder. From the quiet ritual of a sunrise walk to
            the thrill of paddling open waters — we've curated nine experiences that bring you
            closer to the rhythm of this extraordinary place.
          </p>
        </FadeIn>
      </section>

      {/* Experiences Grid */}
      <section className="section-padding-lg bg-off-white" aria-labelledby="experience-heading">
        <div className="container-resort">
          <FadeIn>
            <SectionHeading
              overline="All Experiences"
              title="Find Your Moment"
              subtitle="Each experience is available to book through our concierge team during your stay. Some require advance booking — we recommend arranging on arrival."
              id="experience-heading"
            />
          </FadeIn>
          <StaggerContainer className="experience-grid">
            {experiences.map((exp) => (
              <StaggerItem key={exp.id}>
                <article className="experience-card card-resort" aria-label={exp.title}>
                  <div className="experience-visual" aria-hidden="true">
                    <div className="experience-gradient" />
                    <div className="experience-tags-overlay">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="experience-tag">
                          <Tag size={10} aria-hidden="true" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="experience-body">
                    <h2 className="experience-title">{exp.title}</h2>
                    <p className="experience-desc">{exp.description}</p>

                    <div className="experience-meta">
                      <div className="meta-item">
                        <Clock size={13} aria-hidden="true" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="meta-item">
                        <Gauge size={13} aria-hidden="true" />
                        <span>{exp.difficulty}</span>
                      </div>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How to Book */}
      <section className="section-padding bg-navy">
        <FadeIn className="container-resort exp-booking">
          <div className="exp-booking-text">
            <h2 className="text-h2 exp-booking-title">Ready to Experience Malpe?</h2>
            <p className="exp-booking-desc">
              All experiences are available exclusively for resort guests.
              Contact our concierge team to arrange your itinerary.
            </p>
          </div>
          <a href="/contact" className="btn btn-primary">Book Your Stay First</a>
        </FadeIn>
      </section>

      
    </>
  );
}
