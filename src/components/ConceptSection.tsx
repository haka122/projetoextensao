import React from 'react';
import { BookOpen, AlertCircle, Sparkles, CheckCircle2, XCircle, Globe, ShieldOff, Clock, UserX } from 'lucide-react';

export const ConceptSection: React.FC = () => {
  return (
    <section id="conceito" className="py-16 bg-[#0A0A0B] text-slate-200 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800 text-red-500 text-xs font-mono uppercase tracking-widest mb-4">
            <BookOpen className="w-3.5 h-3.5 text-red-500" />
            <span>Fundamentação Conceitual</span>
          </div>
          <h2 className="font-['Instrument_Serif',serif] italic text-4xl sm:text-5xl text-white tracking-tight">
            O que é Cyberbullying?
          </h2>
          <p className="mt-3 text-neutral-300 text-base leading-relaxed">
            Entenda a definição técnica, a diferença em relação a intrigas corriqueiras e as características únicas que tornam a agressão virtual profundamente avassaladora para a vítima.
          </p>
        </div>

        {/* Content Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Main Definition & Characteristics */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-neutral-900 p-6 sm:p-8 border border-neutral-800 space-y-4">
              <h3 className="font-['Instrument_Serif',serif] italic text-2xl text-white flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-500" />
                <span>Definição Técnica e Abrangência</span>
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                O <strong className="text-white font-semibold">Cyberbullying</strong> (ou intimidação sistemática virtual) é a prática deliberada, reiterada e hostil de atos de violência física ou psicológica exercida por meio de tecnologias de informação e comunicação (redes sociais, aplicativos de mensagens instantâneas, e-mails, fóruns e jogos eletrônicos).
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                Ao contrário de discussões pontuais ou divergências de opinião, o cyberbullying caracteriza-se pela <strong className="text-red-400">intencionalidade de causar dano</strong>, pelo <strong className="text-red-400">desequilíbrio de poder</strong> (agressor respaldado pela multidão ou anonimato) e pela <strong className="text-red-400">frequência/continuidade</strong> das agressões.
              </p>

              <div className="p-4 bg-neutral-950 border border-neutral-800 text-amber-200/90 text-xs leading-relaxed font-sans">
                <strong className="text-amber-400 uppercase font-mono tracking-wider block mb-1">Importante Distinguir:</strong> Nem todo desentendimento virtual é cyberbullying. Para haver a tipificação do fenômeno, exige-se a intimidação sistemática — a perseguição persistente com o objetivo de humilhar, isolar ou desestabilizar emocionalmente a vítima.
              </div>
            </div>

            {/* 4 Pillars of Virtual Aggression */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-neutral-900 p-5 border border-neutral-800 hover:border-neutral-700 transition-colors">
                <div className="w-8 h-8 bg-red-600 text-black flex items-center justify-center mb-3 font-bold">
                  <Clock className="w-4 h-4 text-black" />
                </div>
                <h4 className="font-mono text-xs uppercase font-bold text-white mb-1.5">Invasão 24h (Sem Refúgio)</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Enquanto o bullying escolar encerra-se na saída do portão, o ataque virtual persegue a vítima até dentro do seu quarto via celular.
                </p>
              </div>

              <div className="bg-neutral-900 p-5 border border-neutral-800 hover:border-neutral-700 transition-colors">
                <div className="w-8 h-8 bg-red-600 text-black flex items-center justify-center mb-3 font-bold">
                  <Globe className="w-4 h-4 text-black" />
                </div>
                <h4 className="font-mono text-xs uppercase font-bold text-white mb-1.5">Escala Viral e Audiência Ilimitada</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Um boato ou imagem vazada atinge centenas ou milhares de pessoas em questão de minutos, multiplicando a dor do constrangimento.
                </p>
              </div>

              <div className="bg-neutral-900 p-5 border border-neutral-800 hover:border-neutral-700 transition-colors">
                <div className="w-8 h-8 bg-red-600 text-black flex items-center justify-center mb-3 font-bold">
                  <UserX className="w-4 h-4 text-black" />
                </div>
                <h4 className="font-mono text-xs uppercase font-bold text-white mb-1.5">Falso Anonimato e Desinibição</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  A distância física e o uso de perfis fakes reduzem a empatia do agressor, que profere ofensas que jamais diria pessoalmente.
                </p>
              </div>

              <div className="bg-neutral-900 p-5 border border-neutral-800 hover:border-neutral-700 transition-colors">
                <div className="w-8 h-8 bg-red-600 text-black flex items-center justify-center mb-3 font-bold">
                  <ShieldOff className="w-4 h-4 text-black" />
                </div>
                <h4 className="font-mono text-xs uppercase font-bold text-white mb-1.5">Permanência e Rastro Digital</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Publicações continuam salvas e acessíveis na nuvem por anos, perpetuando o sofrimento se não forem removidas legalmente.
                </p>
              </div>

            </div>

          </div>

          {/* Comparison Table: Presencial vs. Virtual */}
          <div className="lg:col-span-5 bg-neutral-900 p-6 border border-neutral-800">
            <h3 className="font-['Instrument_Serif',serif] italic text-2xl text-white mb-5 pb-3 border-b border-neutral-800">
              Comparativo: Físico vs. Cyber
            </h3>

            <div className="space-y-4 text-xs">
              
              <div className="p-4 bg-neutral-950 border border-neutral-800 space-y-2.5">
                <span className="font-mono text-xs uppercase text-white font-bold block">1. Espaço & Tempo</span>
                <div className="grid grid-cols-2 gap-2 text-neutral-300">
                  <div className="p-2.5 bg-neutral-900 border border-neutral-800">
                    <strong className="text-neutral-400 font-mono text-[10px] uppercase block mb-1">Presencial:</strong>
                    Delimitado ao ambiente escolar ou clube.
                  </div>
                  <div className="p-2.5 bg-neutral-900 border border-red-900/60 text-slate-200">
                    <strong className="text-red-400 font-mono text-[10px] uppercase block mb-1">Cyberbullying:</strong>
                    Sem barreiras. Acontece 24h por dia, 7 dias/semana.
                  </div>
                </div>
              </div>

              <div className="p-4 bg-neutral-950 border border-neutral-800 space-y-2.5">
                <span className="font-mono text-xs uppercase text-white font-bold block">2. Identidade do Agressor</span>
                <div className="grid grid-cols-2 gap-2 text-neutral-300">
                  <div className="p-2.5 bg-neutral-900 border border-neutral-800">
                    <strong className="text-neutral-400 font-mono text-[10px] uppercase block mb-1">Presencial:</strong>
                    Conhecido e visível olho no olho.
                  </div>
                  <div className="p-2.5 bg-neutral-900 border border-red-900/60 text-slate-200">
                    <strong className="text-red-400 font-mono text-[10px] uppercase block mb-1">Cyberbullying:</strong>
                    Uso frequente de fakes, bots e perfis anônimos.
                  </div>
                </div>
              </div>

              <div className="p-4 bg-neutral-950 border border-neutral-800 space-y-2.5">
                <span className="font-mono text-xs uppercase text-white font-bold block">3. Alcance do Público</span>
                <div className="grid grid-cols-2 gap-2 text-neutral-300">
                  <div className="p-2.5 bg-neutral-900 border border-neutral-800">
                    <strong className="text-neutral-400 font-mono text-[10px] uppercase block mb-1">Presencial:</strong>
                    Restrito a quem presenciou o ato.
                  </div>
                  <div className="p-2.5 bg-neutral-900 border border-red-900/60 text-slate-200">
                    <strong className="text-red-400 font-mono text-[10px] uppercase block mb-1">Cyberbullying:</strong>
                    Potencial viralização em segundos.
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
