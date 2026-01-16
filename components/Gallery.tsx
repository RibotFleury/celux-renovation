
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Camera } from 'lucide-react';

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const images = [
    // Interior
    { id: 1, url: './images/celux_renovation_image1_peinture_interieur.jpeg', name: 'Salon Prestige', type: 'Peinture Intérieure', desc: 'Finition mate profonde et préparation impeccable des surfaces.' },
    { id: 2, url: './images/celux_renovation_image2_peinture_interieur.jpeg', name: 'Espace Culinaire', type: 'Peinture Intérieure', desc: 'Revêtement lavable haute performance pour zones de vie.' },
    { id: 3, url: './images/celux_renovation_image3_peinture_interieur.jpeg', name: 'Chambre de Maître', type: 'Peinture Intérieure', desc: 'Ambiance sereine avec découpage de précision.' },
    { id: 4, url: './images/celux_renovation_image4_peinture_interieur.jpeg', name: 'Hall d\'Entrée', type: 'Peinture Intérieure', desc: 'Finition satinée pour un accueil lumineux et durable.' },
    { id: 5, url: './images/celux_renovation_image5_peinture_interieur.jpeg', name: 'Détail Plâtre', type: 'Réparation de Plâtre', desc: 'Restauration invisible de surfaces avant mise en peinture.' },
    { id: 6, url: './images/celux_renovation_image6_peinture_interieur.jpeg', name: 'Bureau Exécutif', type: 'Peinture Intérieure', desc: 'Lignes épurées et harmonisation des couleurs modernes.' },
    
    // Exterior
    { id: 7, url: './images/celux_renovation_image1_peinture_exterieur.jpeg', name: 'Résidence Moderne', type: 'Peinture Extérieure', desc: 'Protection élastomère contre les cycles de gel du Québec.' },
    { id: 8, url: './images/celux_renovation_image2_peinture_exterieur.jpeg', name: 'Façade Contemporaine', type: 'Peinture Extérieure', desc: 'Revêtement protecteur avec pulvérisation professionnelle.' },
    { id: 9, url: './images/celux_renovation_image3_peinture_exterieur.jpeg', name: 'Détail Corniche', type: 'Peinture Extérieure', desc: 'Finition durable résistante aux rayons UV.' },
    
    // Terrace & Fence
    { id: 10, url: './images/celux_renovation_image1_peinture_terrasse-cloture.jpeg', name: 'Terrasse Signature', type: 'Terrasse & Clôture', desc: 'Saturateur premium anti-moisissures pour bois extérieur.' },
    { id: 11, url: './images/celux_renovation_image2_peinture_terrasse-cloture.jpeg', name: 'Espace Détente', type: 'Terrasse & Clôture', desc: 'Protection hydrofuge longue durée pour structures boisées.' },
    { id: 12, url: './images/celux_renovation_image3_peinture_terrasse-cloture.jpeg', name: 'Clôture de Luxe', type: 'Terrasse & Clôture', desc: 'Teinture uniforme garantissant esthétique et longévité.' }
  ];

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating, images.length]);

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 800);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="gallery" className="py-32 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-white">
          <div className="max-w-2xl">
            <h4 className="text-[#eeca38] font-bold uppercase tracking-[0.4em] text-xs mb-4 flex items-center gap-2">
              <Camera className="w-4 h-4" /> Notre Portfolio Complet
            </h4>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">L'Excellence en <span className="text-[#eeca38]">Mouvement</span></h2>
            <p className="text-slate-400 font-light text-lg">
              Découvrez nos {images.length} réalisations majeures. De l'intérieur raffiné à la protection extérieure robuste, chaque image illustre notre signature Celux.
            </p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="w-14 h-14 rounded-full border border-slate-700 flex items-center justify-center text-white hover:bg-[#eeca38] hover:text-black hover:border-[#eeca38] transition-all duration-300"
              aria-label="Projet précédent"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-14 h-14 rounded-full border border-slate-700 flex items-center justify-center text-white hover:bg-[#eeca38] hover:text-black hover:border-[#eeca38] transition-all duration-300"
              aria-label="Projet suivant"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative h-[550px] md:h-[750px] w-full group">
          <div className="relative h-full w-full overflow-hidden rounded-[50px] shadow-2xl border-4 border-slate-800">
            {images.map((img, index) => (
              <div
                key={img.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0 pointer-events-none'
                }`}
              >
                <img 
                  src={img.url} 
                  alt={img.name}
                  className="w-full h-full object-cover"
                />
                {/* Visual Gradient Layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                
                {/* Dynamic Content Card */}
                <div className="absolute bottom-10 left-6 right-6 md:left-12 md:bottom-12 max-w-xl">
                  <div className="bg-black/40 backdrop-blur-xl p-8 md:p-12 rounded-[40px] border border-white/10 shadow-2xl">
                    <span className="text-[#eeca38] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
                      {img.type}
                    </span>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">{img.name}</h3>
                    <p className="text-slate-300 text-sm md:text-lg font-light leading-relaxed mb-8">
                      {img.desc}
                    </p>
                    <div className="flex items-center gap-4 text-[#eeca38] text-[10px] font-bold uppercase tracking-widest cursor-pointer group/btn">
                      <span className="group-hover/btn:mr-2 transition-all duration-300">Estimation gratuite pour ce service</span>
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20 w-full px-6 justify-center">
            {images.map((_, index) => (
              <button 
                key={index}
                onClick={() => !isAnimating && setCurrentIndex(index)}
                className="h-1 rounded-full overflow-hidden transition-all duration-500 bg-white/10"
                style={{ width: index === currentIndex ? '40px' : '12px' }}
                aria-label={`Aller à la diapositive ${index + 1}`}
              >
                <div 
                  className={`h-full bg-[#eeca38] transition-all duration-[7000ms] ease-linear ${
                    index === currentIndex ? 'w-full' : 'w-0'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;