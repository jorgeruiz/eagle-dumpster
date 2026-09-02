import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getMicrositeMdx, getMicrositeSubpages } from "@/lib/mdx";
import { MdxRenderer } from "@/components/MdxRenderer";
import { MicrositeLayout } from "@/components/MicrositeLayout";
import { JsonLd } from "@/components/JsonLd";
import fs from "fs";
import path from "path";

interface MicrositeFrontmatter {
  titulo: string;
  slug: string;
  descripcion: string;
  nav_items?: { label: string; subpage_slug: string }[];
  cta_principal: string;
}

interface SubpageFrontmatter {
  titulo: string;
  slug: string;
  descripcion: string;
}

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "content/microsites");
  if (!fs.existsSync(dir)) return [];
  const params: { slug: string; subpage: string }[] = [];
  const sites = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory());
  for (const site of sites) {
    const subpages = getMicrositeSubpages(site.name);
    for (const sub of subpages) {
      params.push({ slug: site.name, subpage: sub });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; subpage: string }>;
}): Promise<Metadata> {
  const { slug, subpage } = await params;
  const indexMdx = getMicrositeMdx(slug);
  const subMdx = getMicrositeMdx(slug, subpage);
  if (!subMdx || !indexMdx) return {};
  const indexFm = indexMdx.frontmatter as MicrositeFrontmatter;
  const subFm = subMdx.frontmatter as SubpageFrontmatter;
  return {
    title: `${subFm.titulo} | ${indexFm.titulo} | Eagle Dumpster`,
    description: subFm.descripcion,
    alternates: {
      canonical: `https://eagledumpsterca.com/m/${slug}/${subpage}`,
    },
  };
}

export default async function MicrositeSubpage({
  params,
}: {
  params: Promise<{ slug: string; subpage: string }>;
}) {
  const { slug, subpage } = await params;
  const indexMdx = getMicrositeMdx(slug);
  const subMdx = getMicrositeMdx(slug, subpage);
  if (!indexMdx || !subMdx) notFound();

  const indexFm = indexMdx.frontmatter as MicrositeFrontmatter;
  const subFm = subMdx.frontmatter as SubpageFrontmatter;

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: subFm.titulo,
    description: subFm.descripcion,
    url: `https://eagledumpsterca.com/m/${slug}/${subpage}`,
  };

  return (
    <>
      <JsonLd data={schema} />
      <MicrositeLayout
        title={indexFm.titulo}
        slug={slug}
        navItems={indexFm.nav_items}
        ctaPrincipal={indexFm.cta_principal}
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
              {subFm.titulo}
            </h1>
            <p className="mt-4 text-[var(--text-lg)] text-text-muted max-w-[55ch]">
              {subFm.descripcion}
            </p>
          </div>
          <div className="mx-auto max-w-[var(--content-width)]">
            <MdxRenderer source={subMdx.content} />
          </div>
        </main>
      </MicrositeLayout>
    </>
  );
}
