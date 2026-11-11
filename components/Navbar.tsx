"use client";

import { useState, useEffect } from "react";
import ScrollLink from "./ScrollLink";
import LocaleToggle from "./LocaleToggle";
import { useTranslation } from "@/lib/i18n";

const NAV_ITEMS = [
  { id: "about" },
  { id: "services" },
  { id: "process" },
  { id: "casestudy" },
  { id: "packages" },
  { id: "founder" },
  { id: "contact" },
];

const TRACKED_SECTIONS = [
  "hero",
  "about",
  "services",
  "process",
  "casestudy",
  "techstack",
  "packages",
  "founder",
  "faq",
  "testimonials",
  "contact",
];

export default function Navbar() {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      for (const id of TRACKED_SECTIONS) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    const handleSectionActive = (e: Event) => {
      setActiveSection((e as CustomEvent).detail);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("sectionActive", handleSectionActive);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("sectionActive", handleSectionActive);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.4s",
        background: scrolled ? "rgba(5,8,16,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        <ScrollLink
          targetId="hero"
          className="flex items-center gap-2.5"
          style={{ cursor: "pointer" }}
        >
          <div
            style={{
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="/NextVisionlogo.png"
              alt=""
              width={92}
              height={84}
              style={{ height:60, width: "auto", cursor: "pointer" }}
            />
          </div>
          <span style={{ fontSize: "1.1rem", fontWeight: 800, letterSpacing: "-0.02em", direction: "ltr", unicodeBidi: "isolate" }}>
            Next<span className="gradient-text">Vision</span>
          </span>
        </ScrollLink>

        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {NAV_ITEMS.map((item) => (
            <ScrollLink
              key={item.id}
              targetId={item.id}
              className={`nav-link ${activeSection === item.id ? "active" : ""}`}
              style={{ minHeight: 48, display: "flex", alignItems: "center" }}
            >
              {t(`nav.${item.id}`)}
            </ScrollLink>
          ))}
          <LocaleToggle />
          <ScrollLink targetId="contact">
              <button className="glow-btn" style={{ padding: "12px 24px", minHeight: 48, borderRadius: 8 }}>
              {t("nav.get_started")}
            </button>
          </ScrollLink>
        </div>

        <div
          className="mobile-menu-btn hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span style={{ transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
        </div>
      </div>

      {menuOpen && (
        <div
          className="mobile-nav"
          style={{
            background: "rgba(5,8,16,0.98)",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            padding: "20px 24px 28px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {NAV_ITEMS.map((item) => (
            <ScrollLink
              key={item.id}
              targetId={item.id}
              className="nav-link"
              style={{ fontSize: "1rem", minHeight: 48, display: "flex", alignItems: "center" }}
              onClick={closeMenu}
            >
              {t(`nav.${item.id}`)}
            </ScrollLink>
          ))}
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <LocaleToggle />
            <ScrollLink targetId="contact" onClick={closeMenu} style={{ flex: 1 }}>
              <button className="glow-btn" style={{ padding: "12px", minHeight: 48, borderRadius: 8, width: "100%", marginTop: 8 }}>
                {t("nav.get_started")}
              </button>
            </ScrollLink>
          </div>
        </div>
      )}
    </nav>
  );
}
