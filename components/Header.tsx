import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
        {/* Logo Section - Fixed stretching */}
        <div className="flex items-center group cursor-pointer">
          <a href="#" className="flex items-center">
            <img
              src="./images/celux_renovation_logo.jpg"
              alt="CELUX Renovation"
              className={`transition-all duration-500 ease-out object-contain block rounded-lg
                ${isScrolled ? 'h-14' : 'h-16'}
                group-hover:scale-105
                group-hover:drop-shadow-[0_0_15px_rgba(238,202,56,0.3)]
              `}
            />
            <div className={`ml-4 flex flex-col transition-colors duration-500 ${isScrolled ? 'text-white' : 'text-black'}`}>
              <span className="text-xl font-black tracking-tighter leading-none uppercase">
                CELUX<span className="text-[#eeca38]">RENOVATION</span>
              </span>
              <span className={`text-[9px] uppercase tracking-[0.3em] font-bold ${isScrolled ? 'text-slate-400' : 'text-slate-500'}`}>
                L'Art de la Finition
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Nav - Restored all links including Notre Équipe */}
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
            className="bg-[#eeca38] text-black px-8 py-3 rounded-full text-sm font-bold hover:bg-[#d9b832] transition-all shadow-lg active:scale-95 flex items-center gap-2"
          >
            Estimation
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 transition-colors ${isScrolled ? 'text-white' : 'text-black'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
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
              className="block text-lg font-bold text-white hover:text-[#eeca38] transition-colors"
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