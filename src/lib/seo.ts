import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type BuildMetadataInput = {
  title: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
  ogImage?: string;
};

export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "",
  noIndex = false,
  ogImage = "/opengraph-image",
}: BuildMetadataInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  const image = {
    url: ogImage,
    width: 1200,
    height: 630,
    alt: title,
  };

  return {
    title,
    description,
    keywords: [...siteConfig.keywords],
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
      types: { "application/rss+xml": `${siteConfig.url}/feed.xml` },
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "ro_RO",
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}
