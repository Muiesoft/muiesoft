"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function ComingSoonModal({
  open,
  onClose,
  title = "ÎNCĂ NU",
  willDo,
  missing,
  help = "Deschide un issue sau contribuie la specificație.",
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  willDo: string;
  missing: string;
  help?: string;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-background/90 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="coming-soon-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg border border-border bg-surface-elevated p-6 shadow-none"
        onClick={(e) => e.stopPropagation()}
      >
        <Badge variant="planned">{title}</Badge>
        <h2
          id="coming-soon-title"
          className="font-display mt-4 text-2xl font-bold uppercase"
        >
          Nu e disponibil acum.
        </h2>
        <div className="mt-6 space-y-4 text-sm text-muted">
          <p>
            <span className="text-foreground">Ce va face:</span> {willDo}
          </p>
          <p>
            <span className="text-foreground">Ce lipsește:</span> {missing}
          </p>
          <p>
            <span className="text-foreground">Cum poți ajuta:</span> {help}
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/contribuie">Contribuie</Button>
          <Button variant="secondary" onClick={onClose}>
            Închide
          </Button>
        </div>
      </div>
    </div>
  );
}
