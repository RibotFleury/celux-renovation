
import React, { useState, useEffect } from 'react';
import { Palette, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Notre Équipe', href: '#team' },
    { name: 'Réalisations', href: '#gallery' },
  ];

  return (
   <header 
  className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
    isScrolled ? 'bg-black/95 backdrop-blur-lg shadow-xl py-4' : 'bg-transparent py-6'
  }`}
>

      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="flex items-center space-x-3 group cursor-pointer">
            
            <a href="#"><img
              src="./images/celux_renovation_logo.jpg"
              alt="CELUX Renovation"
              className={`transition-all duration-500 ease-out object-contain origin-left block
                ${isScrolled ? 'h-16 scale-x-[2]' : 'h-20 scale-x-[2.1]'}
                group-hover:scale-x-[2.25]
                group-hover:-translate-y-0.5
                group-hover:drop-shadow-[0_6px_12px_rgba(238,202,56,0.35)]
              `}
            /></a>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold transition-colors relative group ${
                isScrolled ? 'text-slate-300 hover:text-[#eeca38]' : 'text-slate-700 hover:text-black'
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#eeca38] transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-[#eeca38] text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#d9b832] transition-all shadow-lg hover:shadow-[#eeca38]/30 active:scale-95 flex items-center gap-2"
          >
            Estimation
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 ${isScrolled ? 'text-white' : 'text-black'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black shadow-2xl border-t border-slate-800 p-6 space-y-4 animate-fade-in-up">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-lg font-bold text-white hover:text-[#eeca38]"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center bg-[#eeca38] text-black py-4 rounded-xl font-bold"
          >
            Estimation
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
