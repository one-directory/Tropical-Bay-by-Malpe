"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, BedDouble, Users, Waves, ArrowRight } from "lucide-react";
import { rooms } from "@/lib/data/rooms";
import FadeIn from "@/components/animations/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerReveal";

/* ── Card ─────────────────────────────────────────────────────── */
function SuiteCard({
  room,
  priority = false,
}: {
  room: (typeof rooms)[0];
  priority?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="sc"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={room.name}
    >
      {/* Full-bleed image */}
      <a href={`/rooms/${room.slug}`} className="sc-image-link" tabIndex={-1} aria-hidden>
        <div className="sc-image-wrap">
          <Image
            src={room.images[0]}
            alt={room.name}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            className={`sc-image ${hovered ? "sc-image--zoom" : ""}`}
            priority={priority}
          />

          {/* Cinematic gradient */}
          <div className="sc-overlay" />

          {/* Top badges */}
          <div className="sc-top-row">
            <span className="sc-badge">
              <Waves size={8} strokeWidth={2.5} />
              Riverside
            </span>
            <span className="sc-price">
              ₹{room.pricePerNight.toLocaleString("en-IN")}
              <span className="sc-price-unit"> / night</span>
            </span>
          </div>

          {/* Bottom content — always visible */}
          <div className="sc-bottom">

            <h3 className="sc-name">{room.name}</h3>

            {/* Specs row — always visible */}
            <div className="sc-specs">
              <span className="sc-spec"><Maximize2 size={10} /> {room.size}</span>
              <span className="sc-sep" />
              <span className="sc-spec"><BedDouble size={10} /> {room.beds}</span>
              <span className="sc-sep" />
              <span className="sc-spec"><Users size={10} /> Up to {room.occupancy}</span>
            </div>
          </div>
        </div>
      </a>

      {/* Below-image strip */}
      <div className="sc-strip">
        <p className="sc-tagline">{room.tagline}</p>
        <a href={`/rooms/${room.slug}`} className="sc-cta">
          Explore <ArrowRight size={13} />
        </a>
      </div>
    </article>
  );
}

/* ── Section ──────────────────────────────────────────────────── */
export default function FeaturedRooms() {
  const allRooms = rooms.slice(0, 6);

  return (
    <section className="fr2-section" aria-labelledby="suites-heading">

      {/* ── Header ─────────────────────────────────────────── */}
      <FadeIn>
        <div className="container-resort" style={{ marginBottom: "clamp(2.5rem, 4vw, 3.5rem)" }}>
          <SectionHeading
            overline="Accommodations"
            title="Our Riverside Suites"
            subtitle="Handcrafted stays — from cozy cottages to spacious family suites."
            align="center"
            id="suites-heading"
          />
        </div>
      </FadeIn>

      {/* ── 3 × 2 grid ─────────────────────────────────────── */}
      <StaggerContainer className="fr2-grid container-resort">
        {allRooms.map((room, i) => (
          <StaggerItem key={room.id}>
            <SuiteCard room={room} priority={i < 3} />
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* ── Decorative brass rule ───────────────────────────── */}
      <div className="fr2-foot-rule" aria-hidden="true">
        <span className="fr2-foot-line" />
        <span className="fr2-foot-diamond" />
        <span className="fr2-foot-line" />
      </div>

      <style>{`
        /* ══════════════════════════════════════════════
           SECTION SHELL
           ══════════════════════════════════════════════ */
        .fr2-section {
          background: var(--color-background);
          padding-block: var(--section-y);
          position: relative;
          overflow: hidden;
        }

        /* Subtle brass top rule */
        .fr2-section::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: clamp(60px, 10vw, 120px);
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--color-secondary), transparent);
        }

        /* ══════════════════════════════════════════════
           HEADER
           ══════════════════════════════════════════════ */
        .fr2-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.75rem;
          margin-bottom: clamp(2.5rem, 4vw, 3.5rem);
        }

        .fr2-title {
          font-family: var(--font-serif);
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 500;
          line-height: 1.15;
          letter-spacing: -0.01em;
          color: var(--color-primary);
          margin: 0;
        }

        .fr2-tagline {
          font-family: var(--font-sans);
          font-size: clamp(0.82rem, 1.1vw, 0.9rem);
          color: rgba(22, 38, 43, 0.5);
          line-height: 1.7;
          margin: 0;
          max-width: 480px;
        }

        /* ══════════════════════════════════════════════
           3 × 2 GRID
           ══════════════════════════════════════════════ */
        .fr2-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        /* ══════════════════════════════════════════════
           SUITE CARD
           ══════════════════════════════════════════════ */
        .sc {
          display: flex;
          flex-direction: column;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid rgba(169, 129, 75, 0.15);
          background: var(--color-white);
          box-shadow: 0 2px 20px rgba(22, 38, 43, 0.07);
          transition: border-color 400ms ease, box-shadow 400ms ease, transform 400ms ease;
          height: 100%;
        }

        .sc:hover {
          border-color: rgba(169, 129, 75, 0.35);
          box-shadow: 0 20px 50px rgba(22, 38, 43, 0.14);
          transform: translateY(-5px);
        }

        /* Image link fills card */
        .sc-image-link { display: block; }

        .sc-image-wrap {
          position: relative;
          height: 260px;
          overflow: hidden;
          width: 100%;
        }

        .sc-image {
          object-fit: cover;
          transition: transform 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .sc-image--zoom { transform: scale(1.07); }

        /* Cinematic overlay */
        .sc-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            165deg,
            rgba(22, 38, 43, 0.15) 0%,
            transparent 35%,
            rgba(22, 38, 43, 0.1) 60%,
            rgba(10, 18, 20, 0.82) 100%
          );
          z-index: 1;
        }

        /* Top row: badge + price */
        .sc-top-row {
          position: absolute;
          top: 0; left: 0; right: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.1rem;
          z-index: 2;
        }

        .sc-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-family: var(--font-sans);
          font-size: 0.58rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--color-secondary);
          background: rgba(22, 38, 43, 0.65);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(169, 129, 75, 0.25);
          padding: 0.3rem 0.7rem;
          border-radius: 2px;
        }

        .sc-price {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--color-background);
          background: rgba(169, 129, 75, 0.88);
          backdrop-filter: blur(6px);
          padding: 0.25rem 0.75rem;
          border-radius: 2px;
          line-height: 1.2;
        }

        .sc-price-unit {
          font-family: var(--font-sans);
          font-size: 0.58rem;
          font-weight: 500;
          opacity: 0.8;
          margin-left: 0.1rem;
        }

        /* Bottom content block */
        .sc-bottom {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 1.1rem 1.2rem;
          z-index: 2;
        }

        .sc-view-label {
          font-family: var(--font-sans);
          font-size: 0.58rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--color-secondary);
          margin: 0 0 0.35rem;
          opacity: 0.9;
        }

        .sc-name {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          font-weight: 500;
          color: var(--color-background);
          margin: 0;
          line-height: 1.15;
          letter-spacing: -0.01em;
        }

        /* Specs row */
        .sc-specs {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.6rem;
          opacity: 1;
        }

        .sc-spec {
          display: inline-flex;
          align-items: center;
          gap: 0.28rem;
          font-family: var(--font-sans);
          font-size: 0.65rem;
          font-weight: 500;
          color: rgba(251, 248, 242, 0.85);
          letter-spacing: 0.03em;
        }

        .sc-sep {
          width: 1px;
          height: 0.65rem;
          background: rgba(251, 248, 242, 0.25);
          flex-shrink: 0;
        }

        /* Below-image strip */
        .sc-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.875rem 1.2rem;
          border-top: 1px solid rgba(169, 129, 75, 0.12);
          background: var(--color-white);
        }

        .sc-tagline {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          line-height: 1.5;
          color: rgba(22, 38, 43, 0.48);
          margin: 0;
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          min-width: 0;
        }

        .sc-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-family: var(--font-sans);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-primary);
          white-space: nowrap;
          transition: gap 260ms ease, color 260ms ease;
          flex-shrink: 0;
        }

        .sc-cta:hover { gap: 0.55rem; color: var(--color-secondary); }
        .sc-cta svg { transition: transform 260ms ease; }
        .sc-cta:hover svg { transform: translateX(2px); }

        /* ══════════════════════════════════════════════
           FOOTER RULE
           ══════════════════════════════════════════════ */
        .fr2-foot-rule {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-top: clamp(3rem, 5vw, 4.5rem);
          padding-inline: clamp(1.25rem, 5vw, 5rem);
        }

        .fr2-foot-line {
          flex: 1;
          max-width: 200px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(169, 129, 75, 0.4), transparent);
        }

        .fr2-foot-diamond {
          width: 6px;
          height: 6px;
          background: var(--color-secondary);
          transform: rotate(45deg);
          flex-shrink: 0;
          opacity: 0.7;
        }

        /* ══════════════════════════════════════════════
           RESPONSIVE
           ══════════════════════════════════════════════ */
        @media (max-width: 900px) {
          .fr2-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .sc-strip {
            flex-direction: column;
            align-items: stretch;
            gap: 0.65rem;
            padding: 0.875rem 1.1rem;
          }

          .sc-tagline {
            white-space: normal;
            overflow: visible;
            text-overflow: clip;
            width: 100%;
            min-width: 0;
            flex: none;
          }

          .sc-cta {
            align-self: flex-start;
            width: 100%;
            justify-content: space-between;
            padding-top: 0.5rem;
            border-top: 1px solid rgba(169, 129, 75, 0.08);
          }
        }

        @media (max-width: 720px) {
          .fr2-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .fr2-header-right { max-width: 100%; }
          .fr2-title { font-size: clamp(2.2rem, 8vw, 3rem); }
        }

        @media (max-width: 560px) {
          .fr2-grid { grid-template-columns: 1fr; }

          /* Shrink image height slightly on single-column */
          .sc-image-wrap { height: 220px; }

          /* Shrink price badge so it doesn't overflow the card edge */
          .sc-price {
            font-size: 0.95rem;
            padding: 0.2rem 0.55rem;
          }

          /* Allow specs to wrap on narrow cards */
          .sc-specs {
            flex-wrap: wrap;
            gap: 0.35rem;
          }

          /* Strip padding and tagline size adjustments */
          .sc-strip {
            padding: 0.75rem 1rem;
          }

          .sc-tagline {
            font-size: 0.72rem;
          }
        }

        @media (max-width: 420px) {
          .sc-price {
            font-size: 0.82rem;
            padding: 0.18rem 0.45rem;
          }

          .sc-price-unit {
            display: none;
          }

          .sc-name {
            font-size: 1.2rem;
          }

          .sc-image-wrap { height: 200px; }
        }
      `}</style>

    </section>
  );
}
