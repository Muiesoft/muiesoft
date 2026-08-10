export const FREEDOM544_REMINDERS_KEY = "muiesoft.544-reminders";

export type Freedom544Reminder = {
  id: string;
  target: string;
  question: string;
  createdAt: string;
  dueAt: string;
};

function isReminder(value: unknown): value is Freedom544Reminder {
  if (!value || typeof value !== "object") return false;
  const item = value as Freedom544Reminder;
  return (
    typeof item.id === "string" &&
    typeof item.target === "string" &&
    typeof item.question === "string" &&
    typeof item.createdAt === "string" &&
    typeof item.dueAt === "string"
  );
}

export function readFreedom544Reminders(): Freedom544Reminder[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(FREEDOM544_REMINDERS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isReminder);
  } catch {
    return [];
  }
}

export function writeFreedom544Reminders(
  reminders: Freedom544Reminder[],
): void {
  window.localStorage.setItem(
    FREEDOM544_REMINDERS_KEY,
    JSON.stringify(reminders),
  );
}

export function addFreedom544Reminder(input: {
  target: string;
  question: string;
  days?: number;
  now?: Date;
}): Freedom544Reminder {
  const now = input.now ?? new Date();
  const days = input.days ?? 30;
  const due = new Date(now.getTime() + days * 24 * 60 * 60 * 1000);
  const reminder: Freedom544Reminder = {
    id: `544-${now.getTime()}`,
    target: input.target.trim() || "[INSTITUȚIA]",
    question: input.question.trim().slice(0, 240),
    createdAt: now.toISOString(),
    dueAt: due.toISOString(),
  };
  const next = [reminder, ...readFreedom544Reminders()].slice(0, 20);
  writeFreedom544Reminders(next);
  return reminder;
}

export function removeFreedom544Reminder(id: string): void {
  writeFreedom544Reminders(
    readFreedom544Reminders().filter((item) => item.id !== id),
  );
}
