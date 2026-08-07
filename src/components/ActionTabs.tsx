import React, { useState } from 'react';
import { ACTION_GUIDES } from '../data/cyberbullyingData';
import { 
  Shield, 
  HeartHandshake, 
  GraduationCap, 
  Users, 
  CheckCircle2, 
  XCircle, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const ActionTabs: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>('victims');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield': return <Shield className="w-4 h-4" />;
      case 'HeartHandshake': return <HeartHandshake className="w-4 h-4" />;
      case 'GraduationCap': return <GraduationCap className="w-4 h-4" />;
      case 'Users': return <Users className="w-4 h-4" />;
      default: return <Shield className="w-4 h-4" />;
    }
  };

  const activeGuide = ACTION_GUIDES.find(g => g.id === activeTabId) || ACTION_GUIDES[0];

  return (
    <section id="guias" className="py-16 bg-[#0A0A0B] text-slate-200 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800 text-red-500 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-red-500" />
            <span>Orientação Prática por Perfil</span>
          </div>
          <h2 className="font-['Instrument_Serif',serif] italic text-4xl sm:text-5xl text-white tracking-tight">
            Guia de Ação: O Que Fazer e O Que EVITAR
          </h2>
          <p className="mt-2 text-neutral-300 text-sm">
            Selecione o seu papel na situação para ver as instruções direcionadas e os erros mais comuns que não devem ser cometidos.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-neutral-800">
          {ACTION_GUIDES.map((guide) => {
            const isActive = guide.id === activeTabId;
            return (
              <button
                key={guide.id}
                onClick={() => setActiveTabId(guide.id)}
                className={`flex items-center gap-2 px-4 py-3 font-mono text-xs uppercase tracking-wider whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-red-600 text-black font-bold shadow-[0_0_15px_rgba(220,38,38,0.4)]'
                    : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white hover:border-neutral-700'
                }`}
              >
                {getIcon(guide.icon)}
                <span>{guide.role}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="bg-neutral-900 p-6 sm:p-8 border border-neutral-800">
          
          <div className="max-w-3xl mb-8">
            <h3 className="font-['Instrument_Serif',serif] italic text-3xl text-white mb-2">
              {activeGuide.title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
              {activeGuide.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Steps Column */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-wider font-bold text-red-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Passos Recomendados</span>
              </h4>

              <div className="space-y-3">
                {activeGuide.steps.map((step, idx) => (
                  <div 
                    key={idx}
                    className="p-4 bg-neutral-950 border border-neutral-800 space-y-1.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <h5 className="font-bold text-sm text-white">
                        {step.title}
                      </h5>
                      {step.importantBadge && (
                        <span className="text-[10px] font-mono uppercase font-bold px-2 py-0.5 bg-red-950 text-red-300 border border-red-800">
                          {step.importantBadge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* What NOT to do Column */}
            <div className="lg:col-span-5 bg-neutral-950 border border-red-900/60 p-6 space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-wider font-bold text-red-400 flex items-center gap-2">
                <XCircle className="w-4 h-4 text-red-500" />
                <span>O Que NUNCA Fazer</span>
              </h4>

              <ul className="space-y-3 text-xs text-slate-300">
                {activeGuide.donits.map((dont, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-4 h-4 bg-red-600 text-black font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      ✕
                    </span>
                    <span className="leading-relaxed">{dont}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
