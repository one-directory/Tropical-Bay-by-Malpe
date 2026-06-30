import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

export default function CTA() {
  return (
    <section className="cta-section" aria-labelledby="cta-heading">
      <div className="cta-bg" aria-hidden="true">
        <div className="cta-visual" />
      </div>
      <div className="cta-overlay" aria-hidden="true" />

      <FadeIn className="cta-content container-resort">
        <span className="text-overline cta-overline">Your Escape Awaits</span>
        <h2 className="text-h1 cta-title" id="cta-heading">
          Begin Your Malpe Story
        </h2>
        <p className="cta-subtitle">
          Whether you are celebrating a milestone, craving a quiet retreat, or simply
          yearning for the sound of the sea — Tropical Bay is ready to welcome you.
          Our suites are available year-round; the ocean always is.
        </p>
        <div className="cta-actions">
          <Link href="/contact" className="btn btn-primary cta-btn-primary">
            Reserve Your Suite
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
          <Link href="/rooms" className="btn btn-ghost">
            Explore Suites
          </Link>
        </div>
        <p className="cta-note">
          Best rate guaranteed · Flexible cancellation · Personalised service
        </p>
      </FadeIn>

      
    </section>
  );
}
