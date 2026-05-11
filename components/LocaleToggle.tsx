"use client";

import { useLocale } from "@/lib/i18n";

export default function LocaleToggle() {
  const { locale, setLocale, t } = useLocale();

  const toggle = () => {
    setLocale(locale === "en" ? "ar" : "en");
  };

  return (
    <button
      onClick={toggle}
      className="outline-btn"
      style={{
        padding: "10px 14px",
        borderRadius: 8,
        fontSize: "0.78rem",
        minWidth: 48,
        minHeight: 48,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      title={locale === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
    >
      {t("locale.toggle")}
    </button>
  );
}
