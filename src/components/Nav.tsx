"use client";

import { useEffect, useRef, useState } from "react";
import { siteCopy } from "@/data/portfolio";
import ThemeToggle from "@/components/ThemeToggle";

const SECTION_IDS = siteCopy.navigation.links.map((l) => l.href.replace("#", ""));

export default function Nav() {
  const { navigation } = siteCopy;
  const [activeId, setActiveId] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  /* ── Scroll-shadow on nav ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Active section via Intersection Observer ── */
  useEffect(() => {
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean,
    ) as HTMLElement[];
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ── Lock body scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      ref={navRef}
      className={`site-nav${scrolled ? " nav-scrolled" : ""}`}
      aria-label="Primary"
    >
      <a className="nav-logo" href="#top">
        {navigation.brand}
      </a>

      {/* Desktop links */}
      <div className="nav-links" role="list">
        {navigation.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`nav-link${activeId === link.href.replace("#", "") ? " nav-link-active" : ""}`}
            role="listitem"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="nav-actions">
        <ThemeToggle />
        <a className="nav-cta" href="#contact">
          {navigation.ctaLabel}
        </a>
        {/* Hamburger button (mobile only) */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className={`hamburger-bar${menuOpen ? " open" : ""}`} />
          <span className={`hamburger-bar${menuOpen ? " open" : ""}`} />
          <span className={`hamburger-bar${menuOpen ? " open" : ""}`} />
        </button>
      </div>

      {/* Mobile slide-in panel + backdrop */}
      <div
        className={`nav-overlay${menuOpen ? " nav-overlay-visible" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      <div className={`nav-drawer${menuOpen ? " nav-drawer-open" : ""}`}>
        {navigation.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`nav-drawer-link${activeId === link.href.replace("#", "") ? " nav-link-active" : ""}`}
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
        <a className="nav-cta nav-drawer-cta" href="#contact" onClick={closeMenu}>
          {navigation.ctaLabel}
        </a>
      </div>
    </nav>
  );
}
