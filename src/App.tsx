import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Footer } from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';
import { ParticleWave } from './components/ParticleWave';
import { SolutionChat } from './components/SolutionChat';
import { IndustrySolutionsModal } from './components/IndustrySolutionsModal';
import { SideChatTrigger } from './components/SideChatTrigger';
import { AnimatePresence } from 'motion/react';
import { Header } from './components/Header';

// Pages
import { Home } from './pages/Home';
import { Consulting } from './pages/Consulting';
import { Automation } from './pages/Automation';
import { Chatbots } from './pages/Chatbots';
import { PricingPage } from './pages/PricingPage';
import { FAQPage } from './pages/FAQPage';

function AppContent() {
  const [prefilledMessage, setPrefilledMessage] = useState('');
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null);
  const [selectedIndustryForSolutions, setSelectedIndustryForSolutions] = useState<string | null>(null);
  const location = useLocation();

  const handleCtaClick = (summary: string) => {
    setPrefilledMessage(summary);
    setActiveIndustry(null);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleStartChat = (industry: string) => {
    setSelectedIndustryForSolutions(null);
    setActiveIndustry(industry);
  };

  const handleGlobalChatTrigger = () => {
    if (!activeIndustry) {
      setActiveIndustry('DigitalTwinArchitects');
    }
  };

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-700 selection:text-white relative">
      <ParticleWave />
      <Header />
      <SideChatTrigger onChatClick={handleGlobalChatTrigger} />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home onPrefill={setPrefilledMessage} onSolution={setSelectedIndustryForSolutions} />} />
          <Route path="/beratung" element={<Consulting />} />
          <Route path="/automatisierung" element={<Automation />} />
          <Route path="/chatbot" element={<Chatbots onSolution={setSelectedIndustryForSolutions} />} />
          <Route path="/preise" element={<PricingPage />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
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
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}
