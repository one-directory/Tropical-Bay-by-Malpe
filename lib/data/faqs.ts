import type { FAQItem } from "@/lib/types";

export const faqs: FAQItem[] = [
  // Reservations
  {
    id: "f1",
    category: "Reservations",
    question: "What is your check-in and check-out time?",
    answer:
      "Check-in is from 1:00 PM and check-out is by 11:00 AM. Early check-in and late check-out may be arranged subject to availability, and can be requested at the time of booking or by contacting our reservations team in advance. A nominal fee may apply for confirmed early/late arrangements.",
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
    question: "What is the difference between your room categories?",
    answer:
      "We offer six categories of riverside sanctuaries: the 2BH (800 sq ft, up to 10 guests), Gulum Riverside Cottage (150 sq ft, up to 3 guests), First Floor (120 sq ft, up to 2 guests), Large AC Room (160 sq ft, up to 3 guests), Small AC Room (120 sq ft, up to 3 guests), and the Riverside Dormitory (900 sq ft, up to 15 guests). Each space is crafted to offer stunning riverfront views and pristine natural surroundings.",
  },
  {
    id: "f6",
    category: "Stay & Rooms",
    question: "Are your rooms air-conditioned?",
    answer:
      "Air conditioning is provided in our Small AC Room, Large AC Room, and First Floor. Our Gulum Riverside Cottage, 2BH, and Riverside Dormitory are designed for natural riverside ventilation and are equipped with fans to enjoy the fresh coastal breeze.",
  },
  {
    id: "f7",
    category: "Stay & Rooms",
    question: "Do you offer accommodation for families or groups?",
    answer:
      "Yes, our 2BH accommodates up to 10 guests, and the Gulum cottages can be booked in clusters (8 cottages available) for group stays. We also have a spacious 15-guest Riverside Dormitory perfect for corporate and student groups.",
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
      "Yes, we offer complimentary secure parking for all guests. The parking area is monitored 24/7 and can accommodate both cars and motorcycles. Valet parking is also available for guests staying in the 2BH and First Floor rooms.",
  },
  // Policies
  {
    id: "f15",
    category: "Policies",
    question: "Is Tropical Bay a pet-friendly resort?",
    answer:
      "Yes, we are proud to be a pet-friendly resort! We welcome your furry family members to join you during your riverside getaway. Please notify us during booking so we can arrange pet-friendly room configurations.",
  },
  {
    id: "f16",
    category: "Policies",
    question: "Do you host private events, weddings, or corporate retreats?",
    answer:
      "Yes. Our resort features a dedicated event lawn and indoor banquet space with capacity for intimate gatherings and celebrations. We have hosted beachside weddings, anniversary dinners, and corporate offsites. Please contact our events team at stay@shoreindia.com with your requirements for a personalised proposal.",
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
