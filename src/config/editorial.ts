export type EditorialFormat = {
  slug: string;
  title: string;
  punchline: string;
  whatItShows: string;
  emptyState: string;
  slotLabels: {
    featured: string;
    archive: string;
  };
};

export const editorialFormats: EditorialFormat[] = [
  {
    slug: "muia-zilei",
    title: "Cazul zilei",
    punchline: "Cel mai absurd UX public verificat. O dată pe zi. Fără milă.",
    whatItShows:
      "Un caz documentat: capturi, pași de reproducere, instituție, surse.",
    emptyState:
      "Niciun caz al zilei încă. Feed-ul e gol până avem primul caz cu surse.",
    slotLabels: {
      featured: "Cazul zilei",
      archive: "Arhivă",
    },
  },
  {
    slug: "pdf-ul-saptamanii",
    title: "PDF-ul Săptămânii",
    punchline: "Documentul care trebuia să fie HTML. Și totuși e PDF.",
    whatItShows:
      "PDF-ul săptămânii, de ce e absurd, alternativă rezonabilă, sursă.",
    emptyState:
      "Niciun PDF nominalizat. Slot rezervat pentru documente reale, nu inventate.",
    slotLabels: {
      featured: "PDF-ul săptămânii",
      archive: "Galeria PDF-urilor",
    },
  },
  {
    slug: "merge-la-mine",
    title: "Merge La Mine™",
    punchline: "Incident reproductibil. Nu „la mine merge”.",
    whatItShows:
      "Pași de reproducere, browser, timestamp, status, linkuri publice.",
    emptyState:
      "Niciun incident publicat încă. Trimite un caz verificabil cu surse.",
    slotLabels: {
      featured: "Incident activ",
      archive: "Incidente anterioare",
    },
  },
  {
    slug: "cate-click-uri-pana-la-pensie",
    title: "Câte click-uri până la pensie?",
    punchline: "Task complexity măsurată pe pielea cetățeanului.",
    whatItShows:
      "Număr de click-uri, câmpuri, drumuri fizice, timp estimat, metodologie.",
    emptyState:
      "Nicio măsurătoare publicată. Contorul stă pe zero până avem protocol + date.",
    slotLabels: {
      featured: "Task măsurat",
      archive: "Istoric măsurători",
    },
  },
  {
    slug: "cat-a-costat-butonul",
    title: "Cât a costat butonul?",
    punchline: "Procurement + UX. Banii întâlnesc click-ul.",
    whatItShows:
      "Cost public, ce s-a livrat, ce trebuia să facă butonul, surse primare.",
    emptyState:
      "Nicio analiză încă. Nu inventăm sume. Așteptăm documente publice.",
    slotLabels: {
      featured: "Cazul curent",
      archive: "Dosare anterioare",
    },
  },
  {
    slug: "404-guvernamental",
    title: "404 Guvernamental",
    punchline: "Serviciul public care a ales să nu mai participe la Internet.",
    whatItShows: "URL, status, captură, data constatării, sursă.",
    emptyState:
      "Niciun 404 guvernamental indexat. Lista e inactivă până avem probe.",
    slotLabels: {
      featured: "404-ul săptămânii",
      archive: "Cimitirul URL-urilor",
    },
  },
  {
    slug: "excel-as-a-service",
    title: "Excel as a Service",
    punchline: "Infrastructură critică în spreadsheets. Cu atașament.",
    whatItShows:
      "Unde Excel ține loc de bază de date, impact, alternativă, surse.",
    emptyState:
      "Niciun caz documentat. Nu inventăm „baze naționale”. Așteptăm dovezi.",
    slotLabels: {
      featured: "Spreadsheet-ul săptămânii",
      archive: "Registrul Excel",
    },
  },
  {
    slug: "atentie-urmeaza-digitalizare",
    title: "Atenție, urmează digitalizare",
    punchline: "Proces „online” care se termină la ghișeu.",
    whatItShows:
      "Pașii online vs fizici, ștampile, printuri, scor de digitalizare reală.",
    emptyState:
      "Nicio procedură analizată. Detectorul de digitalizare e satire; aici vin cazurile.",
    slotLabels: {
      featured: "Procedura săptămânii",
      archive: "Proceduri demascate",
    },
  },
  {
    slug: "nicio-muie",
    title: "Când merge",
    punchline: "Când administrația face ceva bine, spunem și asta.",
    whatItShows:
      "Exemplu pozitiv verificat: UX, disponibilitate, transparență, impact.",
    emptyState:
      "Niciun exemplu pozitiv publicat încă. Standardele există. Cazurile vin.",
    slotLabels: {
      featured: "Exemplul săptămânii",
      archive: "Hall of competence",
    },
  },
];

export function getEditorialFormat(slug: string): EditorialFormat | undefined {
  return editorialFormats.find((f) => f.slug === slug);
}
