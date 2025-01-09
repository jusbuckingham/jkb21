import { NextResponse } from 'next/server';

export async function middleware(request: Request) {
    const token = request.cookies.get('token'); // Use a JWT or session to identify the user

    if (!token) {
        return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    // Fetch subscription status from your database
    const isSubscribed = true; // Replace with real subscription status

    if (!isSubscribed) {
        return NextResponse.redirect(new URL('/pricing', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*', '/content/:path*'],
};