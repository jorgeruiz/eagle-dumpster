"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Areas", href: "/service-areas" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-[var(--gutter)] py-4 border-b border-border">
      <div className="mx-auto max-w-[var(--content-width)] flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo-eagle-dumpster.png"
            alt="Eagle Dumpster logo"
            width={110}
            height={110}
            className="h-[110px] w-auto"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[var(--text-sm)] font-medium text-text-muted uppercase tracking-[0.08em] hover:text-primary transition-colors"
              style={{
                fontFamily: "var(--font-body)",
                transitionDuration: "var(--duration-max)",
                transitionTimingFunction: "var(--easing)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/es"
            className="text-[var(--text-sm)] font-medium text-text-muted uppercase tracking-[0.08em] hover:text-primary transition-colors border-l border-border pl-6"
            style={{
              transitionDuration: "var(--duration-max)",
              transitionTimingFunction: "var(--easing)",
            }}
          >
            ES
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className={`block w-6 h-0.5 bg-text transition-transform origin-center ${open ? "rotate-45 translate-y-[4px]" : ""}`}
            style={{
              transitionDuration: "var(--duration-max)",
              transitionTimingFunction: "var(--easing)",
            }}
          />
          <span
            className={`block w-6 h-0.5 bg-text transition-transform origin-center ${open ? "-rotate-45 -translate-y-[4px]" : ""}`}
            style={{
              transitionDuration: "var(--duration-max)",
              transitionTimingFunction: "var(--easing)",
            }}
          />
        </button>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-bg flex flex-col items-center justify-center gap-8">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 p-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label="Close menu"
          >
            <span className="block w-6 h-0.5 bg-text rotate-45 translate-y-[1px]" />
            <span className="block w-6 h-0.5 bg-text -rotate-45 -translate-y-[1px]" />
          </button>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[var(--text-2xl)] font-bold text-text uppercase tracking-[0.05em]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/es"
            className="text-[var(--text-lg)] font-medium text-text-muted uppercase"
          >
            Espanol
          </a>
        </div>
      )}
    </nav>
  );
}
