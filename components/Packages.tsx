"use client";

import ScrollLink from "./ScrollLink";
import { useTranslation } from "@/lib/i18n";

const PACKAGE_KEYS = [
  { nameKey: "starter_name", descKey: "starter_desc", featPrefix: "starter_feat", featCount: 6, color: "#00d4ff", highlight: false },
  { nameKey: "growth_name", descKey: "growth_desc", featPrefix: "growth_feat", featCount: 7, color: "#0066ff", highlight: true },
  { nameKey: "enterprise_name", descKey: "enterprise_desc", featPrefix: "enterprise_feat", featCount: 7, color: "#a855f7", highlight: false },
];

export default function Packages() {
  const { t } = useTranslation();
  return (
    <section id="packages" style={{ padding: "100px 24px", position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent)",
        }}
      />
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div
            style={{
              color: "#00d4ff",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            {t("packages.badge")}
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            {t("packages.title")}<span className="gradient-text">{t("packages.title_highlight")}</span>
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#9ca3af",
              marginTop: 16,
              maxWidth: 480,
              margin: "16px auto 0",
            }}
          >
            {t("packages.subtitle")}
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
            alignItems: "start",
          }}
        >
          {PACKAGE_KEYS.map(({ nameKey, descKey, featPrefix, featCount, color, highlight }) => (
            <div
              key={nameKey}
              className="pkg-card"
              onClick={() => {
                const features = Array.from({ length: featCount }, (_, i) => i + 1)
                  .map((i) => `  ✓ ${t(`packages.${featPrefix}${i}`)}`).join("\n");
                const msg = `${t(`packages.${nameKey}`)}\n${t(`packages.${descKey}`)}\n${features}`;
                window.dispatchEvent(new CustomEvent("selectPackage", { detail: msg }));
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                background: highlight
                  ? "linear-gradient(135deg, rgba(0,102,255,0.2), rgba(0,212,255,0.1))"
                  : "rgba(255,255,255,0.02)",
                border: `1px solid ${highlight ? "rgba(0,212,255,0.3)" : "rgba(255,255,255,0.06)"}`,
                borderRadius: 24,
                padding: 36,
                position: "relative",
                cursor: "pointer",
              }}
            >
              {highlight && (
                <div
                  style={{
                    position: "absolute",
                    top: -14,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "linear-gradient(135deg, #00d4ff, #0066ff)",
                    color: "#000",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "5px 16px",
                    borderRadius: 100,
                  }}
                >
                  {t("packages.most_popular")}
                </div>
              )}
              <div
                style={{
                  color,
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                {t(`packages.${nameKey}`)}
              </div>

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "#9ca3af",
                  fontSize: "0.88rem",
                  marginBottom: 28,
                  lineHeight: 1.6,
                }}
              >
                {t(`packages.${descKey}`)}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
                {Array.from({ length: featCount }, (_, i) => i + 1).map((i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.88rem",
                      color: "#9ca3af",
                    }}
                  >
                    <span style={{ color }}>✓</span>
                    {t(`packages.${featPrefix}${i}`)}
                  </div>
                ))}
              </div>
              <ScrollLink targetId="contact">
                <button
                  className={highlight ? "glow-btn" : "outline-btn"}
                  style={{ width: "100%", padding: "14px", minHeight: 48, borderRadius: 12, fontSize: "0.9rem" }}
                >
                  {highlight ? t("packages.cta_started") : t("packages.cta_contact")}
                </button>
              </ScrollLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
