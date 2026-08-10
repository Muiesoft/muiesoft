export type ChangelogEntry = {
  version: string;
  date: string;
  added: string[];
  removed: string[];
  changed?: string[];
};

export const changelog: ChangelogEntry[] = [
  {
    version: "v0.4.0",
    date: "2026-08-10",
    added: [
      "România.API v1: 9 endpoint-uri read-only care servesc registry-ul ca JSON (/api/v1)",
      "Probă HTTP zilnică din GitHub Actions, cu verdict per portal și istoric commitat public",
      "Hartă SVG interactivă a României pe /harta, cu județe colorate din registry",
      "Registry extins: 8 → 32 portaluri (naționale + primării), snapshot-uri Lighthouse pe 31",
      "MuieLex: 6 legi reale explicate pe românește, cu surse oficiale",
      "Ediție: 5 cazuri documentate cu surse · director 544 extins la 47 instituții",
      "OG scorecard per portal + feed RSS pe /feed.xml",
    ],
    removed: [],
    changed: [
      "România.API: Planned → Preview",
      "/status și contoarele de pe homepage citesc date reale de probă",
      "Incidente: +DDoS aprilie 2022, +lanț TLS incomplet portal.just.ro (măsurat de noi)",
    ],
  },
  {
    version: "v0.3.0",
    date: "2026-08-07",
    added: [
      "Rezolvă: 5 proceduri noi cu surse (SPV, PFA, certificat fiscal, CNPP, data.gov.ro) + browse",
      "544: print/PDF, download .txt, arhivă locală în browser, directory extins",
      "Muie Index: snapshot-uri Lighthouse one-off pe Ghișeul, ANAF, data.gov.ro",
    ],
    removed: [],
    changed: [
      "Metodologie Muie Index: trei straturi (estimare / Lighthouse / măsurătoare viitoare)",
      "544: arhiva locală user-owned în loc de placeholder gol",
    ],
  },
  {
    version: "v0.2.0",
    date: "2026-08-06",
    added: [
      "registry Muie Index / Harta (portaluri reale, scoruri etichetate)",
      "incident Ghișeul.ro februarie 2025 cu surse publice",
      "Bani: contracte și indicatori cu provenance",
      "Ediție: format editorial pe incident Ghișeul",
      "544: directory instituții pentru cereri",
      "Ghișoid chatbot + login formă credibilă (fără sesiuni)",
    ],
    removed: [],
    changed: [
      "Money pe Status: Planned → Preview",
      "copy onest pe MuieLex / Muie Index (fără promisiuni live false)",
    ],
  },
  {
    version: "v0.1.0",
    date: "2026-08-06",
    added: [
      "manifest",
      "MuieLex preview",
      "MuieIndex preview",
      "awards",
      "command palette",
      "detector de digitalizare",
      "corporate bullshit translator",
    ],
    removed: ["respect pentru PDF-uri"],
    changed: ["România, conceptual, fork-uită"],
  },
];
