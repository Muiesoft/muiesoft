import { registryLaws } from "@/data/registry/laws";
import { apiJson } from "@/lib/api";

export const dynamic = "force-static";

export function GET() {
  return apiJson(
    "/api/v1/laws",
    registryLaws,
    "Explicații orientative, nu consultanță juridică. Textul oficial rămâne pe legislatie.just.ro (vezi sources).",
  );
}
