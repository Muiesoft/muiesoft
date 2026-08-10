import type { LegalChange, LegalDocument } from "@/domain/law";

export const demoLaws: LegalDocument[] = [
  {
    id: "law-404",
    slug: "legea-404-2026-formularul-duplicat",
    number: "404",
    year: 2026,
    title: "Legea 404/2026 privind Formularul Care Se Cere De Două Ori",
    status: "in-force",
    effectiveFrom: "2026-01-15",
    versions: [
      {
        id: "v2015",
        effectiveFrom: "2015-03-01",
        label: "Text inițial (demo)",
        summary: "Formularele se depun o singură dată.",
        plainLanguage: "Completezi o dată. Gata.",
        officialText:
          "Art. 1 · Formularul se depune o singură dată la instituția competentă.",
      },
      {
        id: "v2023",
        effectiveFrom: "2023-03-14",
        label: "Modificare 2023 (demo)",
        summary: "Termen redus, copii suplimentare.",
        plainLanguage: "Acum ai 15 zile și tot trebuie o copie în plus.",
        officialText:
          "Art. 1 · Formularul se depune, prin derogare, în dublu exemplar, în termen de 15 zile.",
      },
      {
        id: "v2026",
        effectiveFrom: "2026-01-15",
        label: "Versiune curentă (demo)",
        summary: "Formulare duplicate ca politică de stat.",
        plainLanguage:
          "Instituția A are deja informația. Instituția B ți-o cere din nou.",
        officialText:
          "Art. 1 · Prin derogare de la prevederile privind once-only, formularul se depune în dublu exemplar la fiecare instituție competentă, în termen de 15 zile.",
      },
    ],
    articles: [
      {
        id: "art-1",
        number: "1",
        title: "Depunerea formularului",
        officialText:
          "Prin derogare de la prevederile privind principiul once-only, formularul se depune în dublu exemplar la fiecare instituție competentă, în termen de 15 zile de la nașterea obligației.",
        plainLanguage:
          "Regula normală (să nu te mai întrebe ce știu deja) nu se aplică. Completezi de două ori. Ai 15 zile.",
        interpretation:
          "Interpretare instituțională demonstrativă: fiecare instituție poate solicita propriul exemplar, chiar dacă datele există deja.",
      },
      {
        id: "art-2",
        number: "2",
        title: "Copia pe hârtie",
        officialText:
          "Exemplarul secundar se depune pe suport de hârtie, însoțit de ștampilă unde este cazul.",
        plainLanguage:
          "Al doilea exemplar trebuie printat. Digitalizarea se oprește la imprimantă.",
      },
    ],
    changes: [],
    dependencies: [
      "Norme metodologice fictive 12/2026",
      "Ordinul Exemplu 7/2024",
      "Decizia Demonstrativă 3/2025",
    ],
    confidence: {
      score: 91,
      explicitText: true,
      applicableNorms: true,
      bindingDecision: true,
      unevenPractice: false,
      recentChange: true,
    },
    sources: [
      {
        id: "src-demo-law",
        title: "Document demonstrativ MuieLex",
        publisher: "Muiesoft",
        url: "https://muiesoft.ro/lex/legea-404-2026-formularul-duplicat",
        sourceType: "demo",
      },
    ],
    demo: true,
  },
];

export const demoLegalFeed: LegalChange[] = [
  {
    id: "change-1",
    kind: "modification",
    title: "Modificare demonstrativă a termenului de răspuns",
    summary: "Termenul demo scade de la 30 la 15 zile.",
    affects: "Persoane juridice fictive din demo",
    effectiveFrom: "2026-08-01",
    category: "firme",
    demo: true,
  },
  {
    id: "change-2",
    kind: "new",
    title: "Act nou demonstrativ privind formularele online",
    summary: "Introduce un PDF nou, numit „simplificare”.",
    affects: "PFA demonstrative",
    effectiveFrom: "2026-08-03",
    category: "taxe",
    demo: true,
  },
  {
    id: "change-3",
    kind: "modification",
    title: "Ajustare demonstrativă la procedura de domiciliu",
    summary: "Adaugă un pas de confirmare pe e-mail care nu confirmă nimic.",
    affects: "Persoane fizice demonstrative",
    effectiveFrom: "2026-08-04",
    category: "administratie",
    demo: true,
  },
  {
    id: "change-4",
    kind: "new",
    title: "Ordin demonstrativ privind accesibilitatea",
    summary: "Cere contrast AA, dar site-ul demo rămâne gri pe gri.",
    affects: "Instituții demonstrative",
    effectiveFrom: "2026-08-05",
    category: "administratie",
    demo: true,
  },
  {
    id: "change-5",
    kind: "modification",
    title: "Ajustare demonstrativă la concediul de odihnă",
    summary: "Text demo despre zile de concediu. Nu e normă reală.",
    affects: "Angajați demonstrativi",
    effectiveFrom: "2026-08-06",
    category: "munca",
    demo: true,
  },
  {
    id: "change-6",
    kind: "new",
    title: "Act demonstrativ privind înregistrarea domiciliului",
    summary: "Adaugă un PDF pentru mutare. Tot demo.",
    affects: "Persoane fizice demonstrative",
    effectiveFrom: "2026-08-06",
    category: "persoane",
    demo: true,
  },
  {
    id: "change-7",
    kind: "modification",
    title: "Modificare demonstrativă la intabulare",
    summary: "Un pas în plus la o procedură imobiliară fictivă.",
    affects: "Proprietari demonstrativi",
    effectiveFrom: "2026-08-07",
    category: "imobiliare",
    demo: true,
  },
];

export const demoFeedStats = {
  isDemo: true as const,
  newActs: 7,
  modifications: 12,
  affectCompanies: 3,
  worthReading: 1,
};
