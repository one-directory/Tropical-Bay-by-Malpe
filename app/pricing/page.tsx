import type { Metadata } from "next";

export const dynamic = 'force-dynamic';
import { pricingPlans } from "@/lib/data/pricing";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerReveal";
import { Check, Star } from "lucide-react";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent, seasonal pricing for all suites at Tropical Bay by Malpe. Weekday, weekend, holiday, and peak season rates for King, Queen, and Superior Suites.",
  alternates: { canonical: `${siteConfig.url}/pricing` },
  openGraph: {
    title: "Pricing | Tropical Bay by Malpe",
    description: "Find the perfect rate for your coastal escape at Malpe's premier boutique resort.",
    url: `${siteConfig.url}/pricing`,
  },
};

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero pricing-hero">
        <div className="page-hero-overlay" aria-hidden="true" />
        <FadeIn className="container-resort page-hero-content">
          <span className="text-overline page-hero-overline">Rates & Packages</span>
          <h1 className="text-h1 page-hero-title">Transparent, Honest Pricing</h1>
          <p className="page-hero-desc">
            All rates include complimentary breakfast for two and full resort access.
            No hidden fees. No surprises. Just exceptional value for genuine luxury.
          </p>
        </FadeIn>
      </section>

      {/* Pricing Plans */}
      <section className="section-padding-lg bg-off-white" aria-labelledby="pricing-heading">
        <div className="container-resort">
          <FadeIn>
            <SectionHeading
              overline="Our Rates"
              title="Choose Your Season"
              subtitle="Our pricing reflects the seasons of the Karnataka coast — from serene midweek escapes to the vibrant peak of the Arabian Sea winter."
              align="center"
              id="pricing-heading"
            />
          </FadeIn>

          <StaggerContainer className="pricing-grid">
            {pricingPlans.map((plan) => (
              <StaggerItem key={plan.id}>
                <article
                  className={`pricing-card ${plan.badge ? "pricing-card-featured" : ""}`}
                  aria-label={`${plan.name} pricing`}
                >
                  {plan.badge && (
                    <div className="pricing-badge">
                      <Star size={11} aria-hidden="true" />
                      {plan.badge}
                    </div>
                  )}
                  <div className="pricing-header">
                    <h2 className="pricing-name">{plan.name}</h2>
                    <p className="pricing-period">{plan.period}</p>
                    <p className="pricing-desc">{plan.description}</p>
                  </div>

                  <div className="pricing-rooms">
                    {plan.rooms.map((r) => (
                      <div key={r.roomName} className="pricing-room-row">
                        <span className="pricing-room-name">{r.roomName}</span>
                        <span className="pricing-room-price">
                          ₹{r.price.toLocaleString("en-IN")}
                          <span className="pricing-per"> /night</span>
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pricing-includes">
                    <p className="pricing-includes-label text-overline">Included</p>
                    <ul>
                      {plan.includes.map((inc) => (
                        <li key={inc} className="pricing-include-item">
                          <Check size={12} aria-hidden="true" />
                          {inc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a href="/contact" className={`btn pricing-cta ${plan.badge ? "btn-primary" : "btn-secondary"}`}>
                    Book This Rate
                  </a>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Notes */}
          <FadeIn delay={0.3}>
            <div className="pricing-notes">
              <h3 className="notes-title">Good to Know</h3>
              <ul className="notes-list">
                {[
                  "All rates are per room per night and inclusive of 12% GST.",
                  "Complimentary breakfast for 2 adults is included in all rates.",
                  "Children under 5 stay free; children 6–12 at 50% extra.",
                  "A 25% advance deposit confirms your reservation.",
                  "Peak season rates apply from December 20 – January 5.",
                  "Rates subject to change. Best rate guaranteed on direct booking.",
                ].map((note) => (
                  <li key={note} className="note-item">
                    <span className="note-dot" aria-hidden="true" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      
    </>
  );
}
