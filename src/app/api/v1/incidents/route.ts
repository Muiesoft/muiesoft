import { registryIncidents } from "@/data/registry/incidents";
import { apiJson } from "@/lib/api";

export const dynamic = "force-static";

export function GET() {
  return apiJson(
    "/api/v1/incidents",
    registryIncidents,
    "Incidente de disponibilitate documentate din surse publice. Fapt de uptime raportat, nu sentință.",
  );
}
