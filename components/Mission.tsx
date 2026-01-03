
import React from 'react';
import { Target, Sparkles, Heart, Palette as PaletteIcon } from 'lucide-react';

const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 mb-8 bg-white px-4 py-2 rounded-full border border-slate-200">
             <Target className="w-4 h-4 text-[#eeca38]" />
             <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Notre Mission</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-black">La Maîtrise à Chaque Coup de Pinceau</h2>
          <div className="w-24 h-1.5 bg-[#eeca38] mx-auto mb-16 rounded-full shadow-[0_0_15px_rgba(238,202,56,0.3)]"></div>
          
          <p className="text-2xl md:text-4xl font-light text-slate-600 leading-relaxed italic max-w-4xl mx-auto">
            "Transformer chaque intérieur en un sanctuaire d'<span className="text-black font-semibold">élégance</span> grâce à des techniques innovantes et un engagement envers une beauté durable."
          </p>
          
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-10 rounded-[40px] bg-white border border-slate-100 soft-shadow group hover:-translate-y-2 transition-transform duration-500">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-[#eeca38] transition-colors duration-500">
                <Sparkles className="w-8 h-8 text-[#eeca38] group-hover:text-black transition-colors" />
              </div>
              <h4 className="font-bold text-xl mb-4 text-black uppercase tracking-tight">Innovation</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-light">Nous combinons la maîtrise traditionnelle avec des systèmes de peinture modernes pour des résultats impeccables.</p>
            </div>
            <div className="p-10 rounded-[40px] bg-white border border-slate-100 soft-shadow group hover:-translate-y-2 transition-transform duration-500">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-[#eeca38] transition-colors duration-500">
                <Heart className="w-8 h-8 text-[#eeca38] group-hover:text-black transition-colors" />
              </div>
              <h4 className="font-bold text-xl mb-4 text-black uppercase tracking-tight">Intégrité</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-light">Prix honnêtes, communication claire et respect de votre demeure comme si c'était notre propre sanctuaire.</p>
            </div>
            <div className="p-10 rounded-[40px] bg-white border border-slate-100 soft-shadow group hover:-translate-y-2 transition-transform duration-500">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-[#eeca38] transition-colors duration-500">
                <PaletteIcon className="w-8 h-8 text-[#eeca38] group-hover:text-black transition-colors" />
              </div>
              <h4 className="font-bold text-xl mb-4 text-black uppercase tracking-tight">Qualité</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-light">Une finition qui ne se contente pas d'être belle aujourd'hui, mais qui reste parfaite à travers le temps.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
