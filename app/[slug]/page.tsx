import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRoomBySlug, getRelatedRooms } from "@/lib/data/rooms";
import RoomPageTemplate from "@/components/ui/RoomPageTemplate";
import { siteConfig } from "@/lib/data/site";
import { redirect } from "next/navigation";import { rooms } from "@/lib/data/rooms";

export async function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

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

export default async function RoomSlugRedirect({ params }: Props) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) notFound();

  // Redirect to the canonical /rooms/[slug] page
  redirect(`/rooms/${slug}`);
}
