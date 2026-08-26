import { spawn } from "node:child_process";
import { readFile } from "node:fs/promises";
import { chromium } from "@playwright/test";

const reportPath = "/tmp/portfolio-lighthouse.json";
const url = process.env.LIGHTHOUSE_URL ?? "http://127.0.0.1:3193";
const lighthouseBin = new URL("../node_modules/lighthouse/cli/index.js", import.meta.url).pathname;
const child = spawn(process.execPath, [lighthouseBin, url, "--quiet", "--output=json", `--output-path=${reportPath}`, "--chrome-flags=--headless --no-sandbox --disable-gpu"], { stdio: "inherit", env: { ...process.env, CHROME_PATH: chromium.executablePath() } });
const exitCode = await new Promise((resolve) => child.on("exit", resolve));
if (exitCode !== 0) process.exit(Number(exitCode) || 1);

const report = JSON.parse(await readFile(reportPath, "utf8"));
const budgets = { performance: 0.8, accessibility: 0.95, "best-practices": 0.9, seo: 0.95 };
for (const [category, minimum] of Object.entries(budgets)) {
  const score = report.categories[category].score;
  console.log(`${category}: ${Math.round(score * 100)} (minimum ${Math.round(minimum * 100)})`);
  if (score < minimum) throw new Error(`${category} score ${score} is below ${minimum}`);
}
