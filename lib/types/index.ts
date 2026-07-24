// Shared TypeScript types for Tropical Bay by Malpe

export interface Room {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  size: string;
  occupancy: number;
  beds: string;
  view: string;
  pricePerNight: number;
  weekendPrice: number;
  images: (string | { src: string; objectPosition?: string })[];
  amenities: string[];
  features: string[];
  highlights: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  date: string;
  avatar: string;
  stayType: string;
  platform?: "booking" | "google" | "agoda";
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  image: string;
  tags: string[];
}

export interface Attraction {
  id: string;
  name: string;
  description: string;
  distance: string;
  travelTime: string;
  category: string;
  image: string;
  highlights: string[];
}

export interface ExploreItem {
  id: string;
  title: string;
  description: string;
  category: "restaurant" | "hidden-gem" | "photography" | "shopping" | "local-food";
  image: string;
  tags: string[];
  distance?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  period: string;
  description: string;
  rooms: {
    roomName: string;
    price: number;
  }[];
  includes: string[];
  badge?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "rooms" | "dining" | "pool" | "beach" | "exterior" | "events";
  width: number;
  height: number;
}

export interface NavItem {
  label: string;
  href?: string;
  children?: {
    label: string;
    href: string;
    description?: string;
  }[];
}

export interface SeoMeta {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
}
