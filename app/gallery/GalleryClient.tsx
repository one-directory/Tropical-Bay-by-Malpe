"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";

type GalleryCategory = "All" | "Rooms" | "Dining" | "Riverside" | "Beach" | "Exterior";

const categories: GalleryCategory[] = ["All", "Rooms", "Dining", "Riverside", "Beach", "Exterior"];

interface GalleryItem {
  id: number;
  src: string;
  category: Exclude<GalleryCategory, "All">;
  label: string;
  tall?: boolean;
  wide?: boolean;
}

const galleryItems: GalleryItem[] = [
  // First Floor — Rooms
  { id: 1,  src: "/images/first floor/1st floor 1.webp",   category: "Rooms",     label: "First Floor — River View",       tall: true },
  { id: 2,  src: "/images/first floor/1st floor 5.webp",   category: "Rooms",     label: "First Floor — Sunset Balcony",   wide: true },
  { id: 3,  src: "/images/first floor/1st floor 2.webp",   category: "Rooms",     label: "First Floor — Interior" },
  { id: 4,  src: "/images/first floor/1st floor 3.webp",   category: "Rooms",     label: "First Floor — Room Detail" },
  { id: 5,  src: "/images/first floor/1st floor 4.webp",   category: "Rooms",     label: "First Floor — Riverside Side" },
  { id: 6,  src: "/images/first floor/1st floor 6.webp",   category: "Riverside", label: "Riverside Deck at Dusk",         wide: true },
  { id: 7,  src: "/images/first floor/1st floor 7.webp",   category: "Riverside", label: "River View Lounge" },
  { id: 8,  src: "/images/first floor/1st floor 8.webp",   category: "Rooms",     label: "First Floor — Cozy Corner",      tall: true },
  { id: 9,  src: "/images/first floor/1st floor main.webp",category: "Exterior",  label: "First Floor — Exterior Night" },
  // Gulum Cottage
  { id: 10, src: "/images/gulum/gulum main.webp",          category: "Rooms",     label: "Gulum Cottage — Porch",          tall: true },
  { id: 11, src: "/images/gulum/gulum 1.webp",             category: "Exterior",  label: "Gulum — Riverside Gardens" },
  { id: 12, src: "/images/gulum/gulum 2.webp",             category: "Rooms",     label: "Gulum — Interior" },
  // Dorm
  { id: 13, src: "/images/dorm/dorm main.webp",            category: "Rooms",     label: "Riverside Dormitory" },
  { id: 14, src: "/images/dorm/dorm 1.webp",               category: "Rooms",     label: "Dorm — Bunk Beds" },
  // Small AC Room
  { id: 15, src: "/images/small ac room/small ac main.webp", category: "Rooms",   label: "Small AC Room",                  wide: true },
  { id: 16, src: "/images/small ac room/small ac 2.webp",  category: "Rooms",     label: "Small AC — Interior" },
  // Large AC Room
  { id: 17, src: "/images/large ac room/large ac main.webp",category: "Rooms",    label: "Large AC Room",                  tall: true },
  { id: 18, src: "/images/large ac room/large ac 1.webp",  category: "Rooms",     label: "Large AC — River View" },
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
              <Image
                src={item.src}
                alt={item.label}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="gallery-cell-img"
              />
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
            <div className="lightbox-image-wrap">
              <Image
                src={lightboxItem.src}
                alt={lightboxItem.label}
                fill
                sizes="(max-width: 640px) 100vw, 900px"
                className="lightbox-img"
              />
            </div>
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
          border-color: var(--color-accent);
          color: var(--color-accent);
        }

        .filter-active {
          background: var(--color-primary);
          border-color: var(--color-primary);
          color: var(--color-background);
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

        .gallery-cell-img {
          object-fit: cover;
          transition: transform var(--transition-smooth);
        }

        .gallery-cell-btn:hover .gallery-cell-img { transform: scale(1.05); }

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

        .lightbox-image-wrap {
          position: relative;
          width: 100%;
          height: 500px;
        }

        .lightbox-img {
          object-fit: cover;
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
          .lightbox-image-wrap { height: 300px; }
        }
      `}</style>
    </>
  );
}
