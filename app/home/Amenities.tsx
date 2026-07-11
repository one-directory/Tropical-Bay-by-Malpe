import FadeIn from "@/components/animations/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerReveal";
import {
  Waves, UtensilsCrossed, Sun, ShowerHead, Wind, Flame,
  Sofa, VolumeX, Shield, Scissors, Wine, Eye, Compass, Lock, Sparkles, Wifi, Zap,
  Key, Clock, Bell, Heart, ShieldAlert, ArrowRight
} from "lucide-react";

const amenities = [
  {
    icon: Wifi,
    title: "Free High-Speed Wi-Fi",
    description: "Complimentary high-speed fiber-optic Wi-Fi covering all rooms.",
    tag: "Connectivity",
  },
  {
    icon: Sun,
    title: "River & Lake Views",
    description: "Stunning riverfront panoramas and peaceful water views from your room.",
    tag: "View",
  },
  {
    icon: Wind,
    title: "Air Conditioning",
    description: "Climate control in Small AC Room, Large AC Room, and First Floor Suite.",
    tag: "Comfort",
  },
  {
    icon: Lock,
    title: "Private Entrance",
    description: "Every room features a private, independent entrance for privacy.",
    tag: "Privacy",
  },
  {
    icon: Flame,
    title: "Barbecue Grill",
    description: "On-site barbecue equipment available for outdoor riverside grilling.",
    tag: "Outdoor",
  },
  {
    icon: Waves,
    title: "Outdoor Dining",
    description: "Dedicated al fresco dining tables situated along the riverbanks.",
    tag: "Outdoor",
  },
  {
    icon: Shield,
    title: "Secure Parking",
    description: "Complimentary parking space monitored 24/7 for all vehicles.",
    tag: "Facilities",
  },
  {
    icon: Sparkles,
    title: "Daily Housekeeping",
    description: "Daily room cleaning and freshening services included.",
    tag: "Services",
  },
];

export default function Amenities() {
  return (
    <section className="am-section" aria-labelledby="amenities-heading">

      {/* ── Header ───────────────────────────────────── */}
      <FadeIn>
        <div className="container-resort" style={{ marginBottom: "clamp(3rem, 5vw, 4.5rem)" }}>
          <SectionHeading
            overline="Resort Facilities"
            title="Everything You Need, Nothing You Don't"
            subtitle="Every comfort has been thoughtfully curated — so you can simply arrive, unwind, and let the river do the rest."
            align="center"
            id="amenities-heading"
          />
        </div>
      </FadeIn>

      {/* ── Grid ─────────────────────────────────────── */}
      <StaggerContainer className="am-grid container-resort">
        {amenities.map((a) => {
          const Icon = a.icon;
          return (
            <StaggerItem key={a.title}>
              <div className="am-card">
                <div className="am-card-top">
                  <div className="am-icon-wrap" aria-hidden="true">
                    <Icon size={20} strokeWidth={1.6} />
                  </div>
                  <span className="am-tag">{a.tag}</span>
                </div>
                <h3 className="am-card-title">{a.title}</h3>
                <p className="am-card-desc">{a.description}</p>
                <span className="am-card-line" aria-hidden="true" />
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      <div className="am-actions container-resort">
        <a href="/about#facilities-heading" className="btn btn-secondary am-btn">
          View All Facilities <ArrowRight size={16} />
        </a>
      </div>

      <style>{`
        /* Actions button */
        .am-actions {
          display: flex;
          justify-content: center;
          margin-top: clamp(2.5rem, 4vw, 3.5rem);
        }

        .am-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-sans);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .am-btn svg {
          transition: transform 300ms ease;
        }

        .am-btn:hover svg {
          transform: translateX(4px);
        }

        /* ─── Section ────────────────────────────────── */
        .am-section {
          background: var(--color-surface);
          padding-block: var(--section-y);
          position: relative;
          overflow: hidden;
        }

        /* Brass top hairline */
        .am-section::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: clamp(60px, 10vw, 120px);
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--color-secondary), transparent);
        }

        /* ─── Header ─────────────────────────────────── */
        .am-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1rem;
          margin-bottom: clamp(3rem, 5vw, 4.5rem);
        }

        .am-overline {
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

        .am-overline-line {
          display: block;
          width: 1.75rem;
          height: 1px;
          background: var(--color-secondary);
          flex-shrink: 0;
        }

        .am-title {
          font-family: var(--font-serif);
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 400;
          line-height: 1.15;
          letter-spacing: -0.015em;
          color: var(--color-primary);
          margin: 0;
        }

        .am-title em {
          font-style: italic;
          color: var(--color-secondary);
        }

        .am-subtitle {
          font-family: var(--font-sans);
          font-size: clamp(0.82rem, 1.1vw, 0.92rem);
          color: rgba(22, 38, 43, 0.5);
          line-height: 1.75;
          margin: 0;
          max-width: 520px;
        }

        /* ─── Grid ───────────────────────────────────── */
        .am-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }

        /* ─── Card ───────────────────────────────────── */
        .am-card {
          background: var(--color-white);
          border: 1px solid rgba(169, 129, 75, 0.12);
          border-radius: 8px;
          padding: 1.5rem 1.4rem 1.35rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          position: relative;
          transition: transform 400ms ease, box-shadow 400ms ease, border-color 400ms ease;
          overflow: hidden;
        }

        .am-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--color-secondary), transparent);
          opacity: 0;
          transition: opacity 350ms ease;
        }

        .am-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(22, 38, 43, 0.1);
          border-color: rgba(169, 129, 75, 0.28);
        }

        .am-card:hover::after {
          opacity: 1;
        }

        /* Card top row */
        .am-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.65rem;
        }

        /* Icon wrapper */
        .am-icon-wrap {
          width: 2.5rem;
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(169, 129, 75, 0.09);
          border: 1px solid rgba(169, 129, 75, 0.18);
          border-radius: 6px;
          color: var(--color-secondary);
          flex-shrink: 0;
          transition: background 350ms ease, border-color 350ms ease;
        }

        .am-card:hover .am-icon-wrap {
          background: rgba(169, 129, 75, 0.16);
          border-color: rgba(169, 129, 75, 0.35);
        }

        /* Tag pill */
        .am-tag {
          font-family: var(--font-sans);
          font-size: 0.58rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(22, 38, 43, 0.38);
          background: var(--color-surface);
          padding: 0.22rem 0.6rem;
          border-radius: 2px;
          border: 1px solid rgba(22, 38, 43, 0.07);
        }

        /* Title */
        .am-card-title {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--color-primary);
          margin: 0;
          letter-spacing: -0.01em;
          line-height: 1.2;
        }

        /* Description */
        .am-card-desc {
          font-family: var(--font-sans);
          font-size: 0.78rem;
          line-height: 1.65;
          color: rgba(22, 38, 43, 0.5);
          margin: 0;
          flex: 1;
        }

        /* Decorative bottom line */
        .am-card-line {
          display: block;
          width: 1.5rem;
          height: 1px;
          background: var(--color-secondary);
          opacity: 0.35;
          margin-top: 0.35rem;
          transition: width 350ms ease, opacity 350ms ease;
        }

        .am-card:hover .am-card-line {
          width: 2.5rem;
          opacity: 0.7;
        }

        /* ─── Responsive ─────────────────────────────── */
        @media (max-width: 1100px) {
          .am-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 768px) {
          .am-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 480px) {
          .am-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
