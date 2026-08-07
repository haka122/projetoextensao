import React from 'react';
import { FileSearch, CheckCircle2, AlertTriangle, ShieldCheck, Camera, FileCode, Lock, ArrowRight } from 'lucide-react';

export const EvidenceGuide: React.FC = () => {
  return (
    <section id="provas" className="py-16 bg-[#0A0A0B] text-slate-200 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800 text-red-500 text-xs font-mono uppercase tracking-widest mb-4">
            <FileSearch className="w-3.5 h-3.5 text-red-500" />
            <span>Validade Jurídica e Produção de Provas</span>
          </div>
          <h2 className="font-['Instrument_Serif',serif] italic text-4xl sm:text-5xl text-white tracking-tight">
            Como Coletar Provas Digitais Válidas
          </h2>
          <p className="mt-3 text-neutral-300 text-base leading-relaxed">
            Uma das maiores dúvidas de quem sofre cyberbullying é como comprovar as agressões, já que perfis e conversas podem ser apagados num clique. Siga estas etapas de preservação de cadeia de custódia.
          </p>
        </div>

        {/* Workflow Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Step 1 */}
          <div className="bg-neutral-900 p-6 border border-neutral-800 relative">
            <div className="w-9 h-9 bg-red-600 text-black font-mono font-black flex items-center justify-center text-sm mb-4">
              01
            </div>
            <h3 className="font-['Instrument_Serif',serif] italic text-xl text-white mb-2 flex items-center gap-2">
              <Camera className="w-4 h-4 text-red-500" />
              <span>Prints Legíveis e Completos</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Capturar a tela inteira incluindo a hora e data do sistema operacional. O print deve mostrar o nome de usuário (handle @exemplo) e a URL do navegador.
            </p>
            <span className="text-[10px] font-mono uppercase font-bold text-red-400 block bg-neutral-950 p-2 border border-neutral-800">
              ⚠️ Não corte nem edite a imagem!
            </span>
          </div>

          {/* Step 2 */}
          <div className="bg-neutral-900 p-6 border border-neutral-800 relative">
            <div className="w-9 h-9 bg-red-600 text-black font-mono font-black flex items-center justify-center text-sm mb-4">
              02
            </div>
            <h3 className="font-['Instrument_Serif',serif] italic text-xl text-white mb-2 flex items-center gap-2">
              <FileCode className="w-4 h-4 text-red-500" />
              <span>Exporte a Conversa Original</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              No WhatsApp ou Telegram, utilize a função "Exportar Conversa" em arquivo de texto (.txt) contendo todas as mídias anexas.
            </p>
            <span className="text-[10px] font-mono uppercase font-bold text-red-400 block bg-neutral-950 p-2 border border-neutral-800">
              Guarda os cabeçalhos e horários.
            </span>
          </div>

          {/* Step 3 */}
          <div className="bg-neutral-900 p-6 border border-neutral-800 relative">
            <div className="w-9 h-9 bg-red-600 text-black font-mono font-black flex items-center justify-center text-sm mb-4">
              03
            </div>
            <h3 className="font-['Instrument_Serif',serif] italic text-xl text-white mb-2 flex items-center gap-2">
              <Lock className="w-4 h-4 text-red-500" />
              <span>Ata Notarial ou Verifact</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Solicite a um Cartório de Notas a lavratura de uma Ata Notarial (fé pública) ou utilize plataformas auditadas de prova digital com certificação de Hash (ISO 27037).
            </p>
            <span className="text-[10px] font-mono uppercase font-bold text-red-400 block bg-neutral-950 p-2 border border-neutral-800">
              Inquestionável em processos.
            </span>
          </div>

          {/* Step 4 */}
          <div className="bg-neutral-900 p-6 border border-neutral-800 relative">
            <div className="w-9 h-9 bg-red-600 text-black font-mono font-black flex items-center justify-center text-sm mb-4">
              04
            </div>
            <h3 className="font-['Instrument_Serif',serif] italic text-xl text-white mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-red-500" />
              <span>Boletim de Ocorrência (BO)</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Registre o BO na Delegacia Eletrônica do seu Estado ou presencialmente na Delegacia de Crimes Cibernéticos anexando todo o dossiê probatório reunido.
            </p>
            <span className="text-[10px] font-mono uppercase font-bold text-slate-300 block bg-neutral-950 p-2 border border-neutral-800">
              Instaura o Inquérito Policial.
            </span>
          </div>

        </div>

        {/* Warning Banner */}
        <div className="p-6 bg-neutral-900 border border-amber-600/40 text-slate-100 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 bg-amber-500 text-black font-black flex items-center justify-center shrink-0">
            <AlertTriangle className="w-5 h-5 text-black" />
          </div>
          <div className="text-xs leading-relaxed space-y-1">
            <h4 className="font-mono text-xs uppercase font-bold text-amber-400">
              Atenção: Por que prints de tela simples podem ser contestados no tribunal?
            </h4>
            <p className="text-neutral-300">
              Com o avanço de aplicativos geradores de conversas fakes, um print simples isolado pode ser alegado pela defesa como forjado. Por isso, a ata notarial ou o uso de verificação de hash assegura que o conteúdo de fato existiu no momento do registro.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
