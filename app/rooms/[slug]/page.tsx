import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { rooms, getRoomBySlug, getRelatedRooms } from "@/lib/data/rooms";
import RoomPageTemplate from "@/components/ui/RoomPageTemplate";
import { siteConfig } from "@/lib/data/site";
import { getBreadcrumbSchema, getHotelRoomSchema } from "@/lib/seo/schemas";
export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) return {};

  const firstImage = room.images[0];
  const ogImageUrl = typeof firstImage === "string" ? firstImage : firstImage.src;

  return {
    title: `${room.name} — Riverside Suite in Udupi`,
    description: `${room.description.slice(0, 150)}...`,
    alternates: { canonical: `${siteConfig.url}/rooms/${slug}` },
    openGraph: {
      title: `${room.name} — Riverside Suite in Udupi | ${siteConfig.name}`,
      description: room.tagline,
      url: `${siteConfig.url}/rooms/${slug}`,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${room.name} at Tropical Bay by Malpe in Udyavara, Udupi`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${room.name} — Riverside Suite in Udupi | ${siteConfig.name}`,
      description: room.tagline,
      images: [ogImageUrl],
    },
  };
}

export default async function RoomPage({ params }: Props) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) notFound();

  const relatedRooms = getRelatedRooms(slug);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Rooms & Suites", url: `${siteConfig.url}/rooms` },
    { name: room.name, url: `${siteConfig.url}/rooms/${slug}` },
  ]);

  const hotelRoomSchema = getHotelRoomSchema(room);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelRoomSchema) }}
      />
      <RoomPageTemplate room={room} relatedRooms={relatedRooms} />
    </>
  );
}

