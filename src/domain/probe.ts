export type ProbeVerdict = "ok" | "blocked" | "tls" | "unreachable" | "down";

export type ProbeResult = {
  slug: string;
  url: string;
  status: number;
  verdict: ProbeVerdict;
  latencyMs: number;
  error?: string;
  checkedAt: string;
};

export type ProbeDay = {
  date: string;
  up: number;
  total: number;
  services: Record<string, [number, number, ProbeVerdict]>;
};

export type ProbeOrigin = "github-actions" | "adhoc";

export type ProbeData = {
  generatedAt: string;
  tool: string;
  note: string;
  origin?: ProbeOrigin;
  results: ProbeResult[];
  history: ProbeDay[];
};
