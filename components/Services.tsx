
import React from 'react';
import { Paintbrush, Hammer, CheckCircle2, ArrowUpRight, Sun, ShieldCheck } from 'lucide-react';

const Services: React.FC = () => {
  const specialties = [
    {
      title: "Peinture Intérieure",
      desc: "Peinture résidentielle haut de gamme utilisant notre système innovant qui garantit des lignes épurées et une couverture uniforme.",
      icon: <Paintbrush className="w-8 h-8" />,
      features: [
        "Peintures Premium Faible COV", 
        "Préparation Sans Poussière", 
        "Garantie de Propreté"
      ]
    },
    {
      title: "Peinture Extérieure",
      desc: "Finition durable et ultra-résistante aux éléments extérieurs. Nous redonnons vie à votre façade avec une expertise inégalée.",
      icon: <Sun className="w-8 h-8" />,
      features: [
        "Pulvérisation Professionnelle", 
        "Résistance UV & Intempéries", 
        "Adhérence Maximale"
      ]
    },
    {
      title: "Réparation de Plâtre",
      desc: "Restauration professionnelle des murs et plafonds endommagés. Des petites fissures aux dégâts d'eau majeurs, nous rendons le tout comme neuf.",
      icon: <Hammer className="w-8 h-8" />,
      features: [
        "Renforcement Structurel", 
        "Harmonisation Parfaite", 
        "Agencement de Texture"
      ]
    },
    {
      title: "Terrasse et Clôture",
      desc: "Application de peinture de qualité premium et durable pour vos espaces extérieurs en bois ou métal.",
      icon: <ShieldCheck className="w-8 h-8" />,
      features: [
        "Protection Contre Moisissures", 
        "Anti-Champignons", 
        "Finition Imperméable"
      ]
    }
  ];

  return (
    <section id="services" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <h4 className="text-[#eeca38] font-bold uppercase tracking-[0.4em] text-xs mb-4">Solutions d'Élite</h4>
          <h2 className="text-4xl md:text-7xl font-bold text-black mb-8">L'Art de la Finition, Coup après Coup</h2>
          <p className="text-xl text-slate-500 font-light leading-relaxed">
            Spécialisés dans les rénovations de haute précision nécessitant une touche de maître et une innovation technologique moderne, que ce soit pour vos intérieurs ou vos structures extérieures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map((s, idx) => (
            <div 
              key={idx} 
              className="group p-10 rounded-[40px] bg-slate-50 border border-slate-100 hover:bg-black transition-all duration-700 relative overflow-hidden flex flex-col h-full"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#eeca38]/5 rounded-bl-full group-hover:bg-[#eeca38]/10 transition-colors"></div>
              
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-[#eeca38] group-hover:text-black transition-all duration-500 text-black">
                {s.icon}
              </div>
              
              <h3 className="text-xl font-bold text-black mb-4 group-hover:text-white transition-colors tracking-tight">
                {s.title}
              </h3>
              
              <p className="text-slate-500 leading-relaxed mb-8 group-hover:text-slate-400 transition-colors font-light text-sm flex-grow">
                {s.desc}
              </p>
              
              <ul className="space-y-3 mb-8">
                {s.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs font-semibold text-slate-700 group-hover:text-slate-300 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#eeca38]" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="flex items-center gap-2 text-black font-bold group-hover:text-[#eeca38] transition-colors uppercase text-[10px] tracking-widest mt-auto"
              >
                En savoir plus
                <ArrowUpRight className="w-3 h-3" />
              </a>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
