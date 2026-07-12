import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { aroundUsPlaces } from "@/lib/data/aroundUs";
import { siteConfig } from "@/lib/data/site";
import AroundUsDetailClient from "./AroundUsDetailClient";
export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const place = aroundUsPlaces.find((p) => p.id === slug && p.category !== "Food");
  if (!place) return {};

  return {
    title: `${place.name} | ${siteConfig.name}`,
    description: place.description,
    alternates: { canonical: `${siteConfig.url}/around-us/${slug}` },
    openGraph: {
      title: `${place.name} | ${siteConfig.name}`,
      description: place.description,
      url: `${siteConfig.url}/around-us/${slug}`,
    },
  };
}

export default async function PlaceDetailPage({ params }: Props) {
  const { slug } = await params;
  const place = aroundUsPlaces.find((p) => p.id === slug && p.category !== "Food");
  if (!place) notFound();

  return <AroundUsDetailClient place={place} />;
}
