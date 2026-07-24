import type { Metadata } from "next";
export const dynamic = 'force-dynamic';

import GalleryClient from "./GalleryClient";
import FadeIn from "@/components/animations/FadeIn";
import { siteConfig } from "@/lib/data/site";

import { getBreadcrumbSchema, getImageGallerySchema } from "@/lib/seo/schemas";

export const metadata: Metadata = {
  title: "Resort Photo Gallery | Tropical Bay in Udyavara, Udupi",
  description:
    "Explore photos of Tropical Bay in Udyavara, Udupi — riverside suites, dining, backwaters deck, and beach scenes near Malpe Beach.",
  alternates: { canonical: `${siteConfig.url}/gallery` },
  openGraph: {
    title: "Resort Photo Gallery | Tropical Bay in Udyavara, Udupi",
    description:
      "Explore photos of Tropical Bay in Udyavara, Udupi — riverside suites, dining, backwaters deck, and beach scenes near Malpe Beach.",
    url: `${siteConfig.url}/gallery`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/aboutresort.webp",
        width: 1200,
        height: 630,
        alt: "Tropical Bay by Malpe Photo Gallery in Udyavara, Udupi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resort Photo Gallery | Tropical Bay in Udyavara, Udupi",
    description:
      "Explore photos of Tropical Bay in Udyavara, Udupi — riverside suites, dining, and backwaters deck.",
    images: ["/images/home/aboutresort.webp"],
  },
};

export default function GalleryPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Gallery", url: `${siteConfig.url}/gallery` },
  ]);

  const gallerySchema = getImageGallerySchema([
    { src: "/images/first floor/1st floor 1.webp", label: "First Floor — River View" },
    { src: "/images/first floor/1st floor 5.webp", label: "First Floor — Sunset Balcony" },
    { src: "/images/gulum/gulum main.webp", label: "Gulum Cottage — Porch" },
    { src: "/images/dorm/dorm main.webp", label: "Riverside Dormitory" },
    { src: "/images/small ac room/small ac main.webp", label: "Small AC Room" },
    { src: "/images/large ac room/large ac main.webp", label: "Large AC Room" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />
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
