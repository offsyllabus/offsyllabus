import { createFileRoute } from '@tanstack/react-router'
import crypto from 'crypto'
import { supabaseAdmin } from '@/server/supabase'

export const Route = createFileRoute('/api/webhook')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET

        if (!webhookSecret) {
          console.error('[webhook] RAZORPAY_WEBHOOK_SECRET is not set')
          return Response.json(
            { error: 'WEBHOOK_NOT_CONFIGURED' },
            { status: 501 },
          )
        }

        const rawBody = await request.text()
        const signature = request.headers.get('x-razorpay-signature')

        if (!signature) {
          return Response.json({ error: 'MISSING_SIGNATURE' }, { status: 400 })
        }

        const expectedSignature = crypto
          .createHmac('sha256', webhookSecret)
          .update(rawBody)
          .digest('hex')

        if (expectedSignature !== signature) {
          console.error('[webhook] signature mismatch')
          return Response.json({ error: 'INVALID_SIGNATURE' }, { status: 400 })
        }

        let event: any
        try {
          event = JSON.parse(rawBody)
        } catch {
          return Response.json({ error: 'Invalid JSON body' }, { status: 400 })
        }

        if (event.event !== 'payment.captured') {
          // Acknowledge other events without acting on them
          return Response.json({ received: true })
        }

        try {
          const payment = event.payload?.payment?.entity
          const orderId = payment?.order_id

          if (!orderId) {
            console.error('[webhook] no order_id in payload')
            return Response.json({ error: 'MISSING_ORDER_ID' }, { status: 400 })
          }

          const { data: booking, error: fetchError } = await supabaseAdmin
            .from('bookings')
            .select('id, payment_status')
            .eq('razorpay_order_id', orderId)
            .single()

          if (fetchError || !booking) {
            console.error('[webhook] booking not found for order', orderId)
            return Response.json({ error: 'BOOKING_NOT_FOUND' }, { status: 404 })
          }

          if (booking.payment_status === 'paid') {
            // Already processed, acknowledge idempotently
            return Response.json({ received: true, alreadyPaid: true })
          }

          const { error: updateError } = await supabaseAdmin
            .from('bookings')
            .update({
              payment_status: 'paid',
              razorpay_payment_id: payment.id,
            })
            .eq('id', booking.id)

          if (updateError) {
            console.error('[webhook] failed to update booking', updateError)
            return Response.json(
              { error: 'Could not update booking' },
              { status: 500 },
            )
          }

          return Response.json({ received: true })
        } catch (err) {
          console.error('[webhook] processing failed', err)
          return Response.json(
            { error: 'Webhook processing failed' },
            { status: 500 },
          )
        }
      },
    },
  },
})