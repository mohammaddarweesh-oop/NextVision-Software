"use client";

const TESTIMONIALS = [
  {
    name: "Sarah Al-Rashid",
    role: "CEO, TechFlow UAE",
    quote:
      "NextVision transformed our outdated platform into a world-class product in just 10 weeks. Their attention to detail and proactive communication set them apart.",
    avatar: "SR",
  },
  {
    name: "Ahmed Mansour",
    role: "CTO, FinBridge",
    quote:
      "The team delivered a complex fintech app with zero critical bugs on launch day. Their expertise in security and performance is genuinely world-class.",
    avatar: "AM",
  },
  {
    name: "Layla Hassan",
    role: "Founder, EduNova",
    quote:
      "Working with NextVision felt like having an in-house team that actually cared. They challenged our assumptions and pushed us toward a far better product.",
    avatar: "LH",
  },
  {
    name: "Omar Khalil",
    role: "Product Director, RetailX",
    quote:
      "From discovery to deployment, the process was seamless. They delivered on time, on budget, and the results exceeded all our KPIs within the first month.",
    avatar: "OK",
  },
  {
    name: "Nora Al-Sayed",
    role: "VP Engineering, CloudBase",
    quote:
      "NextVision is the rare agency that combines technical excellence with real business understanding. Highly recommended for any serious product.",
    avatar: "NA",
  },
  {
    name: "Khalid Ibrahim",
    role: "Co-founder, LogiTrack",
    quote:
      "The mobile app they built scaled from 0 to 50,000 users without a single performance issue. Their cloud architecture expertise saved us months.",
    avatar: "KI",
  },
];

import { useTranslation } from "@/lib/i18n";

export default function Testimonials() {
  const { t } = useTranslation();
  return (
    <section id="testimonials" className="grid-bg" style={{ padding: "100px 24px", position: "relative" }}>
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
            {t("testimonials.badge")}
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            {t("testimonials.title")}<span className="gradient-text">{t("testimonials.title_highlight")}</span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {TESTIMONIALS.map(({ name, role, quote, avatar }) => (
            <div
              key={name}
              className="card-hover"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 20,
                padding: 32,
              }}
            >
              <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} style={{ color: "#fbbf24" }}>
                    ★
                  </span>
                ))}
              </div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "#9ca3af",
                  lineHeight: 1.75,
                  fontSize: "0.93rem",
                  marginBottom: 28,
                  fontStyle: "italic",
                }}
              >
                &ldquo;{quote}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #00d4ff, #0066ff)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.8rem",
                    fontWeight: 800,
                    color: "#000",
                    flexShrink: 0,
                  }}
                >
                  {avatar}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>{name}</div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "#9ca3af",
                      fontSize: "0.82rem",
                      marginTop: 2,
                    }}
                  >
                    {role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
