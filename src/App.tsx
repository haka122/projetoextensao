import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickStats } from './components/QuickStats';
import { ConceptSection } from './components/ConceptSection';
import { TypesGrid } from './components/TypesGrid';
import { LegalSection } from './components/LegalSection';
import { EvidenceGuide } from './components/EvidenceGuide';
import { ActionTabs } from './components/ActionTabs';
import { ScenarioSimulator } from './components/ScenarioSimulator';
import { InteractiveQuiz } from './components/InteractiveQuiz';
import { EmergencyModal } from './components/EmergencyModal';
import { PrintableSummaryModal } from './components/PrintableSummaryModal';
import { AcademicFooter } from './components/AcademicFooter';
import { Search, X, ShieldAlert } from 'lucide-react';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSOSOpen, setIsSOSOpen] = useState(false);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [fontSizeLevel, setFontSizeLevel] = useState(0); // -1, 0, 1, 2
  const [isHighContrast, setIsHighContrast] = useState(false);

  // Calculate font class based on level
  const getFontSizeClass = () => {
    switch (fontSizeLevel) {
      case -1: return 'text-[92%]';
      case 1: return 'text-[108%]';
      case 2: return 'text-[116%]';
      default: return 'text-[100%]';
    }
  };

  return (
    <div className={`min-h-screen flex flex-col transition-all ${isHighContrast ? 'dark contrast-more bg-slate-950 text-white' : ''} ${getFontSizeClass()}`}>
      
      {/* Top Navigation Header */}
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onOpenSOS={() => setIsSOSOpen(true)}
        onOpenPrintModal={() => setIsPrintModalOpen(true)}
        fontSizeLevel={fontSizeLevel}
        setFontSizeLevel={setFontSizeLevel}
        isHighContrast={isHighContrast}
        setIsHighContrast={setIsHighContrast}
      />

      {/* Search Filter Banner if user is actively searching */}
      {searchTerm && (
        <div className="bg-red-600 text-black py-3 px-4 shadow-md sticky top-16 z-30 flex items-center justify-between max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-mono uppercase font-bold">
            <Search className="w-4 h-4 text-black" />
            <span>Filtrando exibição para o termo: "<strong className="underline">{searchTerm}</strong>"</span>
          </div>
          <button
            onClick={() => setSearchTerm('')}
            className="p-1 bg-black text-white hover:bg-neutral-800 text-xs flex items-center gap-1 font-mono uppercase font-bold"
          >
            <X className="w-4 h-4" />
            <span>Limpar Busca</span>
          </button>
        </div>
      )}

      {/* Main Educational Portal Sections */}
      <main className="flex-1">
        <Hero 
          onOpenSOS={() => setIsSOSOpen(true)}
          onOpenPrintModal={() => setIsPrintModalOpen(true)}
        />
        
        <QuickStats />
        <ConceptSection />
        <TypesGrid />
        <LegalSection />
        <EvidenceGuide />
        <ActionTabs />
        <ScenarioSimulator />
        <InteractiveQuiz />
      </main>

      {/* Extension Project Academic Footer */}
      <AcademicFooter />

      {/* Emergency SOS Modal (24h Channels) */}
      <EmergencyModal 
        isOpen={isSOSOpen}
        onClose={() => setIsSOSOpen(false)}
      />

      {/* Printable Cartilha View */}
      <PrintableSummaryModal 
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
      />

    </div>
  );
}
