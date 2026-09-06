import { NextResponse, type NextRequest } from 'next/server';

// 1) Subdominios que viven en el mismo proyecto:
//      review.thetoothboutique.com -> /review   (embudo de reseñas, noindex)
//      unete.thetoothboutique.com  -> /careers  (aplicaciones de trabajo, noindex)
// 2) Cualquier host que no sea el dominio real (previews y proyectos de revisión en
//    *.vercel.app) recibe X-Robots-Tag: noindex para no indexar contenido duplicado.
const CANONICAL_HOSTS = ['thetoothboutique.com', 'www.thetoothboutique.com', 'review.thetoothboutique.com', 'unete.thetoothboutique.com'];

export default function proxy(request: NextRequest) {
  const host = (request.headers.get('host') ?? '').split(':')[0];
  const { pathname } = request.nextUrl;

  let response: NextResponse | undefined;

  if (pathname === '/') {
    if (host.startsWith('review.')) response = NextResponse.rewrite(new URL('/review', request.url));
    else if (host.startsWith('unete.')) response = NextResponse.rewrite(new URL('/careers', request.url));
  }

  response ??= NextResponse.next();

  const isLocal = host === 'localhost' || host === '127.0.0.1';
  if (!isLocal && !CANONICAL_HOSTS.includes(host)) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.png|.*\\.(?:webp|png|jpg|svg|txt|xml)$).*)'],
};
