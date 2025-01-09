import { stripe } from '@/utils/stripe';
import { buffer } from 'micro';
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export const config = {
    api: {
        bodyParser: false,
    },
};

export async function POST(req: Request) {
    const buf = await buffer(req.body);
    const sig = req.headers['stripe-signature'];

    try {
        const event = stripe.webhooks.constructEvent(
            buf,
            sig!,
            process.env.STRIPE_WEBHOOK_SECRET!
        );

        if (event.type === 'customer.subscription.created') {
            const subscription = event.data.object as any;

            await prisma.subscription.create({
                data: {
                    stripeSubscriptionId: subscription.id,
                    status: subscription.status,
                    userId: subscription.metadata.userId, // Attach to your user
                },
            });
        }

        return NextResponse.json({ received: true });
    } catch (err) {
        console.error('Webhook error:', err);
        return NextResponse.json({ error: 'Webhook handler failed' }, { status: 400 });
    }
}