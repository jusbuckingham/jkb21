import { stripe } from '@/utils/stripe';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { email } = await request.json();

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'subscription',
        line_items: [
            {
                price: process.env.STRIPE_PRICE_ID, // Your product price ID
                quantity: 1,
            },
        ],
        customer_email: email, // Optional: Automatically pre-fill the user's email
        success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/pricing`,
    });

    return NextResponse.json({ url: session.url });
}