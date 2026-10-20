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
  title: "About Eagle Dumpster | Locally Owned in Fresno, CA",
  description:
    "Eagle Dumpster is a locally owned waste management company serving Fresno and the Central Valley. Fast, reliable, honest service since day one. Call (559) 613-4115.",
  openGraph: {
    title: "About Eagle Dumpster | Fresno, CA",
    description:
      "Locally owned dumpster rental and junk removal in Fresno. Fast. Reliable. Honest.",
    url: "https://eagledumpsterca.com/about",
  },
  alternates: {
    canonical: "https://eagledumpsterca.com/about",
  },
};

const values = [
  {
    word: "Fast",
    description:
      "Same-day and next-day availability in most cases. When you call, we move. Your project does not wait because we do not wait.",
  },
  {
    word: "Reliable",
    description:
      "We show up when we say we will. We answer the phone. We do what we said we would do. Your project stays on track because we keep our commitments.",
  },
  {
    word: "Honest",
    description:
      "Free quotes with no hidden fees. The price we quote is the price you pay. No surprise charges, no fine print, no games.",
  },
];

const services = [
  "Dumpster Rental",
  "Junk Removal",
  "Property Clean-Ups",
  "Construction Debris Cleanup",
  "Appliance Removal",
  "Furniture Disposal",
  "Bulk Material Delivery",
  "Bobcat Services",
  "Recycling Services",
  "Gutter Clean-Ups",
  "Gardening Maintenance",
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Eagle Dumpster",
  telephone: "+15596134115",
  url: "https://eagledumpsterca.com",
  description:
    "Locally owned dumpster rental, junk removal, and waste management company serving Fresno, Clovis, Madera, Selma, Coarsegold, and Friant, California.",
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
    { "@type": "City", name: "Coarsegold" },
    { "@type": "City", name: "Friant" },
    { "@type": "City", name: "Selma" },
  ],
};

export default function AboutPage() {
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
              src="/images/about-team.webp"
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
              Locally owned. Locally operated.
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
                About
              </span>
              <span
                className="text-[var(--text-2xl)] md:text-[3rem] leading-[0.95] uppercase text-primary"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  letterSpacing: "var(--heading-tracking)",
                }}
              >
                Eagle Dumpster
              </span>
            </h1>

            <p className="hero-text-shadow mt-6 text-[var(--text-lg)] text-text-muted max-w-[50ch] mx-auto leading-relaxed">
              We started because homeowners and contractors in Fresno needed
              someone who would show up fast, charge fair, and do what they said.
              That is still all we do.
            </p>
          </div>
        </section>

        <RedBand>FAST. RELIABLE. HONEST.</RedBand>

        {/* ───── OUR STORY ───── */}
        <section className="py-[var(--section-y)] px-[var(--gutter)]">
          <div className="mx-auto max-w-[800px]">
            <ScrollReveal>
              <div className="text-center">
                <h2
                  className="text-[3rem] md:text-[4.5rem] tracking-[var(--heading-tracking)] text-text uppercase"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
                >
                  Our Story
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="mt-8 space-y-6 text-center">
                <p className="text-[var(--text-lg)] text-text-muted leading-relaxed">
                  Eagle Dumpster is a locally owned waste management company
                  serving Fresno and the Central Valley. We started because we
                  saw homeowners and contractors struggling with debris that
                  nobody would pick up fast enough.
                </p>
                <p className="text-[var(--text-lg)] text-text-muted leading-relaxed">
                  So we built a service around one idea: when you call, we come.
                  No runaround, no waiting days for a callback, no surprise fees
                  on the invoice. Just fast, honest service from people who live
                  and work in the same community you do.
                </p>
                <p className="text-[var(--text-lg)] text-text-muted leading-relaxed">
                  Today we handle everything from single-item pickups to full
                  property clearings across Fresno, Clovis, Madera, Selma,
                  Coarsegold, and Friant. Our crew speaks English and Spanish,
                  and every job gets the same treatment: show up on time, give a
                  clear price, do the work, leave the space clean.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ───── VALUES ───── */}
        <section className="py-[var(--section-y)] px-[var(--gutter)] bg-surface">
          <div className="mx-auto max-w-[var(--content-width)]">
            <ScrollReveal>
              <div className="text-center">
                <h2
                  className="text-[3rem] md:text-[4.5rem] tracking-[var(--heading-tracking)] text-text uppercase"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
                >
                  What We Stand For
                </h2>
              </div>
            </ScrollReveal>

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-0 border border-border">
              {values.map((v, i) => (
                <ScrollReveal key={v.word} delay={i * 120}>
                  <div
                    className={`p-8 md:p-10 text-center ${
                      i > 0
                        ? "border-t sm:border-t-0 sm:border-l border-border"
                        : ""
                    }`}
                  >
                    <span
                      className="text-[3rem] md:text-[4.5rem] tracking-[var(--heading-tracking)] text-primary uppercase"
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 700,
                      }}
                    >
                      {v.word}.
                    </span>
                    <p className="mt-3 text-[var(--text-sm)] md:text-[var(--text-base)] text-text-muted leading-relaxed max-w-[30ch] mx-auto">
                      {v.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───── WHAT WE DO ───── */}
        <section className="py-[var(--section-y)] px-[var(--gutter)]">
          <div className="mx-auto max-w-[var(--content-width)]">
            <ScrollReveal>
              <div className="text-center">
                <h2
                  className="text-[3rem] md:text-[4.5rem] tracking-[var(--heading-tracking)] text-text uppercase"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
                >
                  What We Do
                </h2>
                <p className="mt-4 text-[var(--text-lg)] text-text-muted max-w-[45ch] mx-auto leading-relaxed">
                  From a single appliance to a full property clearing.
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {services.map((s) => (
                <ScrollReveal key={s}>
                  <span
                    className="inline-flex items-center px-5 py-2.5 border border-border text-[var(--text-sm)] font-medium text-text-muted"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {s}
                  </span>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <RedBand>SERVING FRESNO AND THE CENTRAL VALLEY</RedBand>

        {/* ───── BILINGUAL ───── */}
        <section className="py-[var(--section-y)] px-[var(--gutter)] bg-surface">
          <div className="mx-auto max-w-[800px] text-center">
            <ScrollReveal>
              <h2
                className="text-[3rem] md:text-[4.5rem] tracking-[var(--heading-tracking)] text-text uppercase"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
              >
                Bilingual Service
              </h2>
              <p className="mt-6 text-[var(--text-lg)] text-text-muted leading-relaxed">
                Our team speaks English and Spanish. Whether you prefer to
                explain your project in English or in Spanish, we understand and
                we respond in the language you are most comfortable with. No
                miscommunication, no confusion, just clear service.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ───── CTA ───── */}
        <section className="py-[var(--section-y)] px-[var(--gutter)]">
          <div className="mx-auto max-w-[var(--content-width)] text-center">
            <ScrollReveal>
              <h2
                className="text-[3rem] md:text-[4.5rem] tracking-[var(--heading-tracking)] text-text uppercase"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
              >
                Ready to get
                <br />
                <span className="text-primary">started?</span>
              </h2>
              <p className="mt-4 text-[var(--text-lg)] text-text-muted max-w-[45ch] mx-auto leading-relaxed">
                One call. Clear price. Fast service. That is the Eagle Dumpster
                way.
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
