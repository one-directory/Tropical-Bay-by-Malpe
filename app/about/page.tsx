import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerReveal";
import Link from "next/link";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "The story of Tropical Bay by Malpe — our founding vision, mission, values, and the team behind Karnataka's premier boutique beachfront resort.",
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    title: "About Us | Tropical Bay by Malpe",
    description: "Rooted in the spirit of the Karnataka coast. A luxury resort built from a deep love for Malpe.",
    url: `${siteConfig.url}/about`,
  },
};

const timeline = [
  { year: "2017", event: "The founding vision for Tropical Bay is conceived on a walk along Malpe Beach at sunset." },
  { year: "2018", event: "Land acquisition and architectural design begins — guided by principles of low-impact, coastal-sensitive construction." },
  { year: "2019", event: "Tropical Bay by Malpe opens its doors with its three inaugural suites and The Palm Table restaurant." },
  { year: "2020", event: "Despite global challenges, we deepened our community ties, supporting local fishermen and artisans." },
  { year: "2022", event: "Launched the Malpe Experience Programme — curated guest experiences celebrating the culture and ecology of the coast." },
  { year: "2023", event: "Rated among the Top 10 Boutique Resorts in Karnataka by leading travel publications." },
  { year: "2024", event: "Introduced our Sustainability Pledge — zero single-use plastics, solar water heating, and local sourcing commitments." },
  { year: "2025", event: "Celebrating six years of coastal hospitality, still guided by our original belief: the sea deserves the finest welcome." },
];

const values = [
  {
    title: "Rooted in Place",
    desc: "We are inseparable from the coast we call home. Everything we do honours the landscape, culture, and community of Malpe.",
  },
  {
    title: "Understated Excellence",
    desc: "We believe in luxury that whispers rather than shouts — thoughtful details, impeccable quality, and genuine warmth.",
  },
  {
    title: "Responsible Hospitality",
    desc: "We are stewards of the Karnataka coastline. Our commitment to sustainability is woven into every operational decision.",
  },
  {
    title: "Personal Connection",
    desc: "Every guest has a story. We listen, we learn, and we craft a stay around who you are — not who we expect you to be.",
  },
];

const team = [
  { name: "Arjun Shetty", role: "Founder & Director", initial: "AS" },
  { name: "Kavitha Rao", role: "Head of Hospitality", initial: "KR" },
  { name: "Dinesh Prabhu", role: "Executive Chef", initial: "DP" },
  { name: "Preethi Nayak", role: "Guest Experience Manager", initial: "PN" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero about-hero">
        <div className="page-hero-overlay" aria-hidden="true" />
        <FadeIn className="container-resort page-hero-content">
          <span className="text-overline page-hero-overline">Our Story</span>
          <h1 className="text-h1 page-hero-title">A Resort Born from the Sea</h1>
          <p className="page-hero-desc">
            Tropical Bay by Malpe was not built to fill a gap in the market. It was built because
            one stretch of Karnataka coastline was too beautiful to remain undiscovered —
            and too special to be developed carelessly.
          </p>
        </FadeIn>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding-lg bg-cream" aria-labelledby="about-mvv-heading">
        <div className="container-resort">
          <FadeIn>
            <SectionHeading
              overline="What We Stand For"
              title="Purpose, Vision, and Values"
              id="about-mvv-heading"
            />
          </FadeIn>

          <div className="mvv-grid">
            <FadeIn delay={0.1}>
              <div className="mvv-card mvv-mission">
                <span className="mvv-label text-overline">Mission</span>
                <h2 className="mvv-title">To serve the finest expression of coastal Karnataka hospitality</h2>
                <p className="mvv-text">
                  Our mission is to offer an experience so deeply connected to the Malpe coast
                  that it could exist nowhere else on earth — rooted in authenticity, delivered with luxury.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="mvv-card mvv-vision">
                <span className="mvv-label text-overline">Vision</span>
                <h2 className="mvv-title">To be the standard-bearer of boutique resort hospitality in South India</h2>
                <p className="mvv-text">
                  We envision a future where conscious, place-centred luxury is not the exception
                  but the expectation — and Tropical Bay leads that conversation.
                </p>
              </div>
            </FadeIn>
          </div>

          <StaggerContainer className="values-grid">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="value-card">
                  <h3 className="value-title">{v.title}</h3>
                  <p className="value-desc">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding-lg bg-navy" aria-labelledby="timeline-heading">
        <div className="container-resort">
          <FadeIn>
            <SectionHeading
              overline="Our Journey"
              title="How We Got Here"
              subtitle="Six years of building something extraordinary, one detail at a time."
              align="center"
              light
              id="timeline-heading"
            />
          </FadeIn>

          <div className="timeline">
            {timeline.map((item, i) => (
              <FadeIn key={item.year} delay={0.08 * i}>
                <div className={`timeline-item ${i % 2 === 0 ? "timeline-left" : "timeline-right"}`}>
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-dot" aria-hidden="true" />
                  <div className="timeline-content">
                    <p className="timeline-text">{item.event}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding-lg bg-off-white" aria-labelledby="team-heading">
        <div className="container-resort">
          <FadeIn>
            <SectionHeading
              overline="Meet the Team"
              title="The Faces Behind the Experience"
              subtitle="Our small, passionate team brings decades of combined hospitality experience — and an infectious love for this coastline."
              align="center"
              id="team-heading"
            />
          </FadeIn>

          <StaggerContainer className="team-grid">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <div className="team-card">
                  <div className="team-avatar" aria-hidden="true">
                    {member.initial}
                  </div>
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.3} className="about-cta">
            <p className="about-cta-text">
              Would you like to be part of our story? We're always looking for passionate
              hospitality professionals who love the coast.
            </p>
            <Link href="/contact" className="btn btn-secondary">Get in Touch</Link>
          </FadeIn>
        </div>
      </section>

      
    </>
  );
}
