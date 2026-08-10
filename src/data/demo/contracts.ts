import type { PublicContract } from "@/domain/contract";

export const demoContracts: PublicContract[] = [
  {
    id: "ctr-1",
    title: "Dezvoltare Portal Național de Exemplu",
    system: "Portalul Național de Exemplu",
    institution: "Ministerul Formularului",
    supplier: "Compania Exemplu SRL",
    valueRon: 12345678,
    signedAt: "2024-11-12",
    procurementType: "Licitație demonstrativă",
    status: "DEMO",
    sources: [
      {
        id: "src-ctr-1",
        title: "Contract demonstrativ",
        publisher: "Muiesoft",
        url: "https://muiesoft.ro/bani",
        sourceType: "demo",
      },
    ],
    demo: true,
  },
  {
    id: "ctr-2",
    title: "Mentenanță platformă PDF-uri",
    system: "Platforma PDF Central",
    institution: "Direcția PDF",
    supplier: "Hârtii Digitale SA",
    valueRon: 4567890,
    signedAt: "2025-02-01",
    procurementType: "Acord-cadru demonstrativ",
    status: "DEMO",
    sources: [
      {
        id: "src-ctr-2",
        title: "Contract demonstrativ",
        publisher: "Muiesoft",
        url: "https://muiesoft.ro/bani",
        sourceType: "demo",
      },
    ],
    demo: true,
  },
  {
    id: "ctr-3",
    title: "Integrare Excel Național",
    system: "Registrul Excel Unificat",
    institution: "Agenția Excelului",
    supplier: "SheetForce Demo SRL",
    valueRon: 8901234,
    signedAt: "2023-07-20",
    procurementType: "Negociere demonstrativă",
    status: "DEMO",
    sources: [
      {
        id: "src-ctr-3",
        title: "Contract demonstrativ",
        publisher: "Muiesoft",
        url: "https://muiesoft.ro/bani",
        sourceType: "demo",
      },
    ],
    demo: true,
  },
];
