export type ModulePlaceholderKey =
  | "muieIndex.institutions"
  | "muieIndex.incidents"
  | "muieIndex.history"
  | "harta.live"
  | "rezolva.sourced"
  | "muieLex.pipeline"
  | "muieLex.ai"
  | "muieLex.jurisprudence"
  | "money.ingestion"
  | "freedom544.automation"
  | "api.public"
  | "bounties.funding"
  | "transparenta.ledger"
  | "competenta.nominations"
  | "northStar.metric"
  | "editie.feed"
  | "auth.accounts";

export type ModulePlaceholderContent = {
  id: string;
  title: string;
  problem: string;
  how: string;
  demoSteps: string[];
  architecture: string[];
  missing: string;
  roadmap: string[];
  help: string;
  helpHref?: string;
  comingSoon?: {
    willDo: string;
    missing: string;
    help?: string;
  };
};

export const modulePlaceholders: Record<
  ModulePlaceholderKey,
  ModulePlaceholderContent
> = {
  "muieIndex.institutions": {
    id: "modul-rezervat-institutii",
    title: "Profiluri instituții",
    problem:
      "Vrei să vezi un serviciu public digital pe toate dimensiunile, nu doar un scor total.",
    how: "Registry de servicii + probe + page publică per instituție, cu surse.",
    demoSteps: [
      "Listă locală de portaluri din registry",
      "Card de scor pe dimensiuni",
      "Link către profilul public",
    ],
    architecture: [
      "InstitutionRepository",
      "service registry",
      "probe results store",
      "public institution pages",
    ],
    missing: "Ingestie reală, monitorizare uptime, provenance pe fiecare metrică.",
    roadmap: [
      "Phase 1: service registry",
      "Phase 1: automated uptime",
      "Phase 1: institution profiles",
    ],
    help: "Contribuie la registry-ul de servicii și la specificația de probe.",
  },
  "muieIndex.incidents": {
    id: "modul-rezervat-incidente",
    title: "Incidente reproductibile",
    problem:
      "„La mine merge” nu e status. Avem nevoie de incidente pe care le poți reproduce.",
    how: "Raportare structurată: pași, browser, timestamp, URL, captură, status.",
    demoSteps: [
      "Listă de incidente documentate din surse publice",
      "Status MERGE CA PULA / DEGRADAT",
      "Câmpuri pentru pași, URL și captură",
    ],
    architecture: [
      "incident schema",
      "public status feed",
      "link către Muie Index institution",
    ],
    missing: "Colectare verificată, stocare, moderare, fără date personale inutile.",
    roadmap: [
      "Phase 1: incident schema",
      "Phase 1: public incident pages",
    ],
    help: "Documentează un incident reproductibil, fără să testezi sisteme fără drept.",
  },
  "muieIndex.history": {
    id: "modul-rezervat-istoric",
    title: "Istoric scoruri",
    problem: "Un scor fără istoric e o poză. Vrem trend, nu slogan.",
    how: "Serii temporale pe dimensiuni, cu sursa fiecărei măsurători.",
    demoSteps: [
      "Probă HTTP zilnică pe fiecare portal (live, mai sus)",
      "Snapshot-uri Lighthouse săptămânale în repo",
      "Istoric commitat public, nu în baze de date ascunse",
    ],
    architecture: [
      "time-series store",
      "measurement runs",
      "SourceReference pe run",
    ],
    missing: "Serii lungi (probele abia au început), Core Web Vitals, a11y manual.",
    roadmap: [
      "Phase 1: Lighthouse + a11y runs",
      "Phase 1: history charts",
    ],
    help: "Ajută la specificația de measurement runs.",
  },
  "harta.live": {
    id: "modul-harta-live",
    title: "Harta live",
    problem:
      "Digitalizarea României trebuie văzută pe județe și instituții, nu în PowerPoint.",
    how: "Matrice/geo feed alimentată din Muie Index + status agregat.",
    demoSteps: [
      "Filtre locale pe registry",
      "Carduri pe portaluri din registry",
      "Legendă de status",
    ],
    architecture: [
      "InstitutionRepository",
      "county aggregation",
      "status legend",
      "optional map tiles later",
    ],
    missing: "Date live, probe geografice, surse pe fiecare celulă.",
    roadmap: [
      "Phase 1: institution registry",
      "Phase 1: status aggregation",
    ],
    help: "Completează registry-ul pe județe cu surse publice.",
    comingSoon: {
      willDo: "Filtre și agregări pe date măsurate real.",
      missing: "Probe live și provenance pe județ/instituție.",
    },
  },
  "rezolva.sourced": {
    id: "modul-rezolva-sourced",
    title: "Proceduri cu surse",
    problem:
      "Workflow-ul administrativ există în capul cuiva. Trebuie să existe în date.",
    how: "Pași machine-readable cu surse oficiale; legături MuieLex pe termen lung.",
    demoSteps: [
      "Browse + search pe proceduri din registry",
      "Pași orientativi cu surse oficiale",
      "Sidebar documente / cost / surse",
    ],
    architecture: [
      "ProcedureRepository",
      "link către LegalDocument",
      "once-only checks",
      "source citations pe pas",
    ],
    missing:
      "Mai multe proceduri, citări pe pas, sync automat când se schimbă legea.",
    roadmap: [
      "Phase 6: machine-readable administration",
      "Phase 6: Rezolvă-mi dracu problema",
    ],
    help: "Documentează o procedură cu surse oficiale, nu din auzite.",
  },
  "muieLex.pipeline": {
    id: "modul-muielex-pipeline",
    title: "Pipeline MuieLex",
    problem:
      "Legea fără surse e opinie. Avem nevoie de ingestie, versiuni și graph.",
    how: "Surse oficiale → raw immutable → hash/diff → graph → search → explicații.",
    demoSteps: [
      "Diagramă pipeline rezervată",
      "Search local pe documente ilustrative",
      "Feed filtrabil pe categorii",
    ],
    architecture: [
      "Portal Legislativ / MO / CCR / ÎCCJ metadata",
      "scheduled ingestion",
      "immutable raw store",
      "hash + diff",
      "Postgres legal graph",
      "search index",
      "citation verifier",
    ],
    missing: "Ingestie reală, stocare, index, fără AI ca sursă de adevăr.",
    roadmap: [
      "Phase 2: legal source ingestion",
      "Phase 2: versions + search + citations + diff",
      "Phase 3: RAG + confidence gate",
    ],
    help: "Specifică surse, schema de versiuni sau parseri open-source.",
  },
  "muieLex.ai": {
    id: "modul-rezervat-avocat",
    title: "Avocatul Pulii",
    problem:
      "Oamenii întreabă legea pe românește. Răspunsul trebuie să citeze, nu să inventeze.",
    how: "Retrieval din surse → confidence gate → răspuns sau refuz.",
    demoSteps: [
      "Chat UI local",
      "Răspuns scriptat",
      "Mesaj de refuz când evidența e insuficientă",
    ],
    architecture: [
      "RAG over legal graph",
      "citation verifier",
      "confidence threshold",
      "refuseToGuess()",
    ],
    missing: "Corpus real, verifier, buget inferență, review comunitar.",
    roadmap: [
      "Phase 3: RAG",
      "Phase 3: evidence verification",
      "Phase 3: community review",
    ],
    help: "Crowdfunding pentru infrastructură; întrebările rămân gratuite.",
    comingSoon: {
      willDo: "Răspunsuri generate doar după retrieval din surse verificabile.",
      missing: "Corpus, RAG, confidence gate, buget AI.",
      help: "Susține infrastructura sau contribuie la verifier.",
    },
  },
  "muieLex.jurisprudence": {
    id: "modul-rezervat-jurisprudenta",
    title: "Jurisprudență",
    problem: "Textul legii e o parte. Practica instanțelor e alta.",
    how: "Decizii clar identificate, separate de text oficial și de AI.",
    demoSteps: [
      "Carduri ilustrative",
      "Separare vizuală față de text oficial",
      "Link rezervat către sursă",
    ],
    architecture: [
      "court source adapters",
      "decision nodes in legal graph",
      "citation links",
    ],
    missing: "Ingestie jurisprudență, identificatori stabili, fără inventat.",
    roadmap: [
      "Phase 2: court sources",
      "Phase 2: graph links",
    ],
    help: "Propune surse publice de decizii și schema de citare.",
  },
  "money.ingestion": {
    id: "modul-money-ingestion",
    title: "Procurement + anomalii",
    problem: "Contractele publice sunt kilometri de PDF. Oamenii merită date.",
    how: "Ingestie open data → search → graph → flag-uri de anomalie, nu sentințe.",
    demoSteps: [
      "Search pe contracte ilustrative",
      "Metrici rezervate (single bidder, concentrare…)",
      "Graph stub instituție → contract → firmă",
    ],
    architecture: [
      "MoneyRepository",
      "procurement ingest",
      "graph edges",
      "anomaly detectors",
      "SourceReference pe fiecare cifră",
    ],
    missing: "Date reale, parsers, hosting, fără acuzații nefundamentate.",
    roadmap: [
      "Phase 4: public procurement ingestion",
      "Phase 4: search + graphs + anomalies",
    ],
    help: "Construiește parseri sau documentează surse open data.",
    comingSoon: {
      willDo: "Detecta anomalii pe date publice, cu surse.",
      missing: "Ingestie reală și reguli de anomalie documentate.",
    },
  },
  "freedom544.automation": {
    id: "modul-544-automation",
    title: "544 automation",
    problem:
      "Ai dreptul să întrebi. Generarea, urmărirea și arhiva nu trebuie să fie ritual.",
    how: "Wizard → identificare instituție → generare → export local → (ulterior) trimitere → arhivă publică.",
    demoSteps: [
      "Wizard local + clipboard + print + .txt",
      "Directory instituții publice (static)",
      "Arhivă locală în browser (user-owned)",
    ],
    architecture: [
      "institution directory",
      "request templates",
      "optional send adapters",
      "deadline tracker",
      "local archive + machine-readable public archive",
    ],
    missing: "Trimitere reală, tracking server-side, arhivă publică opțională.",
    roadmap: [
      "Phase 5: generation",
      "Phase 5: tracking",
      "Phase 5: archive",
    ],
    help: "Specifică template-uri și schema arhivei, fără a spama instituții.",
    comingSoon: {
      willDo: "Trimitere și urmărire automată a cererilor 544, cu consimțământ.",
      missing: "Canale de trimitere, tracking, arhivă publică.",
      help: "Contribuie la template-uri și la schema de arhivă.",
    },
  },
  "api.public": {
    id: "modul-api-public",
    title: "romania.api · versiunea completă",
    problem:
      "Preview-ul read-only e live. Versiunea completă are nevoie de subdomeniu, SLA și date măsurate continuu.",
    how: "Contracte stabile, provenance, versioning, rate limits · apoi launch pe api.muiesoft.ro.",
    demoSteps: [
      "Endpoint-uri /api/v1/* live pe site",
      "Envelope { meta, data } cu provenance",
      "CORS deschis pentru read-only",
    ],
    architecture: [
      "/laws /changes /institutions /services /contracts /procedures",
      "JSON schemas",
      "SourceReference pe payload",
      "auth + rate limits later",
    ],
    missing: "Subdomeniu dedicat, SLA, rate limits, query params, date măsurate continuu.",
    roadmap: [
      "Phase 7: public APIs",
      "Phase 7: developer ecosystem",
    ],
    help: "Review pe contracte OpenAPI / Zod schemas.",
    comingSoon: {
      willDo: "API dedicat cu SLA, filtre și date măsurate continuu.",
      missing: "Subdomeniu, rate limits, monitorizare.",
    },
  },
  "bounties.funding": {
    id: "modul-bounties-funding",
    title: "Crowdfunding bounties",
    problem: "Nu comenta. Finanțează un rezultat concret.",
    how: "Bounty public → pledges → escrow → payout pe deliverable verificat.",
    demoSteps: [
      "Listă de bounties cu obiectiv, fără progres inventat",
      "€0 strânși pe toate țintele",
      "CTA închis: anunț, nu plată",
    ],
    architecture: [
      "bounty ledger",
      "pledge intents",
      "escrow / payout rules",
      "public transparency link",
    ],
    missing: "Procesare plăți, entitate legală, escrow real.",
    roadmap: [
      "Crowdfunding: fără procesare de bani momentan",
      "Legătură cu /transparenta",
    ],
    help: "Specifică reguli de payout și criterii de acceptare.",
    comingSoon: {
      willDo: "Accepta pledges și plăti deliverable-uri verificate.",
      missing: "Procesare bani, escrow, guvernanță.",
      help: "Ajută la modelul de crowdfunding. Nu inventăm procente de finanțare.",
    },
  },
  "transparenta.ledger": {
    id: "modul-transparenta-ledger",
    title: "Ledger Muiesoft",
    problem:
      "Dacă cerem statului transparență, n-avem voie să operăm dintr-un Excel secret.",
    how: "Fiecare leu intrat/ieșit → document primar → page publică.",
    demoSteps: [
      "Dashboard €0",
      "Stare ledger fără tranzacții încă",
      "Secțiuni vendors / COI",
    ],
    architecture: [
      "public ledger",
      "document attachments",
      "vendor list",
      "conflict of interest statements",
    ],
    missing: "Finanțare reală de raportat și documente primare.",
    roadmap: [
      "Ledger când există bani",
      "Export public",
    ],
    help: "Propune schema ledger-ului înainte să apară primii bani.",
  },
  "competenta.nominations": {
    id: "modul-competenta-nominations",
    title: "Nominalizări competență",
    problem: "Când statul face ceva bine, trebuie spus · cu standarde, nu preferințe.",
    how: "Nominalizare → criterii → surse → publicare sau respingere motivată.",
    demoSteps: [
      "Criterii UX / uptime / a11y…",
      "Exemplu fictiv",
      "Flow de nominalizare rezervat",
    ],
    architecture: [
      "nomination form",
      "review checklist",
      "link către surse",
      "Hall of competence feed",
    ],
    missing: "Cazuri reale documentate și proces de review.",
    roadmap: [
      "Criterii publice",
      "Feed Nicio Muie",
    ],
    help: "Trimite un exemplu pozitiv cu surse, nu PR.",
    comingSoon: {
      willDo: "Accepta și publica nominalizări verificate de competență.",
      missing: "Pipeline de review și cazuri cu surse.",
    },
  },
  "northStar.metric": {
    id: "modul-rezervat-north-star",
    title: "Ore de viață recuperate",
    problem: "Followers sunt drăguți. Noi vrem timpul înapoi.",
    how: "Agregare din drumuri eliminate, formulare tăiate, click-uri economisite.",
    demoSteps: [
      "Counter 000,000",
      "Lista secundară de metrici",
      "Formula rezervată",
    ],
    architecture: [
      "event taxonomy",
      "measurement methodology",
      "public counter with sources",
    ],
    missing: "Metodologie publicată + date măsurate, nu vanity metrics.",
    roadmap: [
      "Definire formulă",
      "Legătură cu Index / Rezolvă / Bani",
    ],
    help: "Propune o formulă falsificabilă, nu un număr inventat.",
  },
  "editie.feed": {
    id: "modul-rezervat-editie",
    title: "Feed editorial",
    problem: "Formatele există. Cazurile trebuie să aibă surse înainte să aibă likes.",
    how: "Shell per format → caz documentat → arhivă.",
    demoSteps: [
      "Empty slots per format",
      "whatItShows clar",
      "CTA contribuie",
    ],
    architecture: [
      "editorial content model",
      "source requirements",
      "archive pages",
    ],
    missing: "Cazuri reale cu provenance, fără ficțiune prezentată ca fapt.",
    roadmap: [
      "Primul caz cu surse",
      "Arhivă pe format",
    ],
    help: "Propune un caz verificabil pentru formatul ales.",
  },
  "auth.accounts": {
    id: "modul-rezervat-auth",
    title: "Conturi",
    problem: "Login-ul arată ca produs. Nu colectăm conturi până avem un motiv real.",
    how: "Ulterior: auth minimal, local-first preferences, zero tracking implicit.",
    demoSteps: [
      "Formă inertă",
      "Stamp / modal „nelegate”",
      "Fără network",
    ],
    architecture: [
      "optional auth provider",
      "session minimală",
      "export / delete",
    ],
    missing: "Nevoie de produs + provider + privacy review.",
    roadmap: [
      "Doar dacă un modul real cere identitate",
    ],
    help: "Nu inventa motive pentru conturi.",
    comingSoon: {
      willDo: "Conturi doar când un modul real le cere, cu minim de date.",
      missing: "Provider, politică, motiv de produs.",
      help: "Argumentează de ce ar trebui să existe conturi · sau de ce nu.",
    },
  },
};

export function getModulePlaceholder(
  key: ModulePlaceholderKey,
): ModulePlaceholderContent {
  return modulePlaceholders[key];
}
