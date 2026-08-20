import { siteConfig } from "@/config/site";

export function JsonLdBlock({ data }: { data: object }) {
  const payload = {
    "@context": "https://schema.org",
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(payload).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function datasetJsonLd(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@type": "Dataset",
    name: input.name,
    description: input.description,
    url: `${siteConfig.url}${input.path}`,
    isAccessibleForFree: true,
    license: "https://www.gnu.org/licenses/agpl-3.0.html",
    creator: { "@type": "Organization", name: siteConfig.name },
  };
}
