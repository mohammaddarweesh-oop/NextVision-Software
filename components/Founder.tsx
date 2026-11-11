"use client";

import { useTranslation } from "@/lib/i18n";

export default function Founder() {
  const { t } = useTranslation();

  const handleConsultWithFounder = () => {
    const msg = t("founder.consult_msg");
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
    <section id="founder" style={{ padding: "100px 24px", position: "relative" }}>
      {/* Top divider */}
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

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
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
            {t("founder.badge")}
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            {t("founder.title")}
            <span className="gradient-text">{t("founder.title_highlight")}</span>
          </h2>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#9ca3af",
              marginTop: 16,
              maxWidth: 620,
              margin: "16px auto 0",
              fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)",
              lineHeight: 1.7,
            }}
          >
            {t("founder.subtitle")}
          </p>
        </div>

        {/* Founder Card Container */}
        <div
          className="founder-card"
          style={{
            background: "linear-gradient(135deg, rgba(0, 102, 255, 0.08), rgba(0, 212, 255, 0.04))",
            border: "1px solid rgba(0, 212, 255, 0.2)",
            borderRadius: 24,
            padding: "clamp(24px, 5vw, 48px)",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
          }}
        >
          {/* Ambient background glow */}
          <div
            style={{
              position: "absolute",
              top: -60,
              right: -60,
              width: 260,
              height: 260,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(0,212,255,0.12), transparent)",
              pointerEvents: "none",
            }}
          />

          <div
            className="founder-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "320px 1fr",
              gap: "clamp(32px, 5vw, 56px)",
              alignItems: "center",
              position: "relative",
              zIndex: 2,
            }}
          >
            {/* Left Column: Founder Portrait Frame & Quick Stats */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                background: "rgba(5,8,16,0.7)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 20,
                padding: "32px 24px",
              }}
            >
              {/* Glowing Avatar Frame */}
              <div
                style={{
                  position: "relative",
                  width: 130,
                  height: 130,
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: -4,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #00d4ff, #0066ff, #a855f7)",
                    animation: "rotate 10s linear infinite",
                  }}
                />
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    background: "#080c18",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "3px solid #050810",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="/eng-photo.jpg"
                    alt={t("founder.name")}
                    width={130}
                    height={130}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Status Dot */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 4,
                    right: 4,
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: "#10b981",
                    border: "3px solid #050810",
                    boxShadow: "0 0 10px #10b981",
                  }}
                  title={t("founder.status_tooltip")}
                />
              </div>

              {/* Name & Title */}
              <h3
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 800,
                  color: "#e8eaf0",
                  margin: "0 0 6px 0",
                  letterSpacing: "-0.01em",
                }}
              >
                {t("founder.name")}
              </h3>

              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.85rem",
                  color: "#00d4ff",
                  fontWeight: 600,
                  marginBottom: 16,
                }}
              >
                {t("founder.role")}
              </div>

              {/* Status Pill */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "4px 12px",
                  borderRadius: 100,
                  background: "rgba(16,185,129,0.12)",
                  border: "1px solid rgba(16,185,129,0.3)",
                  color: "#10b981",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  marginBottom: 20,
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981" }} />
                <span>{t("founder.status_available")}</span>
              </div>

              {/* Quick Tech Badges */}
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 6 }}>
                {[
                  t("founder.skill1"),
                  t("founder.skill2"),
                  t("founder.skill3"),
                  t("founder.skill4"),
                ].map((skill) => (
                  <span
                    key={skill}
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      color: "#9ca3af",
                      fontSize: "0.7rem",
                      fontWeight: 500,
                      padding: "3px 8px",
                      borderRadius: 6,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Narrative, Quote, & 3 Trust Pillars */}
            <div>
              {/* Quote Symbol */}
              <div
                style={{
                  fontSize: "3rem",
                  lineHeight: 1,
                  fontFamily: "Georgia, serif",
                  color: "#00d4ff",
                  opacity: 0.8,
                  marginBottom: 8,
                }}
              >
                “
              </div>

              {/* Founder Bio Quote */}
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "clamp(1.05rem, 1.8vw, 1.22rem)",
                  fontWeight: 500,
                  lineHeight: 1.7,
                  color: "#f1f5f9",
                  margin: "0 0 18px 0",
                  letterSpacing: "-0.01em",
                }}
              >
                {t("founder.bio")}
              </p>

              {/* Additional B2B Vision */}
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.92rem",
                  lineHeight: 1.7,
                  color: "#9ca3af",
                  margin: "0 0 28px 0",
                }}
              >
                {t("founder.p2")}
              </p>

              {/* 3 Pillars Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: 14,
                  marginBottom: 28,
                }}
              >
                {[
                  {
                    title: t("founder.pillar1_title"),
                    desc: t("founder.pillar1_desc"),
                    icon: "🛡️",
                  },
                  {
                    title: t("founder.pillar2_title"),
                    desc: t("founder.pillar2_desc"),
                    icon: "🎯",
                  },
                  {
                    title: t("founder.pillar3_title"),
                    desc: t("founder.pillar3_desc"),
                    icon: "⚡",
                  },
                ].map((pillar, i) => (
                  <div
                    key={i}
                    style={{
                      background: "rgba(5,8,16,0.6)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: 12,
                      padding: 14,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                      <span style={{ fontSize: "1rem" }}>{pillar.icon}</span>
                      <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#e8eaf0" }}>
                        {pillar.title}
                      </span>
                    </div>
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.76rem",
                        color: "#9ca3af",
                        lineHeight: 1.45,
                      }}
                    >
                      {pillar.desc}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Action */}
              <button
                className="glow-btn"
                onClick={handleConsultWithFounder}
                style={{
                  borderRadius: 12,
                  padding: "14px 28px",
                  fontSize: "0.92rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  cursor: "pointer",
                }}
              >
                <span>💬</span>
                <span>{t("founder.cta_btn")}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
