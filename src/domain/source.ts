export type SourceReference = {
  id: string;
  title: string;
  publisher: string;
  url: string;
  retrievedAt?: string;
  sourceType:
    | "official"
    | "court"
    | "institution"
    | "open-data"
    | "secondary"
    | "demo";
};

export type DemoMeta = {
  isDemo: true;
  disclaimer: string;
};

export const DEMO_DISCLAIMER =
  "DATE DEMONSTRATIVE · nu reprezintă instituții, contracte sau acte reale.";
