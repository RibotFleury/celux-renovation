
import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock, CheckCircle, RefreshCcw, AlertTriangle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: 'Peinture Intérieure',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      // NOTE : Une fois déployé, remplacez 'http://localhost:3001' par l'URL de votre serveur réel.
      const response = await fetch('http://localhost:3001/send-estimate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Erreur d'envoi réseau:", error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section id="contact" className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="bg-black rounded-[80px] p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 bg-[#eeca38] rounded-full flex items-center justify-center mb-8 animate-bounce">
                <CheckCircle className="w-12 h-12 text-black" />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Demande Envoyée !</h2>
              <p className="text-xl text-slate-400 mb-12 max-w-2xl">
                C'est fait, {formState.name} ! Notre équipe a bien reçu votre demande pour <span className="text-[#eeca38] font-bold">{formState.service}</span>. 
                Vérifiez votre boîte mail sous peu.
              </p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-4 flex items-center gap-2 text-[#eeca38] font-bold uppercase text-xs tracking-[0.2em] hover:opacity-80 transition-opacity"
              >
                <RefreshCcw className="w-4 h-4" /> Nouvelle Demande
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

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
              <h2 className="text-4xl md:text-7xl font-bold text-white mb-10 tracking-tight leading-none">
                Prêt pour une transformation <span className="text-[#eeca38]">Celux</span> ?
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <div className="flex items-center gap-5 group">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[#eeca38] border border-white/10">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Appel Direct</p>
                      <p className="text-white font-semibold">(514) 555-0199</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 group">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[#eeca38] border border-white/10">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Courriel</p>
                      <p className="text-white font-semibold">celuxrenovation@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-5 group">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[#eeca38] border border-white/10">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Zone</p>
                      <p className="text-white font-semibold">Montréal & Québec</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-[60px] shadow-2xl border-4 border-[#eeca38]/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === 'error' && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center gap-3 text-sm font-medium border border-red-100">
                    <AlertTriangle className="w-5 h-5" />
                    Le serveur ne répond pas. Lancez le serveur Node.js !
                  </div>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-2">Nom</label>
                    <input 
                      required
                      type="text" 
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full bg-slate-50 border-2 border-transparent focus:border-[#eeca38] focus:bg-white rounded-2xl py-4 px-6 outline-none transition-all text-sm" 
                      placeholder="Votre nom" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-2">Email</label>
                    <input 
                      required
                      type="email" 
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full bg-slate-50 border-2 border-transparent focus:border-[#eeca38] focus:bg-white rounded-2xl py-4 px-6 outline-none transition-all text-sm" 
                      placeholder="votre@email.ca" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-2">Type de Service</label>
                  <select 
                    value={formState.service}
                    onChange={(e) => setFormState({...formState, service: e.target.value})}
                    className="w-full bg-slate-50 border-2 border-transparent focus:border-[#eeca38] focus:bg-white rounded-2xl py-4 px-6 outline-none transition-all appearance-none cursor-pointer text-sm"
                  >
                    <option>Peinture Intérieure</option>
                    <option>Peinture Extérieure</option>
                    <option>Réparation de Plâtre</option>
                    <option>Terrasse et Clôture</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-2">Projet</label>
                  <textarea 
                    required
                    rows={4} 
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-slate-50 border-2 border-transparent focus:border-[#eeca38] focus:bg-white rounded-2xl py-4 px-6 outline-none transition-all resize-none text-sm" 
                    placeholder="Décrivez vos travaux..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={status === 'sending'}
                  className={`w-full bg-black text-[#eeca38] py-6 rounded-2xl font-bold transition-all flex items-center justify-center gap-4 group ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-slate-900 shadow-xl'}`}
                >
                  {status === 'sending' ? (
                    <>Envoi en cours... <RefreshCcw className="w-5 h-5 animate-spin" /></>
                  ) : (
                    <>Envoyer ma demande <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
                  )}
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