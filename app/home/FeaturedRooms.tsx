import SectionHeading from "@/components/ui/SectionHeading";
import RoomCard from "@/components/ui/RoomCard";
import { rooms } from "@/lib/data/rooms";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerReveal";

export default function FeaturedRooms() {
  return (
    <section className="featured-rooms section-padding-lg bg-off-white" aria-labelledby="rooms-heading">
      <div className="container-resort">
        <div className="rooms-header">
          <SectionHeading
            overline="Suites & Accommodation"
            title="Crafted for the Discerning Traveller"
            subtitle="Each of our three suites is a unique world — curated with precision, designed with intention, and built to connect you with the beauty of the Malpe coast."
            id="rooms-heading"
          />
          <Link href="/rooms" className="btn btn-secondary rooms-all-link">
            View All Suites
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>

        <StaggerContainer className="rooms-grid">
          {rooms.map((room, i) => (
            <StaggerItem key={room.id}>
              <RoomCard room={room} priority={i === 0} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      
    </section>
  );
}
