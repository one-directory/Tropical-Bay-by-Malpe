import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import { Waves, Wifi, UtensilsCrossed, Car, BellRing, ParkingCircle, Sparkles, Sun, Anchor } from "lucide-react";

const amenities = [
  {
    icon: Waves,
    title: "Infinity Pool",
    description: "Horizon-edge pool overlooking the Arabian Sea",
  },
  {
    icon: UtensilsCrossed,
    title: "The Palm Table",
    description: "Beachfront restaurant with coastal cuisine",
  },
  {
    icon: Wifi,
    title: "Resort-Wide Wi-Fi",
    description: "High-speed fibre connectivity, complimentary",
  },
  {
    icon: Car,
    title: "Airport Transfers",
    description: "Luxury chauffeur-driven pickup & drop",
  },
  {
    icon: BellRing,
    title: "24-hr Room Service",
    description: "Full in-room dining, round the clock",
  },
  {
    icon: Anchor,
    title: "Beach Access",
    description: "Semi-private beach, 2 minutes on foot",
  },
  {
    icon: Sun,
    title: "Sunrise Yoga",
    description: "Daily guided sessions on the beach",
  },
  {
    icon: ParkingCircle,
    title: "Secure Parking",
    description: "Complimentary, monitored 24/7",
  },
  {
    icon: Sparkles,
    title: "Event Spaces",
    description: "Intimate venue for weddings & celebrations",
  },
];

export default function Amenities() {
  return (
    <section className="amenities section-padding-lg bg-navy" aria-labelledby="amenities-heading">
      <div className="container-resort">
        <FadeIn>
          <SectionHeading
            overline="Resort Amenities"
            title="Everything You Could Desire"
            subtitle="From the moment of arrival to the day of departure, every comfort has been thoughtfully considered and meticulously arranged for you."
            align="center"
            light
            id="amenities-heading"
          />
        </FadeIn>

        <div className="amenities-grid">
          {amenities.map((amenity, i) => {
            const Icon = amenity.icon;
            return (
              <FadeIn key={amenity.title} delay={0.07 * i} className="amenity-card-wrapper">
                <div className="amenity-card">
                  <div className="amenity-icon-wrap" aria-hidden="true">
                    <Icon size={22} className="amenity-icon" />
                  </div>
                  <h3 className="amenity-title">{amenity.title}</h3>
                  <p className="amenity-desc">{amenity.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>

      
    </section>
  );
}
