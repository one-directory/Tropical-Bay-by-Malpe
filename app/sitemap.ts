import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const now = new Date();

  const staticRoutes = [
    { url: baseUrl, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/rooms`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/king-suite`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/queen-suite`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/superior-suite`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/about`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/services`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/gallery`, priority: 0.75, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/pricing`, priority: 0.85, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/faqs`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/experience`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/around-us`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/attractions`, priority: 0.75, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/explore`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/contact`, priority: 0.85, changeFrequency: "monthly" as const },
  ];

  return staticRoutes.map((route) => ({
    url: route.url,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
