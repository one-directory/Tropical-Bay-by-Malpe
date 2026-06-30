import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRoomBySlug, getRelatedRooms } from "@/lib/data/rooms";
import RoomPageTemplate from "@/components/ui/RoomPageTemplate";
import { siteConfig } from "@/lib/data/site";

const slug = "queen-suite";

export const metadata: Metadata = {
  title: "Queen Suite",
  description: "The Queen Suite at Tropical Bay by Malpe — 54 sq m of elegant coastal luxury with a private balcony, garden and partial sea views, and bespoke coastal interiors.",
  alternates: { canonical: `${siteConfig.url}/${slug}` },
  openGraph: {
    title: "Queen Suite | Tropical Bay by Malpe",
    description: "Elegant comfort with garden and sea views on the Malpe coast.",
    url: `${siteConfig.url}/${slug}`,
  },
};

export default function QueenSuitePage() {
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
