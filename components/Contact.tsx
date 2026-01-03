
import React from 'react';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="bg-black rounded-[80px] p-8 md:p-16 lg:p-24 overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#eeca38]/5 -skew-x-12 transform translate-x-1/2"></div>
          
          <div className="grid lg:grid-cols-2 gap-24 relative z-10">
            <div>
              <div className="inline-block px-4 py-1.5 bg-[#eeca38] text-black rounded-full text-[10px] font-bold uppercase tracking-widest mb-8">
                Demander une Estimation
              </div>
              <h2 className="text-4xl md:text-7xl font-bold text-white mb-10 tracking-tight">Prêt pour une transformation <span className="text-[#eeca38]">Celux</span> ?</h2>
              <p className="text-xl text-slate-400 font-light mb-16 leading-relaxed">
                Contactez-nous dès aujourd'hui pour une estimation de haute précision. Nous apportons le standard de luxe à votre porte.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <div className="flex items-center gap-5 group">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[#eeca38] group-hover:bg-[#eeca38] group-hover:text-black transition-all">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Appelez-nous</p>
                      <p className="text-white font-semibold">(514) 555-0199</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-5 group">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[#eeca38] group-hover:bg-[#eeca38] group-hover:text-black transition-all">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Écrivez-nous</p>
                      <p className="text-white font-semibold">contact@celuxrenovation.ca</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-5 group">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[#eeca38] group-hover:bg-[#eeca38] group-hover:text-black transition-all">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Secteurs</p>
                      <p className="text-white font-semibold">Montréal & Québec</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 group">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[#eeca38] group-hover:bg-[#eeca38] group-hover:text-black transition-all">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Heures</p>
                      <p className="text-white font-semibold">Lun - Sam: 8h - 18h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-12 rounded-[60px] shadow-2xl border-4 border-[#eeca38]/10">
              <form className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-2">Votre Nom</label>
                    <input type="text" className="w-full bg-slate-50 border-2 border-transparent focus:border-[#eeca38] focus:bg-white rounded-2xl py-5 px-8 outline-none transition-all" placeholder="Nom Complet" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-2">Courriel</label>
                    <input type="email" className="w-full bg-slate-50 border-2 border-transparent focus:border-[#eeca38] focus:bg-white rounded-2xl py-5 px-8 outline-none transition-all" placeholder="votre@email.ca" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-2">Type de Projet</label>
                  <select className="w-full bg-slate-50 border-2 border-transparent focus:border-[#eeca38] focus:bg-white rounded-2xl py-5 px-8 outline-none transition-all appearance-none cursor-pointer">
                    <option>Peinture Intérieure</option>
                    <option>Réparation de Plâtre</option>
                    <option>Retrait de Papier Peint</option>
                    <option>Rénovation Complète</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-2">Détails du Projet</label>
                  <textarea rows={4} className="w-full bg-slate-50 border-2 border-transparent focus:border-[#eeca38] focus:bg-white rounded-2xl py-5 px-8 outline-none transition-all resize-none" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                </div>

                <button className="w-full bg-black text-[#eeca38] py-6 rounded-2xl font-bold hover:bg-slate-900 transition-all flex items-center justify-center gap-4 group shadow-xl">
                  Envoyer la Demande
                  <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
