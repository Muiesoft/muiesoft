import type { LighthouseSnapshot } from "@/domain/lighthouse";
import snapshots from "./lighthouse-snapshots.json";

export const lighthouseSnapshots = snapshots as LighthouseSnapshot[];

export function getLighthouseSnapshot(
  serviceSlug: string,
): LighthouseSnapshot | undefined {
  return lighthouseSnapshots.find((s) => s.serviceSlug === serviceSlug);
}
