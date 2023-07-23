import AdminContactEmail from "@/emails/AdminContact";
import ContactEmail from "@/emails/ClientContact";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type RequestBody = {
  firstName: string;
  lastName?: string;
  email: string;
  message: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as RequestBody;
    const contactName = [body.firstName, body.lastName]
      .filter(Boolean)
      .join(" ");

    // Send the email to the user
    await resend.sendEmail({
      from: "hello@umar.codes",
      to: body.email,
      subject: "Hello from All Drives",
      react: ContactEmail({
        contactName,
      }),
    });

    // Send the email to me
    await resend.sendEmail({
      from: "hello@umar.codes",
      to: body.email,
      subject: "New Contact Form Submission",
      react: AdminContactEmail({
        contactName,
        message: body.message,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false });
  }
}
