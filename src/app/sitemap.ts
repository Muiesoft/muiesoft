import type { MetadataRoute } from "next";
import { editorialFormats } from "@/config/editorial";
import { siteConfig } from "@/config/site";
import { registryIncidents } from "@/data/registry/incidents";
import { registryLaws } from "@/data/registry/laws";
import { registryServices } from "@/data/registry/services";

const modules = [
  "/muie-index",
  "/harta",
  "/rezolva",
  "/lex",
  "/bani",
  "/544",
  "/contribuie",
  "/manifest",
  "/principii",
];

const secondary = [
  "/bounties",
  "/premii",
  "/competenta",
  "/transparenta",
  "/status",
  "/changelog",
  "/privacy",
  "/editie",
  "/api",
  ...editorialFormats.map((f) => `/editie/${f.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const home: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const moduleEntries: MetadataRoute.Sitemap = modules.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const detailEntries: MetadataRoute.Sitemap = [
    ...registryServices.map((service) => ({
      url: `${siteConfig.url}/muie-index/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...registryLaws.map((law) => ({
      url: `${siteConfig.url}/lex/${law.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...registryIncidents
      .filter((incident) => !incident.demo)
      .map((incident) => ({
        url: `${siteConfig.url}/muie-index/incidente/${incident.id}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })),
  ];

  const secondaryEntries: MetadataRoute.Sitemap = secondary.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: path === "/api" ? ("yearly" as const) : ("monthly" as const),
    priority: path === "/api" ? 0.3 : 0.5,
  }));

  return [...home, ...moduleEntries, ...detailEntries, ...secondaryEntries];
}
