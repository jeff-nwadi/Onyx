import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { CartItem } from '@/store/useCartStore'

export async function POST(req: Request) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error('Stripe secret key is not configured.')
    }

    // Initialize Stripe securely inside the handler
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2026-02-25.clover',
    })

    const body = await req.json()
    const { items }: { items: CartItem[] } = body

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'Cart is empty' }, { status: 400 })
    }

    // Map cart items to Stripe line_items format
    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = items.map((item) => {
      // Calculate total item price (base price + cellular plan base price if applicable)
      const unitPrice = item.price + (item.plan?.price || 0)

      // Create a description that summarizes the selected variants
      const descriptionParts = []
      if (item.size) descriptionParts.push(`Size: ${item.size.name}`)
      if (item.finish) descriptionParts.push(`Finish: ${item.finish.name}`)
      if (item.plan) descriptionParts.push(`Plan: ${item.plan.name}`)
      const description = descriptionParts.join(' | ')

      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
            description: description || undefined,
            // If images were absolute URLs, we could include them via `images: [item.image]`
            // But since they are StaticImageData from Next.js, Stripe cannot access them securely without a public URL.
          },
          unit_amount: unitPrice * 100, // Stripe expects amounts in cents
        },
        quantity: item.quantity,
      }
    })

    // Establish the origin URL for redirects
    const origin = req.headers.get('origin') || 'http://localhost:3000'

    // Create the Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      billing_address_collection: 'auto',
      shipping_address_collection: {
        allowed_countries: ['US', 'CA', 'GB'], // Define allowed shipping countries
      },
      line_items,
      mode: 'payment',
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel?canceled=true`,
    })

    // Return the session ID / URL to redirect the client
    return NextResponse.json({ id: session.id, url: session.url })
  } catch (error: any) {
    console.error('Stripe Checkout Error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
