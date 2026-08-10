import { siteConfig } from "@/config/site";

const defaultNote =
  "Date din registry-ul Muiesoft, cu provenance în câmpul sources. Înregistrările cu demo:true sunt demonstrative, nu reale. generatedAt = momentul build-ului.";

export function apiJson(endpoint: string, data: readonly unknown[], note?: string) {
  return Response.json(
    {
      meta: {
        endpoint,
        count: data.length,
        generatedAt: new Date().toISOString(),
        license: "AGPL-3.0",
        docs: `${siteConfig.repos.site}/blob/main/docs/api/openapi.yaml`,
        note: note ?? defaultNote,
      },
      data,
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, max-age=3600",
      },
    },
  );
}
