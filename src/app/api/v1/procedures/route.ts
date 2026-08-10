import { registryProcedures } from "@/data/registry/procedures";
import { apiJson } from "@/lib/api";

export const dynamic = "force-static";

export function GET() {
  return apiJson(
    "/api/v1/procedures",
    registryProcedures,
    "Ghiduri orientative cu surse oficiale, nu consultanță juridică. Taxele și formularele se verifică pe portalurile oficiale.",
  );
}
