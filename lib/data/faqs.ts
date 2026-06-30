import type { FAQItem } from "@/lib/types";

export const faqs: FAQItem[] = [
  // Reservations
  {
    id: "f1",
    category: "Reservations",
    question: "What is your check-in and check-out time?",
    answer:
      "Check-in is from 2:00 PM and check-out is by 11:00 AM. Early check-in and late check-out may be arranged subject to availability, and can be requested at the time of booking or by contacting our reservations team in advance. A nominal fee may apply for confirmed early/late arrangements.",
  },
  {
    id: "f2",
    category: "Reservations",
    question: "What is your cancellation policy?",
    answer:
      "Reservations cancelled more than 7 days prior to arrival receive a full refund. Cancellations between 3 and 7 days before arrival are refunded at 50% of the booking value. Cancellations within 72 hours of arrival are non-refundable. We recommend travel insurance for all bookings during peak season (October–February).",
  },
  {
    id: "f3",
    category: "Reservations",
    question: "Do you accept walk-in guests?",
    answer:
      "We primarily operate on advance reservations to ensure the highest level of personalised service for every guest. Walk-in guests may be accommodated subject to availability, but we strongly recommend booking ahead, especially during weekends and the October–March season.",
  },
  {
    id: "f4",
    category: "Reservations",
    question: "Is a deposit required to confirm my booking?",
    answer:
      "Yes, a 25% advance deposit is required to confirm your reservation. The balance is payable at check-in. For bookings during peak season (December 20 – January 5), full payment is required at the time of booking.",
  },
  // Stay & Rooms
  {
    id: "f5",
    category: "Stay & Rooms",
    question: "What is the difference between your suite categories?",
    answer:
      "The King Suite (72 sq m) is our flagship offering with direct ocean views, a private terrace, and a clawfoot soaking tub — ideal for the most discerning travellers. The Queen Suite (54 sq m) offers garden and partial sea views with a private balcony and is perfect for couples. The Superior Suite (38 sq m) is a refined and comfortable space ideal for solo travellers or couples seeking great-value luxury.",
  },
  {
    id: "f6",
    category: "Stay & Rooms",
    question: "Are your rooms air-conditioned?",
    answer:
      "Yes, all suites at Tropical Bay are fully air-conditioned with individually controlled temperature settings. The natural coastal breeze also provides excellent ventilation, and many guests enjoy sleeping with the windows open.",
  },
  {
    id: "f7",
    category: "Stay & Rooms",
    question: "Do you offer interconnecting rooms for families?",
    answer:
      "Currently, our Superior Suites can be configured as twin beds and may be booked adjacent to accommodate small families. For larger groups or families, we recommend booking multiple suites and contacting us directly so we can arrange the best configuration.",
  },
  // Dining & Services
  {
    id: "f8",
    category: "Dining & Services",
    question: "Is breakfast included in the room rate?",
    answer:
      "Breakfast is included in most standard rates. Our complimentary breakfast features a spread of South Indian specialities, fresh tropical fruits, freshly baked pastries, and your choice of beverages. A continental breakfast is also available. Guests on room-only rates can add breakfast at ₹650 per person per day.",
  },
  {
    id: "f9",
    category: "Dining & Services",
    question: "Do you have a restaurant open to non-guests?",
    answer:
      "Yes, our beachfront restaurant, The Palm Table, is open to day visitors for lunch and dinner. We recommend reservations, especially on weekends, as seating is limited and we prioritise our in-house guests. Call us or email to reserve a table.",
  },
  {
    id: "f10",
    category: "Dining & Services",
    question: "Can you cater to dietary requirements?",
    answer:
      "Absolutely. Our kitchen can accommodate vegetarian, vegan, gluten-free, Jain, and most allergy-related dietary needs. Please inform us of your requirements at the time of booking or at least 24 hours before your meal so our chef can prepare accordingly.",
  },
  // Experiences
  {
    id: "f11",
    category: "Experiences",
    question: "How do I book the kayaking or boat ride to St. Mary's Island?",
    answer:
      "These experiences can be booked through our concierge team at any time during your stay. We recommend booking at least one day in advance, especially during peak season. Kayaking is available at our private beach access point, and boat rides to St. Mary's Island depart in the morning and are subject to sea conditions.",
  },
  {
    id: "f12",
    category: "Experiences",
    question: "Is the beach accessible directly from the resort?",
    answer:
      "Yes. Tropical Bay enjoys privileged access to a semi-private beach stretch adjacent to Malpe Beach. Guests can reach the shore in under 2 minutes on foot from any suite. We provide beach chairs, umbrellas, and towels at no additional charge.",
  },
  // Location & Travel
  {
    id: "f13",
    category: "Location & Travel",
    question: "How far is the resort from Mangaluru Airport?",
    answer:
      "Mangaluru International Airport (IXE) is approximately 60 km from our resort, a journey of roughly 75–90 minutes by road. We offer a premium airport transfer service — a comfortable, air-conditioned vehicle with a professional chauffeur. This can be arranged at the time of booking.",
  },
  {
    id: "f14",
    category: "Location & Travel",
    question: "Is there parking available at the resort?",
    answer:
      "Yes, we offer complimentary secure parking for all guests. The parking area is monitored 24/7 and can accommodate both cars and motorcycles. Valet parking is also available for King Suite and Queen Suite guests.",
  },
  // Policies
  {
    id: "f15",
    category: "Policies",
    question: "Is Tropical Bay a pet-friendly resort?",
    answer:
      "We are unfortunately unable to accommodate pets at this time in order to maintain a serene environment for all our guests. We appreciate your understanding and hope to welcome you — and the rest of your family — for a memorable stay.",
  },
  {
    id: "f16",
    category: "Policies",
    question: "Do you host private events, weddings, or corporate retreats?",
    answer:
      "Yes. Our resort features a dedicated event lawn and indoor banquet space with capacity for intimate gatherings and celebrations. We have hosted beachside weddings, anniversary dinners, and corporate offsites. Please contact our events team at events@tropicalbaybymalpie.com with your requirements for a personalised proposal.",
  },
];

export const faqCategories = [
  "All",
  "Reservations",
  "Stay & Rooms",
  "Dining & Services",
  "Experiences",
  "Location & Travel",
  "Policies",
] as const;

export type FAQCategory = (typeof faqCategories)[number];
