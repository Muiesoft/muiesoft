import { apiJson } from "@/lib/api";

export const dynamic = "force-static";

const endpoints = [
  "/api/v1/laws",
  "/api/v1/services",
  "/api/v1/institutions",
  "/api/v1/contracts",
  "/api/v1/procedures",
  "/api/v1/incidents",
  "/api/v1/probes",
  "/api/v1/lighthouse",
  "/api/v1/changes",
];

export function GET() {
  return apiJson(
    "/api/v1",
    endpoints,
    "romania.api preview: endpoint-uri read-only, versionate, servite din registry-ul Muiesoft. Fără auth, fără SLA încă.",
  );
}
