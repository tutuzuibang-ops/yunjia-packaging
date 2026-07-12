import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type InquiryPayload = {
  name?: string;
  company?: string;
  email?: string;
  country?: string;
  product?: string;
  quantity?: string;
  message?: string;
  locale?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as InquiryPayload | null;

  if (!payload?.name || !payload?.email || !payload?.message) {
    return NextResponse.json(
      { ok: false, message: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    await resend.emails.send({
      from: "Yovia Pack <noreply@yoviapack.com>",
      to: ["timi@yoviapack.com"],
      subject: `New Inquiry from ${payload.name}`,
      html: `
        <h2>New Packaging Inquiry</h2>
        <p><b>Name:</b> ${payload.name}</p>
        <p><b>Company:</b> ${payload.company || "-"}</p>
        <p><b>Email:</b> ${payload.email}</p>
        <p><b>Country:</b> ${payload.country || "-"}</p>
        <p><b>Product:</b> ${payload.product || "-"}</p>
        <p><b>Quantity:</b> ${payload.quantity || "-"}</p>
        <p><b>Message:</b> ${payload.message}</p>
      `,
    });

    console.log("Inquiry email sent successfully");

    return NextResponse.json({ ok: true });

  } catch (error) {
    console.error("Email sending failed:", error);

    return NextResponse.json(
      { ok: false, message: "Email failed" },
      { status: 500 }
    );
  }
}