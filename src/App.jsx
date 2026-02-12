import { useState, useEffect } from 'react';

import LoadingScreen from '@/components/ui/LoadingScreen';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import Hero from '@/sections/Hero';
import Testimonials from '@/sections/Testimonials';
import Services from '@/sections/Services';
import ArtistProfile from '@/sections/ArtistProfile';
import Gallery from '@/sections/Gallery';
import Pricing from '@/sections/Pricing';
import Coverage from '@/sections/Coverage';
import FAQ from '@/sections/FAQ';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 scroll-smooth selection:bg-pink-200 selection:text-pink-900 animate-in fade-in duration-700">
      
      <Navbar />
      
      <main>
        <Hero />
        <Testimonials />
        <Services />
        <ArtistProfile />
        <Gallery />
        <Pricing />
        <Coverage />
        <FAQ />
      </main>

      <Footer />
      
    </div>
  );
}
