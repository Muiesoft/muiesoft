import { PageHero } from "@/components/shared/page-hero";
import { TrustClose } from "@/components/shared/trust-close";
import { brandCopy } from "@/config/copy";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Principii",
  description:
    "Fapte înainte de acuzații. Brutal cu opiniile. Obsesiv cu faptele.",
  path: "/principii",
});

const principles = [
  {
    title: "Date înainte de acuzații",
    body: "Publică fapte verificabile.",
  },
  {
    title: "Satira trebuie să fie recognoscibilă",
    body: "Nu prezenta ficțiunea ca informație.",
  },
  {
    title: "Outlier ≠ corupție",
    body: "Un algoritm poate identifica anomalie. Nu poate condamna persoane.",
  },
  {
    title: "Public ≠ fără responsabilitate",
    body: "Nu publica date personale inutil.",
  },
  {
    title: "Research de securitate numai autorizat",
    body: "Nu accesa sisteme fără drept. Nu testa vulnerabilități pe infrastructură publică fără permisiune explicită.",
  },
  {
    title: "Proveniența sursei",
    body: "Orice metrică reală trebuie să aibă sursă.",
  },
  {
    title: "Corecții",
    body: "Erorile trebuie corectate public și versionat.",
  },
  {
    title: "Drept la replică",
    body: "Instituțiile trebuie să poată trimite corecții/documente.",
  },
];

export default function PrincipiiPage() {
  return (
    <>
      <PageHero
        feature="principii"
        title="Fapte înainte de acuzații."
        subtitle={
          <p className="font-display text-2xl text-foreground md:text-3xl">
            Putem fi tăioși. Nu putem inventa.
          </p>
        }
      />
      <div className="mx-auto max-w-3xl px-4 py-10 md:px-8">
        <p className="mb-10 text-xl">{brandCopy.editorial}</p>
        <div className="space-y-8">
          {principles.map((item) => (
            <section key={item.title} className="border-b border-border pb-8">
              <h2 className="font-display text-2xl">{item.title}</h2>
              <p className="mt-3 text-muted">{item.body}</p>
            </section>
          ))}
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="border border-border p-5 font-mono text-sm">
            OUTLIER ≠ CORUPȚIE
          </div>
          <div className="border border-border p-5 font-mono text-sm">
            ANOMALIE ≠ VINOVĂȚIE
          </div>
        </div>
        <TrustClose />
      </div>
    </>
  );
}
