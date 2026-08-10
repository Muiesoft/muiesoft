import type { PublicContract } from "@/domain/contract";

export const registryContracts: PublicContract[] = [
  {
    id: "ctr-adr-cloud-dedicat-vodafone-2024",
    title:
      "Cloud Dedicat (CPG): soluții și produse TIC + componentă SaaS",
    system: "Cloud Privat Guvernamental · Cloud Dedicat",
    institution: "Autoritatea pentru Digitalizarea României (ADR)",
    supplier: "Vodafone România",
    valueRon: 417_099_800,
    signedAt: "2024-09-11",
    procurementType: "Contract(e) de implementare (Lot 1 + Lot 2)",
    status: "PUBLIC · SURSE",
    sources: [
      {
        id: "src-adr-cpg",
        title:
          "ADR: Cloud Guvernamental · contract Cloud Dedicat (~417.099.800 lei fără TVA)",
        publisher: "ADR",
        url: "https://www.adr.gov.ro/cpg",
        retrievedAt: "2026-08-06",
        sourceType: "official",
      },
      {
        id: "src-economica-cloud",
        title:
          "Economica.net: contract Cloud Guvernamental semnat (Vodafone / Microsoft)",
        publisher: "Economica.net",
        url: "https://www.economica.net/contractul-de-100-mil-euro-pentru-cloud-ul-guvernamental-a-fost-semnat-ceo-vodafone-suntem-pregatiti-sa-livram-un-cloud-care-ne-va-schimba-vietile_772455.html",
        retrievedAt: "2026-08-06",
        sourceType: "secondary",
      },
    ],
    demo: false,
  },
  {
    id: "ctr-adr-pduro-2024",
    title: "PDURo · platformă de date pentru Cloudul Guvernamental",
    system: "Cloud Privat Guvernamental · PDURo",
    institution: "Autoritatea pentru Digitalizarea României (ADR)",
    supplier: "Conform contract ADR (implementare PDURo)",
    valueRon: 96_992_000,
    signedAt: "2024-03-19",
    procurementType: "Contract de implementare",
    status: "PUBLIC · SURSE",
    sources: [
      {
        id: "src-adr-pduro",
        title:
          "ADR: contract implementare PDURo · 96.992.000 lei fără TVA",
        publisher: "ADR",
        url: "https://www.adr.gov.ro/cpg",
        retrievedAt: "2026-08-06",
        sourceType: "official",
      },
    ],
    demo: false,
  },
  {
    id: "ctr-adr-cyber-eval-cpg",
    title:
      "Acord-cadru: evaluare de securitate cibernetică pentru migrarea aplicațiilor în CPG",
    system: "Cloud Privat Guvernamental · evaluare securitate",
    institution: "Autoritatea pentru Digitalizarea României (ADR)",
    supplier:
      "10 operatori (FORT, Zerotak, Safebyte, Sysblue, CERTSIGN, KPMG Advisory, Dataeye, Safetech, Omega Trust, IT Embassy)",
    valueRon: 110_740_000,
    signedAt: "2025-07-27",
    procurementType: "Acord-cadru (4 ani, PNRR)",
    status: "PUBLIC · SURSE",
    sources: [
      {
        id: "src-profit-cyber",
        title:
          "Profit.ro: ADR acord-cadru 110,74 mil. lei fără TVA (estimat 123,71 mil.)",
        publisher: "Profit.ro",
        url: "https://www.profit.ro/povesti-cu-profit/it-c/adr-a-semnat-un-acord-cadru-cu-10-companii-pentru-servicii-de-evaluare-cibernetica-necesare-migrarii-aplicatiilor-guvernamentale-in-platforma-de-cloud-guvernamental-22593301",
        retrievedAt: "2026-08-06",
        sourceType: "secondary",
      },
      {
        id: "src-sicap-cn1083774",
        title:
          "Anunț CN1083774 · evaluare securitate cibernetică CPG (valoare estimată max. 123.707.500 lei fără TVA)",
        publisher: "SICAP / SEAP",
        url: "https://sicap.pro/anunturi/CN1083774",
        retrievedAt: "2026-08-06",
        sourceType: "open-data",
      },
    ],
    demo: false,
  },
  {
    id: "ctr-ms-licenses-37-2013",
    title:
      "Licențe Microsoft · contract 37/30.04.2013 · restanță penalități raportată (~112,9 mil. lei) + debit 22.169.451 EUR în instanță",
    system: "Licențe software Microsoft (instituții publice)",
    institution: "ADR (succesoare MCSI)",
    supplier: "Cesiune creanță către UniCredit (conform surse de presă)",
    valueRon: 112_900_000,
    signedAt: "2013-04-30",
    procurementType: "Contract de furnizare · litigiu / executare",
    status: "PUBLIC · SURSE · LITIGIU",
    sources: [
      {
        id: "src-hotnews-ms",
        title:
          "HotNews: 22.169.451 EUR tranșe + restanță ~112,9 mil. lei (raportare 2022/2023)",
        publisher: "HotNews.ro",
        url: "https://hotnews.ro/exclusiv-cartoful-fierbinte-lasat-de-burduja-la-digitalizare-statul-somat-de-unicredit-sa-plateasca-penalitati-de-milioane-de-euro-pe-licentele-microsoft-56408",
        retrievedAt: "2026-08-06",
        sourceType: "secondary",
      },
      {
        id: "src-hotnews-ms-2",
        title:
          "HotNews: ADR comunică penalități rămase; Curtea de Conturi sesizează",
        publisher: "HotNews.ro",
        url: "https://hotnews.ro/indicii-de-fapte-penale-cat-mai-are-de-platit-statul-catre-unicredit-din-datoria-pentru-licente-microsoft-in-institutii-publice-1528940",
        retrievedAt: "2026-08-06",
        sourceType: "secondary",
      },
    ],
    demo: false,
  },
  {
    id: "ctr-hg504-cloud-envelope",
    title:
      "HG 504/2023 · plafon investiție „Implementarea infrastructurii de Cloud Guvernamental”",
    system: "Cloud Guvernamental (PNRR C7) · plafon proiect",
    institution: "ADR + STS + SRI (conform HG)",
    supplier: "n/a (notă de fundamentare / plafon de investiție)",
    valueRon: 2_220_725_000,
    signedAt: "2023-05-24",
    procurementType: "Hotărâre de Guvern · plafon cheltuieli",
    status: "PUBLIC · SURSE · PLAFON",
    sources: [
      {
        id: "src-hg504",
        title:
          "legislatie.just.ro · HG 504/24.05.2023 (anexă: 2.220.725 mii lei total)",
        publisher: "Portal Legislativ",
        url: "https://legislatie.just.ro/public/DetaliiDocument/270751",
        retrievedAt: "2026-08-06",
        sourceType: "official",
      },
      {
        id: "src-sgg-hg504",
        title: "SGG · anexă HG notă de fundamentare Cloud Guvernamental",
        publisher: "SGG",
        url: "https://sgg.gov.ro/1/wp-content/uploads/2023/05/HGANEXA-6.pdf",
        retrievedAt: "2026-08-06",
        sourceType: "official",
      },
    ],
    demo: false,
  },
];
