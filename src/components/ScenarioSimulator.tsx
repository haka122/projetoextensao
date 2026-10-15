import React, { useState } from 'react';
import { SCENARIOS } from '../data/cyberbullyingData';
import { HelpCircle, CheckCircle2, ShieldCheck, Heart, ArrowRight, UserCheck } from 'lucide-react';

export const ScenarioSimulator: React.FC = () => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(SCENARIOS[0].id);

  const activeScenario = SCENARIOS.find(s => s.id === selectedScenarioId) || SCENARIOS[0];

  return (
    <section id="simulador" className="py-16 bg-[#0A0A0B] text-slate-200 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800 text-red-500 text-xs font-mono uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-red-500" />
            <span>Simulador de Casos Reais</span>
          </div>
          <h2 className="font-['Instrument_Serif',serif] italic text-4xl sm:text-5xl text-white tracking-tight">
            "O que fazer se acontecer comigo?"
          </h2>
          <p className="mt-2 text-neutral-300 text-sm">
            Selecione uma situação hipotética para visualizar o plano de contenção emergencial, providências judiciais e acolhimento psíquico.
          </p>
        </div>

        {/* Scenario Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {SCENARIOS.map((scen) => {
            const isSelected = scen.id === selectedScenarioId;
            return (
              <button
                key={scen.id}
                onClick={() => setSelectedScenarioId(scen.id)}
                className={`p-5 text-left border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-red-600 text-black border-red-600 shadow-[0_0_20px_rgba(220,38,38,0.4)]'
                    : 'bg-neutral-900 text-slate-200 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div>
                  <span className={`text-[10px] font-mono uppercase font-bold tracking-widest px-2 py-0.5 mb-2 inline-block ${
                    isSelected 
                      ? 'bg-black text-white' 
                      : 'bg-neutral-950 text-neutral-400 border border-neutral-800'
                  }`}>
                    Caso Prático
                  </span>
                  <h3 className={`font-['Instrument_Serif',serif] italic text-xl mb-1 ${isSelected ? 'text-black font-bold' : 'text-white'}`}>
                    {scen.title}
                  </h3>
                  <p className={`text-xs line-clamp-2 ${isSelected ? 'text-black/90 font-medium' : 'text-neutral-400'}`}>
                    {scen.situation}
                  </p>
                </div>

                <div className={`mt-4 pt-3 border-t text-xs font-mono uppercase tracking-wider font-bold flex items-center justify-between ${
                  isSelected ? 'border-black/20 text-black' : 'border-neutral-800 text-red-500'
                }`}>
                  <span>Ver Plano de Ação</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Scenario Detailed View */}
        <div className="bg-neutral-900 p-6 sm:p-8 border border-neutral-800 space-y-6">
          
          <div className="p-4 bg-neutral-950 border border-neutral-800">
            <h4 className="font-mono text-xs uppercase font-bold text-red-400 mb-1">
              Situação Selecionada: {activeScenario.title}
            </h4>
            <p className="text-xs text-slate-300">
              {activeScenario.situation}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Immediate Actions */}
            <div className="space-y-3">
              <h5 className="font-mono text-xs uppercase font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Ações Imediatas (Primeiras 2 Horas)</span>
              </h5>
              <ul className="space-y-2 text-xs text-slate-300">
                {activeScenario.immediateActions.map((act, i) => (
                  <li key={i} className="flex items-start gap-2 bg-neutral-950 p-3 border border-neutral-800">
                    <span className="font-mono font-bold text-red-500">{i + 1}.</span>
                    <span className="leading-relaxed">{act}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Steps */}
            <div className="space-y-3">
              <h5 className="font-mono text-xs uppercase font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-red-500" />
                <span>Providências Jurídicas</span>
              </h5>
              <ul className="space-y-2 text-xs text-slate-300">
                {activeScenario.legalSteps.map((leg, i) => (
                  <li key={i} className="flex items-start gap-2 bg-neutral-950 p-3 border border-neutral-800">
                    <span className="font-mono font-bold text-red-500">•</span>
                    <span className="leading-relaxed">{leg}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Psychological Support Box */}
          <div className="p-4 bg-neutral-950 border border-neutral-800 text-xs flex items-start gap-3">
            <Heart className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-mono uppercase font-bold text-xs text-red-400 mb-0.5">
                Acolhimento Psicológico:
              </strong>
              <span className="text-neutral-300">{activeScenario.psychologicalAdvice}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
