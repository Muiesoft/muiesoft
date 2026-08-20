import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { brandCopy } from "@/config/copy";

const roles = [
  {
    href: "/contribuie#cetatean",
    label: "Cetățean",
    body: "Trimite un incident. Cere informații.",
  },
  {
    href: "/contribuie#jurnalist",
    label: "Jurnalist",
    body: "Citează Indexul. Folosește API-ul.",
  },
  {
    href: "/contribuie#functionar",
    label: "Funcționar",
    body: "Drept la replică. Corecții cu surse.",
  },
  {
    href: "/contribuie#developer",
    label: "Developer",
    body: "Registry, probe, ingest.",
  },
] as const;

export function FinalCta() {
  return (
    <Section invert className="border-b-0">
      <h2 className="font-display text-4xl leading-tight font-semibold tracking-tight md:text-6xl">
        Dacă te-ai săturat să fii beta testerul statului, ai treabă aici.
      </h2>
      <p className="mt-6 max-w-xl text-lg text-background/70">
        Nu cerem un like. Cerem un caz, o corecție, un PR sau o cerere 544.
      </p>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {roles.map((role) => (
          <li key={role.href}>
            <a
              href={role.href}
              className="block border border-background/20 p-5 transition-colors hover:border-background"
            >
              <p className="font-display text-xl">{role.label}</p>
              <p className="mt-2 text-sm text-background/70">{role.body}</p>
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-10 flex flex-wrap gap-3">
        <Button href="/contribuie" variant="invert">
          Contribuie
        </Button>
        <Button
          href="/manifest"
          className="border-background/40 text-background hover:border-background hover:bg-background hover:text-acid"
          variant="secondary"
        >
          Citește manifestul
        </Button>
      </div>
      <p className="font-display mt-16 text-2xl font-semibold tracking-tight md:text-4xl">
        {brandCopy.slogan}
      </p>
    </Section>
  );
}
