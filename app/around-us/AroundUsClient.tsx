"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { aroundUsPlaces } from "@/lib/data/aroundUs";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerReveal";
import { MapPin, Clock, Tag, ArrowRight } from "lucide-react";

const categoryColors: Record<string, string> = {
  Beach: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)",
  Heritage: "linear-gradient(135deg, #b09257 0%, var(--color-secondary) 100%)",
  Spirituality: "linear-gradient(135deg, #0d9488 0%, #115e59 100%)",
  Nature: "linear-gradient(135deg, #15803d 0%, #166534 100%)",
  Food: "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
  Culture: "linear-gradient(135deg, #991b1b 0%, #7f1d1d 100%)",
};

const categories = ["Beach", "Heritage", "Spirituality", "Nature"] as const;

export default function AroundUsClient() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>("Beach");

  useEffect(() => {
    if (categoryParam && categories.includes(categoryParam as any)) {
      setActiveCategory(categoryParam as typeof categories[number]);
    }
  }, [categoryParam]);

  const filteredPlaces = aroundUsPlaces.filter((place) => place.category === activeCategory);

  return (
    <>
      <div className="around-tabs-container">
        <div className="around-tabs-scroll" role="tablist" aria-label="Explore categories">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              aria-controls={`panel-${cat.toLowerCase()}`}
              id={`tab-${cat.toLowerCase()}`}
              onClick={() => setActiveCategory(cat)}
              className={`around-tab-btn ${activeCategory === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div 
        id={`panel-${activeCategory.toLowerCase()}`} 
        role="tabpanel" 
        aria-labelledby={`tab-${activeCategory.toLowerCase()}`}
      >
        <StaggerContainer key={activeCategory} className="around-grid">
          {filteredPlaces.map((place) => (
            <StaggerItem key={place.id}>
              <article id={place.id} className="around-card card-resort" aria-label={place.name}>
                 <div
                  className="around-visual"
                  style={{ background: !place.image ? (categoryColors[place.category] ?? categoryColors.Beach) : undefined }}
                  aria-hidden="true"
                >
                  {place.image && (
                    <Image
                      src={place.image}
                      alt={place.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{
                        objectFit: "cover",
                        objectPosition:
                          place.id === "kapu-beach"
                            ? "center 20%"
                            : place.id === "malpe-fishing-harbour"
                            ? "center bottom"
                            : place.id === "attur-church"
                            ? "center 30%"
                            : "center",
                        zIndex: 0
                      }}
                    />
                  )}
                  {(place.distance || place.travelTime) && (
                    <div className="around-travel-badge" style={{ position: "relative", zIndex: 1 }}>
                      {place.distance && (
                        <>
                          <MapPin size={11} aria-hidden="true" />
                          {place.distance}
                        </>
                      )}
                      {place.distance && place.travelTime && (
                        <span className="travel-sep" aria-hidden="true">·</span>
                      )}
                      {place.travelTime && (
                        <>
                          <Clock size={11} aria-hidden="true" />
                          {place.travelTime}
                        </>
                      )}
                    </div>
                  )}
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

                  <div className="around-actions">
                    <Link href={`/around-us/${place.id}`} className="btn-explore-around">
                      Explore Details <ArrowRight size={12} style={{ marginLeft: "6px" }} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <style>{`
        .around-tabs-container {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
          border-bottom: 1px solid rgba(13, 27, 42, 0.08);
          padding-bottom: 0.75rem;
        }

        .around-tabs-scroll {
          display: flex;
          gap: 0.5rem;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding: 0.25rem;
          max-width: 100%;
        }

        .around-tabs-scroll::-webkit-scrollbar {
          display: none;
        }

        .around-tab-btn {
          padding: 0.55rem 1.35rem;
          background: transparent;
          border: 1px solid transparent;
          color: rgba(13, 27, 42, 0.6);
          font-family: var(--font-sans);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 99px;
          transition: all var(--transition-base);
          white-space: nowrap;
        }

        .around-tab-btn:hover {
          color: var(--color-navy);
          background: rgba(13, 27, 42, 0.03);
        }

        .around-tab-btn.active {
          background: var(--color-navy);
          border-color: var(--color-navy);
          color: var(--color-white);
          box-shadow: 0 4px 10px rgba(13, 27, 42, 0.12);
        }

        .around-actions {
          margin-top: 1rem;
          display: flex;
        }

        .btn-explore-around {
          display: inline-flex;
          align-items: center;
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-navy);
          text-decoration: none;
          border-bottom: 1.5px solid rgba(13, 27, 42, 0.15);
          padding-bottom: 3px;
          transition: all var(--transition-smooth);
        }

        .btn-explore-around:hover {
          color: var(--color-gold);
          border-color: var(--color-gold);
          transform: translateX(3px);
        }

        @media (max-width: 768px) {
          .around-tabs-container {
            justify-content: flex-start;
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </>
  );
}
