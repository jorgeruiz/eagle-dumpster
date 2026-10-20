import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { StickyHeader } from "@/components/StickyHeader";
import { MobileCallBar } from "@/components/MobileCallBar";
import { CallButton } from "@/components/CallButton";
import { RedBand } from "@/components/RedBand";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact Eagle Dumpster | Call (559) 613-4115 | Fresno, CA",
  description:
    "Contact Eagle Dumpster for a free quote on dumpster rental, junk removal, and waste management in Fresno, Clovis, Madera and surrounding areas. Call (559) 613-4115.",
  openGraph: {
    title: "Contact Eagle Dumpster | Fresno, CA",
    description:
      "Call (559) 613-4115 for a free quote. Dumpster rental, junk removal, and more in Fresno.",
    url: "https://eagledumpsterca.com/contact",
  },
  alternates: {
    canonical: "https://eagledumpsterca.com/contact",
  },
};

const contactMethods = [
  {
    label: "Call us",
    value: "(559) 613-4115",
    description:
      "The fastest way to get a quote. We answer the phone and give you a price on the spot.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-7 h-7"
      >
        <path
          fillRule="evenodd"
          d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    isPhone: true,
  },
  {
    label: "Text us",
    value: "(559) 613-4115",
    description:
      "Prefer texting? Send us a message with what you need and we will respond quickly.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-7 h-7"
      >
        <path
          fillRule="evenodd"
          d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    isPhone: true,
  },
  {
    label: "Hours",
    value: "Mon - Sat, 7 AM - 7 PM",
    description:
      "We work when you need us. Early mornings and weekends included.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-7 h-7"
      >
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    isPhone: false,
  },
];

const cities = [
  "Fresno",
  "Clovis",
  "Madera",
  "Coarsegold",
  "Friant",
  "Selma",
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Eagle Dumpster",
  telephone: "+15596134115",
  url: "https://eagledumpsterca.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fresno",
    addressRegion: "CA",
    addressCountry: "US",
  },
  openingHours: "Mo-Sa 07:00-19:00",
  areaServed: [
    { "@type": "City", name: "Fresno" },
    { "@type": "City", name: "Clovis" },
    { "@type": "City", name: "Madera" },
    { "@type": "City", name: "Coarsegold" },
    { "@type": "City", name: "Friant" },
    { "@type": "City", name: "Selma" },
  ],
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={schema} />
      <Navbar />
      <StickyHeader />
      <MobileCallBar />

      <main className="pb-16 sm:pb-0">
        {/* ───── HERO ───── */}
        <section className="relative min-h-[60dvh] flex flex-col items-center justify-center px-[var(--gutter)] py-20 text-center bg-surface">
          <div className="relative">
            <p
              className="text-[var(--text-sm)] text-primary uppercase tracking-[0.15em] font-bold mb-6"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              We answer the phone
            </p>

            <h1 className="flex flex-col gap-1">
              <span
                className="text-[3rem] md:text-[4.5rem] lg:text-[6rem] leading-[0.95] uppercase text-text"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  letterSpacing: "var(--heading-tracking)",
                }}
              >
                Contact Us
              </span>
            </h1>

            <p className="mt-6 text-[var(--text-lg)] text-text-muted max-w-[45ch] mx-auto leading-relaxed">
              Call, text, or send us a message. We respond fast because we know
              your project cannot wait.
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
                (559) 613-4115
              </CallButton>
            </div>
          </div>
        </section>

        <RedBand>CALL NOW - FREE QUOTE IN MINUTES</RedBand>

        {/* ───── CONTACT METHODS ───── */}
        <section className="py-[var(--section-y)] px-[var(--gutter)]">
          <div className="mx-auto max-w-[var(--content-width)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border">
              {contactMethods.map((method, i) => (
                <ScrollReveal key={method.label} delay={i * 120}>
                  <div
                    className={`p-8 md:p-10 text-center ${
                      i > 0
                        ? "border-t md:border-t-0 md:border-l border-border"
                        : ""
                    }`}
                  >
                    <div
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full mx-auto border border-[#52525B]"
                      style={{
                        background:
                          "linear-gradient(145deg, #71717A 0%, #A1A1AA 25%, #D4D4D8 50%, #A1A1AA 75%, #52525B 100%)",
                        color: "#18181B",
                      }}
                    >
                      {method.icon}
                    </div>
                    <h2
                      className="mt-5 text-[var(--text-xl)] md:text-[var(--text-2xl)] text-text uppercase"
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 700,
                      }}
                    >
                      {method.label}
                    </h2>
                    {method.isPhone ? (
                      <CallButton
                        className="mt-2 inline-block text-[var(--text-lg)] font-medium text-primary cursor-pointer"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {method.value}
                      </CallButton>
                    ) : (
                      <p
                        className="mt-2 text-[var(--text-lg)] font-medium text-primary"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {method.value}
                      </p>
                    )}
                    <p className="mt-3 text-[var(--text-sm)] md:text-[var(--text-base)] text-text-muted leading-relaxed">
                      {method.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───── AREAS WE SERVE ───── */}
        <section className="py-[var(--section-y)] px-[var(--gutter)] bg-surface">
          <div className="mx-auto max-w-[var(--content-width)] text-center">
            <ScrollReveal>
              <h2
                className="text-[3rem] md:text-[4.5rem] tracking-[var(--heading-tracking)] text-text uppercase"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
              >
                Areas We Serve
              </h2>
              <p className="mt-4 text-[var(--text-lg)] text-text-muted max-w-[45ch] mx-auto leading-relaxed">
                Not sure if we cover your area? Call us and we will confirm
                right away.
              </p>
            </ScrollReveal>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {cities.map((city) => (
                <ScrollReveal key={city}>
                  <span
                    className="inline-flex px-5 py-2.5 border border-border text-[var(--text-sm)] md:text-[var(--text-base)] font-medium text-text uppercase tracking-[0.08em]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {city}
                  </span>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───── WHAT TO EXPECT ───── */}
        <section className="py-[var(--section-y)] px-[var(--gutter)]">
          <div className="mx-auto max-w-[800px] text-center">
            <ScrollReveal>
              <h2
                className="text-[3rem] md:text-[4.5rem] tracking-[var(--heading-tracking)] text-text uppercase"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
              >
                What to Expect
              </h2>
            </ScrollReveal>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  number: "01",
                  title: "You call or text",
                  desc: "Tell us what you need - junk removal, dumpster, cleanup, whatever it is.",
                },
                {
                  number: "02",
                  title: "We give you a price",
                  desc: "Clear quote on the spot. No hidden fees, no surprises later.",
                },
                {
                  number: "03",
                  title: "We schedule it",
                  desc: "Same day or next morning in most cases. We work around your timeline.",
                },
                {
                  number: "04",
                  title: "We show up and deliver",
                  desc: "On time, as quoted. Your space is clean and your project moves forward.",
                },
              ].map((step, i) => (
                <ScrollReveal key={step.number} delay={i * 100}>
                  <div
                    className="border border-border bg-surface p-8 text-center hover:border-primary transition-colors"
                    style={{
                      transitionDuration: "var(--duration-max)",
                      transitionTimingFunction: "var(--easing)",
                    }}
                  >
                    <span
                      className="text-[4rem] leading-none text-primary"
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 700,
                      }}
                    >
                      {step.number}
                    </span>
                    <h3
                      className="mt-4 text-[var(--text-xl)] text-text uppercase"
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 700,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[var(--text-sm)] text-text-muted leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <RedBand>EAGLE DUMPSTER - FAST. RELIABLE. HONEST.</RedBand>
      </main>

      <Footer />
    </>
  );
}
