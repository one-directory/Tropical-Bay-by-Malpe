import type { Room } from "@/lib/types";
import ImageSlider from "@/components/ui/ImageSlider";
import RoomCard from "@/components/ui/RoomCard";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerReveal";
import {
  Maximize2, BedDouble, Users, Check, Star,
} from "lucide-react";

interface RoomPageTemplateProps {
  room: Room;
  relatedRooms: Room[];
}

export default function RoomPageTemplate({ room, relatedRooms }: RoomPageTemplateProps) {
  const sliderImages = room.images.map((src, i) => ({
    src,
    alt: `${room.name} at Tropical Bay by Malpe — view ${i + 1}`,
  }));

  return (
    <>
      {/* Room Gallery Hero */}
      <section className="room-gallery-hero" aria-label={`${room.name} gallery`}>
        <ImageSlider images={sliderImages} className="room-slider" />
        <div className="room-hero-badge">
          <span className="text-overline">From ₹{room.pricePerNight.toLocaleString("en-IN")} / night</span>
        </div>
      </section>

      {/* Room Detail */}
      <section className="room-detail-section bg-off-white" aria-labelledby="room-detail-heading">
        <div className="container-resort room-detail-grid">
          <div className="room-detail-left">
            <FadeIn>
              <div className="room-specs-bar">
                <div className="room-spec-item">
                  <Maximize2 size={14} aria-hidden="true" />
                  <span>{room.size}</span>
                </div>
                <div className="room-spec-sep" aria-hidden="true" />
                <div className="room-spec-item">
                  <BedDouble size={14} aria-hidden="true" />
                  <span>{room.beds}</span>
                </div>
                <div className="room-spec-sep" aria-hidden="true" />
                <div className="room-spec-item">
                  <Users size={14} aria-hidden="true" />
                  <span>Up to {room.occupancy} guests</span>
                </div>

              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <SectionHeading
                overline={room.tagline}
                title={room.name}
                id="room-detail-heading"
              />
              <p className="room-description">{room.description}</p>
            </FadeIn>

            {/* Highlights */}
            <FadeIn delay={0.15}>
              <div className="room-highlights">
                {room.highlights.map((h) => (
                  <div key={h} className="highlight-chip">
                    <Star size={11} className="highlight-star" aria-hidden="true" />
                    {h}
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Features */}
            <FadeIn delay={0.2}>
              <div className="room-section">
                <h2 className="room-section-title">Suite Features</h2>
                <ul className="room-features-list" aria-label="Suite features">
                  {room.features.map((f) => (
                    <li key={f} className="room-feature-item">
                      <Check size={14} className="feature-check" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Amenities */}
            <FadeIn delay={0.25}>
              <div className="room-section">
                <h2 className="room-section-title">In-Suite Amenities</h2>
                <div className="room-amenities-grid">
                  {room.amenities.map((a) => (
                    <div key={a} className="room-amenity-item">
                      <span className="amenity-dot" aria-hidden="true" />
                      {a}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Related Rooms */}
      {relatedRooms.length > 0 && (
        <section className="section-padding bg-cream" aria-labelledby="related-rooms-heading">
          <div className="container-resort">
            <FadeIn>
              <SectionHeading
                overline="Explore More"
                title="Other Suites You May Love"
                id="related-rooms-heading"
              />
            </FadeIn>
            <StaggerContainer className="related-rooms-grid">
              {relatedRooms.map((r) => (
                <StaggerItem key={r.id}>
                  <RoomCard room={r} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      
    </>
  );
}
