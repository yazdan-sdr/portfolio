import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const { name, lastName, email, subject, message } = await request.json();

    const { error } = await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: "yazdansdr@gmail.com",
        subject: subject,
        html: `
      <p><strong>From:</strong> ${name} ${lastName} (${email})</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
    });

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
}
