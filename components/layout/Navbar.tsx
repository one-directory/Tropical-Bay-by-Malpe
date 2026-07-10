"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { navItems } from "@/lib/data/site";
import type { NavItem } from "@/lib/types";


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const isHome = pathname === "/";
  const isRoomDetail = pathname.startsWith("/rooms/") && pathname !== "/rooms";
  const isAroundUsDetail = pathname.startsWith("/around-us/") && pathname !== "/around-us";
  const isSolid = scrolled || mobileOpen || isRoomDetail || isAroundUsDetail;

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
        {!isSolid && <div className="navbar-scrim" aria-hidden="true" />}

        <div className="navbar-bar">
          <div className="navbar-inner">
            <Link href="/" className="navbar-logo" aria-label="Tropical Bay by Malpe — Home">
              <img
                src="/images/logo/logo.png"
                alt="Tropical Bay by Malpe"
                className="navbar-logo-img"
              />
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
              <Link href="/contact" className="navbar-book">
                <span className="navbar-book-label">Book Your Stay</span>
              </Link>

              <button
                type="button"
                className={`navbar-burger ${linkTone}`}
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav-panel"
              >
                <Menu size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        <div className="navbar-hairline" aria-hidden="true" />
      </header>

      <div
        id="mobile-nav-panel"
        className={`mobile-nav ${mobileOpen ? "mobile-nav-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="mobile-nav-top">
          <Link href="/" className="navbar-logo mobile-nav-logo" onClick={() => setMobileOpen(false)}>
            <img
              src="/images/logo/logo.png"
              alt="Tropical Bay by Malpe"
              className="navbar-logo-img"
            />
          </Link>
          <button
            type="button"
            className="mobile-nav-close"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} strokeWidth={1.5} />
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
                      size={16}
                      strokeWidth={1.5}
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
            <span className="navbar-book-label">Book Your Stay</span>
          </Link>
        </div>
      </div>

      <style>{`
        :root {
          --tb-ink: #16262B;
          --tb-ink-soft: #24373D;
          --tb-ivory: #FBF8F2;
          --tb-ivory-deep: #F3EEE3;
          --tb-brass: #A9814B;
          --tb-brass-light: #C9A972;
          --tb-teal: #24504A;
          --tb-stone: #6E6A61;
          --tb-hairline: rgba(169, 129, 75, 0.35);
          --tb-ease: cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          overflow: visible;
          background: transparent;
          transition: background 480ms var(--tb-ease);
        }

        .navbar-scrim {
          position: absolute;
          inset: 0;
          height: 8rem;
          background: linear-gradient(180deg, rgba(15, 24, 27, 0.55) 0%, rgba(15, 24, 27, 0) 100%);
          pointer-events: none;
        }

        .navbar-scrolled {
          background: var(--tb-ivory);
        }

        .navbar-hairline {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 1px;
          background: var(--tb-hairline);
          opacity: 0;
          transition: opacity 420ms var(--tb-ease);
        }

        .navbar-scrolled .navbar-hairline { opacity: 1; }

        .navbar-bar {
          position: relative;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 2.5rem;
        }

        .navbar-inner {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 5.5rem;
          padding: 1rem 0;
          transition: min-height 480ms var(--tb-ease), padding 480ms var(--tb-ease);
        }

        .navbar-scrolled .navbar-inner {
          min-height: 4.5rem;
          padding: 0.6rem 0;
        }

        .navbar-center {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
        }

        /* Logo */
        .navbar-logo {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .navbar-logo-img {
          height: 6.5rem;
          width: auto;
          object-fit: contain;
          transition: height 480ms var(--tb-ease), filter 420ms var(--tb-ease);
        }

        .navbar-scrolled .navbar-logo-img {
          height: 5.2rem;
        }

        .navbar-transparent .navbar-logo-img {
          filter: brightness(0) invert(1);
        }

        .mobile-nav-logo .navbar-logo-img {
          height: 5.2rem;
          filter: brightness(0) invert(1);
        }

        /* Desktop nav */
        .navbar-desktop {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 2.25rem;
          flex-shrink: 0;
        }

        .navbar-link {
          position: relative;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
          padding: 0.4rem 0.1rem 0.6rem;
          font-family: var(--font-sans, "Plus Jakarta Sans", sans-serif);
          font-size: 0.76rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
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
          background: var(--tb-brass);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 360ms var(--tb-ease);
        }

        .navbar-link:hover::after,
        .navbar-link-active::after {
          transform: scaleX(1);
        }

        .navbar-link-light { color: rgba(251, 248, 242, 0.88); }
        .navbar-link-light:hover { color: var(--tb-ivory); }

        .navbar-link-dark { color: var(--tb-ink-soft); }
        .navbar-link-dark:hover { color: var(--tb-ink); }

        .navbar-link-active { color: var(--tb-brass) !important; }

        /* Actions */
        .navbar-actions {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.85rem;
          flex-shrink: 0;
        }


        .navbar-phone {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.35rem;
          height: 2.35rem;
          border-radius: 50%;
          border: 1px solid var(--tb-hairline);
          transition: border-color 320ms var(--tb-ease), background 320ms var(--tb-ease);
        }

        .navbar-phone.navbar-link-light {
          border-color: rgba(251, 248, 242, 0.3);
          color: var(--tb-ivory);
        }

        .navbar-phone.navbar-link-dark {
          border-color: var(--tb-hairline);
          color: var(--tb-ink);
        }

        .navbar-phone:hover {
          background: rgba(169, 129, 75, 0.1);
          border-color: var(--tb-brass);
        }

        .navbar-book {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.7rem 1.65rem;
          border-radius: 2px;
          background: var(--tb-brass);
          border: 1px solid var(--tb-brass);
          transition: background 320ms var(--tb-ease), border-color 320ms var(--tb-ease), color 320ms var(--tb-ease);
        }

        .navbar-book:hover {
          background: var(--tb-brass-light);
          border-color: var(--tb-brass-light);
        }

        .navbar-book-label {
          position: relative;
          font-family: var(--font-sans, "Plus Jakarta Sans", sans-serif);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--tb-ivory);
          white-space: nowrap;
        }

        .navbar-burger {
          display: none;
          align-items: center;
          justify-content: center;
          width: 2.35rem;
          height: 2.35rem;
          border-radius: 50%;
          transition: background 300ms var(--tb-ease);
        }

        .navbar-burger.navbar-link-light { color: var(--tb-ivory); }
        .navbar-burger.navbar-link-dark { color: var(--tb-ink); }

        .navbar-burger:hover { background: rgba(169, 129, 75, 0.12); }

        /* Dropdown */
        .nav-dropdown {
          position: relative;
          flex-shrink: 0;
          pointer-events: auto;
        }

        .nav-dropdown-trigger {
          position: relative;
          display: inline-flex;
          flex-direction: column;
          flex-wrap: nowrap;
          align-items: center;
          justify-content: flex-start;
          gap: 0.25rem;
          flex-shrink: 0;
          padding: 0.4rem 0.1rem 0.6rem;
          font-family: var(--font-sans, "Plus Jakarta Sans", sans-serif);
          font-size: 0.76rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
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
          opacity: 0.75;
        }

        .nav-dropdown-trigger::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 1px;
          background: var(--tb-brass);
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
          opacity: 0.7;
        }

        .nav-dropdown-chevron-open { transform: rotate(180deg); }

        .nav-dropdown-menu {
          position: absolute;
          top: calc(100% + 0.9rem);
          left: 50%;
          z-index: 300;
          transform: translateX(-50%) translateY(-6px);
          background: var(--tb-ivory);
          border: 1px solid var(--tb-hairline);
          border-radius: 4px;
          box-shadow: 0 20px 44px rgba(22, 38, 43, 0.14);
          min-width: 300px;
          padding: 0.6rem;
          opacity: 0;
          animation: tb-dropdown-in 320ms var(--tb-ease) forwards;
        }

        @keyframes tb-dropdown-in {
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        .nav-dropdown-menu::before {
          content: "";
          position: absolute;
          top: -0.9rem;
          left: 0;
          right: 0;
          height: 0.9rem;
        }

        .nav-dropdown-item {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 0.75rem;
          padding: 0.8rem 1rem;
          border-radius: 2px;
          transition: background 260ms var(--tb-ease), padding-left 260ms var(--tb-ease);
        }

        .nav-dropdown-item:hover {
          background: var(--tb-ivory-deep);
          padding-left: 1.2rem;
        }

        .nav-dropdown-item-label {
          display: block;
          font-family: var(--font-serif, "Cormorant Garamond", serif);
          font-size: 1.02rem;
          font-weight: 600;
          color: var(--tb-ink);
          margin-bottom: 0.2rem;
          transition: color 260ms var(--tb-ease);
        }

        .nav-dropdown-item:hover .nav-dropdown-item-label { color: var(--tb-brass); }

        .nav-dropdown-item-desc {
          display: block;
          font-family: var(--font-sans, "Plus Jakarta Sans", sans-serif);
          font-size: 0.73rem;
          color: var(--tb-stone);
          line-height: 1.5;
        }

        /* Mobile fullscreen menu */
        .mobile-nav {
          position: fixed;
          inset: 0;
          z-index: 200;
          display: flex;
          flex-direction: column;
          background: var(--tb-ink);
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
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
          padding: 1.5rem 1.5rem 1.25rem;
          border-bottom: 1px solid rgba(169, 129, 75, 0.2);
        }

        /* mobile logo uses image filters now */

        .mobile-nav-close {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          border: 1px solid rgba(169, 129, 75, 0.3);
          color: var(--tb-ivory);
          transition: background 280ms var(--tb-ease), border-color 280ms var(--tb-ease);
        }

        .mobile-nav-close:hover {
          background: rgba(169, 129, 75, 0.12);
          border-color: var(--tb-brass);
        }

        .mobile-nav-list {
          flex: 1;
          overflow-y: auto;
          padding: 1.25rem 1.75rem 2rem;
          display: flex;
          flex-direction: column;
        }

        .mobile-nav-item {
          border-bottom: 1px solid rgba(251, 248, 242, 0.1);
          opacity: 0;
          transform: translateY(12px);
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
          padding: 1.1rem 0.1rem;
          font-family: var(--font-serif, "Cormorant Garamond", serif);
          font-size: 1.4rem;
          font-weight: 600;
          color: var(--tb-ivory);
          text-align: left;
        }

        .mobile-nav-link-active { color: var(--tb-brass-light); }

        .mobile-nav-chevron { transition: transform 340ms var(--tb-ease); color: var(--tb-brass-light); }
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
          padding: 0.6rem 0.1rem 0.6rem 1rem;
          font-family: var(--font-sans, "Plus Jakarta Sans", sans-serif);
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          color: rgba(251, 248, 242, 0.65);
          border-left: 1px solid var(--tb-brass);
        }

        .mobile-nav-sublink:hover { color: var(--tb-brass-light); }

        .mobile-nav-footer {
          padding: 1.5rem 1.75rem 2.25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.1rem;
          border-top: 1px solid rgba(169, 129, 75, 0.2);
        }

        .mobile-nav-book { width: 100%; max-width: 22rem; padding: 0.95rem; background: var(--tb-brass); border-color: var(--tb-brass); }
        .mobile-nav-book:hover { background: var(--tb-brass-light); border-color: var(--tb-brass-light); }

        .mobile-nav-phones {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .mobile-nav-phone {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-sans, "Plus Jakarta Sans", sans-serif);
          font-size: 0.82rem;
          letter-spacing: 0.03em;
          color: rgba(251, 248, 242, 0.7);
        }

        @media (max-width: 1100px) {
          .navbar-desktop { gap: 1.5rem; }
          .navbar-link,
          .nav-dropdown-trigger {
            font-size: 0.7rem;
          }
        }

        @media (max-width: 880px) {
          .navbar-bar { padding: 0 1.5rem; }
          .navbar-center { display: none; }
          .navbar-desktop { display: none; }
          .navbar-callback { display: none; }
          .navbar-burger { display: flex; }
        }

        @media (max-width: 480px) {
          .navbar-bar { padding: 0 1.25rem; }
          .navbar-inner { min-height: 4.25rem; }
          .navbar-logo-sub { letter-spacing: 0.22em; }
        }

        @media (max-width: 380px) {
          .navbar-bar { padding: 0 1rem; }
          .navbar-inner { min-height: 4rem; }
          .navbar-logo-img { height: 4.5rem; }
          .navbar-scrolled .navbar-logo-img { height: 3.75rem; }
          .navbar-book { padding: 0.6rem 1rem; }
        }

        @media (prefers-reduced-motion: reduce) {
          .navbar, .navbar-bar, .navbar-inner, .navbar-link, .navbar-book,
          .mobile-nav, .mobile-nav-item, .mobile-nav-sub, .nav-dropdown-menu {
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
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    onOpen();
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      onClose();
    }, 150);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        onClose();
      }
    };
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [onClose]);

  return (
    <div
      ref={ref}
      className="nav-dropdown"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        className={`nav-dropdown-trigger ${linkTone} ${isCurrent ? "navbar-link-active" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
          }
          onOpen();
        }}
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
        <div className="nav-dropdown-menu">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="nav-dropdown-item"
              onClick={(e) => e.stopPropagation()}
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