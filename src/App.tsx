import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { ScrollingTiles } from './components/ScrollingTiles';
import { CaseStudies } from './components/CaseStudies';
import { Testimonials } from './components/Testimonials';
import { Methodology } from './components/Methodology';
import { Footer } from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';
import { ParticleWave } from './components/ParticleWave';
import { DigitalTwin } from './components/DigitalTwin';
import { Solutions } from './components/Solutions';
import { SolutionChat } from './components/SolutionChat';
import { IndustrySolutionsModal } from './components/IndustrySolutionsModal';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';

export default function App() {
  const [prefilledMessage, setPrefilledMessage] = useState('');
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null);
  const [selectedIndustryForSolutions, setSelectedIndustryForSolutions] = useState<string | null>(null);

  const handleCtaClick = (summary: string) => {
    setPrefilledMessage(summary);
    setActiveIndustry(null);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleStartChat = (industry: string) => {
    setSelectedIndustryForSolutions(null);
    setActiveIndustry(industry);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-700 selection:text-white relative">
        <ParticleWave />
        <Header />
        <main className="relative z-10">
          <Hero onTileClick={setPrefilledMessage} />
          <ScrollingTiles onTileClick={setSelectedIndustryForSolutions} />
          <DigitalTwin />
          <Solutions onSolutionClick={setSelectedIndustryForSolutions} />
          <CaseStudies />
          <Testimonials />
          <Methodology />
        </main>
        <Footer prefilledMessage={prefilledMessage} />
        
        <AnimatePresence mode="wait">
          {selectedIndustryForSolutions && (
            <IndustrySolutionsModal 
              industry={selectedIndustryForSolutions}
              onClose={() => setSelectedIndustryForSolutions(null)}
              onStartChat={handleStartChat}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {activeIndustry && (
            <SolutionChat 
              industry={activeIndustry} 
              onClose={() => setActiveIndustry(null)}
              onCtaClick={handleCtaClick}
            />
          )}
        </AnimatePresence>
      </div>
    </LanguageProvider>
  );
}
