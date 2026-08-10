import { Freedom544Wizard } from "@/components/freedom544/wizard";
import { PageHero } from "@/components/shared/page-hero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Dă cu 544 · cereri informații publice",
  description:
    "Generator local de cereri pe Legea 544/2001 privind liberul acces la informațiile de interes public. Directory instituții, export și arhivă în browser.",
  path: "/544",
});

function firstParam(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) return value[0];
  return value;
}

type Props = {
  searchParams: Promise<{
    q?: string | string[];
    template?: string | string[];
    target?: string | string[];
    name?: string | string[];
  }>;
};

export default async function Freedom544Page({ searchParams }: Props) {
  const params = await searchParams;

  return (
    <>
      <PageHero
        feature="freedom544"
        title="Dă cu 544."
        subtitle={
          <>
            <p>
              Statul are informația.
              <br />
              Tu ai dreptul să întrebi.
            </p>
            <p className="mt-6 max-w-2xl text-base text-foreground/90">
              <span className="text-acid">Legea 544/2001</span> e legea
              românească a accesului la informații de interes public: orice
              persoană poate cere unei instituții publice date, documente sau
              explicații, iar instituția e obligată să răspundă în termene
              legale. Nu e petiție oarbă. E un drept.
            </p>
            <p className="mt-4 max-w-2xl text-sm text-muted">
              Aici generezi cererea local, în browser: alegi instituția, scrii
              ce vrei să afli, descarci textul. Trimiterea și arhiva de răspunsuri
              vin după. Obiectiv pe termen lung: cea mai mare arhivă
              machine-readable de răspunsuri 544 din România.
            </p>
          </>
        }
      />
      <Freedom544Wizard
        initialQuestion={firstParam(params.q)}
        initialTemplate={firstParam(params.template)}
        initialTarget={firstParam(params.target)}
        initialName={firstParam(params.name)}
      />
    </>
  );
}
