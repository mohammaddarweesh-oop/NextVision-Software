"use client";

import { useTranslation } from "@/lib/i18n";

const PROCESS_STEPS = [
  {
    num: "01",
    titleKey: "process.step1_title",
    arTagKey: "process.step1_ar_tag",
    summaryKey: "process.step1_summary",
    descKey: "process.step1_desc",
    deliverablesKey: "process.step1_deliverables",
    icon: "🔍",
    color: "#00d4ff",
  },
  {
    num: "02",
    titleKey: "process.step2_title",
    arTagKey: "process.step2_ar_tag",
    summaryKey: "process.step2_summary",
    descKey: "process.step2_desc",
    deliverablesKey: "process.step2_deliverables",
    icon: "🎨",
    color: "#0066ff",
  },
  {
    num: "03",
    titleKey: "process.step3_title",
    arTagKey: "process.step3_ar_tag",
    summaryKey: "process.step3_summary",
    descKey: "process.step3_desc",
    deliverablesKey: "process.step3_deliverables",
    icon: "⚡",
    color: "#a855f7",
  },
  {
    num: "04",
    titleKey: "process.step4_title",
    arTagKey: "process.step4_ar_tag",
    summaryKey: "process.step4_summary",
    descKey: "process.step4_desc",
    deliverablesKey: "process.step4_deliverables",
    icon: "🚀",
    color: "#10b981",
  },
];

export default function Process() {
  const { t } = useTranslation();

  const handleBookDiscovery = () => {
    const msg = t("process.discovery_msg");
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
    <section id="process" style={{ padding: "100px 24px", position: "relative" }}>
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

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Section Header */}
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
            {t("process.badge")}
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            {t("process.title")}
            <span className="gradient-text">{t("process.title_highlight")}</span>
          </h2>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#9ca3af",
              marginTop: 16,
              maxWidth: 680,
              margin: "16px auto 0",
              fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)",
              lineHeight: 1.7,
            }}
          >
            {t("process.subtitle")}
          </p>
        </div>

        {/* Timeline Container */}
        <div style={{ position: "relative" }}>
          {/* Desktop Connecting Line */}
          <div
            className="process-connector"
            style={{
              position: "absolute",
              top: 48,
              left: "10%",
              right: "10%",
              height: 2,
              background: "linear-gradient(90deg, #00d4ff 0%, #0066ff 35%, #a855f7 70%, #10b981 100%)",
              opacity: 0.35,
              zIndex: 1,
            }}
          />

          {/* 4 Steps Grid */}
          <div
            className="process-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 24,
              position: "relative",
              zIndex: 2,
            }}
          >
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                className="card-hover"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 20,
                  padding: "clamp(20px, 3vw, 28px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  backdropFilter: "blur(10px)",
                }}
              >
                {/* Step Top: Number Node & Icon */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 20,
                    }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        background: "rgba(5,8,16,0.9)",
                        border: `2px solid ${step.color}`,
                        boxShadow: `0 0 16px ${step.color}40`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 800,
                        fontSize: "1rem",
                        color: step.color,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {step.num}
                    </div>

                    <div
                      style={{
                        fontSize: "1.4rem",
                        background: "rgba(255,255,255,0.04)",
                        borderRadius: 10,
                        width: 38,
                        height: 38,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {step.icon}
                    </div>
                  </div>

                  {/* Step Title & Bilingual Tag */}
                  <div style={{ marginBottom: 12 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                      <h3
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: 800,
                          margin: 0,
                          color: "#e8eaf0",
                        }}
                      >
                        {t(step.titleKey)}
                      </h3>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          background: `${step.color}15`,
                          color: step.color,
                          border: `1px solid ${step.color}35`,
                          padding: "2px 8px",
                          borderRadius: 6,
                        }}
                      >
                        {t(step.arTagKey)}
                      </span>
                    </div>

                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: step.color,
                        marginTop: 6,
                      }}
                    >
                      {t(step.summaryKey)}
                    </div>
                  </div>

                  {/* Step Description */}
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "#9ca3af",
                      fontSize: "0.86rem",
                      lineHeight: 1.65,
                      marginBottom: 20,
                    }}
                  >
                    {t(step.descKey)}
                  </p>
                </div>

                {/* Deliverables Badge at Bottom */}
                <div
                  style={{
                    background: "rgba(5,8,16,0.6)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    borderRadius: 10,
                    padding: "10px 12px",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.75rem",
                    color: "#cbd5e1",
                    lineHeight: 1.4,
                  }}
                >
                  <span style={{ color: step.color, fontWeight: 700 }}>✓ </span>
                  {t(step.deliverablesKey)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Guarantee Callout */}
        <div
          style={{
            marginTop: 48,
            background: "linear-gradient(135deg, rgba(0,212,255,0.04), rgba(0,102,255,0.06))",
            border: "1px solid rgba(0,212,255,0.15)",
            borderRadius: 18,
            padding: "20px 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                background: "rgba(0,212,255,0.12)",
                border: "1px solid rgba(0,212,255,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.2rem",
                flexShrink: 0,
              }}
            >
              🛡️
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>
                {t("process.callout_title")}
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "#9ca3af" }}>
                {t("process.callout_desc")}
              </div>
            </div>
          </div>

          <button
            className="glow-btn"
            onClick={handleBookDiscovery}
            style={{
              padding: "10px 22px",
              minHeight: 44,
              borderRadius: 8,
              fontSize: "0.85rem",
              cursor: "pointer",
            }}
          >
            {t("process.callout_btn")}
          </button>
        </div>
      </div>
    </section>
  );
}
