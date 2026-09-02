"use client";

import { useEffect, useRef, useState } from "react";

export function RedBand({ children }: { children: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [activated, setActivated] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !activated) {
          setActivated(true);
          observer.unobserve(el);
          // After animation completes, mark as done to remove cursor
          const timer = setTimeout(() => setDone(true), 1500);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [activated]);

  const containerClass = done
    ? "typing-container typing-done"
    : activated
      ? "typing-container typing-active"
      : "typing-container";

  return (
    <div
      ref={ref}
      className="w-full bg-primary py-5 overflow-hidden"
      role="marquee"
      aria-label={children}
    >
      <div className="text-center">
        <span
          className={`${containerClass} text-on-primary uppercase tracking-[0.12em] text-[var(--text-base)] md:text-[var(--text-lg)] font-bold`}
          style={{ fontFamily: "var(--font-mono)" }}
          aria-hidden="true"
        >
          {children}
        </span>
        {/* Accessible text always available */}
        <span className="sr-only">{children}</span>
      </div>
    </div>
  );
}
