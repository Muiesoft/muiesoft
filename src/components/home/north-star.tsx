import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Section,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/section";

export function NorthStar() {
  return (
    <Section className="bg-surface">
      <SectionLabel>METRICĂ</SectionLabel>
      <SectionHeading>Ore de viață recuperate românilor</SectionHeading>
      <p className="mt-6 max-w-2xl text-lg text-muted">
        Ținta nu e follower count. E timp scos din birocrație: drumuri, formulare,
        click-uri, date cerute de două ori.
      </p>
      <div className="mt-4">
        <Badge variant="planned">ÎNCĂ ZERO, PE BUNE</Badge>
      </div>
      <ul className="mt-8 grid gap-2 text-sm text-muted md:grid-cols-2">
        <li>drumuri la ghișeu eliminate</li>
        <li>formulare eliminate</li>
        <li>click-uri eliminate</li>
        <li>informații redundante eliminate</li>
        <li>proceduri documentate înainte / după</li>
        <li>timp economisit, în ore</li>
      </ul>
      <div className="mt-8 border border-border p-5">
        <p className="terminal-label">Formula publică</p>
        <pre className="mt-4 overflow-x-auto font-mono text-xs leading-relaxed text-muted whitespace-pre-wrap">
{`ore_recuperate = (1/60) × Σ_i [
  D_i × t_drum
  + F_i × t_formular
  + C_i × t_click
  + R_i × t_redundant
  + A_i × t_asteptare
]

Pentru fiecare intervenție i acceptată în registry:
  D_i = drumuri la ghișeu eliminate
       (persoane × drumuri pe persoană, pe an sau pe episod)
  F_i = formulare / pași de hârtie eliminate din flux
  C_i = click-uri eliminate = click_uri_înainte − click_uri_după
       pe același task, măsurat pe același scenariu
  R_i = câmpuri / documente cerute redundant, eliminate
  A_i = minute de așteptare (coadă, programare, „revino mâine”) eliminate

t_drum, t_formular, t_click, t_redundant, t_asteptare
  = minute medii pe eveniment, publicate în metodologie
    (valori implicite până avem măsurători proprii:
     t_drum=90, t_formular=20, t_click=0.25,
     t_redundant=5, t_asteptare=1)

Reguli de includere (fără ele, i nu intră în sumă):
  1. procedură înainte și după, documentată
  2. sursă publică sau măsurătoare Muiesoft cu provenance
  3. populație afectată estimată transparent (N, metodă)
  4. fără dublă numărare pe același utilizator / același pas
  5. fără credit pentru promisiuni, doar pentru schimbări livrate

Counter public = floor(ore_recuperate)
Până există cel puțin o intervenție i validată: counter = 0`}
        </pre>
        <p className="mt-4 text-sm text-muted">
          Formula e publică ca să poată fi atacată. Counter-ul rămâne zero până
          avem măcar o intervenție care trece regulile de mai sus.
        </p>
      </div>
      <p className="mt-8">
        Followers sunt drăguți.
        <br />
        Noi vrem timpul înapoi.
      </p>
      <div className="mt-8">
        <Button href="/contribuie" variant="secondary">
          Ajută la metrica reală
        </Button>
      </div>
    </Section>
  );
}
