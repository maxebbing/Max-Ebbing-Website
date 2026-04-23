import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Bitte alle Felder ausfüllen." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Website Anfrage <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL!,
      subject: `Neue Anfrage von ${name}`,
      replyTo: email,
      text: `
Neue Anfrage über die Website

Name: ${name}
E-Mail: ${email}

Nachricht:
${message}
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Nachricht konnte nicht gesendet werden." },
      { status: 500 }
    );
  }
}