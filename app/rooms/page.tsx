import type { Metadata } from "next";
export const dynamic = 'force-dynamic';

import { rooms } from "@/lib/data/rooms";
import RoomCard from "@/components/ui/RoomCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerReveal";
import FadeIn from "@/components/animations/FadeIn";
import { siteConfig } from "@/lib/data/site";

import { getBreadcrumbSchema, getHotelRoomSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = {
  title: "Suites & Accommodations in Udupi | Tropical Bay by Malpe",
  description:
    "Explore six handcrafted riverside rooms in Udyavara, Udupi — AC rooms, private 2BH villa, stone cottages, and group dormitories near Malpe Beach.",
  alternates: { canonical: `${siteConfig.url}/rooms` },
  openGraph: {
    title: "Suites & Accommodations in Udupi | Tropical Bay by Malpe",
    description:
      "Explore six handcrafted riverside rooms in Udyavara, Udupi — AC rooms, private 2BH villa, stone cottages, and group dormitories near Malpe Beach.",
    url: `${siteConfig.url}/rooms`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/small ac room/small ac main.webp",
        width: 1200,
        height: 630,
        alt: "Rooms & Suites at Tropical Bay by Malpe in Udyavara, Udupi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suites & Accommodations in Udupi | Tropical Bay by Malpe",
    description:
      "Explore six handcrafted riverside rooms in Udyavara, Udupi near Malpe Beach.",
    images: ["/images/small ac room/small ac main.webp"],
  },
};

export default function RoomsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Rooms & Suites", url: `${siteConfig.url}/rooms` },
  ]);

  const roomCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: siteConfig.name,
    url: `${siteConfig.url}/rooms`,
    containsPlace: rooms.map((r) => getHotelRoomSchema(r)),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(roomCatalogSchema) }}
      />

      {/* Hero */}
      <section className="page-hero rooms-hero">
        <div className="page-hero-overlay" aria-hidden="true" />
        <FadeIn className="container-resort page-hero-content">
          <span className="text-overline page-hero-overline">Accommodation</span>
          <h1 className="text-h1 page-hero-title">Suites &amp; Accommodation</h1>
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
              subtitle="From panoramic river balconies to traditional stone cottages and social group dorms, every room at Tropical Bay is crafted to connect you with nature."
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
