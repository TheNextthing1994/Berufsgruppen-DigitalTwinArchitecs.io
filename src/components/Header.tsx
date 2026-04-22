import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Sparkles, MessageSquare, Briefcase, Zap, CreditCard, HelpCircle, Home } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useLanguage } from '../contexts/LanguageContext';

const TowerIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* The elongated, tapered body of the Chechen tower */}
    <path d="M8 22L10.5 2H13.5L16 22H8Z" />
    {/* Subtle window slits typical for defensive towers */}
    <rect x="11.3" y="6" width="1.4" height="1" fill="rgba(0,0,0,0.5)" />
    <rect x="11.3" y="10" width="1.4" height="1" fill="rgba(0,0,0,0.5)" />
    <rect x="11.3" y="14" width="1.4" height="1" fill="rgba(0,0,0,0.5)" />
  </svg>
);

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { name: t.nav.start, href: '/', icon: Home },
    { name: t.nav.consulting, href: '/beratung', icon: MessageSquare },
    { name: t.nav.automation, href: '/automatisierung', icon: Zap },
    { name: t.nav.chatbot, href: '/chatbot', icon: Sparkles },
    { name: t.nav.pricing, href: '/preise', icon: CreditCard },
    { name: t.nav.faq, href: '/faq', icon: HelpCircle },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-slate-950/40 backdrop-blur-xl py-3 border-b border-white/5'
          : 'bg-transparent py-5 border-b border-transparent'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 group text-[0px] leading-[24px] font-['Georgia',_serif] text-center"
        >
          <div className="w-14 h-14 bg-gradient-to-br from-slate-200 to-slate-400 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform shadow-lg shadow-slate-900/40 shrink-0 border border-white/20">
            <TowerIcon className="text-slate-700 w-8 h-8" />
          </div>
          <span className="text-3xl md:text-4xl font-black tracking-tighter text-white whitespace-nowrap">
            Tassam<span className="text-emerald-500">.ai</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-950/80 backdrop-blur-2xl border border-white/10 rounded-full py-0 px-[10px] ml-[10px] mr-0 relative">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "relative px-5 py-2.5 text-sm font-bold flex items-center gap-2 transition-all duration-500 rounded-full group",
                  isActive 
                    ? "text-slate-950" 
                    : "text-slate-400 hover:text-white"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-gradient-to-br from-white via-white to-slate-200 rounded-full shadow-[0_4px_12px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.1)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                
                {!isActive && (
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300" />
                )}

                <span className="relative z-10 flex items-center gap-2">
                  <link.icon className={cn("w-4 h-4", isActive ? "text-slate-950" : "text-emerald-500")} />
                  {link.name}
                </span>
              </Link>
            );
          })}
          
          <div className="flex items-center gap-1.5 px-3 border-l border-white/10 ml-2 relative z-10">
            <button 
              onClick={() => setLanguage('de')}
              className={cn(
                "w-8 h-8 rounded-full text-[10px] font-bold transition-all flex items-center justify-center",
                language === 'de' ? "bg-white text-slate-950 shadow-lg" : "text-slate-500 hover:text-white"
              )}
            >
              DE
            </button>
            <button 
              onClick={() => setLanguage('ru')}
              className={cn(
                "w-8 h-8 rounded-full text-[10px] font-bold transition-all flex items-center justify-center",
                language === 'ru' ? "bg-white text-slate-950 shadow-lg" : "text-slate-500 hover:text-white"
              )}
            >
              RU
            </button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-lg font-medium text-slate-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/#contact"
                className="w-full py-3 bg-emerald-700 text-white rounded-lg text-center font-bold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav.strategy}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
