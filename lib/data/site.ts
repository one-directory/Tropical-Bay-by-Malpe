import type { NavItem } from "@/lib/types";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Rooms & Suites",
    href: "/rooms",
    children: [
      {
        label: "Small AC Room",
        href: "/rooms/small-ac",
        description: "Cozy riverside comfort",
      },
      {
        label: "Large AC Room",
        href: "/rooms/large-ac",
        description: "Spacious layout with forest views",
      },
      {
        label: "First Floor",
        href: "/rooms/first-floor",
        description: "Elevated panoramic river views",
      },
      {
        label: "2BH",
        href: "/rooms/2bh",
        description: "Private two-bedroom riverside villa",
      },
      {
        label: "Gulum Riverside Cottage",
        href: "/rooms/gulum",
        description: "Traditional stone heritage architecture",
      },
      {
        label: "Riverside Dormitory",
        href: "/rooms/dorm",
        description: "Social bunk lodging for groups",
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
        description: "Explore beaches, heritage & nature",
      },
      {
        label: "Culture",
        href: "/culture",
        description: "Sacred rituals & traditional arts",
      },
      {
        label: "Udupi Cuisine",
        href: "/cuisine",
        description: "Birthplace of legendary coastal flavours",
      },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const siteConfig = {
  name: "Tropical Bay by Malpe",
  tagline: "Luxury Stay Near Malpe Beach",
  description:
    "Boutique riverside resort in Udyavara, Udupi, located just 10 minutes from Malpe Beach. Tropical Bay offers bespoke suites, scenic nature, and coastal hospitality in Karnataka.",
  url: "https://www.tropicalbaymalpe.com",
  email: "stay@shoreindia.com",
  phones: [
    { display: "+91 90354 30365", tel: "+919035430365" },
    { display: "+91 73491 30365", tel: "+917349130365", whatsapp: true },
  ],
  whatsappMessage:
    "Hello! I'm interested in booking a stay at Tropical Bay by Malpe. Could you please share availability and rates?",
  address: {
    line1: "Pithrody Beach Access Road, Pithrody",
    line2: "Udyavara, Udupi",
    city: "Udupi",
    state: "Karnataka",
    pin: "574118",
    country: "India",
  },
  geo: {
    latitude: 13.299992383933297,
    longitude: 74.72144346131034,
  },
  checkInTime: "13:00",
  checkOutTime: "11:00",
  logo: "/images/logo/logo.webp",
  socialLinks: {
    instagram: "https://instagram.com/shoreindia",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2745.5591721719265!2d74.72144346131034!3d13.299992383933297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbb02100caa45%3A0x9a891aa53c48fb82!2sTropical%20Bay%20-%20Udupi!5e0!3m2!1sen!2sin!4v1782990172561!5m2!1sen!2sin",
} as const;

export function getWhatsAppHref(message: string = siteConfig.whatsappMessage) {
  const phone = siteConfig.phones.find((p) => "whatsapp" in p && p.whatsapp);
  if (!phone) return "#";
  const digits = phone.tel.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
