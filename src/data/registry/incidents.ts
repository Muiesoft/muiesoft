export type IncidentRecord = {
  id: string;
  title: string;
  status: string;
  when: string;
  serviceSlug?: string;
  steps: string[];
  browser: string;
  url: string;
  summary: string;
  sources?: { title: string; url: string }[];
  demo?: boolean;
};

export const registryIncidents: IncidentRecord[] = [
  {
    id: "inc-ancpi-eterra-ransomware-2026-07",
    title:
      "e-Terra / ANCPI: ransomware, cartea funciară offline național (iulie 2026)",
    status: "DOCUMENTAT",
    when: "2026-07-14",
    serviceSlug: "ancpi-ro",
    steps: [
      "Citește comunicatul Guvernului din 27 iulie 2026 despre accesul neautorizat constatat de ANCPI pe 14 iulie și confirmarea atacului ransomware.",
      "Notează sistemele raportate ca afectate: e-Terra (cadastru și carte funciară), ePay, email instituțional; infrastructură de virtualizare criptată/ștearsă parțial.",
      "Citește precizarea oficială: baza de date centrală a evidenței proprietăților e raportată intactă; nu există dovezi de acces la aceste date.",
      "Citește analiza de impact juridic (blocaj extrase CF / autentificări notariale) din sursa Juridice de mai jos. Nu rula teste de intruziune.",
    ],
    browser: "oricare (indisponibilitate de infrastructură, nu problemă de client)",
    url: "https://eterra3.ancpi.ro",
    summary:
      "Incident documentat oficial: pe 14 iulie 2026 ANCPI a constatat acces neautorizat; DNSC a confirmat ransomware asupra infrastructurii de virtualizare. e-Terra și serviciile conexe au fost scoase din funcțiune la nivel național. Guvernul raportează că baza centrală cadastrală nu a fost afectată. Nu e sentință, e fapt de disponibilitate și securitate din surse publice.",
    sources: [
      {
        title:
          "Guvernul României · Stadiul repunerii e-Terra după incidentul de securitate cibernetică (27 iulie 2026)",
        url: "https://gov.ro/ro/media/comunicate/stadiul-repunerii-in-functiune-a-sistemului-informatic-e-terra-in-urma-incidentului-de-securitate-cibernetica",
      },
      {
        title:
          "Digi24 · Guvernul: baza cadastrală nu a fost afectată; fără dată fermă pentru repornirea e-Terra",
        url: "https://www.digi24.ro/digieconomic/digital/guvernul-noi-precizari-despre-atacul-de-la-ancpi-baza-cadastrala-nu-a-fost-afectata-nu-exista-o-data-pentru-repornirea-e-terra-111917",
      },
      {
        title:
          "Juridice.ro · Atacul cibernetic asupra ANCPI: blocajul pieței imobiliare și implicațiile juridice",
        url: "https://www.juridice.ro/841344/atacul-cibernetic-asupra-ancpi-blocajul-pietei-imobiliare-si-implicatiile-juridice-rezultate-din-acesta.html",
      },
      {
        title:
          "DNSC · Analiză tehnică intermediară incident ANCPI (PDF, mirror publicat în presă)",
        url: "https://www.go4it.ro/wp-content/uploads/2026/07/DNSC-T66-v2026.07.22-Anexa-tehnica-incident-ANCPI.pdf",
      },
    ],
    demo: false,
  },
  {
    id: "inc-ghiseul-offline-2025-02",
    title: "Ghișeul.ro indisponibil (februarie 2025)",
    status: "DEGRADAT",
    when: "2025-02-11",
    serviceSlug: "ghiseul-ro",
    steps: [
      "Încearcă plata taxelor pe Ghișeul.ro în perioada documentată (11-14 februarie 2025).",
      "Observă mesajele de tip „încearcă mai târziu” / imposibilitatea plății online raportate public.",
      "Citește declarațiile ADR din sursele de mai jos (cauze invocate, durată, sisteme afectate).",
      "Notează data revenirii anunțate în surse (aproximativ 14 februarie 2025).",
    ],
    browser: "oricare (incident de disponibilitate, nu de client)",
    url: "https://www.ghiseul.ro",
    summary:
      "Incident de disponibilitate documentat în surse publice: Ghișeul.ro și alte sisteme ADR inaccesibile mai multe zile în februarie 2025. Nu e sentință, e fapt de uptime raportat.",
    sources: [
      {
        title:
          "HotNews: Coadă la plata online; Ghișeul.ro și alte sisteme ADR indisponibile",
        url: "https://hotnews.ro/coada-la-plata-online-a-taxelor-ghiseul-ro-si-alte-sisteme-it-ale-statului-nu-pot-fi-accesate-pentru-a-doua-zi-la-rand-seful-autoritatii-pentru-digitalizare-spune-ca-de-vina-este-1900012",
      },
      {
        title:
          "HotNews: Revenire anunțată după ~4 zile; restaurare volum mare de metadate",
        url: "https://hotnews.ro/plata-online-a-taxelor-prin-ghiseul-ro-va-redeveni-functionala-vineri-sef-adr-a-ars-doar-condensatorul-unui-ups-avem-de-restaurat-un-volum-foarte-mare-de-peste-200-de-tb-de-metadate-1901922",
      },
    ],
    demo: false,
  },
  {
    id: "inc-ddos-killnet-2022-04",
    title: "DDoS pe gov.ro, mapn.ro, politiadefrontiera.ro (aprilie 2022)",
    status: "DOCUMENTAT",
    when: "2022-04-29",
    steps: [
      "Citește comunicatul DNSC din 29 aprilie 2022: atac DDoS revendicat de gruparea Killnet pe Telegram.",
      "Verifică lista site-urilor afectate: gov.ro, mapn.ro, politiadefrontiera.ro, cfrcalatori.ro, otpbank.ro.",
      "Notează cronologia din surse: atac început la 04:05 pe mapn.ro, acces restabilit în jurul orei 11:00.",
      "Observă că a doua zi a fost lovit și site-ul DNSC, apoi cel al Poliției Române.",
    ],
    browser: "oricare (indisponibilitate totală, nu problemă de client)",
    url: "https://www.gov.ro",
    summary:
      "Incident documentat în surse publice: site-urile Guvernului, MApN și Poliției de Frontieră au fost blocate ore întregi de un DDoS revendicat de Killnet. Nu e vina unui portal anume, dar e un test de reziliență pe care infrastructura publică l-a picat vizibil.",
    sources: [
      {
        title:
          "HotNews: Val de atacuri cibernetice în România; revendicate de Killnet",
        url: "https://hotnews.ro/val-de-atacuri-cibernetice-n-romnia-vizate-mai-multe-institutii-ntre-care-guvernul-si-ministerul-apararii-atacurile-revendicate-de-hackerii-pro-rusi-de-la-killnet-131734",
      },
      {
        title:
          "Europa Liberă: Hackeri ruși revendică atacurile asupra site-urilor guvernamentale",
        url: "https://romania.europalibera.org/a/atacuri-cibernetice-de-amploare-asupra-site-urilor-guvernamentale-din-rom%C3%A2nia/31826541.html",
      },
    ],
    demo: false,
  },
  {
    id: "inc-portal-just-tls-2026-08",
    title:
      "portal.just.ro servește lanț TLS incomplet (clienți stricți resping conexiunea)",
    status: "REPRODUCTIBIL",
    when: "2026-08-10",
    serviceSlug: "portal-just-ro",
    steps: [
      "Rulează în Node 18+: node -e \"fetch('https://portal.just.ro').catch(e => console.log(e.cause?.code))\".",
      "Observă eroarea UNABLE_TO_VERIFY_LEAF_SIGNATURE: serverul nu trimite certificatele intermediare.",
      "Compară cu un browser: pagina se încarcă, pentru că browserele completează singure lanțul (AIA fetching / cache).",
      "Verifică independent cu un tester TLS (SSL Labs, „chain issues”) și cu snapshot-ul nostru zilnic din probes.json.",
    ],
    browser:
      "browserele maschează problema; clienții stricți (Node, biblioteci, integrări) o văd",
    url: "https://portal.just.ro",
    summary:
      "Măsurătoare proprie, reproductibilă: proba HTTP zilnică Muiesoft nu poate valida certificatul TLS al portal.just.ro din cauza lanțului incomplet. Site-ul funcționează în browsere, dar orice integrare strictă pică. Config, nu conspirație.",
    sources: [
      {
        title: "Muiesoft · probes.json (snapshot zilnic commitat public)",
        url: "https://github.com/Muiesoft/muiesoft/blob/main/src/data/registry/probes.json",
      },
      {
        title: "Qualys SSL Labs · test TLS pentru portal.just.ro",
        url: "https://www.ssllabs.com/ssltest/analyze.html?d=portal.just.ro",
      },
    ],
    demo: false,
  },
];

export function getIncident(id: string): IncidentRecord | null {
  return registryIncidents.find((i) => i.id === id) ?? null;
}

export function getIncidentsForService(slug: string): IncidentRecord[] {
  return registryIncidents.filter((i) => i.serviceSlug === slug);
}
