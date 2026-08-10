import { PageHero } from "@/components/shared/page-hero";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy",
  description: "Nu vrem datele tale. Vrem datele lor.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Nu vrem datele tale."
        subtitle="Vrem datele lor."
      />
      <div className="mx-auto max-w-3xl space-y-8 px-4 py-10 text-muted md:px-8">
        <section>
          <h2 className="font-display text-xl text-foreground uppercase">
            Operator
          </h2>
          <p className="mt-4">
            Site-ul {siteConfig.domain} e publicat de proiectul open-source
            Muiesoft. Contact:{" "}
            <a
              className="text-acid underline"
              href={`mailto:${siteConfig.contact}`}
            >
              {siteConfig.contact}
            </a>
            .
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl text-foreground uppercase">
            Ce nu facem
          </h2>
          <ul className="mt-4 space-y-2">
            <li>• Zero analytics cookies implicit</li>
            <li>• Zero ad tracking</li>
            <li>• Zero fingerprinting</li>
            <li>
              • Nu rulăm un sistem de conturi / sesiuni de utilizator pe site
            </li>
            <li>• Zero vânzare de date</li>
            <li>
              • Nu colectăm intenționat date personale în aplicație (formularele
              rulează local în browser)
            </li>
          </ul>
        </section>
        <section>
          <h2 className="font-display text-xl text-foreground uppercase">
            Ce rămâne local
          </h2>
          <p className="mt-4">
            Căutări, wizard 544, detectoare, preferințe cookie: rulează în
            browser. Nu trimitem conținutul formularelor către un backend
            Muiesoft de conturi sau CRM.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl text-foreground uppercase">
            Hosting și CDN
          </h2>
          <p className="mt-4">
            Site-ul e servit prin Cloudflare (sau un host echivalent). Furnizorul
            de edge poate procesa log-uri tehnice tipice (IP, User-Agent, URL,
            timestamp) pentru securitate și operare. Asta nu e analytics de
            marketing Muiesoft și nu e „zero absolut pe infrastructură”.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl text-foreground uppercase">
            Analytics
          </h2>
          <p className="mt-4">
            Absente în aplicație. Dacă apar ulterior: privacy-first, cu
            consimțământ, fără reclame, cu minimizare.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl text-foreground uppercase">
            Contact privacy
          </h2>
          <p className="mt-4">
            Întrebări:{" "}
            <a
              className="text-acid underline"
              href={`mailto:${siteConfig.contact}`}
            >
              {siteConfig.contact}
            </a>
            . Verifică că inbox-ul răspunde înainte de anunțuri publice.
          </p>
        </section>
        <p className="text-foreground">
          Statul te vede destul. Acum e rândul nostru să vedem statul.
        </p>
      </div>
    </>
  );
}
