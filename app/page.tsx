import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Clients from '@/components/Clients';
import AccredianEdge from '@/components/AccredianEdge';
import DomainExpertise from '@/components/DomainExpertise';
import CourseSegmentation from '@/components/CourseSegmentation';
import AudienceSection from '@/components/AudienceSection';
import CATFramework from '@/components/CATFramework';
import ProcessSteps from '@/components/ProcessSteps';
import FAQ from '@/components/FAQ';

// Lazy load below-fold components for performance
const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-xl" />,
});

const CTASection = dynamic(() => import('@/components/CTASection'), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded-xl" />,
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-64 bg-gray-900 animate-pulse" />,
});

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main id="main-content" className="min-h-screen">
        <Hero />
        <Stats />
        <Clients />
        <AccredianEdge />
        <DomainExpertise />
        <CourseSegmentation />
        <AudienceSection />
        <CATFramework />
        <ProcessSteps />
        <FAQ />
        <Testimonials />
        <CTASection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
