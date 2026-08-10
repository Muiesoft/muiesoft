import type { CivicProcedure } from "@/domain/procedure";

const retrievedAt = "2026-08-07";

export const registryProcedures: CivicProcedure[] = [
  {
    id: "proc-srl",
    slug: "deschid-firma-srl",
    title: "Deschid un SRL",
    summary:
      "Ghid orientativ pentru înregistrarea unui SRL la Registrul Comerțului, inclusiv pe portalul ONRC. Nu este consultanță juridică: verifică taxele, formularele și cerințele curente pe sursele oficiale înainte de depunere.",
    keywords: [
      "deschid firma",
      "srl",
      "deschid srl",
      "înființare firmă",
      "firma",
      "onrc",
      "registrul comertului",
    ],
    authorities: [
      "Oficiul Național al Registrului Comerțului (ONRC)",
      "portal.onrc.ro",
    ],
    steps: [
      {
        id: "s1",
        order: 1,
        title: "Îți faci cont pe portalul ONRC",
        description:
          "Creezi un cont de utilizator pe portalul de servicii online al ONRC. Pentru depunere integral online ai nevoie, de regulă, de semnătură electronică calificată (sau de un canal acceptat de portal).",
        authority: "ONRC",
        estimatedDays: "în aceeași zi",
      },
      {
        id: "s2",
        order: 2,
        title: "Rezervi denumirea",
        description:
          "Verifici disponibilitatea denumirii și depui cererea de rezervare prin portal. Rezervarea e un pas preliminar: ține cont de termenul de valabilitate afișat în portal și treci la dosarul complet cât mai repede.",
        authority: "ONRC",
        estimatedDays: "conform portal",
      },
      {
        id: "s3",
        order: 3,
        title: "Pregătești actele",
        description:
          "De obicei: act constitutiv, dovada sediului, date asociați/administratori, obiect de activitate (CAEN), declarații tip cerute de ONRC, dovezi de plată. Formatele și listele exacte se iau din ghidurile portalului.",
        authority: "Tu",
        estimatedDays: "1–3 zile",
      },
      {
        id: "s4",
        order: 4,
        title: "Completezi cererea de înregistrare",
        description:
          "În portal alegi înregistrarea persoanei juridice / SRL, completezi formularul, încarci PDF-urile și semnezi electronic unde e cerut.",
        authority: "portal.onrc.ro",
        estimatedDays: "1 zi",
      },
      {
        id: "s5",
        order: 5,
        title: "Plătești taxele ONRC",
        description:
          "Plătești taxele aferente înregistrării (și, după caz, publicării) pe canalele acceptate de ONRC. Sumele se schimbă: ia-le din portal, nu din ghiduri vechi.",
        authority: "ONRC",
        estimatedDays: "în aceeași zi",
      },
      {
        id: "s6",
        order: 6,
        title: "Urmărești soluționarea",
        description:
          "Statusul cererii apare în cont (ex. „Cererile mele”). După înregistrare descarci documentele emise și treci la pașii fiscali (ANAF) și bancari, după caz.",
        authority: "ONRC",
        estimatedDays: "câteva zile lucrătoare",
      },
    ],
    documents: [
      "Act constitutiv",
      "Dovadă sediu social",
      "Documente identitate asociați / administratori",
      "Declarații tip cerute de ONRC",
      "Dovadă plată taxe (după caz)",
    ],
    deadlines: [
      "Rezervarea denumirii are termen de valabilitate: verifică în portal",
      "Termenul de soluționare depinde de dosarul complet și de practică ONRC",
    ],
    costs: [
      "Taxe ONRC: sumele curente pe portal.onrc.ro / onrc.ro",
      "Semnătură electronică calificată (dacă depui online): cost separat, la furnizor",
      "Capital social și alte costuri: conform legii și situației tale",
    ],
    requiresPhysicalPresence: false,
    requiresPrinting: false,
    sources: [
      {
        id: "src-onrc-home",
        title: "ONRC · site oficial",
        publisher: "ONRC",
        url: "https://www.onrc.ro",
        retrievedAt,
        sourceType: "official",
      },
      {
        id: "src-onrc-portal-guide",
        title:
          "ONRC: cum depui online documentele pentru înregistrarea unui profesionist",
        publisher: "ONRC",
        url: "https://www.onrc.ro/index.php/ro/cum-puteti-depune-online-documentele-necesare-inregistrarii-unui-profesionist-la-registrul-comertului",
        retrievedAt,
        sourceType: "official",
      },
      {
        id: "src-onrc-portal",
        title: "Portal servicii online ONRC",
        publisher: "ONRC",
        url: "https://portal.onrc.ro",
        retrievedAt,
        sourceType: "official",
      },
    ],
  },
  {
    id: "proc-taxe",
    slug: "platesc-taxe",
    title: "Plătesc taxe",
    summary:
      "Ghid orientativ pentru plata unor obligații fiscale sau locale prin canale digitale (Spațiul Privat Virtual ANAF și Ghișeul.ro). Nu înlocuiește calendarul tău fiscal: verifică obligațiile în SPV și pe site-urile oficiale.",
    keywords: [
      "plătesc taxe",
      "taxe",
      "impozit",
      "plată",
      "anaf",
      "spv",
      "ghișeul",
      "ghiseul",
    ],
    authorities: ["ANAF / Spațiul Privat Virtual", "Ghișeul.ro"],
    steps: [
      {
        id: "t1",
        order: 1,
        title: "Identifici ce ai de plată",
        description:
          "În SPV (ANAF) vezi situația pe contribuabil: declarații, sume, termene. Pentru taxe locale sau amenzi, verifică și emitentul (primărie, poliție etc.).",
        authority: "ANAF / SPV",
        estimatedDays: "în aceeași zi",
      },
      {
        id: "t2",
        order: 2,
        title: "Alegi canalul de plată",
        description:
          "Obligațiile fiscale ANAF se gestionează prin SPV și canalele indicate de ANAF. Multe taxe/amenzi locale și unele plăți publice pot fi făcute pe Ghișeul.ro, dacă emitentul e listat acolo.",
        authority: "ANAF / Ghișeul.ro",
        estimatedDays: "în aceeași zi",
      },
      {
        id: "t3",
        order: 3,
        title: "Te autentifici și selectezi obligația",
        description:
          "Te loghezi (certificat, ROeID sau metoda acceptată pe site), alegi tipul de plată / instituția și verifici suma și beneficiarul înainte de confirmare.",
        authority: "Portalul ales",
        estimatedDays: "în aceeași zi",
      },
      {
        id: "t4",
        order: 4,
        title: "Plătești și păstrezi dovada",
        description:
          "Finalizezi plata și salvezi chitanța / confirmarea. Dacă SPV sau Ghișeul pică la plată, reîncearcă sau folosește canalul alternativ indicat de emitent; nu inventa IBAN-uri din forumuri.",
        authority: "Tu",
        estimatedDays: "în aceeași zi",
      },
      {
        id: "t5",
        order: 5,
        title: "Verifici actualizarea soldului",
        description:
          "Revii în SPV (sau la emitent) după procesare. Întârzierea afișării nu înseamnă automat că plata a eșuat: păstrează dovada până soldul se actualizează.",
        authority: "ANAF / emitent",
        estimatedDays: "1–5 zile lucrătoare",
      },
    ],
    documents: [
      "Cont SPV / autentificare acceptată de ANAF",
      "Datele obligației (tip, sumă, beneficiar)",
      "Dovadă plată (chitanță / confirmare)",
    ],
    deadlines: [
      "Termenele din SPV și din legislația fiscală aplicabilă tipului de taxă",
      "Pentru amenzi/taxe locale: termenul din înștiințarea de plată",
    ],
    costs: [
      "Suma datorată (din SPV / emitent)",
      "Comisioane de plată: după canalul ales (verifică pe site înainte de confirmare)",
    ],
    requiresPhysicalPresence: false,
    requiresPrinting: false,
    sources: [
      {
        id: "src-anaf",
        title: "ANAF · site oficial",
        publisher: "ANAF",
        url: "https://www.anaf.ro",
        retrievedAt,
        sourceType: "official",
      },
      {
        id: "src-spv",
        title: "Spațiul Privat Virtual",
        publisher: "ANAF",
        url: "https://www.anaf.ro/anaf/internet/ANAF/servicii_online/spatiul_privat_virtual",
        retrievedAt,
        sourceType: "official",
      },
      {
        id: "src-ghiseul",
        title: "Ghișeul.ro · plăți publice",
        publisher: "ADR / Ghișeul.ro",
        url: "https://www.ghiseul.ro",
        retrievedAt,
        sourceType: "official",
      },
    ],
  },
  {
    id: "proc-amenda",
    slug: "contest-amenda",
    title: "Contest o amendă",
    summary:
      "Ghid orientativ pentru plângerea împotriva procesului-verbal de contravenție, pe baza OG nr. 2/2001. Nu este sfat juridic. Termenele sunt scurte: citește PV-ul și textul consolidat al ordonanței înainte să acționezi.",
    keywords: [
      "contest o amendă",
      "amenda",
      "contestație",
      "plângere contravenție",
      "proces verbal",
      "og 2/2001",
    ],
    authorities: [
      "Organul din care face parte agentul constatator",
      "Judecătoria competentă",
    ],
    steps: [
      {
        id: "a1",
        order: 1,
        title: "Citești procesul-verbal",
        description:
          "Notezi data înmânării sau comunicării, fapta, temeiul legal, suma, organul emitent și dacă ai semnat de primire. Termenul de plângere curge de la înmânare/comunicare.",
        authority: "Tu",
        estimatedDays: "în aceeași zi",
      },
      {
        id: "a2",
        order: 2,
        title: "Calculezi termenul de 15 zile",
        description:
          "OG 2/2001 art. 31: plângerea se face în 15 zile de la înmânarea sau comunicarea procesului-verbal. Dacă termini trece, opțiunile se îngustează drastic.",
        authority: "Tu",
        estimatedDays: "imediat",
      },
      {
        id: "a3",
        order: 3,
        title: "Redactezi plângerea",
        description:
          "Arăți de ce consideri PV-ul nelegal sau netemeinic, anexezi copia PV și dovezi. Nu e nevoie de formulare Muiesoft: e cererea ta către instanță / organ, după procedura aplicabilă.",
        authority: "Tu",
        estimatedDays: "1–2 zile",
      },
      {
        id: "a4",
        order: 4,
        title: "Depui plângerea la judecătorie",
        description:
          "Plângerea se judecă la judecătoria în a cărei circumscripție a fost săvârșită contravenția (OG 2/2001). Verifică canalul de depunere acceptat local (registratură, online unde există). Păstrează dovada depunerii.",
        authority: "Judecătoria competentă",
        estimatedDays: "în termenul de 15 zile",
      },
      {
        id: "a5",
        order: 5,
        title: "Urmărești efectul asupra executării",
        description:
          "Conform OG 2/2001, plângerea suspendă executarea (cu nuanțe pentru despăgubiri/confiscare). Nu ignora citațiile: judecătoria fixează termen.",
        authority: "Judecătoria competentă",
        estimatedDays: "conform instanței",
      },
    ],
    documents: [
      "Copie proces-verbal de contravenție",
      "Plângere motivată",
      "Dovezi (foto, martori, înscrisuri) după caz",
      "Dovadă depunere",
    ],
    deadlines: [
      "15 zile de la înmânare/comunicare pentru plângere (OG 2/2001 art. 31)",
      "Termenul de plată din înștiințarea de plată e separat: nu-l confunda cu termenul de contestare",
    ],
    costs: [
      "Taxe judiciare: verifică regimul actual pentru plângeri contravenționale",
      "Onorariu avocat (opțional)",
    ],
    requiresPhysicalPresence: true,
    requiresPrinting: true,
    sources: [
      {
        id: "src-og2",
        title:
          "OG nr. 2/2001 privind regimul juridic al contravențiilor (Portal Legislativ)",
        publisher: "Ministerul Justiției · legislatie.just.ro",
        url: "https://legislatie.just.ro/Public/DetaliiDocumentAfis/29779",
        retrievedAt,
        sourceType: "official",
      },
      {
        id: "src-og2-alt",
        title: "OG nr. 2/2001 · DetaliiDocument (Portal Legislativ)",
        publisher: "Ministerul Justiției · legislatie.just.ro",
        url: "https://legislatie.just.ro/Public/DetaliiDocument/36429",
        retrievedAt,
        sourceType: "official",
      },
    ],
  },
  {
    id: "proc-spv",
    slug: "cont-spv-anaf",
    title: "Îmi fac cont în SPV",
    summary:
      "Ghid orientativ pentru înregistrarea în Spațiul Privat Virtual (ANAF). Nu este consultanță fiscală: metodele de autentificare și formularele se schimbă; verifică pagina oficială SPV înainte să începi.",
    keywords: [
      "cont spv",
      "spv",
      "spațiul privat virtual",
      "spatiul privat virtual",
      "înregistrare spv",
      "anaf cont",
      "roeid",
    ],
    authorities: ["ANAF / Spațiul Privat Virtual"],
    steps: [
      {
        id: "spv1",
        order: 1,
        title: "Deschizi pagina oficială SPV",
        description:
          "Intri pe secțiunea Spațiul Privat Virtual de pe anaf.ro. Evită linkuri din reclame sau forumuri: autentificarea e doar pe canalele ANAF.",
        authority: "ANAF",
        estimatedDays: "în aceeași zi",
      },
      {
        id: "spv2",
        order: 2,
        title: "Alegi metoda de înregistrare / autentificare",
        description:
          "ANAF oferă canale acceptate (ex. certificat calificat, ROeID sau alte metode listate pe site). Alegi ce ai deja sau ce poți obține legal; nu cumpăra „conturi SPV” de la terți.",
        authority: "ANAF",
        estimatedDays: "în aceeași zi",
      },
      {
        id: "spv3",
        order: 3,
        title: "Completezi datele și confirmi identitatea",
        description:
          "Urmezi pașii din fluxul ales: date personale / contribuabil, validări și confirmări cerute de portal. Păstrează datele de acces doar tu.",
        authority: "ANAF / SPV",
        estimatedDays: "în aceeași zi",
      },
      {
        id: "spv4",
        order: 4,
        title: "Te autentifici și verifici accesul",
        description:
          "După activare, te loghezi și verifici că vezi mesajele / situația pe contribuabil. Dacă un pas e blocat, folosește ajutorul sau canalele de suport listate pe anaf.ro, nu tutorialele neverificate.",
        authority: "ANAF / SPV",
        estimatedDays: "în aceeași zi",
      },
    ],
    documents: [
      "Document de identitate (după metoda aleasă)",
      "Date contribuabil (CNP / CUI, după caz)",
      "Certificat calificat sau cont ROeID, dacă alegi aceste canale",
    ],
    deadlines: [
      "Activarea depinde de metoda aleasă: verifică mesajele din fluxul SPV",
    ],
    costs: [
      "Înregistrarea SPV pe canalele ANAF: conform paginii oficiale",
      "Certificat electronic calificat (dacă îl folosești): cost la furnizor",
    ],
    requiresPhysicalPresence: false,
    requiresPrinting: false,
    sources: [
      {
        id: "src-spv-page",
        title: "Spațiul Privat Virtual",
        publisher: "ANAF",
        url: "https://www.anaf.ro/anaf/internet/ANAF/servicii_online/spatiul_privat_virtual",
        retrievedAt,
        sourceType: "official",
      },
      {
        id: "src-anaf-home-spv",
        title: "ANAF · site oficial",
        publisher: "ANAF",
        url: "https://www.anaf.ro",
        retrievedAt,
        sourceType: "official",
      },
    ],
  },
  {
    id: "proc-pfa",
    slug: "deschid-pfa",
    title: "Deschid un PFA",
    summary:
      "Ghid orientativ pentru înregistrarea unei persoane fizice autorizate (PFA) la Registrul Comerțului. Nu este consultanță: verifică tipul de profesionist, CAEN-urile și taxele curente pe sursele ONRC înainte de depunere.",
    keywords: [
      "deschid pfa",
      "pfa",
      "persoană fizică autorizată",
      "persoana fizica autorizata",
      "înființare pfa",
      "onrc pfa",
    ],
    authorities: [
      "Oficiul Național al Registrului Comerțului (ONRC)",
      "portal.onrc.ro",
    ],
    steps: [
      {
        id: "p1",
        order: 1,
        title: "Verifici dacă PFA e forma potrivită",
        description:
          "PFA e un tip de profesionist distinct de SRL. Citește condițiile pe onrc.ro / ghidurile portalului (pregătire profesională, CAEN, sediu) înainte să plătești ceva.",
        authority: "Tu / ONRC",
        estimatedDays: "1 zi",
      },
      {
        id: "p2",
        order: 2,
        title: "Îți faci cont pe portalul ONRC",
        description:
          "Creezi cont pe portal.onrc.ro. Pentru depunere online ai nevoie, de regulă, de semnătură electronică calificată sau de un canal acceptat de portal.",
        authority: "ONRC",
        estimatedDays: "în aceeași zi",
      },
      {
        id: "p3",
        order: 3,
        title: "Rezervi denumirea (dacă e cazul)",
        description:
          "Verifici disponibilitatea și rezervi denumirea conform fluxului din portal. Ține cont de termenul de valabilitate afișat.",
        authority: "ONRC",
        estimatedDays: "conform portal",
      },
      {
        id: "p4",
        order: 4,
        title: "Pregătești dosarul PFA",
        description:
          "De obicei: cerere tip, dovezi de pregătire / experiență unde le cere legea pentru obiectul de activitate, dovada sediului, declarații tip ONRC, dovezi de plată. Lista exactă e pe ghidurile oficiale.",
        authority: "Tu",
        estimatedDays: "1–3 zile",
      },
      {
        id: "p5",
        order: 5,
        title: "Depui înregistrarea și plătești taxele",
        description:
          "Completezi cererea de înregistrare PFA în portal, încarci documentele, semnezi unde e cerut și plătești taxele afișate. Sumele se schimbă: ia-le din portal.",
        authority: "portal.onrc.ro",
        estimatedDays: "1 zi",
      },
      {
        id: "p6",
        order: 6,
        title: "Urmărești soluționarea și pașii fiscali",
        description:
          "Statusul apare în cont. După înregistrare descarci documentele emise și treci la obligațiile fiscale (înregistrare / vector fiscal ANAF) după situația ta.",
        authority: "ONRC / ANAF",
        estimatedDays: "câteva zile lucrătoare",
      },
    ],
    documents: [
      "Cerere / formulare tip ONRC pentru PFA",
      "Dovadă sediu",
      "Dovezi pregătire / experiență (unde e cazul)",
      "Document identitate",
      "Dovadă plată taxe (după caz)",
    ],
    deadlines: [
      "Rezervarea denumirii are termen de valabilitate: verifică în portal",
      "Termenul de soluționare depinde de dosarul complet",
    ],
    costs: [
      "Taxe ONRC: sumele curente pe portal.onrc.ro / onrc.ro",
      "Semnătură electronică calificată (dacă depui online): cost la furnizor",
    ],
    requiresPhysicalPresence: false,
    requiresPrinting: false,
    sources: [
      {
        id: "src-onrc-pfa-home",
        title: "ONRC · site oficial",
        publisher: "ONRC",
        url: "https://www.onrc.ro",
        retrievedAt,
        sourceType: "official",
      },
      {
        id: "src-onrc-pfa-portal",
        title: "Portal servicii online ONRC",
        publisher: "ONRC",
        url: "https://portal.onrc.ro",
        retrievedAt,
        sourceType: "official",
      },
      {
        id: "src-onrc-pfa-guide",
        title:
          "ONRC: cum depui online documentele pentru înregistrarea unui profesionist",
        publisher: "ONRC",
        url: "https://www.onrc.ro/index.php/ro/cum-puteti-depune-online-documentele-necesare-inregistrarii-unui-profesionist-la-registrul-comertului",
        retrievedAt,
        sourceType: "official",
      },
    ],
  },
  {
    id: "proc-caf",
    slug: "certificat-atestare-fiscala",
    title: "Cer certificat de atestare fiscală",
    summary:
      "Ghid orientativ pentru solicitarea certificatului de atestare fiscală prin canalele ANAF (inclusiv SPV, unde e disponibil). Nu înlocuiește instrucțiunile oficiale: tipul de certificat și documentele cerute depind de situația ta.",
    keywords: [
      "certificat atestare fiscală",
      "certificat atestare fiscala",
      "caf",
      "atestare fiscală",
      "adeverință fiscală",
      "anaf certificat",
    ],
    authorities: ["ANAF / Spațiul Privat Virtual"],
    steps: [
      {
        id: "c1",
        order: 1,
        title: "Verifici că ai acces SPV (sau canalul acceptat)",
        description:
          "Majoritatea solicitărilor digitale trec prin Spațiul Privat Virtual. Dacă nu ai cont, urmează mai întâi procedura de înregistrare SPV.",
        authority: "ANAF / SPV",
        estimatedDays: "în aceeași zi",
      },
      {
        id: "c2",
        order: 2,
        title: "Identifici tipul de certificat",
        description:
          "În SPV / pe anaf.ro alegi solicitarea de certificat de atestare fiscală potrivită (persoană fizică / juridică, scop). Citește ce se eliberează și pe ce perioadă.",
        authority: "ANAF",
        estimatedDays: "în aceeași zi",
      },
      {
        id: "c3",
        order: 3,
        title: "Completezi și depui cererea",
        description:
          "Completezi formularul din SPV (sau canalul indicat), semnezi / confirmi cum cere portalul și trimiți cererea. Păstrează numărul de înregistrare.",
        authority: "ANAF / SPV",
        estimatedDays: "în aceeași zi",
      },
      {
        id: "c4",
        order: 4,
        title: "Descarci documentul emis",
        description:
          "Urmărești mesajele din SPV. Când e emis, descarci certificatul și verifici datele. Dacă ai restanțe sau neclarități, rezolvă-le pe canalele ANAF înainte să redepui.",
        authority: "ANAF / SPV",
        estimatedDays: "conform ANAF",
      },
    ],
    documents: [
      "Cont SPV activ",
      "Date contribuabil corecte în evidențele ANAF",
      "Cerere tip din SPV / canalul oficial",
    ],
    deadlines: [
      "Termenul de soluționare: conform instrucțiunilor ANAF pentru tipul de certificat",
    ],
    costs: [
      "Verifică pe anaf.ro / în SPV dacă tipul de certificat are taxă; nu lua sume din ghiduri vechi",
    ],
    requiresPhysicalPresence: false,
    requiresPrinting: false,
    sources: [
      {
        id: "src-caf-spv",
        title: "Spațiul Privat Virtual",
        publisher: "ANAF",
        url: "https://www.anaf.ro/anaf/internet/ANAF/servicii_online/spatiul_privat_virtual",
        retrievedAt,
        sourceType: "official",
      },
      {
        id: "src-caf-anaf",
        title: "ANAF · site oficial",
        publisher: "ANAF",
        url: "https://www.anaf.ro",
        retrievedAt,
        sourceType: "official",
      },
    ],
  },
  {
    id: "proc-cnpp",
    slug: "cont-cnpp",
    title: "Accesez serviciile online CNPP",
    summary:
      "Ghid orientativ pentru accesarea serviciilor digitale ale Casei Naționale de Pensii Publice. Nu este consultanță de pensii: funcționalitățile și autentificarea se iau de pe cnpp.ro.",
    keywords: [
      "cont cnpp",
      "pensie online",
      "cnpp",
      "casă pensii",
      "casa pensii",
      "stagiu cotizare",
      "servicii online pensii",
    ],
    authorities: ["Casa Națională de Pensii Publice (CNPP)"],
    steps: [
      {
        id: "n1",
        order: 1,
        title: "Deschizi site-ul oficial CNPP",
        description:
          "Intri pe cnpp.ro și cauți secțiunea de servicii online / autentificare. Folosește doar domeniul oficial.",
        authority: "CNPP",
        estimatedDays: "în aceeași zi",
      },
      {
        id: "n2",
        order: 2,
        title: "Alegi serviciul de care ai nevoie",
        description:
          "CNPP publică servicii online (informări, cereri, documente) care se schimbă în timp. Citești descrierea serviciului și condițiile de acces pe pagină.",
        authority: "CNPP",
        estimatedDays: "în aceeași zi",
      },
      {
        id: "n3",
        order: 3,
        title: "Te autentifici pe canalul acceptat",
        description:
          "Urmezi metoda de autentificare indicată de CNPP (inclusiv canale naționale de identitate electronică, dacă sunt listate). Nu trimite CNP-uri pe emailuri neverificate.",
        authority: "CNPP",
        estimatedDays: "în aceeași zi",
      },
      {
        id: "n4",
        order: 4,
        title: "Depui cererea sau consulți datele",
        description:
          "Completezi fluxul din portal, salvezi confirmările și verifici statusul. Pentru dosare complexe, casa teritorială rămâne canalul de rezervă; programările și documentele se iau de pe site.",
        authority: "CNPP",
        estimatedDays: "conform serviciului",
      },
    ],
    documents: [
      "Document de identitate",
      "Date necesare tipului de cerere (conform paginii serviciului)",
      "Autentificare pe canalul acceptat de CNPP",
    ],
    deadlines: [
      "Termenele depind de tipul cererii: citește pagina serviciului pe cnpp.ro",
    ],
    costs: [
      "Serviciile online CNPP: conform informațiilor de pe site-ul oficial",
    ],
    requiresPhysicalPresence: false,
    requiresPrinting: false,
    sources: [
      {
        id: "src-cnpp-home",
        title: "CNPP · site oficial",
        publisher: "CNPP",
        url: "https://www.cnpp.ro",
        retrievedAt,
        sourceType: "official",
      },
    ],
  },
  {
    id: "proc-datagov",
    slug: "date-deschise-data-gov",
    title: "Găsesc / cer date pe data.gov.ro",
    summary:
      "Ghid orientativ pentru căutarea seturilor de date pe portalul național de date deschise și pentru solicitări când datele lipsesc. Nu garantează publicarea: unele seturi necesită cerere 544 către instituție.",
    keywords: [
      "data.gov.ro",
      "date deschise",
      "open data",
      "seturi de date",
      "cer date",
      "portal date deschise",
    ],
    authorities: [
      "data.gov.ro",
      "Instituția deținătoare a datelor",
    ],
    steps: [
      {
        id: "d1",
        order: 1,
        title: "Cauți pe data.gov.ro",
        description:
          "Folosești căutarea și filtrele portalului (organizație, format, temă). Notezi titlul setului, organizația și licența / condițiile de folosire.",
        authority: "data.gov.ro",
        estimatedDays: "în aceeași zi",
      },
      {
        id: "d2",
        order: 2,
        title: "Descarci sau consulți resursele",
        description:
          "Deschizi pagina setului, verifici actualizarea și descarci formatele disponibile (CSV, JSON etc.). Dacă linkul e mort, notează organizația publicatoare.",
        authority: "data.gov.ro",
        estimatedDays: "în aceeași zi",
      },
      {
        id: "d3",
        order: 3,
        title: "Dacă lipsește setul, identifici deținătorul",
        description:
          "Datele pot exista la instituție dar să nu fie pe portal. Identifici autoritatea competentă din misiune / organigramă / pagini de transparență.",
        authority: "Tu",
        estimatedDays: "1 zi",
      },
      {
        id: "d4",
        order: 4,
        title: "Cerți publicarea sau accesul (544 / canal oficial)",
        description:
          "Poți cere instituției ce seturi publică sau pot publica pe data.gov.ro, în ce format și cu ce frecvență. Pe Muiesoft poți genera o cerere 544 cu template-ul „Open data”.",
        authority: "Instituția deținătoare",
        estimatedDays: "conform Legii 544/2001",
      },
    ],
    documents: [
      "Link / titlu set de date (dacă există)",
      "Descrierea datelor căutate",
      "Cerere 544 (opțional, dacă datele nu sunt publice)",
    ],
    deadlines: [
      "Termenele Legii 544/2001 dacă soliciți informații de interes public",
    ],
    costs: [
      "Consultarea data.gov.ro: gratuită pe portal",
      "Copii / costuri 544: conform legii și răspunsului instituției",
    ],
    requiresPhysicalPresence: false,
    requiresPrinting: false,
    sources: [
      {
        id: "src-datagov",
        title: "data.gov.ro · portal date deschise",
        publisher: "Guvernul României / ADR (portal)",
        url: "https://data.gov.ro",
        retrievedAt,
        sourceType: "open-data",
      },
      {
        id: "src-datagov-544",
        title:
          "Legea 544/2001 privind liberul acces la informațiile de interes public",
        publisher: "Ministerul Justiției · legislatie.just.ro",
        url: "https://legislatie.just.ro/Public/DetaliiDocumentAfis/31413",
        retrievedAt,
        sourceType: "official",
      },
    ],
  },
];
