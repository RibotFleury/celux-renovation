
import React from 'react';
import { Paintbrush, LayoutPanelTop, Hammer, CheckCircle2, ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  const specialties = [
    {
      title: "Peinture Intérieure",
      desc: "Peinture résidentielle haut de gamme utilisant notre système innovant qui garantit des lignes épurées et une couverture uniforme.",
      icon: <Paintbrush className="w-8 h-8" />,
      features: ["Peintures Premium Faible COV", "Préparation Sans Poussière", "Garantie de Propreté"]
    },
    {
      title: "Retrait de Papier Peint",
      desc: "Retrait délicat du papier peint à dos de papier sans endommager le gypse sous-jacent. Nous préparons vos murs pour un nouveau fini parfait.",
      icon: <LayoutPanelTop className="w-8 h-8" />,
      features: ["Vapeur Sécuritaire pour le Gypse", "Neutralisation de Surface", "Préparation Impeccable"]
    },
    {
      title: "Réparation de Plâtre",
      desc: "Restauration professionnelle des murs et plafonds endommagés. Des petites fissures aux dégâts d'eau majeurs, nous rendons le tout comme neuf.",
      icon: <Hammer className="w-8 h-8" />,
      features: ["Renforcement Structurel", "Harmonisation Parfaite", "Agencement de Texture"]
    }
  ];

  return (
    <section id="services" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <h4 className="text-[#eeca38] font-bold uppercase tracking-[0.4em] text-xs mb-4">Solutions d'Élite</h4>
          <h2 className="text-4xl md:text-7xl font-bold text-black mb-8">L'Art de la Finition, Coup après Coup</h2>
          <p className="text-xl text-slate-500 font-light leading-relaxed">
            Spécialisés dans les rénovations intérieures de haute précision nécessitant une touche de maître et une innovation technologique moderne.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {specialties.map((s, idx) => (
            <div key={idx} className="group p-12 rounded-[50px] bg-slate-50 border border-slate-100 hover:bg-black transition-all duration-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#eeca38]/5 rounded-bl-full group-hover:bg-[#eeca38]/10 transition-colors"></div>
              
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-10 shadow-sm group-hover:bg-[#eeca38] group-hover:text-black transition-all duration-500 text-black">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold text-black mb-6 group-hover:text-white transition-colors tracking-tight">{s.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-10 group-hover:text-slate-400 transition-colors font-light">{s.desc}</p>
              
              <ul className="space-y-4 mb-10">
                {s.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm font-semibold text-slate-700 group-hover:text-slate-300 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-[#eeca38]" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="flex items-center gap-2 text-black font-bold group-hover:text-[#eeca38] transition-colors uppercase text-xs tracking-widest"
              >
                Découvrir notre processus
                <ArrowUpRight className="w-4 h-4" />
              </a>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
