import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { companyInfo } from "@/lib/site-content";

type ContactPayload = {
  fullName: string;
  phone: string;
  email: string;
  serviceType: string;
  message: string;
  captchaAnswer: string;
  company?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;

  if (body.company) {
    return NextResponse.json({ ok: true, message: "Request received." });
  }

  if (body.captchaAnswer.trim() !== "12") {
    return NextResponse.json(
      { ok: false, message: "Captcha verification failed." },
      { status: 400 },
    );
  }

  if (!body.fullName || !body.phone || !body.email || !body.serviceType || !body.message) {
    return NextResponse.json(
      { ok: false, message: "Please fill all required fields." },
      { status: 400 },
    );
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_RECEIVER_EMAIL || companyInfo.email;

  if (!host || !user || !pass) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Email delivery is not configured yet. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS.",
      },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `"Marafeq Website" <${user}>`,
    to,
    subject: `New quote request - ${body.serviceType}`,
    replyTo: body.email,
    text: [
      `Name: ${body.fullName}`,
      `Phone: ${body.phone}`,
      `Email: ${body.email}`,
      `Service: ${body.serviceType}`,
      "",
      body.message,
    ].join("\n"),
  });

  return NextResponse.json({
    ok: true,
    message: "Your request has been sent successfully. We will contact you soon.",
  });
}
