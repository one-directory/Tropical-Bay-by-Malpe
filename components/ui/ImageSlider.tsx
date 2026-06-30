"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageSliderProps {
  images: { src: string; alt: string }[];
  className?: string;
}

export default function ImageSlider({ images, className = "" }: ImageSliderProps) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() =>
    setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);

  const next = useCallback(() =>
    setCurrent((c) => (c + 1) % images.length), [images.length]);

  if (!images.length) return null;

  return (
    <div className={`slider ${className}`} role="region" aria-label="Image gallery">
      <div className="slider-track">
        {images.map((img, i) => (
          <div
            key={img.src}
            className={`slide ${i === current ? "slide-active" : ""}`}
            aria-hidden={i !== current}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              className="slide-img"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="slider-btn slider-btn-prev"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="slider-btn slider-btn-next"
            aria-label="Next image"
          >
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

      <style>{`
        .slider {
          position: relative;
          overflow: hidden;
          border-radius: 4px;
        }

        .slider-track {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 600ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .slide-active {
          opacity: 1;
          position: relative;
        }

        .slide-img {
          object-fit: cover;
        }

        .slider-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 2.75rem;
          height: 2.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(13, 27, 42, 0.55);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 50%;
          color: var(--color-white);
          transition: background var(--transition-base), transform var(--transition-spring);
          cursor: pointer;
        }

        .slider-btn:hover {
          background: rgba(13, 27, 42, 0.85);
          transform: translateY(-50%) scale(1.05);
        }

        .slider-btn-prev { left: 1rem; }
        .slider-btn-next { right: 1rem; }

        .slider-dots {
          position: absolute;
          bottom: 1.25rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.5rem;
          z-index: 10;
        }

        .slider-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.45);
          transition: background var(--transition-base), width var(--transition-base);
          cursor: pointer;
          border: none;
          padding: 0;
        }

        .dot-active {
          background: var(--color-white);
          width: 20px;
          border-radius: 3px;
        }

        .slider-counter {
          position: absolute;
          top: 1rem;
          right: 1rem;
          padding: 0.25rem 0.625rem;
          background: rgba(13, 27, 42, 0.55);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-radius: 2px;
          font-size: 0.75rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
          letter-spacing: 0.05em;
          z-index: 10;
        }
      `}</style>
    </div>
  );
}
