"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandMark } from "@/components/brand/brand-mark";
import { mainNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="site-header-blur sticky top-0 z-50 select-none border-b border-border bg-background/95">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:h-16 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-display text-lg font-bold tracking-[0.08em] uppercase"
            aria-label="Muiesoft acasă"
          >
            <BrandMark size="sm" />
            <span>
              MUIE
              <span className="text-acid">SOFT</span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-6 lg:flex"
            aria-label="Navigare principală"
          >
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                title={item.title}
                className="font-mono text-xs tracking-[0.14em] text-muted uppercase transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/status"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.14em] text-foreground uppercase"
            >
              <span
                className="status-pulse inline-block h-2 w-2 rounded-full bg-acid"
                aria-hidden
              />
              STATUS
            </Link>
            <Link
              href="/login"
              className="border border-border px-3 py-2 font-mono text-xs tracking-[0.14em] text-foreground uppercase transition-colors hover:border-acid"
            >
              Intră
            </Link>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/login"
              className="inline-flex h-11 items-center justify-center border border-border px-3 font-mono text-xs tracking-[0.14em] uppercase"
            >
              Intră
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center border border-border"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Închide meniul" : "Deschide meniul"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 bottom-0 top-14 z-[60] select-none overflow-y-auto overscroll-contain bg-background px-6 py-6 lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <p className="mb-4 font-mono text-sm text-muted">
          Statul are sitemap. Noi avem nervi.
        </p>
        <nav className="flex flex-col gap-2" aria-label="Meniu mobil">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              title={item.title}
              className="font-display text-2xl font-bold uppercase"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/status"
            className="font-display text-2xl font-bold text-acid uppercase"
            onClick={() => setOpen(false)}
          >
            STATUS
          </Link>
          <Link
            href="/login"
            className="font-display text-2xl font-bold uppercase"
            onClick={() => setOpen(false)}
          >
            LOGIN
          </Link>
          <Link
            href="/manifest"
            className="mt-2 font-mono text-sm text-muted uppercase"
            onClick={() => setOpen(false)}
          >
            Manifest
          </Link>
        </nav>
        <p className="mt-6 font-mono text-xs text-muted">{siteConfig.slogan}</p>
      </div>
    </>
  );
}
