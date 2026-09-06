import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-bg min-h-screen text-text font-body">
      <SmoothScroll />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
