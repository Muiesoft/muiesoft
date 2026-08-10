"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col justify-center px-4 py-20 md:px-8">
      <p className="font-mono text-xs tracking-[0.2em] text-danger uppercase">
        500
      </p>
      <h1 className="font-display mt-4 text-4xl font-bold uppercase md:text-6xl">
        Ceva s-a futut.
      </h1>
      <p className="mt-6 text-lg text-muted">
        De data asta la noi.
        <br />
        Lucrăm la asta.
      </p>
      <div className="mt-10">
        <Button type="button" onClick={reset}>
          Încearcă din nou
        </Button>
      </div>
    </div>
  );
}
