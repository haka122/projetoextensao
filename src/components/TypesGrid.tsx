import React, { useState } from 'react';
import { CYBER_TYPES } from '../data/cyberbullyingData';
import { 
  Eye, 
  ShieldAlert, 
  UserX, 
  Flame, 
  UserMinus, 
  Lock, 
  AlertTriangle, 
  Filter,
  CheckCircle,
  HelpCircle
} from 'lucide-react';

export const TypesGrid: React.FC = () => {
  const [filterSeverity, setFilterSeverity] = useState<string>('todos');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Eye': return <Eye className="w-5 h-5 text-red-500" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-red-500" />;
      case 'UserX': return <UserX className="w-5 h-5 text-amber-500" />;
      case 'Flame': return <Flame className="w-5 h-5 text-amber-500" />;
      case 'UserMinus': return <UserMinus className="w-5 h-5 text-red-400" />;
      case 'Lock': return <Lock className="w-5 h-5 text-red-500" />;
      default: return <AlertTriangle className="w-5 h-5 text-red-500" />;
    }
  };

  const filteredTypes = filterSeverity === 'todos' 
    ? CYBER_TYPES 
    : CYBER_TYPES.filter(t => t.severity === filterSeverity);

  return (
    <section id="tipos" className="py-16 bg-[#0A0A0B] text-slate-200 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800 text-red-500 text-xs font-mono uppercase tracking-widest mb-4">
              <ShieldAlert className="w-3.5 h-3.5 text-red-500" />
              <span>Manifestações e Formas de Ataque</span>
            </div>
            <h2 className="font-['Instrument_Serif',serif] italic text-4xl sm:text-5xl text-white tracking-tight">
              Tipos de Cyberbullying
            </h2>
            <p className="mt-2 text-neutral-300 text-sm max-w-2xl">
              Conheça os termos técnicos usados pela criminologia e pelo direito digital para identificar cada tática ilícita praticada no ecossistema virtual.
            </p>
          </div>

          {/* Severity Filter Buttons */}
          <div className="flex items-center gap-1.5 self-start md:self-end bg-neutral-900 p-1 border border-neutral-800 text-xs font-mono uppercase">
            <span className="text-neutral-500 px-2 flex items-center gap-1.5 text-[11px]">
              <Filter className="w-3.5 h-3.5 text-red-500" />
              <span>Gravidade:</span>
            </span>
            <button
              onClick={() => setFilterSeverity('todos')}
              className={`px-3 py-1.5 transition-all ${
                filterSeverity === 'todos' 
                  ? 'bg-red-600 text-black font-bold' 
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Todos ({CYBER_TYPES.length})
            </button>
            <button
              onClick={() => setFilterSeverity('critica')}
              className={`px-3 py-1.5 transition-all ${
                filterSeverity === 'critica' 
                  ? 'bg-red-600 text-black font-bold' 
                  : 'text-red-400 hover:text-white'
              }`}
            >
              Crítica
            </button>
            <button
              onClick={() => setFilterSeverity('alta')}
              className={`px-3 py-1.5 transition-all ${
                filterSeverity === 'alta' 
                  ? 'bg-amber-600 text-black font-bold' 
                  : 'text-amber-400 hover:text-white'
              }`}
            >
              Alta
            </button>
          </div>
        </div>

        {/* Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTypes.map((type) => (
            <div
              key={type.id}
              className="bg-neutral-900 p-6 border border-neutral-800 hover:border-red-600 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-10 h-10 bg-neutral-950 border border-neutral-800 flex items-center justify-center group-hover:border-red-600 transition-colors">
                    {getIcon(type.iconName)}
                  </div>

                  <span className={`text-[10px] uppercase font-mono font-bold tracking-widest px-2.5 py-1 border ${
                    type.severity === 'critica'
                      ? 'bg-red-950/80 text-red-300 border-red-800'
                      : type.severity === 'alta'
                      ? 'bg-amber-950/80 text-amber-300 border-amber-800'
                      : 'bg-neutral-800 text-slate-300 border-neutral-700'
                  }`}>
                    Severidade {type.severity}
                  </span>
                </div>

                <h3 className="font-['Instrument_Serif',serif] italic text-2xl text-white mb-1">
                  {type.title}
                </h3>

                <p className="text-xs font-mono text-red-500 uppercase tracking-wider mb-3">
                  {type.subtitle}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {type.description}
                </p>
              </div>

              {/* Real World Examples Box */}
              <div className="pt-4 border-t border-neutral-800 bg-neutral-950/80 p-3 -mx-2 -mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-2">
                  Exemplos reais observados:
                </span>
                <ul className="space-y-1.5 text-xs text-neutral-300">
                  {type.examples.map((ex, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
