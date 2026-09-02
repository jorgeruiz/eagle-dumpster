import type { Metadata } from "next";
import { Oswald, DM_Sans, Space_Mono } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { CallConfirmProvider } from "@/components/CallConfirmDialog";
import { businessSchema } from "@/lib/schemas";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Dumpster Rental & Junk Removal in Fresno, CA | Eagle Dumpster",
  description:
    "Fast, reliable dumpster rental and junk removal in Fresno, Clovis, Madera, and surrounding areas. Same-day service available. Call (559) 613-4115 for a free quote.",
  openGraph: {
    title: "Dumpster Rental & Junk Removal in Fresno, CA | Eagle Dumpster",
    description:
      "Fast, reliable dumpster rental and junk removal in Fresno, Clovis, Madera, and surrounding areas. Call (559) 613-4115.",
    url: "https://eagledumpsterca.com",
    siteName: "Eagle Dumpster",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://eagledumpsterca.com/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Eagle Dumpster - Fast. Reliable. Honest.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://eagledumpsterca.com",
    languages: {
      en: "https://eagledumpsterca.com",
      es: "https://eagledumpsterca.com/es",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${dmSans.variable} ${spaceMono.variable} antialiased`}
    >
      <head>
        <JsonLd data={businessSchema} />
      </head>
      <body
        className="min-h-[100dvh] flex flex-col bg-bg text-text"
        style={{ fontFamily: "var(--font-body)" }}
      >
        <CallConfirmProvider>
          {children}
        </CallConfirmProvider>
      </body>
    </html>
  );
}
