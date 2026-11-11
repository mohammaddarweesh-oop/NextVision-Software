"use client";

import { useTranslation } from "@/lib/i18n";

const TESTIMONIAL_KEYS = [
  { id: "t1", avatar: "SR" },
  { id: "t2", avatar: "AM" },
  { id: "t3", avatar: "LH" },
  { id: "t4", avatar: "OK" },
  { id: "t5", avatar: "NA" },
  { id: "t6", avatar: "KI" },
];

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
          {TESTIMONIAL_KEYS.map(({ id, avatar }) => (
            <div
              key={id}
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
                &ldquo;{t(`testimonials.${id}_quote`)}&rdquo;
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
                  <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>{t(`testimonials.${id}_name`)}</div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "#6b7280",
                      fontSize: "0.82rem",
                      marginTop: 2,
                    }}
                  >
                    {t(`testimonials.${id}_role`)}
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
