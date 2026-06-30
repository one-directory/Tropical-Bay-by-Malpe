"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bed, Sun, UtensilsCrossed, BellRing } from "lucide-react";

const features = [
  {
    icon: Bed,
    title: "Luxury Rooms",
    description: "Elegantly designed rooms with modern amenities",
  },
  {
    icon: Sun,
    title: "Beach Access",
    description: "Steps away from pristine sandy beaches",
  },
  {
    icon: UtensilsCrossed,
    title: "Fine Dining",
    description: "Exquisite cuisine with ocean views",
  },
  {
    icon: BellRing,
    title: "24/7 Service",
    description: "Dedicated staff ready to assist you anytime",
  },
];

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1414609245224-afa02dfd8543?auto=format&fit=crop&w=1920&q=80";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const onScroll = () => {
      const bg = hero.querySelector<HTMLDivElement>(".hero-bg");
      if (bg) {
        bg.style.transform = `translateY(${window.scrollY * 0.25}px)`;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <section ref={heroRef} className="hero" aria-label="Hero — Tropical Bay by Malpe">
        <div className="hero-bg" aria-hidden="true">
          <Image
            src={HERO_IMAGE}
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-bg-image"
          />
        </div>
        <div className="hero-overlay" aria-hidden="true" />

        <div className="hero-content container-resort">
          <div className="hero-text">
            <p className="hero-label animate-hero-1">
              <span className="hero-label-line" aria-hidden="true" />
              Welcome to —
            </p>

            <h1 className="hero-title animate-hero-2">
              Tropical Bay
              <br />
              By Malpe
            </h1>

            <span className="hero-divider animate-hero-2" aria-hidden="true" />

            <p className="hero-description animate-hero-3">
              Experience luxury, comfort, and breathtaking waterfront views in the heart of Malpe.
            </p>

            <div className="hero-ctas animate-hero-4">
              <Link href="/rooms" className="hero-btn hero-btn-solid">
                Explore Rooms
              </Link>
              <Link href="/contact" className="hero-btn hero-btn-outline">
                Book Now
              </Link>
            </div>
          </div>
        </div>

        <a href="#welcome" className="hero-scroll animate-hero-5" aria-label="Scroll to content">
          <span className="hero-scroll-mouse" aria-hidden="true">
            <span className="hero-scroll-wheel" />
          </span>
          <span className="hero-scroll-text">Scroll Down</span>
          <span className="hero-scroll-line" aria-hidden="true" />
        </a>
      </section>

      <section className="hero-features" aria-label="Resort highlights">
        <div className="hero-features-inner container-resort">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`hero-feature ${index < features.length - 1 ? "hero-feature-divided" : ""}`}
              >
                <Icon size={28} strokeWidth={1.25} className="hero-feature-icon" aria-hidden="true" />
                <h3 className="hero-feature-title">{feature.title}</h3>
                <p className="hero-feature-desc">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <style>{`
        .hero {
          position: relative;
          min-height: 100svh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: var(--color-navy);
        }

        .hero-bg {
          position: absolute;
          inset: -8% 0 0 0;
          will-change: transform;
          z-index: 0;
        }

        .hero-bg-image {
          object-fit: cover;
          object-position: center;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(10, 20, 32, 0.72) 0%,
            rgba(10, 20, 32, 0.45) 45%,
            rgba(10, 20, 32, 0.25) 100%
          );
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          padding-top: 7rem;
          padding-bottom: 6rem;
        }

        .hero-text {
          max-width: 640px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.35rem;
        }

        .hero-label {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin: 0;
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--color-gold);
        }

        .hero-label-line {
          display: block;
          width: 2.5rem;
          height: 1px;
          background: var(--color-gold);
          flex-shrink: 0;
        }

        .hero-title {
          margin: 0;
          font-family: var(--font-serif);
          font-size: clamp(2.75rem, 6vw, 4.75rem);
          font-weight: 500;
          line-height: 1.08;
          letter-spacing: -0.01em;
          color: var(--color-white);
        }

        .hero-divider {
          display: block;
          width: 3.5rem;
          height: 2px;
          background: var(--color-gold);
        }

        .hero-description {
          margin: 0;
          max-width: 520px;
          font-family: var(--font-sans);
          font-size: clamp(0.95rem, 1.4vw, 1.05rem);
          line-height: 1.85;
          color: rgba(255, 255, 255, 0.82);
        }

        .hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
          padding-top: 0.35rem;
        }

        .hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 10.5rem;
          padding: 0.95rem 1.75rem;
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          border-radius: 0;
          transition: transform 280ms ease, background 280ms ease, border-color 280ms ease;
        }

        .hero-btn-solid {
          background: var(--color-gold);
          color: var(--color-white);
          border: 1px solid var(--color-gold);
        }

        .hero-btn-solid:hover {
          background: var(--color-gold-light);
          border-color: var(--color-gold-light);
          transform: translateY(-1px);
        }

        .hero-btn-outline {
          background: transparent;
          color: var(--color-white);
          border: 1px solid rgba(255, 255, 255, 0.75);
        }

        .hero-btn-outline:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--color-white);
          transform: translateY(-1px);
        }

        .hero-scroll {
          position: absolute;
          left: 50%;
          bottom: 2.5rem;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.65rem;
          color: rgba(255, 255, 255, 0.85);
          transform: translateX(-50%);
          transition: color 280ms ease;
        }

        .hero-scroll:hover {
          color: var(--color-white);
        }

        .hero-scroll-mouse {
          position: relative;
          width: 1.35rem;
          height: 2.1rem;
          border: 1.5px solid currentColor;
          border-radius: 999px;
        }

        .hero-scroll-wheel {
          position: absolute;
          top: 0.35rem;
          left: 50%;
          width: 2px;
          height: 0.45rem;
          background: currentColor;
          border-radius: 999px;
          transform: translateX(-50%);
          animation: hero-wheel 1.8s ease-in-out infinite;
        }

        @keyframes hero-wheel {
          0%, 100% { opacity: 1; transform: translateX(-50%) translateY(0); }
          60% { opacity: 0.2; transform: translateX(-50%) translateY(0.35rem); }
        }

        .hero-scroll-text {
          font-family: var(--font-sans);
          font-size: 0.62rem;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .hero-scroll-line {
          display: block;
          width: 1px;
          height: 2rem;
          background: rgba(255, 255, 255, 0.45);
        }

        .hero-features {
          background: #f3f3f1;
          border-top: 1px solid rgba(0, 0, 0, 0.04);
        }

        .hero-features-inner {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .hero-feature {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.65rem;
          padding: 2.25rem 1.5rem;
        }

        .hero-feature-divided {
          border-right: 1px solid rgba(0, 0, 0, 0.08);
        }

        .hero-feature-icon {
          color: var(--color-gold);
        }

        .hero-feature-title {
          margin: 0;
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--color-navy);
        }

        .hero-feature-desc {
          margin: 0;
          max-width: 15rem;
          font-family: var(--font-sans);
          font-size: 0.82rem;
          line-height: 1.65;
          color: rgba(13, 27, 42, 0.58);
        }

        .animate-hero-1 { animation: fadeUp 0.7s ease 0.1s both; }
        .animate-hero-2 { animation: fadeUp 0.8s ease 0.25s both; }
        .animate-hero-3 { animation: fadeUp 0.7s ease 0.4s both; }
        .animate-hero-4 { animation: fadeUp 0.7s ease 0.55s both; }
        .animate-hero-5 { animation: fadeIn 0.7s ease 1s both; }

        @media (max-width: 960px) {
          .hero-features-inner {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .hero-feature-divided {
            border-right: none;
          }

          .hero-feature:nth-child(odd) {
            border-right: 1px solid rgba(0, 0, 0, 0.08);
          }

          .hero-feature:nth-child(-n + 2) {
            border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          }
        }

        @media (max-width: 768px) {
          .hero-content {
            padding-top: 6rem;
            padding-bottom: 5.5rem;
          }

          .hero-scroll {
            bottom: 1.75rem;
          }
        }

        @media (max-width: 560px) {
          .hero-features-inner {
            grid-template-columns: 1fr;
          }

          .hero-feature:nth-child(odd) {
            border-right: none;
          }

          .hero-feature:not(:last-child) {
            border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          }

          .hero-ctas {
            width: 100%;
          }

          .hero-btn {
            flex: 1 1 100%;
          }
        }
      `}</style>
    </>
  );
}
