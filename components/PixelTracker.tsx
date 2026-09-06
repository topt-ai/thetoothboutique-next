'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const GA_MEASUREMENT_ID = 'G-MRYDN4F2GT';

export default function PixelTracker() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      // El PageView inicial lo dispara el script del <head> al cargar el documento.
      isFirstRender.current = false;
      return;
    }
    if (window.fbq) window.fbq('track', 'PageView');
    if (window.gtag) window.gtag('config', GA_MEASUREMENT_ID, { page_path: pathname });
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a[href*="wa.me"]');
      if (!target) return;
      if (window.fbq) window.fbq('track', 'Contact');
      if (window.gtag) {
        window.gtag('event', 'generate_lead', { event_category: 'engagement', event_label: 'whatsapp_click' });
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}
