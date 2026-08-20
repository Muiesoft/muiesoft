import type { Metadata, Viewport } from "next";
import { Geist, IBM_Plex_Mono, Source_Serif_4 } from "next/font/google";
import { CommandPalette } from "@/components/layout/command-palette";
import { CookieConsent } from "@/components/layout/cookie-consent";
import { EasterEggs } from "@/components/layout/easter-eggs";
import { HeaderStatusPip } from "@/components/layout/header-status-pip";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipLink } from "@/components/layout/skip-link";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";
import "./globals.css";

const display = Source_Serif_4({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700"],
});

const body = Geist({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.seoTitle,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  alternates: {
    canonical: siteConfig.url,
    types: { "application/rss+xml": `${siteConfig.url}/feed.xml` },
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: siteConfig.seoTitle,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: siteConfig.seoTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seoTitle,
    description: siteConfig.description,
    images: ["/twitter-image"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/brand/icon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/brand/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ro"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <JsonLd />
        <SkipLink />
        <SiteHeader status={<HeaderStatusPip />} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <CommandPalette />
        <CookieConsent />
        <EasterEggs />
      </body>
    </html>
  );
}
