export type Freedom544Target = {
  name: string;
  contactUrl?: string;
  notes?: string;
};

export const freedom544Directory: Freedom544Target[] = [
  {
    name: "ANAF",
    contactUrl: "https://www.anaf.ro",
    notes: "Solicitări informații / relații publice · verifică pagina oficială",
  },
  {
    name: "Ministerul Finanțelor",
    contactUrl: "https://mfinante.gov.ro",
  },
  {
    name: "Ministerul Justiției",
    contactUrl: "https://www.just.ro",
  },
  {
    name: "Ministerul Afacerilor Interne",
    contactUrl: "https://www.mai.gov.ro",
  },
  {
    name: "Ministerul Muncii și Solidarității Sociale",
    contactUrl: "https://www.mmuncii.ro",
  },
  {
    name: "ONRC",
    contactUrl: "https://www.onrc.ro",
  },
  {
    name: "CNPP",
    contactUrl: "https://www.cnpp.ro",
  },
  {
    name: "ADR (Autoritatea pentru Digitalizarea României)",
    contactUrl: "https://www.adr.gov.ro",
  },
  {
    name: "Guvernul României · Secretariatul General",
    contactUrl: "https://gov.ro",
  },
  {
    name: "Ghișeul.ro",
    contactUrl: "https://www.ghiseul.ro",
    notes: "Operat în ecosistemul ADR · pentru costuri/SLA cere și la ADR",
  },
  {
    name: "legislatie.just.ro",
    contactUrl: "https://legislatie.just.ro",
    notes: "Portal Legislativ · Ministerul Justiției",
  },
  {
    name: "data.gov.ro",
    contactUrl: "https://data.gov.ro",
    notes: "Portal date deschise · verifică și instituția deținătoare a setului",
  },
  {
    name: "portal.just.ro",
    contactUrl: "https://portal.just.ro",
  },
  {
    name: "DEPABD",
    contactUrl: "https://depabd.mai.gov.ro",
    notes: "Evidența persoanelor · MAI",
  },
  {
    name: "Autoritatea Electorală Permanentă",
    contactUrl: "https://www.roaep.ro",
  },
  {
    name: "Ministerul Sănătății",
    contactUrl: "https://www.ms.ro",
  },
  {
    name: "Ministerul Educației",
    contactUrl: "https://www.edu.ro",
  },
  {
    name: "Ministerul Afacerilor Externe",
    contactUrl: "https://www.mae.ro",
    notes: "Pentru servicii consulare cere și la econsulat.ro / misiunea diplomatică",
  },
  {
    name: "Ministerul Apărării Naționale",
    contactUrl: "https://www.mapn.ro",
  },
  {
    name: "Ministerul Transporturilor și Infrastructurii",
    contactUrl: "https://www.mt.ro",
  },
  {
    name: "Ministerul Mediului, Apelor și Pădurilor",
    contactUrl: "https://www.mmediu.ro",
  },
  {
    name: "Ministerul Agriculturii și Dezvoltării Rurale",
    contactUrl: "https://www.madr.ro",
  },
  {
    name: "Ministerul Dezvoltării, Lucrărilor Publice și Administrației",
    contactUrl: "https://www.mdlpa.ro",
  },
  {
    name: "Ministerul Investițiilor și Proiectelor Europene",
    contactUrl: "https://mfe.gov.ro",
  },
  {
    name: "Ministerul Cercetării, Inovării și Digitalizării",
    contactUrl: "https://www.mcid.gov.ro",
  },
  {
    name: "Ministerul Culturii",
    contactUrl: "https://www.cultura.ro",
  },
  {
    name: "Ministerul Economiei",
    contactUrl: "https://economie.gov.ro",
  },
  {
    name: "Ministerul Energiei",
    contactUrl: "https://energie.gov.ro",
  },
  {
    name: "CNAS (Casa Națională de Asigurări de Sănătate)",
    contactUrl: "https://cnas.ro",
  },
  {
    name: "ANCPI (cadastru și publicitate imobiliară)",
    contactUrl: "https://www.ancpi.ro",
  },
  {
    name: "ANOFM (ocuparea forței de muncă)",
    contactUrl: "https://www.anofm.ro",
  },
  {
    name: "APIA (plăți și intervenție pentru agricultură)",
    contactUrl: "https://apia.org.ro",
  },
  {
    name: "Institutul Național de Statistică",
    contactUrl: "https://insse.ro",
  },
  {
    name: "ANAP (achiziții publice)",
    contactUrl: "https://anap.gov.ro",
    notes: "Pentru contracte punctuale cere și la autoritatea contractantă",
  },
  {
    name: "ANPC (protecția consumatorilor)",
    contactUrl: "https://anpc.ro",
  },
  {
    name: "ANCOM (comunicații)",
    contactUrl: "https://www.ancom.ro",
  },
  {
    name: "Consiliul Concurenței",
    contactUrl: "https://www.consiliulconcurentei.ro",
  },
  {
    name: "Curtea de Conturi a României",
    contactUrl: "https://www.curteadeconturi.ro",
    notes: "Rapoartele de audit sunt publice · cere-le pe cele nepublicate",
  },
  {
    name: "Avocatul Poporului",
    contactUrl: "https://avp.ro",
  },
  {
    name: "ANSPDCP (protecția datelor)",
    contactUrl: "https://www.dataprotection.ro",
  },
  {
    name: "Inspecția Muncii",
    contactUrl: "https://www.inspectiamuncii.ro",
  },
  {
    name: "DRPCIV (permise și înmatriculări)",
    contactUrl: "https://www.drpciv.ro",
  },
  {
    name: "Primăria Cluj-Napoca",
    contactUrl: "https://primariaclujnapoca.ro",
  },
  {
    name: "Primăria Oradea",
    contactUrl: "https://www.oradea.ro",
  },
  {
    name: "Primăria Timișoara",
    contactUrl: "https://www.primariatm.ro",
  },
  {
    name: "Primăria Iași",
    contactUrl: "https://www.primaria-iasi.ro",
  },
  {
    name: "Primăria Municipiului București",
    contactUrl: "https://www.pmb.ro",
  },
];

export const freedom544Templates = [
  {
    id: "cost-site",
    label: "Cost site / platformă",
    question:
      "Care a fost costul total (dezvoltare, mentenanță, licențe, hosting) al site-ului sau platformei digitale [NUME], pe ultimii 3 ani, defalcat pe ani și pe tipuri de cheltuieli? Solicit copii ale contractelor relevante sau referințe publice.",
  },
  {
    id: "contract",
    label: "Contract furnizor",
    question:
      "Care sunt contractele de achiziție publică aferente serviciului digital [NUME], inclusiv valoare, furnizor, durată și eventuale acte adiționale? Solicit linkuri către SEAP/SICAP sau copii.",
  },
  {
    id: "sla",
    label: "SLA / disponibilitate",
    question:
      "Există un SLA sau indicatori de disponibilitate (uptime, timp de răspuns) pentru serviciul digital [NUME]? Dacă da, care sunt valorile asumate și realizate în ultimul an?",
  },
  {
    id: "open-data",
    label: "Open data",
    question:
      "Ce seturi de date aferente [NUME] sunt publicate sau pot fi publicate pe data.gov.ro (sau pe portalul propriu), în ce format, cu ce frecvență de actualizare, și care este temeiul pentru eventualul refuz de publicare?",
  },
  {
    id: "buget-digitalizare",
    label: "Buget digitalizare",
    question:
      "Care a fost bugetul alocat și cheltuit pentru digitalizare / transformare digitală legat de [NUME] în ultimii 3 ani, defalcat pe ani, pe proiecte și pe tipuri de cheltuieli (dezvoltare, mentenanță, licențe, consultanță)?",
  },
] as const;
