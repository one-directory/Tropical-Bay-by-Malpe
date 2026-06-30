import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

const galleryItems = [
  { gradient: "linear-gradient(135deg, #0A2540 0%, #06182b 100%)", span: "tall", label: "Pool & Terrace" },
  { gradient: "linear-gradient(135deg, #2F6F6D 0%, #103635 100%)", span: "normal", label: "Garden Suite" },
  { gradient: "linear-gradient(135deg, #C9A96E 0%, #A6803F 100%)", span: "normal", label: "Dining Experience" },
  { gradient: "linear-gradient(135deg, #0A2540 0%, #16375a 100%)", span: "wide", label: "Malpe Beach" },
  { gradient: "linear-gradient(135deg, #2F6F6D 0%, #0A2540 100%)", span: "normal", label: "King Suite" },
  { gradient: "linear-gradient(135deg, #F5F1E8 0%, #E6DFC8 100%)", span: "normal", label: "Breakfast Spread" },
];

export default function GalleryPreview() {
  return (
    <section className="gallery-preview section-padding-lg bg-off-white" aria-labelledby="gallery-heading">
      <div className="container-resort">
        <FadeIn>
          <div className="gallery-header">
            <SectionHeading
              overline="Photo Gallery"
              title="See Tropical Bay Come Alive"
              subtitle="From dawn light over the ocean to candlelit evenings on the beach — every frame tells a different story of life at Malpe."
              id="gallery-heading"
            />
            <Link href="/gallery" className="btn btn-secondary gallery-link">
              Full Gallery
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </FadeIn>

        <div className="gallery-mosaic" aria-label="Gallery preview images">
          {galleryItems.map((item, i) => (
            <FadeIn key={i} delay={0.07 * i}>
              <Link
                href="/gallery"
                className={`gallery-item gallery-${item.span}`}
                aria-label={`View ${item.label} in gallery`}
              >
                <div
                  className="gallery-img"
                  style={{ background: item.gradient }}
                  aria-hidden="true"
                />
                <div className="gallery-item-overlay" aria-hidden="true">
                  <span className="gallery-item-label">{item.label}</span>
                  <span className="gallery-view-link">
                    View Gallery <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>

      
    </section>
  );
}
