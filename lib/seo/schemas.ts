import { siteConfig } from "@/lib/data/site";
import { faqs } from "@/lib/data/faqs";
import type { Room } from "@/lib/types";
import type { AroundUsItem } from "@/lib/data/aroundUs";

export function getHotelSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Hotel", "Resort", "LodgingBusiness"],
    "@id": `${siteConfig.url}/#hotel`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    telephone: siteConfig.phones[0].tel,
    email: siteConfig.email,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    image: `${siteConfig.url}/images/home/hero-desktop.webp`,
    checkinTime: siteConfig.checkInTime,
    checkoutTime: siteConfig.checkOutTime,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      addressLocality: siteConfig.address.line2,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.pin,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    email: siteConfig.email,
    sameAs: [siteConfig.socialLinks.instagram],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getHotelRoomSchema(room: Room) {
  const images = room.images.map((img) =>
    typeof img === "string"
      ? `${siteConfig.url}${img}`
      : `${siteConfig.url}${img.src}`
  );

  return {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    name: room.name,
    description: room.description,
    url: `${siteConfig.url}/rooms/${room.slug}`,
    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: room.occupancy,
    },
    floorSize: {
      "@type": "QuantitativeValue",
      value: room.size,
    },
    priceRange: `₹${room.pricePerNight.toLocaleString("en-IN")}+/night`,
    amenityFeature: room.amenities.map((a) => ({
      "@type": "LocationFeatureSpecification",
      name: a,
      value: true,
    })),
    image: images,
  };
}

export function getTouristAttractionSchema(place: AroundUsItem) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: place.name,
    description: place.description,
    url: `${siteConfig.url}/around-us/${place.id}`,
    image: place.image ? `${siteConfig.url}${place.image}` : undefined,
  };
}

export function getImageGallerySchema(items: { src: string; label: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: `Gallery | ${siteConfig.name}`,
    description:
      "Photo gallery of Tropical Bay by Malpe suites, dining, backwaters, and beach in Udyavara, Udupi.",
    image: items.map((item) => ({
      "@type": "ImageObject",
      contentUrl: `${siteConfig.url}${item.src}`,
      caption: item.label,
    })),
  };
}
