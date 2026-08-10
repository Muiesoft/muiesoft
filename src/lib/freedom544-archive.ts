export const FREEDOM544_ARCHIVE_KEY = "muiesoft.544-archive";
export const FREEDOM544_ARCHIVE_MAX = 50;

export type Freedom544ArchiveStatus = "draft" | "copied" | "reminded";

export type Freedom544ArchiveEntry = {
  id: string;
  target: string;
  question: string;
  letter: string;
  createdAt: string;
  status: Freedom544ArchiveStatus;
};

function isArchiveStatus(value: unknown): value is Freedom544ArchiveStatus {
  return value === "draft" || value === "copied" || value === "reminded";
}

function isArchiveEntry(value: unknown): value is Freedom544ArchiveEntry {
  if (!value || typeof value !== "object") return false;
  const item = value as Freedom544ArchiveEntry;
  return (
    typeof item.id === "string" &&
    typeof item.target === "string" &&
    typeof item.question === "string" &&
    typeof item.letter === "string" &&
    typeof item.createdAt === "string" &&
    isArchiveStatus(item.status)
  );
}

export function readFreedom544Archive(): Freedom544ArchiveEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(FREEDOM544_ARCHIVE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isArchiveEntry);
  } catch {
    return [];
  }
}

export function writeFreedom544Archive(
  entries: Freedom544ArchiveEntry[],
): void {
  window.localStorage.setItem(
    FREEDOM544_ARCHIVE_KEY,
    JSON.stringify(entries.slice(0, FREEDOM544_ARCHIVE_MAX)),
  );
}

export function addFreedom544ArchiveEntry(input: {
  target: string;
  question: string;
  letter: string;
  status?: Freedom544ArchiveStatus;
  now?: Date;
}): Freedom544ArchiveEntry {
  const now = input.now ?? new Date();
  const entry: Freedom544ArchiveEntry = {
    id: `544-archive-${now.getTime()}`,
    target: input.target.trim() || "[INSTITUȚIA]",
    question: input.question.trim().slice(0, 500),
    letter: input.letter,
    createdAt: now.toISOString(),
    status: input.status ?? "draft",
  };
  const next = [entry, ...readFreedom544Archive()].slice(
    0,
    FREEDOM544_ARCHIVE_MAX,
  );
  writeFreedom544Archive(next);
  return entry;
}

export function removeFreedom544ArchiveEntry(id: string): void {
  writeFreedom544Archive(
    readFreedom544Archive().filter((item) => item.id !== id),
  );
}
