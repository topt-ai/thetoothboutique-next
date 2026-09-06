import type { Metadata } from 'next';
import CareerApplication from '@/components/standalone/CareerApplication';

// Aplicaciones de trabajo (unete.thetoothboutique.com). Noindex por diseño.
export const metadata: Metadata = {
  title: 'Únete al equipo – The Tooth Boutique',
  description: 'Aplica para trabajar con nosotros en The Tooth Boutique.',
  robots: { index: false, follow: false },
};

export default function CareersPage() {
  return <CareerApplication />;
}
