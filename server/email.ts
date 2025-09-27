import { MailService } from '@sendgrid/mail';

// Initialize SendGrid with API key from environment
const mailService = new MailService();

if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    console.warn('SENDGRID_API_KEY not configured, skipping email send');
    return false;
  }

  try {
    await mailService.send({
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text,
      html: params.html,
    });
    console.log(`Email sent successfully to ${params.to}`);
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

export function generateContactEmailHtml(contact: any): string {
  return `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${contact.name}</p>
    <p><strong>Email:</strong> ${contact.email}</p>
    ${contact.company ? `<p><strong>Company:</strong> ${contact.company}</p>` : ''}
    ${contact.budget ? `<p><strong>Budget:</strong> ${contact.budget}</p>` : ''}
    ${contact.services && contact.services.length > 0 ? `<p><strong>Services:</strong> ${contact.services.join(', ')}</p>` : ''}
    <p><strong>Message:</strong></p>
    <p>${(contact.message || '').replace(/\n/g, '<br>')}</p>
    <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
  `;
}

export function generateQuoteEmailHtml(quote: any): string {
  return `
    <h2>New Quote Request</h2>
    <p><strong>Service Type:</strong> ${quote.serviceType}</p>
    <p><strong>Complexity:</strong> ${quote.complexity}</p>
    <p><strong>Timeline:</strong> ${quote.timeline}</p>
    <p><strong>Base Price:</strong> $${quote.basePrice}</p>
    <p><strong>Total Price:</strong> $${quote.totalPrice}</p>
    ${quote.addons && quote.addons.length > 0 ? `<p><strong>Add-ons:</strong> ${quote.addons.join(', ')}</p>` : ''}
    ${quote.contactEmail ? `<p><strong>Contact Email:</strong> ${quote.contactEmail}</p>` : ''}
    ${quote.contactName ? `<p><strong>Contact Name:</strong> ${quote.contactName}</p>` : ''}
    <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
  `;
}