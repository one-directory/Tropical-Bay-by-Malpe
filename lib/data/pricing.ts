import type { PricingPlan } from "@/lib/types";

export const pricingPlans: PricingPlan[] = [
  {
    id: "weekday",
    name: "Weekday Serenity",
    period: "Sunday – Thursday",
    description:
      "Our best rates for mid-week escapes. Experience the full luxury of Tropical Bay with fewer crowds and the deepest sense of coastal tranquility.",
    rooms: [
      { roomName: "Riverside Dormitory", price: 1200 },
      { roomName: "Small AC Room", price: 2500 },
      { roomName: "Large AC Room", price: 3500 },
      { roomName: "First Floor", price: 4500 },
      { roomName: "Gulum Riverside Cottage", price: 5500 },
      { roomName: "2BH", price: 7500 },
    ],
    includes: [
      "Complimentary breakfast",
      "Resort Wi-Fi",
      "Beach access & equipment",
      "Outdoor BBQ & grill access",
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
      { roomName: "Riverside Dormitory", price: 1500 },
      { roomName: "Small AC Room", price: 3000 },
      { roomName: "Large AC Room", price: 4200 },
      { roomName: "First Floor", price: 5500 },
      { roomName: "Gulum Riverside Cottage", price: 6500 },
      { roomName: "2BH", price: 9000 },
    ],
    includes: [
      "Complimentary breakfast",
      "Resort Wi-Fi",
      "Beach & river access",
      "Outdoor BBQ & grill access",
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
      { roomName: "Riverside Dormitory", price: 1800 },
      { roomName: "Small AC Room", price: 3600 },
      { roomName: "Large AC Room", price: 5000 },
      { roomName: "First Floor", price: 6600 },
      { roomName: "Gulum Riverside Cottage", price: 7800 },
      { roomName: "2BH", price: 10800 },
    ],
    includes: [
      "Complimentary breakfast",
      "Resort Wi-Fi",
      "Beach & river access",
      "Outdoor BBQ & grill access",
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
      { roomName: "Riverside Dormitory", price: 1900 },
      { roomName: "Small AC Room", price: 3900 },
      { roomName: "Large AC Room", price: 5400 },
      { roomName: "First Floor", price: 7100 },
      { roomName: "Gulum Riverside Cottage", price: 8400 },
      { roomName: "2BH", price: 11700 },
    ],
    includes: [
      "Complimentary breakfast",
      "Resort Wi-Fi",
      "Beach & river access",
      "Outdoor BBQ & grill access",
      "Welcome amenity & fruit basket",
      "One boat ride to St. Mary's Island",
      "Bonfire evening access",
      "Complimentary airport transfer (one-way)",
    ],
  },
];
