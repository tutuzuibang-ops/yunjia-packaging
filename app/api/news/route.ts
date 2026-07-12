import { NextResponse } from "next/server";
import { news } from "@/lib/data";

export async function GET() {
  return NextResponse.json({ ok: true, data: news });
}
