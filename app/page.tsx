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
  title: "Boutique Resort in Udyavara, Udupi | Tropical Bay by Malpe",
  description:
    "Discover Tropical Bay by Malpe — luxury boutique stay in Udyavara, Udupi located 10 mins from Malpe Beach. Featuring riverside suites and coastal nature.",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "Boutique Resort in Udyavara, Udupi | Tropical Bay by Malpe",
    description:
      "Discover Tropical Bay by Malpe — luxury boutique stay in Udyavara, Udupi located 10 mins from Malpe Beach. Featuring riverside suites and coastal nature.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tropical Bay by Malpe - Boutique Resort in Udyavara, Udupi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boutique Resort in Udyavara, Udupi | Tropical Bay by Malpe",
    description:
      "Discover Tropical Bay by Malpe — luxury boutique stay in Udyavara, Udupi located 10 mins from Malpe Beach.",
    images: ["/images/og-image.jpg"],
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
