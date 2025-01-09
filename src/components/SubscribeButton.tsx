import React from 'react';

const SubscribeButton: React.FC = () => {
    const handleCheckout = async () => {
        const response = await fetch('/api/stripe/create-session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: 'user@example.com' }),
        });

        const { url } = await response.json();
        window.location.href = url; // Redirect to Stripe Checkout
    };

    return (
        <button
            onClick={handleCheckout}
            className="bg-blue-500 text-white py-2 px-4 rounded"
        >
            Subscribe for $11/month
        </button>
    );
};

export default SubscribeButton;