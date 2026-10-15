import React, { useEffect } from 'react';
import { ACADEMIC_INFO, EMERGENCY_CONTACTS, LEGAL_FRAMEWORK } from '../data/cyberbullyingData';
import { Printer, X, ShieldAlert, CheckCircle2, GraduationCap, ArrowLeft } from 'lucide-react';

interface PrintableSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintableSummaryModal: React.FC<PrintableSummaryModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    
    // Lock body scroll when modal is open
    document.body.style.overflow = 'hidden';

    // Handle ESC key press
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

  const handlePrint = () => {
    window.print();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-start justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto cursor-pointer"
    >
      
      <div className="bg-neutral-900 text-slate-100 max-w-4xl w-full my-4 sm:my-8 border border-neutral-800 shadow-2xl flex flex-col cursor-default relative">
        
        {/* Sticky Top Control Bar (Hidden on print) */}
        <div className="sticky top-0 z-30 p-4 bg-black/95 backdrop-blur-md text-white flex items-center justify-between print:hidden border-b border-neutral-800">
          <div className="flex items-center gap-2 text-xs font-mono uppercase">
            <Printer className="w-4 h-4 text-red-500" />
            <span className="hidden sm:inline">Visualização de Cartilha para Impressão / PDF</span>
            <span className="sm:hidden">Cartilha Digital</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handlePrint}
              className="px-3 sm:px-4 py-2 bg-red-600 hover:bg-red-500 text-black font-mono uppercase font-bold text-xs flex items-center gap-2 shadow-md transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="px-3 py-2 bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700 font-mono text-xs uppercase font-bold flex items-center gap-1.5 transition-all"
              title="Fechar (ESC)"
            >
              <X className="w-4 h-4 text-red-500" />
              <span>Fechar</span>
            </button>
          </div>
        </div>

        {/* Printable Paper Canvas */}
        <div className="p-6 sm:p-12 space-y-8 bg-neutral-900 font-sans text-slate-200 leading-relaxed print:p-0 print:bg-white print:text-black">
          
          {/* Header Banner */}
          <div className="border-b-2 border-red-600 pb-6 flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-red-500 mb-1">
                <GraduationCap className="w-4 h-4" />
                <span>{ACADEMIC_INFO.university}</span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-['Instrument_Serif',serif] italic text-white print:text-black">
                Cartilha Educativa: Prevenção ao Cyberbullying
              </h1>

              <p className="text-xs text-neutral-400 mt-1">
                Guia prático de conscientização, enquadramento legal e proteção no ecossistema digital.
              </p>
            </div>

            <div className="text-right text-[11px] font-mono text-neutral-400 shrink-0">
              <p>{ACADEMIC_INFO.course}</p>
              <p>Ano: {ACADEMIC_INFO.year}</p>
            </div>
          </div>

          {/* Key Summary Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-neutral-950 border border-neutral-800 print:bg-slate-100 print:border-slate-300">
              <h3 className="font-mono uppercase font-bold text-red-400 mb-1">O que é Cyberbullying?</h3>
              <p className="text-neutral-300 print:text-slate-800">
                Prática intencional, repetida e hostil de intimidação física ou psicológica exercida por meio de tecnologias (redes sociais, jogos, chats).
              </p>
            </div>

            <div className="p-4 bg-neutral-950 border border-red-600/50 print:bg-slate-100 print:border-slate-300">
              <h3 className="font-mono uppercase font-bold text-red-400 mb-1">Nova Legislação (Lei 14.811/2024)</h3>
              <p className="text-neutral-300 print:text-slate-800">
                Inclusão do Art. 146-A no Código Penal. Pena de 2 a 4 anos de reclusão e multa para o crime de intimidação sistemática virtual.
              </p>
            </div>
          </div>

          {/* Steps for Victims */}
          <div className="space-y-3">
            <h3 className="font-mono uppercase font-bold text-xs tracking-wider text-red-500 border-b pb-1 border-neutral-800">
              Passos Emergenciais para a Vítima
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-neutral-950 border border-neutral-800">
                <strong className="block text-red-400 font-mono text-xs mb-0.5">1. Não responda nem revide</strong>
                <span className="text-neutral-300">Evite reações emotivas que alimentem a sanha do agressor.</span>
              </div>

              <div className="p-3 bg-neutral-950 border border-neutral-800">
                <strong className="block text-red-400 font-mono text-xs mb-0.5">2. Registre todas as provas</strong>
                <span className="text-neutral-300">Prints legíveis com data, hora, número e URL completa da página.</span>
              </div>

              <div className="p-3 bg-neutral-950 border border-neutral-800">
                <strong className="block text-red-400 font-mono text-xs mb-0.5">3. Bloqueie e denuncie</strong>
                <span className="text-neutral-300">Acione as ferramentas das redes e a SaferNet Brasil.</span>
              </div>

              <div className="p-3 bg-neutral-950 border border-neutral-800">
                <strong className="block text-red-400 font-mono text-xs mb-0.5">4. Faça o Boletim de Ocorrência</strong>
                <span className="text-neutral-300">Na Delegacia Eletrônica por crimes contra a honra ou cyberbullying.</span>
              </div>
            </div>
          </div>

          {/* Emergency Channels */}
          <div className="space-y-3">
            <h3 className="font-mono uppercase font-bold text-xs tracking-wider text-red-500 border-b pb-1 border-neutral-800">
              Canais de Ajuda Oficial (Gratuitos 24h)
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-center font-mono">
              <div className="p-3 bg-neutral-950 border border-neutral-800">
                <span className="block text-sm font-bold text-red-400">Disque 100</span>
                <span className="text-[10px] text-neutral-400">Direitos Humanos</span>
              </div>

              <div className="p-3 bg-neutral-950 border border-neutral-800">
                <span className="block text-sm font-bold text-red-400">Ligue 188 (CVV)</span>
                <span className="text-[10px] text-neutral-400">Apoio Emocional</span>
              </div>

              <div className="p-3 bg-neutral-950 border border-neutral-800">
                <span className="block text-sm font-bold text-red-400">SaferNet Brasil</span>
                <span className="text-[10px] text-neutral-400">safernet.org.br</span>
              </div>
            </div>
          </div>

          {/* Academic Credits */}
          <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-neutral-400">
            <div>
              <strong>Projeto de Extensão:</strong> {ACADEMIC_INFO.discipline}
            </div>
            <div>
              <strong>Orientação:</strong> {ACADEMIC_INFO.advisor}
            </div>
          </div>

          {/* Bottom Action Footer Bar inside Modal (Hidden on Print) */}
          <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3 print:hidden">
            <p className="text-xs text-neutral-400 font-mono">
              Pressione <kbd className="px-1.5 py-0.5 bg-neutral-800 border border-neutral-700 text-white rounded text-[10px]">ESC</kbd> ou clique fora para fechar.
            </p>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={handlePrint}
                className="flex-1 sm:flex-initial px-4 py-2.5 bg-red-600 hover:bg-red-500 text-black font-mono uppercase font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <Printer className="w-4 h-4" />
                <span>Imprimir Cartilha</span>
              </button>

              <button
                onClick={onClose}
                className="flex-1 sm:flex-initial px-4 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700 font-mono text-xs uppercase font-bold flex items-center justify-center gap-2 transition-all"
              >
                <X className="w-4 h-4 text-red-500" />
                <span>Fechar / Sair</span>
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

