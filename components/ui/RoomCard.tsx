import Image from "next/image";
import { ArrowRight, Maximize2, BedDouble, Users } from "lucide-react";
import type { Room } from "@/lib/types";

interface RoomCardProps {
  room: Room;
  priority?: boolean;
  featured?: boolean;
}

export default function RoomCard({ room, priority = false, featured = false }: RoomCardProps) {
  const firstImg = room.images[0];
  const coverSrc = typeof firstImg === "string" ? firstImg : firstImg.src;

  return (
    <article className={`rc ${featured ? "rc-featured" : ""}`} aria-label={room.name}>
      {/* Image block */}
      <a href={`/rooms/${room.slug}`} className="rc-image-link" tabIndex={-1} aria-hidden="true">
        <div className="rc-image-wrap">
          <Image
            src={coverSrc}
            alt={`${room.name} at Tropical Bay`}
            fill
            sizes={featured
              ? "(max-width: 768px) 100vw, 55vw"
              : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
            className="rc-image"
            priority={priority}
          />
          {/* Dark gradient for text legibility */}
          <div className="rc-gradient" aria-hidden="true" />

          {/* Top row: badge + price */}
          <div className="rc-image-top" aria-hidden="true">
            <span className="rc-badge">Riverside</span>
            <span className="rc-price-pill">
              ₹{room.pricePerNight.toLocaleString("en-IN")}
              <span className="rc-price-pill-per"> / night</span>
            </span>
          </div>

          {/* Bottom hover overlay */}
          <div className="rc-hover-info" aria-hidden="true">
            <div className="rc-hover-specs">
              <span className="rc-spec"><Maximize2 size={11} />{room.size}</span>
              <span className="rc-spec-sep" />
              <span className="rc-spec"><BedDouble size={11} />{room.beds}</span>
              <span className="rc-spec-sep" />
              <span className="rc-spec"><Users size={11} />Up to {room.occupancy}</span>
            </div>
          </div>
        </div>
      </a>

      {/* Body */}
      <div className="rc-body">
        <div className="rc-body-top">
          <div>

            <h3 className="rc-name">{room.name}</h3>
            <p className="rc-tagline">{room.tagline}</p>
          </div>
        </div>

        <div className="rc-chips">
          {room.amenities.slice(0, 3).map((a) => (
            <span key={a} className="rc-chip">{a}</span>
          ))}
        </div>

        <div className="rc-footer">
          <a href={`/rooms/${room.slug}`} className="rc-cta">
            Explore Suite
            <ArrowRight size={14} />
          </a>
        </div>
      </div>

      <style>{`
        /* ── Card shell ─────────────────────────────── */
        .rc {
          display: flex;
          flex-direction: column;
          background: var(--color-white);
          border-radius: 6px;
          overflow: hidden;
          border: 1px solid rgba(169, 129, 75, 0.12);
          box-shadow: 0 2px 16px rgba(22, 38, 43, 0.06);
          transition: transform 500ms cubic-bezier(0.25,0.46,0.45,0.94),
                      box-shadow 500ms cubic-bezier(0.25,0.46,0.45,0.94);
          height: 100%;
        }

        .rc:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(22, 38, 43, 0.14);
        }

        /* ── Image block ────────────────────────────── */
        .rc-image-link { display: block; }

        .rc-image-wrap {
          position: relative;
          height: 220px;
          overflow: hidden;
          flex-shrink: 0;
        }

        /* Featured: image grows to fill all remaining card height */
        .rc-featured {
          flex-direction: column;
        }

        .rc-featured .rc-image-link {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .rc-featured .rc-image-wrap {
          flex: 1;
          min-height: 280px;
          height: auto;
        }

        .rc-image {
          object-fit: cover;
          transition: transform 600ms cubic-bezier(0.25,0.46,0.45,0.94);
        }

        .rc:hover .rc-image { transform: scale(1.05); }

        .rc-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(22,38,43,0.18) 0%,
            transparent 40%,
            rgba(22,38,43,0.7) 100%
          );
          transition: opacity 400ms ease;
        }

        /* ── Image top row ──────────────────────────── */
        .rc-image-top {
          position: absolute;
          top: 0; left: 0; right: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.875rem 1rem;
          z-index: 2;
        }

        .rc-badge {
          font-family: var(--font-sans);
          font-size: 0.58rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--color-background);
          background: rgba(169, 129, 75, 0.85);
          backdrop-filter: blur(6px);
          padding: 0.28rem 0.7rem;
          border-radius: 2px;
        }

        .rc-price-pill {
          font-family: var(--font-serif);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--color-background);
          background: rgba(22, 38, 43, 0.72);
          backdrop-filter: blur(8px);
          padding: 0.3rem 0.75rem;
          border-radius: 2px;
          line-height: 1;
        }

        .rc-price-pill-per {
          font-family: var(--font-sans);
          font-size: 0.6rem;
          font-weight: 500;
          opacity: 0.75;
          margin-left: 0.15rem;
        }

        /* ── Hover spec bar ─────────────────────────── */
        .rc-hover-info {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 0.75rem 1rem;
          z-index: 2;
          opacity: 0;
          transform: translateY(4px);
          transition: opacity 360ms ease, transform 360ms ease;
        }

        .rc:hover .rc-hover-info {
          opacity: 1;
          transform: translateY(0);
        }

        .rc-hover-specs {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .rc-spec {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-family: var(--font-sans);
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          color: rgba(251, 248, 242, 0.9);
        }

        .rc-spec-sep {
          width: 1px;
          height: 0.7rem;
          background: rgba(251, 248, 242, 0.3);
          flex-shrink: 0;
        }

        /* ── Body ───────────────────────────────────── */
        .rc-body {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding: 1.25rem 1.4rem 1.4rem;
          flex: 1;
        }

        .rc-body-top { display: flex; flex-direction: column; gap: 0.2rem; }

        .rc-view {
          font-family: var(--font-sans);
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--color-secondary);
          margin: 0 0 0.25rem;
        }

        .rc-name {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--color-primary);
          margin: 0;
          line-height: 1.2;
          letter-spacing: -0.01em;
        }

        .rc-tagline {
          font-size: 0.8rem;
          font-style: italic;
          color: rgba(22, 38, 43, 0.48);
          margin: 0.25rem 0 0;
          line-height: 1.5;
        }

        /* ── Amenity chips ──────────────────────────── */
        .rc-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }

        .rc-chip {
          font-family: var(--font-sans);
          font-size: 0.65rem;
          font-weight: 500;
          padding: 0.22rem 0.6rem;
          background: var(--color-surface);
          border: 1px solid rgba(169, 129, 75, 0.18);
          border-radius: 2px;
          color: rgba(22, 38, 43, 0.6);
          letter-spacing: 0.02em;
        }

        /* ── Footer CTA ─────────────────────────────── */
        .rc-footer {
          margin-top: auto;
          padding-top: 0.875rem;
          border-top: 1px solid rgba(169, 129, 75, 0.12);
          display: flex;
        }

        .rc-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-family: var(--font-sans);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-primary);
          transition: color 280ms ease, gap 280ms ease;
        }

        .rc-cta:hover {
          color: var(--color-secondary);
          gap: 0.65rem;
        }

        .rc-cta svg {
          transition: transform 280ms ease;
          flex-shrink: 0;
        }

        .rc-cta:hover svg { transform: translateX(3px); }
      `}</style>
    </article>
  );
}
