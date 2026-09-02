import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getMicrositeMdx, getAllSlugs } from "@/lib/mdx";
import { MdxRenderer } from "@/components/MdxRenderer";
import { MicrositeLayout } from "@/components/MicrositeLayout";
import { JsonLd } from "@/components/JsonLd";
import fs from "fs";
import path from "path";

interface MicrositeFrontmatter {
  titulo: string;
  slug: string;
  descripcion: string;
  og_image?: string;
  nav_items?: { label: string; subpage_slug: string }[];
  cta_principal: string;
  fecha_publicacion: string;
}

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "content/microsites");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => ({ slug: d.name }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const mdx = getMicrositeMdx(slug);
  if (!mdx) return {};
  const fm = mdx.frontmatter as MicrositeFrontmatter;
  return {
    title: `${fm.titulo} | Eagle Dumpster`,
    description: fm.descripcion,
    openGraph: {
      title: `${fm.titulo} | Eagle Dumpster`,
      description: fm.descripcion,
      images: fm.og_image ? [fm.og_image] : undefined,
    },
    alternates: {
      canonical: `https://eagledumpsterca.com/m/${fm.slug}`,
    },
  };
}

export default async function MicrositeIndex({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const mdx = getMicrositeMdx(slug);
  if (!mdx) notFound();

  const fm = mdx.frontmatter as MicrositeFrontmatter;

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: fm.titulo,
    description: fm.descripcion,
    url: `https://eagledumpsterca.com/m/${fm.slug}`,
  };

  return (
    <>
      <JsonLd data={schema} />
      <MicrositeLayout
        title={fm.titulo}
        slug={slug}
        navItems={fm.nav_items}
        ctaPrincipal={fm.cta_principal}
      >
        <main className="py-[var(--section-y)] px-[var(--gutter)]">
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
          </div>
          <div className="mx-auto max-w-[var(--content-width)]">
            <MdxRenderer source={mdx.content} />
          </div>
        </main>
      </MicrositeLayout>
    </>
  );
}
