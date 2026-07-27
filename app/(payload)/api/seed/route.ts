import { NextResponse } from "next/server";

import { getPayloadClient } from "@/lib/payload";
import { runSeed } from "@/lib/seed";

export async function POST(request: Request) {
  const secret = request.headers.get("x-seed-secret");

  if (!process.env.PAYLOAD_SECRET || secret !== process.env.PAYLOAD_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const payload = await getPayloadClient();
  const summary = await runSeed(payload);

  return NextResponse.json({ message: "Seed complete.", summary });
}
