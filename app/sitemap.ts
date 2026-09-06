import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

// Fecha del último cambio de contenido. Actualizar al publicar cambios de copy o schema.
const LAST_CONTENT_UPDATE = new Date('2026-09-06');

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE.url, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE.url}/invisalign`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE.url}/brackets`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE.url}/blanqueamiento`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE.url}/dra-melissa-renee`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
