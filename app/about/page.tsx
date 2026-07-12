import type { Metadata } from "next";
export const dynamic = 'force-dynamic';

import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "The story of Tropical Bay by Malpe — our founding vision, mission, and the tranquil coastal sanctuary we created in Pithrody, Udupi.",
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    title: "About Us | Tropical Bay by Malpe",
    description: "Nestled in the backwaters of Pithrody. A luxury boutique resort built from a deep love for the coast.",
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="about-hero" aria-label="About Tropical Bay Showcase Banner">
        <div className="about-hero-image-wrapper">
          <Image
            src="/images/about us page.webp"
            alt="Tropical Bay by Malpe Waterfront Resort"
            fill
            priority
            sizes="100vw"
            className="about-hero-image"
          />
        </div>
        <div className="about-hero-overlay" aria-hidden="true" />
        <div className="container-resort about-hero-content">
          <FadeIn>
            <span className="text-overline page-hero-overline">Our Story</span>
            <h1 className="text-h1 page-hero-title">A Sanctuary on the Backwaters</h1>
            <p className="page-hero-desc">
              Nestled on the quiet shores of Pithrody, where Udupi&apos;s calm backwaters meet the sky, Tropical Bay is a sanctuary crafted for peace, reflection, and coastal comfort.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section-padding bg-cream" aria-labelledby="story-heading" style={{ paddingTop: "5.5rem", paddingBottom: "5.5rem" }}>
        <div className="container-resort">
          <div className="about-story-row">
            {/* Left: Image of the Room */}
            <FadeIn className="about-story-img-wrap">
              <Image
                src="/images/large ac room/large ac main.webp"
                alt="Premium Waterfront Suite at Tropical Bay"
                width={650}
                height={450}
                className="about-story-img"
                priority
              />
            </FadeIn>

            {/* Right: Resort Explanation Text */}
            <FadeIn className="about-story-content" delay={0.15}>
              <SectionHeading
                overline="Welcome to Tropical Bay"
                title="Your Waterfront Escape"
                id="story-heading"
              />

              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <p className="about-story-text">
                  Tropical Bay by Malpe is a premium boutique resort overlooking the calm Udyavara river channels. Designed as a private sanctuary, our resort blends modern luxury with authentic coastal design, featuring private suites, exceptional dining, and peaceful waterfront views.
                </p>
                <p className="about-story-text">
                  Our resort is nestled on the peaceful eastern banks of the Udyavara river backwaters in Pithrody. We offer a calm, scenic waterfront stay overlooking the gentle river channels, while the pristine Pithrody Udyavar beach is just across the water.
                </p>
                <p className="about-story-text">
                  Whether you&apos;re looking to unwind by the water, taste local coastal delicacies, or explore the historic charm of Udupi and Malpe Beach, our resort provides a warm and relaxing home away from home. Guests can spend their mornings watching local fishermen cruise by on quiet wooden boats, and enjoy stunning waterfront sunsets directly from our resort.
                </p>
              </div>

              <div className="about-cta" style={{ marginTop: "2rem", alignItems: "flex-start" }}>
                <p className="about-cta-text" style={{ fontSize: "1.1rem" }}>
                  We look forward to welcoming you to the shores of Pithrody.
                </p>
                <a href="/contact" className="btn btn-primary" style={{ display: "inline-flex", background: "var(--color-primary)", color: "#fff", padding: "0.85rem 2.25rem", borderRadius: "2px", fontWeight: 600 }}>
                  Plan Your Visit
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Resort Amenities & Facilities */}
      <section className="section-padding bg-surface" aria-labelledby="facilities-heading" style={{ borderTop: "1px solid rgba(169, 129, 75, 0.15)", paddingTop: "5rem", paddingBottom: "6rem" }}>
        <div className="container-resort">
          <SectionHeading
            overline="Amenities"
            title="Resort Facilities & Services"
            subtitle="Every detail has been thoughtfully prepared to ensure a seamless, safe, and comfortable lakeside experience."
            align="center"
            id="facilities-heading"
          />

          <div className="about-facilities-grid" style={{ marginTop: "4rem" }}>
            {/* Category 1: Views & Comfort */}
            <div className="facility-category">
              <h3 className="facility-category-title">Views & Comfort</h3>
              <ul className="facility-list">
                <li>Scenic River & Lake Views</li>
                <li>Lush Garden & Courtyard Views</li>
                <li>Private Balcony (First Floor)</li>
                <li>Full In-Room Air Conditioning</li>
                <li>Acoustic Soundproofing</li>
                <li>Premium Cool Tile/Marble Flooring</li>
                <li>Private Independent Entrance</li>
                <li>Comfortable Sofa & Indoor Sitting Area</li>
              </ul>
            </div>

            {/* Category 2: Dining & Kitchen */}
            <div className="facility-category">
              <h3 className="facility-category-title">Dining & Kitchen</h3>
              <ul className="facility-list">
                <li>Fully-Equipped Kitchen / Kitchenette</li>
                <li>In-Room Refrigerator</li>
                <li>Complete Kitchenware & Prep Set</li>
                <li>Spacious Dining Table & Area</li>
                <li>Fine Sunset Wine Glasses</li>
                <li>Outdoor Barbecue Grill Facilities</li>
                <li>Riverside Al Fresco Dining Area</li>
              </ul>
            </div>

            {/* Category 3: Safety & Security */}
            <div className="facility-category">
              <h3 className="facility-category-title">Safety & Security</h3>
              <ul className="facility-list">
                <li>Secure In-Room Storage Lockers</li>
                <li>Traditional Private Key Access</li>
                <li>Integrated Smoke & CO Detectors</li>
                <li>Public & Room Fire Extinguishers</li>
                <li>In-Room Hand Sanitizer Stations</li>
                <li>Complimentary Baby Safety Gates</li>
                <li>Electrical Child Socket Covers</li>
              </ul>
            </div>

            {/* Category 4: Services & Accessibility */}
            <div className="facility-category">
              <h3 className="facility-category-title">Services & Facilities</h3>
              <ul className="facility-list">
                <li>Daily Housekeeping Services</li>
                <li>24/7 Monitored Secure Parking</li>
                <li>Free High-Speed Fiber Wi-Fi</li>
                <li>Scheduled Wake-up Call Service</li>
                <li>Wheelchair Accessible Units</li>
                <li>Step-Free Ground Floor Rooms</li>
                <li>High-Pressure Modern Showers</li>
                <li>Complimentary Quality Toiletries</li>
                <li>In-Room Iron & Ironing Board</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* Hero Section styles */
        .about-hero {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: var(--color-primary);
          min-height: 75vh;
          padding-top: 8rem;
          padding-bottom: 4rem;
        }

        @media (max-width: 768px) {
          .about-hero {
            min-height: 55vh;
            padding-top: 5rem;
            padding-bottom: 3.5rem;
          }

          .about-hero-image-wrapper {
            inset: 1rem;
            border-radius: 8px;
            overflow: hidden;
            width: auto;
            height: auto;
          }

          .about-hero-overlay {
            inset: 1rem;
            border-radius: 8px;
            background: linear-gradient(
              to bottom,
              rgba(22, 38, 43, 0.85) 0%,
              rgba(22, 38, 43, 0.65) 50%,
              rgba(22, 38, 43, 0.92) 100%
            ) !important;
          }

          .about-hero .about-hero-content {
            padding-inline: 1.5rem;
          }

          .about-hero .page-hero-title {
            font-size: clamp(1.75rem, 6vw, 2.15rem) !important;
            line-height: 1.2;
          }

          .about-hero .page-hero-desc {
            font-size: 0.9rem !important;
            line-height: 1.7;
            max-width: 380px;
            margin-top: 0.75rem;
          }
        }

        @media (min-width: 768px) {
          .about-hero {
            min-height: auto;
            aspect-ratio: 2730 / 1536;
            padding-top: 6rem;
            padding-bottom: 3rem;
          }
        }

        .about-hero-image-wrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .about-hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .about-hero-overlay {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.015) 1px, transparent 0),
            linear-gradient(to bottom, rgba(22, 38, 43, 0.75) 0%, rgba(22, 38, 43, 0.5) 50%, rgba(22, 38, 43, 0.85) 100%);
          background-size: 36px 36px, 100% 100%;
          z-index: 2;
        }

        .about-hero .about-hero-content {
          position: relative !important;
          z-index: 5 !important;
          max-width: 720px;
          margin-top: auto;
          margin-bottom: auto;
        }

        .about-hero .page-hero-overline {
          color: #F0D290 !important;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.7);
          font-weight: 600;
        }

        .about-hero .page-hero-title {
          color: var(--color-white) !important;
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
        }

        .about-hero .page-hero-desc {
          color: rgba(255, 255, 255, 0.85) !important;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
          font-size: 1.05rem;
          line-height: 1.8;
          max-width: 560px;
          margin-top: 1rem;
        }

        /* Story Section styles */
        .about-story-row {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 5rem;
          align-items: center;
        }

        .about-story-img-wrap {
          position: relative;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: var(--shadow-luxury);
        }

        .about-story-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .about-story-img-wrap:hover .about-story-img {
          transform: scale(1.02);
        }

        .about-story-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .about-story-text {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--color-text-muted);
          margin: 0;
        }

        .about-cta {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .about-cta-text {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          font-style: italic;
          color: var(--color-text-dark);
          margin: 0;
        }

        /* Facilities list styling */
        .about-facilities-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .facility-category {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          background: var(--color-white);
          padding: 2.25rem 2rem;
          border-radius: 6px;
          border: 1px solid rgba(169, 129, 75, 0.15);
          box-shadow: 0 4px 24px rgba(22, 38, 43, 0.05);
          transition: transform 300ms ease, box-shadow 300ms ease;
        }

        .facility-category:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 36px rgba(22, 38, 43, 0.09);
        }

        .facility-category-title {
          font-family: var(--font-serif);
          font-size: 1.28rem;
          color: var(--color-primary);
          margin: 0;
          padding-bottom: 0.85rem;
          border-bottom: 1px solid rgba(169, 129, 75, 0.2);
          font-weight: 500;
          letter-spacing: 0.01em;
        }

        .facility-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .facility-list li {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          color: var(--color-text-muted);
          position: relative;
          padding-left: 1.25rem;
          line-height: 1.45;
        }

        .facility-list li::before {
          content: "•";
          position: absolute;
          left: 0.25rem;
          color: var(--color-secondary);
          font-size: 1.1rem;
          line-height: 1.2;
        }

        @media (max-width: 991px) {
          .about-story-row {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .about-story-img-wrap {
            max-width: 600px;
            margin: 0 auto;
          }
          .about-cta {
            align-items: center !important;
            text-align: center;
          }
          .about-facilities-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        @media (max-width: 560px) {
          .about-facilities-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          .facility-category {
            padding: 1.75rem 1.5rem;
          }
        }
      `}</style>
    </>
  );
}
