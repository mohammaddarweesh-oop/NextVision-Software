"use client";

import { useTranslation } from "@/lib/i18n";

export default function About() {
  const { t } = useTranslation();
  return (
    <section id="about" style={{ padding: "100px 24px", position: "relative" }}>
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
        {/* ضفت clamp للـ gap عشان يبعد الأقسام عن بعض بمسافة مناسبة للموبايل والديسكتوب */}
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px, 8vw, 80px)", alignItems: "center" }}>
          <div
            style={{
              background: "linear-gradient(135deg, rgba(0,102,255,0.15), rgba(0,212,255,0.08))",
              border: "1px solid rgba(0,212,255,0.15)",
              borderRadius: 24,
              // التعديل 1: بادينج متغير (20px عالموبايل و 48px عالشاشات الكبيرة)
              padding: "clamp(20px, 5vw, 48px)", 
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -40,
                right: -40,
                width: 200,
                height: 200,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(0,212,255,0.15), transparent)",
              }}
            />
            {/* التعديل 2: تصغير الـ gap بين الكروت عالموبايل */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(12px, 3vw, 20px)" }}>
              {[
                ["2024", t("about.stat_founded")],
                ["150+", t("about.stat_projects")],
                ["50+", t("about.stat_clients")],
                ["98%", t("about.stat_rate")],
              ].map(([num, label]) => (
                <div
                  key={label}
                  style={{
                    background: "rgba(5,8,16,0.6)",
                    borderRadius: 16,
                    // التعديل 3: تقليل البادينج الداخلي للكروت عالموبايل عشان النص ياخذ راحته
                    padding: "clamp(16px, 3vw, 24px) clamp(8px, 2vw, 20px)", 
                    textAlign: "center",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  {/* التعديل 4: تصغير حجم الخط للأرقام عالموبايل */}
                  <div style={{ fontSize: "clamp(1.4rem, 5vw, 2rem)", fontWeight: 800, marginBottom: 6 }}>{num}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(0.7rem, 2.5vw, 0.82rem)", color: "#9ca3af" }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
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
              {t("about.badge")}
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: 24,
              }}
            >
              {t("about.title")}
              <span className="gradient-text">{t("about.title_highlight")}</span>
            </h2>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "#9ca3af",
                lineHeight: 1.8,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <p>
                {t("about.p1")}
              </p>
              <p>
                {t("about.p2")}
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 32 }}>
              {[
                t("about.check1"),
                t("about.check2"),
                t("about.check3"),
                t("about.check4"),
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    fontFamily: "'DM Sans', sans-serif",
                    color: "#9ca3af",
                    fontSize: "0.95rem",
                  }}
                >
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      background: "rgba(0,212,255,0.15)",
                      border: "1px solid rgba(0,212,255,0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: "0.7rem",
                      color: "#00d4ff",
                    }}
                  >
                    ✓
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}