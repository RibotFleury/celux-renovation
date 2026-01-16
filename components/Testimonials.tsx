
import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Ribot CESKOUTSE",
      location: "Montréal",
      comment: "Celux a transformé notre salon. La réparation du plâtre était si parfaite qu'on ne voit même pas où étaient les dommages. Des professionnels du début à la fin.",
      rating: 5
    },
    {
      name: "Luc Girard",
      location: "Laval",
      comment: "Enlever un papier peint vieux de 30 ans semblait impossible sans endommager les murs. Édouard a rendu cela facile. Hautement recommandé.",
      rating: 5
    },
    {
      name: "Isabelle Roy",
      location: "Rive du nord",
      comment: "Une attention incroyable aux détails. Le système de peinture qu'ils utilisent laisse un fini luxueux au toucher comme à l'œil. Assurément les meilleurs de la région.",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-black mb-16 text-center">Ce que nos clients disent</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <div key={idx} className="p-10 rounded-3xl bg-slate-50 border border-slate-100 relative group hover:bg-black hover:text-white transition-all duration-500">
              <div className="text-[#eeca38] text-6xl absolute top-6 right-8 group-hover:text-slate-700 transition-colors opacity-40 italic">"</div>
              <div className="flex mb-6 text-[#eeca38]">
                {[...Array(r.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-lg mb-8 leading-relaxed relative z-10 italic">{r.comment}</p>
              <div>
                <h4 className="font-bold text-black group-hover:text-white transition-colors">{r.name}</h4>
                <p className="text-slate-500 text-sm group-hover:text-[#eeca38] transition-colors">{r.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
