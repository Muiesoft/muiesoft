"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandMark } from "@/components/brand/brand-mark";
import { mainNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function SiteHeader({ status }: { status: ReactNode }) {
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
            className="inline-flex items-center gap-2 font-display text-lg font-semibold tracking-tight"
            aria-label="Muiesoft acasă"
          >
            <BrandMark size="sm" />
            <span>
              Muie
              <span className="text-acid">soft</span>
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
                className="font-mono text-xs tracking-[0.08em] text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/status"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.08em] text-foreground"
              title="Proba HTTP pe portalurile din catalog"
            >
              {status}
              Status
            </Link>
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-border lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Închide meniul" : "Deschide meniul"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
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
              className="font-display text-2xl font-semibold"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/status"
            className="font-display text-2xl font-semibold text-acid"
            onClick={() => setOpen(false)}
          >
            <span className="mr-2 inline-flex items-center">{status}</span>
            Status
          </Link>
          <Link
            href="/manifest"
            className="mt-2 font-mono text-sm text-muted"
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
