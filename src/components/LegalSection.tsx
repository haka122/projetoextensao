import React from 'react';
import { LEGAL_FRAMEWORK } from '../data/cyberbullyingData';
import { Scale, Gavel, FileCheck, Shield, AlertCircle, BookOpen } from 'lucide-react';

export const LegalSection: React.FC = () => {
  return (
    <section id="legislacao" className="py-16 bg-[#0A0A0B] text-slate-200 border-b border-white/10 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800 text-red-500 text-xs font-mono uppercase tracking-widest mb-4">
            <Scale className="w-3.5 h-3.5 text-red-500" />
            <span>Marco Regulatório Brasileiro</span>
          </div>
          <h2 className="font-['Instrument_Serif',serif] italic text-4xl sm:text-5xl text-white tracking-tight">
            Legislação e Consequências Jurídicas
          </h2>
          <p className="mt-3 text-neutral-300 text-base leading-relaxed">
            A internet não é uma terra sem leis. Conheça as normas do Direito Brasileiro que reprimem o cyberbullying, responsabilizam criminalmente agressores e obrigam plataformas e pais a repararem os danos.
          </p>
        </div>

        {/* Featured Law Highlight: Lei 14.811/2024 */}
        <div className="mb-12 bg-neutral-900 border-2 border-red-600/60 p-6 sm:p-8 relative shadow-2xl">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-neutral-800">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-600 text-black flex items-center justify-center shrink-0 font-black">
                <Gavel className="w-6 h-6 text-black" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-red-400 block">
                  Sancionada em 15 de Janeiro de 2024
                </span>
                <h3 className="font-['Instrument_Serif',serif] italic text-3xl text-white">
                  Lei Federal nº 14.811/2024
                </h3>
              </div>
            </div>

            <div className="px-4 py-2 bg-neutral-950 border border-neutral-800 text-slate-200 text-xs font-mono uppercase">
              Art. 146-A do Código Penal (Decreto-Lei 2.848/40)
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-6 text-sm">
            
            <div className="space-y-2">
              <h4 className="font-mono text-xs uppercase font-bold text-red-400 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>Tipo Penal (Inclusão)</span>
              </h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                Tipificou a intimidação sistemática virtual: intimar, humilhar ou perseguir alguém usando redes sociais, jogos ou chats, se a conduta não constituir crime mais grave.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-mono text-xs uppercase font-bold text-amber-400 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                <span>Penas Previstas</span>
              </h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                <strong className="text-white font-semibold">Pena de reclusão de 2 a 4 anos e multa</strong> para o Cyberbullying. Penalidades muito mais severas do que o bullying presencial simples (que prevê apenas multa).
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-mono text-xs uppercase font-bold text-slate-200 flex items-center gap-2">
                <Shield className="w-4 h-4 text-red-500" />
                <span>Agravamento e Proteção</span>
              </h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                Tornou hediondos diversos crimes praticados contra crianças e adolescentes e exigiu a criação de protocolos de prevenção obrigatórios em ambientes educacionais.
              </p>
            </div>

          </div>

        </div>

        {/* Other Laws Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LEGAL_FRAMEWORK.slice(1).map((item, idx) => (
            <div 
              key={idx}
              className="bg-neutral-900 p-6 border border-neutral-800 hover:border-red-600 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-bold text-red-400 bg-neutral-950 px-2.5 py-1 border border-neutral-800 uppercase">
                    {item.law}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400">
                    {item.year}
                  </span>
                </div>

                <h4 className="font-['Instrument_Serif',serif] italic text-xl text-white mb-2">
                  {item.title}
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800 space-y-2 text-xs">
                {item.penalties && (
                  <div className="text-red-400 font-mono text-[11px]">
                    <strong>Punição:</strong> {item.penalties}
                  </div>
                )}
                <div className="text-neutral-400 font-sans text-xs">
                  <strong>Impacto Prático:</strong> {item.impact}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
