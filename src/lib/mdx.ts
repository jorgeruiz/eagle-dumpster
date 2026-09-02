import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_ROOT = path.join(/*turbopackIgnore: true*/ process.cwd(), "content");

export function getMdxBySlug(contentDir: string, slug: string) {
  const filePath = path.join(CONTENT_ROOT, contentDir.replace("content/", ""), `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data, content };
}

export function getAllSlugs(contentDir: string): string[] {
  const dir = path.join(CONTENT_ROOT, contentDir.replace("content/", ""));
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getMicrositeMdx(slug: string, subpage?: string) {
  const base = path.join(CONTENT_ROOT, "microsites", slug);
  const file = subpage ? `${subpage}.mdx` : "index.mdx";
  const filePath = path.join(base, file);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data, content };
}

export function getMicrositeSubpages(slug: string): string[] {
  const dir = path.join(CONTENT_ROOT, "microsites", slug);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx") && f !== "index.mdx")
    .map((f) => f.replace(/\.mdx$/, ""));
}
