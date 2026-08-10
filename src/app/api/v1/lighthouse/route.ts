import { lighthouseSnapshots } from "@/data/registry/lighthouse-snapshots";
import { apiJson } from "@/lib/api";

export const dynamic = "force-static";

export function GET() {
  return apiJson(
    "/api/v1/lighthouse",
    lighthouseSnapshots,
    "Snapshot-uri Lighthouse one-off (mobile default). Nu sunt scor Muie Index complet și nu sunt uptime.",
  );
}
