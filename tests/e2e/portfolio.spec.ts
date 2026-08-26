import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("renders the portfolio without horizontal overflow", async ({ page }) => {
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Building teams");
  await expect(page.getByRole("link", { name: "Download résumé" }).first()).toBeVisible();
  await expect(page.locator("#work")).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBe(0);
});

test("theme selection persists across reloads", async ({ page }) => {
  await page.getByRole("button", { name: /Switch to (light|dark) theme/ }).click();
  const selectedTheme = await page.locator("html").getAttribute("data-theme");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", selectedTheme ?? "dark");
});

test("has no serious or critical automated accessibility violations", async ({ page }) => {
  const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze();
  expect(results.violations.filter((violation) => violation.impact === "serious" || violation.impact === "critical")).toEqual([]);
});

test("mobile navigation exposes and closes section links", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Mobile-only navigation behavior");
  const menu = page.getByRole("button", { name: "Open section navigation" });
  await expect(menu).toBeVisible();
  await menu.click();
  await expect(page.getByRole("link", { name: "01.Work" })).toBeVisible();
  await page.getByRole("link", { name: "01.Work" }).click();
  await expect(page.getByRole("button", { name: "Open section navigation" })).toHaveAttribute("aria-expanded", "false");
});
