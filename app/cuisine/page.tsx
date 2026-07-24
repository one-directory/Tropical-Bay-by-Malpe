import type { Metadata } from "next";
export const dynamic = 'force-dynamic';

import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerReveal";
import { Tag } from "lucide-react";
import { siteConfig } from "@/lib/data/site";
import { aroundUsPlaces } from "@/lib/data/aroundUs";

export const metadata: Metadata = {
  title: "Udupi Cuisine",
  description: "Explore the legendary flavours of Udupi and Tulu Nadu. Authentic Kori Rotti, Masala Dosa, Ghee Roast, Neer Dosa, and Mangalore Buns near Tropical Bay.",
  alternates: { canonical: `${siteConfig.url}/cuisine` },
  openGraph: {
    title: "Udupi Cuisine | Tropical Bay by Malpe",
    description: "Embark on a culinary journey through the authentic, legendary flavours of coastal Karnataka.",
    url: `${siteConfig.url}/cuisine`,
    images: [
      {
        url: "/images/food/food hero.webp",
        width: 1200,
        height: 630,
        alt: "Udupi Cuisine – Authentic Coastal Karnataka Food",
      },
    ],
  },
};

const foodGradients = [
  "linear-gradient(135deg, #d97706 0%, #16262B 100%)", // Amber/Gold
  "linear-gradient(135deg, #b45309 0%, #16262B 100%)", // Rich brown
  "linear-gradient(135deg, #7c2d12 0%, #16262B 100%)", // Terracotta
  "linear-gradient(135deg, #a16207 0%, #16262B 100%)", // Gold Ochre
];

export default function CuisinePage() {
  const preferredOrder = [
    "ghee-roast",
    "neer-dosa",
    "kori-rotti",
    "buns",
    "marwai-sukka",
    "masala-dosa",
    "patrode",
    "kori-sukka",
    "golibaje",
    "moode",
    "rice-balls"
  ];
  const foodItems = aroundUsPlaces
    .filter(item => item.category === "Food")
    .sort((a, b) => preferredOrder.indexOf(a.id) - preferredOrder.indexOf(b.id));

  return (
    <>
      {/* Hero */}
      <section className="cuisine-hero" aria-label="Authentic Udupi Cuisine Gallery Banner">
        <div className="cuisine-hero-image-wrapper">
          <Image
            src="/images/food/food hero.webp"
            alt="Authentic Udupi Cuisine Table Showcase"
            fill
            priority
            sizes="100vw"
            className="cuisine-hero-image"
          />
        </div>
        <div className="cuisine-hero-overlay" aria-hidden="true" />
        <FadeIn className="container-resort cuisine-hero-content">
          <span className="text-overline page-hero-overline">Tulu Nadu Culinary Legacy</span>
          <h1 className="text-h1 page-hero-title">Authentic Udupi Cuisine</h1>
          <p className="page-hero-desc">
            Udupi's spice legacy has earned a place of pride on the global culinary map. Born from fresh coconut palms, coastal spices, and local heritage — experience the authentic flavours of the Malpe coast.
          </p>
        </FadeIn>
      </section>

      {/* Dishes Listings */}
      <section className="section-padding-lg bg-off-white cuisine-listings" aria-label="Local dishes listings">
        <div className="container-resort">
          <StaggerContainer className="cuisine-grid-full">
            {foodItems.map((item, idx) => (
              <StaggerItem key={item.id}>
                <article className="cuisine-card-full card-resort" aria-label={item.name}>
                  <div className="cuisine-visual-full">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="cuisine-img-full"
                      />
                    ) : (
                      <div
                        className="cuisine-visual-fallback"
                        style={{ background: foodGradients[idx % foodGradients.length] }}
                      />
                    )}
                  </div>
                  <div className="cuisine-body-full">
                    <h2 className="cuisine-title-full">{item.name}</h2>
                    <p className="cuisine-desc-full">{item.description}</p>
                    <div className="cuisine-footer-full">
                      <div className="cuisine-tags-full">
                        {item.highlights.map((tag) => (
                          <span key={tag} className="cuisine-tag-full">
                            <Tag size={10} aria-hidden="true" style={{ marginRight: "4px" }} />
                            {tag}
                          </span>
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

      <style>{`
        /* Responsive Hero with aspect-ratio showcase */
        .cuisine-hero {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: var(--color-primary);
          min-height: 75vh;
          padding-top: 8rem;
          padding-bottom: 4rem;
        }

        @media (max-width: 767px) {
          .cuisine-hero {
            min-height: 55vh;
          }
        }

        @media (min-width: 768px) {
          .cuisine-hero {
            min-height: auto;
            aspect-ratio: 2816 / 1536;
            padding-top: 6rem;
            padding-bottom: 3rem;
          }
        }

        .cuisine-hero-image-wrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .cuisine-hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .cuisine-hero-overlay {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.015) 1px, transparent 0),
            linear-gradient(to bottom, rgba(22, 38, 43, 0.75) 0%, rgba(22, 38, 43, 0.5) 50%, rgba(22, 38, 43, 0.85) 100%);
          background-size: 36px 36px, 100% 100%;
          z-index: 2;
        }

        .cuisine-hero .cuisine-hero-content {
          position: relative !important;
          z-index: 5 !important;
          max-width: 720px;
          margin-top: auto;
          margin-bottom: auto;
        }

        .cuisine-hero .page-hero-overline {
          color: #F0D290 !important; /* Brighter gold/brass for better readability */
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.7);
          font-weight: 600;
        }

        .cuisine-hero .page-hero-title {
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
        }

        .cuisine-hero .page-hero-desc {
          color: rgba(255, 255, 255, 0.85) !important;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
        }

        .cuisine-listings {
          padding-top: clamp(2.5rem, 5vw, 4rem) !important;
        }

        .cuisine-grid-full {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 3.5rem;
        }

        @media (max-width: 1024px) {
          .cuisine-grid-full {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .cuisine-grid-full {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        .cuisine-card-full {
          display: flex;
          flex-direction: column;
          background: var(--color-white);
          border-radius: 4px;
          overflow: hidden;
          box-shadow: var(--shadow-luxury);
          transition: transform var(--transition-smooth), box-shadow var(--transition-smooth);
          height: 100%;
        }

        .cuisine-card-full:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-elevated);
        }

        .cuisine-visual-full {
          width: 100%;
          aspect-ratio: 16 / 10;
          position: relative;
          overflow: hidden;
        }

        .cuisine-img-full {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-smooth);
        }

        .cuisine-card-full:hover .cuisine-img-full {
          transform: scale(1.03);
        }

        .cuisine-visual-fallback {
          width: 100%;
          height: 100%;
        }

        .cuisine-body-full {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          flex: 1;
        }

        .cuisine-title-full {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--color-text-dark);
          margin: 0;
          text-align: left;
        }

        .cuisine-desc-full {
          font-size: 0.85rem;
          line-height: 1.7;
          color: rgba(30, 41, 59, 0.65);
          margin: 0;
          flex: 1;
        }

        .cuisine-footer-full {
          margin-top: auto;
        }

        .cuisine-tags-full {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          padding-top: 1.25rem;
          border-top: 1px solid rgba(13, 27, 42, 0.06);
        }

        .cuisine-tag-full {
          display: inline-flex;
          align-items: center;
          font-size: 0.7rem;
          font-weight: 500;
          color: var(--color-gold);
          background: rgba(201, 168, 76, 0.08);
          padding: 0.2rem 0.5rem;
          border-radius: 2px;
          letter-spacing: 0.02em;
        }
      `}</style>
    </>
  );
}
