import type { Metadata } from "next";
import { rooms } from "@/lib/data/rooms";
import RoomCard from "@/components/ui/RoomCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerReveal";
import FadeIn from "@/components/animations/FadeIn";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Rooms & Suites",
  description: "Explore our six handcrafted riverside accommodations at Tropical Bay — including cozy AC rooms, private villas, heritage stone cottages, and group dormitories near Udupi.",
  alternates: { canonical: `${siteConfig.url}/rooms` },
  openGraph: {
    title: "Rooms & Suites | Tropical Bay",
    description: "Six curated nature-inspired spaces on the riverbanks of Malpe, Udupi.",
    url: `${siteConfig.url}/rooms`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Tropical Bay Udupi",
  url: siteConfig.url,
  containsPlace: rooms.map((r) => ({
    "@type": "HotelRoom",
    name: r.name,
    description: r.description,
    occupancy: { "@type": "QuantitativeValue", maxValue: r.occupancy },
    floorSize: { "@type": "QuantitativeValue", value: r.size },
    priceRange: `₹${r.pricePerNight.toLocaleString("en-IN")}+/night`,
  })),
};

export default function RoomsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="page-hero rooms-hero">
        <div className="page-hero-overlay" aria-hidden="true" />
        <FadeIn className="container-resort page-hero-content">
          <span className="text-overline page-hero-overline">Accommodation</span>
          <h1 className="text-h1 page-hero-title">Suites & Accommodation</h1>
          <p className="page-hero-desc">
            Six distinct sanctuaries, each shaped by the quiet character of the river.
            Choose the space that speaks to your sense of escape.
          </p>
        </FadeIn>
      </section>

      {/* Rooms Grid */}
      <section className="section-padding-lg bg-off-white" aria-labelledby="all-rooms-heading">
        <div className="container-resort">
          <FadeIn>
            <SectionHeading
              overline="Our Collection"
              title="Choose Your Sanctuary"
              subtitle="From panoramic river balconies to traditional stone cottages and social social group dorms, every room at Tropical Bay is crafted to connect you with nature."
              id="all-rooms-heading"
            />
          </FadeIn>

          <StaggerContainer className="rooms-page-grid">
            {rooms.map((room, i) => (
              <StaggerItem key={room.id}>
                <RoomCard room={room} priority={i === 0} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      
    </>
  );
}
