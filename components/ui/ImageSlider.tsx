"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageSliderProps {
  images: { src: string; alt: string }[];
  className?: string;
  /** "cover" fills the container (may crop). "natural" renders at full width × natural height, no gaps, no crop. */
  objectFit?: "cover" | "natural";
}

export default function ImageSlider({ images, className = "", objectFit = "cover" }: ImageSliderProps) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() =>
    setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);

  const next = useCallback(() =>
    setCurrent((c) => (c + 1) % images.length), [images.length]);

  if (!images.length) return null;

  /* ── Natural mode: grid-stack so all slides share the same cell.
     The visible image determines the height. No fixed container height needed. ── */
  if (objectFit === "natural") {
    return (
      <div
        className={`slider ${className}`}
        role="region"
        aria-label="Image gallery"
        style={{ position: "relative", width: "100%", overflow: "hidden" }}
      >
        {/* Grid stacking — all slides in cell 1/1, heights collapse to the active image */}
        <div style={{ display: "grid" }}>
          {images.map((img, i) => (
            <div
              key={img.src}
              aria-hidden={i !== current}
              style={{
                gridArea: "1 / 1",
                opacity: i === current ? 1 : 0,
                pointerEvents: i === current ? "auto" : "none",
                transition: "opacity 600ms cubic-bezier(0.4, 0, 0.2, 1)",
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
    );
  }

  /* ── Cover mode (default): fixed-height container, fills edge-to-edge ── */
  return (
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
            style={{
              position: "absolute",
              inset: 0,
              opacity: i === current ? 1 : 0,
              pointerEvents: i === current ? "auto" : "none",
              transition: "opacity 600ms cubic-bezier(0.4, 0, 0.2, 1)",
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
  );
}
