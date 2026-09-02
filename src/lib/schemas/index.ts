export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Eagle Dumpster",
  description:
    "Waste management, junk removal, appliance hauling, construction debris cleanup, and property clean-up services serving Fresno, Clovis, Madera, Selma, Coarsegold, Friant, and surrounding areas in California.",
  url: "https://eagledumpsterca.com/",
  telephone: "+15596134115",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fresno",
    addressRegion: "CA",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Fresno", sameAs: "https://www.wikidata.org/wiki/Q131827" },
    { "@type": "City", name: "Clovis", sameAs: "https://www.wikidata.org/wiki/Q976074" },
    { "@type": "City", name: "Madera", sameAs: "https://www.wikidata.org/wiki/Q980985" },
    { "@type": "City", name: "Coarsegold", sameAs: "https://www.wikidata.org/wiki/Q2669038" },
    { "@type": "City", name: "Friant" },
    { "@type": "City", name: "Selma" },
  ],
  priceRange: "$$",
  slogan: "Fast. Reliable. Honest.",
  knowsLanguage: ["en", "es"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+15596134115",
    contactType: "customer service",
    availableLanguage: ["English", "Spanish"],
  },
};

export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does dumpster rental cost in Fresno?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pricing depends on the dumpster size, type of material, and rental duration. Eagle Dumpster offers free, no-obligation quotes over the phone. Call (559) 613-4115 and we will give you a clear price before any work begins.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you pick up my junk?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eagle Dumpster offers same-day or next-business-day availability in most cases. For urgent situations, call directly at (559) 613-4115 to coordinate the fastest possible visit.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between renting a dumpster and hiring junk removal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With a dumpster rental, a container is delivered to your property and you fill it on your own schedule. With junk removal, the Eagle Dumpster crew comes to your location, loads everything, and hauls it away in the same visit. Dumpster rental works best for ongoing projects. Junk removal is ideal when you want everything gone today.",
      },
    },
    {
      "@type": "Question",
      name: "What types of materials do you haul away?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eagle Dumpster handles furniture, appliances, construction debris (concrete, wood, drywall), yard waste, general household junk, and recyclable materials. Due to environmental regulations, hazardous materials such as paint, solvents, vehicle batteries, or asbestos cannot be transported.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve areas outside Fresno?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Eagle Dumpster covers Fresno, Clovis, Madera, Selma, Coarsegold, Friant, and surrounding communities in the Central Valley. Call (559) 613-4115 to confirm service availability at your address.",
      },
    },
  ],
};
