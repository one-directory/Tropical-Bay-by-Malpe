"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
      // Show button if scrolled more than 400px
      setIsVisible(scrolled > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check initial position
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-to-top ${isVisible ? "show" : ""}`}
      aria-label="Scroll to top of the page"
      type="button"
    >
      <ChevronUp className="scroll-to-top-icon" size={22} />
    </button>
  );
}
