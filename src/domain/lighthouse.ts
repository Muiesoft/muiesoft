export type LighthouseSnapshot = {
  id: string;
  serviceSlug: string;
  url: string;
  fetchedAt: string;
  tool: string;
  toolVersion: string;
  formFactor: "mobile" | "desktop";
  scores: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };
  note: string;
};
