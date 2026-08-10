"use client";

import { useMemo, useState } from "react";
import { DemoBadge } from "@/components/shared/demo-badge";

type Answers = {
  online: boolean;
  print: boolean;
  desk: boolean;
  stamp: boolean;
};

export function DigitizationDetector() {
  const [answers, setAnswers] = useState<Answers>({
    online: true,
    print: true,
    desk: true,
    stamp: true,
  });

  const score = useMemo(() => {
    let value = 100;
    if (!answers.online) value -= 40;
    if (answers.print) value -= 20;
    if (answers.desk) value -= 25;
    if (answers.stamp) value -= 15;
    return Math.max(0, value);
  }, [answers]);

  const toggle = (key: keyof Answers) => {
    setAnswers((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="border border-border bg-surface p-6" data-testid="digitization-detector">
      <div className="flex flex-wrap items-center gap-3">
        <p className="terminal-label mb-0">Detector de digitalizare</p>
        <DemoBadge label="SATIRĂ" />
      </div>
      <ul className="mt-6 space-y-3">
        {(
          [
            ["online", "Poți începe online?", answers.online],
            ["print", "Trebuie printat ceva?", answers.print],
            ["desk", "Trebuie mers la ghișeu?", answers.desk],
            ["stamp", "Trebuie ștampilă?", answers.stamp],
          ] as const
        ).map(([key, label, value]) => (
          <li key={key} className="flex items-center justify-between gap-4 border border-border px-4 py-3">
            <span className="text-sm">{label}</span>
            <button
              type="button"
              className="min-w-16 border border-border px-3 py-2 font-mono text-xs uppercase"
              onClick={() => toggle(key)}
              aria-pressed={value}
            >
              {value ? "DA" : "NU"}
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <p className="font-display text-3xl uppercase">
          Digitalizare: <span className="text-acid">{score}%</span>
        </p>
        <p className="mt-2 text-muted">
          {score < 40
            ? "Felicitări. Ați pus un PDF pe Internet."
            : score < 70
              ? "E online, dar tot te urăște."
              : "Surprinzător de puțin futut. Verifică de două ori."}
        </p>
      </div>
    </div>
  );
}
