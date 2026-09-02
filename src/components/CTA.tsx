import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";
import { CallButton } from "./CallButton";

export function CTA() {
  return (
    <section className="relative py-[var(--section-y)] px-[var(--gutter)] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/cta-dumpster-closeup.webp"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-bg/80" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-[var(--content-width)] text-center py-10 md:py-16">
        <ScrollReveal>
          <h2
            className="text-[3rem] md:text-[4.5rem] tracking-[var(--heading-tracking)] text-text uppercase"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: "var(--heading-weight)",
            }}
          >
            Ready to clear the mess?
          </h2>
          <p className="mt-4 text-[var(--text-lg)] text-text-muted max-w-[45ch] mx-auto leading-relaxed">
            Get a free quote in minutes. No obligation, no hidden fees. Just
            tell us what you need gone.
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
        </ScrollReveal>
      </div>
    </section>
  );
}
