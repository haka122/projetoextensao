import React from 'react';
import { STATS_HIGHLIGHTS } from '../data/cyberbullyingData';
import { TrendingUp, Scale, ShieldAlert, Users } from 'lucide-react';

export const QuickStats: React.FC = () => {
  const icons = [Users, Scale, ShieldAlert, TrendingUp];

  return (
    <section className="py-12 bg-[#0A0A0B] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_HIGHLIGHTS.map((stat, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <div 
                key={idx}
                className="p-6 bg-neutral-900 border border-neutral-800 hover:border-red-600 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-['Instrument_Serif',serif] italic text-4xl font-normal text-red-500">
                    {stat.number}
                  </span>
                  <div className="w-9 h-9 bg-neutral-800 text-red-500 flex items-center justify-center group-hover:bg-red-600 group-hover:text-black transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                <h4 className="font-mono text-xs uppercase tracking-wider font-bold text-white mb-2">
                  {stat.label}
                </h4>

                <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
