import { NextResponse, type NextRequest } from 'next/server';

// Subdominios que viven en el mismo proyecto:
//   review.thetoothboutique.com  -> /review   (embudo de reseñas, noindex)
//   unete.thetoothboutique.com   -> /careers  (aplicaciones de trabajo, noindex)
export default function proxy(request: NextRequest) {
  const host = request.headers.get('host') ?? '';
  const { pathname } = request.nextUrl;

  if (pathname === '/') {
    if (host.startsWith('review.')) {
      return NextResponse.rewrite(new URL('/review', request.url));
    }
    if (host.startsWith('unete.')) {
      return NextResponse.rewrite(new URL('/careers', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/',
};
