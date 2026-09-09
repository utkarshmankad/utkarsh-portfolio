"use client";

import { useEffect, useState } from "react";
import type { PublicAnalytics } from "../lib/analytics-store";

const emptyStats: PublicAnalytics = { configured: false, visits: 0, uniqueVisits: 0, returningVisits: 0, resumeDownloads: 0, regions: [] };

export function LiveAnalytics() {
  const [stats, setStats] = useState<PublicAnalytics>(emptyStats);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        await fetch("/api/analytics/visit", { method: "POST", keepalive: true });
        const response = await fetch("/api/analytics/stats", { cache: "no-store" });
        if (response.ok && active) setStats(await response.json());
      } finally {
        if (active) setLoaded(true);
      }
    }
    void load();
    return () => { active = false; };
  }, []);

  const numbers = [["PROFILE_VISITS", stats.visits], ["UNIQUE_BROWSERS", stats.uniqueVisits], ["RETURN_VISITS", stats.returningVisits], ["RESUME_DOWNLOADS", stats.resumeDownloads]] as const;

  return <section className="analytics-panel shell" aria-labelledby="analytics-title">
    <div className="analytics-heading"><div><p><span>LIVE</span> Portfolio telemetry</p><h2 id="analytics-title">Reach, measured without surveillance.</h2></div><small>{loaded && stats.configured ? "AGGREGATES · 60S REFRESH" : "DATA STORE PENDING"}</small></div>
    <div className="analytics-grid">
      <div className="analytics-numbers">{numbers.map(([label, value]) => <article key={label}><small>{label}</small><b>{loaded && stats.configured ? value.toLocaleString("en-IN") : "—"}</b></article>)}</div>
      <div className="analytics-regions"><small>REGION_SIGNAL[]</small>{stats.regions.length ? <ul>{stats.regions.slice(0, 5).map(({ region, visits }) => <li key={region}><span>{region}</span><b>{visits.toLocaleString("en-IN")}</b></li>)}</ul> : <p>{loaded && stats.configured ? "Regions appear after two visits." : "Connect the analytics store to activate live counters."}</p>}</div>
    </div>
    <p className="analytics-note">Anonymous browser-level counts only. No IP addresses or individual location histories are stored. Return visits are repeat loads from a browser that retains the first-party cookie.</p>
  </section>;
}
