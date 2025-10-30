import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import Plans from '@/components/plans';
import FreeBenefits from '@/components/free-benefits';
import FloatingBanner from '@/components/floating-banner';
import Locations from '@/components/locations';
import Clients from '@/components/clients';
import Footer from '@/components/footer';
import FAQ from '@/components/faq';
import BackToTop from '@/components/back-to-top';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex-grow'>
        <Hero />
        <Plans />
        <FreeBenefits />
        <Locations />
        <Clients />
        <FAQ />
      </main>
      <Footer />
      <FloatingBanner />
      <BackToTop />
    </div>
  );
}
