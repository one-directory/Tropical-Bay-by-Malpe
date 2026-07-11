import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

export default function CTA() {
  return (
    <section className="cta-section section-padding-lg" aria-labelledby="cta-heading">
      <div className="cta-bg" aria-hidden="true">
        <div className="cta-visual" />
      </div>
      <div className="cta-overlay" aria-hidden="true" />

      <FadeIn className="cta-content container-resort">
        <span className="text-overline cta-overline">Your Escape Awaits</span>
        <h2 className="text-h1 cta-title" id="cta-heading">
          Begin Your Malpe Story
        </h2>
        <p className="cta-subtitle">
          Whether you are celebrating a milestone, craving a quiet retreat, or simply
          yearning for the sound of the sea — Tropical Bay is ready to welcome you.
          Our suites are available year-round; the ocean always is.
        </p>
        <div className="cta-actions">
          <a href="/contact" className="btn btn-primary cta-btn-primary">
            Reserve Your Suite
            <ArrowRight size={15} aria-hidden="true" />
          </a>
          <a href="/rooms" className="btn btn-ghost">
            Explore Suites
          </a>
        </div>
        <p className="cta-note">
          Best rate guaranteed · Flexible cancellation · Personalised service
        </p>
      </FadeIn>

      <style>{`
        /* ── Section shell ─────────────────────────────── */
        .cta-section {
          position: relative;
          background: var(--color-primary);
          overflow: hidden;
          text-align: center;
        }

        /* ── Decorative background visual ──────────────── */
        .cta-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }

        .cta-visual {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 30% 60%, rgba(169, 129, 75, 0.14) 0%, transparent 55%),
            radial-gradient(ellipse at 75% 30%, rgba(36, 80, 74, 0.18) 0%, transparent 55%);
        }

        /* ── Dark overlay for legibility ───────────────── */
        .cta-overlay {
          position: absolute;
          inset: 0;
          background: rgba(22, 38, 43, 0.35);
          z-index: 0;
          pointer-events: none;
        }

        /* ── Content column ────────────────────────────── */
        .cta-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        /* ── Overline ───────────────────────────────────── */
        .cta-overline {
          color: var(--color-secondary);
          letter-spacing: 0.25em;
        }

        /* ── Heading ────────────────────────────────────── */
        .cta-title {
          color: var(--color-white);
          margin: 0;
          max-width: 700px;
        }

        /* ── Subtitle ───────────────────────────────────── */
        .cta-subtitle {
          font-family: var(--font-sans);
          font-size: clamp(0.92rem, 1.4vw, 1.05rem);
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.68);
          max-width: 600px;
          margin: 0;
        }

        /* ── Action buttons row ─────────────────────────── */
        .cta-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        /* ── Primary button override ────────────────────── */
        .cta-btn-primary {
          background: var(--color-secondary) !important;
          border-color: var(--color-secondary) !important;
          color: var(--color-white) !important;
        }

        .cta-btn-primary:hover {
          background: var(--color-white) !important;
          border-color: var(--color-white) !important;
          color: var(--color-primary) !important;
        }

        /* ── Fine-print note ────────────────────────────── */
        .cta-note {
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          color: rgba(255, 255, 255, 0.38);
          margin: 0;
        }

        /* ── Responsive ─────────────────────────────────── */
        @media (max-width: 768px) {
          .cta-content {
            gap: 1.25rem;
          }
        }

        @media (max-width: 480px) {
          .cta-actions {
            flex-direction: column;
            width: 100%;
          }

          .cta-actions .btn {
            width: 100%;
            justify-content: center;
          }

          .cta-subtitle {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
}
