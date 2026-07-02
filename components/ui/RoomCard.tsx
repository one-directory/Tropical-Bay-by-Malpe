import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Maximize2, BedDouble, Users } from "lucide-react";
import type { Room } from "@/lib/types";

interface RoomCardProps {
  room: Room;
  priority?: boolean;
}

export default function RoomCard({ room, priority = false }: RoomCardProps) {
  return (
    <article className="room-card card-resort img-zoom" aria-label={room.name}>
      <Link href={`/${room.slug}`} className="room-card-image-link" tabIndex={-1} aria-hidden="true">
        <div className="room-card-image-wrap">
          <Image
            src={room.images[0]}
            alt={`${room.name} at Tropical Bay by Malpe`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="room-card-image"
            priority={priority}
          />
          <div className="room-card-overlay" aria-hidden="true" />
          <div className="room-card-badge">
            <span className="text-overline">
              From ₹{room.pricePerNight.toLocaleString("en-IN")} / night
            </span>
          </div>
        </div>
      </Link>

      <div className="room-card-body">
        <div className="room-card-specs">
          <span className="room-spec">
            <Maximize2 size={12} aria-hidden="true" />
            {room.size}
          </span>
          <span className="room-spec">
            <BedDouble size={12} aria-hidden="true" />
            {room.beds}
          </span>
          <span className="room-spec">
            <Users size={12} aria-hidden="true" />
            Up to {room.occupancy} guests
          </span>
        </div>

        <h3 className="text-h3 room-card-name">{room.name}</h3>
        <p className="room-card-tagline">{room.tagline}</p>
        <p className="room-card-desc">{room.description.slice(0, 120)}…</p>

        <div className="room-card-amenities">
          {room.amenities.slice(0, 4).map((a) => (
            <span key={a} className="room-amenity-tag">{a}</span>
          ))}
        </div>

        <Link href={`/${room.slug}`} className="btn btn-secondary room-card-cta">
          Explore Suite
          <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </div>

      
    </article>
  );
}
