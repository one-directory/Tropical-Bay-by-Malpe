import SectionHeading from "@/components/ui/SectionHeading";
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
          <a href="/experience" className="btn btn-secondary exp-all-link">
            All Experiences
            <ArrowRight size={15} aria-hidden="true" />
          </a>
        </div>

        <StaggerContainer className="exp-grid">
          {featuredExperiences.map((exp) => (
            <StaggerItem key={exp.title}>
              <a href={exp.href} className="exp-card">
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
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <style>{`
        /* ── Section ─────────────────────────────────────── */
        .experiences {
          position: relative;
        }

        /* ── Header row ──────────────────────────────────── */
        .experiences-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 2rem;
          margin-bottom: clamp(2.5rem, 4vw, 3.5rem);
          flex-wrap: wrap;
        }

        .exp-all-link {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.78rem !important;
          padding: 0.75rem 1.5rem !important;
          white-space: nowrap;
        }

        /* ── Grid ────────────────────────────────────────── */
        .exp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        /* ── Card ────────────────────────────────────────── */
        .exp-card {
          display: flex;
          flex-direction: column;
          border-radius: 8px;
          overflow: hidden;
          background: var(--color-white);
          border: 1px solid rgba(169, 129, 75, 0.12);
          box-shadow: 0 2px 20px rgba(22, 38, 43, 0.07);
          transition: transform 380ms ease, box-shadow 380ms ease, border-color 380ms ease;
          text-decoration: none;
        }

        .exp-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 50px rgba(22, 38, 43, 0.13);
          border-color: rgba(169, 129, 75, 0.28);
        }

        /* ── Visual gradient area ────────────────────────── */
        .exp-visual {
          position: relative;
          height: 180px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .exp-visual-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(22, 38, 43, 0.08) 0%, rgba(22, 38, 43, 0.45) 100%);
        }

        /* ── Body ────────────────────────────────────────── */
        .exp-body {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          padding: 1.5rem 1.4rem 1.35rem;
          flex: 1;
        }

        /* ── Category overline ───────────────────────────── */
        .exp-category {
          color: var(--color-secondary);
          letter-spacing: 0.18em;
          font-size: 0.62rem;
        }

        /* ── Title ───────────────────────────────────────── */
        .exp-title {
          color: var(--color-primary);
          margin: 0;
          font-size: clamp(1.1rem, 2vw, 1.35rem);
          line-height: 1.2;
        }

        /* ── Description ─────────────────────────────────── */
        .exp-desc {
          font-family: var(--font-sans);
          font-size: 0.82rem;
          line-height: 1.65;
          color: rgba(22, 38, 43, 0.55);
          margin: 0;
          flex: 1;
        }

        /* ── Discover link ───────────────────────────────── */
        .exp-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-family: var(--font-sans);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-primary);
          margin-top: 0.35rem;
          padding-top: 0.75rem;
          border-top: 1px solid rgba(169, 129, 75, 0.12);
          transition: color 260ms ease, gap 260ms ease;
        }

        .exp-card:hover .exp-link {
          color: var(--color-secondary);
          gap: 0.55rem;
        }

        /* ── Responsive ──────────────────────────────────── */
        @media (max-width: 1024px) {
          .exp-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .experiences-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.25rem;
          }

          .exp-all-link {
            align-self: flex-start;
          }
        }

        @media (max-width: 640px) {
          .exp-grid {
            grid-template-columns: 1fr;
          }

          .exp-visual {
            height: 160px;
          }
        }

        @media (max-width: 480px) {
          .exp-visual {
            height: 140px;
          }
        }
      `}</style>
    </section>
  );
}
