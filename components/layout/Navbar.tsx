"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Phone, Menu, X } from "lucide-react";
import { navItems, siteConfig } from "@/lib/data/site";
import type { NavItem } from "@/lib/types";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // --- NEW: mobile menu state (the original component had no mobile menu at all) ---
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setActiveDropdown(null);
    // NEW: close mobile menu on route change
    setMobileOpen(false);
    setMobileExpanded(null);
  }

  // NEW: lock body scroll while the fullscreen mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // NEW: close mobile menu with Escape (keyboard accessibility)
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const isHome = pathname === "/";
  const isSolid = scrolled || !isHome || mobileOpen;

  const isItemActive = (item: NavItem) => {
    if (item.href && pathname === item.href) return true;
    if (item.children) {
      return item.children.some((child) => pathname === child.href);
    }
    return false;
  };

  const linkTone = isSolid ? "navbar-link-dark" : "navbar-link-light";

  return (
    <>
      <header
        className={`navbar ${isSolid ? "navbar-scrolled" : "navbar-transparent"}`}
        role="banner"
      >
        <div className="navbar-bar">
          <div className="navbar-inner">
            <Link href="/" className="navbar-logo" aria-label="Tropical Bay by Malpe — Home">
              <span className="navbar-logo-mark">
                <svg viewBox="0 0 40 40" className="navbar-logo-mark-svg" aria-hidden="true">
                  <circle cx="20" cy="20" r="19" className="navbar-logo-ring" />
                  <path
                    d="M9 23c3-6 6-9 11-9s8 3 11 9"
                    className="navbar-logo-wave"
                  />
                  <path
                    d="M9 27c3-5 6-7.5 11-7.5s8 2.5 11 7.5"
                    className="navbar-logo-wave navbar-logo-wave-2"
                  />
                  <circle cx="20" cy="13" r="2.1" className="navbar-logo-sun" />
                </svg>
              </span>
              <span className="navbar-logo-text">
                <span className="navbar-logo-name">Tropical Bay</span>
                <span className="navbar-logo-sub">By&nbsp;Malpe</span>
              </span>
            </Link>

            <div className="navbar-center">
              <nav className="navbar-desktop" aria-label="Main navigation">
                {navItems.map((item) =>
                  item.children ? (
                    <DropdownItem
                      key={item.label}
                      item={item}
                      isActive={activeDropdown === item.label}
                      isCurrent={isItemActive(item)}
                      onOpen={() => setActiveDropdown(item.label)}
                      onClose={() => setActiveDropdown(null)}
                      linkTone={linkTone}
                    />
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href!}
                      className={`navbar-link ${linkTone} ${isItemActive(item) ? "navbar-link-active" : ""}`}
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </nav>
            </div>

            <div className="navbar-actions">
              <a href={`tel:${siteConfig.whatsapp}`} className="navbar-phone" aria-label="Call us">
                <Phone size={15} />
              </a>
              <Link href="/contact" className="navbar-book">
                <span className="navbar-book-shine" aria-hidden="true" />
                <span className="navbar-book-label">Book Your Stay</span>
              </Link>

              {/* NEW: mobile menu trigger — no mobile menu existed previously */}
              <button
                type="button"
                className={`navbar-burger ${linkTone}`}
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav-panel"
              >
                <Menu size={22} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* NEW: fullscreen luxury mobile menu */}
      <div
        id="mobile-nav-panel"
        className={`mobile-nav ${mobileOpen ? "mobile-nav-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="mobile-nav-top">
          <Link href="/" className="navbar-logo" onClick={() => setMobileOpen(false)}>
            <span className="navbar-logo-mark">
              <svg viewBox="0 0 40 40" className="navbar-logo-mark-svg" aria-hidden="true">
                <circle cx="20" cy="20" r="19" className="navbar-logo-ring" />
                <path d="M9 23c3-6 6-9 11-9s8 3 11 9" className="navbar-logo-wave" />
                <path d="M9 27c3-5 6-7.5 11-7.5s8 2.5 11 7.5" className="navbar-logo-wave navbar-logo-wave-2" />
                <circle cx="20" cy="13" r="2.1" className="navbar-logo-sun" />
              </svg>
            </span>
            <span className="navbar-logo-text">
              <span className="navbar-logo-name">Tropical Bay</span>
              <span className="navbar-logo-sub">By&nbsp;Malpe</span>
            </span>
          </Link>
          <button
            type="button"
            className="mobile-nav-close"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        <nav className="mobile-nav-list" aria-label="Mobile navigation">
          {navItems.map((item, i) => (
            <div
              className="mobile-nav-item"
              key={item.label}
              style={{ transitionDelay: mobileOpen ? `${80 + i * 60}ms` : "0ms" }}
            >
              {item.children ? (
                <>
                  <button
                    type="button"
                    className={`mobile-nav-link ${isItemActive(item) ? "mobile-nav-link-active" : ""}`}
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                    }
                    aria-expanded={mobileExpanded === item.label}
                  >
                    {item.label}
                    <ChevronDown
                      size={18}
                      className={`mobile-nav-chevron ${mobileExpanded === item.label ? "mobile-nav-chevron-open" : ""}`}
                    />
                  </button>
                  <div
                    className={`mobile-nav-sub ${mobileExpanded === item.label ? "mobile-nav-sub-open" : ""}`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="mobile-nav-sublink"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.href!}
                  className={`mobile-nav-link ${isItemActive(item) ? "mobile-nav-link-active" : ""}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="mobile-nav-footer">
          <Link href="/contact" className="navbar-book mobile-nav-book" onClick={() => setMobileOpen(false)}>
            <span className="navbar-book-shine" aria-hidden="true" />
            <span className="navbar-book-label">Book Your Stay</span>
          </Link>
          <a href={`tel:${siteConfig.whatsapp}`} className="mobile-nav-phone">
            <Phone size={15} /> {siteConfig.whatsapp}
          </a>
        </div>
      </div>

      <style>{`
        :root {
          --tb-navy: #0A2540;
          --tb-gold: #C9A96E;
          --tb-gold-light: #E4CFA0;
          --tb-seagreen: #2F6F6D;
          --tb-sand: #F5F1E8;
          --tb-white: #FFFFFF;
          --tb-text: #1E293B;
          --tb-muted: #64748B;
          --tb-glass-bg: rgba(255, 255, 255, 0.08);
          --tb-glass-border: rgba(255, 255, 255, 0.18);
          --tb-ease: cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          overflow: visible;
          transition: background 480ms var(--tb-ease), box-shadow 480ms var(--tb-ease);
        }

        .navbar-transparent {
          background: var(--tb-navy);
        }

        .navbar-scrolled {
          background: var(--tb-navy);
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.18);
        }

        .navbar-bar {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .navbar-inner {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 5.25rem;
          padding: 0.85rem 0;
          transition: min-height 480ms var(--tb-ease), padding 480ms var(--tb-ease);
        }

        .navbar-scrolled .navbar-inner {
          min-height: 4.5rem;
          padding: 0.55rem 0;
        }

        .navbar-center {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
          pointer-events: none;
        }

        .navbar-center .navbar-desktop {
          pointer-events: auto;
        }

        /* Logo */
        .navbar-logo {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 0.7rem;
          flex-shrink: 0;
        }

        .navbar-logo-mark {
          width: 2.6rem;
          height: 2.6rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 420ms var(--tb-ease);
        }

        .navbar-logo:hover .navbar-logo-mark {
          transform: rotate(8deg) scale(1.06);
        }

        .navbar-logo-mark-svg { width: 100%; height: 100%; }
        .navbar-logo-ring { fill: none; stroke: var(--tb-gold); stroke-width: 1.1; opacity: 0.9; }
        .navbar-logo-wave { fill: none; stroke: var(--tb-gold); stroke-width: 1.3; stroke-linecap: round; opacity: 0.95; }
        .navbar-logo-wave-2 { opacity: 0.55; }
        .navbar-logo-sun { fill: var(--tb-gold); }

        .navbar-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.15;
        }

        .navbar-logo-name {
          font-family: var(--font-serif, "Playfair Display", serif);
          font-size: 1.28rem;
          font-weight: 600;
          letter-spacing: 0.015em;
          color: var(--tb-white);
          transition: color 420ms var(--tb-ease);
        }

        .navbar-logo-sub {
          font-family: var(--font-sans, "Poppins", sans-serif);
          font-size: 0.62rem;
          font-weight: 500;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--tb-gold);
          margin-top: 0.1rem;
        }

        .navbar-scrolled .navbar-logo-name { color: var(--tb-white); }

        /* Desktop nav */
        .navbar-desktop {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 2rem;
          flex-shrink: 0;
        }

        .navbar-link {
          position: relative;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
          padding: 0.35rem 0.15rem 0.55rem;
          font-family: var(--font-sans, "Poppins", sans-serif);
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          line-height: 1.3;
          white-space: nowrap;
          transition: color 320ms var(--tb-ease);
        }

        .navbar-link::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 1px;
          background: var(--tb-gold);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 360ms var(--tb-ease);
        }

        .navbar-link:hover::after,
        .navbar-link-active::after {
          transform: scaleX(1);
        }

        .navbar-link-light { color: rgba(255, 255, 255, 0.92); }
        .navbar-link-light:hover { color: var(--tb-white); }

        .navbar-link-dark { color: rgba(255, 255, 255, 0.85); }
        .navbar-link-dark:hover { color: var(--tb-white); }

        .navbar-link-active { color: var(--tb-gold-light) !important; }

        /* Actions */
        .navbar-actions {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.75rem;
          flex-shrink: 0;
        }

        .navbar-phone {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.4rem;
          height: 2.4rem;
          border-radius: 50%;
          border: 1px solid var(--tb-glass-border);
          color: var(--tb-white);
          transition: background 320ms var(--tb-ease), transform 320ms var(--tb-ease);
        }

        .navbar-phone:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .navbar-book {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 0.7rem 1.7rem;
          border-radius: 999px;
          background: linear-gradient(135deg, #DEC08A 0%, #C9A96E 45%, #A6803F 100%);
          box-shadow: 0 6px 20px rgba(201, 169, 110, 0.35), 0 1px 0 rgba(255, 255, 255, 0.4) inset;
          transition: transform 320ms var(--tb-ease), box-shadow 320ms var(--tb-ease);
        }

        .navbar-book:hover {
          transform: translateY(-2px) scale(1.035);
          box-shadow: 0 10px 28px rgba(201, 169, 110, 0.48), 0 1px 0 rgba(255, 255, 255, 0.5) inset;
        }

        .navbar-book-label {
          position: relative;
          z-index: 1;
          font-family: var(--font-sans, "Poppins", sans-serif);
          font-size: 0.74rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--tb-navy);
          white-space: nowrap;
        }

        .navbar-book-shine {
          position: absolute;
          top: 0;
          left: -60%;
          width: 40%;
          height: 100%;
          background: linear-gradient(
            115deg,
            transparent 0%,
            rgba(255, 255, 255, 0.55) 50%,
            transparent 100%
          );
          transform: skewX(-20deg);
          animation: tb-shine 4.5s ease-in-out infinite;
        }

        @keyframes tb-shine {
          0% { left: -60%; }
          35% { left: 130%; }
          100% { left: 130%; }
        }

        .navbar-burger {
          display: none;
          align-items: center;
          justify-content: center;
          width: 2.4rem;
          height: 2.4rem;
          border-radius: 50%;
          color: var(--tb-white);
          transition: background 300ms var(--tb-ease);
        }

        .navbar-burger:hover { background: rgba(255, 255, 255, 0.1); }

        /* Dropdown */
        .nav-dropdown {
          position: relative;
          flex-shrink: 0;
        }

        .nav-dropdown-trigger {
          position: relative;
          display: inline-flex;
          flex-direction: column;
          flex-wrap: nowrap;
          align-items: center;
          justify-content: flex-start;
          gap: 0.2rem;
          flex-shrink: 0;
          padding: 0.35rem 0.15rem 0.55rem;
          font-family: var(--font-sans, "Poppins", sans-serif);
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          line-height: 1.3;
          white-space: nowrap;
          background: none;
          border: none;
          cursor: pointer;
          transition: color 320ms var(--tb-ease);
        }

        .nav-dropdown-label {
          display: block;
        }

        .nav-dropdown-trigger > svg {
          flex-shrink: 0;
          margin: 0;
          opacity: 0.85;
        }

        .nav-dropdown-trigger::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 1px;
          background: var(--tb-gold);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 360ms var(--tb-ease);
        }

        .nav-dropdown-trigger:hover::after,
        .nav-dropdown-trigger.navbar-link-active::after {
          transform: scaleX(1);
        }

        .nav-dropdown-chevron {
          transition: transform 380ms var(--tb-ease);
          flex-shrink: 0;
          opacity: 0.8;
        }

        .nav-dropdown-chevron-open { transform: rotate(180deg); }

        .nav-dropdown-menu {
          position: absolute;
          top: calc(100% + 0.75rem);
          left: 50%;
          z-index: 300;
          transform: translateX(-50%) translateY(-6px) scale(0.97);
          background: rgba(10, 37, 64, 0.96);
          backdrop-filter: blur(24px) saturate(160%);
          -webkit-backdrop-filter: blur(24px) saturate(160%);
          border: 1px solid var(--tb-glass-border);
          border-radius: 20px;
          box-shadow: 0 24px 60px rgba(10, 37, 64, 0.4), 0 1px 0 rgba(255, 255, 255, 0.06) inset;
          min-width: 300px;
          padding: 0.9rem;
          opacity: 0;
          animation: tb-dropdown-in 360ms var(--tb-ease) forwards;
        }

        @keyframes tb-dropdown-in {
          to { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
        }

        .nav-dropdown-menu::before {
          content: "";
          position: absolute;
          top: -0.75rem;
          left: 0;
          right: 0;
          height: 0.75rem;
        }

        .nav-dropdown-item {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 0.75rem;
          padding: 0.85rem 1rem;
          border-radius: 12px;
          transition: background 280ms var(--tb-ease), padding-left 280ms var(--tb-ease);
        }

        .nav-dropdown-item:hover {
          background: rgba(201, 169, 110, 0.12);
          padding-left: 1.2rem;
        }

        .nav-dropdown-item-label {
          display: block;
          font-family: var(--font-serif, "Playfair Display", serif);
          font-size: 1rem;
          font-weight: 600;
          color: var(--tb-white);
          margin-bottom: 0.25rem;
          transition: color 280ms var(--tb-ease);
        }

        .nav-dropdown-item:hover .nav-dropdown-item-label { color: var(--tb-gold-light); }

        .nav-dropdown-item-desc {
          display: block;
          font-family: var(--font-sans, "Poppins", sans-serif);
          font-size: 0.73rem;
          color: rgba(255, 255, 255, 0.55);
          line-height: 1.5;
        }

        /* Mobile fullscreen menu */
        .mobile-nav {
          position: fixed;
          inset: 0;
          z-index: 200;
          display: flex;
          flex-direction: column;
          background: linear-gradient(165deg, #0A2540 0%, #0d2d4d 55%, #0A2540 100%);
          opacity: 0;
          visibility: hidden;
          transform: translateY(-12px);
          transition: opacity 420ms var(--tb-ease), visibility 0s linear 420ms,
            transform 420ms var(--tb-ease);
        }

        .mobile-nav-open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          transition: opacity 420ms var(--tb-ease), visibility 0s, transform 420ms var(--tb-ease);
        }

        .mobile-nav-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 1.5rem 1rem;
        }

        .mobile-nav-close {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.6rem;
          height: 2.6rem;
          border-radius: 50%;
          border: 1px solid var(--tb-glass-border);
          color: var(--tb-white);
          transition: background 280ms var(--tb-ease), transform 280ms var(--tb-ease);
        }

        .mobile-nav-close:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: rotate(90deg);
        }

        .mobile-nav-list {
          flex: 1;
          overflow-y: auto;
          padding: 1.5rem 1.75rem 2rem;
          display: flex;
          flex-direction: column;
        }

        .mobile-nav-item {
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 460ms var(--tb-ease), transform 460ms var(--tb-ease);
        }

        .mobile-nav-open .mobile-nav-item {
          opacity: 1;
          transform: translateY(0);
        }

        .mobile-nav-link {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.15rem 0.1rem;
          font-family: var(--font-serif, "Playfair Display", serif);
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--tb-white);
          text-align: left;
        }

        .mobile-nav-link-active { color: var(--tb-gold-light); }

        .mobile-nav-chevron { transition: transform 340ms var(--tb-ease); color: var(--tb-gold); }
        .mobile-nav-chevron-open { transform: rotate(180deg); }

        .mobile-nav-sub {
          max-height: 0;
          overflow: hidden;
          transition: max-height 420ms var(--tb-ease), padding 420ms var(--tb-ease);
          display: flex;
          flex-direction: column;
        }

        .mobile-nav-sub-open {
          max-height: 24rem;
          padding-bottom: 0.85rem;
        }

        .mobile-nav-sublink {
          padding: 0.65rem 0.1rem 0.65rem 1rem;
          font-family: var(--font-sans, "Poppins", sans-serif);
          font-size: 0.95rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          color: rgba(255, 255, 255, 0.7);
          border-left: 1px solid var(--tb-gold);
        }

        .mobile-nav-sublink:hover { color: var(--tb-gold-light); }

        .mobile-nav-footer {
          padding: 1.5rem 1.75rem 2.25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .mobile-nav-book { width: 100%; max-width: 22rem; padding: 0.95rem; }

        .mobile-nav-phone {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-sans, "Poppins", sans-serif);
          font-size: 0.85rem;
          letter-spacing: 0.04em;
          color: rgba(255, 255, 255, 0.75);
        }

        @media (max-width: 1100px) {
          .navbar-desktop { gap: 1.25rem; }
          .navbar-link,
          .nav-dropdown-trigger {
            font-size: 0.76rem;
          }
        }

        @media (max-width: 880px) {
          .navbar-bar { padding: 0 1.25rem; }
          .navbar-center { display: none; }
          .navbar-desktop { display: none; }
          .navbar-phone { display: none; }
          .navbar-burger { display: flex; }
        }

        @media (max-width: 480px) {
          .navbar-bar { padding: 0 1rem; }
          .navbar-inner { min-height: 4.25rem; }
          .navbar-logo-sub { letter-spacing: 0.22em; }
        }

        @media (prefers-reduced-motion: reduce) {
          .navbar, .navbar-bar, .navbar-inner, .navbar-link, .navbar-book,
          .navbar-book-shine, .mobile-nav, .mobile-nav-item, .mobile-nav-sub,
          .nav-dropdown-menu {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
}

function DropdownItem({
  item,
  isActive,
  isCurrent,
  onOpen,
  onClose,
  linkTone,
}: {
  item: NavItem;
  isActive: boolean;
  isCurrent: boolean;
  onOpen: () => void;
  onClose: () => void;
  linkTone: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  return (
    <div
      ref={ref}
      className="nav-dropdown"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button
        type="button"
        className={`nav-dropdown-trigger ${linkTone} ${isCurrent ? "navbar-link-active" : ""}`}
        onClick={() => (isActive ? onClose() : onOpen())}
        aria-expanded={isActive}
        aria-haspopup="true"
      >
        <span className="nav-dropdown-label">{item.label}</span>
        <ChevronDown
          size={11}
          strokeWidth={2}
          className={`nav-dropdown-chevron ${isActive ? "nav-dropdown-chevron-open" : ""}`}
        />
      </button>
      {isActive && item.children && (
        <div className="nav-dropdown-menu" role="menu">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="nav-dropdown-item"
              role="menuitem"
              onClick={onClose}
            >
              <span>
                <span className="nav-dropdown-item-label">{child.label}</span>
                {child.description && (
                  <span className="nav-dropdown-item-desc">{child.description}</span>
                )}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
