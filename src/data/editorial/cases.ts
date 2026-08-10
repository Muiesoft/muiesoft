export type EditorialCaseSource = {
  title: string;
  url: string;
};

export type EditorialCase = {
  id: string;
  formatSlug: string;
  title: string;
  date: string;
  institution: string;
  url: string;
  status: string;
  summary: string;
  steps: string[];
  sources: EditorialCaseSource[];
  featured: boolean;
};

export const editorialCases: EditorialCase[] = [
  {
    id: "ancpi-eterra-ransomware-2026-07",
    formatSlug: "merge-la-mine",
    title: "e-Terra offline · proprietatea ta, pe server criptat",
    date: "2026-07-14",
    institution: "ANCPI · e-Terra (cadastru și carte funciară)",
    url: "https://eterra3.ancpi.ro",
    status: "DOCUMENTAT",
    summary:
      "Pe 14 iulie 2026, ANCPI a constatat acces neautorizat în infrastructura proprie. DNSC a confirmat un atac ransomware: o parte din infrastructura de virtualizare a fost criptată și ștearsă. e-Terra, ePay și emailul instituțional au picat; fără extrase de carte funciară, autentificările imobiliare s-au blocat național. Guvernul spune că baza centrală a evidenței proprietăților a rămas intactă și a estimat (august 2026) o redeschidere etapizată. Estimare ≠ uptime confirmat. Nu e sentință: e cartea funciară ca SPOF al pieței imobiliare.",
    steps: [
      "Citește comunicatul Guvernului din 27 iulie 2026: data constatării (14 iulie), tipul de atac (ransomware), sistemele afectate.",
      "Notează precizarea oficială că baza de date centrală cadastrală e raportată neafectată și că nu există dovezi de acces la acele date.",
      "Citește analiza Juridice despre de ce lipsa extrasului CF blochează autentificările notariale (Legea 7/1996).",
      "Citește analiza tehnică intermediară DNSC (PDF) pentru ce e confirmat tehnic versus ce rămâne în anchetă. Fără teste de intruziune.",
    ],
    sources: [
      {
        title:
          "Guvernul României · Stadiul repunerii e-Terra după incidentul de securitate cibernetică",
        url: "https://gov.ro/ro/media/comunicate/stadiul-repunerii-in-functiune-a-sistemului-informatic-e-terra-in-urma-incidentului-de-securitate-cibernetica",
      },
      {
        title:
          "Digi24 · Guvernul: baza cadastrală nu a fost afectată; fără dată fermă pentru e-Terra",
        url: "https://www.digi24.ro/digieconomic/digital/guvernul-noi-precizari-despre-atacul-de-la-ancpi-baza-cadastrala-nu-a-fost-afectata-nu-exista-o-data-pentru-repornirea-e-terra-111917",
      },
      {
        title:
          "Juridice.ro · Blocajul pieței imobiliare și implicațiile juridice ale atacului ANCPI",
        url: "https://www.juridice.ro/841344/atacul-cibernetic-asupra-ancpi-blocajul-pietei-imobiliare-si-implicatiile-juridice-rezultate-din-acesta.html",
      },
      {
        title:
          "DNSC · Analiză tehnică intermediară incident ANCPI (PDF, mirror publicat în presă)",
        url: "https://www.go4it.ro/wp-content/uploads/2026/07/DNSC-T66-v2026.07.22-Anexa-tehnica-incident-ANCPI.pdf",
      },
    ],
    featured: true,
  },
  {
    id: "ghiseul-offline-2025-02",
    formatSlug: "merge-la-mine",
    title: "Ghișeul.ro offline · „coadă la ghișeul virtual”",
    date: "2025-02-11",
    institution: "ADR / Ghișeul.ro (și alte sisteme ADR menționate în surse)",
    url: "https://www.ghiseul.ro",
    status: "DEGRADAT",
    summary:
      "În februarie 2025, plata online a taxelor prin Ghișeul.ro și alte sisteme IT gestionate de ADR au fost inaccesibile mai multe zile. Cetățenii au văzut mesaje de tip „încearcă mai târziu” · o coadă digitală. ADR a descris un efect în lanț legat de infrastructură (inclusiv DNS / restaurare), nu un atac. Fapte din surse publice. Nu e sentință, e incident de disponibilitate documentat.",
    steps: [
      "În perioada 11–14 februarie 2025, încearcă accesarea Ghișeul.ro pentru plata taxelor (documentat în presă ca indisponibil).",
      "Observă mesajele de tip „încearcă mai târziu” / imposibilitatea plății online raportate public.",
      "Citește declarațiile ADR din sursele de mai jos (cauze invocate, durată, sisteme afectate: Ghișeul.ro, SEAP, ROeID etc.).",
      "Notează data revenirii anunțate în surse (aproximativ 14 februarie 2025).",
    ],
    sources: [
      {
        title:
          "HotNews · „Coadă la plata online”; Ghișeul.ro și alte sisteme ADR indisponibile; „efect de domino”",
        url: "https://hotnews.ro/coada-la-plata-online-a-taxelor-ghiseul-ro-si-alte-sisteme-it-ale-statului-nu-pot-fi-accesate-pentru-a-doua-zi-la-rand-seful-autoritatii-pentru-digitalizare-spune-ca-de-vina-este-1900012",
      },
      {
        title:
          "HotNews · Revenire anunțată după ~4 zile; restaurare volum mare de metadate",
        url: "https://hotnews.ro/plata-online-a-taxelor-prin-ghiseul-ro-va-redeveni-functionala-vineri-sef-adr-a-ars-doar-condensatorul-unui-ups-avem-de-restaurat-un-volum-foarte-mare-de-peste-200-de-tb-de-metadate-1901922",
      },
    ],
    featured: false,
  },
  {
    id: "cloud-dedicat-417-mil",
    formatSlug: "cat-a-costat-butonul",
    title: "Cloud Dedicat: 417 milioane de lei, fără TVA",
    date: "2024-09-11",
    institution: "ADR · Cloud Privat Guvernamental",
    url: "https://www.adr.gov.ro/cpg",
    status: "PUBLIC · SURSE",
    summary:
      "Pe 11 septembrie 2024, ADR a semnat contractele pentru Cloud Dedicat (Loturile 1 și 2) cu Vodafone România: aproximativ 417.099.800 lei fără TVA, conform paginii oficiale ADR. Plafonul întregii investiții „Cloud Guvernamental” din HG 504/2023 e de ordinul miliardelor. Nu e acuzație: sunt cifre publice, puse una lângă alta. Întrebarea civică e alta: ce vede cetățeanul din acești bani și când.",
    steps: [
      "Deschide pagina oficială ADR despre Cloud-ul Privat Guvernamental (adr.gov.ro/cpg) și caută valorile contractelor.",
      "Compară cu plafonul din HG 504/2023 (anexă: 2.220.725 mii lei total investiție).",
      "Caută în presă data semnării și declarațiile oficiale (sursa Economica.net de mai jos).",
      "Urmărește în timp ce servicii publice se mută efectiv în cloud și cu ce efect vizibil.",
    ],
    sources: [
      {
        title: "ADR · Cloud Guvernamental: contract Cloud Dedicat (~417.099.800 lei fără TVA)",
        url: "https://www.adr.gov.ro/cpg",
      },
      {
        title: "Economica.net · contractul semnat (Vodafone / Microsoft)",
        url: "https://www.economica.net/contractul-de-100-mil-euro-pentru-cloud-ul-guvernamental-a-fost-semnat-ceo-vodafone-suntem-pregatiti-sa-livram-un-cloud-care-ne-va-schimba-vietile_772455.html",
      },
      {
        title: "Portal Legislativ · HG 504/2023 (plafon investiție)",
        url: "https://legislatie.just.ro/public/DetaliiDocument/270751",
      },
    ],
    featured: true,
  },
  {
    id: "licente-microsoft-2013",
    formatSlug: "cat-a-costat-butonul",
    title: "Licențele Microsoft: contractul din 2013 care costă și azi",
    date: "2013-04-30",
    institution: "ADR (succesoare MCSI)",
    url: "https://hotnews.ro/exclusiv-cartoful-fierbinte-lasat-de-burduja-la-digitalizare-statul-somat-de-unicredit-sa-plateasca-penalitati-de-milioane-de-euro-pe-licentele-microsoft-56408",
    status: "PUBLIC · SURSE · LITIGIU",
    summary:
      "Contractul de licențe Microsoft nr. 37/30.04.2013 a ajuns, potrivit investigațiilor HotNews, la executare prin cesiune de creanță către UniCredit: tranșe de 22.169.451 EUR cerute în instanță plus penalități restante raportate de ~112,9 milioane lei. Curtea de Conturi a semnalat indicii de nereguli. Un buton cumpărat în 2013 poate factura și peste un deceniu: de-asta contează arhiva contractelor, nu doar știrea zilei.",
    steps: [
      "Citește ancheta HotNews despre somația UniCredit și istoricul contractului 37/2013.",
      "Notează sumele: debitul în instanță (EUR) și penalitățile restante raportate (lei).",
      "Citește articolul despre sesizarea Curții de Conturi.",
      "Compară cu valorile din registrul nostru de contracte (/bani) și cere actualizări cu 544 dacă găsești diferențe.",
    ],
    sources: [
      {
        title: "HotNews · statul somat de UniCredit pe penalitățile licențelor Microsoft",
        url: "https://hotnews.ro/exclusiv-cartoful-fierbinte-lasat-de-burduja-la-digitalizare-statul-somat-de-unicredit-sa-plateasca-penalitati-de-milioane-de-euro-pe-licentele-microsoft-56408",
      },
      {
        title: "HotNews · cât mai are de plătit statul; sesizarea Curții de Conturi",
        url: "https://hotnews.ro/indicii-de-fapte-penale-cat-mai-are-de-platit-statul-catre-unicredit-din-datoria-pentru-licente-microsoft-in-institutii-publice-1528940",
      },
    ],
    featured: false,
  },
  {
    id: "portal-just-tls-2026",
    formatSlug: "merge-la-mine",
    title: "portal.just.ro: „merge în browser” nu înseamnă TLS configurat corect",
    date: "2026-08-10",
    institution: "Ministerul Justiției · portal.just.ro",
    url: "https://portal.just.ro",
    status: "REPRODUCTIBIL",
    summary:
      "Proba noastră HTTP zilnică nu poate valida certificatul TLS al portal.just.ro: serverul nu trimite lanțul complet de certificate (eroarea UNABLE_TO_VERIFY_LEAF_SIGNATURE în Node.js). Browserele repară singure lanțul, deci pagina „merge”; clienții stricți (biblioteci, API-uri, integrări) pică. Nu e speculație: e reproductibil de oricine, cu o comandă.",
    steps: [
      "Rulează: node -e \"fetch('https://portal.just.ro').catch(e => console.log(e.cause?.code))\" (Node 18+).",
      "Observă eroarea UNABLE_TO_VERIFY_LEAF_SIGNATURE: lanț de certificate incomplet.",
      "Verifică independent cu un tester TLS (de exemplu SSL Labs) secțiunea „chain issues”.",
      "Compară cu snapshot-ul zilnic din repo-ul nostru (probes.json) și cu /api/v1/probes.",
    ],
    sources: [
      {
        title: "Muiesoft · probes.json (snapshot zilnic, commitat public)",
        url: "https://github.com/Muiesoft/muiesoft/blob/main/src/data/registry/probes.json",
      },
      {
        title: "Qualys SSL Labs · test TLS pentru portal.just.ro (rulează-l singur)",
        url: "https://www.ssllabs.com/ssltest/analyze.html?d=portal.just.ro",
      },
    ],
    featured: false,
  },
  {
    id: "onrc-srl-ghiseu-final",
    formatSlug: "atentie-urmeaza-digitalizare",
    title: "Deschizi firmă „online”: numără pașii până la primul obstacol analog",
    date: "2026-08-07",
    institution: "ONRC · portal.onrc.ro",
    url: "https://portal.onrc.ro",
    status: "DOCUMENTAT",
    summary:
      "Procedura de înființare a unui SRL e teoretic depunabilă online prin portalul ONRC. Practic, fluxul cere cont, semnătură electronică calificată sau canale acceptate de portal, rezervare de denumire cu termen de valabilitate, PDF-uri încărcate manual și taxe plătite pe canalele acceptate. Documentăm pașii cu surse oficiale în ghidul nostru; scorul de „digitalizare reală” ți-l tragi singur.",
    steps: [
      "Deschide ghidul nostru „Deschid un SRL” (/rezolva/deschid-firma-srl) și numără pașii marcați cu autoritate ONRC.",
      "Verifică pe portal.onrc.ro ce pași se pot face fără semnătură electronică calificată.",
      "Notează unde apare primul pas care cere deplasare, hârtie sau alt canal.",
      "Trimite-ne corecturi dacă ONRC schimbă fluxul: ghidul are surse, nu păreri.",
    ],
    sources: [
      {
        title: "ONRC · portal de servicii online",
        url: "https://portal.onrc.ro",
      },
      {
        title: "ONRC · site oficial (ghiduri și formulare)",
        url: "https://www.onrc.ro",
      },
    ],
    featured: true,
  },
];

export function getCasesForFormat(formatSlug: string): EditorialCase[] {
  return editorialCases
    .filter((c) => c.formatSlug === formatSlug)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getFeaturedCase(formatSlug: string): EditorialCase | null {
  const cases = getCasesForFormat(formatSlug);
  return cases.find((c) => c.featured) ?? cases[0] ?? null;
}

export function formatsWithCases(): Set<string> {
  return new Set(editorialCases.map((c) => c.formatSlug));
}
