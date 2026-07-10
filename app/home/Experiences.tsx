import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerReveal";

const featuredExperiences = [
  {
    title: "Sunrise Yoga",
    category: "Wellness",
    description: "Greet the day with a meditative beach session led by our in-house instructor.",
    gradient: "linear-gradient(135deg, var(--color-primary) 0%, #4d9386 100%)",
    href: "/experience",
  },
  {
    title: "Boat Ride to St. Mary's Island",
    category: "Adventure",
    description: "Explore a UNESCO geological wonder just 20 minutes from our shore.",
    gradient: "linear-gradient(135deg, var(--color-primary) 0%, #28506A 100%)",
    href: "/experience",
  },
  {
    title: "Beachside Bonfire",
    category: "Evening",
    description: "Stars above, fire crackling, waves lapping — a Malpe night at its finest.",
    gradient: "linear-gradient(135deg, #2c5c53 0%, var(--color-accent) 100%)",
    href: "/experience",
  },
  {
    title: "Seafood Dining",
    category: "Culinary",
    description: "Freshly caught coastal fare at The Palm Table, right by the sea.",
    gradient: "linear-gradient(135deg, #b09257 0%, var(--color-secondary) 100%)",
    href: "/experience",
  },
  {
    title: "Kayaking",
    category: "Water Sport",
    description: "Paddle along the coast and discover sea caves and tidal formations.",
    gradient: "linear-gradient(135deg, #0d2238 0%, var(--color-accent) 100%)",
    href: "/experience",
  },
  {
    title: "Nature Walk",
    category: "Guided",
    description: "Discover the coastal biodiversity of Malpe with our resident naturalist.",
    gradient: "linear-gradient(135deg, #2c5c53 0%, var(--color-accent) 100%)",
    href: "/experience",
  },
];

export default function Experiences() {
  return (
    <section className="experiences section-padding-lg bg-off-white" aria-labelledby="experiences-heading">
      <div className="container-resort">
        <div className="experiences-header">
          <SectionHeading
            overline="Curated Experiences"
            title="Beyond the Suite"
            subtitle="Malpe is a place of extraordinary natural character. We've curated a collection of immersive experiences to help you discover every dimension of this remarkable coastline."
            id="experiences-heading"
          />
          <Link href="/experience" className="btn btn-secondary exp-all-link">
            All Experiences
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>

        <StaggerContainer className="exp-grid">
          {featuredExperiences.map((exp) => (
            <StaggerItem key={exp.title}>
              <Link href={exp.href} className="exp-card">
                <div className="exp-visual" style={{ background: exp.gradient }} aria-hidden="true">
                  <div className="exp-visual-overlay" />
                </div>
                <div className="exp-body">
                  <span className="exp-category text-overline">{exp.category}</span>
                  <h3 className="exp-title text-h3">{exp.title}</h3>
                  <p className="exp-desc">{exp.description}</p>
                  <span className="exp-link">
                    Discover <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      
    </section>
  );
}
