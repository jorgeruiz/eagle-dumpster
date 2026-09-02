import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { AvailabilityBadge } from "@/components/AvailabilityBadge";
import { RedBand } from "@/components/RedBand";
import { StickyHeader } from "@/components/StickyHeader";
import { MobileCallBar } from "@/components/MobileCallBar";
import { CallButton } from "@/components/CallButton";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Areas } from "@/components/Areas";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schemas";

export default function Home() {
  return (
    <>
      <JsonLd data={faqPageSchema} />
      <Navbar />
      <StickyHeader />
      <MobileCallBar />

      <main className="pb-16 sm:pb-0">
        {/* Hero - typography dominant with background image */}
        <section className="relative min-h-[100dvh] flex flex-col items-center justify-center px-[var(--gutter)] py-20 text-center">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/images/service-dumpster-rental.webp"
              alt=""
              fill
              priority
              className="object-cover"
              sizes="100vw"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-bg/65" />
          </div>

          {/* Content over image */}
          <div className="relative">
            {/* Executive summary for AEO */}
            <p className="hero-text-shadow text-[var(--text-sm)] text-text-muted mb-8 max-w-[55ch] mx-auto leading-relaxed">
              Eagle Dumpster is a locally owned dumpster rental and junk
              removal company serving Fresno, Clovis, Madera, Selma, Coarsegold,
              Friant, and surrounding areas in California. Same-day service
              available. Bilingual support in English and Spanish.
            </p>

            {/* Headline - massive Oswald */}
            <h1 className="hero-text-shadow flex flex-col gap-1">
              <span
                className="text-[var(--text-4xl)] md:text-[5rem] lg:text-[6.5rem] leading-[0.95] uppercase text-text"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: "var(--heading-weight)",
                  letterSpacing: "var(--heading-tracking)",
                }}
              >
                Junk Removal
              </span>
              <span
                className="text-[var(--text-4xl)] md:text-[5rem] lg:text-[6.5rem] leading-[0.95] uppercase text-primary"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: "var(--heading-weight)",
                  letterSpacing: "var(--heading-tracking)",
                }}
              >
                &amp; Dumpster Rental
              </span>
            </h1>

            {/* Subtext */}
            <p className="hero-text-shadow mt-6 text-[var(--text-lg)] text-text-muted max-w-[45ch] mx-auto leading-relaxed">
              Fast, reliable service in Fresno, CA. We pick up your mess so
              you don&apos;t have to.
            </p>

            {/* CTA - phone */}
            <div className="mt-10 flex flex-col items-center gap-5">
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
                Get a Free Quote
              </CallButton>

              {/* Secondary CTA */}
              <a
                href="#services"
                className="inline-flex items-center gap-2 border border-border px-7 py-3.5 font-medium text-[var(--text-base)] text-text hover:border-primary active:scale-[0.98] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                style={{
                  transitionDuration: "var(--duration-max)",
                  transitionTimingFunction: "var(--easing)",
                }}
              >
                Our Services
              </a>
            </div>

            {/* Availability Badge - pulsing */}
            <div className="mt-12">
              <AvailabilityBadge />
            </div>
          </div>
        </section>

        {/* Red Band 1 - typing effect */}
        <RedBand>(559) 613-4115 - SAME DAY SERVICE</RedBand>

        <Services />
        <About />

        {/* Red Band 2 - cities */}
        <RedBand>FRESNO - CLOVIS - MADERA - SELMA - COARSEGOLD - FRIANT</RedBand>

        <Areas />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
