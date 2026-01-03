
import React from 'react';
import { ArrowRight, Star, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 rounded-l-[150px] hidden lg:block"></div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="z-10 fade-in-up">
          <div className="flex items-center space-x-2 mb-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-[#eeca38] text-[#eeca38]" />)}
            </div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Finition de Luxe à Montréal</span>
          </div>
          
          <h1 className="text-5xl lg:text-8xl font-bold text-black leading-[1.05] mb-8 text-balance">
            Sublimez votre espace avec la maîtrise <span className="text-[#eeca38] italic font-light">Celux</span>.
          </h1>
          
          <p className="text-xl text-slate-500 mb-10 max-w-lg leading-relaxed font-light">
            Peinture intérieure de qualité supérieure et restauration de plâtre. Nous combinons l'innovation technique avec le standard d'excellence de l'artisanat.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href="#contact" 
              className="bg-black text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-slate-900 transition-all shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2 group border border-black"
            >
              Obtenir une Estimation
              <ArrowRight className="w-5 h-5 text-[#eeca38] group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="border-2 border-slate-100 text-black px-10 py-5 rounded-full text-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center"
            >
              Nos Spécialités
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex items-center gap-2 text-slate-400">
               <ShieldCheck className="text-[#eeca38] w-5 h-5" />
               <span className="text-sm font-semibold uppercase tracking-wider">Professionnel Licencié RBQ</span>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative rounded-[50px] overflow-hidden soft-shadow transition-transform hover:scale-[1.01] duration-700 border-4 border-slate-50">
            <img 
              src="./images/celux_renovation_image14.jpg" 
              alt="celux_renovation_image1"
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-10 left-10 right-10 bg-black/80 backdrop-blur-xl p-8 rounded-3xl border border-[#eeca38]/30 flex items-center gap-6">
              <div className="w-16 h-16 bg-[#eeca38] rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(238,202,56,0.4)]">
                <Palette className="w-8 h-8 text-black" />
              </div>
              <div className="text-white">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#eeca38] mb-1">Notre signature</p>
                <p className="text-xl font-bold tracking-tight">Systèmes de Peinture Innovants</p>
              </div>
            </div>
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#eeca38]/10 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

const Palette = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="14.5" cy="14.5" r=".5" fill="currentColor"/><path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2a10 10 0 0 1 8 4 2 2 0 0 1 1 7h-5a2 2 0 0 1-2 2v1a2 2 0 0 1-2 2h-2z"/></svg>
);

export default Hero;
