"use client";

export function AvailabilityBadge() {
  return (
    <div className="inline-flex items-center gap-3 border border-primary px-5 py-2.5">
      {/* Pulsing red dot */}
      <span className="relative flex h-3 w-3 shrink-0">
        <span
          className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"
        />
        <span
          className="relative inline-flex h-3 w-3 rounded-full bg-primary"
        />
      </span>

      {/* Status text */}
      <span
        className="uppercase tracking-[0.15em] text-[var(--text-sm)] font-bold text-text"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        <span className="hidden sm:inline">Available today in Fresno</span>
        <span className="sm:hidden">Available today</span>
      </span>
    </div>
  );
}
