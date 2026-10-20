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
  title: "Gutter Cleaning in Fresno, CA | Debris Removal | Eagle Dumpster",
  description:
    "Gutter cleaning and debris removal in Fresno, Clovis, Madera and surrounding areas. Clogged gutters cause water damage - we clean them out before the problems start. Call (559) 613-4115.",
  openGraph: {
    title: "Gutter Cleaning in Fresno, CA | Eagle Dumpster",
    description:
      "Gutter cleaning and debris removal in Fresno and surrounding areas. We clean them out, flush them, and haul the debris away. Call (559) 613-4115.",
    url: "https://eagledumpsterca.com/gutter-cleanups",
  },
  alternates: {
    canonical: "https://eagledumpsterca.com/gutter-cleanups",
  },
};

const problems = [
  {
    title: "Water overflowing during rain",
    description:
      "When gutters are clogged, water has nowhere to go but over the edge. That overflow soaks your foundation, floods your landscaping, and can get into your walls. The damage comes fast.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Leaves and debris piling up",
    description:
      "Getting on a ladder to clean gutters is a risk that ends badly too often. A full season of leaves, dirt, and debris packed into a gutter is not a one-person job done safely from the ground.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Years since last cleaning",
    description:
      "If you can not remember the last time your gutters were cleaned, they probably need it now. Years of buildup create blockages, add weight, and eventually pull gutters away from the fascia.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
      </svg>
    ),
  },
];

const steps = [
  {
    number: "01",
    title: "You call",
    description:
      "Tell us your address and what you know about the situation - when they were last cleaned, any visible issues. We give you a price and schedule the job.",
  },
  {
    number: "02",
    title: "We inspect",
    description:
      "Before we start, we check the gutters for damage, proper slope, and the extent of the blockage. You know what you are dealing with before we clean.",
  },
  {
    number: "03",
    title: "Clean and flush",
    description:
      "We clear all debris by hand and flush the gutters and downspouts with water to confirm they are flowing correctly and the blockage is fully cleared.",
  },
  {
    number: "04",
    title: "Water flows right",
    description:
      "Gutters are clear, downspouts are flowing, and all debris is hauled away from your property. You are ready for the next rain.",
  },
];

const faqs = [
  {
    question: "How often should gutters be cleaned in Fresno?",
    answer:
      "Twice a year is the standard recommendation - once in late spring after the pollen season and once in late fall after the leaves drop. Properties with many trees nearby may need it more frequently.",
  },
  {
    question: "How much does gutter cleaning cost in Fresno?",
    answer:
      "Pricing depends on the linear footage of your gutters, the number of stories, and the condition. We give you a clear price before we start - no surprises.",
  },
  {
    question: "Do you check for damage while cleaning?",
    answer:
      "Yes. We inspect for cracks, separated seams, improper slope, and damage to hangers or fascia while we work. If we find something, we tell you before it becomes a bigger problem.",
  },
  {
    question: "Do you haul away the debris?",
    answer:
      "Yes. All the leaves, dirt, and debris we remove goes with us. We do not leave piles on your lawn or driveway.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gutter Clean-Ups",
  provider: {
    "@type": "LocalBusiness",
    name: "Eagle Dumpster",
    telephone: "+15596134115",
  },
  areaServed: [
    { "@type": "City", name: "Fresno" },
    { "@type": "City", name: "Clovis" },
    { "@type": "City", name: "Madera" },
    { "@type": "City", name: "Coarsegold" },
    { "@type": "City", name: "Friant" },
    { "@type": "City", name: "Selma" },
  ],
  description:
    "Gutter cleaning and debris removal for homes in Fresno and surrounding areas. We clean, flush, and inspect gutters so water flows properly and damage is prevented.",
};

export default function GutterCleanupsPage() {
  return (
    <>
      <JsonLd data={schema} />
      <Navbar />
      <StickyHeader />
      <MobileCallBar />

      <main className="pb-16 sm:pb-0">
        {/* ───── HERO ───── */}
        <section className="relative min-h-[90dvh] flex flex-col items-center justify-center px-[var(--gutter)] py-20 text-center">
          <div className="absolute inset-0">
            <Image
              src="/images/landing-dumpster-clean.webp"
              alt=""
              fill
              priority
              className="object-cover"
              sizes="100vw"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-bg/65" />
          </div>

          <div className="relative">
            <p
              className="hero-text-shadow text-[var(--text-sm)] text-primary uppercase tracking-[0.15em] font-bold mb-6"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Clogged gutters cause expensive damage
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
                Gutter Clean-Ups
              </span>
              <span
                className="text-[var(--text-2xl)] md:text-[3rem] leading-[0.95] uppercase text-primary"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  letterSpacing: "var(--heading-tracking)",
                }}
              >
                Fresno &amp; Central Valley
              </span>
            </h1>

            <p className="hero-text-shadow mt-6 text-[var(--text-lg)] text-text-muted max-w-[45ch] mx-auto leading-relaxed">
              Leaves, dirt, and debris clogging your gutters. We clean them
              out before the damage starts.
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clipRule="evenodd" />
                </svg>
                Get a Free Quote
              </CallButton>
            </div>
          </div>
        </section>

        <RedBand>CLEAN GUTTERS - NO WATER DAMAGE</RedBand>

        {/* ───── PROBLEM ───── */}
        <section className="py-[var(--section-y)] px-[var(--gutter)]">
          <div className="mx-auto max-w-[var(--content-width)]">
            <ScrollReveal>
              <div className="text-center">
                <h2
                  className="text-[3rem] md:text-[4.5rem] tracking-[var(--heading-tracking)] text-text uppercase"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
                >
                  Sound familiar?
                </h2>
                <p className="mt-4 text-[var(--text-lg)] text-text-muted max-w-[45ch] mx-auto leading-relaxed">
                  Clogged gutters do not fix themselves.
                  That is where we come in.
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-0 border border-border">
              {problems.map((problem, i) => (
                <ScrollReveal key={problem.title} delay={i * 120}>
                  <div className={`p-8 md:p-10 text-center ${i > 0 ? "border-t md:border-t-0 md:border-l border-border" : ""}`}>
                    <div className="relative inline-flex items-center justify-center w-14 h-14 mx-auto">
                      <span className="pulse-dot absolute inset-0 rounded-full bg-primary opacity-75" />
                      <span className="relative inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-on-primary">
                        {problem.icon}
                      </span>
                    </div>
                    <h3
                      className="mt-5 text-[var(--text-xl)] md:text-[var(--text-2xl)] text-text uppercase"
                      style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
                    >
                      {problem.title}
                    </h3>
                    <p className="mt-3 text-[var(--text-sm)] md:text-[var(--text-base)] text-text-muted leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───── HOW IT WORKS ───── */}
        <section className="relative py-[var(--section-y)] px-[var(--gutter)] overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="sticky top-0 h-[100dvh]">
              <Image
                src="/images/landing-dumpster-filled.webp"
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
                aria-hidden="true"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-bg/85" />

          <div className="relative mx-auto max-w-[var(--content-width)]">
            <ScrollReveal>
              <div className="text-center">
                <h2
                  className="text-[3rem] md:text-[4.5rem] tracking-[var(--heading-tracking)] text-text uppercase"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
                >
                  How it works
                </h2>
                <p className="mt-4 text-[var(--text-lg)] text-text-muted max-w-[45ch] mx-auto leading-relaxed">
                  Four steps from clogged to clear.
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <ScrollReveal key={step.number} delay={i * 100}>
                  <div
                    className="border border-border bg-bg p-8 text-center hover:border-primary transition-colors"
                    style={{ transitionDuration: "var(--duration-max)", transitionTimingFunction: "var(--easing)" }}
                  >
                    <span className="text-[4rem] leading-none text-primary" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
                      {step.number}
                    </span>
                    <h3 className="mt-4 text-[var(--text-xl)] md:text-[var(--text-2xl)] text-text uppercase" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[var(--text-sm)] text-text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <RedBand>(559) 613-4115 - SCHEDULE A CLEANING</RedBand>

        {/* ───── DIFFERENTIATORS ───── */}
        <section className="py-[var(--section-y)] px-[var(--gutter)]">
          <div className="mx-auto max-w-[var(--content-width)]">
            <ScrollReveal>
              <div className="text-center">
                <h2
                  className="text-[3rem] md:text-[4.5rem] tracking-[var(--heading-tracking)] text-text uppercase"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
                >
                  Why Eagle Dumpster
                </h2>
              </div>
            </ScrollReveal>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollReveal delay={0}>
                <div className="text-center">
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full mx-auto border border-[#52525B]"
                    style={{
                      background: "linear-gradient(145deg, #71717A 0%, #A1A1AA 25%, #D4D4D8 50%, #A1A1AA 75%, #52525B 100%)",
                      color: "#18181B",
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                      <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="mt-5 text-[var(--text-xl)] md:text-[var(--text-2xl)] text-text uppercase" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
                    Fair prices
                  </h3>
                  <p className="mt-3 text-[var(--text-base)] text-text-muted leading-relaxed max-w-[35ch] mx-auto">
                    One clear price before we start. No hourly rates, no
                    hidden fees, no surprises. The quote is the bill.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={120}>
                <div className="text-center">
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full mx-auto border border-[#52525B]"
                    style={{
                      background: "linear-gradient(145deg, #71717A 0%, #A1A1AA 25%, #D4D4D8 50%, #A1A1AA 75%, #52525B 100%)",
                      color: "#18181B",
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="mt-5 text-[var(--text-xl)] md:text-[var(--text-2xl)] text-text uppercase" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
                    Safe and thorough
                  </h3>
                  <p className="mt-3 text-[var(--text-base)] text-text-muted leading-relaxed max-w-[35ch] mx-auto">
                    We work safely at height with the right equipment. Every
                    gutter and downspout gets cleared and flushed - not just
                    the visible sections.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={240}>
                <div className="text-center">
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full mx-auto border border-[#52525B]"
                    style={{
                      background: "linear-gradient(145deg, #71717A 0%, #A1A1AA 25%, #D4D4D8 50%, #A1A1AA 75%, #52525B 100%)",
                      color: "#18181B",
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                      <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="mt-5 text-[var(--text-xl)] md:text-[var(--text-2xl)] text-text uppercase" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
                    Debris hauled away
                  </h3>
                  <p className="mt-3 text-[var(--text-base)] text-text-muted leading-relaxed max-w-[35ch] mx-auto">
                    We do not leave piles on your lawn. All debris removed
                    from your gutters leaves with us.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ───── FAQ ───── */}
        <section className="py-[var(--section-y)] px-[var(--gutter)] bg-surface">
          <div className="mx-auto max-w-[800px]">
            <ScrollReveal>
              <div className="text-center">
                <h2
                  className="text-[3rem] md:text-[4.5rem] tracking-[var(--heading-tracking)] text-text uppercase"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
                >
                  Questions
                </h2>
              </div>
            </ScrollReveal>

            <div className="mt-10">
              {faqs.map((faq, i) => (
                <ScrollReveal key={i} delay={i * 60}>
                  <div className={`py-8 ${i > 0 ? "border-t border-border" : ""}`}>
                    <h3
                      className="text-[var(--text-lg)] md:text-[var(--text-xl)] text-text text-center"
                      style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                    >
                      {faq.question}
                    </h3>
                    <p className="mt-3 text-[var(--text-base)] text-text-muted leading-relaxed max-w-[60ch] mx-auto text-center">
                      {faq.answer}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───── FINAL CTA ───── */}
        <section className="py-[var(--section-y)] px-[var(--gutter)]">
          <div className="mx-auto max-w-[var(--content-width)] text-center">
            <ScrollReveal>
              <h2
                className="text-[3rem] md:text-[4.5rem] tracking-[var(--heading-tracking)] text-text uppercase"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
              >
                Your gutters are not going
                <br />
                <span className="text-primary">to clean themselves</span>
              </h2>
              <p className="mt-4 text-[var(--text-lg)] text-text-muted max-w-[45ch] mx-auto leading-relaxed">
                One call. We clean and flush. Water flows right.
              </p>
              <div className="mt-10">
                <CallButton
                  className="inline-flex items-center gap-3 bg-primary text-on-primary px-10 py-5 font-medium text-[var(--text-xl)] uppercase tracking-[0.05em] hover:opacity-90 active:scale-[0.98] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 700, transitionDuration: "var(--duration-max)", transitionTimingFunction: "var(--easing)" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                    <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clipRule="evenodd" />
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
