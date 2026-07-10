import type { Metadata } from "next";

export const dynamic = 'force-dynamic';
import { attractions } from "@/lib/data/experiences";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerReveal";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Attractions",
  description: "Top attractions near Tropical Bay by Malpe — Malpe Beach, St. Mary's Island, Sea Walk, Malpe Fishing Harbour, Udupi city, Kapu Beach Lighthouse, and Kollur Mookambika Temple.",
  alternates: { canonical: `${siteConfig.url}/attractions` },
  openGraph: {
    title: "Attractions | Tropical Bay by Malpe",
    description: "The most beautiful and storied destinations on the Karnataka coast, all within reach of your suite.",
    url: `${siteConfig.url}/attractions`,
  },
};

export default function AttractionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero attractions-hero">
        <div className="page-hero-overlay" aria-hidden="true" />
        <FadeIn className="container-resort page-hero-content">
          <span className="text-overline page-hero-overline">Destinations</span>
          <h1 className="text-h1 page-hero-title">Discover the Karnataka Coast</h1>
          <p className="page-hero-desc">
            From UNESCO geological wonders to ancient temples, from pristine beaches to bustling
            fishing harbours — the region around Malpe is one of India's most rewarding coastal destinations.
          </p>
        </FadeIn>
      </section>

      {/* Featured Attraction */}
      <section className="section-padding-lg bg-cream">
        <div className="container-resort">
          <FadeIn>
            <div className="featured-attraction">
              <div className="featured-visual" aria-hidden="true">
                <div className="featured-gradient" />
              </div>
              <div className="featured-content">
                <span className="text-overline featured-tag">Must Visit</span>
                <h2 className="text-h2 featured-name">Malpe Beach</h2>
                <p className="featured-desc">
                  The star of the Karnataka coast — Malpe Beach stretches for nearly 4 kilometres
                  of golden sand, lapped by the calm turquoise waters of the Arabian Sea.
                  It is at its most magical at dawn, when fishing boats return and the golden light
                  paints the shoreline in warm hues. From our resort, the beach is a 2-minute walk.
                </p>
                <div className="featured-meta">
                  <span className="featured-meta-item">
                    <MapPin size={14} aria-hidden="true" />
                    0.5 km from resort
                  </span>
                  <span className="featured-meta-item">
                    Category: Beach
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* All Attractions */}
      <section className="section-padding-lg bg-off-white" aria-labelledby="attractions-heading">
        <div className="container-resort">
          <FadeIn>
            <SectionHeading
              overline="All Destinations"
              title="Explore the Region"
              subtitle="Our concierge team can arrange transportation, guided tours, and activity bookings for every destination below."
              id="attractions-heading"
            />
          </FadeIn>

          <StaggerContainer className="attractions-list">
            {attractions.map((attr, i) => (
              <StaggerItem key={attr.id}>
                <div className={`attraction-row ${i % 2 === 1 ? "attraction-row-reverse" : ""}`}>
                  <div className="attraction-visual-wrap">
                    <div
                      className="attraction-visual"
                      style={{
                        background: `linear-gradient(${i % 2 === 0 ? "135deg" : "225deg"}, var(--color-ocean-deep) 0%, var(--color-${i % 3 === 0 ? "turquoise" : i % 3 === 1 ? "gold" : "palm"}) 100%)`,
                      }}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="attraction-content">
                    <div className="attraction-distance">
                      <MapPin size={13} aria-hidden="true" />
                      {attr.distance} · {attr.travelTime}
                    </div>
                    <h2 className="attraction-name text-h3">{attr.name}</h2>
                    <p className="attraction-desc">{attr.description}</p>
                    <div className="attraction-highlights">
                      {attr.highlights.map((h) => (
                        <span key={h} className="attraction-hl">{h}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy">
        <FadeIn className="container-resort attr-cta">
          <div>
            <h2 className="text-h2 attr-cta-title">Ready to Explore?</h2>
            <p className="attr-cta-desc">Book your stay and let our concierge design your perfect coastal itinerary.</p>
          </div>
          <div className="attr-cta-actions">
            <Link href="/contact" className="btn btn-primary">Reserve Now <ArrowRight size={14} /></Link>
            <Link href="/explore" className="btn btn-ghost">Local Guide</Link>
          </div>
        </FadeIn>
      </section>

      
    </>
  );
}
