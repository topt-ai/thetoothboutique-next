// Páginas sin navegación ni footer: embudo de reseñas y aplicaciones de trabajo.
// Ambas son noindex por diseño y se sirven también en review.thetoothboutique.com
// y unete.thetoothboutique.com (ver proxy.ts).
export default function StandaloneLayout({ children }: { children: React.ReactNode }) {
  return <div className="bg-bg min-h-screen text-text font-body">{children}</div>;
}
