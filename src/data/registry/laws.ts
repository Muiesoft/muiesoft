import type { LegalDocument } from "@/domain/law";

const retrievedAt = "2026-08-07";
const officialUrl =
  "https://legislatie.just.ro/Public/DetaliiDocumentAfis/31413";

export const registryLaws: LegalDocument[] = [
  {
    id: "law-544-2001",
    slug: "legea-544-2001-acces-informatii",
    number: "544",
    year: 2001,
    title:
      "Legea 544/2001 privind liberul acces la informațiile de interes public",
    status: "in-force",
    effectiveFrom: "2001-12-22",
    versions: [
      {
        id: "v-544-portal",
        effectiveFrom: "2001-12-22",
        label: "Text pe Portalul Legislativ (consultat)",
        summary:
          "Legea garantează accesul la informații de interes public, din oficiu sau la cerere, cu termene și excepții.",
        plainLanguage:
          "Poți cere instituției informații publice. Ea trebuie să răspundă în termenele din lege, dacă nu e vorba de excepții (clasificate, date personale etc.).",
        officialText:
          "Legea nr. 544 din 12 octombrie 2001 privind liberul acces la informațiile de interes public, publicată în Monitorul Oficial nr. 663 din 23 octombrie 2001. Textul consolidat se consultă pe Portalul Legislativ.",
      },
    ],
    articles: [
      {
        id: "art-1",
        number: "1",
        title: "Principiul accesului liber",
        officialText:
          "Accesul liber și neîngrădit al persoanei la orice informații de interes public, definite astfel prin prezenta lege, constituie unul dintre principiile fundamentale ale relațiilor dintre persoane și autoritățile publice, în conformitate cu Constituția României și cu documentele internaționale ratificate de Parlamentul României.",
        plainLanguage:
          "Accesul la informații publice nu e un favor. E un principiu: tu întrebi, statul răspunde în limitele legii.",
      },
      {
        id: "art-2",
        number: "2",
        title: "Definiții",
        officialText:
          "În sensul prezentei legi: a) prin autoritate sau instituție publică se înțelege orice autoritate sau instituție publică, precum și orice regie autonomă care utilizează resurse financiare publice și care își desfășoară activitatea pe teritoriul României, potrivit Constituției; b) prin informație de interes public se înțelege orice informație care privește activitățile sau rezultă din activitățile unei autorități publice sau instituții publice, indiferent de suportul ori de forma sau de modul de exprimare a informației; c) prin informație cu privire la datele personale se înțelege orice informație privind o persoană fizică identificată sau identificabilă.",
        plainLanguage:
          "„Informație de interes public” = ce face sau produce o instituție publică, indiferent de format. „Date personale” = altceva; nu e totul liber ca la supermarket. Verifică textul consolidat: definiția de instituție a fost modificată ulterior.",
      },
      {
        id: "art-5",
        number: "5",
        title: "Informații din oficiu",
        officialText:
          "Fiecare autoritate sau instituție publică are obligația să comunice din oficiu informații precum: actele de organizare, structura, conducerea, contactele, bugetul și bilanțul, programele și strategiile, liste de documente de interes public, modalitățile de contestare. Publică și actualizează anual un buletin informativ; autoritățile publice dau publicității un raport periodic de activitate.",
        plainLanguage:
          "Unele chestii trebuie publicate fără să întrebi: organigramă, buget, contacte, cum contesti. Dacă nu le găsești pe site, e deja un semnal; tot poți cere pe 544.",
      },
      {
        id: "art-6",
        number: "6",
        title: "Cererea de informații",
        officialText:
          "(1) Orice persoană are dreptul să solicite și să obțină de la autoritățile și instituțiile publice, în condițiile prezentei legi, informațiile de interes public. (2) Autoritățile și instituțiile publice sunt obligate să asigure persoanelor, la cererea acestora, informațiile de interes public solicitate în scris sau verbal. (3) Solicitarea în scris cuprinde: a) autoritatea sau instituția publică la care se adresează cererea; b) informația solicitată, astfel încât să permită identificarea informației de interes public; c) numele, prenumele și semnătura solicitantului, precum și adresa la care se solicită primirea răspunsului.",
        plainLanguage:
          "Oricine poate cere. În scris: cui îi scrii, ce vrei (clar), cine ești și unde să-ți răspundă. Asta e baza generatorului „Dă cu 544”.",
      },
      {
        id: "art-7",
        number: "7",
        title: "Termene de răspuns",
        officialText:
          "(1) Autoritățile și instituțiile publice au obligația să răspundă în scris la solicitarea informațiilor de interes public în termen de 10 zile sau, după caz, în cel mult 30 de zile de la înregistrarea solicitării, în funcție de dificultatea, complexitatea, volumul lucrărilor documentare și de urgența solicitării. În cazul în care durata necesară depășește 10 zile, răspunsul se comunică în maximum 30 de zile, cu înștiințare în scris în termen de 10 zile. (2) Refuzul comunicării informațiilor solicitate se motivează și se comunică în termen de 5 zile de la primirea petițiilor. (3) Solicitarea și obținerea se pot realiza și în format electronic, dacă sunt întrunite condițiile tehnice.",
        plainLanguage:
          "Răspuns: 10 zile, sau până la 30 dacă e greu (dar te anunță în 10). Refuz motivat: 5 zile. Poți cere și electronic dacă pot livra așa.",
      },
      {
        id: "art-12",
        number: "12",
        title: "Excepții de la acces",
        officialText:
          "(1) Se exceptează de la accesul liber: a) informații din apărare, siguranță și ordine publică, dacă sunt clasificate; b) deliberări și interese economice/politice clasificate; c) informații comerciale/financiare a căror publicitate aduce atingere concurenței loiale; d) date personale, potrivit legii; e) informații din anchete penale/disciplinare dacă periclitează rezultatul, sursele sau persoanele; f) proceduri judiciare dacă prejudiciază un proces echitabil; g) informații a căror publicare prejudiciază protecția tinerilor.",
        plainLanguage:
          "Nu tot e liber: secret de stat, date personale, anchete în curs, unele afaceri comerciale etc. Excepția trebuie să încapă în lege, nu în „nu vrem”.",
      },
      {
        id: "art-21",
        number: "21",
        title: "Reclamație administrativă",
        officialText:
          "(1) Refuzul explicit sau tacit al angajatului desemnat pentru aplicarea prezentei legi constituie abatere și atrage răspunderea disciplinară. (2) Împotriva refuzului se poate depune reclamație la conducătorul autorității sau instituției în termen de 30 de zile de la luarea la cunoștință. (3) Dacă reclamația e întemeiată, răspunsul se transmite în 15 zile și cuprinde informațiile cerute inițial și mențiunea sancțiunilor disciplinare.",
        plainLanguage:
          "Dacă ți se refuză pe tăcute sau pe față, poți reclama la șeful instituției în 30 de zile. Dacă ai dreptate, îți dau informația și notează sancțiunea.",
      },
      {
        id: "art-22",
        number: "22",
        title: "Plângere în contencios administrativ",
        officialText:
          "(1) Dacă o persoană se consideră vătămată în drepturile sale prevăzute de prezenta lege, poate face plângere la secția de contencios administrativ a tribunalului în a cărei rază domiciliază sau în a cărei rază se află sediul autorității. Plângerea se face în termen de 30 de zile de la expirarea termenului prevăzut la art. 7. (2) Instanța poate obliga instituția să furnizeze informațiile și să plătească daune. (5) Plângerea și apelul se judecă de urgență și sunt scutite de taxa de timbru.",
        plainLanguage:
          "După ce expiră termenele de la art. 7, ai 30 de zile să te duci la tribunal (contencios). Procedură de urgență, fără taxă de timbru pe plângere/apel.",
      },
    ],
    changes: [],
    dependencies: [
      "Normele metodologice de aplicare a Legii 544/2001 (HG)",
      "Constituția României",
    ],
    confidence: {
      score: 72,
      explicitText: true,
      applicableNorms: true,
      bindingDecision: false,
      unevenPractice: true,
      recentChange: false,
    },
    sources: [
      {
        id: "src-544-just",
        title:
          "LEGE nr. 544 din 12 octombrie 2001 · Portal Legislativ",
        publisher: "Ministerul Justiției · legislatie.just.ro",
        url: officialUrl,
        retrievedAt,
        sourceType: "official",
      },
      {
        id: "src-544-just-alt",
        title: "LEGE 544/2001 · DetaliiDocument",
        publisher: "Ministerul Justiției · legislatie.just.ro",
        url: "https://legislatie.just.ro/public/detaliidocument/31413",
        retrievedAt,
        sourceType: "official",
      },
    ],
  },
  {
    id: "law-52-2003",
    slug: "legea-52-2003-transparenta-decizionala",
    number: "52",
    year: 2003,
    title:
      "Legea 52/2003 privind transparența decizională în administrația publică (republicată)",
    status: "in-force",
    effectiveFrom: "2003-04-04",
    versions: [
      {
        id: "v-52-republicata",
        effectiveFrom: "2013-12-03",
        label: "Forma republicată (M. Of. 749/2013), cu modificări ulterioare",
        summary:
          "Autoritățile publice sunt obligate să anunțe public proiectele de acte normative, să primească propuneri de la cetățeni, să organizeze dezbateri la cerere și să raporteze anual cât au ascultat.",
        plainLanguage:
          "Înainte să devină lege, un proiect trebuie afișat public: pe site, la sediu, către presă. Poți trimite sugestii, poți cere dezbatere publică. Ignorarea recomandărilor trebuie justificată în scris. Verifică forma consolidată: legea a fost modificată inclusiv prin OUG 16/2022.",
        officialText:
          "Legea nr. 52/2003 privind transparența decizională în administrația publică, republicată în Monitorul Oficial nr. 749 din 3 decembrie 2013, în temeiul art. II din Legea nr. 281/2013. Forma inițială: Monitorul Oficial nr. 70 din 3 februarie 2003.",
      },
    ],
    articles: [
      {
        id: "art-1",
        number: "1",
        title: "Obiectul legii",
        officialText:
          "(1) Prezenta lege stabilește regulile procedurale minimale aplicabile pentru asigurarea transparenței decizionale în cadrul autorităților administrației publice centrale și locale, alese sau numite, precum și al altor instituții publice care utilizează resurse financiare publice, în raporturile stabilite între ele cu cetățenii și asociațiile legal constituite ale acestora.",
        plainLanguage:
          "Orice autoritate care cheltuie bani publici trebuie să ia decizii la vedere, nu în ședințe secrete cu PDF-ul gata semnat.",
      },
      {
        id: "art-7",
        number: "7",
        title: "Anunțarea proiectelor de acte normative",
        officialText:
          "(1) În cadrul procedurilor de elaborare a proiectelor de acte normative autoritatea administrației publice are obligația să publice un anunț referitor la această acțiune în site-ul propriu, să-l afișeze la sediul propriu, într-un spațiu accesibil publicului, și să-l transmită către mass-media centrală sau locală, după caz. (2) Anunțul referitor la elaborarea unui proiect de act normativ va fi adus la cunoștința publicului cu cel puțin 30 de zile lucrătoare înainte de supunerea spre avizare de către autoritățile publice.",
        plainLanguage:
          "Proiectul de lege se anunță public cu minimum 30 de zile lucrătoare înainte de avizare. Dacă apare pe site cu o zi înainte de adoptare, e o problemă de legalitate, nu de stil.",
      },
      {
        id: "art-12",
        number: "12",
        title: "Minute și justificarea respingerii recomandărilor",
        officialText:
          "(1) Autoritățile publice prevăzute la art. 4 sunt obligate să elaboreze și să arhiveze minutele ședințelor publice. Atunci când se consideră necesar, ședințele publice pot fi înregistrate. (3) Autoritățile administrației publice prevăzute la art. 4 sunt obligate să justifice în scris nepreluarea recomandărilor formulate și înaintate în scris de cetățeni și asociațiile legal constituite ale acestora.",
        plainLanguage:
          "Dacă trimiți o recomandare în scris și e ignorată, instituția trebuie să justifice în scris de ce. „Nu” e un răspuns; „nimic” nu e.",
      },
      {
        id: "art-13",
        number: "13",
        title: "Raportul anual de transparență",
        officialText:
          "(1) Autoritățile publice prevăzute la art. 4 sunt obligate să întocmească și să facă public un raport anual privind transparența decizională, care va cuprinde cel puțin: numărul total al recomandărilor primite; numărul total al recomandărilor incluse în proiectele de acte normative și în conținutul deciziilor luate; numărul participanților la ședințele publice; numărul dezbaterilor publice organizate; situația cazurilor în care autoritatea a fost acționată în justiție.",
        plainLanguage:
          "Instituția trebuie să publice anual cât a ascultat: câte recomandări a primit, câte a preluat, de câte ori a fost dată în judecată pe transparență. Cere raportul cu 544 dacă nu e pe site.",
      },
    ],
    changes: [],
    dependencies: [
      "Legea 281/2013 (republicare)",
      "OUG 16/2022 (modificări la procedura de consultare)",
      "Legea 544/2001 (acces la informații)",
    ],
    confidence: {
      score: 70,
      explicitText: true,
      applicableNorms: false,
      bindingDecision: false,
      unevenPractice: true,
      recentChange: false,
    },
    sources: [
      {
        id: "src-52-just-r",
        title: "LEGE (R) 52/2003 · Portal Legislativ (forma republicată)",
        publisher: "Ministerul Justiției · legislatie.just.ro",
        url: "https://legislatie.just.ro/Public/DetaliiDocument/153210",
        retrievedAt: "2026-08-10",
        sourceType: "official",
      },
      {
        id: "src-52-just-init",
        title: "LEGE 52/2003 · forma inițială",
        publisher: "Ministerul Justiției · legislatie.just.ro",
        url: "https://legislatie.just.ro/Public/DetaliiDocumentAfis/41571",
        retrievedAt: "2026-08-10",
        sourceType: "official",
      },
    ],
  },
  {
    id: "law-og-27-2002",
    slug: "og-27-2002-petitii",
    number: "27",
    year: 2002,
    title:
      "OG 27/2002 privind reglementarea activității de soluționare a petițiilor",
    status: "in-force",
    effectiveFrom: "2002-02-01",
    versions: [
      {
        id: "v-27-portal",
        effectiveFrom: "2002-02-01",
        label: "Text pe Portalul Legislativ (consultat, cu modificările din Legea 233/2002)",
        summary:
          "Orice cetățean sau organizație poate adresa petiții instituțiilor publice: cereri, reclamații, sesizări sau propuneri, inclusiv pe e-mail. Termen de răspuns: 30 de zile, prelungibil cu 15.",
        plainLanguage:
          "Petiția e ruda mai flexibilă a cererii 544: poți sesiza, reclama sau propune orice ține de instituție. Se poate trimite și pe e-mail, iar instituția e obligată să răspundă în 30 de zile.",
        officialText:
          "Ordonanța nr. 27 din 30 ianuarie 2002 privind reglementarea activității de soluționare a petițiilor, publicată în Monitorul Oficial nr. 84 din 1 februarie 2002, aprobată cu modificări prin Legea nr. 233/2002.",
      },
    ],
    articles: [
      {
        id: "art-1",
        number: "1",
        title: "Dreptul de petiționare",
        officialText:
          "(1) Prezenta ordonanță are ca obiect reglementarea modului de exercitare de către cetățeni a dreptului de a adresa autorităților și instituțiilor publice petiții formulate în nume propriu, precum și modul de soluționare a acestora. (2) Dreptul de petiționare este recunoscut și organizațiilor legal constituite, acestea putând formula petiții în numele colectivelor pe care le reprezintă.",
        plainLanguage:
          "Poți petiționa în nume propriu; ONG-urile pot petiționa pentru membrii lor. E drept constituțional (art. 51), nu favoare.",
      },
      {
        id: "art-2",
        number: "2",
        title: "Ce e o petiție",
        officialText:
          "În sensul prezentei ordonanțe, prin petiție se înțelege cererea, reclamația, sesizarea sau propunerea formulată în scris ori prin poștă electronică, pe care un cetățean sau o organizație legal constituită o poate adresa autorităților și instituțiilor publice centrale și locale, serviciilor publice descentralizate ale ministerelor și ale celorlalte organe centrale, companiilor și societăților naționale, societăților comerciale de interes județean sau local, precum și regiilor autonome.",
        plainLanguage:
          "Petiție = cerere, reclamație, sesizare sau propunere. Pe hârtie sau pe e-mail. Se aplică și companiilor de stat, nu doar ministerelor.",
      },
      {
        id: "art-7",
        number: "7",
        title: "Petițiile anonime",
        officialText:
          "Petițiile anonime sau cele în care nu sunt trecute datele de identificare a petiționarului nu se iau în considerare și se clasează, potrivit prezentei ordonanțe.",
        plainLanguage:
          "Fără nume și date de contact, petiția se clasează. Semnează ce trimiți; anonimatul se rezolvă prin alte canale (avertizori de integritate).",
      },
      {
        id: "art-8",
        number: "8",
        title: "Termenul de răspuns",
        officialText:
          "(1) Autoritățile și instituțiile publice sesizate au obligația să comunice petiționarului, în termen de 30 de zile de la data înregistrării petiției, răspunsul, indiferent dacă soluția este favorabilă sau nefavorabilă.",
        plainLanguage:
          "30 de zile pentru un răspuns, chiar dacă răspunsul e „nu”. Tăcerea nu e o opțiune legală.",
      },
      {
        id: "art-9",
        number: "9",
        title: "Prelungirea termenului",
        officialText:
          "În situația în care aspectele sesizate prin petiție necesită o cercetare mai amănunțită, conducătorul autorității sau instituției publice poate prelungi termenul prevăzut la art. 8 cu cel mult 15 zile.",
        plainLanguage:
          "Maximum 45 de zile în total, și doar dacă e chiar complicat. Nu e termen de gândire, e termen de cercetare.",
      },
    ],
    changes: [],
    dependencies: [
      "Constituția României, art. 51 (dreptul de petiționare)",
      "Legea 233/2002 (aprobare cu modificări)",
    ],
    confidence: {
      score: 74,
      explicitText: true,
      applicableNorms: false,
      bindingDecision: false,
      unevenPractice: true,
      recentChange: false,
    },
    sources: [
      {
        id: "src-27-just",
        title: "ORDONANȚĂ (A) 27/2002 · Portal Legislativ",
        publisher: "Ministerul Justiției · legislatie.just.ro",
        url: "https://legislatie.just.ro/Public/DetaliiDocument/35034",
        retrievedAt: "2026-08-10",
        sourceType: "official",
      },
      {
        id: "src-27-just-alt",
        title: "OG 27/2002 · DetaliiDocument",
        publisher: "Ministerul Justiției · legislatie.just.ro",
        url: "https://legislatie.just.ro/public/DetaliiDocument/33817",
        retrievedAt: "2026-08-10",
        sourceType: "official",
      },
    ],
  },
  {
    id: "law-oug-41-2016",
    slug: "oug-41-2016-simplificare",
    number: "41",
    year: 2016,
    title:
      "OUG 41/2016 privind măsuri de simplificare la nivelul administrației publice",
    status: "in-force",
    effectiveFrom: "2016-06-30",
    versions: [
      {
        id: "v-41-portal",
        effectiveFrom: "2016-06-30",
        label:
          "Text pe Portalul Legislativ (consultat, cu modificările din Legea 9/2023)",
        summary:
          "Instituțiile nu mai au voie să ceară copii legalizate, trebuie să accepte copia CI pe e-mail și documentele cu semnătură electronică, și trebuie să publice formularele în format editabil.",
        plainLanguage:
          "Legea anti-dosar-cu-șină: copiile legalizate sunt interzise ca cerință, formularele trebuie să fie descărcabile și editabile, iar din 2023 regulile s-au extins explicit și la administrația locală. Dacă un ghișeu tot îți cere copie legalizată, are o problemă cu legea, nu tu.",
        officialText:
          "Ordonanța de urgență nr. 41 din 28 iunie 2016, publicată în Monitorul Oficial nr. 490 din 30 iunie 2016, aprobată cu modificări prin Legea nr. 179/2017, modificată și completată prin Legea nr. 267/2021 și Legea nr. 9/2023 (titlu extins la administrația publică locală).",
      },
    ],
    articles: [
      {
        id: "art-1",
        number: "1",
        title: "Formulare publicate electronic",
        officialText:
          "(1) Instituțiile publice și organele de specialitate ale administrației publice centrale și locale [...] au obligația de a publica, din oficiu, informații și modele de formulare sau cereri aferente tuturor serviciilor publice furnizate, în format electronic, atât pe pagina de internet proprie, cât și pe punctul de contact unic electronic, în varianta actualizată și într-un format tehnic care să permită descărcarea și editarea lor în scopul completării în format electronic de către beneficiar.",
        plainLanguage:
          "Formularul trebuie să fie pe site, actualizat, descărcabil și editabil pe calculator. PDF scanat strâmb cu ștampilă nu e „format tehnic care permite editarea”.",
      },
      {
        id: "art-2",
        number: "2",
        title: "Copia CI pe e-mail · fără copii legalizate",
        officialText:
          "(1) [Instituțiile] care solicită copia în format fizic pe hârtie după actul de identitate drept condiție pentru furnizarea unui serviciu public sunt obligate să accepte copia în format electronic după cartea de identitate, transmisă prin e-mail. (3) Fiecare instituție [...] este obligată să elimine cerința de depunere a copiilor legalizate după documente la furnizarea serviciilor publice, înlocuindu-le cu certificarea conformității cu originalul de către funcționarul competent.",
        plainLanguage:
          "Copia buletinului merge pe e-mail. Copiile legalizate la notar nu mai pot fi cerute: funcționarul confruntă cu originalul și certifică singur conformitatea.",
      },
      {
        id: "art-2-1",
        number: "2^1",
        title: "Once-only: nu se cer documente emise de alt ghișeu al statului",
        officialText:
          "(1) Se interzice instituțiilor publice, organelor de specialitate ale administrației publice centrale și locale, precum și persoanelor juridice de drept privat care [...] prestează un serviciu public, în regim de putere publică, să solicite persoanelor fizice sau persoanelor juridice, în vederea soluționării cererilor pentru furnizarea unui serviciu public, copii de pe avize sau alte documente care au fost emise de către alte instituții publice [...].",
        plainLanguage:
          "Statul nu are voie să te pună curier între instituțiile lui: documentele emise de o instituție publică nu pot fi cerute de la tine de o altă instituție publică. Principiul once-only, în lege din 2021.",
      },
      {
        id: "art-3",
        number: "3",
        title: "Documente cu semnătură electronică",
        officialText:
          "Instituțiile publice [...] sunt obligate să accepte documentele eliberate de către persoanele juridice de drept public sau de drept privat în format electronic, care au o semnătură electronică calificată sau avansată, definite potrivit prevederilor art. 3 pct. 11 și 12 din Regulamentul (UE) nr. 910/2014, în scopul furnizării serviciilor publice către beneficiar.",
        plainLanguage:
          "Documentul semnat electronic calificat e valid. „Nu-l putem primi decât cu ștampilă în original” contrazice și legea românească, și regulamentul european eIDAS.",
      },
    ],
    changes: [],
    dependencies: [
      "Legea 179/2017 (aprobare cu modificări)",
      "Legea 267/2021 (once-only, art. 2^1)",
      "Legea 9/2023 (extindere la administrația locală)",
      "Regulamentul (UE) 910/2014 · eIDAS",
    ],
    confidence: {
      score: 68,
      explicitText: true,
      applicableNorms: false,
      bindingDecision: false,
      unevenPractice: true,
      recentChange: true,
    },
    sources: [
      {
        id: "src-41-just",
        title: "OUG 41/2016 · Portal Legislativ",
        publisher: "Ministerul Justiției · legislatie.just.ro",
        url: "https://legislatie.just.ro/Public/DetaliiDocumentAfis/179586",
        retrievedAt: "2026-08-10",
        sourceType: "official",
      },
      {
        id: "src-41-cdep",
        title: "OUG 41/2016 · fișă act · Camera Deputaților",
        publisher: "Camera Deputaților · cdep.ro",
        url: "https://www.cdep.ro/ords/pls/legis/legis_pck.htp_act?ida=137863",
        retrievedAt: "2026-08-10",
        sourceType: "official",
      },
    ],
  },
  {
    id: "law-190-2018",
    slug: "legea-190-2018-gdpr",
    number: "190",
    year: 2018,
    title:
      "Legea 190/2018 privind măsuri de punere în aplicare a Regulamentului (UE) 2016/679 (GDPR)",
    status: "in-force",
    effectiveFrom: "2018-07-31",
    versions: [
      {
        id: "v-190-portal",
        effectiveFrom: "2018-07-31",
        label: "Text pe Portalul Legislativ (consultat)",
        summary:
          "Legea de aplicare a GDPR în România: definește autoritățile publice, numărul de identificare național (CNP & co.), reguli pentru date în relațiile de muncă și un regim de sancțiuni derogatoriu, mai blând, pentru autoritățile publice.",
        plainLanguage:
          "GDPR se aplică direct, dar România a adăugat reguli locale: CNP-ul e „număr de identificare național” cu garanții suplimentare, iar autoritățile publice primesc amenzi plafonate la 200.000 lei, nu procent din cifra de afaceri ca firmele. Da, statul și-a scris singur o reducere.",
        officialText:
          "Legea nr. 190 din 18 iulie 2018, publicată în Monitorul Oficial nr. 651 din 26 iulie 2018, în vigoare de la 31 iulie 2018.",
      },
    ],
    articles: [
      {
        id: "art-2",
        number: "2",
        title: "Definiții: autorități publice și CNP",
        officialText:
          "a) autorități și organisme publice - Camera Deputaților și Senatul, Administrația Prezidențială, Guvernul, ministerele, celelalte organe de specialitate ale administrației publice centrale, autoritățile și instituțiile publice autonome, autoritățile administrației publice locale și de la nivel județean, alte autorități publice, precum și instituțiile din subordinea/coordonarea acestora. b) număr de identificare național - numărul prin care se identifică o persoană fizică în anumite sisteme de evidență și care are aplicabilitate generală, cum ar fi: codul numeric personal, seria și numărul actului de identitate, numărul pașaportului, al permisului de conducere, numărul de asigurare socială de sănătate.",
        plainLanguage:
          "CNP-ul, seria buletinului, numărul de pașaport: toate sunt „numere de identificare națională” cu protecție specială. Formularul care îți cere CNP-ul „ca să te caute mai ușor” are nevoie de temei, nu de obicei.",
      },
      {
        id: "art-14",
        number: "14",
        title: "Sancțiuni pentru autoritățile publice",
        officialText:
          "(5) Constituie contravenție încălcarea de către autoritățile/organismele publice a dispozițiilor din Regulamentul general privind protecția datelor referitoare la: principiile de bază pentru prelucrare, drepturile persoanelor vizate, transferurile de date [...]. (6) Prin derogare de la prevederile art. 8 alin. (2) lit. a) din Ordonanța Guvernului nr. 2/2001, contravențiile prevăzute la alin. (5) se sancționează cu amendă de la 10.000 lei până la 200.000 lei.",
        plainLanguage:
          "Când o firmă încalcă GDPR, riscă amenzi de milioane de euro. Când o autoritate publică face același lucru, plafonul e 200.000 lei. Asimetria e în lege, nu în imaginația noastră.",
      },
    ],
    changes: [],
    dependencies: [
      "Regulamentul (UE) 2016/679 (GDPR)",
      "Legea 102/2005 (ANSPDCP)",
      "OG 2/2001 (regimul contravențiilor)",
    ],
    confidence: {
      score: 72,
      explicitText: true,
      applicableNorms: true,
      bindingDecision: false,
      unevenPractice: true,
      recentChange: false,
    },
    sources: [
      {
        id: "src-190-just",
        title: "LEGE 190/2018 · Portal Legislativ",
        publisher: "Ministerul Justiției · legislatie.just.ro",
        url: "https://legislatie.just.ro/Public/DetaliiDocumentAfis/203151",
        retrievedAt: "2026-08-10",
        sourceType: "official",
      },
      {
        id: "src-190-anspdcp",
        title: "Legea 190/2018 · text integral (PDF, PCUe)",
        publisher: "edirect.e-guvernare.ro",
        url: "https://edirect.e-guvernare.ro/Uploads/Legi/35906/Lege%20190%202018.pdf",
        retrievedAt: "2026-08-10",
        sourceType: "official",
      },
    ],
  },
  {
    id: "law-98-2016",
    slug: "legea-98-2016-achizitii-publice",
    number: "98",
    year: 2016,
    title: "Legea 98/2016 privind achizițiile publice",
    status: "in-force",
    effectiveFrom: "2016-05-26",
    versions: [
      {
        id: "v-98-portal",
        effectiveFrom: "2016-05-26",
        label:
          "Text pe Portalul Legislativ (consultat; praguri actualizate prin Legea 208/2022)",
        summary:
          "Legea-mamă a achizițiilor publice: principii (transparență, tratament egal), proceduri de atribuire, praguri sub care statul poate cumpăra direct, obligații de publicare în SEAP.",
        plainLanguage:
          "Orice ban public cheltuit pe bunuri, servicii sau lucrări trece prin regulile astea. Sub anumite praguri, instituția cumpără direct, fără licitație: exact zona pe care merită s-o urmărești în SEAP. Pragurile se actualizează periodic: verifică forma consolidată și site-ul ANAP.",
        officialText:
          "Legea nr. 98 din 19 mai 2016 privind achizițiile publice, publicată în Monitorul Oficial nr. 390 din 23 mai 2016, în vigoare de la 26 mai 2016, cu numeroase modificări ulterioare (inclusiv Legea 208/2022).",
      },
    ],
    articles: [
      {
        id: "art-1",
        number: "1",
        title: "Obiectul legii",
        officialText:
          "Prezenta lege reglementează modul de realizare a achizițiilor publice, procedurile de atribuire a contractelor de achiziție publică și de organizare a concursurilor de soluții, instrumentele și tehnicile specifice care pot fi utilizate pentru atribuirea contractelor de achiziție publică, precum și anumite aspecte specifice în legătură cu executarea contractelor de achiziție publică.",
        plainLanguage:
          "Aici scrie cum are voie statul să cumpere. Tot ce vezi în SEAP funcționează (teoretic) după legea asta.",
      },
      {
        id: "art-2",
        number: "2",
        title: "Principiile achizițiilor publice",
        officialText:
          "(1) Scopul prezentei legi îl constituie asigurarea cadrului legal necesar pentru a realiza achiziționarea de bunuri, servicii și lucrări în condiții de eficiență economică și socială. (2) Principiile care stau la baza atribuirii contractelor de achiziție publică și a organizării concursurilor de soluții sunt: a) nediscriminarea; b) tratamentul egal; c) recunoașterea reciprocă; d) transparența; e) proporționalitatea; f) asumarea răspunderii.",
        plainLanguage:
          "Șase principii, toate încălcabile în practică, toate invocabile în contestație. „Transparența” e principiu legal, nu buzzword de conferință.",
      },
      {
        id: "art-7",
        number: "7",
        title: "Achiziția directă (praguri)",
        officialText:
          "(5) Autoritatea contractantă are dreptul de a achiziționa direct produse sau servicii în cazul în care valoarea estimată a achiziției, fără TVA, este mai mică de 270.120 lei, respectiv lucrări, în cazul în care valoarea estimată a achiziției, fără TVA, este mai mică de 900.400 lei. (7) În cazul achiziției directe, autoritatea contractantă are obligația de a utiliza catalogul electronic pus la dispoziție de SEAP sau de a publica un anunț într-o secțiune dedicată a website-ului propriu sau al SEAP.",
        plainLanguage:
          "Sub ~270.000 lei (produse/servicii) sau ~900.000 lei (lucrări), fără TVA, instituția cumpără direct. Legal. De-asta vezi contracte de 269.999 lei: fix sub prag. Pragurile din text sunt cele de la modificarea din 2022; verifică forma consolidată.",
      },
    ],
    changes: [],
    dependencies: [
      "Directiva 2014/24/UE",
      "HG 395/2016 (norme metodologice)",
      "Legea 208/2022 (praguri achiziție directă)",
      "Legea 99/2016, 100/2016, 101/2016 (pachetul achizițiilor)",
    ],
    confidence: {
      score: 66,
      explicitText: true,
      applicableNorms: true,
      bindingDecision: false,
      unevenPractice: true,
      recentChange: true,
    },
    sources: [
      {
        id: "src-98-just",
        title: "LEGE 98/2016 · Portal Legislativ",
        publisher: "Ministerul Justiției · legislatie.just.ro",
        url: "https://legislatie.just.ro/Public/DetaliiDocument/178667",
        retrievedAt: "2026-08-10",
        sourceType: "official",
      },
      {
        id: "src-98-anap",
        title: "Legea 98/2016 · versiuni consolidate · ANAP",
        publisher: "Agenția Națională pentru Achiziții Publice",
        url: "https://anap.gov.ro/ro/legea-nr-982016-privind-achizitiile-publice/",
        retrievedAt: "2026-08-10",
        sourceType: "official",
      },
    ],
  },
  {
    id: "law-oug-57-2019",
    slug: "oug-57-2019-codul-administrativ",
    number: "57",
    year: 2019,
    title: "OUG 57/2019 privind Codul administrativ",
    status: "in-force",
    effectiveFrom: "2019-07-05",
    demo: false,
    versions: [
      {
        id: "v-oug-57-portal",
        effectiveFrom: "2019-07-05",
        label: "Text pe Portalul Legislativ (consultat)",
        summary:
          "Codul administrativ fixează cadrul general pentru administrația publică, serviciile publice, actele administrative și publicitatea lor, inclusiv pe cale electronică.",
        plainLanguage:
          "Aici scrie cum e organizat statul local și central, ce e „serviciu public” și cum trebuie aduse la cunoștință actele. Nu e ghid de UX; e scheletul pe care se agață site-urile, e-mailurile oficiale și Monitorul Oficial Local.",
        officialText:
          "Ordonanța de urgență a Guvernului nr. 57 din 3 iulie 2019 privind Codul administrativ, publicată în Monitorul Oficial nr. 555 din 5 iulie 2019, cu modificările și completările ulterioare.",
      },
    ],
    articles: [
      {
        id: "art-1",
        number: "1",
        title: "Obiectul de reglementare",
        officialText:
          "(1) Prezentul cod reglementează cadrul general pentru organizarea și funcționarea autorităților și instituțiilor administrației publice, statutul personalului din cadrul acestora, răspunderea administrativă, serviciile publice, precum și unele reguli specifice privind proprietatea publică și privată a statului și a unităților administrativ-teritoriale. (2) Prezentul cod se completează cu Legea nr. 287/2009 privind Codul civil, republicată, cu modificările ulterioare, precum și cu alte reglementări de drept comun aplicabile în materie.",
        plainLanguage:
          "Codul acoperă organizarea administrației, oamenii din ea, răspunderea, serviciile publice și ceva despre proprietatea publică. Restul se completează cu Codul civil și legi speciale.",
      },
      {
        id: "art-5",
        number: "5",
        title: "Definiții generale (serviciul public)",
        officialText:
          "În înțelesul prezentului cod, termenii și expresiile de mai jos au următoarele semnificații: […] kk) serviciul public - activitatea sau ansamblul de activități organizate de o autoritate a administrației publice ori de o instituție publică sau autorizată/autorizate ori delegată de aceasta, în scopul satisfacerii unei nevoi cu caracter general sau a unui interes public, în mod regulat și continuu;",
        plainLanguage:
          "„Serviciu public” nu înseamnă „avem un site”. Înseamnă activitate organizată de o autoritate (sau delegată de ea) ca să acopere o nevoie generală, regulat și continuu. Dacă dispare weekend-ul, nu e serviciu public; e hobby.",
      },
      {
        id: "art-96",
        number: "96",
        title: "Personalitatea juridică · poșta electronică oficială",
        officialText:
          "(4) Unitățile administrativ-teritoriale, în relațiile cu alte autorități și instituții publice, persoane fizice sau persoane juridice, pot utiliza poșta electronică, ca instrument de comunicare oficială. (5) Adresa oficială de poștă electronică a fiecărei unități administrativ-teritoriale se stabilește conform prevederilor legale în vigoare.",
        plainLanguage:
          "Primăria poate vorbi oficial pe e-mail. Adresa oficială nu e inventată pe Facebook; se stabilește după regulile în vigoare. Dacă nu răspund pe canalul ăla, e problemă de practică, nu de lipsă de temei.",
      },
      {
        id: "art-197",
        number: "197",
        title: "Comunicarea actelor · Monitorul Oficial Local",
        officialText:
          "(4) Hotărârile și dispozițiile se aduc la cunoștința publică și se comunică, în condițiile legii, prin grija secretarului general al unității/subdiviziunii administrativ-teritoriale. (5) Hotărârile și dispozițiile, documentele și informațiile financiare, precum și alte documente prevăzute de lege se publică, pentru informare, în format electronic și în monitorul oficial local care se organizează potrivit procedurii prevăzute în anexa nr. 1.",
        plainLanguage:
          "Actele locale nu stau în sertar: se aduc la cunoștință publică, iar o parte se publică electronic și în Monitorul Oficial Local. Dacă pe site lipsește tot, Codul ăsta e prima treaptă pe care o calci.",
      },
      {
        id: "art-198",
        number: "198",
        title: "Actele administrative cu caracter normativ",
        officialText:
          "(1) Hotărârile și dispozițiile cu caracter normativ devin obligatorii de la data aducerii lor la cunoștință publică. (2) Aducerea la cunoștință publică a hotărârilor și a dispozițiilor cu caracter normativ se face în termen de 5 zile de la data comunicării oficiale către prefect.",
        plainLanguage:
          "Hotărârea locală nu e lege secretă: e obligatorie de când e făcută publică, iar publicarea are termen de 5 zile după comunicarea către prefect. „Nu am apucat să o punem pe site” nu e scuză elegantă.",
      },
    ],
    changes: [],
    dependencies: [
      "Constituția României",
      "Legea 544/2001 (acces informații)",
      "Legea 52/2003 (transparență decizională)",
    ],
    confidence: {
      score: 70,
      explicitText: true,
      applicableNorms: true,
      bindingDecision: false,
      unevenPractice: true,
      recentChange: true,
    },
    sources: [
      {
        id: "src-oug-57-just",
        title: "OUG 57/2019 · Codul administrativ · Portal Legislativ",
        publisher: "Ministerul Justiției · legislatie.just.ro",
        url: "https://legislatie.just.ro/Public/DetaliiDocument/215925",
        retrievedAt: "2026-08-10",
        sourceType: "official",
      },
      {
        id: "src-oug-57-mo",
        title: "Monitorul Oficial nr. 555 / 5 iulie 2019",
        publisher: "Monitorul Oficial al României",
        url: "https://monitoruloficial.ro/",
        retrievedAt: "2026-08-10",
        sourceType: "official",
      },
    ],
  },
];
