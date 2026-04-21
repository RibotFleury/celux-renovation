
import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const serviceImages = [
  // Interior
  { id: 1, url: './images/celux_renovation_image2_peinture_interieur.jpeg', name: 'Espace Culinaire', type: 'Peinture Intérieure', desc: 'Revêtement lavable haute performance.' },
  { id: 2, url: './images/celux_renovation_image3_peinture_interieur.jpeg', name: 'Chambre de Maître', type: 'Peinture Intérieure', desc: 'Ambiance sereine.' },
  { id: 3, url: './images/celux_renovation_image4_peinture_interieur.jpeg', name: 'Hall d\'Entrée', type: 'Peinture Intérieure', desc: 'Finition satinée lumineuse.' },
  { id: 4, url: './images/celux_renovation_image5_peinture_interieur.jpeg', name: 'Détail Plâtre', type: 'Peinture Intérieure', desc: 'Restauration invisible de surfaces.' },
  { id: 5, url: './images/celux_renovation_image6_peinture_interieur.jpeg', name: 'Bureau Exécutif', type: 'Peinture Intérieure', desc: 'Lignes épurées modernes.' },
  
  // Exterior
  { id: 7, url: './images/celux_renovation_image1_peinture_exterieur.jpeg', name: 'Résidence Moderne', type: 'Peinture Extérieure', desc: 'Protection élastomère.' },
  { id: 8, url: './images/celux_renovation_image2_peinture_exterieur.jpeg', name: 'Façade Contemporaine', type: 'Peinture Extérieure', desc: 'Pulvérisation professionnelle.' },
  { id: 9, url: './images/celux_renovation_image3_peinture_exterieur.jpeg', name: 'Détail Corniche', type: 'Peinture Extérieure', desc: 'Finition durable UV.' },
  
  // Terrace & Fence
  { id: 10, url: './images/celux_renovation_image1_peinture_terrasse-cloture.jpeg', name: 'Terrasse Signature', type: 'Terrasse & Clôture', desc: 'Saturateur premium anti-moisissures.' },
  { id: 11, url: './images/celux_renovation_image2_peinture_terrasse-cloture.jpeg', name: 'Espace Détente', type: 'Terrasse & Clôture', desc: 'Protection hydrofuge longue durée.' },
  { id: 12, url: './images/celux_renovation_image3_peinture_terrasse-cloture.jpeg', name: 'Clôture de Luxe', type: 'Terrasse & Clôture', desc: 'Teinture uniforme esthétique.' }
];

const ServiceCard: React.FC<{ title: string; desc: string; type: string; features: string[] }> = ({ title, desc, type, features }) => {
  const filteredImages = serviceImages.filter(img => img.type === type);
  const [activeIndex, setActiveIndex] = useState(0);

  const nextImg = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImg = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <div className="group bg-white rounded-[50px] overflow-hidden border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
      {/* Photo Carousel Area */}
      <div className="relative h-[400px] overflow-hidden bg-slate-900">
        {filteredImages.map((img, idx) => (
          <div 
            key={img.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${idx === activeIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'}`}
          >
            <img src={img.url} alt={img.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div> 
            <div className="absolute bottom-8 left-10 right-10 text-white">
              <h4 className="text-2xl font-bold tracking-tight mb-1">{img.name}</h4>
              <p className="text-sm font-light text-slate-300 italic">{img.desc}</p>
            </div>
          </div>
        ))}

        <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button onClick={prevImg} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl text-white flex items-center justify-center hover:bg-[#eeca38] hover:text-black transition-all border border-white/20">
            <ChevronLeft size={20} />
          </button>
          <button onClick={nextImg} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl text-white flex items-center justify-center hover:bg-[#eeca38] hover:text-black transition-all border border-white/20">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="absolute top-6 left-10 flex gap-2">
          {filteredImages.map((_, idx) => (
            <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-6 bg-[#eeca38]' : 'w-2 bg-white/30'}`} />
          ))}
        </div>
      </div>

      <div className="p-10 flex flex-col flex-grow">
        <h3 className="text-3xl font-black text-black mb-4 tracking-tighter uppercase leading-none">
          {title}
        </h3>
        <p className="text-slate-500 font-light mb-8 leading-relaxed italic border-l-4 border-[#eeca38] pl-6 text-base">
          {desc}
        </p>
        <ul className="space-y-3 mb-10 flex-grow">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-3 text-xs font-black text-slate-800 uppercase tracking-tight">
              <CheckCircle2 className="w-4 h-4 text-[#eeca38] flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>
        <a href="#contact" className="w-full py-5 rounded-[20px] bg-black text-[#eeca38] text-center font-black uppercase tracking-[0.2em] text-[10px] hover:bg-slate-900 transition-all flex items-center justify-center gap-3 group">
          Estimation Gratuite <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
        </a>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-5xl mx-auto mb-24">
          <h4 className="text-[#eeca38] font-black uppercase tracking-[0.5em] text-[10px] mb-8">Maîtrise Professionnelle</h4>
          <h2 className="text-5xl md:text-7xl font-black text-black mb-10 leading-none tracking-tighter uppercase">
            Nos Services <span className="text-slate-300">Signature</span>
          </h2>
          <div className="h-2 w-32 bg-[#eeca38] mx-auto mb-10 rounded-full"></div>
          <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto">
            Explorez nos trois domaines d'expertise pour une finition impeccable de votre propriété.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1400px] mx-auto">
          <ServiceCard 
            title="Peinture Intérieure"
            type="Peinture Intérieure"
            desc="Finition résidentielle de luxe. Découpage chirurgical et préparation experte des surfaces."
            features={["Fini miroir sans trace", "Réparation de plâtre", "Produits Premium"]}
          />
          <ServiceCard 
            title="Peinture Extérieure"
            type="Peinture Extérieure"
            desc="Protection durable contre le climat. Pulvérisation professionnelle et finitions résistantes."
            features={["Résistance UV extrême", "Pulvérisation Pro", "Protection intempéries"]}
          />
          <ServiceCard 
            title="Terrasse & Clôture"
            type="Terrasse & Clôture"
            desc="Traitement et protection du bois. Saturateurs haute performance et teintures uniformes."
            features={["Saturateur anti-moisissure", "Protection hydrofuge", "Esthétique naturelle"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;