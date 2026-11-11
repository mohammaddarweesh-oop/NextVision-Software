"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "@/lib/i18n";

const TECH_BADGES = [
  { name: "Next.js", color: "#ffffff", roleKey: "casestudy.tech_role_nextjs" },
  { name: "NestJS", color: "#E0234E", roleKey: "casestudy.tech_role_nestjs" },
  { name: "PostgreSQL", color: "#336791", roleKey: "casestudy.tech_role_postgres" },
  { name: "Prisma", color: "#2D3748", roleKey: "casestudy.tech_role_prisma" },
  { name: "Stripe", color: "#635BFF", roleKey: "casestudy.tech_role_stripe" },
];

export default function CaseStudy() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<"dash" | "store" | "checkout">("dash");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  const handleInquireDemo = () => {
    const msg = t("casestudy.inquire_msg");
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
    <section id="casestudy" style={{ padding: "100px 24px", position: "relative" }}>
      {/* Decorative top border line */}
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
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              borderRadius: 100,
              background: "rgba(0,212,255,0.08)",
              border: "1px solid rgba(0,212,255,0.25)",
              color: "#00d4ff",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#00d4ff",
                boxShadow: "0 0 10px #00d4ff",
                display: "inline-block",
              }}
            />
            {t("casestudy.badge")}
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.9rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            {t("casestudy.title")}
            <span className="gradient-text">{t("casestudy.title_highlight")}</span>
          </h2>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#9ca3af",
              marginTop: 16,
              maxWidth: 720,
              margin: "16px auto 0",
              fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
              lineHeight: 1.7,
            }}
          >
            {t("casestudy.subtitle")}
          </p>
        </div>

        {/* Metrics Ribbon */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
            marginBottom: 48,
          }}
        >
          {[
            { val: t("casestudy.metric1_val"), label: t("casestudy.metric1_label"), color: "#00d4ff" },
            { val: t("casestudy.metric2_val"), label: t("casestudy.metric2_label"), color: "#0066ff" },
            { val: t("casestudy.metric3_val"), label: t("casestudy.metric3_label"), color: "#10b981" },
            { val: t("casestudy.metric4_val"), label: t("casestudy.metric4_label"), color: "#a855f7" },
          ].map((m, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 16,
                padding: "20px 24px",
                display: "flex",
                flexDirection: "column",
                gap: 6,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: `linear-gradient(90deg, transparent, ${m.color}, transparent)`,
                }}
              />
              <div
                style={{
                  fontSize: "clamp(1.7rem, 2.5vw, 2.2rem)",
                  fontWeight: 800,
                  color: m.color,
                  letterSpacing: "-0.02em",
                }}
              >
                {m.val}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.82rem",
                  color: "#9ca3af",
                  fontWeight: 500,
                  lineHeight: 1.4,
                }}
              >
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main 2-Column Showcase */}
        <div
          className="casestudy-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: "clamp(32px, 5vw, 56px)",
            alignItems: "start",
          }}
        >
          {/* Left Column: Challenge & Solution Narratives */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {/* The Challenge Box */}
            <div
              style={{
                background: "linear-gradient(135deg, rgba(239, 68, 68, 0.05), rgba(5,8,16,0.6))",
                border: "1px solid rgba(239, 68, 68, 0.2)",
                borderRadius: 20,
                padding: "clamp(24px, 4vw, 32px)",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "4px 12px",
                  borderRadius: 100,
                  background: "rgba(239, 68, 68, 0.12)",
                  color: "#f87171",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                <span>⚠️</span> {t("casestudy.challenge_badge")}
              </div>

              <h3
                style={{
                  fontSize: "clamp(1.2rem, 2vw, 1.4rem)",
                  fontWeight: 800,
                  marginBottom: 12,
                  letterSpacing: "-0.01em",
                }}
              >
                {t("casestudy.challenge_title")}
              </h3>

              <blockquote
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontStyle: "italic",
                  color: "#e2e8f0",
                  fontSize: "1rem",
                  lineHeight: 1.6,
                  borderLeft: "3px solid #f87171",
                  paddingLeft: 16,
                  margin: "0 0 16px 0",
                }}
              >
                &ldquo;{t("casestudy.challenge_quote")}&rdquo;
              </blockquote>

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "#9ca3af",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {t("casestudy.challenge_p1")}
              </p>
            </div>

            {/* The Solution Box */}
            <div
              style={{
                background: "linear-gradient(135deg, rgba(0, 212, 255, 0.08), rgba(0, 102, 255, 0.05))",
                border: "1px solid rgba(0, 212, 255, 0.25)",
                borderRadius: 20,
                padding: "clamp(24px, 4vw, 32px)",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "4px 12px",
                  borderRadius: 100,
                  background: "rgba(0, 212, 255, 0.12)",
                  color: "#00d4ff",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                <span>✨</span> {t("casestudy.solution_badge")}
              </div>

              <h3
                style={{
                  fontSize: "clamp(1.2rem, 2vw, 1.4rem)",
                  fontWeight: 800,
                  marginBottom: 12,
                  letterSpacing: "-0.01em",
                }}
              >
                {t("casestudy.solution_title")}
              </h3>

              <blockquote
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontStyle: "italic",
                  color: "#e2e8f0",
                  fontSize: "1rem",
                  lineHeight: 1.6,
                  borderLeft: "3px solid #00d4ff",
                  paddingLeft: 16,
                  margin: "0 0 16px 0",
                }}
              >
                &ldquo;{t("casestudy.solution_quote")}&rdquo;
              </blockquote>

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "#9ca3af",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  marginBottom: 20,
                }}
              >
                {t("casestudy.solution_p1")}
              </p>

              {/* 4 Feature Pillars */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 14,
                }}
              >
                {[
                  {
                    title: t("casestudy.feat1_title"),
                    desc: t("casestudy.feat1_desc"),
                    icon: "🏢",
                  },
                  {
                    title: t("casestudy.feat2_title"),
                    desc: t("casestudy.feat2_desc"),
                    icon: "💳",
                  },
                  {
                    title: t("casestudy.feat3_title"),
                    desc: t("casestudy.feat3_desc"),
                    icon: "💬",
                  },
                  {
                    title: t("casestudy.feat4_title"),
                    desc: t("casestudy.feat4_desc"),
                    icon: "📊",
                  },
                ].map((feat, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "rgba(5,8,16,0.6)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: 12,
                      padding: 14,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                      <span style={{ fontSize: "1.1rem" }}>{feat.icon}</span>
                      <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#e8eaf0" }}>
                        {feat.title}
                      </span>
                    </div>
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.78rem",
                        color: "#9ca3af",
                        lineHeight: 1.5,
                      }}
                    >
                      {feat.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Bar */}
            <div
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 16,
                padding: "18px 24px",
              }}
            >
              <div
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#8892a4",
                  marginBottom: 12,
                }}
              >
                {t("casestudy.tech_title")}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {TECH_BADGES.map((tech) => (
                  <div
                    key={tech.name}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 8,
                      padding: "6px 12px",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                    }}
                  >
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: tech.color,
                        boxShadow: `0 0 6px ${tech.color}`,
                      }}
                    />
                    <span>{tech.name}</span>
                    <span style={{ color: "#00d4ff", fontSize: "0.75rem", fontWeight: 500 }}>
                      ({t(tech.roleKey)})
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              <button
                className="glow-btn"
                onClick={() => setIsModalOpen(true)}
                style={{
                  borderRadius: 12,
                  padding: "14px 28px",
                  fontSize: "0.92rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span>📐</span>
                <span>{t("casestudy.btn_arch")}</span>
              </button>

              <button
                className="outline-btn"
                onClick={handleInquireDemo}
                style={{
                  borderRadius: 12,
                  padding: "14px 24px",
                  fontSize: "0.92rem",
                }}
              >
                {t("casestudy.btn_inquire")}
              </button>
            </div>
          </div>

          {/* Right Column: Visual Mockups & Screenshot Placeholders */}
          <div
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(0, 212, 255, 0.2)",
              borderRadius: 24,
              padding: "clamp(16px, 3vw, 24px)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Visuals Top Switcher */}
            <div
              style={{
                display: "flex",
                gap: 8,
                background: "rgba(5,8,16,0.8)",
                padding: 6,
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.06)",
                marginBottom: 20,
              }}
            >
              {[
                { id: "dash", label: t("casestudy.tab_dash"), icon: "📈" },
                { id: "store", label: t("casestudy.tab_store"), icon: "🛍️" },
                { id: "checkout", label: t("casestudy.tab_checkout"), icon: "⚡" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as "dash" | "store" | "checkout")}
                  style={{
                    flex: 1,
                    padding: "10px 8px",
                    borderRadius: 8,
                    border: "none",
                    background: activeTab === tab.id ? "rgba(0,212,255,0.18)" : "transparent",
                    color: activeTab === tab.id ? "#00d4ff" : "#9ca3af",
                    fontWeight: activeTab === tab.id ? 700 : 500,
                    fontSize: "clamp(0.72rem, 1.4vw, 0.82rem)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    transition: "all 0.2s",
                  }}
                >
                  <span>{tab.icon}</span>
                  <span style={{ whiteSpace: "nowrap" }}>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Browser / Device Chrome Frame */}
            <div
              style={{
                background: "rgba(5,8,16,0.95)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
              }}
            >
              {/* Window Controls */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 16px",
                  background: "rgba(255,255,255,0.03)",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div style={{ display: "flex", gap: 6 }}>
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444" }} />
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b" }} />
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#10b981" }} />
                </div>
                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: "0.72rem",
                    color: "#6b7280",
                    background: "rgba(0,0,0,0.4)",
                    padding: "3px 14px",
                    borderRadius: 6,
                    border: "1px solid rgba(255,255,255,0.04)",
                  }}
                >
                  {activeTab === "dash" && "https://app.fastpay.io/dashboard/oasis-trends"}
                  {activeTab === "store" && "https://oasis-trends.fastpay.store"}
                  {activeTab === "checkout" && "https://oasis-trends.fastpay.store/checkout"}
                </div>
                <div style={{ fontSize: "0.7rem", color: "#00d4ff", fontWeight: 600 }}>
                  {t("casestudy.mockup_ssl")}
                </div>
              </div>

              {/* Viewport Content Area */}
              <div style={{ minHeight: 380, padding: 18, position: "relative" }}>
                {/* 1. Dashboard View */}
                {activeTab === "dash" && (
                  <div>
                    {/* Store bar */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 16,
                        paddingBottom: 12,
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div
                          style={{
                            width: 28,
                            height: 28,
                            borderRadius: 6,
                            background: "linear-gradient(135deg, #00d4ff, #0066ff)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "0.75rem",
                            fontWeight: 800,
                            color: "#000",
                          }}
                        >
                          FP
                        </div>
                        <div>
                          <div style={{ fontSize: "0.85rem", fontWeight: 700 }}>
                            {t("casestudy.mockup_store_brand")} ▾
                          </div>
                          <div style={{ fontSize: "0.7rem", color: "#6b7280" }}>
                            {t("casestudy.mockup_tenant_id")}: tenant_84920
                          </div>
                        </div>
                      </div>
                      <span
                        style={{
                          fontSize: "0.7rem",
                          background: "rgba(16,185,129,0.15)",
                          color: "#10b981",
                          border: "1px solid rgba(16,185,129,0.3)",
                          padding: "3px 8px",
                          borderRadius: 6,
                          fontWeight: 600,
                        }}
                      >
                        {t("casestudy.mockup_status_beta")}
                      </span>
                    </div>

                    {/* KPI mini-cards */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
                      <div
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.06)",
                          borderRadius: 10,
                          padding: "10px 12px",
                        }}
                      >
                        <div style={{ fontSize: "0.7rem", color: "#9ca3af" }}>{t("casestudy.mockup_mrr_label")}</div>
                        <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#e8eaf0" }}>$48,250.00</div>
                        <div style={{ fontSize: "0.68rem", color: "#10b981" }}>{t("casestudy.mockup_mrr_change")}</div>
                      </div>
                      <div
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.06)",
                          borderRadius: 10,
                          padding: "10px 12px",
                        }}
                      >
                        <div style={{ fontSize: "0.7rem", color: "#9ca3af" }}>{t("casestudy.mockup_orders_label")}</div>
                        <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#00d4ff" }}>1,429</div>
                        <div style={{ fontSize: "0.68rem", color: "#10b981" }}>{t("casestudy.mockup_fulfillment")}</div>
                      </div>
                    </div>

                    {/* Simulated Analytics Chart Graphic */}
                    <div
                      style={{
                        background: "rgba(0,0,0,0.3)",
                        border: "1px solid rgba(255,255,255,0.05)",
                        borderRadius: 10,
                        padding: 12,
                        marginBottom: 14,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: "0.7rem",
                          color: "#9ca3af",
                          marginBottom: 8,
                        }}
                      >
                        <span>{t("casestudy.mockup_velocity_label")}</span>
                        <span style={{ color: "#00d4ff" }}>{t("casestudy.mockup_realtime")}</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 60 }}>
                        {[35, 52, 45, 68, 85, 62, 92, 78, 100, 88, 95].map((val, i) => (
                          <div
                            key={i}
                            style={{
                              flex: 1,
                              height: `${val}%`,
                              background:
                                i === 8
                                  ? "linear-gradient(180deg, #00d4ff, #0066ff)"
                                  : "rgba(0,212,255,0.25)",
                              borderRadius: "3px 3px 0 0",
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Simulated Recent Orders */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      <div
                        style={{
                          fontSize: "0.68rem",
                          color: "#6b7280",
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                        }}
                      >
                        {t("casestudy.mockup_feed_label")}
                      </div>
                      {[
                        { id: "#FP-8842", buyer: "Sarah K.", amount: "$149.00", via: t("casestudy.mockup_paid_stripe") },
                        { id: "#FP-8841", buyer: "Tariq A.", amount: "$89.50", via: t("casestudy.mockup_wa_confirmed") },
                      ].map((ord) => (
                        <div
                          key={ord.id}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            background: "rgba(255,255,255,0.02)",
                            padding: "6px 10px",
                            borderRadius: 6,
                            fontSize: "0.75rem",
                          }}
                        >
                          <span style={{ fontFamily: "monospace", color: "#00d4ff" }}>{ord.id}</span>
                          <span style={{ color: "#e8eaf0" }}>{ord.buyer}</span>
                          <span style={{ color: "#9ca3af" }}>{ord.via}</span>
                          <span style={{ fontWeight: 700 }}>{ord.amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 2. Storefront View */}
                {activeTab === "store" && (
                  <div>
                    {/* Storefront Header */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingBottom: 10,
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                        marginBottom: 12,
                      }}
                    >
                      <div style={{ fontWeight: 800, fontSize: "0.95rem", letterSpacing: "-0.02em" }}>
                        {t("casestudy.mockup_store_brand")}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                          background: "rgba(0,212,255,0.12)",
                          color: "#00d4ff",
                          padding: "4px 10px",
                          borderRadius: 100,
                          fontSize: "0.72rem",
                          fontWeight: 700,
                        }}
                      >
                        🛒 {t("casestudy.mockup_cart")}
                      </div>
                    </div>

                    {/* Storefront Hero Banner */}
                    <div
                      style={{
                        background: "linear-gradient(135deg, rgba(0,102,255,0.3), rgba(168,85,247,0.2))",
                        borderRadius: 12,
                        padding: 16,
                        marginBottom: 14,
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.65rem",
                          fontWeight: 700,
                          background: "#000",
                          color: "#00d4ff",
                          padding: "2px 8px",
                          borderRadius: 4,
                          textTransform: "uppercase",
                        }}
                      >
                        {t("casestudy.mockup_new_drop")}
                      </span>
                      <div style={{ fontSize: "1rem", fontWeight: 800, marginTop: 4 }}>
                        {t("casestudy.mockup_store_hero_title")}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "#d1d5db" }}>
                        {t("casestudy.mockup_store_hero_sub")}
                      </div>
                    </div>

                    {/* Store Product Grid */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                      {[
                        { name: t("casestudy.mockup_prod1_name"), price: "$129.00", badge: t("casestudy.mockup_prod1_badge"), bg: "rgba(0,212,255,0.05)" },
                        { name: t("casestudy.mockup_prod2_name"), price: "$189.00", badge: t("casestudy.mockup_prod2_badge"), bg: "rgba(168,85,247,0.05)" },
                      ].map((item, i) => (
                        <div
                          key={i}
                          style={{
                            background: item.bg,
                            border: "1px solid rgba(255,255,255,0.06)",
                            borderRadius: 10,
                            padding: 10,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                          }}
                        >
                          <div>
                            <div
                              style={{
                                height: 70,
                                background: "rgba(0,0,0,0.4)",
                                borderRadius: 6,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "1.6rem",
                                marginBottom: 8,
                              }}
                            >
                              {i === 0 ? "🎒" : "⌚"}
                            </div>
                            <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#e8eaf0" }}>
                              {item.name}
                            </div>
                            <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#00d4ff" }}>
                              {item.price}
                            </div>
                          </div>
                          <button
                            style={{
                              marginTop: 8,
                              background: "rgba(255,255,255,0.08)",
                              border: "1px solid rgba(255,255,255,0.1)",
                              color: "#fff",
                              borderRadius: 6,
                              padding: "5px 8px",
                              fontSize: "0.7rem",
                              fontWeight: 600,
                              cursor: "pointer",
                            }}
                          >
                            {t("casestudy.mockup_quick_add")}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. Checkout View */}
                {activeTab === "checkout" && (
                  <div>
                    <div
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        marginBottom: 10,
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <span>🔒</span> {t("casestudy.mockup_checkout_header")}
                    </div>

                    {/* Order Review Box */}
                    <div
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        borderRadius: 10,
                        padding: 12,
                        marginBottom: 12,
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem" }}>
                        <span style={{ color: "#9ca3af" }}>{t("casestudy.mockup_prod1_name")} (x1)</span>
                        <span style={{ fontWeight: 700 }}>$129.00</span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: "0.75rem",
                          color: "#10b981",
                          marginTop: 4,
                        }}
                      >
                        <span>{t("casestudy.mockup_shipping")}</span>
                        <span>{t("casestudy.mockup_free")}</span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: "0.85rem",
                          fontWeight: 800,
                          marginTop: 8,
                          paddingTop: 8,
                          borderTop: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        <span>{t("casestudy.mockup_total_due")}</span>
                        <span style={{ color: "#00d4ff" }}>$129.00</span>
                      </div>
                    </div>

                    {/* Gateway 1: WhatsApp Checkout */}
                    <div
                      style={{
                        background: "linear-gradient(135deg, rgba(16,185,129,0.1), rgba(5,8,16,0.6))",
                        border: "1px solid rgba(16,185,129,0.3)",
                        borderRadius: 10,
                        padding: 12,
                        marginBottom: 10,
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#10b981" }}>
                          💬 {t("casestudy.mockup_wa_title")}
                        </div>
                        <span style={{ fontSize: "0.65rem", background: "#10b981", color: "#000", padding: "1px 6px", borderRadius: 4, fontWeight: 700 }}>
                          {t("casestudy.mockup_popular")}
                        </span>
                      </div>
                      <div style={{ fontSize: "0.72rem", color: "#9ca3af", marginTop: 4 }}>
                        {t("casestudy.mockup_wa_sub")}
                      </div>
                      <button
                        style={{
                          width: "100%",
                          marginTop: 8,
                          background: "#10b981",
                          color: "#050810",
                          fontWeight: 700,
                          fontSize: "0.78rem",
                          border: "none",
                          borderRadius: 6,
                          padding: "8px 12px",
                          cursor: "pointer",
                        }}
                      >
                        {t("casestudy.mockup_wa_btn")}
                      </button>
                    </div>

                    {/* Gateway 2: Automated Stripe */}
                    <div
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        borderRadius: 10,
                        padding: 12,
                      }}
                    >
                      <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#635BFF" }}>
                        💳 {t("casestudy.mockup_stripe_title")}
                      </div>
                      <div style={{ fontSize: "0.72rem", color: "#9ca3af", marginTop: 4 }}>
                        {t("casestudy.mockup_stripe_sub")}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          gap: 6,
                          marginTop: 8,
                        }}
                      >
                        <div
                          style={{
                            flex: 1,
                            background: "rgba(0,0,0,0.3)",
                            border: "1px solid rgba(255,255,255,0.06)",
                            borderRadius: 4,
                            padding: "6px 8px",
                            fontSize: "0.7rem",
                            color: "#6b7280",
                          }}
                        >
                          •••• •••• •••• 4242
                        </div>
                        <button
                          style={{
                            background: "linear-gradient(135deg, #635BFF, #00d4ff)",
                            color: "#fff",
                            border: "none",
                            borderRadius: 6,
                            padding: "6px 14px",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            cursor: "pointer",
                          }}
                        >
                          {t("casestudy.mockup_pay_btn")}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Visuals Footer Caption / Mockup Indicator */}
            <div
              style={{
                marginTop: 14,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 8,
              }}
            >
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.78rem",
                  color: "#9ca3af",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span style={{ color: "#00d4ff" }}>📸</span>
                <span>
                  {activeTab === "dash" && t("casestudy.mockup_label_dash")}
                  {activeTab === "store" && t("casestudy.mockup_label_store")}
                  {activeTab === "checkout" && t("casestudy.mockup_label_checkout")}
                </span>
              </div>

              <div style={{ display: "flex", gap: 6 }}>
                {(["dash", "store", "checkout"] as const).map((tab, idx) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      width: 24,
                      height: 8,
                      borderRadius: 4,
                      border: "none",
                      background: activeTab === tab ? "#00d4ff" : "rgba(255,255,255,0.15)",
                      cursor: "pointer",
                      padding: 0,
                      transition: "all 0.2s",
                    }}
                    title={`View Screenshot ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Architecture Modal Lightbox */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setIsModalOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(3, 5, 12, 0.85)",
            backdropFilter: "blur(16px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#080c18",
              border: "1px solid rgba(0,212,255,0.3)",
              borderRadius: 24,
              maxWidth: 860,
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              padding: "clamp(24px, 4vw, 36px)",
              position: "relative",
              boxShadow: "0 25px 80px rgba(0,212,255,0.15)",
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: 24,
                paddingBottom: 16,
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div>
                <div
                  style={{
                    color: "#00d4ff",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: 6,
                  }}
                >
                  {t("casestudy.modal_badge")}
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, margin: 0 }}>
                  {t("casestudy.modal_title")}
                </h3>
                <p style={{ color: "#9ca3af", fontSize: "0.85rem", margin: "4px 0 0 0" }}>
                  {t("casestudy.modal_subtitle")}
                </p>
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#fff",
                  borderRadius: 10,
                  width: 36,
                  height: 36,
                  cursor: "pointer",
                  fontSize: "1.1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ✕
              </button>
            </div>

            {/* Architecture Diagram Visualization */}
            <div
              style={{
                background: "rgba(5,8,16,0.9)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                padding: "20px 16px",
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                  gap: 12,
                  textAlign: "center",
                }}
              >
                {/* Node 1 */}
                <div
                  style={{
                    background: "rgba(0,212,255,0.08)",
                    border: "1px solid rgba(0,212,255,0.3)",
                    borderRadius: 12,
                    padding: 14,
                  }}
                >
                  <div style={{ fontSize: "1.4rem", marginBottom: 6 }}>🌐</div>
                  <div style={{ fontWeight: 700, fontSize: "0.82rem", color: "#00d4ff" }}>
                    {t("casestudy.node1_title")}
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "#9ca3af", marginTop: 4 }}>
                    {t("casestudy.node1_sub")}
                  </div>
                </div>

                {/* Node 2 */}
                <div
                  style={{
                    background: "rgba(0,102,255,0.08)",
                    border: "1px solid rgba(0,102,255,0.3)",
                    borderRadius: 12,
                    padding: 14,
                  }}
                >
                  <div style={{ fontSize: "1.4rem", marginBottom: 6 }}>⚙️</div>
                  <div style={{ fontWeight: 700, fontSize: "0.82rem", color: "#60a5fa" }}>
                    {t("casestudy.node2_title")}
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "#9ca3af", marginTop: 4 }}>
                    {t("casestudy.node2_sub")}
                  </div>
                </div>

                {/* Node 3 */}
                <div
                  style={{
                    background: "rgba(168,85,247,0.08)",
                    border: "1px solid rgba(168,85,247,0.3)",
                    borderRadius: 12,
                    padding: 14,
                  }}
                >
                  <div style={{ fontSize: "1.4rem", marginBottom: 6 }}>🗄️</div>
                  <div style={{ fontWeight: 700, fontSize: "0.82rem", color: "#c084fc" }}>
                    {t("casestudy.node3_title")}
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "#9ca3af", marginTop: 4 }}>
                    {t("casestudy.node3_sub")}
                  </div>
                </div>

                {/* Node 4 */}
                <div
                  style={{
                    background: "rgba(16,185,129,0.08)",
                    border: "1px solid rgba(16,185,129,0.3)",
                    borderRadius: 12,
                    padding: 14,
                  }}
                >
                  <div style={{ fontSize: "1.4rem", marginBottom: 6 }}>⚡</div>
                  <div style={{ fontWeight: 700, fontSize: "0.82rem", color: "#34d399" }}>
                    {t("casestudy.node4_title")}
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "#9ca3af", marginTop: 4 }}>
                    {t("casestudy.node4_sub")}
                  </div>
                </div>
              </div>

              {/* Data Flow Indicator */}
              <div
                style={{
                  marginTop: 14,
                  padding: "8px 12px",
                  background: "rgba(0,0,0,0.4)",
                  borderRadius: 8,
                  fontSize: "0.75rem",
                  color: "#9ca3af",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  flexWrap: "wrap",
                }}
              >
                <span>{t("casestudy.flow_edge")}</span>
                <span>➔</span>
                <span>{t("casestudy.flow_api")}</span>
                <span>➔</span>
                <span>{t("casestudy.flow_db")}</span>
                <span>➔</span>
                <span>{t("casestudy.flow_webhooks")}</span>
              </div>
            </div>

            {/* Architecture Details Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 12,
                  padding: 14,
                }}
              >
                <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "#00d4ff", marginBottom: 6 }}>
                  🔐 {t("casestudy.detail1_title")}
                </div>
                <div style={{ fontSize: "0.8rem", color: "#9ca3af", lineHeight: 1.5 }}>
                  {t("casestudy.detail1_desc")}
                </div>
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 12,
                  padding: 14,
                }}
              >
                <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "#10b981", marginBottom: 6 }}>
                  🚀 {t("casestudy.detail2_title")}
                </div>
                <div style={{ fontSize: "0.8rem", color: "#9ca3af", lineHeight: 1.5 }}>
                  {t("casestudy.detail2_desc")}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 12,
              }}
            >
              <a
                href="/fastpay-technical-architecture.pdf"
                download="FastPay-Technical-Architecture.pdf"
                className="glow-btn"
                style={{
                  textDecoration: "none",
                  borderRadius: 10,
                  padding: "12px 24px",
                  fontSize: "0.88rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span>📥</span>
                <span>{t("casestudy.modal_download")}</span>
              </a>

              <button
                onClick={() => setIsModalOpen(false)}
                className="outline-btn"
                style={{
                  borderRadius: 10,
                  padding: "12px 20px",
                  fontSize: "0.88rem",
                }}
              >
                {t("casestudy.modal_close")}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
