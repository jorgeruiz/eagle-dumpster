import type { Metadata } from "next";
import Script from "next/script";
import { Oswald, DM_Sans, Space_Mono } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { CallConfirmProvider } from "@/components/CallConfirmDialog";
import { businessSchema } from "@/lib/schemas";
import "./globals.css";

const GTM_ID = "GTM-T78SW2X2";

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
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        <JsonLd data={businessSchema} />
      </head>
      <body
        className="min-h-[100dvh] flex flex-col bg-bg text-text"
        style={{ fontFamily: "var(--font-body)" }}
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <CallConfirmProvider>
          {children}
        </CallConfirmProvider>
      </body>
    </html>
  );
}
