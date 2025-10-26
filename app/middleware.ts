import { NextRequest, NextResponse } from 'next/server';

const allowedPaths = new Set([
  '/',
  '/about',
  '/contact',
  '/ogloszenia',
]);

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (!allowedPaths.has(pathname)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml|json)$).*)',
  ],
};