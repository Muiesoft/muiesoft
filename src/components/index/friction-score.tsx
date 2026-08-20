import { contestScoreMailto, frictionToneClass } from "@/lib/scoring";

export function FrictionScore({
  total,
  name,
  size = "md",
}: {
  total?: number;
  name: string;
  size?: "md" | "lg";
}) {
  return (
    <div className={size === "lg" ? undefined : "text-right"}>
      <p className="terminal-label">Muie Score</p>
      <p className="mt-1 font-mono text-[10px] tracking-wider text-muted uppercase">
        Indice de frecare
      </p>
      <p
        className={`mt-1 font-mono ${size === "lg" ? "text-6xl" : "text-5xl"} ${frictionToneClass(total ?? 0)}`}
      >
        {total ?? "n/a"}
      </p>
      <p className="mt-2 text-xs text-muted">
        Mai mare = mai greu pentru cetățean.
      </p>
      <p className="mt-3">
        <a
          href={contestScoreMailto(name)}
          className="font-mono text-xs text-acid uppercase hover:underline"
        >
          Contestă scorul
        </a>
      </p>
    </div>
  );
}
