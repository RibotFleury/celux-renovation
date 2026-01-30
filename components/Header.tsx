import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Shield } from 'lucide-react';

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
        isScrolled ? 'bg-black/95 backdrop-blur-lg shadow-xl' : 'bg-transparent'
      }`}
    >
      {/* Top Bar - Contact & License */}
      <div className={`hidden md:block border-b transition-colors duration-500 ${isScrolled ? 'border-white/5 bg-black/20' : 'border-black/5 bg-black/5'}`}>
        <div className="container mx-auto px-6 py-2 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
          <div className="flex items-center gap-6">
            <a href="tel:+15149269134" className="flex items-center gap-2 text-[#eeca38] hover:text-white transition-colors">
              <Phone size={12} />
              <span className={isScrolled ? 'text-slate-300' : 'text-slate-600'}>+1-514-926-9134</span>
            </a>
            <a href="mailto:celuxrenovation@gmail.com" className="flex items-center gap-2 text-[#eeca38] hover:text-white transition-colors">
              <Mail size={12} />
              <span className={isScrolled ? 'text-slate-300' : 'text-slate-600'}>celuxrenovation@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-[#eeca38]">
            <Shield size={12} />
            <span className={isScrolled ? 'text-slate-400' : 'text-slate-500'}>Licence Officielle RBQ: 1234-5678-01</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 flex justify-between items-center py-4 md:py-6">
        {/* Logo Section */}
        <div className="flex items-center group cursor-pointer">
          <a href="#" className="flex items-center">
            <img
              src="./images/celux_renovation_logo.jpg"
              alt="CELUX Renovation"
              className={`transition-all duration-500 ease-out object-contain block rounded-lg
                ${isScrolled ? 'h-12' : 'h-16'}
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-black shadow-2xl border-t border-slate-800 p-6 space-y-6 animate-fade-in-up">
          <div className="space-y-4">
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
          </div>
          
          <div className="pt-6 border-t border-slate-800 space-y-4">
            <a href="tel:+15149269134" className="flex items-center gap-3 text-slate-300 hover:text-[#eeca38]">
              <Phone size={18} className="text-[#eeca38]" />
              <span className="text-sm font-bold">+1-514-926-9134</span>
            </a>
            <a href="mailto:celuxrenovation@gmail.com" className="flex items-center gap-3 text-slate-300 hover:text-[#eeca38]">
              <Mail size={18} className="text-[#eeca38]" />
              <span className="text-sm font-bold">celuxrenovation@gmail.com</span>
            </a>
            <div className="flex items-center gap-3 text-slate-400">
              <Shield size={18} className="text-[#eeca38]" />
              <span className="text-[10px] font-bold uppercase tracking-widest">RBQ: 1234-5678-01</span>
            </div>
          </div>

          <a 
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center bg-[#eeca38] text-black py-4 rounded-xl font-bold uppercase tracking-widest text-sm"
          >
            Obtenir une Estimation
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
