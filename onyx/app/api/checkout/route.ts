import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { CartItem } from '@/store/useCartStore'
import { products } from '@/store/products'

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

    // Map cart items to Stripe line_items format SECURELY
    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = items.map((item) => {
      // SECURE CALCULATION: Look up the real product in our "database" (products.ts)
      const authenticProduct = products.find(p => p.slug === item.productId || p.slug === item.slug)
      
      if (!authenticProduct) {
        throw new Error(`Invalid product ID in cart: ${item.slug}`)
      }

      // Start with the authentic base price
      let unitPrice = authenticProduct.price

      // If they selected a plan, verify its price
      if (item.plan) {
        const authenticPlan = authenticProduct.plans?.find(p => p.id === item.plan?.id)
        if (authenticPlan) {
          unitPrice += authenticPlan.price
        }
      }

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
            name: authenticProduct.name, // Use authentic name
            description: description || undefined,
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
