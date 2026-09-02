import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";

const values = [
  {
    word: "Fast",
    description:
      "Same-day and next-day availability in most cases. When you call, we move.",
  },
  {
    word: "Reliable",
    description:
      "We show up when we say we will. Your project stays on track because we keep our commitments.",
  },
  {
    word: "Honest",
    description:
      "Free quotes with no hidden fees. The price we quote is the price you pay.",
  },
];

export function About() {
  return (
    <section id="about" className="py-[var(--section-y)] px-[var(--gutter)] bg-surface">
      <div className="mx-auto max-w-[var(--content-width)]">
        {/* Image - full width, centered */}
        <ScrollReveal>
          <div className="relative aspect-[16/7] overflow-hidden mx-auto max-w-[900px]">
            <Image
              src="/images/about-team.webp"
              alt="Eagle Dumpster truck delivering a roll-off dumpster at sunset in the Central Valley"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 900px"
            />
          </div>
        </ScrollReveal>

        {/* Text - centered below image */}
        <ScrollReveal>
          <div className="mt-10 text-center">
            <p className="text-[var(--text-lg)] text-text-muted leading-relaxed max-w-[55ch] mx-auto">
              Eagle Dumpster is a locally owned waste management company
              serving Fresno and the Central Valley. We started because we saw
              homeowners and contractors struggling with debris that nobody
              would pick up fast enough. So we built a service around one
              idea: when you call, we come.
            </p>
          </div>
        </ScrollReveal>

        {/* Values - Fast, Reliable, Honest */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-0 border border-border">
          {values.map((v, i) => (
            <ScrollReveal key={v.word} delay={i * 120}>
              <div
                className={`p-8 md:p-10 text-center ${
                  i > 0 ? "border-t sm:border-t-0 sm:border-l border-border" : ""
                }`}
              >
                <span
                  className="text-[3rem] md:text-[4.5rem] tracking-[var(--heading-tracking)] text-primary uppercase"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: "var(--heading-weight)",
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
  );
}
