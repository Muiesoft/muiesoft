export function LegalConfidence({
  score,
  explicitText,
  applicableNorms,
  bindingDecision,
  unevenPractice,
  recentChange,
}: {
  score: number;
  explicitText: boolean;
  applicableNorms: boolean;
  bindingDecision: boolean;
  unevenPractice: boolean;
  recentChange: boolean;
}) {
  const filled = Math.round(score / 5);
  return (
    <div className="border border-border bg-surface p-5" data-testid="legal-confidence">
      <p className="terminal-label">Certitudine</p>
      <p className="mt-3 font-mono text-3xl text-acid">{score}%</p>
      <p className="mt-2 font-mono text-xs tracking-widest text-muted">
        {"█".repeat(filled)}
        {"░".repeat(20 - filled)}
      </p>
      <ul className="mt-4 space-y-1 font-mono text-xs">
        <li>Text explicit {explicitText ? "✓" : "n/a"}</li>
        <li>Norme aplicabile {applicableNorms ? "✓" : "n/a"}</li>
        <li>Decizie obligatorie {bindingDecision ? "✓" : "n/a"}</li>
        <li>Practică neunitară {unevenPractice ? "!" : "n/a"}</li>
        <li>Modificare recentă {recentChange ? "!" : "n/a"}</li>
      </ul>
      {score < 70 ? (
        <p className="mt-4 text-sm text-warning">
          Legea e varză aici.
          <br />
          Există mai multe interpretări relevante.
        </p>
      ) : null}
    </div>
  );
}
