import { changelog } from "@/data/demo/changelog";
import { apiJson } from "@/lib/api";

export const dynamic = "force-static";

export function GET() {
  return apiJson(
    "/api/v1/changes",
    changelog,
    "Changelog-ul Muiesoft. Feed-ul de modificări legislative vine odată cu ingestia MuieLex (Phase 2).",
  );
}
