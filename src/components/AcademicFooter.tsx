import React from 'react';
import { ACADEMIC_INFO } from '../data/cyberbullyingData';
import { GraduationCap, ShieldCheck, Heart, BookOpen } from 'lucide-react';

export const AcademicFooter: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0B] text-neutral-400 py-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Extension Project Identity */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2 text-white font-['Instrument_Serif',serif] italic text-2xl">
              <div className="w-8 h-8 bg-red-600 flex items-center justify-center text-black font-black">
                <GraduationCap className="w-4 h-4 text-black" />
              </div>
              <span>{ACADEMIC_INFO.university}</span>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-lg font-sans">
              Portal desenvolvido como produto pedagógico de Projeto de Extensão Universitária, com a missão de promover o letramento digital, a prevenção do assédio virtual e a garantia dos Direitos Humanos nas redes.
            </p>

            <div className="text-xs text-neutral-500 font-mono">
              <strong className="text-neutral-300">Curso/Área:</strong> {ACADEMIC_INFO.course} • {ACADEMIC_INFO.discipline}
            </div>
          </div>

          {/* Academic Team & Guidance */}
          <div className="md:col-span-6 bg-neutral-900 p-5 border border-neutral-800 text-xs space-y-3">
            <h4 className="font-mono text-xs uppercase font-bold text-red-500 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-red-500" />
              <span>Ficha Técnica do Projeto</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-300">
              <div>
                <span className="text-neutral-500 block text-[10px] font-mono uppercase">Professor Orientador</span>
                <span>{ACADEMIC_INFO.advisor}</span>
              </div>

              <div>
                <span className="text-neutral-500 block text-[10px] font-mono uppercase">Ano de Produção</span>
                <span>{ACADEMIC_INFO.year}</span>
              </div>
            </div>

            <div>
              <span className="text-neutral-500 block text-[10px] font-mono uppercase mb-1">Integrantes do Grupo</span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-slate-300">
                {ACADEMIC_INFO.students.map((student, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-red-500"></span>
                    <span>{student}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer */}
        <div className="pt-6 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p className="text-center sm:text-left">
            Este site é um material de caráter informativo e educacional. Em caso de emergência ou crimes cibernéticos em andamento, procure as autoridades policiais ou ligue 100/188.
          </p>
        </div>

      </div>
    </footer>
  );
};
