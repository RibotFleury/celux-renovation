
import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, CheckCircle, RefreshCcw, AlertTriangle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: 'Peinture Intérieure',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');
    
    try {
      // Appel vers la route API interne de Vercel
      const response = await fetch('/api/send-estimate', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formState),
      });

      // Vérification si la réponse est bien du JSON
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        const result = await response.json();
        if (response.ok && result.success) {
          setStatus('success');
        } else {
          setStatus('error');
          setErrorMessage(result.error || "Le service d'envoi est temporairement indisponible.");
        }
      } else {
        // Si le serveur renvoie du texte (comme le code source ou une erreur HTML)
        const textError = await response.text();
        console.error("Réponse non-JSON reçue:", textError);
        setStatus('error');
        setErrorMessage("Erreur de configuration du serveur API.");
      }
    } catch (error) {
      console.error("Erreur réseau:", error);
      setStatus('error');
      setErrorMessage("Impossible de joindre le service d'envoi.");
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
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Demande Reçue !</h2>
              <p className="text-xl text-slate-400 mb-12 max-w-2xl">
                C'est fait, {formState.name} ! Notre équipe Celux vous contactera sous peu.
              </p>
              <button onClick={() => setStatus('idle')} className="text-[#eeca38] font-bold uppercase text-xs tracking-widest flex items-center gap-2 hover:opacity-80 transition-opacity">
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
          <div className="grid lg:grid-cols-2 gap-24 relative z-10">
            <div>
              <div className="inline-block px-4 py-1.5 bg-[#eeca38] text-black rounded-full text-[10px] font-bold uppercase tracking-widest mb-8">Estimation Gratuite</div>
              <h2 className="text-4xl md:text-7xl font-bold text-white mb-10 tracking-tight leading-none">Prêt pour la signature <span className="text-[#eeca38]">Celux</span> ?</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[#eeca38] border border-white/10"><Phone className="w-6 h-6" /></div>
                  <div><p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Téléphone</p><p className="text-white font-semibold">(514) 555-0199</p></div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[#eeca38] border border-white/10"><Mail className="w-6 h-6" /></div>
                  <div><p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Email</p><p className="text-white font-semibold">kamsuleader@gmail.com</p></div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[#eeca38] border border-white/10"><MapPin className="w-6 h-6" /></div>
                  <div><p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Zone</p><p className="text-white font-semibold">Montréal & Environs</p></div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-[60px] shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === 'error' && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-start gap-3 text-sm border border-red-100 italic">
                    <AlertTriangle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Nom</label>
                    <input required type="text" value={formState.name} onChange={(e) => setFormState({...formState, name: e.target.value})} className="w-full bg-slate-50 rounded-2xl py-4 px-6 outline-none text-sm focus:ring-2 focus:ring-[#eeca38]" placeholder="Votre nom" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Email</label>
                    <input required type="email" value={formState.email} onChange={(e) => setFormState({...formState, email: e.target.value})} className="w-full bg-slate-50 rounded-2xl py-4 px-6 outline-none text-sm focus:ring-2 focus:ring-[#eeca38]" placeholder="votre@email.ca" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Service</label>
                  <select value={formState.service} onChange={(e) => setFormState({...formState, service: e.target.value})} className="w-full bg-slate-50 rounded-2xl py-4 px-6 outline-none text-sm font-bold appearance-none cursor-pointer border-r-[16px] border-transparent">
                    <option>Peinture Intérieure</option>
                    <option>Peinture Extérieure</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Détails du projet</label>
                  <textarea required rows={4} value={formState.message} onChange={(e) => setFormState({...formState, message: e.target.value})} className="w-full bg-slate-50 rounded-2xl py-4 px-6 outline-none text-sm resize-none focus:ring-2 focus:ring-[#eeca38]" placeholder="Décrivez vos besoins..."></textarea>
                </div>
                <button type="submit" disabled={status === 'sending'} className="w-full bg-black text-[#eeca38] py-6 rounded-2xl font-bold flex items-center justify-center gap-4 hover:bg-slate-900 transition-all disabled:opacity-50">
                  {status === 'sending' ? (
                    <>Envoi en cours... <RefreshCcw className="w-5 h-5 animate-spin" /></>
                  ) : (
                    <>Envoyer ma demande <Send className="w-5 h-5" /></>
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