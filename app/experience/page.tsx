import type { Metadata } from "next";

export const dynamic = 'force-dynamic';
import { experiences } from "@/lib/data/experiences";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerReveal";
import { Clock, Gauge, Tag } from "lucide-react";

import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Experiences",
  description: "Discover immersive coastal experiences at Tropical Bay by Malpe — sunrise yoga, kayaking, bonfire evenings, boat rides to St. Mary's Island, seafood dining, and more.",
  alternates: { canonical: `${siteConfig.url}/experience` },
  openGraph: {
    title: "Experiences | Tropical Bay by Malpe",
    description: "Nine curated experiences celebrating the beauty and culture of the Malpe coast.",
    url: `${siteConfig.url}/experience`,
  },
};

export default function ExperiencePage() {
  return (
    <>
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
