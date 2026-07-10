import type { Metadata } from "next";

export const dynamic = 'force-dynamic';
import GalleryClient from "./GalleryClient";
import FadeIn from "@/components/animations/FadeIn";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore the photo gallery of Tropical Bay by Malpe — rooms, dining, riverside deck, beach, and resort imagery from Karnataka's premier boutique beachfront resort.",
  alternates: { canonical: `${siteConfig.url}/gallery` },
  openGraph: {
    title: "Gallery | Tropical Bay by Malpe",
    description: "A visual journey through life at Tropical Bay — from suites to sunsets.",
    url: `${siteConfig.url}/gallery`,
  },
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero gallery-hero">
        <div className="page-hero-overlay" aria-hidden="true" />
        <FadeIn className="container-resort page-hero-content">
          <span className="text-overline page-hero-overline">Visual Journey</span>
          <h1 className="text-h1 page-hero-title">The Tropical Bay Gallery</h1>
          <p className="page-hero-desc">
            Every image tells a story — of a sea at dawn, of a meal shared at golden hour,
            of a suite bathed in morning light. Explore the world of Tropical Bay by Malpe.
          </p>
        </FadeIn>
      </section>

      {/* Gallery */}
      <section className="section-padding-lg bg-off-white" aria-labelledby="gallery-heading">
        <div className="container-resort">
          <GalleryClient />
        </div>
      </section>

      
    </>
  );
}
