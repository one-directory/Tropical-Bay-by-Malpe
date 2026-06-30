"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data/testimonials";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const getVisible = () => {
    return [
      testimonials[(current - 1 + total) % total],
      testimonials[current],
      testimonials[(current + 1) % total],
    ];
  };

  const visible = getVisible();

  return (
    <section className="testimonials section-padding-lg bg-sand" aria-labelledby="reviews-heading">
      <div className="container-resort">
        <FadeIn>
          <SectionHeading
            overline="Guest Reviews"
            title="Stories from Our Guests"
            subtitle="The warmth of Malpe is best understood through the words of those who have called Tropical Bay home, even if only for a night."
            align="center"
            id="reviews-heading"
          />
        </FadeIn>

        <div className="testimonials-carousel" role="region" aria-label="Guest testimonials">
          <div className="testimonials-grid">
            {visible.map((t, i) => (
              <FadeIn key={t.id} delay={i * 0.1}>
                <article
                  className={`testimonial-card ${i === 1 ? "testimonial-featured" : "testimonial-secondary"}`}
                  aria-label={`Review by ${t.name}`}
                >
                  <div className="stars" aria-label={`Rating: ${t.rating} out of 5`}>
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} size={14} fill="currentColor" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="review-text">
                    &ldquo;{t.review}&rdquo;
                  </blockquote>
                  <footer className="review-footer">
                    <div className="reviewer-avatar" aria-hidden="true">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="reviewer-name">{t.name}</p>
                      <p className="reviewer-meta">{t.location} · {t.date}</p>
                      <p className="reviewer-stay">{t.stayType}</p>
                    </div>
                  </footer>
                </article>
              </FadeIn>
            ))}
          </div>

          <div className="testimonials-controls">
            <button onClick={prev} className="control-btn" aria-label="Previous review">
              <ChevronLeft size={18} />
            </button>
            <div className="testimonials-dots" role="tablist">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Go to review ${i + 1}`}
                  className={`testimonial-dot ${i === current ? "dot-active" : ""}`}
                  onClick={() => setCurrent(i)}
                />
              ))}
            </div>
            <button onClick={next} className="control-btn" aria-label="Next review">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .testimonials {
          background: var(--color-sand);
        }

        .testimonials-carousel {
          margin-top: 4rem;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr 1fr;
          gap: 1.5rem;
          align-items: start;
        }

        @media (max-width: 1024px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }

          .testimonial-secondary {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }

        .testimonial-card {
          background: var(--color-white);
          padding: 2rem;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          box-shadow: var(--shadow-luxury);
          transition: transform var(--transition-smooth), box-shadow var(--transition-smooth);
        }

        .testimonial-featured {
          background: var(--color-navy);
          transform: scale(1.02);
          box-shadow: var(--shadow-elevated);
          z-index: 1;
        }

        .testimonial-featured .review-text {
          color: rgba(255, 255, 255, 0.82);
        }

        .testimonial-featured .reviewer-name {
          color: var(--color-white);
        }

        .testimonial-featured .reviewer-meta,
        .testimonial-featured .reviewer-stay {
          color: rgba(255, 255, 255, 0.5);
        }

        .testimonial-featured .reviewer-avatar {
          background: var(--color-gold);
          color: var(--color-navy);
        }

        .testimonial-featured .stars {
          color: var(--color-gold);
        }

        .testimonial-secondary {
          opacity: 0.72;
        }

        .stars { color: var(--color-gold); }

        .review-text {
          font-family: var(--font-serif);
          font-size: 0.975rem;
          font-style: italic;
          line-height: 1.8;
          color: rgba(13, 27, 42, 0.75);
          flex: 1;
          margin: 0;
        }

        .review-footer {
          display: flex;
          align-items: center;
          gap: 0.875rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(13, 27, 42, 0.06);
        }

        .testimonial-featured .review-footer {
          border-top-color: rgba(255, 255, 255, 0.08);
        }

        .reviewer-avatar {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          background: var(--color-sand-dark);
          color: var(--color-navy);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-serif);
          font-size: 1rem;
          font-weight: 600;
          flex-shrink: 0;
        }

        .reviewer-name {
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--color-navy);
          margin: 0 0 0.2rem;
        }

        .reviewer-meta {
          font-size: 0.78rem;
          color: rgba(13, 27, 42, 0.5);
          margin: 0;
        }

        .reviewer-stay {
          font-size: 0.72rem;
          color: var(--color-gold);
          font-weight: 500;
          letter-spacing: 0.04em;
          margin: 0.15rem 0 0;
        }

        /* Controls */
        .testimonials-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
        }

        .control-btn {
          width: 2.75rem;
          height: 2.75rem;
          border-radius: 50%;
          border: 1px solid rgba(13, 27, 42, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-navy);
          transition: all var(--transition-base);
          cursor: pointer;
          background: var(--color-white);
          box-shadow: var(--shadow-luxury);
        }

        .control-btn:hover {
          border-color: var(--color-gold);
          color: var(--color-gold);
          transform: scale(1.05);
        }

        .testimonials-dots {
          display: flex;
          gap: 0.5rem;
        }

        .testimonial-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(13, 27, 42, 0.2);
          border: none;
          cursor: pointer;
          transition: background var(--transition-base), width var(--transition-base);
          padding: 0;
        }

        .dot-active {
          background: var(--color-ocean);
          width: 20px;
          border-radius: 3px;
        }
      `}</style>
    </section>
  );
}
