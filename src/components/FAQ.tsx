"use client";

import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

const faqs = [
  {
    question: "How much does dumpster rental cost in Fresno?",
    answer:
      "Pricing depends on the dumpster size, type of material, and rental duration. We offer free, no-obligation quotes over the phone. Call (559) 613-4115 and we will give you a clear price before any work begins.",
  },
  {
    question: "How quickly can you pick up my junk?",
    answer:
      "We offer same-day or next-business-day availability in most cases. For urgent situations, call us directly at (559) 613-4115 and we will coordinate the fastest possible visit.",
  },
  {
    question:
      "What is the difference between renting a dumpster and hiring junk removal?",
    answer:
      "With a dumpster rental, we deliver a container to your property and you fill it on your own schedule. With junk removal, our crew comes to your location, loads everything, and hauls it away in the same visit. Dumpster rental works best for ongoing projects. Junk removal is ideal when you want everything gone today.",
  },
  {
    question: "What types of materials do you haul away?",
    answer:
      "We handle furniture, appliances, construction debris (concrete, wood, drywall), yard waste, general household junk, and recyclable materials. Due to environmental regulations, we cannot transport hazardous materials such as paint, solvents, vehicle batteries, or asbestos.",
  },
  {
    question: "Do you serve areas outside Fresno?",
    answer:
      "Yes. We cover Fresno, Clovis, Madera, Selma, Coarsegold, Friant, and surrounding communities in the Central Valley. Call (559) 613-4115 to confirm service availability at your address.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="w-full py-6 md:py-8 flex items-center justify-between gap-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        aria-expanded={isOpen}
      >
        <h3
          className="text-[var(--text-base)] md:text-[var(--text-lg)] text-text"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
          }}
        >
          {faq.question}
        </h3>
        <span
          className={`shrink-0 w-6 h-6 flex items-center justify-center text-primary transition-transform ${
            isOpen ? "rotate-45" : ""
          }`}
          style={{
            transitionDuration: "var(--duration-max)",
            transitionTimingFunction: "var(--easing)",
          }}
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="pb-6 md:pb-8">
          <p className="text-[var(--text-base)] text-text-muted leading-relaxed max-w-[65ch] mx-auto text-center">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  // First 3 open by default for AEO
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0, 1, 2]));

  const toggle = (index: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section id="faq" className="py-[var(--section-y)] px-[var(--gutter)] bg-surface">
      <div className="mx-auto max-w-[800px]">
        <ScrollReveal>
          <div className="text-center">
            <h2
              className="text-[3rem] md:text-[4.5rem] tracking-[var(--heading-tracking)] text-text uppercase"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: "var(--heading-weight)",
              }}
            >
              Common Questions
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-10">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <FAQItem
                faq={faq}
                isOpen={openItems.has(i)}
                onToggle={() => toggle(i)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
