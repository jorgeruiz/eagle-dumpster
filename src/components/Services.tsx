import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";

const services = [
  {
    title: "Junk Removal",
    description:
      "Our crew shows up, loads everything, and hauls it away the same day. Furniture, appliances, yard waste, garage cleanouts - you point, we carry.",
    image: "/images/service-junk-removal.webp",
    href: "/junk-removal",
  },
  {
    title: "Dumpster Rental",
    description:
      "Roll-off dumpsters delivered to your driveway. Fill it on your schedule, we pick it up when you're done. Perfect for remodels, cleanouts, and construction projects.",
    image: "/images/service-dumpster-rental.webp",
    href: "/dumpster-rental",
  },
  {
    title: "Property Clean-Ups",
    description:
      "Full property clearing for estates, evictions, foreclosures, or overgrown lots. We leave the space ready for its next chapter.",
    image: "/images/service-property-cleanup.webp",
    href: "/property-cleanups",
  },
];

const additionalServices = [
  { title: "Construction Debris", href: "/construction-debris-cleanup" },
  { title: "Appliance Removal", href: "/appliance-removal" },
  { title: "Furniture Disposal", href: "/furniture-disposal" },
  { title: "Bobcat Services", href: "/bobcat-services" },
  { title: "Recycling", href: "/recycling-services" },
  { title: "Gutter Clean-Ups", href: "/gutter-cleanups" },
  { title: "Gardening", href: "/gardening-maintenance" },
];

export function Services() {
  return (
    <section id="services" className="py-[var(--section-y)] px-[var(--gutter)]">
      <div className="mx-auto max-w-[var(--content-width)]">
        <ScrollReveal>
          <div className="text-center">
            <h2
              className="text-[3rem] md:text-[4.5rem] tracking-[var(--heading-tracking)] text-text uppercase"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: "var(--heading-weight)",
              }}
            >
              What We Do
            </h2>
            <p className="mt-4 text-[var(--text-lg)] text-text-muted max-w-[50ch] mx-auto leading-relaxed">
              From a single couch to an entire property, we handle waste removal
              so you can focus on what matters.
            </p>
          </div>
        </ScrollReveal>

        {/* Service cards - 3 column grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 100}>
              <a
                href={service.href}
                className="group block border border-border bg-surface hover:border-primary transition-colors overflow-hidden"
                style={{
                  transitionDuration: "var(--duration-max)",
                  transitionTimingFunction: "var(--easing)",
                }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform"
                    style={{
                      transitionDuration: "var(--duration-max)",
                      transitionTimingFunction: "var(--easing)",
                    }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Text - centered */}
                <div className="p-6 md:p-8 text-center">
                  <h3
                    className="text-[var(--text-xl)] md:text-[var(--text-2xl)] tracking-[var(--heading-tracking)] text-text uppercase"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: "var(--heading-weight)",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[var(--text-sm)] md:text-[var(--text-base)] text-text-muted leading-relaxed">
                    {service.description}
                  </p>
                  <span
                    className="inline-block mt-5 text-[var(--text-sm)] font-medium text-primary uppercase tracking-[0.1em] group-hover:tracking-[0.15em] transition-all"
                    style={{
                      transitionDuration: "var(--duration-max)",
                      transitionTimingFunction: "var(--easing)",
                    }}
                  >
                    Learn more
                  </span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* Additional services - inline list */}
        <ScrollReveal className="mt-16">
          <div className="text-center">
            <h3
              className="text-[var(--text-xl)] text-text uppercase tracking-[var(--heading-tracking)]"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
              }}
            >
              More services we offer
            </h3>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {additionalServices.map((s) => (
                <a
                  key={s.title}
                  href={s.href}
                  className="inline-flex items-center px-5 py-2.5 border border-border text-[var(--text-sm)] font-medium text-text-muted hover:border-primary hover:text-primary transition-colors"
                  style={{
                    transitionDuration: "var(--duration-max)",
                    transitionTimingFunction: "var(--easing)",
                  }}
                >
                  {s.title}
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
