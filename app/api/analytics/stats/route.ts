import { NextResponse } from "next/server";
import { getPublicAnalytics } from "../../../lib/analytics-store";

export async function GET() {
  try {
    const stats = await getPublicAnalytics();
    return NextResponse.json(stats, { headers: { "cache-control": "public, s-maxage=60, stale-while-revalidate=300" } });
  } catch {
    return NextResponse.json({ configured: false, visits: 0, uniqueVisits: 0, returningVisits: 0, resumeDownloads: 0, regions: [] }, { status: 503 });
  }
}
