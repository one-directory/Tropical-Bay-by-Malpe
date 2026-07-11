import Image from "next/image";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerReveal";
import { aroundUsPlaces } from "@/lib/data/aroundUs";

const categoryColors: Record<string, string> = {
  "Beach": "rgba(30, 144, 255, 0.12)",
  "Heritage": "rgba(169, 129, 75, 0.15)",
  "Nature": "rgba(34, 139, 34, 0.12)",
  "Spirituality": "rgba(128, 0, 128, 0.1)"
};

const categoryText: Record<string, string> = {
  "Beach": "#0a5fa8",
  "Heritage": "#8a5e1e",
  "Nature": "#1a6b1a",
  "Spirituality": "#6a006a"
};

export default function NearbyPlaces() {
  const selectedIds = [
    "st-marys-island",
    "malpe-beach",
    "sri-krishna-temple",
    "kapu-beach",
    "hanging-bridge",
    "hasta-shilpa"
  ];

  const randomPlaces = aroundUsPlaces
    .filter((item) => selectedIds.includes(item.id))
    .sort((a, b) => selectedIds.indexOf(a.id) - selectedIds.indexOf(b.id));

  return (
    <section className="np-section" aria-labelledby="nearby-heading">

      {/* ── Header ───────────────────────────────────── */}
      <FadeIn>
        <div className="container-resort" style={{ marginBottom: "clamp(3rem, 5vw, 4.5rem)" }}>
          <SectionHeading
            overline="Local Attractions"
            title="Explore Around Us"
            subtitle="Discover the rich heritage, golden beaches, and sacred temples that make Udupi one of Karnataka's most legendary coastal destinations."
            align="center"
            id="nearby-heading"
          />
        </div>
      </FadeIn>

      {/* ── Cards grid ───────────────────────────────── */}
      <StaggerContainer className="np-grid container-resort">
        {randomPlaces.map((place) => (
          <StaggerItem key={place.id}>
            <article className="np-card">
              {/* Image */}
              <a href={`/around-us/${place.id}`} className="np-image-link" tabIndex={-1} aria-hidden>
                <div className="np-image-wrap">
                  {place.image && (
                    <Image
                      src={place.image}
                      alt={place.name}
                      fill
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                      className="np-image"
                      style={{
                        objectPosition:
                          place.id === "kapu-beach"
                            ? "center 20%"
                            : place.id === "malpe-fishing-harbour"
                            ? "center bottom"
                            : place.id === "attur-church"
                            ? "center 30%"
                            : "center"
                      }}
                    />
                  )}
                  <div className="np-image-overlay" />

                  {/* Travel / Distance badge */}
                  {(place.travelTime || place.distance) && (
                    <div className="np-distance-badge">
                      <Clock size={10} strokeWidth={2.5} />
                      {place.travelTime || place.distance}
                    </div>
                  )}
                </div>
              </a>

              {/* Body */}
              <div className="np-body">
                <div className="np-body-top">
                  <span
                    className="np-type"
                    style={{
                      background: categoryColors[place.category] || categoryColors.Beach,
                      color: categoryText[place.category] || categoryText.Beach,
                    }}
                  >
                    <MapPin size={9} strokeWidth={2.5} />
                    {place.category}
                  </span>
                </div>

                <h3 className="np-name">{place.name}</h3>
                <p className="np-tagline">{place.highlights[0] || "Explore local attraction"}</p>
                <p className="np-desc">{place.description}</p>

                <a href={`/around-us/${place.id}`} className="np-cta">
                  Explore <ArrowRight size={13} />
                </a>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* ── Footer CTA ───────────────────────────────── */}
      <FadeIn>
        <div className="np-footer container-resort">
          <div className="np-footer-inner">
            <p className="np-footer-text">
              Want a curated day-trip guide? Our concierge can plan the perfect itinerary for you.
            </p>
            <a href="/around-us" className="np-footer-btn btn btn-secondary">
              Explore Around Us <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </FadeIn>

      <style>{`
        /* ─── Section ────────────────────────────────── */
        .np-section {
          background: var(--color-surface);
          padding-block: var(--section-y);
          position: relative;
        }

        .np-section::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: clamp(60px, 10vw, 120px);
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--color-secondary), transparent);
        }

        /* ─── Header ─────────────────────────────────── */
        .np-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1rem;
          margin-bottom: clamp(3rem, 5vw, 4.5rem);
        }

        .np-overline {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          font-family: var(--font-sans);
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--color-secondary);
        }

        .np-overline-line {
          display: block;
          width: 1.75rem;
          height: 1px;
          background: var(--color-secondary);
          flex-shrink: 0;
        }

        .np-title {
          font-family: var(--font-serif);
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 400;
          line-height: 1.15;
          letter-spacing: -0.015em;
          color: var(--color-primary);
          margin: 0;
        }

        .np-title em {
          font-style: italic;
          color: var(--color-secondary);
        }

        .np-subtitle {
          font-family: var(--font-sans);
          font-size: clamp(0.82rem, 1.1vw, 0.92rem);
          color: rgba(22, 38, 43, 0.5);
          line-height: 1.8;
          margin: 0;
          max-width: 580px;
        }

        /* ─── Grid ───────────────────────────────────── */
        .np-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: clamp(3rem, 5vw, 4rem);
        }

        /* ─── Card ───────────────────────────────────── */
        .np-card {
          display: flex;
          flex-direction: column;
          background: var(--color-white);
          border: 1px solid rgba(169, 129, 75, 0.13);
          border-radius: 10px;
          overflow: hidden;
          transition: transform 420ms ease, box-shadow 420ms ease, border-color 420ms ease;
          height: 100%;
        }

        .np-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(22, 38, 43, 0.12);
          border-color: rgba(169, 129, 75, 0.3);
        }

        /* Image */
        .np-image-link { display: block; }

        .np-image-wrap {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .np-image {
          object-fit: cover;
          transition: transform 650ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .np-card:hover .np-image { transform: scale(1.06); }

        .np-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 50%,
            rgba(22, 38, 43, 0.45) 100%
          );
        }

        /* Distance badge */
        .np-distance-badge {
          position: absolute;
          bottom: 0.75rem;
          right: 0.85rem;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-family: var(--font-sans);
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--color-background);
          background: rgba(22, 38, 43, 0.7);
          backdrop-filter: blur(6px);
          padding: 0.28rem 0.65rem;
          border-radius: 2px;
        }

        /* Body */
        .np-body {
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
          padding: 1.25rem 1.35rem 1.4rem;
          flex: 1;
        }

        .np-body-top { display: flex; align-items: center; }

        /* Type tag */
        .np-type {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-family: var(--font-sans);
          font-size: 0.58rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 0.25rem 0.65rem;
          border-radius: 2px;
        }

        .np-name {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--color-primary);
          margin: 0;
          line-height: 1.2;
          letter-spacing: -0.01em;
        }

        .np-tagline {
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: var(--color-secondary);
          margin: 0;
          font-style: italic;
        }

        .np-desc {
          font-family: var(--font-sans);
          font-size: 0.78rem;
          line-height: 1.7;
          color: rgba(22, 38, 43, 0.52);
          margin: 0;
          flex: 1;
        }

        .np-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-sans);
          font-size: 0.67rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-primary);
          margin-top: 0.35rem;
          padding-top: 0.75rem;
          border-top: 1px solid rgba(169, 129, 75, 0.12);
          transition: color 260ms ease, gap 260ms ease;
        }

        .np-cta:hover { color: var(--color-secondary); gap: 0.6rem; }
        .np-cta svg { transition: transform 260ms ease; flex-shrink: 0; }
        .np-cta:hover svg { transform: translateX(3px); }

        /* ─── Footer CTA ─────────────────────────────── */
        .np-footer { margin-top: clamp(1rem, 2vw, 1.5rem); }

        .np-footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          padding: 1.5rem 2rem;
          background: var(--color-surface);
          border: 1px solid rgba(169, 129, 75, 0.15);
          border-radius: 8px;
          flex-wrap: wrap;
        }

        .np-footer-text {
          font-family: var(--font-sans);
          font-size: 0.88rem;
          color: rgba(22, 38, 43, 0.6);
          margin: 0;
          line-height: 1.6;
        }

        .np-footer-btn {
          flex-shrink: 0;
          font-size: 0.72rem !important;
          padding: 0.7rem 1.5rem !important;
        }

        /* ─── Responsive ─────────────────────────────── */
        @media (max-width: 1024px) {
          .np-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 600px) {
          .np-grid { grid-template-columns: 1fr; }
          .np-footer-inner { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </section>
  );
}
