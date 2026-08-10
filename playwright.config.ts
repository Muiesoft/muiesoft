import os from "node:os";
import { defineConfig, devices } from "@playwright/test";

const darwinMajor = Number.parseInt(os.release().split(".")[0] ?? "0", 10);
const webkitBrokenOnHost =
  process.platform === "darwin" && darwinMajor > 0 && darwinMajor < 24;
const isCI = Boolean(process.env.CI);

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  use: {
    baseURL: "http://127.0.0.1:3005",
    trace: "on-first-retry",
  },
  webServer: {
    command: isCI
      ? "pnpm exec next start --hostname 127.0.0.1 --port 3005"
      : "pnpm exec next start --hostname 127.0.0.1 --port 3005",
    url: "http://127.0.0.1:3005",
    reuseExistingServer: !isCI,
    timeout: 120_000,
  },
  projects: isCI
    ? [
        {
          name: "chromium",
          use: { ...devices["Desktop Chrome"] },
        },
      ]
    : [
        {
          name: "chromium",
          use: { ...devices["Desktop Chrome"] },
        },
        {
          name: "firefox",
          use: { ...devices["Desktop Firefox"] },
        },
        ...(!webkitBrokenOnHost
          ? [
              {
                name: "webkit",
                use: { ...devices["Desktop Safari"] },
              },
            ]
          : []),
      ],
});
