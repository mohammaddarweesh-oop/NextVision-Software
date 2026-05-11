"use client";

import type { ReactNode, MouseEvent } from "react";

export default function ScrollLink({
  targetId,
  children,
  className,
  style,
  onClick,
}: {
  targetId: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}) {
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
    window.dispatchEvent(new CustomEvent("sectionActive", { detail: targetId }));
    onClick?.();
  };

  return (
    <span className={className} style={style} onClick={handleClick} role="button" tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter") handleClick(e as unknown as MouseEvent); }}>
      {children}
    </span>
  );
}
