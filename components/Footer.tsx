
import React from 'react';
import { Palette, ArrowUp, Mail, Phone, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  const cities = ['Montréal', 'Rive-Nord', 'Rive-Sud', 'Ville de Québec'];
  const specialties = ['Peinture Intérieure', 'Retrait de Papier Peint', 'Réparation de Plâtre'];

  return (
    <footer className="bg-white border-t border-slate-100 pt-32 pb-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          
          {/* Brand & Introduction */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-10">
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center shadow-lg">
                <Palette className="text-[#eeca38] w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tighter text-black uppercase">CELUX RENOVATION</span>
            </div>
            <p className="text-slate-500 leading-relaxed font-light mb-10 italic border-l-4 border-[#eeca38] pl-6">
              "Notre système de peinture innove, combinant la précision du maître avec le standard de luxe. Nous transformons les espaces avec intégrité et innovation supérieure."
            </p>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex items-center gap-4">
               <Shield className="text-[#eeca38] w-6 h-6" />
               <div>
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Licence Officielle</p>
                 <p className="text-black font-mono text-xs font-bold uppercase">RBQ: 1234-5678-01</p>
               </div>
            </div>
          </div>

          {/* Column 1: Villes de Service */}
          <div>
            <h4 className="text-black font-bold text-lg mb-10 tracking-tight flex items-center gap-3">
              <span className="w-2 h-2 bg-[#eeca38] rounded-full"></span>
              Villes de Service
            </h4>
            <ul className="space-y-6">
              {cities.map((city) => (
                <li key={city}>
                  <a href="#" className="text-slate-500 hover:text-black transition-all font-light flex items-center gap-4 group">
                    <span className="w-6 h-0.5 bg-slate-100 group-hover:bg-[#eeca38] group-hover:w-8 transition-all"></span>
                    {city}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Spécialités - Liens vers le portfolio (#gallery) */}
          <div>
            <h4 className="text-black font-bold text-lg mb-10 tracking-tight flex items-center gap-3">
              <span className="w-2 h-2 bg-[#eeca38] rounded-full"></span>
              Nos Spécialités
            </h4>
            <ul className="space-y-6">
              {specialties.map((spec) => (
                <li key={spec}>
                  <a href="#gallery" className="text-slate-500 hover:text-black transition-all font-light flex items-center gap-4 group">
                    <span className="w-6 h-0.5 bg-slate-100 group-hover:bg-[#eeca38] group-hover:w-8 transition-all"></span>
                    {spec}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-black font-bold text-lg mb-10 tracking-tight flex items-center gap-3">
              <span className="w-2 h-2 bg-[#eeca38] rounded-full"></span>
              Contact
            </h4>
            <div className="space-y-10">
              <div className="group cursor-pointer">
                <div className="flex items-center gap-3 mb-2 text-slate-400">
                  <Mail className="w-4 h-4 text-[#eeca38]" />
                  <p className="text-[10px] font-bold uppercase tracking-widest">Envoyer un courriel</p>
                </div>
                <p className="text-black font-bold text-lg group-hover:text-[#eeca38] transition-colors break-words">contact@celuxrenovation.ca</p>
              </div>
              <div className="group cursor-pointer">
                <div className="flex items-center gap-3 mb-2 text-slate-400">
                  <Phone className="w-4 h-4 text-[#eeca38]" />
                  <p className="text-[10px] font-bold uppercase tracking-widest">Appeler l'équipe</p>
                </div>
                <p className="text-black font-bold text-lg group-hover:text-[#eeca38] transition-colors">(514) 555-0199</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <p className="text-sm text-slate-400 font-medium">
              © {new Date().getFullYear()} <span className="text-black font-bold">Celux Renovation</span>
            </p>
            <span className="w-1 h-1 bg-slate-200 rounded-full hidden md:block"></span>
            <div className="flex space-x-6 text-xs font-bold text-slate-400 uppercase tracking-widest">
               <a href="#" className="hover:text-black transition-colors">Confidentialité</a>
               <a href="#" className="hover:text-black transition-colors">Conditions</a>
            </div>
          </div>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center hover:bg-[#eeca38] hover:text-black text-[#eeca38] transition-all shadow-xl group border-2 border-transparent hover:border-black"
          >
            <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
