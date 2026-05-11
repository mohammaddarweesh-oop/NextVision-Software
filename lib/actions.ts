"use server";

import nodemailer from "nodemailer";
import { logger } from "./logger";

export interface ContactFormState {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
}

function validateField(value: FormDataEntryValue | null, label: string, minLength: number): string | null {
  if (!value || typeof value !== "string" || value.trim().length < minLength) {
    return `${label} must be at least ${minLength} characters`;
  }
  return null;
}

function validateEmail(value: FormDataEntryValue | null): string | null {
  if (!value || typeof value !== "string") return "Email is required";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value.trim())) return "Invalid email address";
  return null;
}

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });
}

export async function submitContact(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const service = formData.get("service");
  const message = formData.get("message");

  const errors: Record<string, string> = {};

  const firstNameErr = validateField(firstName, "First name", 1);
  if (firstNameErr) errors.firstName = firstNameErr;

  const lastNameErr = validateField(lastName, "Last name", 1);
  if (lastNameErr) errors.lastName = lastNameErr;

  const emailErr = validateEmail(email);
  if (emailErr) errors.email = emailErr;

  const serviceErr = validateField(service, "Service", 1);
  if (serviceErr) errors.service = serviceErr;

  const messageErr = validateField(message, "Message", 10);
  if (messageErr) errors.message = messageErr;

  if (Object.keys(errors).length > 0) {
    logger.warn("Contact form validation failed", {
      errors: Object.keys(errors),
      email: email?.toString().slice(0, 3) + "***",
    });
    return { success: false, message: "Please fix the errors below", errors };
  }

  try {
    const payload = {
      firstName: (firstName as string).trim(),
      lastName: (lastName as string).trim(),
      email: (email as string).trim(),
      service: (service as string).trim(),
      message: (message as string).trim(),
    };

    const transporter = createTransporter();
    await transporter.sendMail({
      from: `"NextVision Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Form Submission — ${payload.service}`,
      text: `
Name: ${payload.firstName} ${payload.lastName}
Email: ${payload.email}
Service: ${payload.service}
Message:
${payload.message}
      `.trim(),
      html: `
<h2>New Contact Form Submission</h2>
<table style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif;">
  <tr><td style="padding:8px 12px;font-weight:700;background:#f5f5f5;">Name</td><td style="padding:8px 12px;">${payload.firstName} ${payload.lastName}</td></tr>
  <tr><td style="padding:8px 12px;font-weight:700;background:#f5f5f5;">Email</td><td style="padding:8px 12px;"><a href="mailto:${payload.email}">${payload.email}</a></td></tr>
  <tr><td style="padding:8px 12px;font-weight:700;background:#f5f5f5;">Service</td><td style="padding:8px 12px;">${payload.service}</td></tr>
  <tr><td style="padding:8px 12px;font-weight:700;background:#f5f5f5;">Message</td><td style="padding:8px 12px;white-space:pre-wrap;">${payload.message}</td></tr>
</table>
      `.trim(),
    });

    logger.info("Contact form submitted and emailed", {
      email: payload.email.slice(0, 3) + "***",
    });

    return {
      success: true,
      message: "Thank you! We'll get back to you within 24 hours.",
    };
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    logger.error("Contact form email failed", { error: errorMessage });
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
