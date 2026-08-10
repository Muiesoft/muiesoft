"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

export function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    setError(null);
    setPending(true);
    window.setTimeout(() => {
      setPending(false);
      setError("Email sau parolă greșită.");
    }, 450);
  }

  return (
    <div className="w-full max-w-md border border-border bg-surface-elevated">
      <div className="border-b border-border px-6 py-5">
        <p className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
          Muiesoft · Acces
        </p>
        <h1 className="font-display mt-3 text-3xl font-bold tracking-tight uppercase">
          Intră
        </h1>
      </div>

      <form className="space-y-5 px-6 py-6" onSubmit={onSubmit} noValidate>
        <label className="block">
          <span className="terminal-label">Email</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm text-foreground"
            placeholder="nume@email.ro"
          />
        </label>

        <label className="block">
          <span className="terminal-label">Parolă</span>
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            required
            className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm text-foreground"
            placeholder="••••••••"
          />
        </label>

        {error ? (
          <p className="text-sm text-danger" role="alert">
            {error}
          </p>
        ) : null}

        <Button type="submit" className="w-full" disabled={pending}>
          {pending ? "Se verifică…" : "Intră"}
        </Button>
      </form>

      <div className="border-t border-border px-6 py-5">
        <Button
          type="button"
          variant="secondary"
          className="w-full"
          disabled
          aria-disabled="true"
        >
          Creează cont
        </Button>
      </div>
    </div>
  );
}
