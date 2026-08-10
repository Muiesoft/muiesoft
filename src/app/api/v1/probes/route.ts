import { probeData } from "@/lib/probes";
import { apiJson } from "@/lib/api";

export const dynamic = "force-static";

export function GET() {
  return apiJson("/api/v1/probes", probeData.results, probeData.note);
}
