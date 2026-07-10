import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { rooms, getRoomBySlug, getRelatedRooms } from "@/lib/data/rooms";
import RoomPageTemplate from "@/components/ui/RoomPageTemplate";
import { siteConfig } from "@/lib/data/site";

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) return {};

  return {
    title: room.name,
    description: room.description,
    alternates: { canonical: `${siteConfig.url}/rooms/${slug}` },
    openGraph: {
      title: `${room.name} | ${siteConfig.name}`,
      description: room.tagline,
      url: `${siteConfig.url}/rooms/${slug}`,
    },
  };
}

export default async function RoomPage({ params }: Props) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) notFound();

  const relatedRooms = getRelatedRooms(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    name: room.name,
    description: room.description,
    url: `${siteConfig.url}/rooms/${slug}`,
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
