import { freedom544Directory } from "@/data/registry/institutions-544";
import { apiJson } from "@/lib/api";

export const dynamic = "force-static";

export function GET() {
  return apiJson(
    "/api/v1/institutions",
    freedom544Directory,
    "Director de instituții pentru cereri pe Legea 544/2001. Verifică datele de contact pe site-ul oficial înainte de trimitere.",
  );
}
