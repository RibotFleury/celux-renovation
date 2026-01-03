
import React from 'react';

const Gallery: React.FC = () => {
  const images = Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    name: `celux_renovation_image${i + 1}`,
    url: `/images/celux_renovation_image${i + 1}.jpg`
  }));

  return (
    <section id="gallery" className="py-32 bg-slate-50">
      <div className="container mx-auto px-6 mb-24 text-center">
        <h4 className="text-slate-400 font-bold uppercase tracking-[0.4em] text-xs mb-4">Notre Portfolio</h4>
        <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">La Preuve Visuelle de la <span className="text-[#eeca38]">Qualité</span></h2>
        <div className="w-20 h-1 bg-[#eeca38] mx-auto mb-8 rounded-full"></div>
        <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto">
          Explorez notre collection de transformations à travers le Québec. Chaque image reflète notre standard d'excellence.
        </p>
      </div>

      <div className="px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {images.map((img, idx) => (
          <div 
            key={img.id} 
            className={`relative group overflow-hidden rounded-[40px] transition-all duration-700 border-4 border-white soft-shadow ${
              idx % 7 === 0 ? 'md:col-span-2 md:row-span-2 aspect-square' : 'aspect-square'
            }`}
          >
           <img 
              src={img.url} 
              alt={img.name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-6 text-center">
              <span className="w-10 h-10 border border-[#eeca38] rounded-full flex items-center justify-center mb-4 text-[#eeca38]">
                +
              </span>
              <p className="text-white font-bold text-xs uppercase tracking-[0.3em]">{img.name.replace(/_/g, ' ')}</p>
              <p className="text-[#eeca38] text-[10px] uppercase font-bold mt-2">Voir les détails</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
