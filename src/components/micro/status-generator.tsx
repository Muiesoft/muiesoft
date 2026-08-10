"use client";

import { useState } from "react";
import { DemoBadge } from "@/components/shared/demo-badge";
import { Button } from "@/components/ui/button";

const statuses = [
  "MERGE",
  "MERGE, CULMEA",
  "MERGE CA PULA",
  "PDF-DEPENDENT",
  "GHIȘEU-BOUND",
  "EXCEL-POWERED",
  "DIGITALIZAT ÎN POWERPOINT",
] as const;

export function StatusGenerator() {
  const [status, setStatus] = useState<(typeof statuses)[number] | null>(null);

  return (
    <div
      className="border border-border bg-surface p-6"
      data-testid="status-generator"
    >
      <div className="flex flex-wrap items-center gap-3">
        <p className="terminal-label mb-0">Generator status</p>
        <DemoBadge label="SATIRĂ" />
      </div>
      <p className="mt-3 text-sm text-muted">
        Apasă. Primești un diagnostic oficial-neoficial.
      </p>
      <div className="mt-6 min-h-20 border border-dashed border-border p-5">
        {status ? (
          <p className="font-display text-3xl uppercase text-acid">{status}</p>
        ) : (
          <p className="font-mono text-xs text-muted uppercase">
            Status: nedeterminat
          </p>
        )}
      </div>
      <div className="mt-4">
        <Button
          type="button"
          variant="secondary"
          onClick={() => {
            const next =
              statuses[Math.floor(Math.random() * statuses.length)] ??
              statuses[0];
            setStatus(next);
          }}
        >
          Generează status
        </Button>
      </div>
    </div>
  );
}
