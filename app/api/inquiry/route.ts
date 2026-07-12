import { NextResponse } from "next/server";

type InquiryPayload = {
  name?: string;
  email?: string;
  phone?: string;
  product?: string;
  message?: string;
  locale?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as InquiryPayload | null;

  if (!payload?.name || !payload?.email || !payload?.message) {
    return NextResponse.json({ ok: false, message: "Missing required fields" }, { status: 400 });
  }

  const inquiry = {
    ...payload,
    source: "website",
    receivedAt: new Date().toISOString()
  };

  // Reserved backend integration point:
  // await fetch(`${process.env.ADMIN_API_BASE_URL}/inquiries`, { method: "POST", body: JSON.stringify(inquiry) })
  console.info("New packaging inquiry", inquiry);

  return NextResponse.json({ ok: true, inquiryId: crypto.randomUUID() });
}
