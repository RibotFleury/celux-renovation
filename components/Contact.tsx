
import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, CheckCircle, RefreshCcw, AlertTriangle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: 'Peinture Intérieur',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');
    
    try {
      // Appel à l'API serverless située dans /api/send-estimate.js
      const response = await fetch('/api/send-estimate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
      } else {
        throw new Error(result.error || "Une erreur est survenue lors de l'envoi.");
      }
    } catch (error: any) {
      console.error("Erreur d'envoi:", error);
      setStatus('error');
      setErrorMessage(error.message || "L'envoi a échoué. Veuillez nous contacter directement au (514) 926-9134.");
    }
  };

  if (status === 'success') {
    return (
      <section id="contact" className="py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-black rounded-[40px] md:rounded-[80px] p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-[#eeca38] rounded-full flex items-center justify-center mb-8 animate-bounce">
                <CheckCircle className="w-10 h-10 md:w-12 md:h-12 text-black" />
              </div>
              <h2 className="text-3xl md:text-6xl font-bold text-white mb-6 leading-tight">Demande Envoyée !</h2>
              <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl">
                Merci {formState.name}. Votre demande pour <span className="text-[#eeca38] font-bold">{formState.service}</span> a été transmise. Nous vous contacterons sous peu.
              </p>
              <button onClick={() => setStatus('idle')} className="text-[#eeca38] font-bold uppercase text-xs tracking-widest flex items-center gap-2 hover:opacity-80 transition-opacity">
                <RefreshCcw className="w-4 h-4" /> Nouvelle demande
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-black rounded-[40px] md:rounded-[80px] p-8 md:p-16 lg:p-24 overflow-hidden relative shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-24 relative z-10">
            <div className="text-left">
              <div className="inline-block px-4 py-1.5 bg-[#eeca38] text-black rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 md:mb-8">Service Signature</div>
              <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 md:mb-10 tracking-tight leading-none">Confiez votre projet à <span className="text-[#eeca38]">Celux</span></h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4 md:gap-5">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[#eeca38] border border-white/10 flex-shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Appel direct</p>
                    <a href="tel:+15149269134" className="text-white font-semibold text-sm md:text-base hover:text-[#eeca38] transition-colors">+1-514-926-9134</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:gap-5">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[#eeca38] border border-white/10 flex-shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Email</p>
                    <a href="mailto:celuxrenovation@gmail.com" className="text-white font-semibold text-sm md:text-base break-all hover:text-[#eeca38] transition-colors">celuxrenovation@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 md:p-12 rounded-[30px] md:rounded-[60px] shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                {status === 'error' && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-start gap-3 text-sm border border-red-100">
                    <AlertTriangle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Nom complet</label>
                    <input required type="text" value={formState.name} onChange={(e) => setFormState({...formState, name: e.target.value})} className="w-full bg-slate-50 rounded-xl md:rounded-2xl py-3 md:py-4 px-5 md:px-6 outline-none text-sm focus:ring-2 focus:ring-[#eeca38]" placeholder="Ex: Jean Tremblay" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Courriel</label>
                    <input required type="email" value={formState.email} onChange={(e) => setFormState({...formState, email: e.target.value})} className="w-full bg-slate-50 rounded-xl md:rounded-2xl py-3 md:py-4 px-5 md:px-6 outline-none text-sm focus:ring-2 focus:ring-[#eeca38]" placeholder="jean@exemple.ca" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Type de service</label>
                  <select value={formState.service} onChange={(e) => setFormState({...formState, service: e.target.value})} className="w-full bg-slate-50 rounded-xl md:rounded-2xl py-3 md:py-4 px-5 md:px-6 outline-none text-sm font-bold appearance-none cursor-pointer border-r-[16px] border-transparent">
                    <option value="Peinture Intérieur">Peinture Intérieur</option>
                    <option value="Peinture ext">Peinture ext</option>
                    <option value="Réparation de Plâtre">Réparation de Plâtre</option>
                    <option value="Terrasse & Clôture">Terrasse & Clôture</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Détails des travaux</label>
                  <textarea required rows={4} value={formState.message} onChange={(e) => setFormState({...formState, message: e.target.value})} className="w-full bg-slate-50 rounded-xl md:rounded-2xl py-3 md:py-4 px-5 md:px-6 outline-none text-sm resize-none focus:ring-2 focus:ring-[#eeca38]" placeholder="Décrivez votre projet..."></textarea>
                </div>
                <button type="submit" disabled={status === 'sending'} className="w-full bg-black text-[#eeca38] py-4 md:py-6 rounded-xl md:rounded-2xl font-bold flex items-center justify-center gap-4 hover:bg-slate-900 transition-all disabled:opacity-50">
                  {status === 'sending' ? "Envoi..." : "Envoyer ma demande"}
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