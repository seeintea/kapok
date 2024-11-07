import { NextResponse } from 'next/server';

export function middleware(request: Request) {
    const reqHeaders = new Headers(request.headers);
    reqHeaders.set('x-request-url', request.url);
    return NextResponse.next({
        request: {
            headers: reqHeaders,
        }
    });
}