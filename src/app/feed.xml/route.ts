import { siteConfig } from "@/config/site";
import { changelog } from "@/data/demo/changelog";
import { editorialCases } from "@/data/editorial/cases";

export const dynamic = "force-static";

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function item(title: string, link: string, guid: string, date: string, description: string): string {
  return `    <item>
      <title>${escapeXml(title)}</title>
      <link>${link}</link>
      <guid isPermaLink="false">${guid}</guid>
      <pubDate>${new Date(`${date}T12:00:00Z`).toUTCString()}</pubDate>
      <description>${escapeXml(description)}</description>
    </item>`;
}

export function GET() {
  const items = [
    ...changelog.map((entry) => ({
      date: entry.date,
      xml: item(
        `Muiesoft ${entry.version}`,
        `${siteConfig.url}/changelog`,
        `changelog-${entry.version}`,
        entry.date,
        [...entry.added, ...(entry.changed ?? [])].join(" · "),
      ),
    })),
    ...editorialCases.map((editorialCase) => ({
      date: editorialCase.date,
      xml: item(
        editorialCase.title,
        `${siteConfig.url}/editie/${editorialCase.formatSlug}`,
        `editorial-${editorialCase.id}`,
        editorialCase.date,
        editorialCase.summary,
      ),
    })),
  ]
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((i) => i.xml)
    .join("\n");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteConfig.name)} · changelog și ediție</title>
    <link>${siteConfig.url}</link>
    <atom:link href="${siteConfig.url}/feed.xml" rel="self" type="application/rss+xml"/>
    <description>${escapeXml(siteConfig.description)}</description>
    <language>ro</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
