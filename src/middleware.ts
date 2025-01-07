import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token');
    const authPages = ['/auth/login', '/auth/signup'];

    if (!token && !authPages.includes(request.nextUrl.pathname)) {
        return NextResponse.redirect(new URL('/auth/login', request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*', '/content/:path*'],
};