"use client";

import { useState } from "react";
import { X } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";

type GalleryCategory = "All" | "Rooms" | "Dining" | "Pool" | "Beach" | "Exterior";

const categories: GalleryCategory[] = ["All", "Rooms", "Dining", "Pool", "Beach", "Exterior"];

interface GalleryItem {
  id: number;
  gradient: string;
  category: Exclude<GalleryCategory, "All">;
  label: string;
  tall?: boolean;
  wide?: boolean;
}

const galleryItems: GalleryItem[] = [
  { id: 1, gradient: "linear-gradient(135deg, #0A2540 0%, #479694 100%)", category: "Rooms", label: "King Suite — Ocean View", tall: true },
  { id: 2, gradient: "linear-gradient(135deg, #0A2540 0%, #16375a 100%)", category: "Pool", label: "Infinity Pool at Dusk" },
  { id: 3, gradient: "linear-gradient(135deg, #C9A96E 0%, #A6803F 100%)", category: "Dining", label: "The Palm Table — Seafood Night" },
  { id: 4, gradient: "linear-gradient(135deg, #2F6F6D 0%, #479694 100%)", category: "Beach", label: "Malpe Beach at Dawn", wide: true },
  { id: 5, gradient: "linear-gradient(135deg, #103635 0%, #2F6F6D 100%)", category: "Exterior", label: "Resort Gardens" },
  { id: 6, gradient: "linear-gradient(135deg, #06182b 0%, #0A2540 100%)", category: "Rooms", label: "Queen Suite — Balcony" },
  { id: 7, gradient: "linear-gradient(135deg, #A6803F 0%, #C9A96E 100%)", category: "Dining", label: "Breakfast Spread", tall: true },
  { id: 8, gradient: "linear-gradient(135deg, #0A2540 0%, #06182b 100%)", category: "Pool", label: "Poolside Cabana" },
  { id: 9, gradient: "linear-gradient(135deg, #479694 0%, #2F6F6D 100%)", category: "Beach", label: "Sunset at Malpe" },
  { id: 10, gradient: "linear-gradient(135deg, #0A2540 0%, #06182b 100%)", category: "Rooms", label: "Superior Suite — Interior" },
  { id: 11, gradient: "linear-gradient(135deg, #C9A96E 0%, #103635 100%)", category: "Exterior", label: "Resort Facade — Night", wide: true },
  { id: 12, gradient: "linear-gradient(135deg, #16375a 0%, #0A2540 100%)", category: "Dining", label: "Evening Dining" },
];

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((g) => g.category === activeCategory);

  const openLightbox = (item: GalleryItem) => setLightboxItem(item);
  const closeLightbox = () => setLightboxItem(null);

  return (
    <>
      <FadeIn>
        <SectionHeading
          overline="Visual Journey"
          title="Life at Tropical Bay"
          subtitle="From the first light of dawn to candlelit evenings on the beach — every corner of Tropical Bay by Malpe is worth a photograph."
          id="gallery-heading"
        />
      </FadeIn>

      {/* Filter Tabs */}
      <div className="gallery-filters" role="tablist" aria-label="Gallery categories">
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={activeCategory === cat}
            className={`gallery-filter-btn ${activeCategory === cat ? "filter-active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="gallery-masonry" aria-label="Photo gallery" role="list">
        {filtered.map((item) => (
          <div
            key={item.id}
            className={`gallery-cell ${item.tall ? "gallery-tall" : ""} ${item.wide ? "gallery-wide" : ""}`}
            role="listitem"
          >
            <button
              className="gallery-cell-btn"
              onClick={() => openLightbox(item)}
              aria-label={`View ${item.label}`}
            >
              <div className="gallery-cell-bg" style={{ background: item.gradient }} aria-hidden="true" />
              <div className="gallery-cell-overlay" aria-hidden="true">
                <span className="gallery-cell-label">{item.label}</span>
                <span className="gallery-cell-cat">{item.category}</span>
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxItem && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Viewing: ${lightboxItem.label}`}
          onClick={closeLightbox}
        >
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={20} />
          </button>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="lightbox-image"
              style={{ background: lightboxItem.gradient }}
              aria-hidden="true"
            />
            <div className="lightbox-info">
              <span className="lightbox-cat">{lightboxItem.category}</span>
              <h2 className="lightbox-title">{lightboxItem.label}</h2>
            </div>
          </div>
        </div>
      )}

      <style>{`
        /* Filters */
        .gallery-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 3rem;
          margin-bottom: 2.5rem;
        }

        .gallery-filter-btn {
          padding: 0.5rem 1.25rem;
          border: 1px solid rgba(13, 27, 42, 0.12);
          border-radius: 2px;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          color: rgba(13, 27, 42, 0.65);
          background: var(--color-white);
          cursor: pointer;
          transition: all var(--transition-base);
        }

        .gallery-filter-btn:hover {
          border-color: var(--color-ocean);
          color: var(--color-ocean);
        }

        .filter-active {
          background: var(--color-navy);
          border-color: var(--color-navy);
          color: var(--color-white);
        }

        /* Masonry */
        .gallery-masonry {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 200px;
          gap: 0.75rem;
        }

        @media (max-width: 1200px) {
          .gallery-masonry { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 768px) {
          .gallery-masonry { grid-template-columns: repeat(2, 1fr); }
          .gallery-tall, .gallery-wide { grid-row: span 1; grid-column: span 1; }
        }

        @media (max-width: 480px) {
          .gallery-masonry { grid-template-columns: 1fr; }
        }

        .gallery-cell { border-radius: 4px; overflow: hidden; }
        .gallery-tall { grid-row: span 2; }
        .gallery-wide { grid-column: span 2; }

        .gallery-cell-btn {
          position: relative;
          width: 100%;
          height: 100%;
          border: none;
          padding: 0;
          cursor: pointer;
          display: block;
          background: none;
          overflow: hidden;
        }

        .gallery-cell-bg {
          width: 100%;
          height: 100%;
          min-height: 200px;
          transition: transform var(--transition-smooth);
        }

        .gallery-cell-btn:hover .gallery-cell-bg { transform: scale(1.05); }

        .gallery-cell-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(13, 27, 42, 0.75) 0%, transparent 50%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1rem 1.25rem;
          opacity: 0;
          transition: opacity var(--transition-smooth);
        }

        .gallery-cell-btn:hover .gallery-cell-overlay { opacity: 1; }

        .gallery-cell-label {
          font-family: var(--font-serif);
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--color-white);
          display: block;
          margin-bottom: 0.25rem;
        }

        .gallery-cell-cat {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-gold-light);
        }

        /* Lightbox */
        .lightbox {
          position: fixed;
          inset: 0;
          z-index: 300;
          background: rgba(13, 27, 42, 0.92);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          animation: fadeIn 200ms ease;
        }

        .lightbox-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          width: 2.75rem;
          height: 2.75rem;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: var(--color-white);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background var(--transition-base);
        }

        .lightbox-close:hover { background: rgba(255, 255, 255, 0.2); }

        .lightbox-content {
          max-width: 900px;
          width: 100%;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.5);
        }

        .lightbox-image {
          width: 100%;
          height: 500px;
        }

        .lightbox-info {
          background: var(--color-navy-mid);
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .lightbox-cat {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-gold);
          padding: 0.25rem 0.625rem;
          background: rgba(201, 168, 76, 0.1);
          border: 1px solid rgba(201, 168, 76, 0.2);
          border-radius: 2px;
          flex-shrink: 0;
        }

        .lightbox-title {
          font-family: var(--font-serif);
          font-size: 1.05rem;
          font-weight: 500;
          color: var(--color-white);
          margin: 0;
        }

        @media (max-width: 640px) {
          .lightbox-image { height: 300px; }
        }
      `}</style>
    </>
  );
}
