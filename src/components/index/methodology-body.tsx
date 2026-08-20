import { brandCopy } from "@/config/copy";

const layers = [
  {
    title: "1. Frecare estimată",
    tone: "border-warning/40 bg-warning/5",
    items: [
      "Coadă, Cădere, Ghișeu, Izolare, Opacitate, Barieră: toate 0-100, toate în aceeași direcție. Mai mult = mai rău pentru cetățean.",
      "Reflectă frustrări comune, nu eșantion statistic. Badge obligatoriu: ESTIMARE UTILIZATORI.",
      "Totalul iese din status + dimensiuni + bump-uri plafonate (incident, probă). Nu se mai scrie de mână.",
    ],
  },
  {
    title: "2. Probe și Lighthouse",
    tone: "border-success/40 bg-success/5",
    items: [
      "Probă HTTP zilnică: status, latență, verdict. GitHub Actions, commit public.",
      "Snapshot Lighthouse (performance, accessibility) e ajustare, nu scorul Index. Badge pe profil.",
      "Provenance: tool, versiune, URL, dată. Fără SaaS de monitorizare.",
    ],
  },
  {
    title: "3. Măsurătoare (viitor)",
    tone: "border-border",
    items: [
      "Probe mai dese decât o dată pe zi",
      "Core Web Vitals pe program",
      "Accesibilitate manuală (WCAG, tastatură, contrast)",
      "Interoperabilitate + once-only + provenance",
      "Scor `measured` doar când metodologia e completă",
    ],
  },
] as const;

const dimensions = [
  [
    "Coadă",
    "Formulare, sesiuni, click-uri, PDF. Cât de greu e să termini treaba.",
  ],
  [
    "Cădere",
    "Instabilitate. Semnal din probe HTTP și incidente documentate, nu vanity uptime.",
  ],
  [
    "Ghișeu",
    "Prezență fizică, print, ștampilă. Digitalizare care se oprește la ușa biroului.",
  ],
  ["Izolare", "Fără interop. Aceleași date cerute de trei ori."],
  [
    "Opacitate",
    "Fără documentație, fără provenance, fără drept la replică.",
  ],
  [
    "Barieră",
    "Accesibilitate. Lighthouse a11y unde există, altfel estimare.",
  ],
] as const;

export function MethodologyBody() {
  return (
    <div className="space-y-8">
      <p className="max-w-2xl text-muted">
        M.U.I.E. e {brandCopy.acronym}. Indicele e de frecare: 100 e ghișeul
        etern, 0 e timpul înapoi. Trei straturi. Nu le amesteca.
      </p>
      {layers.map((layer) => (
        <section key={layer.title} className={`border p-5 ${layer.tone}`}>
          <h3 className="font-display text-xl uppercase">{layer.title}</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {layer.items.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>
      ))}
      {dimensions.map(([title, body]) => (
        <section key={title} className="border border-border p-5">
          <h3 className="font-display text-xl uppercase">{title}</h3>
          <p className="mt-3 text-sm text-muted">{body}</p>
        </section>
      ))}
    </div>
  );
}
