import { NextResponse } from "next/server";
import { Resend } from "resend";

import { contactSchema } from "@/schemas/contactSchema";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function POST(request) {
  try {
    const body = await request.json();

    const {
    //   captchaToken,
      ...formData
    } = body;

    /**
     * Server-side Zod validation
     */
    const validation =
      contactSchema.safeParse(formData);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check your form details.",
          errors:
            validation.error.flatten()
              .fieldErrors,
        },
        { status: 400 }
      );
    }

    /**
     * Verify Google reCAPTCHA
     */
    // if (!captchaToken) {
    //   return NextResponse.json(
    //     {
    //       success: false,
    //       message:
    //         "reCAPTCHA verification is required.",
    //     },
    //     { status: 400 }
    //   );
    // }

    // const captchaResponse =
    //   await fetch(
    //     "https://www.google.com/recaptcha/api/siteverify",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type":
    //           "application/x-www-form-urlencoded",
    //       },
    //       body: new URLSearchParams({
    //         secret:
    //           process.env.RECAPTCHA_SECRET_KEY,
    //         response: captchaToken,
    //       }),
    //     }
    //   );

    // const captchaResult =
    //   await captchaResponse.json();

    // if (!captchaResult.success) {
    //   return NextResponse.json(
    //     {
    //       success: false,
    //       message:
    //         "reCAPTCHA verification failed.",
    //     },
    //     { status: 400 }
    //   );
    // }

    const {
      name,
      email,
      mobile,
      service,
      message,
    } = validation.data;

    /**
     * Send email
     */
    const { error } =
      await resend.emails.send({
        from: process.env.EMAIL_FROM,
        to: [process.env.CONTACT_EMAIL],
        replyTo: email,

        subject:
          `New Website Enquiry - ${name}`,

        text: `
New Website Enquiry

Name: ${name}
Email: ${email}
Mobile: ${mobile}
Service: ${service}

Message:
${message}
        `,
      });

    if (error) {
      console.error(
        "Email error:",
        error
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Unable to send your enquiry.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Your enquiry has been sent successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "Contact API error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}