import { NextRequest, NextResponse } from "next/server";
import { isLikelyBot } from "../../../analytics";
import { recordResumeDownload } from "../../../lib/analytics-store";

export async function POST(request: NextRequest) {
  if (isLikelyBot(request.headers.get("user-agent"))) return NextResponse.json({ recorded: false });
  try {
    const result = await recordResumeDownload();
    return NextResponse.json({ recorded: Boolean(result) });
  } catch {
    return NextResponse.json({ recorded: false }, { status: 503 });
  }
}
