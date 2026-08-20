"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { brandCopy } from "@/config/copy";

export function AvocatulPulii() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);

  return (
    <div className="border border-border bg-surface p-6">
      <Badge variant="planned">AI LEGAL</Badge>
      <h3 className="font-display mt-4 text-2xl">Întreabă MuieLex</h3>
      <label htmlFor="avocat-input" className="sr-only">
        Întreabă ceva despre lege
      </label>
      <textarea
        id="avocat-input"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Întreabă ceva despre lege..."
        className="mt-4 min-h-28 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-acid"
      />
      <div className="mt-4">
        <Button
          type="button"
          onClick={() =>
            setAnswer(
              question.trim()
                ? `Răspunsul real la „${question.trim()}” vine doar după retrieval din surse juridice verificabile. Dacă evidența e insuficientă: ${brandCopy.refuseGuess}`
                : brandCopy.refuseGuess,
            )
          }
        >
          Trimite
        </Button>
      </div>
      {answer ? (
        <p className="mt-6 border border-border bg-background p-4 text-sm text-muted">
          {answer}
        </p>
      ) : null}
    </div>
  );
}
