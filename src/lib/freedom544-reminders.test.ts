import { beforeEach, describe, expect, it } from "vitest";
import {
  FREEDOM544_REMINDERS_KEY,
  addFreedom544Reminder,
  readFreedom544Reminders,
  removeFreedom544Reminder,
} from "./freedom544-reminders";

describe("freedom544 reminders", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("returns empty when unset", () => {
    expect(readFreedom544Reminders()).toEqual([]);
  });

  it("adds and removes a 30-day reminder", () => {
    const now = new Date("2026-08-07T12:00:00.000Z");
    const reminder = addFreedom544Reminder({
      target: "ANAF",
      question: "Cost platformă SPV",
      now,
    });
    expect(window.localStorage.getItem(FREEDOM544_REMINDERS_KEY)).toBeTruthy();
    expect(reminder.dueAt).toBe("2026-09-06T12:00:00.000Z");
    expect(readFreedom544Reminders()).toHaveLength(1);
    removeFreedom544Reminder(reminder.id);
    expect(readFreedom544Reminders()).toHaveLength(0);
  });
});
