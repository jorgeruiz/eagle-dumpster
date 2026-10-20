import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { StickyHeader } from "@/components/StickyHeader";
import { MobileCallBar } from "@/components/MobileCallBar";
import { CallButton } from "@/components/CallButton";
import { RedBand } from "@/components/RedBand";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Service Areas | Dumpster Rental & Junk Removal in Fresno, Clovis, Madera | Eagle Dumpster",
  description:
    "Eagle Dumpster serves Fresno, Clovis, Madera, Selma, Coarsegold, Friant and surrounding Central Valley communities. Same-day dumpster rental and junk removal. Call (559) 613-4115.",
  openGraph: {
    title: "Service Areas | Eagle Dumpster | Central Valley, CA",
    description:
      "Dumpster rental, junk removal, and waste management across Fresno and the Central Valley.",
    url: "https://eagledumpsterca.com/service-areas",
  },
  alternates: {
    canonical: "https://eagledumpsterca.com/service-areas",
  },
};

const areas = [
  {
    city: "Fresno",
    description:
      "Our home base. Same-day dumpster delivery and junk removal throughout the city of Fresno - from Tower District to Fig Garden, North Fresno to Southeast Fresno. Residential and commercial service available.",
    services: [
      "Dumpster Rental",
      "Junk Removal",
      "Property Clean-Ups",
      "Construction Debris",
      "Appliance Removal",
      "Bobcat Services",
    ],
  },
  {
    city: "Clovis",
    description:
      "Full service coverage across Clovis including Old Town Clovis, Harlan Ranch, Loma Vista, and surrounding neighborhoods. Same-day availability for most services.",
    services: [
      "Dumpster Rental",
      "Junk Removal",
      "Property Clean-Ups",
      "Furniture Disposal",
      "Appliance Removal",
      "Gardening Maintenance",
    ],
  },
  {
    city: "Madera",
    description:
      "Serving the city of Madera and surrounding Madera County communities. Dumpster rental, junk removal, and property cleanups with fast turnaround.",
    services: [
      "Dumpster Rental",
      "Junk Removal",
      "Property Clean-Ups",
      "Construction Debris",
      "Bulk Material Delivery",
    ],
  },
  {
    city: "Selma",
    description:
      "Reliable dumpster rental and junk removal service in Selma. We serve residential properties and businesses throughout the Selma area.",
    services: [
      "Dumpster Rental",
      "Junk Removal",
      "Appliance Removal",
      "Furniture Disposal",
      "Recycling Services",
    ],
  },
  {
    city: "Coarsegold",
    description:
      "Serving Coarsegold and the foothill communities. Property cleanups, construction debris hauling, and dumpster rental for mountain properties and rural lots.",
    services: [
      "Dumpster Rental",
      "Junk Removal",
      "Property Clean-Ups",
      "Construction Debris",
      "Bobcat Services",
    ],
  },
  {
    city: "Friant",
    description:
      "Full coverage in Friant and the surrounding area near Millerton Lake. Residential cleanups, construction waste removal, and dumpster delivery.",
    services: [
      "Dumpster Rental",
      "Junk Removal",
      "Property Clean-Ups",
      "Bulk Material Delivery",
    ],
  },
];

const allServices = [
  { name: "Dumpster Rental", href: "/dumpster-rental" },
  { name: "Junk Removal", href: "/junk-removal" },
  { name: "Property Clean-Ups", href: "/property-cleanups" },
  { name: "Construction Debris", href: "/construction-debris-cleanup" },
  { name: "Appliance Removal", href: "/appliance-removal" },
  { name: "Furniture Disposal", href: "/furniture-disposal" },
  { name: "Bulk Material Delivery", href: "/bulk-material-delivery" },
  { name: "Bobcat Services", href: "/bobcat-services" },
  { name: "Recycling Services", href: "/recycling-services" },
  { name: "Gutter Clean-Ups", href: "/gutter-cleanups" },
  { name: "Gardening Maintenance", href: "/gardening-maintenance" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Eagle Dumpster",
  telephone: "+15596134115",
  url: "https://eagledumpsterca.com",
  description:
    "Dumpster rental, junk removal, and waste management services in Fresno, Clovis, Madera, Selma, Coarsegold, Friant, and surrounding Central Valley communities.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fresno",
    addressRegion: "CA",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Fresno" },
    { "@type": "City", name: "Clovis" },
    { "@type": "City", name: "Madera" },
    { "@type": "City", name: "Selma" },
    { "@type": "City", name: "Coarsegold" },
    { "@type": "City", name: "Friant" },
  ],
};

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd data={schema} />
      <Navbar />
      <StickyHeader />
      <MobileCallBar />

      <main className="pb-16 sm:pb-0">
        {/* ───── HERO ───── */}
        <section className="relative min-h-[70dvh] flex flex-col items-center justify-center px-[var(--gutter)] py-20 text-center">
          <div className="absolute inset-0">
            <Image
              src="/images/area-fresno-valley.webp"
              alt=""
              fill
              priority
              className="object-cover"
              sizes="100vw"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-bg/70" />
          </div>

          <div className="relative">
            <p
              className="hero-text-shadow text-[var(--text-sm)] text-primary uppercase tracking-[0.15em] font-bold mb-6"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Serving the Central Valley
            </p>

            <h1 className="hero-text-shadow flex flex-col gap-1">
              <span
                className="text-[3rem] md:text-[4.5rem] lg:text-[6rem] leading-[0.95] uppercase text-text"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  letterSpacing: "var(--heading-tracking)",
                }}
              >
                Service Areas
              </span>
              <span
                className="text-[var(--text-2xl)] md:text-[3rem] leading-[0.95] uppercase text-primary"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  letterSpacing: "var(--heading-tracking)",
                }}
              >
                Fresno &amp; Beyond
              </span>
            </h1>

            <p className="hero-text-shadow mt-6 text-[var(--text-lg)] text-text-muted max-w-[50ch] mx-auto leading-relaxed">
              Dumpster rental, junk removal, and waste management across Fresno,
              Clovis, Madera, Selma, Coarsegold, Friant, and surrounding
              communities.
            </p>

            <div className="mt-10">
              <CallButton
                className="inline-flex items-center gap-3 bg-primary text-on-primary px-8 py-4 font-medium text-[var(--text-lg)] uppercase tracking-[0.05em] hover:opacity-90 active:scale-[0.98] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  transitionDuration: "var(--duration-max)",
                  transitionTimingFunction: "var(--easing)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                Check Your Area
              </CallButton>
            </div>
          </div>
        </section>

        <RedBand>
          FRESNO - CLOVIS - MADERA - SELMA - COARSEGOLD - FRIANT
        </RedBand>

        {/* ───── CITY CARDS ───── */}
        <section className="py-[var(--section-y)] px-[var(--gutter)]">
          <div className="mx-auto max-w-[var(--content-width)]">
            <ScrollReveal>
              <div className="text-center">
                <h2
                  className="text-[3rem] md:text-[4.5rem] tracking-[var(--heading-tracking)] text-text uppercase"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                  }}
                >
                  Where We Work
                </h2>
                <p className="mt-4 text-[var(--text-lg)] text-text-muted max-w-[50ch] mx-auto leading-relaxed">
                  Same-day service available in all areas. Call to confirm
                  availability at your address.
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
              {areas.map((area, i) => (
                <ScrollReveal key={area.city} delay={i * 80}>
                  <div className="border border-border p-8 md:p-10 hover:border-primary transition-colors"
                    style={{
                      transitionDuration: "var(--duration-max)",
                      transitionTimingFunction: "var(--easing)",
                    }}
                  >
                    <h3
                      className="text-[var(--text-2xl)] md:text-[3rem] text-primary uppercase"
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 700,
                        letterSpacing: "var(--heading-tracking)",
                      }}
                    >
                      {area.city}
                    </h3>
                    <p className="mt-4 text-[var(--text-base)] text-text-muted leading-relaxed">
                      {area.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {area.services.map((s) => (
                        <span
                          key={s}
                          className="inline-flex px-3 py-1 border border-border text-[var(--text-xs)] font-medium text-text-muted uppercase tracking-[0.05em]"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───── ALL SERVICES ───── */}
        <section className="py-[var(--section-y)] px-[var(--gutter)] bg-surface">
          <div className="mx-auto max-w-[var(--content-width)]">
            <ScrollReveal>
              <div className="text-center">
                <h2
                  className="text-[3rem] md:text-[4.5rem] tracking-[var(--heading-tracking)] text-text uppercase"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                  }}
                >
                  Services Available
                </h2>
                <p className="mt-4 text-[var(--text-lg)] text-text-muted max-w-[50ch] mx-auto leading-relaxed">
                  All services available across our entire service area.
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {allServices.map((s) => (
                <ScrollReveal key={s.name}>
                  <a
                    href={s.href}
                    className="inline-flex items-center px-5 py-2.5 border border-border text-[var(--text-sm)] font-medium text-text-muted hover:border-primary hover:text-primary transition-colors"
                    style={{
                      transitionDuration: "var(--duration-max)",
                      transitionTimingFunction: "var(--easing)",
                    }}
                  >
                    {s.name}
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───── NOT SURE SECTION ───── */}
        <section className="py-[var(--section-y)] px-[var(--gutter)]">
          <div className="mx-auto max-w-[800px] text-center">
            <ScrollReveal>
              <h2
                className="text-[3rem] md:text-[4.5rem] tracking-[var(--heading-tracking)] text-text uppercase"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
              >
                Not sure if we
                <br />
                <span className="text-primary">cover your area?</span>
              </h2>
              <p className="mt-4 text-[var(--text-lg)] text-text-muted max-w-[45ch] mx-auto leading-relaxed">
                Call us. We will confirm service availability at your address in
                seconds.
              </p>
              <div className="mt-10">
                <CallButton
                  className="inline-flex items-center gap-3 bg-primary text-on-primary px-10 py-5 font-medium text-[var(--text-xl)] uppercase tracking-[0.05em] hover:opacity-90 active:scale-[0.98] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    transitionDuration: "var(--duration-max)",
                    transitionTimingFunction: "var(--easing)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  (559) 613-4115
                </CallButton>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <RedBand>EAGLE DUMPSTER - FAST. RELIABLE. HONEST.</RedBand>
      </main>

      <Footer />
    </>
  );
}
