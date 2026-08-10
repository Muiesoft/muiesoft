export type Award = {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: "absurd" | "competence";
  status: "awarded" | "unawarded";
  laureate?: string;
  citation?: string;
  caseHref?: string;
  demo?: boolean;
};
