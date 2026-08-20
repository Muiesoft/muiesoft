"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

export function CiteBlock({ title, path }: { title: string; path: string }) {
  const url = `${siteConfig.url}${path}`;
  const [copied, setCopied] = useState<"link" | "cite" | "share" | null>(null);

  async function copy(text: string, kind: "link" | "cite" | "share") {
    await navigator.clipboard.writeText(text);
    setCopied(kind);
  }

  function citation() {
    const accessed = new Date().toISOString().slice(0, 10);
    return `Muiesoft · ${title} · ${url} · accesat ${accessed} · AGPL-3.0`;
  }

  async function share() {
    if (typeof navigator.share === "function") {
      await navigator.share({ title, url });
      setCopied("share");
      return;
    }
    await copy(url, "share");
  }

  return (
    <div className="mt-8 border border-border p-4">
      <p className="font-mono text-xs break-all text-muted">
        Citează: Muiesoft · {title} · {url} · AGPL-3.0
      </p>
      <div className="mt-3 flex flex-wrap gap-3">
        <button
          type="button"
          className="min-h-11 border border-border px-3 font-mono text-xs uppercase hover:border-acid"
          onClick={() => copy(url, "link")}
        >
          {copied === "link" ? "Link copiat" : "Copiază link"}
        </button>
        <button
          type="button"
          className="min-h-11 border border-border px-3 font-mono text-xs uppercase hover:border-acid"
          onClick={() => copy(citation(), "cite")}
        >
          {copied === "cite" ? "Citat copiat" : "Copiază citarea"}
        </button>
        <button
          type="button"
          className="min-h-11 border border-border px-3 font-mono text-xs uppercase hover:border-acid"
          onClick={() => share()}
        >
          {copied === "share" ? "Gata" : "Distribuie"}
        </button>
      </div>
    </div>
  );
}
