import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  revenue?: string;
  platform?: string;
  services?: string[];
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create email HTML
    const emailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #8539bf; border-bottom: 2px solid #8539bf; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>

        <div style="margin: 20px 0;">
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          ${body.phone ? `<p><strong>Phone:</strong> ${body.phone}</p>` : ''}
          ${body.company ? `<p><strong>Company:</strong> ${body.company}</p>` : ''}
          ${body.revenue ? `<p><strong>Monthly Revenue:</strong> ${body.revenue}</p>` : ''}
          ${body.platform ? `<p><strong>Interested Platform:</strong> ${body.platform}</p>` : ''}
          ${body.services && body.services.length > 0 ? `<p><strong>Services Interested In:</strong> ${body.services.join(', ')}</p>` : ''}
        </div>

        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Message:</h3>
          <p style="color: #666; line-height: 1.6;">${body.message.replace(/\n/g, '<br>')}</p>
        </div>

        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <p style="font-size: 12px; color: #999;">
          This is an automated email from your EcommGlobe website contact form.
        </p>
      </div>
    `;

    // Send email to admin
    const adminResponse = await resend.emails.send({
      from: 'noreply@ecommglobe.com',
      to: 'axoradigitals@gmail.com',
      subject: `New Contact Form Submission from ${body.name}`,
      html: emailHTML,
    });

    if (adminResponse.error) {
      console.error('Error sending admin email:', adminResponse.error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Send confirmation email to user
    const confirmationHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #8539bf;">Thank You for Contacting EcommGlobe!</h2>

        <p>Hi ${body.name},</p>

        <p>We've received your message and appreciate you reaching out. Our team will review your inquiry and get back to you within 24 hours.</p>

        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Your Information:</h3>
          <p style="color: #666;"><strong>Email:</strong> ${body.email}</p>
          ${body.phone ? `<p style="color: #666;"><strong>Phone:</strong> ${body.phone}</p>` : ''}
          ${body.company ? `<p style="color: #666;"><strong>Company:</strong> ${body.company}</p>` : ''}
        </div>

        <p>In the meantime, feel free to explore our services or contact us directly at:</p>
        <p>
          <strong>Phone:</strong> +1 (469) 205-0582<br>
          <strong>Email:</strong> info@ecommglobe.com<br>
          <strong>Address:</strong> 1500 Fountain Park, Stafford, TX 77477
        </p>

        <p style="color: #666;">Best regards,<br><strong>The EcommGlobe Team</strong></p>

        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <p style="font-size: 12px; color: #999;">
          © 2026 EcommGlobe. All rights reserved.
        </p>
      </div>
    `;

    await resend.emails.send({
      from: 'noreply@ecommglobe.com',
      to: body.email,
      subject: 'We Received Your Message - EcommGlobe',
      html: confirmationHTML,
    });

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
