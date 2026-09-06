import type { Metadata } from 'next';
import ReviewFunnel from '@/components/standalone/ReviewFunnel';

// Embudo de reseñas (review.thetoothboutique.com). Noindex por diseño.
export const metadata: Metadata = {
  title: '¿Cómo estuvo tu visita? – The Tooth Boutique',
  description: 'Cuéntanos cómo fue tu experiencia en The Tooth Boutique.',
  robots: { index: false, follow: false },
};

export default function ReviewPage() {
  return <ReviewFunnel />;
}
