import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { companyInfo } from "@/lib/site-content";

export async function POST(req: Request) {
  try {
    const { fullName, phone, email, serviceType, message, company } = await req.json();

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // Use STARTTLS for 587 to avoid common firewall/IPv6 blocks on 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: companyInfo.email,
      replyTo: email,
      subject: `New Service Request: ${serviceType} (from ${fullName})`,
      text: `
        Name: ${fullName}
        Company: ${company || 'N/A'}
        Phone: ${phone}
        Email: ${email}
        Service Requested: ${serviceType}
        
        Message:
        ${message}
      `,
      html: `
        <h2 style="color: #e8a33d;">New Service Request</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service Requested:</strong> ${serviceType}</p>
        <br />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ ok: true, message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { ok: false, message: "Failed to send email. Please configure SMTP settings in .env" },
      { status: 500 }
    );
  }
}
