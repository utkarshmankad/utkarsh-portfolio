import { ANALYTICS_KEYS, visibleRegions } from "../analytics";

type RedisValue = string | number | null | string[];
type RedisResult = { result: RedisValue };

export type PublicAnalytics = {
  configured: boolean;
  visits: number;
  uniqueVisits: number;
  returningVisits: number;
  resumeDownloads: number;
  regions: { region: string; visits: number }[];
};

function credentials() {
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  return url && token ? { url: url.replace(/\/$/, ""), token } : null;
}

async function pipeline(commands: (string | number)[][]) {
  const auth = credentials();
  if (!auth) return null;
  const response = await fetch(`${auth.url}/pipeline`, {
    method: "POST",
    headers: { authorization: `Bearer ${auth.token}`, "content-type": "application/json" },
    body: JSON.stringify(commands),
    cache: "no-store",
  });
  if (!response.ok) throw new Error(`Analytics store returned ${response.status}`);
  return response.json() as Promise<RedisResult[]>;
}

export async function recordVisit(region: string, returning: boolean) {
  const commands: (string | number)[][] = [["INCR", ANALYTICS_KEYS.visits], ["HINCRBY", ANALYTICS_KEYS.regions, region, 1]];
  if (returning) commands.push(["INCR", ANALYTICS_KEYS.returningVisits]);
  return pipeline(commands);
}

export async function recordResumeDownload() {
  return pipeline([["INCR", ANALYTICS_KEYS.resumeDownloads]]);
}

function asNumber(value: RedisValue | undefined) {
  const parsed = Number(value ?? 0);
  return Number.isFinite(parsed) ? parsed : 0;
}

function asHash(value: RedisValue | undefined) {
  if (!Array.isArray(value)) return {};
  const entries: Record<string, number> = {};
  for (let index = 0; index < value.length; index += 2) entries[value[index]] = asNumber(value[index + 1]);
  return entries;
}

export async function getPublicAnalytics(): Promise<PublicAnalytics> {
  const results = await pipeline([["GET", ANALYTICS_KEYS.visits], ["GET", ANALYTICS_KEYS.returningVisits], ["GET", ANALYTICS_KEYS.resumeDownloads], ["HGETALL", ANALYTICS_KEYS.regions]]);
  if (!results) return { configured: false, visits: 0, uniqueVisits: 0, returningVisits: 0, resumeDownloads: 0, regions: [] };
  const visits = asNumber(results[0]?.result);
  const returningVisits = Math.min(visits, asNumber(results[1]?.result));
  return { configured: true, visits, uniqueVisits: Math.max(0, visits - returningVisits), returningVisits, resumeDownloads: asNumber(results[2]?.result), regions: visibleRegions(asHash(results[3]?.result)) };
}
