"use client";

import CountUp from "@/components/ui/CountUp";
import styles from "./Welcome.module.css";

const stats = [
  { value: "250+", label: "Happy Guests" },
  { value: "100%", label: "Guest Satisfaction" },
  { value: "9", label: "Riverside Rooms" },
];

export default function WelcomeStats() {
  return (
    <div className={styles.statsGrid}>
      {stats.map((s) => (
        <div className={styles.statCard} key={s.label}>
          <h3>
            <CountUp value={s.value} />
          </h3>
          <p>{s.label}</p>
        </div>
      ))}
    </div>
  );
}
