import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  restaurant?: string;
  email?: string;
  phone?: string;
  city?: string;
  message?: string;
};

type ResendError = {
  message?: string;
  name?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getFromAddress() {
  const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim() || "onboarding@resend.dev";
  const fromName = process.env.CONTACT_FROM_NAME?.trim() || "FoodConsultPro";
  return `${fromName} <${fromEmail}>`;
}

function getResendUserMessage(error: ResendError) {
  const message = error.message?.toLowerCase() ?? "";

  if (message.includes("api key") || message.includes("invalid key")) {
    return "Email service is misconfigured. Please contact us by phone or WhatsApp.";
  }

  if (
    message.includes("only send") ||
    message.includes("testing emails") ||
    message.includes("your own email")
  ) {
    return "Email is in test mode. Please call or WhatsApp us directly, and we will get back to you.";
  }

  if (message.includes("verify") || message.includes("domain") || message.includes("not verified")) {
    return "Email sender is not verified yet. Please call or WhatsApp us directly.";
  }

  return "Unable to send your request right now. Please try again or contact us by phone.";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim();
    const restaurant = body.restaurant?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim();
    const city = body.city?.trim();
    const message = body.message?.trim() || "No message provided.";

    if (!name || !restaurant || !email || !phone || !city) {
      return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY?.trim();
    const contactEmail = process.env.CONTACT_EMAIL?.trim();

    if (!resendApiKey || !contactEmail) {
      return NextResponse.json(
        { error: "Email service is not configured. Please try again later." },
        { status: 500 },
      );
    }

    if (!resendApiKey.startsWith("re_")) {
      console.error("Invalid RESEND_API_KEY format");
      return NextResponse.json(
        { error: "Email service is not configured correctly. Please contact us by phone or WhatsApp." },
        { status: 500 },
      );
    }

    const resend = new Resend(resendApiKey);

    const { error } = await resend.emails.send({
      from: getFromAddress(),
      to: contactEmail,
      replyTo: email,
      subject: `New Consultation Request: ${restaurant}`,
      html: `
        <h2>New consultation request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Restaurant:</strong> ${escapeHtml(restaurant)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>City:</strong> ${escapeHtml(city)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", JSON.stringify(error));
      return NextResponse.json({ error: getResendUserMessage(error) }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
