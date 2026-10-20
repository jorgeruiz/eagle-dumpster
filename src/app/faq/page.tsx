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
  title: "FAQ | Eagle Dumpster | Dumpster Rental & Junk Removal Fresno, CA",
  description:
    "Answers to common questions about dumpster rental, junk removal, pricing, scheduling, and service areas in Fresno and the Central Valley. Call (559) 613-4115.",
  openGraph: {
    title: "Frequently Asked Questions | Eagle Dumpster",
    description:
      "Answers about dumpster rental, junk removal, pricing and service areas in Fresno, CA.",
    url: "https://eagledumpsterca.com/faq",
  },
  alternates: {
    canonical: "https://eagledumpsterca.com/faq",
  },
};

const faqCategories = [
  {
    category: "Pricing & Quotes",
    faqs: [
      {
        question: "How much does dumpster rental cost in Fresno?",
        answer:
          "Pricing depends on the dumpster size, type of material, and rental duration. We offer free, no-obligation quotes over the phone. Call (559) 613-4115 and we will give you a clear price before any work begins. The price we quote is the price you pay - no hidden fees.",
      },
      {
        question: "How much does junk removal cost?",
        answer:
          "It depends on the volume and type of material. We give you a clear price before we start - no hourly rates, no surprise charges. For a single item like a couch or fridge, it is less than a full truck load. Call us and describe what you have for an accurate quote.",
      },
      {
        question: "Do you charge extra for heavy items?",
        answer:
          "No. The quote we give you covers everything - loading, hauling, and disposal. Whether it is a light mattress or a heavy concrete pile, the price we say is the price you pay.",
      },
    ],
  },
  {
    category: "Scheduling & Availability",
    faqs: [
      {
        question: "How quickly can you come?",
        answer:
          "We offer same-day or next-business-day availability in most cases. For morning calls, we often arrive that same afternoon. Call (559) 613-4115 to check current availability.",
      },
      {
        question: "Do you work on weekends?",
        answer:
          "Yes. We are available Monday through Saturday, 7 AM to 7 PM. We understand that weekends are often the only time you can deal with a cleanup project.",
      },
      {
        question: "Can I keep the dumpster for more than one day?",
        answer:
          "Yes. We work with your schedule. Whether you need the container for a day, a weekend, or a full week, we will set a rental period that fits your project.",
      },
    ],
  },
  {
    category: "Services",
    faqs: [
      {
        question:
          "What is the difference between renting a dumpster and hiring junk removal?",
        answer:
          "With a dumpster rental, we deliver a container to your property and you fill it on your own schedule. With junk removal, our crew comes to your location, loads everything, and hauls it away in the same visit. Dumpster rental works best for ongoing projects. Junk removal is ideal when you want everything gone today.",
      },
      {
        question: "What types of materials do you haul away?",
        answer:
          "We handle furniture, appliances, construction debris (concrete, wood, drywall), yard waste, general household junk, and recyclable materials. We cannot transport hazardous materials such as paint, solvents, vehicle batteries, or asbestos.",
      },
      {
        question: "Do I need to move the stuff outside first?",
        answer:
          "No. Our crew handles everything from wherever it is - inside the house, in the garage, in the backyard, upstairs. You point, we carry.",
      },
      {
        question: "Do you disconnect appliances?",
        answer:
          "We can disconnect standard appliances like washers, dryers, and refrigerators. For gas appliances or anything that requires a licensed technician, we recommend having it disconnected before we arrive.",
      },
    ],
  },
  {
    category: "Service Areas",
    faqs: [
      {
        question: "What areas do you serve?",
        answer:
          "We serve Fresno, Clovis, Madera, Selma, Coarsegold, Friant, and surrounding communities throughout the Central Valley. Call (559) 613-4115 to confirm availability at your address.",
      },
      {
        question: "Do you serve areas outside Fresno?",
        answer:
          "Yes. Our service area covers the greater Central Valley including Clovis, Madera, Selma, Coarsegold, and Friant. If you are nearby but not sure, call us and we will let you know.",
      },
    ],
  },
  {
    category: "Language & Communication",
    faqs: [
      {
        question: "Do you speak Spanish?",
        answer:
          "Yes. Our team is fully bilingual. Whether you prefer to explain your project in English or in Spanish, we understand and respond in the language you are most comfortable with.",
      },
    ],
  },
];

const schemaFaqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap((cat) =>
    cat.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    }))
  ),
};

export default function FAQPage() {
  return (
    <>
      <JsonLd data={schemaFaqPage} />
      <Navbar />
      <StickyHeader />
      <MobileCallBar />

      <main className="pb-16 sm:pb-0">
        {/* ───── HERO ───── */}
        <section className="relative min-h-[50dvh] flex flex-col items-center justify-center px-[var(--gutter)] py-20 text-center bg-surface">
          <div className="relative">
            <p
              className="text-[var(--text-sm)] text-primary uppercase tracking-[0.15em] font-bold mb-6"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Everything you need to know
            </p>

            <h1
              className="text-[3rem] md:text-[4.5rem] lg:text-[6rem] leading-[0.95] uppercase text-text"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                letterSpacing: "var(--heading-tracking)",
              }}
            >
              FAQ
            </h1>

            <p className="mt-6 text-[var(--text-lg)] text-text-muted max-w-[50ch] mx-auto leading-relaxed">
              Answers to common questions about dumpster rental, junk removal,
              pricing, and service areas. If your question is not here, call
              us - we pick up the phone.
            </p>
          </div>
        </section>

        <RedBand>(559) 613-4115 - WE ANSWER THE PHONE</RedBand>

        {/* ───── FAQ SECTIONS ───── */}
        {faqCategories.map((cat, catIndex) => (
          <section
            key={cat.category}
            className={`py-[var(--section-y)] px-[var(--gutter)] ${
              catIndex % 2 === 0 ? "" : "bg-surface"
            }`}
          >
            <div className="mx-auto max-w-[800px]">
              <ScrollReveal>
                <h2
                  className="text-[var(--text-2xl)] md:text-[3rem] tracking-[var(--heading-tracking)] text-text uppercase text-center"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                  }}
                >
                  {cat.category}
                </h2>
              </ScrollReveal>

              <div className="mt-10">
                {cat.faqs.map((faq, i) => (
                  <ScrollReveal key={i} delay={i * 60}>
                    <div
                      className={`py-8 ${
                        i > 0 ? "border-t border-border" : ""
                      }`}
                    >
                      <h3
                        className="text-[var(--text-lg)] md:text-[var(--text-xl)] text-text text-center"
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontWeight: 600,
                        }}
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
        ))}

        {/* ───── CTA ───── */}
        <section className="py-[var(--section-y)] px-[var(--gutter)]">
          <div className="mx-auto max-w-[var(--content-width)] text-center">
            <ScrollReveal>
              <h2
                className="text-[3rem] md:text-[4.5rem] tracking-[var(--heading-tracking)] text-text uppercase"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
              >
                Still have
                <br />
                <span className="text-primary">questions?</span>
              </h2>
              <p className="mt-4 text-[var(--text-lg)] text-text-muted max-w-[45ch] mx-auto leading-relaxed">
                Call us. We answer the phone and we speak your language.
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
