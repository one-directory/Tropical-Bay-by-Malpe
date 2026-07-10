import type { Metadata } from "next";

export const dynamic = 'force-dynamic';

import Hero from "@/app/home/Hero";
import Welcome from "@/app/home/Welcome";

import FeaturedRooms from "@/app/home/FeaturedRooms";
import Amenities from "@/app/home/Amenities";
import NearbyPlaces from "@/app/home/NearbyPlaces";
import GalleryPreview from "@/app/home/GalleryPreview";
import Testimonials from "@/app/home/Testimonials";
import BookingCTA from "@/app/home/BookingCTA";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <FeaturedRooms />
      <Amenities />
      <GalleryPreview />
      <NearbyPlaces />
      <Testimonials />
      <BookingCTA />
    </>
  );
}
