"use client";

import Image from "next/image";
import { CallButton } from "./CallButton";

const serviceLinks = [
  { label: "Dumpster Rental", href: "/dumpster-rental" },
  { label: "Junk Removal", href: "/junk-removal" },
  { label: "Property Clean-Ups", href: "/property-cleanups" },
  { label: "Construction Debris", href: "/construction-debris-cleanup" },
  { label: "Appliance Removal", href: "/appliance-removal" },
  { label: "Furniture Disposal", href: "/furniture-disposal" },
  { label: "Bulk Material Delivery", href: "/bulk-material-delivery" },
  { label: "Bobcat Services", href: "/bobcat-services" },
  { label: "Recycling Services", href: "/recycling-services" },
  { label: "Gutter Clean-Ups", href: "/gutter-cleanups" },
  { label: "Gardening", href: "/gardening-maintenance" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Areas We Serve", href: "/service-areas" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="py-16 px-[var(--gutter)] border-t border-border">
      <div className="mx-auto max-w-[var(--content-width)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo-eagle-dumpster.png"
                alt="Eagle Dumpster logo"
                width={90}
                height={90}
                className="h-[90px] w-auto"
              />
            </div>
            <p className="mt-4 text-[var(--text-sm)] text-text-muted leading-relaxed max-w-[30ch]">
              Dumpster rental and junk removal services in Fresno, Clovis,
              Madera, Selma, Coarsegold, and Friant, California.
            </p>
            <CallButton
              className="inline-block mt-4 text-[var(--text-base)] font-medium text-primary cursor-pointer"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              (559) 613-4115
            </CallButton>
          </div>

          {/* Services column */}
          <div>
            <h4
              className="text-[var(--text-sm)] font-bold text-text uppercase tracking-wider"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Services
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[var(--text-sm)] text-text-muted hover:text-primary transition-colors"
                    style={{
                      transitionDuration: "var(--duration-max)",
                      transitionTimingFunction: "var(--easing)",
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4
              className="text-[var(--text-sm)] font-bold text-text uppercase tracking-wider"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Company
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[var(--text-sm)] text-text-muted hover:text-primary transition-colors"
                    style={{
                      transitionDuration: "var(--duration-max)",
                      transitionTimingFunction: "var(--easing)",
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Language + legal */}
          <div>
            <h4
              className="text-[var(--text-sm)] font-bold text-text uppercase tracking-wider"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Language
            </h4>
            <div className="mt-4 flex gap-3">
              <span className="text-[var(--text-sm)] font-medium text-text">
                English
              </span>
              <a
                href="/es"
                className="text-[var(--text-sm)] text-text-muted hover:text-text transition-colors"
                style={{
                  transitionDuration: "var(--duration-max)",
                  transitionTimingFunction: "var(--easing)",
                }}
              >
                Espanol
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar - verifiable business data in plain text (AEO requirement) */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-[var(--text-xs)] text-text-muted leading-relaxed">
            Eagle Dumpster - Dumpster Rental, Junk Removal, and Waste Management
            Services in Fresno, Clovis, Madera, Selma, Coarsegold, and Friant,
            California. Fast. Reliable. Honest. Call{" "}
            <CallButton className="text-text underline cursor-pointer">
              (559) 613-4115
            </CallButton>{" "}
            for a free quote. Bilingual service available (English and Spanish).
          </p>
          <p className="mt-3 text-[var(--text-xs)] text-text-muted">
            &copy; {new Date().getFullYear()} Eagle Dumpster. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
