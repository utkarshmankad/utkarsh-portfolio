import assert from "node:assert/strict";
import test from "node:test";
import { articles, contributions, products, projects, roles } from "../app/content";
import { siteConfig, siteUrl } from "../app/site";

test("portfolio collections contain unique named entries", () => {
  for (const collection of [products, projects]) assert.equal(new Set(collection.map((item) => item.name)).size, collection.length);
  assert.equal(new Set(articles.map((item) => item.title)).size, articles.length);
  assert.equal(new Set(roles.map((item) => item.company)).size, roles.length);
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
