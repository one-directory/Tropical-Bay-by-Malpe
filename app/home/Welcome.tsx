import Link from "next/link";
import Image from "next/image";

const ABOUT_IMAGE = "/images/about/about-resort.jpg";

export default function Welcome() {
  return (
    <section id="welcome" className="about-home" aria-labelledby="welcome-heading">
      <div className="about-home-grid">
        <div className="about-home-content">
          <p className="about-home-label">
            <span className="about-home-label-line" aria-hidden="true" />
            About Us —
          </p>

          <h2 id="welcome-heading" className="about-home-title">
            Where Comfort Meets Serenity
          </h2>

          <p className="about-home-text">
            Nestled along the pristine shores of Malpe, Tropical Bay offers an unparalleled
            retreat where modern luxury blends seamlessly with coastal charm. Our thoughtfully
            designed spaces, warm hospitality, and serene waterfront setting create the perfect
            escape for travelers seeking rest, refinement, and unforgettable moments by the sea.
          </p>

          <Link href="/about" className="about-home-btn">
            Learn More
          </Link>
        </div>

        <div className="about-home-media">
          <Image
            src={ABOUT_IMAGE}
            alt="Tropical Bay resort pool and building at night"
            fill
            sizes="(max-width: 960px) 100vw, 50vw"
            className="about-home-image"
          />
        </div>
      </div>

      <style>{`
        .about-home {
          background: var(--color-white);
        }

        .about-home-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          min-height: 34rem;
        }

        .about-home-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1.35rem;
          padding: clamp(3rem, 6vw, 5.5rem) clamp(1.5rem, 7vw, 6rem);
        }

        .about-home-label {
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

        .about-home-label-line {
          display: block;
          width: 2.5rem;
          height: 1px;
          background: var(--color-gold);
          flex-shrink: 0;
        }

        .about-home-title {
          margin: 0;
          max-width: 24rem;
          font-family: var(--font-serif);
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 500;
          line-height: 1.18;
          letter-spacing: -0.01em;
          color: var(--color-navy);
        }

        .about-home-text {
          margin: 0;
          max-width: 34rem;
          font-family: var(--font-sans);
          font-size: clamp(0.95rem, 1.2vw, 1.02rem);
          line-height: 1.85;
          color: rgba(13, 27, 42, 0.68);
        }

        .about-home-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          align-self: flex-start;
          margin-top: 0.5rem;
          min-width: 10.5rem;
          padding: 0.95rem 1.75rem;
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--color-white);
          background: var(--color-gold);
          border: 1px solid var(--color-gold);
          border-radius: 0;
          transition: transform 280ms ease, background 280ms ease;
        }

        .about-home-btn:hover {
          background: var(--color-gold-light);
          border-color: var(--color-gold-light);
          transform: translateY(-1px);
        }

        .about-home-media {
          position: relative;
          min-height: 22rem;
        }

        .about-home-image {
          object-fit: cover;
          object-position: center;
        }

        @media (max-width: 960px) {
          .about-home-grid {
            grid-template-columns: 1fr;
          }

          .about-home-media {
            min-height: 20rem;
            order: 2;
          }

          .about-home-content {
            order: 1;
          }
        }
      `}</style>
    </section>
  );
}
