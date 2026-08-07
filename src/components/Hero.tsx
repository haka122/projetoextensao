import React from 'react';
import { 
  ShieldCheck, 
  BookOpenCheck, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  Scale, 
  FileText,
  AlertTriangle,
  GraduationCap
} from 'lucide-react';

interface HeroProps {
  onOpenSOS: () => void;
  onOpenPrintModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSOS, onOpenPrintModal }) => {
  return (
    <section id="inicio" className="pt-10 pb-16 bg-[#0A0A0B] text-slate-100 relative overflow-hidden border-b border-white/10">
      
      {/* Abstract Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Project Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800 text-red-500 text-xs font-mono tracking-widest uppercase mb-8">
          <GraduationCap className="w-4 h-4 text-red-500" />
          <span>Projeto de Extensão Universitária • Direitos Humanos & Cidadania Digital</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Main Title & Executive Description */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <h1 className="font-['Instrument_Serif',serif] italic text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.08] tracking-tight">
              Cyberbullying: <br />
              <span className="not-italic font-['Plus_Jakarta_Sans',sans-serif] font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-200">
                Conscientização, Legislação e Proteção Digital
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              A violência virtual não é brincadeira nem se encerra ao desligar a tela. O cyberbullying impacta profundamente a saúde psíquica, o desempenho escolar e a dignidade humana. Este portal oferece um guia completo sobre prevenção, acolhimento, enquadramento legal (<strong className="text-red-400 font-semibold">Lei nº 14.811/2024</strong>) e canais de ajuda oficial no Brasil.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#conceito"
                className="inline-flex items-center gap-2 px-6 py-3 font-mono font-bold text-xs uppercase tracking-wider bg-red-600 hover:bg-red-700 text-black transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)]"
              >
                <span>Leitura Guiada</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenPrintModal}
                className="inline-flex items-center gap-2 px-5 py-3 font-mono text-xs uppercase tracking-wider bg-neutral-900 hover:bg-neutral-800 text-slate-200 border border-neutral-800 hover:border-neutral-700 transition-all"
              >
                <FileText className="w-4 h-4 text-red-500" />
                <span>Imprimir Cartilha</span>
              </button>

              <button
                onClick={onOpenSOS}
                className="inline-flex items-center gap-2 px-5 py-3 font-mono font-bold text-xs uppercase tracking-wider bg-red-950/60 hover:bg-red-900/80 text-red-300 border border-red-800/60 transition-all"
              >
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span>Precisa de Ajuda? (SOS)</span>
              </button>
            </div>

            {/* Quick Meta Stats */}
            <div className="pt-4 flex items-center gap-6 text-xs font-mono text-neutral-400 border-t border-white/10">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-500" />
                <span>Tempo: ~8 min de leitura</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-red-500" />
                <span>Lei nº 14.811/2024</span>
              </div>
            </div>
          </div>

          {/* Immediate Executive Summary Box ("Entra e já consegue ler") */}
          <div className="lg:col-span-5 bg-neutral-900/90 border border-neutral-800 p-6 flex flex-col justify-between relative shadow-2xl">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <BookOpenCheck className="w-5 h-5 text-red-500" />
                  <h3 className="font-['Instrument_Serif',serif] italic text-xl text-white">
                    Resumo Executivo
                  </h3>
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest px-2 py-0.5 bg-red-600 text-black font-extrabold">
                  Acesso Rápido
                </span>
              </div>

              <ul className="space-y-3.5 text-xs text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 bg-red-600 text-black font-black flex items-center justify-center text-[10px] shrink-0 mt-0.5">1</span>
                  <span>
                    <strong className="text-white font-semibold">Crime Específico:</strong> Desde jan/2024 (Lei 14.811), o cyberbullying no Código Penal prevê reclusão de 2 a 4 anos e multa.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 bg-red-600 text-black font-black flex items-center justify-center text-[10px] shrink-0 mt-0.5">2</span>
                  <span>
                    <strong className="text-white font-semibold">Alcance 24 Horas:</strong> Ocorre em redes sociais, jogos, chats e e-mails, perseguindo a vítima ininterruptamente.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 bg-red-600 text-black font-black flex items-center justify-center text-[10px] shrink-0 mt-0.5">3</span>
                  <span>
                    <strong className="text-white font-semibold">Preserve as Provas:</strong> Não apague mensagens. Registre prints legíveis com data, hora, URL e ata notarial se possível.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 bg-red-600 text-black font-black flex items-center justify-center text-[10px] shrink-0 mt-0.5">4</span>
                  <span>
                    <strong className="text-white font-semibold">Canais de Socorro:</strong> Disque 100 (Direitos Humanos), Ligue 180 (Mulheres), CVV 188 e SaferNet.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800 bg-neutral-950/80 -mx-6 -mb-6 p-4 flex items-center justify-between text-xs">
              <span className="text-neutral-500 font-mono text-[11px]">Projeto de Extensão Acadêmica</span>
              <a href="#legislacao" className="text-red-400 hover:text-white font-mono uppercase text-[11px] flex items-center gap-1">
                <span>Enquadramento Legal</span>
                <Scale className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
