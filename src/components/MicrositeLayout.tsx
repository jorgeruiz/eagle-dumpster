import Link from "next/link";
import Image from "next/image";

interface NavItem {
  label: string;
  subpage_slug: string;
}

interface MicrositeLayoutProps {
  title: string;
  slug: string;
  navItems?: NavItem[];
  ctaPrincipal: string;
  children: React.ReactNode;
}

export function MicrositeLayout({
  title,
  slug,
  navItems,
  ctaPrincipal,
  children,
}: MicrositeLayoutProps) {
  return (
    <>
      {/* Simplified nav */}
      <nav className="border-b border-border px-[var(--gutter)] py-4">
        <div className="mx-auto max-w-[var(--content-width)] flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <Image
                src="/images/cliente/WhatsApp-Image-2025-04-01-at-22.44.10-1-e1745447157614-116x89.webp"
                alt="Eagle Dumpster logo"
                width={40}
                height={31}
                className="h-[31px] w-auto"
              />
            </Link>
            <span
              className="text-[var(--text-sm)] font-bold text-text hidden sm:inline"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {title}
            </span>
          </div>

          <div className="flex items-center gap-4">
            {navItems?.map((item) => (
              <Link
                key={item.subpage_slug}
                href={`/m/${slug}/${item.subpage_slug}`}
                className="text-[var(--text-sm)] text-text-muted hover:text-text transition-colors hidden md:inline"
                style={{
                  transitionDuration: "var(--duration-max)",
                  transitionTimingFunction: "var(--easing)",
                }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+15596134115"
              className="inline-flex items-center gap-2 bg-primary text-on-primary px-5 py-2 text-[var(--text-sm)] font-medium hover:opacity-90 active:scale-[0.98] transition-all"
              style={{
                transitionDuration: "var(--duration-max)",
                transitionTimingFunction: "var(--easing)",
              }}
            >
              {ctaPrincipal}
            </a>
          </div>
        </div>
      </nav>

      {/* Content */}
      {children}

      {/* Simplified footer */}
      <footer className="py-10 px-[var(--gutter)] border-t border-border">
        <div className="mx-auto max-w-[var(--content-width)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-xs)] text-text-muted">
            Eagle Dumpster - Fresno, Clovis, Madera, Selma, Coarsegold, Friant, CA.
            Call{" "}
            <a href="tel:+15596134115" className="text-text">
              (559) 613-4115
            </a>
          </p>
          <Link
            href="/"
            className="text-[var(--text-xs)] text-text-muted hover:text-text transition-colors"
            style={{
              transitionDuration: "var(--duration-max)",
              transitionTimingFunction: "var(--easing)",
            }}
          >
            Back to main site
          </Link>
        </div>
      </footer>
    </>
  );
}
