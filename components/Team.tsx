
import React from 'react';
import { Linkedin, Instagram, Quote } from 'lucide-react';

const Team: React.FC = () => {
  const team = [
    {
      name: "Édouard Celux",
      role: "Maître Artisan & Fondateur",
      bio: "Plus de 15 ans de maîtrise dans la restauration de plâtre et la peinture de haute précision. Édouard dirige notre stratégie d'innovation technique.",
      image: "https://picsum.photos/id/177/600/800"
    },
    {
      name: "Ribot CESKOUTSE",
      role: "Directeur des Opérations",
      bio: "Expert en gestion de projet et techniques de finition. Ribot s'assure que chaque projet Celux répond à nos critères de qualité rigoureux.",
      image: "https://picsum.photos/id/209/600/800"
    }
  ];

  return (
    <section id="team" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <h4 className="text-[#eeca38] font-bold uppercase tracking-[0.4em] text-xs mb-4">Nos Artisans</h4>
            <h2 className="text-4xl md:text-7xl font-bold text-black mb-8 tracking-tight">L'Équipe Visionnaire</h2>
            <p className="text-xl text-slate-500 font-light">
              Nous avons renouvelé notre équipe avec des maîtres modernes qui croient en l'intersection de l'art et de l'architecture.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="w-14 h-14 rounded-2xl border-2 border-slate-100 flex items-center justify-center hover:bg-[#eeca38] hover:border-[#eeca38] hover:text-black transition-all cursor-pointer">
              <Linkedin className="w-6 h-6" />
            </div>
            <div className="w-14 h-14 rounded-2xl border-2 border-slate-100 flex items-center justify-center hover:bg-[#eeca38] hover:border-[#eeca38] hover:text-black transition-all cursor-pointer">
              <Instagram className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 max-w-6xl mx-auto">
          {team.map((member, idx) => (
            <div key={idx} className="group relative">
              <div className="relative overflow-hidden rounded-[60px] mb-12 aspect-[4/5] soft-shadow border-8 border-slate-50">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute bottom-10 left-10 right-10 translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-3">
                     <span className="h-0.5 w-10 bg-[#eeca38]"></span>
                     <span className="text-[#eeca38] text-[10px] font-bold uppercase tracking-widest">Partenaire Actif</span>
                  </div>
                  <h3 className="text-4xl font-bold text-white tracking-tight">{member.name}</h3>
                </div>
              </div>
              <div className="px-6 relative">
                <Quote className="absolute -top-6 -left-2 text-[#eeca38]/20 w-16 h-16 -z-10" />
                <p className="text-xs font-bold text-[#eeca38] uppercase tracking-[0.3em] mb-4">{member.role}</p>
                <p className="text-xl text-slate-600 leading-relaxed font-light italic">"{member.bio}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
