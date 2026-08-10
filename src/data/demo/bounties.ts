import type { Bounty } from "@/domain/bounty";

export const demoBounties: Bounty[] = [
  {
    id: "b1",
    title: "Parser Monitorul Oficial → MuieLex",
    description:
      "Extrage acte din Monitorul Oficial într-un format machine-readable, cu provenance pe articol. Livrabil: PR + corpus de test.",
    goalEur: 3800,
    raisedEur: 0,
    category: "code",
    impact: "mare",
    complexity: "mare",
    demo: false,
  },
  {
    id: "b2",
    title: "Ingestie SEAP / data.gov.ro pentru /bani",
    description:
      "Pipeline reproducibil pentru contracte publice publicate pe data.gov.ro, cu checksum și sursă pe fiecare rând.",
    goalEur: 1200,
    raisedEur: 0,
    category: "data",
    impact: "mare",
    complexity: "medie",
    demo: false,
  },
  {
    id: "b3",
    title: "Benchmark UX pe toate municipiile reședință",
    description:
      "Protocol public de măsurare (timp task, pași, a11y) pe portalurile primăriilor reședință de județ.",
    goalEur: 700,
    raisedEur: 0,
    category: "ux",
    impact: "mare",
    complexity: "medie",
    demo: false,
  },
  {
    id: "b4",
    title: "Audit WCAG pe 10 portaluri din registry",
    description:
      "Raport de accesibilitate reproductibil (axe / Lighthouse + verificare manuală) pe 10 servicii din catalog.",
    goalEur: 1500,
    raisedEur: 0,
    category: "ux",
    impact: "mare",
    complexity: "medie",
    demo: false,
  },
  {
    id: "b5",
    title: "Graf de dependențe pentru Legea 544/2001",
    description:
      "Leagă articole, termene și excepții din Legea 544 într-un graf navigabil în MuieLex, cu surse pe nod.",
    goalEur: 900,
    raisedEur: 0,
    category: "legal",
    impact: "mediu",
    complexity: "mică",
    demo: false,
  },
];
