import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRoomBySlug, getRelatedRooms } from "@/lib/data/rooms";
import RoomPageTemplate from "@/components/ui/RoomPageTemplate";
import { siteConfig } from "@/lib/data/site";
import { redirect } from "next/navigation";import { rooms } from "@/lib/data/rooms";
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
    title: room.name,
    description: room.description,
    alternates: { canonical: `${siteConfig.url}/rooms/${slug}` },
    openGraph: {
      title: `${room.name} | ${siteConfig.name}`,
      description: room.tagline,
      url: `${siteConfig.url}/rooms/${slug}`,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${room.name} at Tropical Bay by Malpe`,
        },
      ],
    },
  };
}

export default async function RoomSlugRedirect({ params }: Props) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) notFound();

  // Redirect to the canonical /rooms/[slug] page
  redirect(`/rooms/${slug}`);
}
