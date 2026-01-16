
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-slate-200 selection:text-slate-900 relative">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Services />
        <Gallery />
        {/* Note: Mission, Team, and Testimonials components are mentioned in your request 
            but not present in the provided file list. Ensure they are imported if you add them. */}
        <Contact />
      </main>

      <Footer />

      {/* Bouton Retour en Haut Flottant */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-14 h-14 bg-black rounded-2xl flex items-center justify-center hover:bg-[#eeca38] hover:text-black text-[#eeca38] transition-all duration-500 shadow-2xl group border-2 border-transparent hover:border-black z-[99] ${
          showScrollTop ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-50 pointer-events-none'
        }`}
        aria-label="Retour en haut"
      >
        <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
      </button>
    </div>
  );
};

export default App;