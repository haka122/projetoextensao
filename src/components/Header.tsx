import React, { useState, useEffect } from 'react';
import { 
  ShieldAlert, 
  Search, 
  PhoneCall, 
  Printer, 
  ZoomIn, 
  ZoomOut, 
  Sun, 
  Moon, 
  BookOpen,
  Menu,
  X
} from 'lucide-react';

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onOpenSOS: () => void;
  onOpenPrintModal: () => void;
  fontSizeLevel: number;
  setFontSizeLevel: React.Dispatch<React.SetStateAction<number>>;
  isHighContrast: boolean;
  setIsHighContrast: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<HeaderProps> = ({
  searchTerm,
  setSearchTerm,
  onOpenSOS,
  onOpenPrintModal,
  fontSizeLevel,
  setFontSizeLevel,
  isHighContrast,
  setIsHighContrast
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O que é', href: '#conceito' },
    { name: 'Tipos', href: '#tipos' },
    { name: 'Legislação (Lei 14.811)', href: '#legislacao' },
    { name: 'Coleta de Provas', href: '#provas' },
    { name: 'Guias de Ação', href: '#guias' },
    { name: 'Simulador', href: '#simulador' },
    { name: 'Quiz', href: '#quiz' },
    { name: 'Canais de Ajuda', href: '#canais' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0A0A0B]/90 backdrop-blur-md border-b border-white/10 transition-colors">
      {/* Top Reading Progress Bar */}
      <div 
        className="h-1 bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
        title={`Progresso de leitura: ${Math.round(scrollProgress)}%`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo & Academic Title */}
          <a href="#inicio" className="flex items-center gap-3 group shrink-0">
            <div className="w-9 h-9 bg-red-600 text-black flex items-center justify-center font-black group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(220,38,38,0.4)]">
              <ShieldAlert className="w-5 h-5 text-black" />
            </div>
            <div>
              <span className="font-['Instrument_Serif',serif] italic text-xl tracking-tight text-white block leading-tight">
                Cyberbullying
              </span>
              <span className="text-[10px] text-red-500 font-mono tracking-wider uppercase block">
                Extensão Universitária
              </span>
            </div>
          </a>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center flex-1 max-w-xs relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 pointer-events-none" />
            <input
              type="text"
              placeholder="Buscar termo, lei ou orientação..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 text-xs bg-neutral-900 text-slate-100 rounded-none border border-neutral-800 focus:outline-none focus:border-red-600 transition-all placeholder:text-neutral-500"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-2 text-neutral-400 hover:text-white text-xs px-1"
              >
                ✕
              </button>
            )}
          </div>

          {/* Accessibility & Action Bar */}
          <div className="hidden md:flex items-center gap-2">
            
            {/* Font Size Adjuster */}
            <div className="flex items-center bg-neutral-900 rounded-none p-1 border border-neutral-800">
              <button
                onClick={() => setFontSizeLevel(prev => Math.max(-1, prev - 1))}
                className="p-1.5 text-neutral-300 hover:text-white hover:bg-neutral-800 rounded transition-colors"
                title="Diminuir fonte"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] font-mono font-semibold text-neutral-400 px-1.5">
                A
              </span>
              <button
                onClick={() => setFontSizeLevel(prev => Math.min(2, prev + 1))}
                className="p-1.5 text-neutral-300 hover:text-white hover:bg-neutral-800 rounded transition-colors"
                title="Aumentar fonte"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* High Contrast / Theme Toggle */}
            <button
              onClick={() => setIsHighContrast(!isHighContrast)}
              className="p-2 bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-800 hover:border-neutral-700 transition-colors"
              title={isHighContrast ? "Modo Padrão" : "Modo Alto Contraste"}
            >
              {isHighContrast ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Print/Cartilha Button */}
            <button
              onClick={onOpenPrintModal}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono tracking-wider uppercase bg-neutral-900 text-slate-200 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 transition-colors"
              title="Visualizar ou imprimir cartilha em PDF"
            >
              <Printer className="w-3.5 h-3.5 text-red-500" />
              <span>Imprimir Cartilha</span>
            </button>

            {/* Emergency SOS Button */}
            <button
              onClick={onOpenSOS}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-black uppercase tracking-wider bg-red-600 hover:bg-red-700 text-black shadow-[0_0_15px_rgba(220,38,38,0.4)] transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5 text-black" />
              <span>SOS Ajuda 24h</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenSOS}
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-black uppercase bg-red-600 text-black"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>SOS</span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-200 bg-neutral-900 border border-neutral-800"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Desktop Links Bar */}
        <nav className="hidden md:flex items-center space-x-6 py-2 overflow-x-auto text-xs font-mono tracking-wider uppercase border-t border-white/5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-neutral-400 hover:text-red-500 whitespace-nowrap transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0B] border-t border-neutral-800 px-4 pt-3 pb-6 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Buscar assunto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm bg-neutral-900 text-slate-100 border border-neutral-800 focus:border-red-600"
            />
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-mono tracking-wider text-slate-300 bg-neutral-900 border border-neutral-800 hover:border-red-600 hover:text-red-500 uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-neutral-800">
            <button
              onClick={onOpenPrintModal}
              className="flex items-center gap-2 text-xs font-mono text-slate-300 uppercase py-2"
            >
              <Printer className="w-4 h-4 text-red-500" />
              <span>Cartilha Impressa</span>
            </button>
            <button
              onClick={() => setIsHighContrast(!isHighContrast)}
              className="p-2 bg-neutral-900 text-slate-300 text-xs font-mono uppercase border border-neutral-800"
            >
              {isHighContrast ? "Modo Claro" : "Alto Contraste"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
