import { createFileRoute } from '@tanstack/react-router'
import Razorpay from 'razorpay'
import { z } from 'zod'
import { supabaseAdmin } from '@/server/supabase'
import { ZONES, getSeatSummary } from '@/server/retail-realtime'

const AMOUNT_INR = 7500
const AMOUNT_PAISE = AMOUNT_INR * 100

const bodySchema = z.object({
  bookingId: z.string().uuid(),
})

export const Route = createFileRoute('/api/retail-realtime/create-order')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const keyId = process.env.RAZORPAY_KEY_ID
        const keySecret = process.env.RAZORPAY_KEY_SECRET

        if (!keyId || !keySecret) {
          return Response.json(
            {
              error: 'PAYMENT_NOT_CONFIGURED',
              message:
                'Razorpay credentials have not been added yet. Set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET to enable this endpoint.',
            },
            { status: 501 },
          )
        }

        let body: unknown
        try {
          body = await request.json()
        } catch {
          return Response.json({ error: 'Invalid JSON body' }, { status: 400 })
        }

        const parsed = bodySchema.safeParse(body)
        if (!parsed.success) {
          return Response.json(
            { error: 'Invalid input', details: parsed.error.flatten() },
            { status: 400 },
          )
        }

        const { bookingId } = parsed.data

        const { data: booking, error: fetchError } = await supabaseAdmin
          .from('bookings')
          .select('id, zone, payment_status')
          .eq('id', bookingId)
          .single()

        if (fetchError || !booking) {
          return Response.json({ error: 'BOOKING_NOT_FOUND' }, { status: 404 })
        }

        if (booking.payment_status === 'paid') {
          return Response.json({ error: 'ALREADY_PAID' }, { status: 409 })
        }

        try {
          const summary = await getSeatSummary()
          const zone = booking.zone as (typeof ZONES)[number]

          if (summary.soldOut) {
            return Response.json({ error: 'SOLD_OUT' }, { status: 409 })
          }
          if (summary.zones[zone]?.full) {
            return Response.json({ error: 'ZONE_FULL' }, { status: 409 })
          }
        } catch (err) {
          console.error('[create-order] seat check failed', err)
          return Response.json(
            { error: 'Could not verify seat availability' },
            { status: 500 },
          )
        }

        const razorpay = new Razorpay({ key_id: keyId, key_secret: keySecret })

        try {
          const order = await razorpay.orders.create({
            amount: AMOUNT_PAISE,
            currency: 'INR',
            receipt: bookingId,
            notes: {
              bookingId,
              zone: booking.zone,
              program: 'retail-realtime',
            },
          })

          const { error: updateError } = await supabaseAdmin
            .from('bookings')
            .update({ razorpay_order_id: order.id })
            .eq('id', bookingId)

          if (updateError) {
            console.error('[create-order] failed to save order id', updateError)
            return Response.json(
              { error: 'Could not save order reference' },
              { status: 500 },
            )
          }

          return Response.json({
            orderId: order.id,
            amount: AMOUNT_PAISE,
            currency: 'INR',
            keyId,
            bookingId,
          })
        } catch (err) {
          console.error('[create-order] Razorpay order creation failed', err)
          return Response.json(
            { error: 'Could not create payment order' },
            { status: 500 },
          )
        }
      },
    },
  },
})