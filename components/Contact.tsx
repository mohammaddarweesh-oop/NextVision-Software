"use client";

import { useActionState, useState, useEffect } from "react";
import { submitContact, type ContactFormState } from "@/lib/actions";
import { useTranslation } from "@/lib/i18n";

const initialState: ContactFormState = { success: false, message: "" };

export default function Contact() {
  const { t } = useTranslation();
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handler = (e: Event) => {
      setMessage((e as CustomEvent).detail as string);
    };
    window.addEventListener("selectPackage", handler);
    return () => window.removeEventListener("selectPackage", handler);
  }, []);

  return (
    <section id="contact" style={{ padding: "100px 24px", position: "relative" }}>
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
        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 80, alignItems: "start" }}>
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
              {t("contact.badge")}
            </div>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                marginBottom: 20,
              }}
            >
              {t("contact.title")}<span className="gradient-text">{t("contact.title_highlight")}</span>
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "#9ca3af",
                lineHeight: 1.75,
                marginBottom: 40,
              }}
            >
              {t("contact.subtitle")}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {[
                { icon: "\uD83D\uDCE7", labelKey: "email_label", value: "engmohammaddarweesh@gmail.com" },
                { icon: "\uD83D\uDCDE", labelKey: "call_label", value: "+962786023618" },
                { icon: "\uD83D\uDCCD", labelKey: "location_label", value: "Amman, Jordan" },
              ].map(({ icon, labelKey, value }) => {
                const href = labelKey === "email_label" ? `mailto:${value}` : labelKey === "call_label" ? `tel:${value}` : null;
                return (
                <div key={labelKey} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "rgba(0,212,255,0.08)",
                      border: "1px solid rgba(0,212,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.1rem",
                      flexShrink: 0,
                    }}
                  >
                    {icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        color: "#9ca3af",
                        fontSize: "0.8rem",
                        marginBottom: 2,
                      }}
                    >
                      {t(`contact.${labelKey}`)}
                    </div>
                    {href ? (
                      <a href={href} style={{ fontWeight: 600, fontSize: "0.95rem", color: "inherit", textDecoration: "none" }}>{value}</a>
                    ) : (
                      <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>{value}</div>
                    )}
                  </div>
                </div>
                );
              })}
            </div>
          </div>

          <form
            action={formAction}
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 24,
              padding: 40,
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
              <div>
                <label htmlFor="firstName"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.82rem",
                    color: "#9ca3af",
                    display: "block",
                    marginBottom: 8,
                    fontWeight: 500,
                  }}
                >
                  {t("contact.first_name")}
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  placeholder={t("contact.first_placeholder")}
                  defaultValue=""
                  style={{ padding: "12px 16px", borderRadius: 10 }}
                />
                {state.errors?.firstName && (
                  <p style={{ color: "#ef4444", fontSize: "0.78rem", marginTop: 4 }}>{state.errors.firstName}</p>
                )}
              </div>
              <div>
                <label htmlFor="lastName"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.82rem",
                    color: "#9ca3af",
                    display: "block",
                    marginBottom: 8,
                    fontWeight: 500,
                  }}
                >
                  {t("contact.last_name")}
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  placeholder={t("contact.last_placeholder")}
                  defaultValue=""
                  style={{ padding: "12px 16px", borderRadius: 10 }}
                />
                {state.errors?.lastName && (
                  <p style={{ color: "#ef4444", fontSize: "0.78rem", marginTop: 4 }}>{state.errors.lastName}</p>
                )}
              </div>
            </div>

            <div style={{ marginBottom: 20 }}>
              <label htmlFor="email"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.82rem",
                  color: "#9ca3af",
                  display: "block",
                  marginBottom: 8,
                  fontWeight: 500,
                }}
              >
                {t("contact.email")}
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder={t("contact.email_placeholder")}
                defaultValue=""
                style={{ padding: "12px 16px", borderRadius: 10 }}
              />
              {state.errors?.email && (
                <p style={{ color: "#ef4444", fontSize: "0.78rem", marginTop: 4 }}>{state.errors.email}</p>
              )}
            </div>

            <div style={{ marginBottom: 20 }}>
              <label
                htmlFor="service"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.82rem",
                  color: "#9ca3af",
                  display: "block",
                  marginBottom: 8,
                  fontWeight: 500,
                }}
              >
                {t("contact.service")}
              </label>
              <select id="service" name="service" defaultValue="" style={{ padding: "12px 16px", borderRadius: 10 }}>
                <option value="" disabled style={{ background: "#050810" }}>
                  {t("contact.service_placeholder")}
                </option>
                {[
                  { val: "Web Development", key: "service_web" },
                  { val: "Frontend Development", key: "service_frontend" },
                  { val: "Backend Development", key: "service_backend" },
                  { val: "E-commerce Solutions", key: "service_ecom" },
                  { val: "CMS & Headless CMS", key: "service_cms" },
                  { val: "Web Performance & SEO", key: "service_perf" },
                  { val: "Other", key: "service_other" },
                ].map(({ val, key }) => (
                  <option key={key} value={val} style={{ background: "#050810" }}>
                    {t(`contact.${key}`)}
                  </option>
                ))}
              </select>
              {state.errors?.service && (
                <p style={{ color: "#ef4444", fontSize: "0.78rem", marginTop: 4 }}>{state.errors.service}</p>
              )}
            </div>

            <div style={{ marginBottom: 28 }}>
              <label htmlFor="message"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.82rem",
                  color: "#9ca3af",
                  display: "block",
                  marginBottom: 8,
                  fontWeight: 500,
                }}
              >
                {t("contact.message")}
              </label>
              <textarea
                id="message"
                name="message"
                placeholder={t("contact.message_placeholder")}
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ padding: "12px 16px", borderRadius: 10, resize: "vertical" }}
              />
              {state.errors?.message && (
                <p style={{ color: "#ef4444", fontSize: "0.78rem", marginTop: 4 }}>{state.errors.message}</p>
              )}
            </div>

            {state.message && (
              <p
                style={{
                  textAlign: "center",
                  fontSize: "0.88rem",
                  marginBottom: 16,
                  color: state.success ? "#10b981" : "#ef4444",
                }}
              >
                {state.message}
              </p>
            )}

            <button
              type="submit"
              disabled={pending}
              className="glow-btn"
              style={{
                width: "100%",
                padding: "16px",
                minHeight: 48,
                borderRadius: 12,
                fontSize: "1rem",
                opacity: pending ? 0.7 : 1,
              }}
            >
              {pending ? t("contact.sending") : t("contact.submit")}
            </button>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                textAlign: "center",
                color: "#9ca3af",
                fontSize: "0.8rem",
                marginTop: 16,
              }}
            >
              {t("contact.footer_note")}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
