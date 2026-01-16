
import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  // Carousel mapping to your specific service images
  const carouselItems = [
    {
      url: "images/celux_renovation_image14.jpeg",
      label: "Peinture Intérieure"
    },
    {
      url: "images/celux_renovation_image1_peinture_exterieur.jpeg",
      label: "Peinture Extérieure"
    },
    {
      url: "images/celux_renovation_image1_peinture_terrasse-cloture.jpeg",
      label: "Peinture de Terrasse"
    },
    {
      url: "images/celux_renovation_image2_peinture_interieur.jpeg",
      label: "Finition Résidentielle"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselItems.length]);

  const nextImage = () => setCurrentImage((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  const prevImage = () => setCurrentImage((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 rounded-l-[150px] hidden lg:block"></div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="z-10">
          <div className="flex items-center space-x-2 mb-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-[#eeca38] text-[#eeca38]" />)}
            </div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Peinture à grand Luxe résidentiel</span>
          </div>
          
          <h1 className="text-5xl lg:text-8xl font-bold text-black leading-[1.05] mb-8 text-balance">
            Sublimez votre espace avec la maîtrise <span className="text-[#eeca38] italic font-light">Celux</span>.
          </h1>
          
          <p className="text-xl text-slate-500 mb-10 max-w-lg leading-relaxed font-light">
            Peinture intérieure et extérieure de haute qualité, alliant excellence technique et savoir-faire artisanal.
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
        
        <div className="relative group">
          {/* Main Carousel Container */}
          <div className="relative rounded-[50px] overflow-hidden shadow-2xl border-4 border-slate-50 aspect-[4/5] w-full bg-slate-100">
            {carouselItems.map((item, idx) => (
              <div 
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentImage ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                <img 
                  src={item.url} 
                  alt={item.label}
                  className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-out ${idx === currentImage ? 'scale-110' : 'scale-100'}`}
                />
              </div>
            ))}
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20"></div>

            {/* Manual Controls */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button onClick={prevImage} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#eeca38] hover:text-black transition-all">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={nextImage} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#eeca38] hover:text-black transition-all">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            
            {/* Branding Card */}
            <div className="absolute bottom-10 left-6 right-6 md:left-10 md:right-10 bg-black/80 backdrop-blur-xl p-8 rounded-3xl border border-[#eeca38]/30 flex items-center gap-6 z-30">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(238,202,56,0.4)] flex-shrink-0 overflow-hidden">
                <img 
                  src="./images/celux_renovation_logo.jpg" 
                  alt="celux_renovation_logo" 
                  className="w-10 h-10 object-contain" 
                />
              </div>
              <div className="text-white">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#eeca38] mb-1">Service : {carouselItems[currentImage].label}</p>
                <p className="text-xl font-bold tracking-tight">Signature Celux Élite</p>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="absolute top-6 right-10 flex gap-2 z-30">
              {carouselItems.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentImage ? 'w-8 bg-[#eeca38]' : 'w-2 bg-white/40'}`}
                />
              ))}
            </div>
          </div>

          {/* Background Decorative Element */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#eeca38]/10 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;