export type DisplayableScore = {
  total: number;
};

export function displayScore(score?: DisplayableScore | null): string {
  if (!score) return "n/a";
  return String(score.total);
}
