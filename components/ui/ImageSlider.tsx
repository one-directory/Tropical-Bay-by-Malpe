"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImageSliderProps {
  images: { src: string; alt: string }[];
  className?: string;
  /** "cover" fills the container (may crop). "natural" renders at full width × natural height, no gaps, no crop. */
  objectFit?: "cover" | "natural";
}

export default function ImageSlider({ images, className = "", objectFit = "cover" }: ImageSliderProps) {
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prev = useCallback(() =>
    setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);

  const next = useCallback(() =>
    setCurrent((c) => (c + 1) % images.length), [images.length]);

  // Keyboard navigation & body scroll locking for Lightbox
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [lightboxOpen, prev, next]);

  if (!images.length) return null;

  return (
    <>
      {/* ── Natural mode: grid-stack so all slides share the same cell ── */}
      {objectFit === "natural" ? (
        <div
          className={`slider ${className}`}
          role="region"
          aria-label="Image gallery"
          style={{ position: "relative", width: "100%", overflow: "hidden" }}
        >
          {/* Grid stacking — collapse heights to active image */}
          <div style={{ display: "grid" }}>
            {images.map((img, i) => (
              <div
                key={img.src}
                aria-hidden={i !== current}
                onClick={() => setLightboxOpen(true)}
                style={{
                  gridArea: "1 / 1",
                  opacity: i === current ? 1 : 0,
                  pointerEvents: i === current ? "auto" : "none",
                  transition: "opacity 600ms cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "zoom-in",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto", display: "block" }}
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          {images.length > 1 && (
            <>
              <button onClick={prev} className="slider-btn slider-btn-prev" aria-label="Previous image">
                <ChevronLeft size={20} />
              </button>
              <button onClick={next} className="slider-btn slider-btn-next" aria-label="Next image">
                <ChevronRight size={20} />
              </button>

              <div className="slider-dots" role="tablist" aria-label="Image navigation">
                {images.map((_, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={i === current}
                    aria-label={`Go to image ${i + 1}`}
                    className={`slider-dot ${i === current ? "dot-active" : ""}`}
                    onClick={() => setCurrent(i)}
                  />
                ))}
              </div>

              <div className="slider-counter" aria-live="polite" aria-atomic="true">
                {current + 1} / {images.length}
              </div>
            </>
          )}
        </div>
      ) : (
        /* ── Cover mode (default): fixed-height container, fills edge-to-edge ── */
        <div
          className={`slider ${className}`}
          role="region"
          aria-label="Image gallery"
          style={{ position: "relative", width: "100%", overflow: "hidden", borderRadius: "4px" }}
        >
          <div
            className="slider-track"
            style={{ position: "relative", width: "100%", height: "100%" }}
          >
            {images.map((img, i) => (
              <div
                key={img.src}
                aria-hidden={i !== current}
                onClick={() => setLightboxOpen(true)}
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity: i === current ? 1 : 0,
                  pointerEvents: i === current ? "auto" : "none",
                  transition: "opacity 600ms cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "zoom-in",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  style={{ objectFit: "cover" }}
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          {images.length > 1 && (
            <>
              <button onClick={prev} className="slider-btn slider-btn-prev" aria-label="Previous image">
                <ChevronLeft size={20} />
              </button>
              <button onClick={next} className="slider-btn slider-btn-next" aria-label="Next image">
                <ChevronRight size={20} />
              </button>

              <div className="slider-dots" role="tablist" aria-label="Image navigation">
                {images.map((_, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={i === current}
                    aria-label={`Go to image ${i + 1}`}
                    className={`slider-dot ${i === current ? "dot-active" : ""}`}
                    onClick={() => setCurrent(i)}
                  />
                ))}
              </div>

              <div className="slider-counter" aria-live="polite" aria-atomic="true">
                {current + 1} / {images.length}
              </div>
            </>
          )}
        </div>
      )}

      {/* ── Immersive Lightbox Modal ── */}
      {lightboxOpen && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Image Viewer"
        >
          <button
            className="lightbox-close"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxOpen(false);
            }}
            aria-label="Close image viewer"
          >
            <X size={22} />
          </button>

          {images.length > 1 && (
            <>
              <button
                className="lightbox-nav-btn lightbox-btn-prev"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Previous image"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                className="lightbox-nav-btn lightbox-btn-next"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Next image"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[current].src}
              alt={images[current].alt}
              className="lightbox-img"
            />
            <p className="lightbox-caption">{images[current].alt}</p>
            <span className="lightbox-counter">
              {current + 1} / {images.length}
            </span>
          </div>
        </div>
      )}

      <style>{`
        .lightbox-overlay {
          position: fixed;
          inset: 0;
          background: rgba(10, 23, 27, 0.96);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: lightbox-fade 250ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes lightbox-fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .lightbox-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #fff;
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 250ms ease, transform 250ms ease;
          z-index: 10001;
        }

        .lightbox-close:hover {
          background: rgba(255, 255, 255, 0.16);
          transform: scale(1.05);
        }

        .lightbox-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 250ms ease, transform 250ms ease;
          z-index: 10000;
        }

        .lightbox-nav-btn:hover {
          background: rgba(255, 255, 255, 0.14);
          transform: translateY(-50%) scale(1.05);
        }

        .lightbox-btn-prev {
          left: 2rem;
        }

        .lightbox-btn-next {
          right: 2rem;
        }

        .lightbox-content {
          position: relative;
          max-width: 85vw;
          max-height: 80vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
        }

        .lightbox-img {
          max-width: 100%;
          max-height: 70vh;
          object-fit: contain;
          border-radius: 4px;
          box-shadow: 0 20px 80px rgba(0, 0, 0, 0.6);
          animation: lightbox-zoom 350ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes lightbox-zoom {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .lightbox-caption {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.7);
          text-align: center;
          letter-spacing: 0.02em;
          margin: 0;
          max-width: 600px;
        }

        .lightbox-counter {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.4);
          background: rgba(255, 255, 255, 0.04);
          padding: 0.25rem 0.65rem;
          border-radius: 12px;
        }

        @media (max-width: 768px) {
          .lightbox-nav-btn {
            width: 2.75rem;
            height: 2.75rem;
          }
          .lightbox-btn-prev {
            left: 0.75rem;
          }
          .lightbox-btn-next {
            right: 0.75rem;
          }
          .lightbox-close {
            top: 1rem;
            right: 1rem;
            width: 2.5rem;
            height: 2.5rem;
          }
          .lightbox-content {
            max-width: 90vw;
          }
          .lightbox-img {
            max-height: 60vh;
          }
        }
      `}</style>
    </>
  );
}
