"use client";

import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";

/* ─── Photo strips ─────────────────────────────────────────────────────── */
const ROW_1 = [
  { src: "/images/small ac room/small ac main.webp",  alt: "Small AC Room" },
  { src: "/images/gulum/gulum main.webp",              alt: "Gulum Cottage" },
  { src: "/images/large ac room/large ac main.webp",   alt: "Large AC Room" },
  { src: "/images/gallery/gallery 1.webp",             alt: "Tropical Bay" },
  { src: "/images/dorm/dorm main.webp",                alt: "Riverside Dorm" },
  { src: "/images/small ac room/small ac 3.webp",      alt: "Small AC Room interior" },
  { src: "/images/gulum/gulum 1.webp",                 alt: "Gulum garden" },
  { src: "/images/large ac room/large ac 3.webp",      alt: "Large AC Room detail" },
];

const ROW_2 = [
  { src: "/images/large ac room/large ac 2.webp",      alt: "Large AC Room view" },
  { src: "/images/gulum/gulum 5.webp",                 alt: "Gulum riverside" },
  { src: "/images/dorm/dorm 2.webp",                   alt: "Dormitory beds" },
  { src: "/images/gallery/gallery 2.webp",             alt: "Resort ambience" },
  { src: "/images/small ac room/small ac 4.webp",      alt: "Small AC Room window" },
  { src: "/images/gulum/gulum 7.webp",                 alt: "Gulum porch" },
  { src: "/images/large ac room/large ac 5.webp",      alt: "Large AC balcony" },
  { src: "/images/dorm/dorm 5.webp",                   alt: "Dorm outdoor deck" },
];

/* Duplicate for seamless loop */
const track1 = [...ROW_1, ...ROW_1];
const track2 = [...ROW_2, ...ROW_2];

function MarqueeTrack({ images, reverse = false }: { images: { src: string; alt: string }[]; reverse?: boolean }) {
  return (
    <div
      className="gp-track"
      style={{ animationDirection: reverse ? "reverse" : "normal" }}
    >
      {images.map((img, i) => (
        <div key={`${img.src}-${i}`} className="gp-tile">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            loading="lazy"
            sizes="(max-width: 480px) 165px, (max-width: 600px) 220px, 300px"
            style={{ objectFit: "cover" }}
          />
          {/* Subtle hover sheen */}
          <div className="gp-tile-sheen" aria-hidden="true" />
        </div>
      ))}
    </div>
  );
}

export default function GalleryPreview() {
  return (
    <section className="gp-section" aria-labelledby="gp-heading">

      {/* ── Header ───────────────────────────────────────────── */}
      <FadeIn>
        <div className="container-resort" style={{ marginBottom: "clamp(3rem, 5vw, 4.5rem)" }}>
          <SectionHeading
            overline="Photo Gallery"
            title="Life at Tropical Bay"
            subtitle="Glimpses of our riverside rooms, open-air spaces, and the natural beauty that surrounds every stay."
            align="center"
            id="gp-heading"
          />
        </div>
      </FadeIn>

      {/* ── Dual marquee rows ────────────────────────────────── */}
      <div className="gp-rows">
        <div className="gp-row-wrap">
          <MarqueeTrack images={track1} />
        </div>
        <div className="gp-row-wrap">
          <MarqueeTrack images={track2} reverse />
        </div>
      </div>

      <style>{`
        /* ── Section ────────────────────────────────────────── */
        .gp-section {
          background: var(--color-background);
          padding-block: var(--section-y);
          overflow: hidden;
          position: relative;
        }

        /* Top brass hairline — same pattern as other sections */
        .gp-section::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: clamp(60px, 10vw, 120px);
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--color-secondary), transparent);
        }

        /* ── Header ─────────────────────────────────────────── */
        .gp-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.75rem;
          padding-inline: 1.5rem;
          margin-bottom: clamp(2.5rem, 4vw, 3.5rem);
        }

        /* Brass decorative rule */
        .gp-rule {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }
        .gp-rule-line {
          width: 48px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--color-secondary));
        }
        .gp-rule-line:last-child {
          background: linear-gradient(90deg, var(--color-secondary), transparent);
        }
        .gp-rule-diamond {
          width: 6px;
          height: 6px;
          background: var(--color-secondary);
          transform: rotate(45deg);
          flex-shrink: 0;
        }

        .gp-overline {
          color: var(--color-secondary);
          letter-spacing: 0.22em;
          font-size: 0.65rem;
        }

        .gp-title {
          font-family: var(--font-serif);
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 500;
          color: var(--color-primary);
          margin: 0;
          line-height: 1.1;
          letter-spacing: -0.01em;
        }

        .gp-subtitle {
          font-family: var(--font-sans);
          font-size: clamp(0.82rem, 1.1vw, 0.9rem);
          color: var(--color-text-muted);
          line-height: 1.7;
          max-width: 520px;
          margin: 0;
        }

        /* ── Photo rows ──────────────────────────────────────── */
        .gp-rows {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: clamp(2.5rem, 4vw, 3.5rem);
        }

        .gp-row-wrap {
          overflow: hidden;
          /* Fade out edges using the site's ivory background */
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            var(--color-background) 6%,
            var(--color-background) 94%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            var(--color-background) 6%,
            var(--color-background) 94%,
            transparent 100%
          );
        }

        /* Scrolling track */
        .gp-track {
          display: flex;
          gap: 0.75rem;
          flex-shrink: 0;
          animation: gp-scroll 38s linear infinite;
        }

        /* Promote to GPU layer only while visible/animating */
        @media (prefers-reduced-motion: no-preference) {
          .gp-track {
            will-change: transform;
          }
        }

        /* Pause on hover */
        .gp-row-wrap:hover .gp-track {
          animation-play-state: paused;
        }

        /* Photo tile */
        .gp-tile {
          position: relative;
          width: 300px;
          height: 210px;
          flex-shrink: 0;
          border-radius: 4px;
          overflow: hidden;
          border: 1px solid rgba(169, 129, 75, 0.15);
          box-shadow: 0 2px 16px rgba(22, 38, 43, 0.06);
        }

        /* Hover sheen overlay */
        .gp-tile-sheen {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(169, 129, 75, 0.08) 0%,
            transparent 60%
          );
          opacity: 0;
          transition: opacity 400ms ease;
        }
        .gp-tile:hover .gp-tile-sheen { opacity: 1; }
        .gp-tile:hover img { transform: scale(1.04); transition: transform 600ms ease; }

        /* Scroll keyframes */
        @keyframes gp-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        /* ── Footer CTA ──────────────────────────────────────── */
        .gp-footer {
          display: flex;
          justify-content: center;
        }

        /* ── Responsive ──────────────────────────────────────── */
        @media (max-width: 600px) {
          .gp-tile {
            width: 220px;
            height: 155px;
          }
        }

        @media (max-width: 480px) {
          .gp-tile {
            width: 165px;
            height: 118px;
          }
          .gp-rows {
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
}
