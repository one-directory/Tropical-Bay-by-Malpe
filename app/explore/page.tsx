import type { Metadata } from "next";
import { exploreItems } from "@/lib/data/experiences";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerReveal";
import { MapPin } from "lucide-react";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Explore",
  description: "Your insider travel guide to the Malpe coast — hidden gems, local restaurants, photography spots, markets, and authentic local food experiences near Tropical Bay by Malpe.",
  alternates: { canonical: `${siteConfig.url}/explore` },
  openGraph: {
    title: "Explore | Tropical Bay by Malpe",
    description: "The insider's guide to Malpe — beyond the tourist trail.",
    url: `${siteConfig.url}/explore`,
  },
};

const categoryLabels: Record<string, string> = {
  restaurant: "Restaurant",
  "hidden-gem": "Hidden Gem",
  photography: "Photography",
  shopping: "Shopping",
  "local-food": "Local Food",
};

const categoryColors: Record<string, string> = {
  restaurant: "linear-gradient(135deg, #b09257 0%, var(--color-secondary) 100%)",
  "hidden-gem": "linear-gradient(135deg, var(--color-accent) 0%, #4d9386 100%)",
  photography: "linear-gradient(135deg, var(--color-primary) 0%, #28506A 100%)",
  shopping: "linear-gradient(135deg, var(--color-secondary) 0%, var(--color-background) 100%)",
  "local-food": "linear-gradient(135deg, #2c5c53 0%, var(--color-accent) 100%)",
};

const filters = ["All", "restaurant", "hidden-gem", "photography", "shopping", "local-food"];

export default function ExplorePage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero explore-hero">
        <div className="page-hero-overlay" aria-hidden="true" />
        <FadeIn className="container-resort page-hero-content">
          <span className="text-overline page-hero-overline">The Local Guide</span>
          <h1 className="text-h1 page-hero-title">Explore Like a Local</h1>
          <p className="page-hero-desc">
            Our team has spent years discovering the Malpe coast. These are the places
            we take our friends — the hidden gems, the best plates, the perfect frames.
            This is the guide we wish we'd had.
          </p>
        </FadeIn>
      </section>

      {/* Explore Grid */}
      <section className="section-padding-lg bg-off-white" aria-labelledby="explore-heading">
        <div className="container-resort">
          <FadeIn>
            <SectionHeading
              overline="Local Recommendations"
              title="Off the Beaten Shore"
              subtitle="Eight handpicked experiences, places, and discoveries — each one a piece of what makes the Malpe coast unforgettable."
              id="explore-heading"
            />
          </FadeIn>

          {/* Category Legend */}
          <FadeIn delay={0.1}>
            <div className="explore-legend" aria-label="Category legend">
              {filters.slice(1).map((cat) => (
                <div key={cat} className="legend-item">
                  <span
                    className="legend-dot"
                    style={{ background: categoryColors[cat]?.split("100%")[0].split(", ").pop()?.split(" ")[0] ?? "#c9a84c" }}
                    aria-hidden="true"
                  />
                  {categoryLabels[cat]}
                </div>
              ))}
            </div>
          </FadeIn>

          <StaggerContainer className="explore-grid">
            {exploreItems.map((item) => (
              <StaggerItem key={item.id}>
                <article className="explore-card card-resort" aria-label={item.title}>
                  <div
                    className="explore-visual"
                    style={{ background: categoryColors[item.category] }}
                    aria-hidden="true"
                  >
                    <span className="explore-cat-badge">{categoryLabels[item.category]}</span>
                  </div>
                  <div className="explore-body">
                    <h2 className="explore-title">{item.title}</h2>
                    <p className="explore-desc">{item.description}</p>
                    <div className="explore-footer">
                      {item.distance && (
                        <span className="explore-distance">
                          <MapPin size={12} aria-hidden="true" />
                          {item.distance}
                        </span>
                      )}
                      <div className="explore-tags">
                        {item.tags.map((tag) => (
                          <span key={tag} className="explore-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      
    </>
  );
}
