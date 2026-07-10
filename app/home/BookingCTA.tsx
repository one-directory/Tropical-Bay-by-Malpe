"use client";

import Link from "next/link";
import { CalendarDays } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

export default function BookingCTA() {
  return (
    <section className="booking-cta-section" aria-labelledby="booking-cta-title">
      <div className="container-resort booking-cta-container">
        <FadeIn className="booking-cta-inner">
          <div className="booking-cta-content">
            <span className="booking-cta-overline">Plan Your Escape</span>
            <h2 id="booking-cta-title" className="booking-cta-heading">
              A Hidden Retreat in Pithrody, Udyavara
            </h2>
            <p className="booking-cta-desc">
              Surrounded by peaceful backwaters and just moments from the Arabian Sea, Tropical Bay by Malpe is your gateway to the natural beauty and coastal charm of Udupi.
            </p>
          </div>
          <div className="booking-cta-actions">
            <Link href="/contact" className="btn btn-primary booking-cta-btn-primary">
              Book Your Stay <CalendarDays size={15} style={{ marginLeft: "8px" }} />
            </Link>
          </div>
        </FadeIn>
      </div>

      <style>{`
        .booking-cta-section {
          position: relative;
          padding-block: var(--section-y);
          background: var(--color-surface); /* tb-ivory-deep: #F3EEE3 */
          border-top: 1px solid rgba(169, 129, 75, 0.15);
          overflow: hidden;
        }

        .booking-cta-container {
          max-width: 1200px;
          margin: 0 auto;
          padding-inline: 2rem;
        }

        .booking-cta-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 3rem;
        }

        .booking-cta-content {
          text-align: left;
          max-width: 720px;
        }

        .booking-cta-overline {
          font-family: var(--font-sans);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--color-secondary); /* tb-brass: #A9814B */
          display: block;
          margin-bottom: 0.5rem;
        }

        .booking-cta-heading {
          font-family: var(--font-serif);
          font-size: clamp(1.6rem, 3.2vw, 2.3rem);
          font-weight: 500;
          line-height: 1.25;
          color: var(--color-text-dark); /* tb-ink: #16262B */
          margin: 0 0 0.5rem;
        }

        .booking-cta-desc {
          font-family: var(--font-sans);
          font-size: 0.92rem;
          line-height: 1.65;
          color: var(--color-text-muted); /* tb-stone: #6E6A61 */
          margin: 0;
        }

        .booking-cta-actions {
          display: flex;
          flex-shrink: 0;
        }

        .booking-cta-btn-primary {
          background: var(--color-primary) !important; /* tb-ink */
          border-color: var(--color-primary) !important;
          color: var(--color-background) !important; /* tb-ivory */
          font-weight: 600 !important;
          padding: 0.9rem 2rem !important;
          border-radius: 2px !important;
          box-shadow: 0 4px 12px rgba(22, 38, 43, 0.15);
          transition: background 300ms ease, transform 300ms ease, border-color 300ms ease !important;
        }

        .booking-cta-btn-primary:hover {
          background: var(--color-secondary) !important; /* tb-brass */
          border-color: var(--color-secondary) !important;
          color: var(--color-white) !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(169, 129, 75, 0.25);
        }

        @media (max-width: 768px) {
          .booking-cta-inner {
            flex-direction: column;
            align-items: flex-start;
            gap: 2rem;
          }
          .booking-cta-content {
            max-width: 100%;
          }
          .booking-cta-actions {
            width: 100%;
          }
          .booking-cta-btn-primary {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
