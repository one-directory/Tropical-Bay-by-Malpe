"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs, faqCategories } from "@/lib/data/faqs";
import type { FAQCategory } from "@/lib/data/faqs";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";

export default function FAQsClient() {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const filteredFaqs =
    activeCategory === "All"
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <>
      <FadeIn>
        <SectionHeading
          overline="Frequently Asked Questions"
          title="Everything You Need to Know"
          subtitle="We've answered the questions most guests ask — from reservations and dining to experiences and local travel. If you don't find what you need, our concierge team is always available."
          id="faqs-heading"
        />
      </FadeIn>

      {/* Category Filter */}
      <div className="faq-filters" role="tablist" aria-label="FAQ categories">
        {faqCategories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={activeCategory === cat}
            className={`faq-filter-btn ${activeCategory === cat ? "filter-active" : ""}`}
            onClick={() => {
              setActiveCategory(cat);
              setOpenId(null);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion */}
      <div className="faq-accordion" role="list" aria-live="polite">
        <AnimatePresence initial={false}>
          {filteredFaqs.map((faq, i) => (
            <motion.div
              key={faq.id}
              role="listitem"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="faq-item"
            >
              <button
                className={`faq-trigger ${openId === faq.id ? "faq-trigger-open" : ""}`}
                onClick={() => toggle(faq.id)}
                aria-expanded={openId === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
                id={`faq-btn-${faq.id}`}
              >
                <div className="faq-trigger-left">
                  <span className="faq-category-tag">{faq.category}</span>
                  <span className="faq-question">{faq.question}</span>
                </div>
                <ChevronDown
                  size={18}
                  className={`faq-chevron ${openId === faq.id ? "faq-chevron-open" : ""}`}
                  aria-hidden="true"
                />
              </button>

              <AnimatePresence initial={false}>
                {openId === faq.id && (
                  <motion.div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="faq-answer">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <style>{`
        /* Filters */
        .faq-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 3rem;
          margin-bottom: 2.5rem;
        }

        .faq-filter-btn {
          padding: 0.5rem 1.25rem;
          border: 1px solid rgba(13, 27, 42, 0.12);
          border-radius: 2px;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          color: rgba(13, 27, 42, 0.65);
          background: var(--color-white);
          cursor: pointer;
          transition: all var(--transition-base);
        }

        .faq-filter-btn:hover {
          border-color: var(--color-accent);
          color: var(--color-accent);
        }

        .filter-active {
          background: var(--color-navy);
          border-color: var(--color-navy);
          color: var(--color-white);
        }

        /* Accordion */
        .faq-accordion {
          display: flex;
          flex-direction: column;
          gap: 0.625rem;
        }

        .faq-item {
          background: var(--color-white);
          border: 1px solid rgba(13, 27, 42, 0.06);
          border-radius: 4px;
          overflow: hidden;
          box-shadow: var(--shadow-luxury);
          transition: box-shadow var(--transition-smooth);
        }

        .faq-item:has(.faq-trigger-open) {
          border-color: rgba(47, 111, 109, 0.25);
          box-shadow: var(--shadow-card);
        }

        .faq-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          padding: 1.5rem 1.75rem;
          cursor: pointer;
          background: transparent;
          text-align: left;
          transition: background var(--transition-base);
        }

        .faq-trigger:hover {
          background: rgba(13, 27, 42, 0.02);
        }

        .faq-trigger-open {
          background: rgba(47, 111, 109, 0.03);
        }

        .faq-trigger-left {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          flex: 1;
        }

        .faq-category-tag {
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-gold);
        }

        .faq-question {
          font-family: var(--font-serif);
          font-size: 1rem;
          font-weight: 500;
          color: var(--color-navy);
          line-height: 1.4;
        }

        .faq-chevron {
          flex-shrink: 0;
          color: rgba(13, 27, 42, 0.4);
          transition: transform var(--transition-smooth), color var(--transition-base);
        }

        .faq-chevron-open {
          transform: rotate(180deg);
          color: var(--color-accent);
        }

        .faq-answer {
          padding: 0 1.75rem 1.75rem;
          font-size: 0.925rem;
          line-height: 1.8;
          color: rgba(13, 27, 42, 0.65);
          border-top: 1px solid rgba(13, 27, 42, 0.05);
          padding-top: 1.25rem;
          margin: 0 1.75rem;
        }
      `}</style>
    </>
  );
}
