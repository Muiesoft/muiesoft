"use client";

import Link from "next/link";
import { BrandMark } from "@/components/brand/brand-mark";
import { footerNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { openCookiePreferences } from "@/lib/cookies";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface px-4 py-14 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <BrandMark size="md" />
            <p className="font-display text-2xl font-semibold tracking-tight">
              Muiesoft
            </p>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted">{siteConfig.slogan}</p>
          <div className="mt-4 flex gap-4">
            <a
              href={siteConfig.github}
              className="font-mono text-xs text-acid uppercase hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub →
            </a>
            <a
              href="/feed.xml"
              className="font-mono text-xs text-acid uppercase hover:underline"
            >
              RSS →
            </a>
          </div>
          <ul className="mt-4 space-y-1 font-mono text-[10px] text-muted uppercase">
            {(
              Object.keys(siteConfig.social) as Array<
                keyof typeof siteConfig.social
              >
            )
              .filter((key) => siteConfig.social[key])
              .map((key) => (
                <li key={key}>
                  {key}:{" "}
                  <a
                    href={siteConfig.social[key]}
                    className="text-acid"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    live
                  </a>
                </li>
              ))}
          </ul>
        </div>
        {(
          [
            ["PROIECT", footerNav.proiect],
            ["UNELTE", footerNav.unelte],
            ["COD", footerNav.cod],
          ] as const
        ).map(([title, items]) => (
          <div key={title}>
            <p className="terminal-label mb-4">{title}</p>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground/90 transition-colors hover:text-acid"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 max-w-6xl border-t border-border pt-6">
        <p className="text-sm text-muted">
          Făcut în România fără comitet de steering.
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-4">
          <p className="font-mono text-xs text-muted">
            © Muiesoft. Open-source (AGPL-3.0).
          </p>
          <button
            type="button"
            className="font-mono text-xs tracking-wider text-muted uppercase underline-offset-2 hover:text-acid hover:underline"
            onClick={() => openCookiePreferences()}
          >
            Cookies
          </button>
        </div>
      </div>
    </footer>
  );
}
