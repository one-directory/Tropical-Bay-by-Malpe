import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRoomBySlug, getRelatedRooms } from "@/lib/data/rooms";
import RoomPageTemplate from "@/components/ui/RoomPageTemplate";
import { siteConfig } from "@/lib/data/site";

const slug = "superior-suite";

export const metadata: Metadata = {
  title: "Superior Suite",
  description: "The Superior Suite at Tropical Bay by Malpe — 38 sq m of refined comfort overlooking the resort courtyard and gardens, ideal for solo travellers and couples seeking coastal simplicity.",
  alternates: { canonical: `${siteConfig.url}/${slug}` },
  openGraph: {
    title: "Superior Suite | Tropical Bay by Malpe",
    description: "Refined coastal comfort — the ideal start to your Malpe escape.",
    url: `${siteConfig.url}/${slug}`,
  },
};

export default function SuperiorSuitePage() {
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
