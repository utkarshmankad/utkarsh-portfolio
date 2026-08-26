import { articles, contributions, products, projects } from "../app/content";
import { siteConfig, siteUrl } from "../app/site";

const urls = [...products, ...projects, ...articles, ...contributions].map((item) => item.href).concat([siteConfig.github, siteConfig.linkedin, siteUrl]);
const broken: string[] = [];

for (const url of [...new Set(urls)]) {
  try {
    const response = await fetch(url, { method: "HEAD", redirect: "follow", signal: AbortSignal.timeout(15_000), headers: { "user-agent": "utkarsh-portfolio-link-check/1.0" } });
    if (response.status === 404 || response.status === 410) broken.push(`${response.status} ${url}`);
    else console.log(`${response.status} ${url}`);
  } catch (error) {
    console.warn(`WARN ${url}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

if (broken.length) throw new Error(`Broken links:\n${broken.join("\n")}`);
