import { createServerFn } from '@tanstack/react-start/server'
import { notionDb } from '~/lib/notion'

// Email configuration - supports Resend or SMTP (Gmail)
const EMAIL_PROVIDER = process.env.EMAIL_PROVIDER || 'resend' // 'resend' or 'smtp'
const RESEND_API_KEY = process.env.RESEND_API_KEY || ''
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@silvernails.com'
const SITE_NAME = 'Silver Nails'

// SMTP configuration (for Gmail)
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com'
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587')
const SMTP_USER = process.env.SMTP_USER || ''
const SMTP_PASSWORD = process.env.SMTP_PASSWORD || ''

interface EmailResponse {
  success: boolean
  messageId?: string
  error?: string
}

// Send email using Resend API
async function sendWithResend(params: {
  to: string
  subject: string
  html: string
  text?: string
}): Promise<EmailResponse> {
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `${SITE_NAME} <${FROM_EMAIL}>`,
        to: params.to,
        subject: params.subject,
        html: params.html,
        text: params.text,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('Resend API error:', error)
      return { success: false, error: 'Failed to send email via Resend' }
    }

    const data = await response.json()
    return { success: true, messageId: data.id }
  } catch (error) {
    console.error('Resend error:', error)
    return { success: false, error: 'Failed to send email via Resend' }
  }
}

// Send email using SMTP (Gmail or other SMTP providers)
// Note: This requires nodemailer package to be installed
async function sendWithSMTP(params: {
  to: string
  subject: string
  html: string
  text?: string
}): Promise<EmailResponse> {
  try {
    // Dynamic import to avoid issues if nodemailer is not installed
    const nodemailer = await import('nodemailer').catch(() => null)

    if (!nodemailer) {
      console.warn('nodemailer not installed - run: pnpm add nodemailer @types/nodemailer')
      return { success: false, error: 'nodemailer not installed' }
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
    })

    const info = await transporter.sendMail({
      from: `"${SITE_NAME}" <${SMTP_USER}>`,
      to: params.to,
      subject: params.subject,
      html: params.html,
      text: params.text,
    })

    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('SMTP error:', error)
    return { success: false, error: 'Failed to send email via SMTP' }
  }
}

// Main send email function - routes to appropriate provider
async function sendEmail(params: {
  to: string
  subject: string
  html: string
  text?: string
}): Promise<EmailResponse> {
  // Check if any email configuration is available
  const hasResend = !!RESEND_API_KEY
  const hasSMTP = !!SMTP_USER && !!SMTP_PASSWORD

  if (!hasResend && !hasSMTP) {
    console.warn('No email configuration found. Set RESEND_API_KEY or SMTP credentials.')
    return { success: true, messageId: 'skipped-no-config' }
  }

  // Use configured provider or fall back to available one
  if (EMAIL_PROVIDER === 'smtp' && hasSMTP) {
    return sendWithSMTP(params)
  } else if (hasResend) {
    return sendWithResend(params)
  } else if (hasSMTP) {
    return sendWithSMTP(params)
  }

  return { success: false, error: 'No email provider configured' }
}

// Email templates
const emailStyles = `
  body { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
  .container { max-width: 600px; margin: 0 auto; padding: 20px; }
  .header { background: linear-gradient(135deg, #A0A7B5, #E6B8B8); padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
  .header h1 { color: white; margin: 0; font-size: 28px; }
  .content { background: #fff; padding: 30px; border: 1px solid #eee; }
  .footer { background: #f9f9f9; padding: 20px; text-align: center; font-size: 12px; color: #888; border-radius: 0 0 8px 8px; }
  .button { display: inline-block; background: linear-gradient(135deg, #A0A7B5, #E6B8B8); color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 10px 0; }
  .details { background: #f9f9f9; padding: 20px; border-radius: 6px; margin: 20px 0; }
  .details p { margin: 5px 0; }
`

// Server function: Send booking confirmation email
export const sendBookingConfirmation = createServerFn({ method: 'POST' })
  .validator((data: {
    appointmentId: string
    clientEmail: string
    clientName: string
    serviceName: string
    date: string
    time: string
    price: number
  }) => data)
  .handler(async ({ data }): Promise<EmailResponse> => {
    const siteUrl = process.env.SITE_URL || 'http://localhost:3000'

    const html = `
      <!DOCTYPE html>
      <html>
      <head><style>${emailStyles}</style></head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✨ ${SITE_NAME}</h1>
          </div>
          <div class="content">
            <h2>Booking Confirmed!</h2>
            <p>Hi ${data.clientName},</p>
            <p>Your appointment has been confirmed. We look forward to seeing you!</p>

            <div class="details">
              <h3>Appointment Details</h3>
              <p><strong>Service:</strong> ${data.serviceName}</p>
              <p><strong>Date:</strong> ${data.date}</p>
              <p><strong>Time:</strong> ${data.time}</p>
              <p><strong>Total:</strong> $${data.price.toFixed(2)}</p>
            </div>

            <p style="text-align: center;">
              <a href="${siteUrl}/account/appointments" class="button">View My Appointments</a>
            </p>

            <p><strong>Location:</strong><br>
            Silver Nails<br>
            123 Main Street<br>
            Rancho Cucamonga, CA 91730</p>

            <p><strong>Need to reschedule?</strong><br>
            Please contact us at least 24 hours before your appointment at (909) 555-1234.</p>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} ${SITE_NAME}. All rights reserved.</p>
            <p>123 Main Street, Rancho Cucamonga, CA 91730</p>
          </div>
        </div>
      </body>
      </html>
    `

    return sendEmail({
      to: data.clientEmail,
      subject: `Booking Confirmed - ${data.serviceName} on ${data.date}`,
      html,
    })
  })

// Server function: Send appointment reminder
export const sendAppointmentReminder = createServerFn({ method: 'POST' })
  .validator((data: {
    appointmentId: string
    clientEmail: string
    clientName: string
    serviceName: string
    date: string
    time: string
  }) => data)
  .handler(async ({ data }): Promise<EmailResponse> => {
    const siteUrl = process.env.SITE_URL || 'http://localhost:3000'

    const html = `
      <!DOCTYPE html>
      <html>
      <head><style>${emailStyles}</style></head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✨ ${SITE_NAME}</h1>
          </div>
          <div class="content">
            <h2>Appointment Reminder</h2>
            <p>Hi ${data.clientName},</p>
            <p>This is a friendly reminder about your upcoming appointment!</p>

            <div class="details">
              <h3>Your Appointment</h3>
              <p><strong>Service:</strong> ${data.serviceName}</p>
              <p><strong>Date:</strong> ${data.date}</p>
              <p><strong>Time:</strong> ${data.time}</p>
            </div>

            <p style="text-align: center;">
              <a href="${siteUrl}/account/appointments" class="button">View Appointment</a>
            </p>

            <p><strong>Location:</strong><br>
            Silver Nails<br>
            123 Main Street<br>
            Rancho Cucamonga, CA 91730</p>

            <p><strong>Need to reschedule?</strong><br>
            Please call us at (909) 555-1234 as soon as possible.</p>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} ${SITE_NAME}. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `

    // Mark reminder as sent
    await notionDb.appointments.update(data.appointmentId, { reminderSent: true })

    return sendEmail({
      to: data.clientEmail,
      subject: `Reminder: Your appointment tomorrow at ${data.time}`,
      html,
    })
  })

// Server function: Send cancellation confirmation
export const sendCancellationEmail = createServerFn({ method: 'POST' })
  .validator((data: {
    clientEmail: string
    clientName: string
    serviceName: string
    date: string
    time: string
  }) => data)
  .handler(async ({ data }): Promise<EmailResponse> => {
    const siteUrl = process.env.SITE_URL || 'http://localhost:3000'

    const html = `
      <!DOCTYPE html>
      <html>
      <head><style>${emailStyles}</style></head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✨ ${SITE_NAME}</h1>
          </div>
          <div class="content">
            <h2>Appointment Cancelled</h2>
            <p>Hi ${data.clientName},</p>
            <p>Your appointment has been cancelled as requested.</p>

            <div class="details">
              <h3>Cancelled Appointment</h3>
              <p><strong>Service:</strong> ${data.serviceName}</p>
              <p><strong>Date:</strong> ${data.date}</p>
              <p><strong>Time:</strong> ${data.time}</p>
            </div>

            <p>We hope to see you again soon!</p>

            <p style="text-align: center;">
              <a href="${siteUrl}/booking" class="button">Book New Appointment</a>
            </p>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} ${SITE_NAME}. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `

    return sendEmail({
      to: data.clientEmail,
      subject: `Appointment Cancelled - ${data.serviceName}`,
      html,
    })
  })

// Server function: Send welcome email for new users
export const sendWelcomeEmail = createServerFn({ method: 'POST' })
  .validator((data: { email: string; firstName: string }) => data)
  .handler(async ({ data }): Promise<EmailResponse> => {
    const siteUrl = process.env.SITE_URL || 'http://localhost:3000'

    const html = `
      <!DOCTYPE html>
      <html>
      <head><style>${emailStyles}</style></head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✨ ${SITE_NAME}</h1>
          </div>
          <div class="content">
            <h2>Welcome to ${SITE_NAME}!</h2>
            <p>Hi ${data.firstName},</p>
            <p>Thank you for creating an account with us! We're excited to have you as part of our family.</p>

            <div class="details">
              <h3>Your Benefits</h3>
              <p>✓ Easy online booking</p>
              <p>✓ View appointment history</p>
              <p>✓ Earn loyalty points</p>
              <p>✓ Exclusive member offers</p>
            </div>

            <p style="text-align: center;">
              <a href="${siteUrl}/booking" class="button">Book Your First Appointment</a>
            </p>

            <p>If you have any questions, feel free to contact us at (909) 555-1234 or reply to this email.</p>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} ${SITE_NAME}. All rights reserved.</p>
            <p>123 Main Street, Rancho Cucamonga, CA 91730</p>
          </div>
        </div>
      </body>
      </html>
    `

    return sendEmail({
      to: data.email,
      subject: `Welcome to ${SITE_NAME}! ✨`,
      html,
    })
  })
