import { describe, expect, it } from "vitest";
import type { ProbeResult } from "../domain/probe";
import {
  applyLighthouseVeto,
  classifyError,
  classifyHttpStatus,
  headerStateFrom,
  remapHistoryDay,
  remapHistoryVerdict,
  shouldRetry,
} from "./probe-verdict";

describe("classifyHttpStatus", () => {
  it("maps success and redirects to ok", () => {
    expect(classifyHttpStatus(200)).toBe("ok");
    expect(classifyHttpStatus(301)).toBe("ok");
  });

  it("maps 403 429 503 to blocked", () => {
    expect(classifyHttpStatus(403)).toBe("blocked");
    expect(classifyHttpStatus(429)).toBe("blocked");
    expect(classifyHttpStatus(503)).toBe("blocked");
  });

  it("maps other 5xx to down", () => {
    expect(classifyHttpStatus(500)).toBe("down");
  });
});

describe("classifyError", () => {
  it("maps cert failures to tls", () => {
    expect(classifyError("UNABLE_TO_GET_ISSUER_CERT_LOCALLY")).toBe("tls");
  });

  it("maps DNS to down", () => {
    expect(classifyError("ENOTFOUND")).toBe("down");
    expect(classifyError("ENETUNREACH")).toBe("down");
  });

  it("maps transport failures to unreachable", () => {
    expect(classifyError("UND_ERR_SOCKET")).toBe("unreachable");
    expect(classifyError("UND_ERR_CONNECT_TIMEOUT")).toBe("unreachable");
    expect(classifyError("ETIMEDOUT")).toBe("unreachable");
    expect(classifyError("ECONNRESET")).toBe("unreachable");
    expect(classifyError("timeout")).toBe("unreachable");
  });
});

describe("applyLighthouseVeto", () => {
  it("demotes down when a snapshot exists", () => {
    expect(applyLighthouseVeto("down", true)).toBe("unreachable");
  });

  it("does not invent ok", () => {
    expect(applyLighthouseVeto("unreachable", true)).toBe("unreachable");
    expect(applyLighthouseVeto("ok", true)).toBe("ok");
  });

  it("keeps DNS down without a snapshot", () => {
    expect(applyLighthouseVeto("down", false)).toBe("down");
  });
});

describe("remapHistoryVerdict", () => {
  it("turns old 503-down into blocked", () => {
    expect(remapHistoryVerdict("cnas-ro", 503, "down")).toBe("blocked");
  });

  it("turns old status-0 down into unreachable except e-Terra", () => {
    expect(remapHistoryVerdict("legislatie-just-ro", 0, "down")).toBe(
      "unreachable",
    );
    expect(remapHistoryVerdict("ancpi-eterra", 0, "down")).toBe("down");
  });

  it("leaves ok alone", () => {
    expect(remapHistoryVerdict("anaf-ro", 200, "ok")).toBe("ok");
  });
});

describe("remapHistoryDay", () => {
  it("recounts catalog up without e-Terra", () => {
    const day = remapHistoryDay({
      date: "2026-08-20",
      up: 0,
      total: 2,
      services: {
        "anaf-ro": [200, 100, "ok"],
        "ancpi-eterra": [0, 10, "down"],
        "legislatie-just-ro": [0, 10, "down"],
      },
    });
    expect(day.services["legislatie-just-ro"][2]).toBe("unreachable");
    expect(day.services["ancpi-eterra"][2]).toBe("down");
    expect(day.up).toBe(1);
    expect(day.total).toBe(2);
  });
});

describe("headerStateFrom", () => {
  const generatedAt = "2026-08-20T05:51:53.982Z";

  it("does not pulse when only unreachable and extra e-Terra are down", () => {
    const results: ProbeResult[] = [
      {
        slug: "anaf-ro",
        url: "https://www.anaf.ro",
        status: 200,
        verdict: "ok",
        latencyMs: 100,
        checkedAt: generatedAt,
      },
      {
        slug: "legislatie-just-ro",
        url: "https://legislatie.just.ro",
        status: 0,
        verdict: "unreachable",
        error: "UND_ERR_SOCKET",
        latencyMs: 600,
        checkedAt: generatedAt,
      },
      {
        slug: "ancpi-eterra",
        url: "https://eterra3.ancpi.ro",
        status: 0,
        verdict: "down",
        error: "ENOTFOUND",
        latencyMs: 10,
        checkedAt: generatedAt,
      },
    ];
    const state = headerStateFrom(results, generatedAt);
    expect(state.pulse).toBe(false);
    expect(state.tone).toBe("warning");
    expect(state.down).toBe(0);
    expect(state.total).toBe(2);
    expect(state.answered).toBe(1);
  });

  it("pulses only for catalog down", () => {
    const results: ProbeResult[] = [
      {
        slug: "epasapoarte-ro",
        url: "https://www.epasapoarte.ro",
        status: 0,
        verdict: "down",
        error: "ENOTFOUND",
        latencyMs: 10,
        checkedAt: generatedAt,
      },
    ];
    const state = headerStateFrom(results, generatedAt);
    expect(state.pulse).toBe(true);
    expect(state.tone).toBe("danger");
  });
});

describe("shouldRetry", () => {
  it("retries only unreachable", () => {
    expect(shouldRetry("unreachable")).toBe(true);
    expect(shouldRetry("blocked")).toBe(false);
    expect(shouldRetry("tls")).toBe(false);
    expect(shouldRetry("down")).toBe(false);
  });
});
