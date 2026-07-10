import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data/site";
import { rooms } from "@/lib/data/rooms";
import { aroundUsPlaces } from "@/lib/data/aroundUs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const now = new Date();

  const staticRoutes = [
    { url: baseUrl, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/rooms`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/about`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/services`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/gallery`, priority: 0.75, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/pricing`, priority: 0.85, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/faqs`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/experience`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/around-us`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/attractions`, priority: 0.75, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/explore`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/culture`, priority: 0.75, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/cuisine`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/contact`, priority: 0.85, changeFrequency: "monthly" as const },
  ];

  const roomRoutes = rooms.map((room) => ({
    url: `${baseUrl}/rooms/${room.slug}`,
    priority: 0.9 as const,
    changeFrequency: "monthly" as const,
  }));

  const aroundUsRoutes = aroundUsPlaces
    .filter((p) => p.category !== "Food")
    .map((place) => ({
      url: `${baseUrl}/around-us/${place.id}`,
      priority: 0.75 as const,
      changeFrequency: "monthly" as const,
    }));

  return [...staticRoutes, ...roomRoutes, ...aroundUsRoutes].map((route) => ({
    url: route.url,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
