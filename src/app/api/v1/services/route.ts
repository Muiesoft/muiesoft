import { registryServices } from "@/data/registry/services";
import { apiJson } from "@/lib/api";
import { applyMuieScore } from "@/lib/scoring";

export const dynamic = "force-static";

export function GET() {
  return apiJson(
    "/api/v1/services",
    registryServices.map(applyMuieScore),
    "Portaluri publice reale. Muie Score e indice de frecare (mai mare = mai greu pentru cetățean). scoreKind opinion-estimate = estimare, NU măsurătoare automată. Vezi scoreNote pe fiecare record.",
  );
}
