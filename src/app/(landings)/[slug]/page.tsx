import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getMdxBySlug, getAllSlugs } from "@/lib/mdx";
import { MdxRenderer } from "@/components/MdxRenderer";
import { JsonLd } from "@/components/JsonLd";
import { Footer } from "@/components/Footer";

interface LandingFrontmatter {
  titulo: string;
  slug: string;
  descripcion: string;
  og_image?: string;
  target_audience?: string;
  cta_principal: string;
  noindex?: boolean;
  fecha_publicacion: string;
}

export async function generateStaticParams() {
  return getAllSlugs("content/landings").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const mdx = getMdxBySlug("content/landings", slug);
  if (!mdx) return {};
  const fm = mdx.frontmatter as LandingFrontmatter;
  return {
    title: `${fm.titulo} | Eagle Dumpster`,
    description: fm.descripcion,
    robots: fm.noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      title: `${fm.titulo} | Eagle Dumpster`,
      description: fm.descripcion,
      images: fm.og_image ? [fm.og_image] : undefined,
    },
  };
}

export default async function LandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const mdx = getMdxBySlug("content/landings", slug);
  if (!mdx) notFound();

  const fm = mdx.frontmatter as LandingFrontmatter;

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: fm.titulo,
    description: fm.descripcion,
    url: `https://eagledumpsterca.com/${fm.slug}`,
  };

  return (
    <>
      <JsonLd data={schema} />
      <main className="py-[var(--section-y)] px-[var(--gutter)]">
        {/* Hero */}
        <div className="mx-auto max-w-[var(--content-width)] mb-16">
          <h1
            className="text-[var(--text-3xl)] md:text-[var(--text-4xl)] tracking-[var(--heading-tracking)] text-text"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: "var(--heading-weight)",
            }}
          >
            {fm.titulo}
          </h1>
          <p className="mt-4 text-[var(--text-lg)] text-text-muted max-w-[55ch]">
            {fm.descripcion}
          </p>
          <a
            href="tel:+15596134115"
            className="inline-flex items-center gap-2 mt-8 bg-primary text-on-primary px-7 py-3.5 font-medium text-[var(--text-base)] hover:opacity-90 active:scale-[0.98] transition-all"
            style={{
              transitionDuration: "var(--duration-max)",
              transitionTimingFunction: "var(--easing)",
            }}
          >
            {fm.cta_principal}
          </a>
        </div>

        {/* MDX body */}
        <div className="mx-auto max-w-[var(--content-width)]">
          <MdxRenderer source={mdx.content} />
        </div>
      </main>
      <Footer />
    </>
  );
}
