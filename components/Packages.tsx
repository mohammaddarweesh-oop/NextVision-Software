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

  const selectPackage = (nameKey: string, descKey: string, featPrefix: string, featCount: number) => {
    const pkgName = t(`packages.${nameKey}`);
    const pkgDesc = t(`packages.${descKey}`);
    const features = Array.from({ length: featCount }, (_, i) => i + 1)
      .map((i) => `  ✓ ${t(`packages.${featPrefix}${i}`)}`)
      .join("\n");

    const msg = `${t("packages.inquire_title")}${pkgName}\n\n${t("packages.inquire_desc_label")}${pkgDesc}\n\n${t("packages.inquire_features_label")}${features}\n\n${t("packages.inquire_footer")}`;

    // 1. Dispatch custom event for Contact.tsx
    window.dispatchEvent(new CustomEvent("selectPackage", { detail: msg }));

    // 2. Fallback in sessionStorage
    try {
      sessionStorage.setItem("nv_selected_package", msg);
    } catch {}

    // 3. Directly update textarea DOM element if present and trigger input event
    const textarea = document.getElementById("message") as HTMLTextAreaElement | null;
    if (textarea) {
      textarea.value = msg;
      textarea.dispatchEvent(new Event("input", { bubbles: true }));
    }

    // 4. Smooth scroll to contact section
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      const top = contactEl.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }

    // 5. Focus the textarea so user sees the message filled immediately
    setTimeout(() => {
      const el = document.getElementById("message");
      if (el) el.focus();
    }, 450);
  };

  const askAboutFastPay = () => {
    const msg = t("packages.fastpay_inquire_msg");
    window.dispatchEvent(new CustomEvent("selectPackage", { detail: msg }));
    try {
      sessionStorage.setItem("nv_selected_package", msg);
    } catch {}
    const textarea = document.getElementById("message") as HTMLTextAreaElement | null;
    if (textarea) {
      textarea.value = msg;
      textarea.dispatchEvent(new Event("input", { bubbles: true }));
    }
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      const top = contactEl.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setTimeout(() => {
      document.getElementById("message")?.focus();
    }, 450);
  };

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
              onClick={() => selectPackage(nameKey, descKey, featPrefix, featCount)}
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

              <button
                className={highlight ? "glow-btn" : "outline-btn"}
                onClick={(e) => {
                  e.stopPropagation();
                  selectPackage(nameKey, descKey, featPrefix, featCount);
                }}
                style={{
                  width: "100%",
                  padding: "14px",
                  minHeight: 48,
                  borderRadius: 12,
                  fontSize: "0.9rem",
                  cursor: "pointer",
                }}
              >
                {highlight ? t("packages.cta_started") : t("packages.cta_contact")}
              </button>
            </div>
          ))}
        </div>

        {/* FastPay SaaS Subtle Banner */}
        <div
          style={{
            marginTop: 48,
            background: "linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(0, 102, 255, 0.08))",
            border: "1px solid rgba(0, 212, 255, 0.2)",
            borderRadius: 20,
            padding: "clamp(20px, 3vw, 28px) clamp(20px, 4vw, 36px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
            boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16, maxWidth: 760 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                background: "linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(0, 102, 255, 0.2))",
                border: "1px solid rgba(0, 212, 255, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.4rem",
                flexShrink: 0,
              }}
            >
              🚀
            </div>
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "3px 10px",
                  borderRadius: 100,
                  background: "rgba(0, 212, 255, 0.12)",
                  color: "#00d4ff",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: 6,
                }}
              >
                <span>⚡</span> {t("packages.fastpay_banner_badge")}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)",
                  color: "#e8eaf0",
                  lineHeight: 1.6,
                }}
              >
                <span style={{ fontWeight: 700 }}>{t("packages.fastpay_banner_title")}</span>{" "}
                <span style={{ color: "#9ca3af" }}>
                  {t("packages.fastpay_banner_text")}
                </span>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            <ScrollLink targetId="casestudy">
              <button
                className="outline-btn"
                style={{
                  padding: "10px 20px",
                  minHeight: 44,
                  borderRadius: 10,
                  fontSize: "0.85rem",
                  whiteSpace: "nowrap",
                }}
              >
                {t("packages.fastpay_banner_btn")}
              </button>
            </ScrollLink>

            <button
              className="glow-btn"
              onClick={askAboutFastPay}
              style={{
                padding: "10px 22px",
                minHeight: 44,
                borderRadius: 10,
                fontSize: "0.85rem",
                whiteSpace: "nowrap",
                cursor: "pointer",
              }}
            >
              {t("packages.fastpay_banner_ask")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
