import React, { useState, useEffect } from 'react';
import { EMERGENCY_CONTACTS } from '../data/cyberbullyingData';
import { PhoneCall, X, ExternalLink, Copy, Check, ShieldAlert, Heart, Clock } from 'lucide-react';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn cursor-pointer"
    >
      
      <div className="bg-neutral-900 max-w-2xl w-full border border-neutral-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] cursor-default">
        
        {/* Header */}
        <div className="p-4 sm:p-6 bg-red-600 text-black flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-bold">
              <PhoneCall className="w-5 h-5 text-white animate-bounce" />
            </div>
            <div>
              <h3 className="font-['Instrument_Serif',serif] italic text-2xl font-bold leading-snug">
                Canais de Ajuda & Emergência (24h)
              </h3>
              <p className="text-xs font-mono text-black/80 uppercase font-bold hidden sm:block">
                Apoio psicológico, orientação jurídica e denúncias oficiais.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="px-3 py-1.5 bg-black text-white hover:bg-neutral-800 font-mono text-xs uppercase font-bold flex items-center gap-1 transition-colors"
            title="Fechar (ESC)"
          >
            <X className="w-4 h-4 text-red-500" />
            <span>Fechar</span>
          </button>
        </div>

        {/* Contacts List */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 text-slate-200 flex-1">
          
          <div className="p-3 bg-neutral-950 border border-red-600/40 text-red-300 text-xs flex items-center gap-2">
            <Heart className="w-4 h-4 text-red-500 shrink-0" />
            <span>
              <strong>Se você está em sofrimento psicológico grave:</strong> Entre em contato com o CVV (Ligue 188) ou Disque 100 imediatamente. Atendimento gratuito, anônimo e sigiloso.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {EMERGENCY_CONTACTS.map((contact, idx) => (
              <div 
                key={idx}
                className="p-4 bg-neutral-950 border border-neutral-800 flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-mono uppercase font-bold px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-red-400">
                      {contact.badge}
                    </span>
                    {contact.is24h && (
                      <span className="text-[10px] font-mono uppercase font-bold text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-red-500" />
                        <span>24 Horas</span>
                      </span>
                    )}
                  </div>

                  <h4 className="font-['Instrument_Serif',serif] italic text-lg text-white">
                    {contact.name}
                  </h4>

                  <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                    {contact.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-800 flex items-center justify-between gap-2">
                  <span className="font-mono font-bold text-sm text-red-500">
                    {contact.phone}
                  </span>

                  <div className="flex items-center gap-1">
                    {contact.phone.length <= 4 && (
                      <a
                        href={`tel:${contact.phone}`}
                        className="px-3 py-1.5 bg-red-600 hover:bg-red-500 text-black font-mono uppercase font-bold text-xs flex items-center gap-1"
                      >
                        <PhoneCall className="w-3 h-3" />
                        <span>Ligar</span>
                      </a>
                    )}

                    <button
                      onClick={() => handleCopy(contact.phone, idx)}
                      className="p-1.5 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-slate-200 text-xs"
                      title="Copiar número"
                    >
                      {copiedIndex === idx ? <Check className="w-3.5 h-3.5 text-red-500" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>

                    {contact.url && (
                      <a
                        href={contact.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-slate-200 text-xs"
                        title="Acessar site"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-neutral-950 border-t border-neutral-800 flex items-center justify-between gap-2 text-xs text-neutral-400 font-mono uppercase shrink-0">
          <span className="hidden sm:inline">Guardar estas informações pode ajudar um amigo ou salvar uma vida.</span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white font-mono text-xs uppercase font-bold flex items-center justify-center gap-2 transition-all border border-neutral-700"
          >
            <X className="w-4 h-4 text-red-500" />
            <span>Fechar Janela</span>
          </button>
        </div>

      </div>

    </div>
  );
};

