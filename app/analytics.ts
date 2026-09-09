export const ANALYTICS_KEYS = {
  visits: "portfolio:visits",
  returningVisits: "portfolio:returning-visits",
  resumeDownloads: "portfolio:resume-downloads",
  regions: "portfolio:regions",
} as const;

const regionByCountry: Record<string, string> = {
  IN: "India",
  US: "North America", CA: "North America", MX: "North America",
  GB: "Europe", IE: "Europe", FR: "Europe", DE: "Europe", ES: "Europe", IT: "Europe", NL: "Europe", BE: "Europe", PT: "Europe", CH: "Europe", AT: "Europe", SE: "Europe", NO: "Europe", DK: "Europe", FI: "Europe", PL: "Europe", CZ: "Europe", RO: "Europe", GR: "Europe", UA: "Europe",
  AE: "Middle East", SA: "Middle East", QA: "Middle East", KW: "Middle East", BH: "Middle East", OM: "Middle East", IL: "Middle East", JO: "Middle East", TR: "Middle East",
  SG: "Asia Pacific", AU: "Asia Pacific", NZ: "Asia Pacific", JP: "Asia Pacific", KR: "Asia Pacific", CN: "Asia Pacific", HK: "Asia Pacific", TW: "Asia Pacific", ID: "Asia Pacific", MY: "Asia Pacific", TH: "Asia Pacific", PH: "Asia Pacific", VN: "Asia Pacific", BD: "Asia Pacific", LK: "Asia Pacific", NP: "Asia Pacific", PK: "Asia Pacific",
  BR: "Latin America", AR: "Latin America", CL: "Latin America", CO: "Latin America", PE: "Latin America", UY: "Latin America",
  ZA: "Africa", NG: "Africa", KE: "Africa", EG: "Africa", GH: "Africa", MA: "Africa",
};

export function regionFromCountry(country: string | null) {
  if (!country) return "Other";
  return regionByCountry[country.toUpperCase()] ?? "Other";
}

export function isLikelyBot(userAgent: string | null) {
  return !userAgent || /bot|crawler|spider|headless|lighthouse|preview|vercel-screenshot/i.test(userAgent);
}

export function visibleRegions(entries: Record<string, number>, minimum = 2) {
  return Object.entries(entries)
    .filter(([, visits]) => Number.isFinite(visits) && visits >= minimum)
    .sort((a, b) => b[1] - a[1])
    .map(([region, visits]) => ({ region, visits }));
}
