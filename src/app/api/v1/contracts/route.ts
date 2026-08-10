import { registryContracts } from "@/data/registry/contracts";
import { apiJson } from "@/lib/api";

export const dynamic = "force-static";

export function GET() {
  return apiJson(
    "/api/v1/contracts",
    registryContracts,
    "Contracte publice documentate din surse (vezi sources pe fiecare record). Anomalie ≠ vinovăție.",
  );
}
