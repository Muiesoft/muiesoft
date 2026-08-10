import { describe, expect, it } from "vitest";
import {
  chatbotScript,
  createReplyDeck,
  pickExit,
  pickGreeting,
  pickLoadingSequence,
} from "./chatbot";

describe("chatbot script pools", () => {
  it("has large unique-enough pools", () => {
    expect(chatbotScript.greetings.length).toBeGreaterThanOrEqual(30);
    expect(chatbotScript.replies.length).toBeGreaterThanOrEqual(50);
    expect(chatbotScript.exits.length).toBeGreaterThanOrEqual(20);
    expect(chatbotScript.loadingLines.length).toBeGreaterThanOrEqual(10);
  });

  it("picks values from the pools", () => {
    expect(chatbotScript.greetings).toContain(pickGreeting());
    expect(chatbotScript.exits).toContain(pickExit());
    const loading = pickLoadingSequence(3);
    expect(loading).toHaveLength(3);
    for (const line of loading) {
      expect(chatbotScript.loadingLines).toContain(line);
    }
  });

  it("builds a shuffled reply deck without duplicates", () => {
    const deck = createReplyDeck();
    expect(deck).toHaveLength(chatbotScript.replies.length);
    expect(new Set(deck).size).toBe(deck.length);
  });
});
