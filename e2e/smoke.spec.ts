import { expect, test } from "@playwright/test";

test("homepage loads", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Muiesoft" })).toBeVisible();
  await expect(
    page.locator("main").getByText("Cetățean privat", { exact: false }).first(),
  ).toBeVisible();
  await expect(
    page.getByRole("link", {
      name: /e-Terra \/ ANCPI/i,
    }),
  ).toBeVisible();
});

test("navigate to MuieLex", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "MuieLex" }).first().click();
  await expect(page).toHaveURL(/\/lex/);
  await expect(
    page.getByRole("heading", { name: "MuieLex", exact: true }),
  ).toBeVisible();
});

test("search demo law", async ({ page }) => {
  await page.goto("/lex");
  await page.getByTestId("lex-search").fill("formular");
  await expect(page.getByTestId("lex-result").first()).toBeVisible();
});

test("search Legea 544", async ({ page }) => {
  await page.goto("/lex");
  await page.getByTestId("lex-search").fill("544");
  await expect(page.getByTestId("lex-result").first()).toBeVisible();
  await expect(
    page.getByText("544/2001", { exact: false }).first(),
  ).toBeVisible();
});

test("navigate to MuieIndex", async ({ page }) => {
  await page.goto("/muie-index");
  await expect(page.getByRole("heading", { name: "Muie Index" })).toBeVisible();
  await expect(page.getByTestId("institution-card").first()).toBeVisible();
});

test("open preview tab modal content", async ({ page }) => {
  await page.goto("/muie-index?tab=incidente");
  await expect(page.getByRole("tab", { name: "Incidente" })).toHaveAttribute(
    "aria-selected",
    "true",
  );
  await expect(page.getByTestId("incident-card").first()).toBeVisible();
  await expect(page.getByText("e-Terra", { exact: false }).first()).toBeVisible();
  await expect(page.getByText("Ghișeul.ro", { exact: false }).first()).toBeVisible();
});

test("mobile menu", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Deschide meniul" }).click();
  await expect(
    page.getByText("Statul are sitemap. Noi avem nervi."),
  ).toBeVisible();
  await expect(
    page.getByRole("navigation", { name: "Meniu mobil" }).getByRole("link", {
      name: "Muie Index",
    }),
  ).toBeVisible();
});

test("api v1 root and laws", async ({ request }) => {
  const root = await request.get("/api/v1");
  expect(root.ok()).toBeTruthy();
  const rootJson = await root.json();
  expect(rootJson.meta?.endpoint).toBe("/api/v1");

  const laws = await request.get("/api/v1/laws");
  expect(laws.ok()).toBeTruthy();
  const lawsJson = await laws.json();
  expect(lawsJson.meta?.count).toBeGreaterThanOrEqual(6);
  expect(Array.isArray(lawsJson.data)).toBeTruthy();
});

test("harta page", async ({ page }) => {
  await page.goto("/harta");
  await expect(page.getByText("portaluri", { exact: false }).first()).toBeVisible();
  await expect(page.getByTestId("harta-institution-filter")).toBeVisible();
});

test("feed xml", async ({ request }) => {
  const res = await request.get("/feed.xml");
  expect(res.ok()).toBeTruthy();
  const body = await res.text();
  expect(body).toContain("<rss");
  expect(body).toContain("Muiesoft");
});

test("metodologie page", async ({ page }) => {
  await page.goto("/metodologie");
  await expect(page.getByRole("heading", { name: "Metodologie" })).toBeVisible();
  await expect(page.getByText("Indicele e de frecare", { exact: false })).toBeVisible();
});

test("competenta redirects to premii", async ({ page }) => {
  await page.goto("/competenta");
  await expect(page).toHaveURL(/\/premii/);
});

test("contribuie links RSS", async ({ page }) => {
  await page.goto("/contribuie");
  await expect(
    page.getByRole("link", { name: /RSS/i }).first(),
  ).toBeVisible();
});

test("keyboard command palette", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  await page.keyboard.press("ControlOrMeta+K");
  await expect(page.getByTestId("command-palette")).toBeVisible();
  await page.getByPlaceholder("Caută în Muiesoft...").fill("MuieLex");
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\/lex/);
});
