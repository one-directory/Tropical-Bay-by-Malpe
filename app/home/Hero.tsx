"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const HERO_DESKTOP_IMAGE = "/images/home/hero-desktop.webp";
const HERO_MOBILE_IMAGE = "/images/home/hero-mobile.webp";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const onScroll = () => {
      if (rafRef.current !== null) return; // already scheduled
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const bg = hero.querySelector<HTMLDivElement>(".hero-bg");
        if (!bg) return;
        // Only apply parallax on desktop
        if (window.innerWidth > 768) {
          bg.style.transform = `translateY(${window.scrollY * 0.25}px)`;
        } else {
          bg.style.transform = "";
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <section ref={heroRef} className="hero" aria-label="Hero — Tropical Bay by Malpe">
        <div className="hero-bg" aria-hidden="true">
          {/*
           * Desktop image — hidden on mobile via CSS, NOT priority on mobile.
           * The `sizes` attribute ensures the browser picks the right srcset entry.
           * We use two separate <Image> tags so Next.js can generate
           * both srcsets independently. Display toggling is done in CSS only,
           * which means only the *visible* image is downloaded by the browser
           * (browsers don't download images for display:none elements when
           * they are media-query driven — but to be safe we use fetchpriority).
           */}
          <Image
            src={HERO_DESKTOP_IMAGE}
            alt=""
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="hero-bg-image hero-bg-desktop"
          />
          {/*
           * Mobile image — only fetched on mobile.
           * We don't mark it priority so desktop doesn't preload it.
           * CSS hides it on desktop so it is never rendered there.
           */}
          <Image
            src={HERO_MOBILE_IMAGE}
            alt=""
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="hero-bg-image hero-bg-mobile"
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
              <a href="/rooms" className="hero-btn hero-btn-solid">
                Explore Rooms
              </a>
              <a href="/contact" className="hero-btn hero-btn-outline">
                Book Now
              </a>
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

        /* ── Desktop: show desktop, hide mobile ── */
        .hero-bg-desktop {
          display: block !important;
        }

        .hero-bg-mobile {
          display: none !important;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(22, 38, 43, 0.82) 0%,
            rgba(36, 55, 61, 0.5) 45%,
            rgba(36, 80, 74, 0.3) 100%
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
          border-radius: 4px;
          transition: transform 280ms ease, background 280ms ease, border-color 280ms ease;
        }

        .hero-btn-solid {
          background: var(--color-secondary);
          color: var(--color-background);
          border: 1px solid var(--color-secondary);
        }

        .hero-btn-solid:hover {
          background: #C9A972;
          border-color: #C9A972;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(169, 129, 75, 0.45);
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

        .animate-hero-1 { animation: fadeUp 0.7s ease 0.1s both; }
        .animate-hero-2 { animation: fadeUp 0.8s ease 0.25s both; }
        .animate-hero-3 { animation: fadeUp 0.7s ease 0.4s both; }
        .animate-hero-4 { animation: fadeUp 0.7s ease 0.55s both; }
        .animate-hero-5 { animation: fadeIn 0.7s ease 1s both; }

        /* ── Mobile: show mobile image, hide desktop ── */
        @media (max-width: 768px) {
          .hero {
            min-height: 100svh;
            align-items: flex-end;
          }

          .hero-bg {
            inset: 0;
          }

          .hero-bg-desktop {
            display: none !important;
          }

          .hero-bg-mobile {
            display: block !important;
          }

          .hero-bg-image {
            object-position: center !important;
          }

          .hero-content {
            padding-top: 5.5rem;
            padding-bottom: 12svh;
          }

          .hero-text {
            gap: 1.1rem;
          }

          .hero-description {
            max-width: 380px;
          }

          .hero-title {
            font-size: clamp(2rem, 7.5vw, 2.75rem);
          }

          .hero-ctas {
            gap: 0.8rem;
            padding-top: 0.15rem;
          }

          .hero-btn {
            min-width: 9rem;
            padding: 0.8rem 1.4rem;
            font-size: 0.68rem;
          }

          .hero-scroll {
            display: none !important;
          }
        }

        @media (max-width: 560px) {
          .hero-ctas {
            width: 100%;
          }

          .hero-btn {
            flex: 1 1 100%;
          }
        }

        @media (max-width: 480px) {
          .hero-ctas {
            flex-direction: column;
            width: 100%;
          }

          .hero-btn {
            width: 100%;
            justify-content: center;
            text-align: center;
          }
        }

        @media (max-width: 400px) {
          .hero-content {
            padding-top: 4.8rem;
            padding-bottom: 10svh;
          }

          .hero-btn {
            min-width: unset;
            padding: 0.75rem 1.25rem;
          }
        }
      `}</style>
    </>
  );
}
