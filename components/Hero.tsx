"use client";

import ScrollLink from "./ScrollLink";
import { useTranslation } from "@/lib/i18n";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section
      id="hero"
      className="grid-bg"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "120px 24px 80px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,102,255,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        className="hero-grid"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(0,212,255,0.08)",
              border: "1px solid rgba(0,212,255,0.2)",
              borderRadius: 100,
              padding: "6px 16px",
              marginBottom: 28,
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#00d4ff",
                boxShadow: "0 0 8px #00d4ff",
              }}
            />
            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "#00d4ff",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {t("hero.badge")}
            </span>
          </div>

          <h1
            className="hero-title"
            style={{
              fontSize: "clamp(2.8rem, 5vw, 4.2rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: 24,
            }}
          >
            {t("hero.title1")}<br />
            <span className="gradient-text">{t("hero.title2")}</span>
            <br />
            {t("hero.title3")}
          </h1>

          <p
            className="hero-sub"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1.1rem",
              color: "#9ca3af",
              lineHeight: 1.7,
              marginBottom: 40,
              maxWidth: 480,
            }}
          >
            {t("hero.subtitle")}
          </p>

          {/* <div className="hero-btns" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <ScrollLink targetId="services">
              <button className="glow-btn" style={{ padding: "14px 32px", borderRadius: 10, fontSize: "1rem", minHeight: 48 }}>
                {t("hero.btn_services")}
              </button>
            </ScrollLink>
            <ScrollLink targetId="contact">
              <button className="outline-btn" style={{ padding: "14px 32px", borderRadius: 10, fontSize: "1rem" }}>
                {t("hero.btn_talk")}
              </button>
            </ScrollLink>
          </div> */}
          <div className="hero-btns" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <ScrollLink targetId="services" style={{ display: "inline-block" }}>
              <div 
                className="glow-btn" 
                style={{ 
                  padding: "14px 32px", 
                  borderRadius: 10, 
                  fontSize: "1rem", 
                  minHeight: 48, 
                  minWidth: 48,
                  display: "inline-flex", 
                  alignItems: "center", 
                  justifyContent: "center" 
                }}
              >
                <span style={{ pointerEvents: "none" }}>{t("hero.btn_services")}</span>
              </div>
            </ScrollLink>

            <ScrollLink targetId="contact" style={{ display: "inline-block" }}>
              <div 
                className="outline-btn" 
                style={{ 
                  padding: "14px 32px", 
                  borderRadius: 10, 
                  fontSize: "1rem", 
                  minHeight: 48,
                  minWidth: 48,
                  display: "inline-flex", 
                  alignItems: "center", 
                  justifyContent: "center" 
                }}
              >
                <span style={{ pointerEvents: "none" }}>{t("hero.btn_talk")}</span>
              </div>
            </ScrollLink>
          </div>


          <div className="hero-stats" style={{ display: "flex", gap: 48, marginTop: 56 }}>
            {[
              ["150+", t("hero.stat_projects")],
              ["50+", t("hero.stat_clients")],
              ["8+", t("hero.stat_years")],
              ["100%", t("hero.stat_success")]
            ].map(([num, label]) => (
              <div key={label}>
                <div className="hero-stat-num" style={{ fontSize: "2rem", fontWeight: 800 }}>{num}</div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.85rem",
                    color: "#9ca3af",
                    marginTop: 2,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="float-el hero-visual" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ position: "relative", width: 380, height: 380 }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                border: "1px solid rgba(0,212,255,0.15)",
                animation: "rotate 20s linear infinite",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -4,
                  left: "50%",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#00d4ff",
                  transform: "translateX(-50%)",
                  boxShadow: "0 0 12px #00d4ff",
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                inset: 40,
                borderRadius: "50%",
                border: "1px solid rgba(0,102,255,0.2)",
                animation: "rotate 15s linear infinite reverse",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -4,
                  right: "20%",
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#0066ff",
                  boxShadow: "0 0 10px #0066ff",
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                inset: 80,
                borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(0,102,255,0.3), rgba(0,212,255,0.2))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 60px rgba(0,212,255,0.2)",
                backdropFilter: "blur(10px)",
              }}
            >
              <span style={{ fontSize: "4rem", fontWeight: 800, color: "#fff" }}>NV</span>
              {/* <span style={{ fontSize: "4rem", fontWeight: 800, color: "#fff" }}>
                <img src="/NextVisionlogo.png" alt="" width={92} height={84} style={{ height: 180, width: "auto" }} />
              </span> */}
            </div>
            {[
              { style: { top: "5%", left: "-10%" }, icon: "\u26A1", key: "fast" },
              { style: { top: "5%", right: "-10%" }, icon: "\uD83D\uDEE1\uFE0F", key: "secure" },
              { style: { bottom: "5%", left: "-5%" }, icon: "\uD83D\uDCC8", key: "scalable" },
              { style: { bottom: "5%", right: "-5%" }, icon: "\uD83C\uDFAF", key: "ontime" },
            ].map((item, i) => (
              <div
                key={item.key}
                style={{
                  position: "absolute",
                  ...item.style,
                  background: "rgba(5,8,16,0.9)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 12,
                  padding: "10px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                  animation: `float ${5 + i}s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`,
                }}
              >
                <span>{item.icon}</span>
                <span style={{ color: "#00d4ff" }}>{t(`hero.float_${item.key}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
