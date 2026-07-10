"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: string;
  duration?: number;
  className?: string;
}

function parseStatValue(value: string) {
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(\D*)$/);
  if (!match) return { prefix: "", end: 0, suffix: value, decimals: 0 };
  const [, prefix, num, suffix] = match;
  const end = parseFloat(num);
  const decimals = num.includes(".") ? num.split(".")[1].length : 0;
  return { prefix, end, suffix, decimals };
}

export default function CountUp({ value, duration = 2000, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("0");
  const { prefix, end, suffix, decimals } = parseStatValue(value);
  const hasStarted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setDisplay(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasStarted.current) return;
        hasStarted.current = true;

        const start = performance.now();
        const animate = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = end * eased;
          setDisplay(
            `${prefix}${decimals > 0 ? current.toFixed(decimals) : Math.round(current)}${suffix}`
          );
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration, end, prefix, suffix, decimals]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
