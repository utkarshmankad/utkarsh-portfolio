import { NextRequest, NextResponse } from "next/server";
import { isLikelyBot, regionFromCountry } from "../../../analytics";
import { recordVisit } from "../../../lib/analytics-store";

const visitorCookie = "um_portfolio_seen";

export async function POST(request: NextRequest) {
  if (isLikelyBot(request.headers.get("user-agent"))) return NextResponse.json({ recorded: false });
  const returning = request.cookies.has(visitorCookie);
  const region = regionFromCountry(request.headers.get("x-vercel-ip-country"));
  try {
    const result = await recordVisit(region, returning);
    const response = NextResponse.json({ recorded: Boolean(result) });
    response.cookies.set(visitorCookie, "1", { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/", maxAge: 60 * 60 * 24 * 365 });
    return response;
  } catch {
    return NextResponse.json({ recorded: false }, { status: 503 });
  }
}
