import type { PricingPlan } from "@/lib/types";

export const pricingPlans: PricingPlan[] = [
  {
    id: "weekday",
    name: "Weekday Serenity",
    period: "Sunday – Thursday",
    description:
      "Our best rates for mid-week escapes. Experience the full luxury of Tropical Bay with fewer crowds and the deepest sense of coastal tranquility.",
    rooms: [
      { roomName: "Superior Suite", price: 4500 },
      { roomName: "Queen Suite", price: 6500 },
      { roomName: "King Suite", price: 8500 },
    ],
    includes: [
      "Complimentary breakfast for 2",
      "Resort Wi-Fi",
      "Beach access & equipment",
      "Infinity pool access",
      "Welcome drink on arrival",
      "Late checkout (subject to availability)",
    ],
  },
  {
    id: "weekend",
    name: "Weekend Retreat",
    period: "Friday – Saturday",
    description:
      "Escape the city for the weekend. Our weekend rates reflect the elevated demand for our most sought-after coastal suites.",
    badge: "Most Popular",
    rooms: [
      { roomName: "Superior Suite", price: 5800 },
      { roomName: "Queen Suite", price: 8000 },
      { roomName: "King Suite", price: 10500 },
    ],
    includes: [
      "Complimentary breakfast for 2",
      "Resort Wi-Fi",
      "Beach access & equipment",
      "Infinity pool access",
      "Welcome drink on arrival",
      "One complimentary beach activity",
    ],
  },
  {
    id: "holiday",
    name: "Holiday & Festival",
    period: "Public Holidays & Long Weekends",
    description:
      "Available on national holidays and long weekend periods. Includes enhanced amenities to make your celebration truly memorable.",
    rooms: [
      { roomName: "Superior Suite", price: 6500 },
      { roomName: "Queen Suite", price: 9000 },
      { roomName: "King Suite", price: 12000 },
    ],
    includes: [
      "Complimentary breakfast for 2",
      "Resort Wi-Fi",
      "Beach access & equipment",
      "Infinity pool access",
      "Welcome amenity",
      "One beach activity (kayaking or nature walk)",
      "Bonfire evening access",
    ],
  },
  {
    id: "peak-season",
    name: "Peak Season",
    period: "October – February",
    description:
      "Our prime season along the Karnataka coast. Bright skies, calm seas, and the very best of what Malpe has to offer.",
    badge: "Prime Season",
    rooms: [
      { roomName: "Superior Suite", price: 7000 },
      { roomName: "Queen Suite", price: 10000 },
      { roomName: "King Suite", price: 13500 },
    ],
    includes: [
      "Complimentary breakfast for 2",
      "Resort Wi-Fi",
      "Beach access & equipment",
      "Infinity pool access",
      "Welcome amenity & fruit basket",
      "One boat ride to St. Mary's Island",
      "Bonfire evening access",
      "Complimentary airport transfer (one-way)",
    ],
  },
];
