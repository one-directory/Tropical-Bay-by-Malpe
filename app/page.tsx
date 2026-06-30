import type { Metadata } from "next";
import Hero from "@/app/home/Hero";
import Welcome from "@/app/home/Welcome";
import FeaturedRooms from "@/app/home/FeaturedRooms";
import Amenities from "@/app/home/Amenities";
import Experiences from "@/app/home/Experiences";
import GalleryPreview from "@/app/home/GalleryPreview";
import Testimonials from "@/app/home/Testimonials";
import CTA from "@/app/home/CTA";
import Newsletter from "@/app/home/Newsletter";
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
      <Experiences />
      <GalleryPreview />
      <Testimonials />
      <CTA />
      <Newsletter />
    </>
  );
}
