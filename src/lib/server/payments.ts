import { createServerFn } from '@tanstack/react-start/server'
import { notionDb } from '~/lib/notion'
import { verifyToken } from './auth'
import type { Payment, PaymentStatus, PaymentType } from '~/types'

// PayPal configuration
const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID || ''
const PAYPAL_SECRET = process.env.PAYPAL_SECRET || ''
const PAYPAL_MODE = process.env.PAYPAL_MODE || 'sandbox'

const PAYPAL_BASE_URL = PAYPAL_MODE === 'production'
  ? 'https://api-m.paypal.com'
  : 'https://api-m.sandbox.paypal.com'

// Get PayPal access token
async function getPayPalAccessToken(): Promise<string | null> {
  try {
    const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_SECRET}`).toString('base64')
    const response = await fetch(`${PAYPAL_BASE_URL}/v1/oauth2/token`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    })

    if (!response.ok) {
      console.error('PayPal auth failed:', await response.text())
      return null
    }

    const data = await response.json()
    return data.access_token
  } catch (error) {
    console.error('PayPal auth error:', error)
    return null
  }
}

export interface PaymentResponse {
  success: boolean
  data?: {
    orderId?: string
    approvalUrl?: string
    payment?: Payment
  }
  error?: string
}

// Server function: Create PayPal order
export const createPayPalOrder = createServerFn({ method: 'POST' })
  .validator((data: {
    appointmentId: string
    amount: number
    type: PaymentType
    description: string
  }) => data)
  .handler(async ({ data }): Promise<PaymentResponse> => {
    try {
      const accessToken = await getPayPalAccessToken()
      if (!accessToken) {
        return { success: false, error: 'PayPal authentication failed' }
      }

      const siteUrl = process.env.SITE_URL || 'http://localhost:3000'

      const orderPayload = {
        intent: 'CAPTURE',
        purchase_units: [{
          reference_id: data.appointmentId,
          description: data.description,
          amount: {
            currency_code: 'USD',
            value: data.amount.toFixed(2),
          },
        }],
        application_context: {
          brand_name: 'Silver Nails',
          landing_page: 'NO_PREFERENCE',
          user_action: 'PAY_NOW',
          return_url: `${siteUrl}/payment/success`,
          cancel_url: `${siteUrl}/payment/cancel`,
        },
      }

      const response = await fetch(`${PAYPAL_BASE_URL}/v2/checkout/orders`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderPayload),
      })

      if (!response.ok) {
        const error = await response.text()
        console.error('PayPal order creation failed:', error)
        return { success: false, error: 'Failed to create PayPal order' }
      }

      const order = await response.json()
      const approvalUrl = order.links?.find((link: any) => link.rel === 'approve')?.href

      return {
        success: true,
        data: {
          orderId: order.id,
          approvalUrl,
        },
      }
    } catch (error) {
      console.error('Create PayPal order error:', error)
      return { success: false, error: 'Failed to create payment' }
    }
  })

// Server function: Capture PayPal payment
export const capturePayPalPayment = createServerFn({ method: 'POST' })
  .validator((data: {
    orderId: string
    appointmentId: string
    type: PaymentType
  }) => data)
  .handler(async ({ data }): Promise<PaymentResponse> => {
    try {
      const accessToken = await getPayPalAccessToken()
      if (!accessToken) {
        return { success: false, error: 'PayPal authentication failed' }
      }

      const response = await fetch(
        `${PAYPAL_BASE_URL}/v2/checkout/orders/${data.orderId}/capture`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      )

      if (!response.ok) {
        const error = await response.text()
        console.error('PayPal capture failed:', error)
        return { success: false, error: 'Failed to capture payment' }
      }

      const captureData = await response.json()
      const capturedAmount = captureData.purchase_units?.[0]?.payments?.captures?.[0]?.amount?.value

      // If this was a deposit, update the appointment
      if (data.type === 'deposit' && capturedAmount) {
        await notionDb.appointments.update(data.appointmentId, {
          depositPaid: true,
          depositAmount: parseFloat(capturedAmount),
        })
      }

      return {
        success: true,
        data: {
          orderId: captureData.id,
          payment: {
            id: captureData.id,
            appointmentId: data.appointmentId,
            amount: parseFloat(capturedAmount || '0'),
            type: data.type,
            status: 'completed' as PaymentStatus,
            method: 'paypal',
            transactionId: captureData.id,
            createdAt: new Date().toISOString(),
          },
        },
      }
    } catch (error) {
      console.error('Capture PayPal payment error:', error)
      return { success: false, error: 'Failed to process payment' }
    }
  })

// Server function: Get PayPal client ID for frontend
export const getPayPalClientId = createServerFn({ method: 'GET' })
  .handler(async (): Promise<{ success: boolean; clientId?: string }> => {
    return {
      success: true,
      clientId: PAYPAL_CLIENT_ID,
    }
  })

// Server function: Process tip payment
export const processTipPayment = createServerFn({ method: 'POST' })
  .validator((data: {
    appointmentId: string
    amount: number
    staffId: string
  }) => data)
  .handler(async ({ data }): Promise<PaymentResponse> => {
    try {
      // Create PayPal order for tip
      const accessToken = await getPayPalAccessToken()
      if (!accessToken) {
        return { success: false, error: 'PayPal authentication failed' }
      }

      const siteUrl = process.env.SITE_URL || 'http://localhost:3000'

      const orderPayload = {
        intent: 'CAPTURE',
        purchase_units: [{
          reference_id: `tip-${data.appointmentId}`,
          description: `Tip for service at Silver Nails`,
          amount: {
            currency_code: 'USD',
            value: data.amount.toFixed(2),
          },
        }],
        application_context: {
          brand_name: 'Silver Nails',
          landing_page: 'NO_PREFERENCE',
          user_action: 'PAY_NOW',
          return_url: `${siteUrl}/payment/tip-success`,
          cancel_url: `${siteUrl}/payment/cancel`,
        },
      }

      const response = await fetch(`${PAYPAL_BASE_URL}/v2/checkout/orders`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderPayload),
      })

      if (!response.ok) {
        return { success: false, error: 'Failed to create tip payment' }
      }

      const order = await response.json()
      const approvalUrl = order.links?.find((link: any) => link.rel === 'approve')?.href

      return {
        success: true,
        data: {
          orderId: order.id,
          approvalUrl,
        },
      }
    } catch (error) {
      console.error('Process tip error:', error)
      return { success: false, error: 'Failed to process tip' }
    }
  })
