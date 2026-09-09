import assert from "node:assert/strict";
import test from "node:test";
import { articles, contributions, products, projects, roles } from "../app/content";
import { siteConfig, siteUrl } from "../app/site";
import { isLikelyBot, regionFromCountry, visibleRegions } from "../app/analytics";

test("portfolio collections contain unique named entries", () => {
  for (const collection of [products, projects]) assert.equal(new Set(collection.map((item) => item.name)).size, collection.length);
  assert.equal(new Set(articles.map((item) => item.title)).size, articles.length);
  assert.equal(new Set(roles.map((item) => item.company)).size, roles.length);
});

test("analytics helpers keep location data coarse and suppress small samples", () => {
  assert.equal(regionFromCountry("IN"), "India");
  assert.equal(regionFromCountry("US"), "North America");
  assert.equal(regionFromCountry("XX"), "Other");
  assert.equal(isLikelyBot("Mozilla/5.0"), false);
  assert.equal(isLikelyBot("Googlebot/2.1"), true);
  assert.deepEqual(visibleRegions({ India: 8, Europe: 1, Other: 3 }), [{ region: "India", visits: 8 }, { region: "Other", visits: 3 }]);
});

test("public links use secure or intentional contact protocols", () => {
  const links = [...products, ...projects, ...articles, ...contributions].map((item) => item.href);
  for (const href of [...links, siteConfig.github, siteConfig.linkedin, siteUrl]) assert.equal(new URL(href).protocol, "https:");
});

test("career and project evidence is complete", () => {
  for (const role of roles) { assert.ok(role.summary.length > 80); assert.ok(role.wins.length >= 4); assert.ok(role.tech.length >= 5); }
  for (const project of projects) assert.ok(project.description.length > 60);
  for (const article of articles) assert.match(article.publishedAt, /^\d{4}-\d{2}-\d{2}$/);
});
