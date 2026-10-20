import type { MetadataRoute } from "next";

const BASE_URL = "https://www.eagledumpsterca.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const services = [
    "dumpster-rental",
    "junk-removal",
    "bulk-material-delivery",
    "property-cleanups",
    "construction-debris-cleanup",
    "appliance-removal",
    "furniture-disposal",
    "bobcat-services",
    "recycling-services",
    "gutter-cleanups",
    "gardening-maintenance",
  ];

  const pages = [
    "about",
    "contact",
    "faq",
    "service-areas",
  ];

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...services.map((slug) => ({
      url: `${BASE_URL}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...pages.map((slug) => ({
      url: `${BASE_URL}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
