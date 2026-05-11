"use client";

import { useRef, useEffect, type ReactNode } from "react";

export default function AnimateOnScroll({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.innerWidth <= 768) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(30px)",
        transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}