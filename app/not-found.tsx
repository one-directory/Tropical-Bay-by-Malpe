import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Tropical Bay by Malpe",
  description:
    "The page you are looking for could not be found. Return to Tropical Bay by Malpe home page or explore our luxury suites in Udyavara, Udupi.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section
      className="page-hero"
      style={{
        minHeight: "75vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        paddingBlock: "8rem 4rem",
      }}
    >
      <FadeIn className="container-narrow">
        <span
          className="text-overline"
          style={{
            letterSpacing: "0.2em",
            color: "var(--color-secondary)",
            fontSize: "0.9rem",
          }}
        >
          404 Error
        </span>
        <h1
          className="text-h1"
          style={{
            marginBlock: "1rem 1.5rem",
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
          }}
        >
          Page Not Found
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            opacity: 0.85,
            maxWidth: "540px",
            marginInline: "auto",
            marginBottom: "2.5rem",
            lineHeight: "1.6",
          }}
        >
          The quiet shore you are looking for doesn&apos;t seem to exist. Let us guide you back to our main resort homepage or accommodations.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link href="/" className="btn btn-secondary">
            Return to Home
          </Link>
          <Link href="/rooms" className="btn btn-outline text-white">
            View Suites
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
