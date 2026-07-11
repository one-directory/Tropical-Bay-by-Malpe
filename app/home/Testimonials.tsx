"use client";

import { useState, useEffect } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data/testimonials";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  // Auto-play interval that resets if current or total changes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 4000); // changes every 4 seconds
    return () => clearInterval(timer);
  }, [current, total]);

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
              <FadeIn 
                key={t.id} 
                delay={i * 0.1}
                className={i !== 1 ? "testimonial-secondary-wrapper" : ""}
              >
                <article
                  className={`testimonial-card ${i === 1 ? "testimonial-featured" : "testimonial-secondary"}`}
                  aria-label={`Review by ${t.name}`}
                >
                  <div className="testimonial-header">
                    <div className="stars" aria-label={`Rating: ${t.rating} out of 5`}>
                      {Array.from({ length: t.rating }).map((_, s) => (
                        <Star key={s} size={14} fill="currentColor" aria-hidden="true" />
                      ))}
                    </div>
                    {t.platform && (
                      <div className="platform-badge-container">
                        {t.platform === "google" ? (
                          <div className="platform-badge platform-google" title="Reviewed on Google">
                            <svg viewBox="0 0 24 24" width="11" height="11" style={{ marginRight: "3px", flexShrink: 0 }}>
                              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            <span style={{ color: "#3c4043", fontWeight: 600 }}>Google</span>
                          </div>
                        ) : t.platform === "booking" ? (
                          <div className="platform-badge platform-booking" title="Reviewed on Booking.com">
                            <span className="booking-icon-b" style={{
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              background: "#003580",
                              color: "#fff",
                              fontWeight: "bold",
                              fontSize: "0.55rem",
                              width: "11px",
                              height: "11px",
                              borderRadius: "1px",
                              marginRight: "3px",
                              lineHeight: "1",
                              flexShrink: 0
                            }}>B.</span>
                            <span style={{ color: "#003580", fontWeight: 800 }}>Booking.com</span>
                          </div>
                        ) : (
                          <div className="platform-badge platform-agoda" title="Reviewed on Agoda">
                            <span className="agoda-dots" style={{
                              display: "inline-flex",
                              gap: "2px",
                              marginRight: "4px",
                              alignItems: "center",
                              flexShrink: 0
                            }}>
                              <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#F9AD3C" }} />
                              <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#E23744" }} />
                              <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#4EA9E6" }} />
                              <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#5FB647" }} />
                            </span>
                            <span style={{ color: "#222222", fontWeight: 800 }}>agoda</span>
                          </div>
                        )}
                      </div>
                    )}
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
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          align-items: stretch;
        }

        @media (max-width: 1024px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }

          .testimonial-secondary,
          .testimonial-secondary-wrapper {
            display: none !important;
          }
        }

        @media (max-width: 768px) {
          .testimonials-carousel {
            margin-top: 2rem;
            gap: 1.75rem;
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }

        .testimonial-card {
          background: var(--color-white);
          padding: 1.75rem;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
          height: 100%;
          box-shadow: var(--shadow-luxury);
          transition: transform var(--transition-smooth), box-shadow var(--transition-smooth);
        }

        .testimonial-featured {
          background: var(--color-navy);
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

        .testimonial-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          gap: 0.5rem;
        }

        .platform-badge-container {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex-shrink: 0;
        }

        .platform-badge {
          display: inline-flex;
          align-items: center;
          background: #ffffff;
          border: 1px solid rgba(22, 38, 43, 0.12);
          padding: 0.2rem 0.5rem;
          border-radius: 99px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.05);
          font-family: var(--font-sans);
          font-size: 0.65rem;
          letter-spacing: 0.01em;
          text-transform: none;
        }

        .platform-booking {
          border-color: rgba(0, 53, 128, 0.18);
        }

        .platform-google {
          border-color: rgba(66, 133, 244, 0.18);
        }

        .platform-agoda {
          border-color: rgba(249, 173, 60, 0.22);
        }

        .testimonial-secondary {
          opacity: 0.72;
        }

        .stars { color: var(--color-gold); }

        .review-text {
          font-family: var(--font-serif);
          font-size: 0.9rem;
          font-style: italic;
          line-height: 1.65;
          color: rgba(13, 27, 42, 0.75);
          flex: 1;
          margin: 0;
          height: 9rem;
          overflow-y: auto;
          padding-right: 0.35rem;
        }

        /* Custom scrollbar for review text */
        .review-text::-webkit-scrollbar {
          width: 4px;
        }
        .review-text::-webkit-scrollbar-track {
          background: rgba(13, 27, 42, 0.02);
        }
        .review-text::-webkit-scrollbar-thumb {
          background: rgba(13, 27, 42, 0.12);
          border-radius: 99px;
        }
        .testimonial-featured .review-text::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.25);
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
          background: var(--color-accent);
          width: 20px;
          border-radius: 3px;
        }
      `}</style>
    </section>
  );
}
