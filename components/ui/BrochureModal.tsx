"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/data/site";
import { FileText, Download, Eye, X, BookOpen } from "lucide-react";

export default function BrochureModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Show brochure modal on page visit / refresh after 1.2s delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="brochure-modal-overlay"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="brochure-modal-title"
        >
          <div
            className="brochure-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="brochure-modal-close"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="brochure-badge">
              <FileText size={24} />
            </div>

            <h2 id="brochure-modal-title" className="brochure-modal-title">
              Tropical Bay by Malpe
            </h2>
            <p className="brochure-modal-subtitle">
              Official Resort Brochure
            </p>

            <p className="brochure-modal-desc">
              Explore our boutique riverside sanctuaries, stone cottages, backwater activities, and coastal dining options.
            </p>

            <div className="brochure-modal-actions">
              <a
                href={siteConfig.brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="brochure-btn brochure-btn-primary"
                onClick={() => setIsOpen(false)}
              >
                <Eye size={16} />
                <span>View Brochure</span>
              </a>

              <a
                href={siteConfig.brochureUrl}
                download="Tropical-Bay-by-Malpe-Brochure.pdf"
                className="brochure-btn brochure-btn-secondary"
                onClick={() => setIsOpen(false)}
              >
                <Download size={16} />
                <span>Download PDF</span>
              </a>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="brochure-skip-btn"
            >
              Continue Browsing Website
            </button>
          </div>
        </div>
      )}

      <style jsx global>{`
        .brochure-float-btn {
          position: fixed;
          bottom: 1.75rem;
          left: 1.75rem;
          z-index: 89;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.65rem 1.1rem;
          border-radius: 9999px;
          background: rgba(15, 23, 42, 0.88);
          color: #ffffff;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
          font-family: var(--font-jakarta), sans-serif;
          font-size: 0.825rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 250ms ease, background 250ms ease, box-shadow 250ms ease;
        }

        .brochure-float-btn:hover {
          transform: translateY(-2px);
          background: #0f172a;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
        }

        .brochure-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.25rem;
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          animation: brochureFadeIn 280ms ease forwards;
        }

        .brochure-modal-card {
          position: relative;
          width: 100%;
          max-width: 440px;
          padding: 2.25rem 2rem 2rem;
          border-radius: 20px;
          background: #ffffff;
          box-shadow: 0 24px 60px rgba(15, 23, 42, 0.35);
          text-align: center;
          animation: brochureSlideUp 320ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .brochure-modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.25rem;
          height: 2.25rem;
          border-radius: 50%;
          border: none;
          background: rgba(15, 23, 42, 0.05);
          color: #475569;
          cursor: pointer;
          transition: background 200ms ease, color 200ms ease;
        }

        .brochure-modal-close:hover {
          background: rgba(15, 23, 42, 0.1);
          color: #0f172a;
        }

        .brochure-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 3.5rem;
          height: 3.5rem;
          margin-bottom: 1rem;
          border-radius: 16px;
          background: rgba(16, 185, 129, 0.12);
          color: #059669;
        }

        .brochure-modal-title {
          font-family: var(--font-cormorant), serif;
          font-size: 1.75rem;
          font-weight: 600;
          color: #0f172a;
          margin: 0 0 0.25rem;
          line-height: 1.2;
        }

        .brochure-modal-subtitle {
          font-family: var(--font-jakarta), sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #059669;
          margin: 0 0 0.85rem;
        }

        .brochure-modal-desc {
          font-family: var(--font-jakarta), sans-serif;
          font-size: 0.9rem;
          line-height: 1.55;
          color: #475569;
          margin: 0 0 1.75rem;
        }

        .brochure-modal-actions {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .brochure-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
          padding: 0.85rem 1.25rem;
          border-radius: 12px;
          font-family: var(--font-jakarta), sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          transition: transform 200ms ease, box-shadow 200ms ease, background 200ms ease;
        }

        .brochure-btn-primary {
          background: #0f172a;
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.25);
        }

        .brochure-btn-primary:hover {
          background: #1e293b;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(15, 23, 42, 0.35);
        }

        .brochure-btn-secondary {
          background: #f1f5f9;
          color: #0f172a;
          border: 1px solid rgba(15, 23, 42, 0.08);
        }

        .brochure-btn-secondary:hover {
          background: #e2e8f0;
          transform: translateY(-1px);
        }

        .brochure-skip-btn {
          background: none;
          border: none;
          color: #64748b;
          font-family: var(--font-jakarta), sans-serif;
          font-size: 0.8rem;
          font-weight: 500;
          cursor: pointer;
          padding: 0.4rem;
          transition: color 200ms ease;
        }

        .brochure-skip-btn:hover {
          color: #0f172a;
          text-decoration: underline;
        }

        @keyframes brochureFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes brochureSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 640px) {
          .brochure-float-btn {
            bottom: 1.25rem;
            left: 1.25rem;
            padding: 0.55rem 0.95rem;
            font-size: 0.775rem;
          }
          .brochure-float-text {
            display: inline;
          }
        }
      `}</style>
    </>
  );
}
