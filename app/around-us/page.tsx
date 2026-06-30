import type { Metadata } from "next";
import { attractions } from "@/lib/data/experiences";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerReveal";
import { MapPin, Clock, Tag } from "lucide-react";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Around Us",
  description: "Discover what's nearby Tropical Bay by Malpe — Malpe Beach, St. Mary's Island, Udupi, Kapu Beach, and more. Distance cards with travel times.",
  alternates: { canonical: `${siteConfig.url}/around-us` },
  openGraph: {
    title: "Around Us | Tropical Bay by Malpe",
    description: "Everything close to your resort — beaches, heritage sites, temples, and the city of Udupi.",
    url: `${siteConfig.url}/around-us`,
  },
};

const categoryColors: Record<string, string> = {
  Beach: "linear-gradient(135deg, #0A2540 0%, #2F6F6D 100%)",
  Island: "linear-gradient(135deg, #0A2540 0%, #16375a 100%)",
  Activity: "linear-gradient(135deg, #2F6F6D 0%, #479694 100%)",
  Cultural: "linear-gradient(135deg, #C9A96E 0%, #A6803F 100%)",
  Heritage: "linear-gradient(135deg, #A6803F 0%, #C9A96E 100%)",
  Temple: "linear-gradient(135deg, #103635 0%, #2F6F6D 100%)",
};

export default function AroundUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero around-hero">
        <div className="page-hero-overlay" aria-hidden="true" />
        <FadeIn className="container-resort page-hero-content">
          <span className="text-overline page-hero-overline">Explore the Neighbourhood</span>
          <h1 className="text-h1 page-hero-title">The World Around Tropical Bay</h1>
          <p className="page-hero-desc">
            Beyond our gates lies one of India's most compelling coastal destinations.
            From the famous sands of Malpe Beach to the ancient temples of the Tulu Nadu
            hinterland — adventure is always close.
          </p>
        </FadeIn>
      </section>

      {/* Attractions */}
      <section className="section-padding-lg bg-off-white" aria-labelledby="around-heading">
        <div className="container-resort">
          <FadeIn>
            <SectionHeading
              overline="Nearby Places"
              title="What Awaits You"
              subtitle="Every destination below is within easy reach of the resort. Our concierge team can arrange transport, guided visits, and activity bookings for all of them."
              id="around-heading"
            />
          </FadeIn>

          <StaggerContainer className="around-grid">
            {attractions.map((place) => (
              <StaggerItem key={place.id}>
                <article className="around-card card-resort" aria-label={place.name}>
                  <div
                    className="around-visual"
                    style={{ background: categoryColors[place.category] ?? categoryColors.Beach }}
                    aria-hidden="true"
                  >
                    <span className="around-category-tag">{place.category}</span>
                    <div className="around-travel-badge">
                      <MapPin size={11} aria-hidden="true" />
                      {place.distance}
                      <span className="travel-sep" aria-hidden="true">·</span>
                      <Clock size={11} aria-hidden="true" />
                      {place.travelTime}
                    </div>
                  </div>

                  <div className="around-body">
                    <h2 className="around-name">{place.name}</h2>
                    <p className="around-desc">{place.description}</p>

                    <ul className="around-highlights" aria-label={`Highlights of ${place.name}`}>
                      {place.highlights.map((h) => (
                        <li key={h} className="around-highlight">
                          <Tag size={10} aria-hidden="true" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Map Embed */}
      <section className="section-padding bg-cream" aria-labelledby="map-heading">
        <div className="container-resort">
          <FadeIn>
            <SectionHeading
              overline="Find Us"
              title="We're Right Here"
              subtitle="Tropical Bay by Malpe is located near the St. Mary's Island Ferry Point, just minutes from Malpe Beach."
              id="map-heading"
            />
          </FadeIn>
          <FadeIn delay={0.2} className="map-wrapper">
            <iframe
              src={siteConfig.mapEmbedUrl}
              width="100%"
              height="480"
              style={{ border: 0, borderRadius: "4px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tropical Bay by Malpe — Map Location"
              aria-label="Google Maps showing Tropical Bay by Malpe location"
            />
          </FadeIn>
        </div>
      </section>

      
    </>
  );
}
