import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = (await request.json()) as {
      name: string;
      email: string;
      message: string;
    };

    const apiKey = process.env.SENDGRID_API_KEY;
    const fromEmail = process.env.SENDGRID_FROM_EMAIL ?? "davemanning75@gmail.com";
    const toEmail = process.env.SENDGRID_TO_EMAIL ?? "davemanning75@gmail.com";

    if (!apiKey) {
      console.warn("SENDGRID_API_KEY is not set. Email not sent.");
      return NextResponse.json({ ok: true, warning: "Email not sent (SENDGRID_API_KEY not configured)" });
    }

    const subject = `email from davem.ca`;
    const content = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    const body = {
      personalizations: [
        {
          to: [{ email: toEmail }],
          subject,
        },
      ],
      from: { email: fromEmail },
      content: [
        {
          type: "text/plain",
          value: content,
        },
      ],
    };

    const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("SendGrid error", errorText);
      return NextResponse.json({ ok: false, error: errorText }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: (err as Error).message }, { status: 500 });
  }
}
