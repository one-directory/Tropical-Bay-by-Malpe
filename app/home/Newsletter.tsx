"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section className="newsletter section-padding bg-cream" aria-labelledby="newsletter-heading">
      <div className="container-narrow">
        <FadeIn className="newsletter-inner">
          <div className="newsletter-text">
            <span className="text-overline newsletter-overline">Stay Connected</span>
            <h2 className="text-h2 newsletter-title" id="newsletter-heading">
              Exclusive Offers, Delivered to You
            </h2>
            <p className="newsletter-desc">
              Subscribe to our letter for early access to seasonal rates, exclusive packages,
              travel inspiration from the Karnataka coast, and invitations to special events at Tropical Bay.
            </p>
          </div>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="newsletter-form"
              aria-label="Newsletter subscription"
              noValidate
            >
              <div className="newsletter-input-wrap">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="newsletter-input input-light"
                  required
                  aria-required="true"
                  disabled={loading}
                />
                <button
                  type="submit"
                  className="btn btn-primary newsletter-btn"
                  disabled={loading || !email.trim()}
                  aria-label="Subscribe to newsletter"
                >
                  {loading ? (
                    <span className="newsletter-spinner" aria-hidden="true" />
                  ) : (
                    <>
                      Subscribe
                      <Send size={14} aria-hidden="true" />
                    </>
                  )}
                </button>
              </div>
              <p className="newsletter-privacy">
                We respect your privacy. Unsubscribe at any time. No spam, ever.
              </p>
            </form>
          ) : (
            <div className="newsletter-success" role="status" aria-live="polite">
              <CheckCircle2 size={32} className="success-icon" aria-hidden="true" />
              <div>
                <p className="success-title">You're on the list!</p>
                <p className="success-desc">
                  Thank you for subscribing. Expect the best of Malpe in your inbox soon.
                </p>
              </div>
            </div>
          )}
        </FadeIn>
      </div>

      <style>{`
        .newsletter {
          border-top: 1px solid rgba(13, 27, 42, 0.07);
          border-bottom: 1px solid rgba(13, 27, 42, 0.07);
        }

        .newsletter-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 2.5rem;
        }

        .newsletter-text {
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
          align-items: center;
        }

        .newsletter-overline { color: var(--color-gold); }

        .newsletter-title {
          color: var(--color-navy);
          margin: 0;
        }

        .newsletter-desc {
          font-size: 1rem;
          line-height: 1.75;
          color: rgba(13, 27, 42, 0.6);
          max-width: 540px;
        }

        .newsletter-form {
          width: 100%;
          max-width: 540px;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          align-items: center;
        }

        .newsletter-input-wrap {
          display: flex;
          gap: 0;
          width: 100%;
          border-radius: 2px;
          overflow: hidden;
          box-shadow: var(--shadow-luxury);
        }

        .newsletter-input {
          flex: 1;
          padding: 0.875rem 1.25rem;
          border: 1px solid rgba(13, 27, 42, 0.12);
          border-right: none;
          border-radius: 0;
          font-size: 0.9rem;
          color: var(--color-navy);
          background: var(--color-white);
          transition: border-color var(--transition-base);
        }

        .newsletter-input:focus {
          outline: none;
          border-color: var(--color-ocean);
        }

        .newsletter-btn {
          flex-shrink: 0;
          border-radius: 0;
          padding: 0.875rem 1.75rem;
        }

        .newsletter-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .newsletter-spinner {
          display: block;
          width: 16px;
          height: 16px;
          border: 2px solid rgba(13, 27, 42, 0.3);
          border-top-color: var(--color-navy);
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .newsletter-privacy {
          font-size: 0.78rem;
          color: rgba(13, 27, 42, 0.4);
        }

        /* Success state */
        .newsletter-success {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.75rem 2rem;
          background: rgba(45, 106, 79, 0.06);
          border: 1px solid rgba(45, 106, 79, 0.2);
          border-radius: 4px;
          max-width: 540px;
          width: 100%;
          text-align: left;
        }

        .success-icon { color: var(--color-palm); flex-shrink: 0; }
        .success-title { font-weight: 600; color: var(--color-navy); margin-bottom: 0.25rem; }
        .success-desc { font-size: 0.875rem; color: rgba(13, 27, 42, 0.6); }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        @media (max-width: 600px) {
          .newsletter-input-wrap {
            flex-direction: column;
            border-radius: 2px;
          }

          .newsletter-input {
            border-right: 1px solid rgba(13, 27, 42, 0.12);
            border-bottom: none;
            border-radius: 0;
          }

          .newsletter-btn {
            padding: 0.875rem;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
