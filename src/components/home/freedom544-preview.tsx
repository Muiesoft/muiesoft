"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FeatureStatus } from "@/components/shared/feature-status";
import { Button } from "@/components/ui/button";
import {
  Section,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/section";

const examples = [
  "Cât a costat site-ul...",
  "Care e contractul cu furnizorul IT?",
  "Care e uptime-ul asumat pe ultimul an?",
];

export function Freedom544Preview() {
  const router = useRouter();
  const [question, setQuestion] = useState("");

  const go = (value: string) => {
    const q = value.trim();
    router.push(q ? `/544?q=${encodeURIComponent(q)}` : "/544");
  };

  return (
    <Section className="bg-surface">
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <SectionLabel className="mb-0">LEGEA 544/2001</SectionLabel>
        <FeatureStatus feature="freedom544" />
      </div>
      <SectionHeading>Dă cu 544.</SectionHeading>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        Legea accesului la informații publice: ceri instituției date sau
        documente, ea e obligată să răspundă.
      </p>
      <p className="mt-3 max-w-xl text-muted">
        Statul are informația.
        <br />
        Tu ai dreptul să întrebi.
      </p>
      <form
        className="mt-8 border border-border bg-background p-6"
        onSubmit={(e) => {
          e.preventDefault();
          go(question);
        }}
      >
        <label htmlFor="home-544-question" className="terminal-label">
          Ce vrei să afli?
        </label>
        <input
          id="home-544-question"
          name="q"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Cât a costat site-ul..."
          className="mt-3 w-full border border-border bg-surface px-4 py-4 text-foreground outline-none placeholder:text-muted focus:border-acid"
          autoComplete="off"
        />
        <div className="mt-3 flex flex-wrap gap-2">
          {examples.map((example) => (
            <button
              key={example}
              type="button"
              className="border border-border px-3 py-1.5 font-mono text-xs text-muted uppercase transition-colors hover:border-acid hover:text-foreground"
              onClick={() => setQuestion(example)}
            >
              {example}
            </button>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">
          Scrii întrebarea, alegi instituția, generezi cererea local. Trimiterea
          automată vine după.
        </p>
        <div className="mt-6">
          <Button type="submit">Generează cererea</Button>
        </div>
      </form>
      <p className="mt-6 text-sm text-muted">
        Obiectiv pe termen lung: cea mai mare arhivă machine-readable de
        răspunsuri 544 din România.
      </p>
    </Section>
  );
}
