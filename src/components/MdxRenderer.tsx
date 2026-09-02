import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import Image from "next/image";

function MdxLink({
  href,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (!href) return <span {...props}>{children}</span>;
  const isExternal = href.startsWith("http");
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener" {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}

function MdxImage(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <Image
      src={(props.src as string) || ""}
      alt={props.alt || ""}
      width={800}
      height={450}
      className="rounded-[var(--radius)] w-full h-auto my-6"
      sizes="(max-width: 768px) 100vw, 800px"
    />
  );
}

const components = {
  a: MdxLink,
  img: MdxImage,
};

export function MdxRenderer({ source }: { source: string }) {
  return (
    <div className="prose-eagle mx-auto max-w-[65ch] text-text">
      <MDXRemote
        source={source}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        }}
      />
    </div>
  );
}
