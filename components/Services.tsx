"use client";

import { useState, useEffect } from "react"; 
import { createPortal } from "react-dom";
import { useTranslation } from "@/lib/i18n";

const SERVICES = [
  { icon: "\uD83C\uDF10", titleKey: "web_title", descKey: "web_desc", color: "#00d4ff" },
  { icon: "\uD83C\uDFA8", titleKey: "frontend_title", descKey: "frontend_desc", color: "#ec4899" },
  { icon: "\u2699\uFE0F", titleKey: "backend_title", descKey: "backend_desc", color: "#10b981" },
  { icon: "\uD83D\uDED2", titleKey: "ecom_title", descKey: "ecom_desc", color: "#f59e0b" },
  { icon: "\uD83D\uDCC0", titleKey: "cms_title", descKey: "cms_desc", color: "#a855f7" },
  { icon: "\u26A1", titleKey: "perf_title", descKey: "perf_desc", color: "#0066ff" },
];

function ServiceModal({
  prefix,
  color,
  onClose,
}: {
  prefix: string;
  color: string;
  onClose: () => void;
}) {
  const { t } = useTranslation();
  const feats = t(`services.${prefix}_feats`).split("|");
  
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 100000,
        background: "rgba(3, 5, 12, 0.85)", 
        backdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#0a0d14",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 24,
          maxWidth: 500,
          width: "100%",
          maxHeight: "85vh",
          overflowY: "auto",
          padding: "40px",
          position: "relative",
          boxShadow: "0 40px 100px rgba(0,0,0,0.8)",
          animation: "fadeUp 0.3s ease-out",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            background: "rgba(255,255,255,0.05)",
            border: "none",
            color: "#9ca3af",
            width: 32,
            height: 32,
            borderRadius: "50%",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1rem",
          }}
        >
          ✕
        </button>

        <h3 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16, color, paddingRight: 24 }}>
          {t(`services.${prefix}_title`)}
        </h3>

        <p style={{ color: "#9ca3af", lineHeight: 1.7, marginBottom: 30, fontSize: "0.95rem" }}>
          {t(`services.${prefix}_detail`)}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {feats.map((feat, i) => (
            <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ color, fontSize: "1.1rem" }}>✓</span>
              <span style={{ color: "#d1d5db", fontSize: "0.92rem", lineHeight: 1.5 }}>{feat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
}


export default function Services() {
  const { t } = useTranslation();
  const [modalPrefix, setModalPrefix] = useState<string | null>(null);

  return (
    <section id="services" className="grid-bg" style={{ padding: "100px 24px", position: "relative" }}>
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
          <div style={{ color: "#00d4ff", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>
            {t("services.badge")}
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
            {t("services.title")}<span className="gradient-text">{t("services.title_highlight")}</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#9ca3af", marginTop: 16, maxWidth: 500, margin: "16px auto 0" }}>
            {t("services.subtitle")}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {SERVICES.map(({ icon, titleKey, descKey, color }) => {
            const prefix = titleKey.replace(/_title$/, "");
            return (
              <div
                key={titleKey}
                className="card-hover"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 20,
                  padding: 32,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ width: 56, height: 56, borderRadius: 16, background: `${color}15`, border: `1px solid ${color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem", marginBottom: 20 }}>
                  {icon}
                </div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 12 }}>{t(`services.${titleKey}`)}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#9ca3af", lineHeight: 1.7, fontSize: "0.92rem", flexGrow: 1 }}>
                  {t(`services.${descKey}`)}
                </p>
                <button
                  onClick={() => setModalPrefix(prefix)}
                  style={{
                    marginTop: 24,
                    color,
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    background: "none",
                    border: "none",
                    padding: 0,
                    fontFamily: "inherit",
                  }}
                >
                  {t("services.learn")}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {modalPrefix && (
        <ServiceModal
          prefix={modalPrefix}
          color={SERVICES.find((s) => s.titleKey.replace(/_title$/, "") === modalPrefix)?.color ?? "#00d4ff"}
          onClose={() => setModalPrefix(null)}
        />
      )}
    </section>
  );
}