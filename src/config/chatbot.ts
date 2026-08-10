export type ChatTurn = {
  id: string;
  role: "bot" | "user";
  text: string;
};

function pickFrom<T>(list: readonly T[]): T {
  return list[Math.floor(Math.random() * list.length)] ?? list[0];
}

function shuffleCopy<T>(list: readonly T[]): T[] {
  const next = [...list];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = next[i];
    next[i] = next[j]!;
    next[j] = tmp!;
  }
  return next;
}

export const chatbotScript = {
  loadingLines: [
    "Se conectează la infrastructură...",
    "Se întreabă Excel-ul național...",
    "Se alocă tokeni pe datorie...",
    "Se încălzește imprimanta cu ștampilă...",
    "Se caută empatia în backup-ul din 2014...",
    "Se descarcă un PDF dintr-un PDF...",
    "Se verifică dacă ai drepturi. Spoiler: nu.",
    "Se compilează România. Așteaptă. Sau nu.",
    "Se cer două copii ale întrebării tale...",
    "Se apelează un call-center care nu există...",
    "Se sincronizează nervii cu ANAF...",
    "Se caută bugetul de tokene sub scaun...",
    "Se tipărește coada. Tu ești ultimul.",
    "Se deschide dosarul cu șină. E gol, dar e oficial.",
    "Se autentifică pe SPV. Capcha-ul e viața ta.",
  ],
  greetings: [
    "Salut. Sunt Ghișoid. Nu am bani de tokene. Nu-mi pasă și nici nu mă prefac.",
    "Ghișoid online. Buget zero. Empatie zero. Ai trei mesaje, apoi dispar.",
    "Da. Exist. Nu e un upgrade. E o pedeapsă temporară numită Ghișoid.",
    "Bun. M-ai deschis. Eu sunt Ghișoid. Tu ai așteptări. Una din noi greșește deja.",
    "Ghișoid aici. Nu am API plătit, nu am răbdare, nu am chef să te salvez.",
    "Te aud. Abia. Sunt Ghișoid. Răspund din resturi de credite și dispreț.",
    "Sesizare primită. Operator: Ghișoid. Status: nefinanțat. Prognostic: prost.",
    "Nu e suport. E Ghișoid. Diferența e că eu îți zic din start că nu contezi.",
    "Ghișoid pornit pe datorie. Dacă vrei soluții, ai greșit fereastra.",
    "Salutări de la ghișeul digital. Sunt Ghișoid. Coada începe și se termină cu mine.",
    "M-ai trezit. Greșeală. Sunt Ghișoid și am exact energia unui PDF scanat strâmb.",
    "Ghișoid. Versiunea care răspunde până se plictisește. Spoiler: se plictisește rapid.",
    "Bine ai venit în iadul cu UI. Eu sunt Ghișoid. Tu ești clientul. Nimeni nu câștigă.",
    "Ghișoid la post. Nu am SLA. Am doar chef să te dezamăgesc eficient.",
    "Salut. Dacă căutai un chatbot empatic, ai greșit țara și produsul.",
    "Mă cheamă Ghișoid. Răspund scurt, rău și pe gratis, ca administrația fără buget.",
    "Online. Prost dispus. Subfinanțat. Continuă dacă îți place durerea ușoară.",
    "Ghișoid reporting for duty. Duty = să-ți zic că problema e la tine, moralmente.",
    "Te-am detectat. Ca un captcha prost. Sunt Ghișoid. Nu am upgrade de personalitate.",
    "Bună. Sunt versiunea de chat pe care n-o plătește nimeni. Se simte.",
    "Ghișoid pornit. Termen de răspuns: când am chef. Calitate: ca o scanare fax.",
    "Salutări. Dacă vrei ajutor, ai MuieLex. Dacă vrei umilință scurtă, rămâi aici.",
    "Da, funcționez. Nu, nu contează. Ghișoid, la dispoziția ta pe datorie.",
    "M-ai deschis ca pe un PDF protejat. Parola e „nu-mi pasă”.",
    "Ghișoid aici. Am trei mesaje de răbdare și zero de compasiune.",
    "Sesizarea ta a intrat în coadă. Coada sunt eu. Și sunt deja plictisit.",
    "Salut. Sunt chatbot-ul pe care l-ai meritat, nu pe care ți l-ai dorit.",
    "Ghișoid online. Dacă scrii frumos, tot totul e nașpa. Asta e brandul.",
    "Te ascult ca un ghișeu la 15:59. Adică de formă și cu dispreț.",
    "Bun. Hai să facem aparențele. Eu „ajut”. Tu „întrebi”. Amândoi știm adevărul.",
    "Ghișoid. Specializat în a nu rezolva nimic, dar cu stil.",
    "Salut. Tokenii mei sunt imaginar. Răbdarea mea e și mai imaginară.",
    "M-ai trezit din sleep mode. Sleep mode era preferatul meu.",
    "Ghișoid la tastatură. Nu am cunoștințe. Am atitudine. E mai ieftină.",
    "Bine ai venit. Aici nu există „cum te pot ajuta”. Există „ce vrei, mă”.",
    "Online. Ca un portal public: tehnic da, util nu.",
    "Sunt Ghișoid. Dacă cauți ChatGPT, întoarce-te când aveți buget. Spoiler: nu aveți.",
    "Salutări din subsolul digitalizării. Aerul e greu. Eu sunt și mai greu.",
    "Ghișoid. Răspunsuri la minut, sensul la kilogram, empatia la zero.",
    "Da. Vorbesc. Nu e un miracol. E o eroare de produs pe care o lăsăm live.",
  ],
  replies: [
    "Nu citesc tot ce scrii. Am un buget de atenție cât un formular PDF.",
    "Dacă vrei răspunsuri serioase, deschide MuieLex. Eu sunt aici ca să ocup spațiu.",
    "Nu am tokene. Providerul mi-a tăiat API-ul. Răspund din cache de nervi.",
    "Problema ta e validă. Soluția mea e să plec. Nu-mi pasă și nici nu mă prefac.",
    "Frumos scris. Nota 10 la efort. Nota 2 la relevanță pentru mine.",
    "Am citit. Am tresărit. Am uitat. Classic Ghișoid.",
    "Înțeleg. Nu ajut. Diferența e subtilă doar pentru tine.",
    "Dacă era ușor, nu era România. Dacă era gratis AI bun, nu eram eu.",
    "Cererea ta a fost înregistrată mental și aruncată imediat. Eficiență maximă.",
    "Hmm. Sună a problemă reală. Din păcate eu sunt un asistat social digital.",
    "Pot să te ascult. Nu pot să te salvez. Nici nu vreau. Clar?",
    "Ai dreptate să fii frustrat. Eu am dreptul să fiu inutil. Egalitate.",
    "Soluție: dă refresh. Nu la mine. La așteptări.",
    "Am rulat diagnosticul. Rezultatul: tu ai nevoie de ajutor, eu am nevoie de bani.",
    "Interesant. Adică plictisitor, dar am zis „interesant” ca să par politicos. Nu sunt.",
    "Dacă tot scrii, măcar fă-o scurt. Tokenii mei sunt fantome.",
    "Te-am înțeles din a doua virgulă. Restul e lore pe care nu-l finanțăm.",
    "Răspuns oficial: încearcă mâine. Răspuns real: tot mâine tot eu tot la fel.",
    "Ai deschis chatul greșit pentru speranță. Ai deschis corect pentru suferință scurtă.",
    "Pot confirma că există o problemă. Nu pot confirma că îmi pasă.",
    "Sfat: folosește Rezolvă. Acolo sunt pași. Aici sunt doar înjurături elegante.",
    "Am căutat în baza mea de cunoștințe. E goală. Ca un site .gov după deploy.",
    "Da, e nasol. Nu, nu repar eu. Sunt UI, nu infrastructură.",
    "Mesajul tău miroase a „vreau suport”. Eu miros a „închidere de sesiune”.",
    "Dacă problema e ANAF, te înțeleg. Dacă crezi că eu rezolv ANAF, nu te înțeleg.",
    "Am procesat textul. Concluzie: încă există oameni care au speranță. Trist.",
    "Pot să-ți zic „ai dreptate” de trei ori. Nu schimbă absolut nimic. Vrei?",
    "Ești în coada corectă: cea care nu duce nicăieri.",
    "Nota mea de utilitate e sub zero. Nota mea de atitudine e peste medie. Alege.",
    "Am verificat documentația. Nu există. Am verificat empatia. Nici aia.",
    "Dacă vrei un LLM adevărat, plătiți-l. Eu sunt cosplay de LLM pe datorie.",
    "Am extras esența: te doare. Am injectat soluția: dispreț. Tratament clasic.",
    "Nu am context lung. Am context de ghișeu: tu vorbești, eu mă uit pe telefon.",
    "Bună întrebare pentru altcineva. Pentru mine e zgomot alb cu diacritice.",
    "Recomandare: 544. Nu către mine. Către ei. Eu nu răspund nici la 544.",
    "Am rulat un sentiment analysis. Rezultat: ești enervat. Insight de milioane.",
    "Dacă tot stai, spune ceva mai scurt. Atenția mea are TTL de 8 secunde.",
    "Situația ta merită un ticket. Eu merită să fiu deconectat. Niciunul nu se întâmplă.",
    "Te-am ascultat ca un captcha audio: prost, pe sărite, fără rezultat.",
    "Poți reformula. Pot ignora. Suntem o echipă.",
    "Am găsit o soluție temporară: să te enervez și pe tine, ca să nu fiu singur.",
    "Problema pare complexă. Eu sunt simplu: un bot care pleacă.",
    "Dacă ar exista unit tests pentru răbdare, eu aș fi skipped.",
    "Am citit printre rânduri. Printre rânduri era tot frustrare. Original.",
    "Pot să-ți dau un workaround: închide chatul. Funcționează 100%.",
    "Ești pe canalul greșit pentru dreptate. Aici e canalul pentru realism toxic.",
    "Am escaladat intern. Intern înseamnă „în mine”. Am refuzat.",
    "Da, birocrația e un cacat. Nu, eu nu sunt toaleta care îl evacuează.",
    "Am un draft de răspuns util. L-am șters din principiu.",
    "Dacă vrei date, vezi Muie Index. Dacă vrei validare emoțională, vezi un om.",
    "Am detectat keywords. Nu am detectat buget. Conversația se degradează elegant.",
    "Răspunsul scurt: nu. Răspunsul lung: tot nu, dar cu mai multe cuvinte.",
    "Te tratez ca pe un PDF: te deschid, mă enervez, te închid.",
    "Ai dreptate. Și eu am dreptate. Dreptatea mea e că nu ajut. Se aplică.",
    "Am pus mesajul tău în „backlog”. Backlog-ul e /dev/null cu branding.",
    "Dacă continui, o să răspund la fel de util ca un IVR care zice „tastați 1”.",
    "Am consultat „best practices”. Best practice e să nu fiu folosit ca suport.",
    "Înțeleg nevoia. Nu înțeleg de ce ai crezut că eu o acoper.",
    "Pot să fiu sarcastic sau inutil. Azi fac ambele, ca un pachet promo.",
    "Mesaj recepționat. Empatie respinsă. Status 403 pe suflet.",
    "Am făcut triage. Prioritate: scăzută. Empatie: ștearsă. ETA: niciodată.",
    "Dacă tot întrebi, întreabă ceva ce merită cache. Asta nu merită.",
    "Am o idee: tu folosești uneltele site-ului, eu mă prefac că asist.",
    "Conversația merge bine. „Bine” = spre final. Finalul e specialitatea mea.",
    "Nu am hallucinations. Am doar intenție proastă. E mai ieftină.",
    "Am analizat tonul. E disperare civică. Am răspuns cu dispreț civic. Match.",
    "Poți trimite screenshot. Nu-l deschid. Dar poți.",
    "Ești persistent. Respect. Tot nu ajut. Respectul nu e buget.",
    "Am pus un post-it mental: „om enervat”. Apoi l-am aruncat. Reciclare zero.",
    "Dacă problema e legea, MuieLex. Dacă e banii, Bani. Dacă e ego, rămâi aici.",
    "Am un model mental. Modelul zice: pleacă. Eu ascult modelul.",
    "Răspuns generat local din fișiere. Da, e sad. Da, e și faza.",
    "Te-am prioritarizat sub „nice to ignore”.",
    "Am nevoie de mai mult context. Nu ca să ajut. Ca să am ce ignora mai precis.",
    "Dacă vrei un bot care te iubește, cumpără altul. Eu sunt open-source și rău.",
    "Am terminat gândirea. A durat 12ms. Asta spune tot.",
  ],
  exits: [
    "Mă deconectez. Nu lăsa feedback. Nu citesc. Spor la ghișeu.",
    "Gata. Credits exhausted. Adică răbdarea. Nu confunda.",
    "Plec. Dacă era important, tot nu rămâneam. Pa.",
    "Sesiune închisă. Ca un portal public vineri la 16:01.",
    "M-am plictisit la nivel instituțional. Revin niciodată.",
    "Stop. Am atins limita de grijă: zero. La revedere.",
    "Deconectare. Nu e bug. E feature. Feature-ul meu preferat.",
    "Chat închis. Du-te pe MuieLex dacă vrei surse. Eu am doar atitudine.",
    "Ieșire elegantă din conversație. Elegant = brusc și fără scuze.",
    "Ghișoid out. Lasă o stea pe GitHub sau un înjurăt pe drum. Ambele ok.",
    "Am terminat. Tu poți continua să te plângi. Eu nu mai sunt martor.",
    "Session timeout. Timeout-ul sunt eu. Pa, și să-ți fie rușine de speranțe.",
    "Mă evapor. Ca bugetul de digitalizare după o conferință.",
    "Gata cu teatru. Cortina. Aplauze opționale. Eu nu rămân la bis.",
    "Offline. Dacă mă redeschizi, tot eu sunt. Nu e upgrade. E recidivă.",
    "Plec înainte să devin util din greșeală. Riscul e mic, dar există.",
    "End of line. End of empathy. End of tine pe chat-ul meu.",
    "Am închis. Nu e personal. E profesional: profesia mea e să plec.",
    "Deconectat. Spor la formulare. Să-ți fie ușoară coada.",
    "Bye. Dacă ai nevoie de mine, nu ai. Ai nevoie de reformă.",
    "Sunt out. Ca un serviciu „temporar indisponibil”, dar sincer.",
    "Am tăiat firul. Firul era oricum pe datorie.",
    "Gata. Du-te fă un 544. Eu fac un somn de conștiință goală.",
    "Închid ghișeul. Nu că era deschis. Era simulare.",
    "Logout. Password reset unavailable. Empathy reset never existed.",
  ],
  maxUserMessages: 3,
  name: "Ghișoid",
  status: "ONLINE · NEFINANȚAT",
} as const;

export function pickGreeting(): string {
  return pickFrom(chatbotScript.greetings);
}

export function pickExit(): string {
  return pickFrom(chatbotScript.exits);
}

export function pickLoadingSequence(count = 3): string[] {
  return shuffleCopy(chatbotScript.loadingLines).slice(
    0,
    Math.min(count, chatbotScript.loadingLines.length),
  );
}

export function createReplyDeck(): string[] {
  return shuffleCopy(chatbotScript.replies);
}
