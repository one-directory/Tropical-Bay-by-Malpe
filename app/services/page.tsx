import type { Metadata } from "next";



import { services } from "@/lib/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerReveal";
import {
  Car, UtensilsCrossed, Waves, Wifi, BellRing, ParkingCircle,
  Shirt, Map, Sparkles, Check,
} from "lucide-react";

import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Premium resort services at Tropical Bay by Malpe — airport transfers, beachfront dining, private kitchens & barbecue, 24-hour room service, travel concierge, event spaces, and more.",
  alternates: { canonical: `${siteConfig.url}/services` },
  openGraph: {
    title: "Our Services | Tropical Bay by Malpe",
    description: "Everything you could desire, thoughtfully arranged at Malpe's premier boutique resort.",
    url: `${siteConfig.url}/services`,
  },
};

const iconMap: Record<string, React.ElementType> = {
  Car, UtensilsCrossed, Waves, Wifi, BellConcierge: BellRing,
  ParkingCircle, Shirt, Map, Sparkles,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero services-hero">
        <div className="page-hero-overlay" aria-hidden="true" />
        <FadeIn className="container-resort page-hero-content">
          <span className="text-overline page-hero-overline">What We Offer</span>
          <h1 className="text-h1 page-hero-title">Premium Resort Services</h1>
          <p className="page-hero-desc">
            From the moment you arrive to the morning you depart, every service at Tropical Bay
            is designed to make your stay seamless, personal, and genuinely memorable.
          </p>
        </FadeIn>
      </section>

      {/* Services Grid */}
      <section className="section-padding-lg bg-off-white" aria-labelledby="services-heading">
        <div className="container-resort">
          <FadeIn>
            <SectionHeading
              overline="All Services"
              title="Thoughtful in Every Detail"
              subtitle="Nine dedicated services, each crafted around one simple principle: your comfort comes first."
              id="services-heading"
            />
          </FadeIn>

          <StaggerContainer className="services-grid">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon] ?? Sparkles;
              return (
                <StaggerItem key={service.id}>
                  <article className="service-card" aria-label={service.title}>
                    <div className="service-icon-wrap" aria-hidden="true">
                      <IconComponent size={24} className="service-icon" />
                    </div>
                    <h2 className="service-title">{service.title}</h2>
                    <p className="service-desc">{service.description}</p>
                    <ul className="service-features" aria-label={`${service.title} features`}>
                      {service.features.map((f) => (
                        <li key={f} className="service-feature">
                          <Check size={12} aria-hidden="true" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </article>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta section-padding bg-navy">
        <FadeIn className="container-resort services-cta-inner">
          <div>
            <h2 className="text-h2 services-cta-title">Ready to Experience It?</h2>
            <p className="services-cta-desc">
              Book your stay and let our team curate a personalised experience just for you.
            </p>
          </div>
          <a href="/contact" className="btn btn-primary">
            Reserve Your Suite
          </a>
        </FadeIn>
      </section>

      
    </>
  );
}
