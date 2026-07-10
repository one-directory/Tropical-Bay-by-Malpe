import Image from "next/image";
import { Check, Compass } from "lucide-react";
import WelcomeStats from "./WelcomeStats";
import SectionHeading from "@/components/ui/SectionHeading";
import styles from "./Welcome.module.css";

const ABOUT_IMAGE = "/images/home/about2.webp";

export default function Welcome() {
  const features = [
    "Luxury Riverside Stay",
    "Premium Family Rooms",
    "Pet Friendly",
    "Adventure Activities",
    "Scenic River Views",
    "Authentic Hospitality",
  ];

  return (
    <section id="welcome" className={`${styles.aboutHome} section-padding-lg`}>
      <div className="container-resort">
        <div className={styles.aboutGrid}>
          <div className={styles.aboutImageWrap}>
            <div className={styles.aboutImageCard}>
              <Image
                src={ABOUT_IMAGE}
                alt="Tropical Bay Riverside Resort"
                fill
                className={styles.aboutImage}
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </div>

            <div className={`${styles.floatingCard} glass`}>
              <div className={styles.floatingCardIcon} aria-hidden="true">
                <Compass size={20} strokeWidth={1.5} />
              </div>
              <div className={styles.floatingCardText}>
                <h4>Riverside</h4>
                <p>Peaceful Location</p>
              </div>
            </div>
          </div>

          <div className="about-content">
            <SectionHeading
              overline="About Us"
              title="Where Comfort Meets Serenity"
              align="left"
              className="mb-6"
            />

            <p className={styles.aboutText}>
              Nestled along the peaceful riverside of Malpe, Tropical Bay blends
              elegant accommodation with nature's beauty. Every stay is designed
              to provide comfort, relaxation, warm hospitality and unforgettable
              memories surrounded by lush landscapes and tranquil waters.
            </p>

            <div className={styles.featureGrid}>
              {features.map((item) => (
                <div key={item} className={styles.featureItem}>
                  <Check size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <WelcomeStats />
          </div>
        </div>
      </div>
    </section>
  );
}
