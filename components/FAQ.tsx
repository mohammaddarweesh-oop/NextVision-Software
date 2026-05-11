"use client";

import { useState } from "react";
import { useTranslation } from "@/lib/i18n";

const FAQ_ITEMS = [
  { qKey: "q1", aKey: "a1" },
  { qKey: "q2", aKey: "a2" },
  { qKey: "q3", aKey: "a3" },
  { qKey: "q4", aKey: "a4" },
  { qKey: "q5", aKey: "a5" },
  { qKey: "q6", aKey: "a6" },
];

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" style={{ padding: "100px 24px", position: "relative" }}>
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
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
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
            {t("faq.badge")}
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            {t("faq.title")}<span className="gradient-text">{t("faq.title_highlight")}</span>
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {FAQ_ITEMS.map(({ qKey, aKey }, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={qKey}
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: `1px solid ${isOpen ? "rgba(0,212,255,0.3)" : "rgba(255,255,255,0.06)"}`,
                  borderRadius: 16,
                  overflow: "hidden",
                  transition: "border-color 0.3s",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    padding: "20px 24px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 16,
                    background: "none",
                    border: "none",
                    color: "#e8eaf0",
                    fontSize: "1rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    textAlign: "inherit",
                    fontFamily: "inherit",
                  }}
                >
                  <span style={{ flex: 1 }}>{t(`faq.${qKey}`)}</span>
                  <span
                    style={{
                      color: "#00d4ff",
                      fontSize: "1.2rem",
                      transition: "transform 0.3s",
                      transform: isOpen ? "rotate(45deg)" : "none",
                      flexShrink: 0,
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: isOpen ? 400 : 0,
                    transition: "all 0.3s ease",
                    overflow: "hidden",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "#9ca3af",
                      lineHeight: 1.8,
                      fontSize: "0.92rem",
                      padding: "0 24px 20px",
                      margin: 0,
                    }}
                  >
                    {t(`faq.${aKey}`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
