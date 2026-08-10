import { PageHero } from "@/components/shared/page-hero";
import { changelog } from "@/data/demo/changelog";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Changelog",
  description: "Ce s-a schimbat. Git-inspired.",
  path: "/changelog",
});

export default function ChangelogPage() {
  return (
    <>
      <PageHero feature="changelog" title="Changelog" subtitle="Produsul evoluează. Public." />
      <div className="mx-auto max-w-3xl px-4 py-10 md:px-8">
        {changelog.map((entry) => (
          <article key={entry.version} className="border border-border bg-surface p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="font-mono text-2xl text-acid">{entry.version}</h2>
              <p className="font-mono text-xs text-muted">{entry.date}</p>
            </div>
            <div className="mt-6 space-y-2 font-mono text-sm">
              {entry.added.map((item) => (
                <p key={item} className="text-success">
                  + {item}
                </p>
              ))}
              {entry.changed?.map((item) => (
                <p key={item} className="text-warning">
                  ~ {item}
                </p>
              ))}
              {entry.removed.map((item) => (
                <p key={item} className="text-danger">
                  - {item}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
