"use client";

import { useTranslation } from "@/lib/i18n";

const TECHS = [
  { name: "MongoDB", color: "#47A248" },
  { name: "Express.js", color: "#e8eaf0" },
  { name: "React", color: "#61DAFB" },
  { name: "Node.js", color: "#339933" },
  { name: "NestJS", color: "#E0234E" },
  { name: "Next.js", color: "#ffffff" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "PostgreSQL", color: "#336791" },
];

export default function TechStack() {
  const { t } = useTranslation();
  return (
    <section id="techstack" className="grid-bg" style={{ padding: "100px 24px", position: "relative" }}>
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
            {t("techstack.badge")}
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            {t("techstack.title")}<span className="gradient-text">{t("techstack.title_highlight")}</span>
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#9ca3af",
              marginTop: 16,
              maxWidth: 500,
              margin: "16px auto 0",
            }}
          >
            {t("techstack.subtitle")}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 20,
            maxWidth: 800,
            margin: "0 auto",
          }}
        >
          {TECHS.map(({ name, color }) => (
            <div
              key={name}
              style={{
                background: `${color}12`,
                border: `1px solid ${color}30`,
                borderRadius: 16,
                padding: "20px 32px",
                display: "flex",
                alignItems: "center",
                gap: 12,
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = `0 8px 30px ${color}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span style={{ fontSize: "1.1rem", fontWeight: 700, color }}>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
