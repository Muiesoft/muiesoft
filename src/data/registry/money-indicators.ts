import type { SourceReference } from "@/domain/source";

export type MoneyIndicator = {
  id: string;
  label: string;
  value: string;
  note: string;
  sources: SourceReference[];
};

export const moneyIndicators: MoneyIndicator[] = [
  {
    id: "single-bidder-ro-2024",
    label: "single bidder (RO, 2024)",
    value: "44%",
    note: "Pondere contracte cu un singur ofertant (TED / Scoreboard). Prag UE „nesatisfăcător”: peste 20%. Anomalie de competiție, nu sentință.",
    sources: [
      {
        id: "src-sms-ro-2024",
        title: "Single Market Scoreboard · România · Access to public procurement (2024)",
        publisher: "European Commission",
        url: "https://single-market-scoreboard.ec.europa.eu/countries/romania_en",
        retrievedAt: "2026-08-06",
        sourceType: "official",
      },
    ],
  },
  {
    id: "single-bidder-threshold",
    label: "prag UE single bidder",
    value: ">20%",
    note: "Peste 20% e marcat nesatisfăcător pe Scoreboard. Sub 10% e zona verde.",
    sources: [
      {
        id: "src-sms-pp",
        title: "Single Market Scoreboard · Access to public procurement (metodologie)",
        publisher: "European Commission",
        url: "https://single-market-scoreboard.ec.europa.eu/business-framework-conditions/public-procurement_en",
        retrievedAt: "2026-08-06",
        sourceType: "official",
      },
    ],
  },
  {
    id: "seap-open-data",
    label: "SEAP open data",
    value: "data.gov.ro",
    note: "Seturi trimestriale de contracte / achiziții directe publicate de ANAP pe portalul național de date deschise.",
    sources: [
      {
        id: "src-datagov-2025",
        title: "data.gov.ro · Achiziții publice 2025",
        publisher: "data.gov.ro",
        url: "https://data.gov.ro/dataset/achizitii-publice-2025",
        retrievedAt: "2026-08-06",
        sourceType: "open-data",
      },
      {
        id: "src-datagov-2024",
        title: "data.gov.ro · Achiziții publice 2024",
        publisher: "data.gov.ro",
        url: "https://data.gov.ro/dataset/achizitii-publice-2024",
        retrievedAt: "2026-08-06",
        sourceType: "open-data",
      },
    ],
  },
  {
    id: "anap-efficiency-2024",
    label: "ANAP eficiență 2024",
    value: "raport",
    note: "Analiza oficială a indicatorilor de eficiență pentru proceduri finalizate cu contract în 2024.",
    sources: [
      {
        id: "src-anap-2024",
        title:
          "ANAP · Analiza indicatorilor de eficiență · contracte 2024",
        publisher: "ANAP",
        url: "https://anap.gov.ro/ro/analiza-indicatori-de-monitorizare-a-eficientei-procedurilor-de-achizitii-publice-finalizate-prin-incheierea-de-contracte-in-anul-2024/",
        retrievedAt: "2026-08-06",
        sourceType: "official",
      },
    ],
  },
];

export const moneyContextLinks = [
  {
    label: "e-licitatie.ro (SEAP)",
    url: "https://www.e-licitatie.ro",
  },
  {
    label: "ADR · Cloud Guvernamental",
    url: "https://www.adr.gov.ro/cpg",
  },
  {
    label: "ANAP · rapoarte",
    url: "https://anap.gov.ro/ro/category/analize-si-rapoarte-statistice/",
  },
] as const;
