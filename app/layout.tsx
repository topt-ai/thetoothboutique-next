import type { Metadata } from 'next';
import { Montserrat, DM_Mono } from 'next/font/google';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import PixelTracker from '@/components/PixelTracker';
import { SITE } from '@/lib/site';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-montserrat',
  display: 'swap',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
});

const META_PIXEL_ID = '981276728246331';
const GA_MEASUREMENT_ID = 'G-MRYDN4F2GT';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  icons: { icon: '/favicon.png', apple: '/favicon.png' },
  openGraph: { type: 'website', locale: 'es_SV', siteName: SITE.name },
  twitter: { card: 'summary_large_image', site: '@thetoothboutique' },
  other: {
    'geo.region': 'SV-SS',
    'geo.placename': 'San Salvador',
    ICBM: `${SITE.geo.lat}, ${SITE.geo.lng}`,
    'geo.position': `${SITE.geo.lat};${SITE.geo.lng}`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-SV" className={`${montserrat.variable} ${dmMono.variable}`}>
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`}
        </Script>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
        </Script>
      </head>
      <body>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        {children}
        <PixelTracker />
        <Analytics />
      </body>
    </html>
  );
}
