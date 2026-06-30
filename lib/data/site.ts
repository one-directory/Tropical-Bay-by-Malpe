import type { NavItem } from "@/lib/types";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Rooms & Suites",
    href: "/rooms",
    children: [
      {
        label: "King Suite",
        href: "/king-suite",
        description: "Our flagship ocean-view suite",
      },
      {
        label: "Queen Suite",
        href: "/queen-suite",
        description: "Elegant garden & sea views",
      },
      {
        label: "Superior Suite",
        href: "/superior-suite",
        description: "Refined comfort & coastal style",
      },
    ],
  },
  {
    label: "About Us",
    href: "/about",
    children: [
      {
        label: "Our Services",
        href: "/services",
        description: "Premium amenities & services",
      },
      {
        label: "Our Gallery",
        href: "/gallery",
        description: "Explore the resort through imagery",
      },
      {
        label: "Pricing",
        href: "/pricing",
        description: "Rates & seasonal offers",
      },
      {
        label: "FAQs",
        href: "/faqs",
        description: "Answers to common questions",
      },
    ],
  },
  {
    label: "Experience",
    href: "/experience",
    children: [
      {
        label: "Around Us",
        href: "/around-us",
        description: "Discover Malpe & the coast",
      },
      {
        label: "Attractions",
        href: "/attractions",
        description: "Must-see local highlights",
      },
      {
        label: "Explore",
        href: "/explore",
        description: "Curated coastal adventures",
      },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const siteConfig = {
  name: "Tropical Bay by Malpe",
  tagline: "Luxury Stay Near Malpe Beach",
  description:
    "Experience the finest beachfront luxury on Karnataka's Malpe Coast. Tropical Bay offers bespoke suites, world-class dining, and immersive coastal experiences at the edge of the Arabian Sea.",
  url: "https://tropicalbaybymalpie.com",
  email: "hello@tropicalbaymalpe.com",
  phone: "+91 98440 12345",
  whatsapp: "+919844012345",
  address: {
    line1: "Survey No. 42, Darbe Road",
    line2: "Near St. Mary's Island Ferry Point",
    city: "Malpe",
    state: "Karnataka",
    pin: "576108",
    country: "India",
  },
  socialLinks: {
    instagram: "https://instagram.com/tropicalbaybymalpie",
    facebook: "https://facebook.com/tropicalbaybymalpie",
    youtube: "https://youtube.com/@tropicalbaybymalpie",
    twitter: "https://x.com/tropicalbaymlpe",
  },
  hours: [
    { day: "Front Desk", time: "Open 24 hours" },
    { day: "Restaurant", time: "7:00 AM – 11:00 PM" },
    { day: "Pool", time: "6:00 AM – 10:00 PM" },
    { day: "Concierge", time: "6:00 AM – 10:00 PM" },
  ],
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.1!2d74.7101!3d13.3584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMalpe+Beach!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
} as const;
