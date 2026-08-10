import { registryServices } from "@/data/registry/services";
import { apiJson } from "@/lib/api";

export const dynamic = "force-static";

export function GET() {
  return apiJson(
    "/api/v1/services",
    registryServices,
    "Portaluri publice reale. scoreKind opinion-estimate = estimare de sentiment, NU măsurătoare Muie Index și NU uptime real. Vezi scoreNote pe fiecare record.",
  );
}
