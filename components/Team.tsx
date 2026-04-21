import React from 'react';
import { Linkedin, Instagram, Quote } from 'lucide-react';

const Team: React.FC = () => {
  const member = {
    name: "Loic KUETI",
    role: "Fondateur et Chef des opérations",
    bio: "Animé par une passion pour la finition, Loïc a créé Celux Rénovation afin de fournir un travail de haute qualité. Il veille personnellement à chaque projet pour assurer un résultat précis et soigné.",
    image: "/images/celux_renovation_maitre_ouvrage_image.jpeg"
  };

  return (
    <section id="team" className="py-32 bg-white">

      {/* HEADER */}
      <div className="text-center mb-20 px-6">
        <h4 className="text-[#eeca38] font-bold uppercase tracking-[0.4em] text-xs mb-4">
          Notre Artisan
        </h4>
        <h2 className="text-5xl md:text-7xl font-bold text-black tracking-tight">
          L’Expert Derrière Celux
        </h2>
      </div>

      {/* FULL WIDTH CARD */}
      <div className="w-full px-6">
        <div className="relative w-full h-[80vh] rounded-[50px] overflow-hidden">

          {/* IMAGE */}
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

          {/* CONTENT */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-2xl px-10 md:px-20 text-white">

              <Quote className="w-16 h-16 text-[#eeca38]/30 mb-6" />

              <p className="text-sm font-bold text-[#eeca38] uppercase tracking-[0.3em] mb-4">
                {member.role}
              </p>

              <h3 className="text-4xl md:text-6xl font-bold mb-6">
                {member.name}
              </h3>

              <p className="text-lg md:text-xl leading-relaxed text-slate-200 mb-8">
                {member.bio}
              </p>

              {/* SOCIAL */}
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-xl border border-white/20 flex items-center justify-center hover:bg-[#eeca38] hover:text-black transition cursor-pointer">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div className="w-14 h-14 rounded-xl border border-white/20 flex items-center justify-center hover:bg-[#eeca38] hover:text-black transition cursor-pointer">
                  <Instagram className="w-6 h-6" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Team;