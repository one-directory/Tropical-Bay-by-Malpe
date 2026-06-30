import type { Metadata } from "next";
import { rooms } from "@/lib/data/rooms";
import RoomCard from "@/components/ui/RoomCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerReveal";
import FadeIn from "@/components/animations/FadeIn";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Rooms & Suites",
  description: "Explore our three handcrafted suites at Tropical Bay by Malpe — King, Queen, and Superior Suite. Each offers a unique blend of coastal luxury and personal comfort.",
  alternates: { canonical: `${siteConfig.url}/rooms` },
  openGraph: {
    title: "Rooms & Suites | Tropical Bay by Malpe",
    description: "Three curated suites on the shores of Malpe Beach, Karnataka.",
    url: `${siteConfig.url}/rooms`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Tropical Bay by Malpe",
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
            Three distinct sanctuaries, each shaped by the character of the Malpe coast.
            Choose the suite that speaks to your sense of escape.
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
              subtitle="From panoramic ocean suites to intimate garden retreats, every room at Tropical Bay is a world unto itself — crafted with care and rooted in the spirit of coastal Karnataka."
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
