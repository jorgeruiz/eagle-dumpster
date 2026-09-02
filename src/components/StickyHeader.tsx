"use client";

import { useEffect, useRef, useState } from "react";
import { useCallDialog } from "./CallConfirmDialog";

// Served cities with approximate coordinates
const CITIES = [
  { name: "Fresno", lat: 36.7378, lng: -119.7871 },
  { name: "Clovis", lat: 36.8252, lng: -119.7029 },
  { name: "Madera", lat: 36.9613, lng: -120.0607 },
  { name: "Coarsegold", lat: 37.2621, lng: -119.6984 },
  { name: "Friant", lat: 36.9877, lng: -119.7226 },
];

function getClosestCity(lat: number, lng: number): string {
  let closest = CITIES[0].name;
  let minDist = Infinity;

  for (const city of CITIES) {
    const dist = Math.sqrt(
      Math.pow(lat - city.lat, 2) + Math.pow(lng - city.lng, 2)
    );
    if (dist < minDist) {
      minDist = dist;
      closest = city.name;
    }
  }

  // If user is very far from all cities (> ~100km), show "Fresno"
  if (minDist > 1.0) {
    return "Fresno";
  }

  return closest;
}

export function StickyHeader() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [city, setCity] = useState("Fresno");
  const { openCallDialog } = useCallDialog();

  // Geolocation - detect nearest city
  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const nearest = getClosestCity(
          position.coords.latitude,
          position.coords.longitude
        );
        setCity(nearest);
      },
      () => {
        // Permission denied or error - keep default "Fresno"
      },
      { timeout: 5000, maximumAge: 300000 }
    );
  }, []);

  // Show header after scrolling past hero
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Sentinel at bottom of hero */}
      <div ref={sentinelRef} className="h-0 w-full" aria-hidden="true" />

      {/* Fixed header - red bar */}
      <div
        className={`fixed top-0 left-0 right-0 z-[60] bg-primary transition-transform ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{
          transitionDuration: "var(--duration-max)",
          transitionTimingFunction: "var(--easing)",
        }}
        role="status"
        aria-live="polite"
      >
        <div className="mx-auto max-w-[var(--content-width)] px-[var(--gutter)] py-2.5 flex items-center justify-between">
          {/* Left - availability with pulse */}
          <div className="flex items-center gap-3">
            {/* Pulsing dot */}
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-on-primary opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-on-primary" />
            </span>

            <span
              className="text-[var(--text-sm)] text-on-primary font-bold uppercase tracking-[0.1em]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <span className="hidden sm:inline">Available today in {city}</span>
              <span className="sm:hidden">Available in {city}</span>
            </span>
          </div>

          {/* Right - call CTA */}
          <button
            onClick={openCallDialog}
            className="hidden sm:inline-flex items-center gap-2 bg-on-primary text-primary px-5 py-1.5 text-[var(--text-sm)] font-bold uppercase tracking-[0.08em] hover:opacity-90 active:scale-[0.98] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-primary"
            style={{
              fontFamily: "var(--font-heading)",
              transitionDuration: "var(--duration-max)",
              transitionTimingFunction: "var(--easing)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                clipRule="evenodd"
              />
            </svg>
            Call Now
          </button>
        </div>
      </div>
    </>
  );
}
