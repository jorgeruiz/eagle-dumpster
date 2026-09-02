"use client";

import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";
import { CallButton } from "./CallButton";

const cities = [
  "Fresno",
  "Clovis",
  "Madera",
  "Coarsegold",
  "Friant",
];

export function Areas() {
  return (
    <section id="areas" className="py-[var(--section-y)] px-[var(--gutter)]">
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
              Serving the Central Valley
            </h2>
            <p className="mt-4 text-[var(--text-lg)] text-text-muted max-w-[45ch] mx-auto leading-relaxed">
              Wherever you are in the greater Fresno area, we bring the
              dumpster to your door.
            </p>
          </div>
        </ScrollReveal>

        {/* Image with overlay */}
        <ScrollReveal className="mt-12">
          <div className="relative overflow-hidden">
            <Image
              src="/images/area-fresno-valley.webp"
              alt="Aerial view of Fresno and the Central Valley, California - Eagle Dumpster service area"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />

            {/* Cities over image */}
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 text-center">
              <div className="flex flex-wrap justify-center gap-3">
                {cities.map((city) => (
                  <span
                    key={city}
                    className="inline-flex px-5 py-2.5 border border-on-primary/30 text-[var(--text-sm)] md:text-[var(--text-base)] font-medium text-on-primary uppercase tracking-[0.08em]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Call to confirm */}
        <ScrollReveal>
          <div className="mt-8 text-center">
            <p className="text-[var(--text-base)] text-text-muted">
              Not sure if we cover your area? Call{" "}
              <CallButton
                className="font-medium text-primary hover:underline cursor-pointer"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                (559) 613-4115
              </CallButton>{" "}
              and we will confirm right away.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
