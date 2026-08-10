export type BountyCategory = "code" | "data" | "ux" | "research" | "legal";

export type Bounty = {
  id: string;
  title: string;
  description: string;
  goalEur: number;
  raisedEur: number;
  category: BountyCategory;
  impact: "mare" | "mediu" | "mic";
  complexity: "mare" | "medie" | "mică";
  demo?: boolean;
};
