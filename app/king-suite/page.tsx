import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRoomBySlug, getRelatedRooms } from "@/lib/data/rooms";
import RoomPageTemplate from "@/components/ui/RoomPageTemplate";
import { siteConfig } from "@/lib/data/site";

const slug = "king-suite";

export const metadata: Metadata = {
  title: "King Suite",
  description: "Our flagship King Suite at Tropical Bay by Malpe — 72 sq m of direct ocean-view luxury with a private terrace, clawfoot soaking tub, butler service, and panoramic views of the Arabian Sea.",
  alternates: { canonical: `${siteConfig.url}/${slug}` },
  openGraph: {
    title: "King Suite | Tropical Bay by Malpe",
    description: "The pinnacle of beachfront luxury on the Karnataka coast.",
    url: `${siteConfig.url}/${slug}`,
  },
};

export default function KingSuitePage() {
  const room = getRoomBySlug(slug);
  if (!room) notFound();

  const relatedRooms = getRelatedRooms(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    name: room.name,
    description: room.description,
    url: `${siteConfig.url}/${slug}`,
    occupancy: { "@type": "QuantitativeValue", maxValue: room.occupancy },
    floorSize: { "@type": "QuantitativeValue", value: room.size },
    amenityFeature: room.amenities.map((a) => ({
      "@type": "LocationFeatureSpecification",
      name: a,
      value: true,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RoomPageTemplate room={room} relatedRooms={relatedRooms} />
    </>
  );
}
