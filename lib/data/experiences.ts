import type { Experience, Attraction, ExploreItem } from "@/lib/types";

export const experiences: Experience[] = [
  {
    id: "beach-walk",
    title: "Sunrise Beach Walk",
    description:
      "Begin your morning with a guided barefoot walk along Malpe Beach as the sun rises over the Arabian Sea. Watch fishing boats return with their morning catch while the golden light paints the shore in hues of amber and rose.",
    duration: "45–60 minutes",
    difficulty: "Easy",
    image: "/images/experiences/beach-walk.jpg",
    tags: ["Morning", "Guided", "Peaceful"],
  },
  {
    id: "sunrise-yoga",
    title: "Sunrise Yoga",
    description:
      "Greet the day with a meditative yoga session on the beach, led by our experienced instructor. The sound of waves, fresh sea air, and soft morning light create an unparalleled setting for mindfulness and movement.",
    duration: "60 minutes",
    difficulty: "All levels",
    image: "/images/experiences/sunrise.jpg",
    tags: ["Wellness", "Morning", "Guided"],
  },
  {
    id: "bonfire",
    title: "Beachside Bonfire",
    description:
      "As night falls over the Arabian Sea, gather around a curated bonfire on the private beach. Enjoy local snacks, coastal cocktails, and the sound of the ocean under a canopy of stars.",
    duration: "2–3 hours",
    difficulty: "Easy",
    image: "/images/experiences/bonfire.jpg",
    tags: ["Evening", "Social", "Romantic"],
  },
  {
    id: "kayaking",
    title: "Kayaking",
    description:
      "Paddle through the calm coastal waters of Malpe. Our guided kayaking excursions take you along the shoreline, revealing sea caves, tidal pools, and the stunning coastline from a perspective few visitors ever see.",
    duration: "90 minutes",
    difficulty: "Moderate",
    image: "/images/experiences/kayaking.jpg",
    tags: ["Adventure", "Water Sport", "Guided"],
  },
  {
    id: "boat-ride",
    title: "Boat Ride to St. Mary's Island",
    description:
      "Board our resort vessel for an exclusive morning journey to St. Mary's Island — a UNESCO-listed geological wonder featuring extraordinary hexagonal basalt formations and pristine, secluded shores.",
    duration: "Half Day",
    difficulty: "Easy",
    image: "/images/experiences/boat-ride.jpg",
    tags: ["Adventure", "Sightseeing", "UNESCO Site"],
  },
  {
    id: "seafood-dining",
    title: "Seafood Dining Experience",
    description:
      "Embark on a culinary journey through the coastal flavours of Tulu Nadu. Our signature seafood dinner at The Palm Table features freshly caught fish and shellfish, prepared in traditional Karnataka coastal style.",
    duration: "2 hours",
    difficulty: "Easy",
    image: "/images/experiences/seafood-dining.jpg",
    tags: ["Culinary", "Evening", "Local Culture"],
  },
  {
    id: "relaxation",
    title: "Riverside Relaxation",
    description:
      "Surrender to tranquility at our riverside deck. With the calm backwaters as your backdrop, a cold drink in hand, and the warm Malpe sun overhead, this is the ultimate definition of a resort day done right.",
    duration: "As long as you wish",
    difficulty: "Easy",
    image: "/images/experiences/relaxation.jpg",
    tags: ["Wellness", "Riverside", "Leisure"],
  },
  {
    id: "photography",
    title: "Coastal Photography Walk",
    description:
      "Explore the most photogenic spots around Malpe with a local photographer as your guide. From the fishing harbour at golden hour to the dramatic rocks of St. Mary's Island — every frame tells a story.",
    duration: "2–3 hours",
    difficulty: "Easy",
    image: "/images/experiences/photography.jpg",
    tags: ["Creative", "Guided", "Cultural"],
  },
  {
    id: "nature-walk",
    title: "Coastal Nature Walk",
    description:
      "Discover the rich biodiversity of the Malpe coastline. Our naturalist guide introduces you to the coastal flora, migratory birds, and tidal ecosystems that make this stretch of the Karnataka coast truly remarkable.",
    duration: "90 minutes",
    difficulty: "Easy",
    image: "/images/experiences/nature-walk.jpg",
    tags: ["Nature", "Educational", "Guided"],
  },
];

export const attractions: Attraction[] = [
  {
    id: "malpe-beach",
    name: "Malpe Beach",
    description:
      "One of Karnataka's finest beaches, Malpe is celebrated for its golden sands, calm turquoise waters, and the colourful fishing harbour. The beach is at its most magical at dawn and dusk.",
    distance: "0.5 km",
    travelTime: "2 min walk",
    category: "Beach",
    image: "/images/attractions/malpe-beach.jpg",
    highlights: ["Pristine sands", "Colourful fishing boats", "Calm swimming waters", "Spectacular sunsets"],
  },
  {
    id: "st-marys-island",
    name: "St. Mary's Island",
    description:
      "A UNESCO Geological Heritage site featuring extraordinary hexagonal basalt rock formations, crystal-clear coves, and abundant marine life. Accessible by boat from Malpe in just 20 minutes.",
    distance: "8 km (by sea)",
    travelTime: "20 min by boat",
    category: "Island",
    image: "/images/attractions/st-marys-island.jpg",
    highlights: ["Hexagonal basalt rocks", "Secluded beaches", "Snorkelling", "UNESCO heritage"],
  },
  {
    id: "sea-walk",
    name: "Sea Walk",
    description:
      "Experience the thrill of walking on the ocean floor in a specially designed helmet, discovering the colourful underwater world of the Arabian Sea — no prior swimming experience required.",
    distance: "1 km",
    travelTime: "5 min",
    category: "Activity",
    image: "/images/attractions/sea-walk.jpg",
    highlights: ["Helmet diving experience", "Marine life viewing", "All ages welcome", "No swim skills needed"],
  },
  {
    id: "fishing-harbour",
    name: "Malpe Fishing Harbour",
    description:
      "One of Karnataka's busiest and most photogenic fishing harbours. Visit at dawn to witness the return of the fishing fleet — a vibrant, authentic spectacle of coastal life at its most genuine.",
    distance: "1.2 km",
    travelTime: "5 min",
    category: "Cultural",
    image: "/images/attractions/fishing-harbour.jpg",
    highlights: ["Dawn fish market", "Colourful trawlers", "Fresh catch", "Cultural photography"],
  },
  {
    id: "udupi",
    name: "Udupi City",
    description:
      "The cultural capital of coastal Karnataka, Udupi is home to the famous Sri Krishna Temple, the birthplace of the iconic Udupi cuisine, and a rich legacy of art, music, and tradition.",
    distance: "6 km",
    travelTime: "15 min",
    category: "Heritage",
    image: "/images/attractions/udupi.jpg",
    highlights: ["Sri Krishna Temple", "Authentic Udupi cuisine", "Local markets", "Cultural heritage"],
  },
  {
    id: "kapu-beach",
    name: "Kapu Beach & Lighthouse",
    description:
      "A dramatically beautiful beach crowned by a historic lighthouse, Kapu offers panoramic views of the Arabian Sea coastline and is an excellent sunset photography destination.",
    distance: "12 km",
    travelTime: "20 min",
    category: "Beach",
    image: "/images/attractions/kapu-beach.jpg",
    highlights: ["Historic lighthouse", "Rocky scenic beach", "Sunset viewpoint", "Photography"],
  },
  {
    id: "kolur-temple",
    name: "Mookambika Temple, Kollur",
    description:
      "One of the most revered Shakti shrines in South India, nestled in the Western Ghats foothills. The journey through lush jungle roads is an experience in itself.",
    distance: "75 km",
    travelTime: "90 min",
    category: "Temple",
    image: "/images/attractions/kolur-temple.jpg",
    highlights: ["Ancient Shakti shrine", "Western Ghats scenery", "Spiritual significance", "Pilgrimage site"],
  },
];

export const exploreItems: ExploreItem[] = [
  {
    id: "e1",
    title: "Hotel Udupi Krishna",
    description:
      "Legendary for serving the most authentic Udupi breakfast in the region. Their masala dosa with coconut chutney and filter coffee is a rite of passage for every Malpe visitor.",
    category: "restaurant",
    image: "/images/explore/udupi-krishna.jpg",
    tags: ["South Indian", "Breakfast", "Iconic"],
    distance: "6 km",
  },
  {
    id: "e2",
    title: "Pabba's Ice Cream",
    description:
      "A Mangaluru institution since 1975. Their unique flavours — from tender coconut to jackfruit — are a must after a hot day at the beach.",
    category: "local-food",
    image: "/images/explore/pabbas.jpg",
    tags: ["Dessert", "Local Icon", "Must Try"],
    distance: "12 km",
  },
  {
    id: "e3",
    title: "Secret Tide Pools",
    description:
      "A hidden stretch of coastline accessible only at low tide, revealing extraordinary tidal pools teeming with starfish, anemones, and small reef fish. Known only to locals and our concierge team.",
    category: "hidden-gem",
    image: "/images/explore/tide-pools.jpg",
    tags: ["Hidden", "Nature", "Exclusive"],
    distance: "2 km",
  },
  {
    id: "e4",
    title: "Lighthouse Rock at Dawn",
    description:
      "The large basalt rock near the Kapu Lighthouse, accessible only in the early morning before crowds arrive, offers one of the most dramatic coastal photography compositions on the Karnataka coast.",
    category: "photography",
    image: "/images/explore/lighthouse-rock.jpg",
    tags: ["Photography", "Dawn", "Dramatic"],
    distance: "12 km",
  },
  {
    id: "e5",
    title: "Malpe Shankar Market",
    description:
      "A vibrant local market selling handcrafted shell jewellery, coastal textiles, and traditional Karnataka spices. An ideal destination for authentic souvenirs.",
    category: "shopping",
    image: "/images/explore/shankar-market.jpg",
    tags: ["Shopping", "Local Craft", "Souvenirs"],
    distance: "1 km",
  },
  {
    id: "e6",
    title: "Kelyache Kadala — Fish Curry Thali",
    description:
      "A beloved roadside eatery serving the coastal Karnataka fish curry rice thali that has earned a devoted following among locals. Simple, soulful, and extraordinary.",
    category: "local-food",
    image: "/images/explore/fish-thali.jpg",
    tags: ["Fish Curry", "Authentic", "Local Favourite"],
    distance: "3 km",
  },
  {
    id: "e7",
    title: "Butterfly Garden Trail, Hiriyadka",
    description:
      "A little-known nature trail through cashew and coconut groves that comes alive with butterflies in the post-monsoon months. A quiet, magical detour from the coast.",
    category: "hidden-gem",
    image: "/images/explore/butterfly-garden.jpg",
    tags: ["Nature", "Hidden", "Post-Monsoon"],
    distance: "18 km",
  },
  {
    id: "e8",
    title: "Coconut Shell Craft Cooperative",
    description:
      "A small artisan cooperative near Udupi where local craftspeople transform coconut shells into exquisite lamps, bowls, and jewellery. Visitors are welcome to watch the process and purchase directly.",
    category: "shopping",
    image: "/images/explore/coconut-craft.jpg",
    tags: ["Artisan", "Ethical", "Sustainable"],
    distance: "8 km",
  },
];
