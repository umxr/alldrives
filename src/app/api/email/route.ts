import ContactEmail from "@/emails/contact";
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

    resend.sendEmail({
      from: "umarg1997@gmail.com",
      to: body.email,
      subject: "Hello from Resend",
      react: ContactEmail({
        contactName,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false });
  }
}
