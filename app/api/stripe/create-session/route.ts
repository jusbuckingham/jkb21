import { NextResponse } from 'next/server';
import { stripe } from '@/utils/stripe';

export async function POST(request: Request) {
    const { email } = await request.json();

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'subscription',
        line_items: [
            {
                price: process.env.STRIPE_PRICE_ID, // Set your Stripe Price ID here
                quantity: 1,
            },
        ],
        customer_email: email,
        success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/dashboard`,
        cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/pricing`,
    });

    return NextResponse.json({ url: session.url });
}