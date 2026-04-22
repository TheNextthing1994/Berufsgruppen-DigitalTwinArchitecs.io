import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

import { RadarChartSection } from './RadarChartSection';
import { LineShadowText, VariableLengthDecryption, GlossyText } from './AdvancedTextEffects';

import { cn } from '@/src/lib/utils';

const StaggeredTextReveal = ({ text }: { text: string }) => {
  const chars = text.split('');
  return (
    <GlossyText className="inline-flex overflow-visible pb-4">
      {chars.map((char, i) => (
        <motion.span
          key={`${text}-${i}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            transition: { 
              delay: (chars.length - 1 - i) * 0.04,
              duration: 0.1 
            } 
          }}
          transition={{
            duration: 0.1,
            delay: i * 0.05
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </GlossyText>
  );
};

export const Hero = ({ onTileClick }: { onTileClick: (text: string) => void }) => {
  const { t, language } = useLanguage();
  const [index, setIndex] = useState(0);
  const words = t.hero.rotatingWords || [];

  useEffect(() => {
    if (words.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-48 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-6 xl:col-span-6 relative z-10 pointer-events-none">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={cn(
                "text-white tracking-tight leading-[1.1] mb-12 pointer-events-auto",
                "font-['Times_New_Roman',_serif]",
                language === 'ru' 
                  ? "text-4xl sm:text-5xl md:text-7xl lg:text-[85px] xl:text-[95px]" 
                  : "text-[110px]"
              )}
            >
              <LineShadowText className="text-white">
                {t.hero.title1}
              </LineShadowText>
              <br />
              <div className={cn(
                "inline-grid grid-cols-1 grid-rows-1 h-[1.4em] relative overflow-visible align-top px-4 -mx-4",
                language === 'ru' ? "w-full max-w-[1200px]" : "w-[825px]"
              )}>
                {/* Invisible text for fixed layout width - ensures stability */}
                <span className="invisible row-start-1 col-start-1 h-0 font-bold px-2 whitespace-nowrap">
                  {words.reduce((a, b) => (a.length > b.length ? a : b), "")}
                </span>
                <div className="row-start-1 col-start-1 relative h-full">
                  {/* Glass Background Bar for Rotating Text */}
                  <motion.div 
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[75%] bg-gradient-to-r from-emerald-500/20 via-white/10 to-transparent blur-2xl rounded-full z-0 pointer-events-none"
                  />
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ 
                        opacity: 0,
                        transition: { duration: 0.8 }
                      }}
                      className="absolute inset-0 flex items-center font-bold whitespace-nowrap"
                    >
                      <StaggeredTextReveal text={words[index]} />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-400 max-w-4xl mb-12 leading-relaxed pointer-events-auto font-light"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 pointer-events-auto relative z-40 pl-0 lg:pl-[100px]"
            >
              <a 
                href="#potential-quiz" 
                className="group relative px-12 py-5 rounded-full font-black text-xl transition-all duration-500 bg-slate-950/80 backdrop-blur-xl border-t-2 border-l border-r border-b-2 border-emerald-500/30 hover:border-emerald-400/60 text-white shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(16,185,129,0.2),inset_0_2px_1px_rgba(255,255,255,0.2)] hover:translate-y-[-6px] hover:shadow-[0_30px_60px_rgba(16,185,129,0.4),0_0_30px_rgba(16,185,129,0.3)] hover:scale-[1.02] active:translate-y-[2px] active:scale-[0.98] flex items-center justify-center gap-3 overflow-hidden group/btn"
              >
                {/* Metallic Shine Layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-blue-600/20 opacity-40 group-hover/btn:opacity-60 transition-opacity" />
                <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover/btn:animate-[shine_3s_infinite]" />
                
                <span className="relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] tracking-wide uppercase text-sm">PotenzialCheck</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform relative z-10 drop-shadow-md text-emerald-400" />
              </a>
              
              <a 
                href="#case-studies" 
                className="group relative px-12 py-5 rounded-full font-black text-xl transition-all duration-500 bg-slate-950/80 backdrop-blur-xl border-t-2 border-l border-r border-b-2 border-slate-500/30 hover:border-slate-400/60 text-white shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(255,255,255,0.05),inset_0_2px_1px_rgba(255,255,255,0.2)] hover:translate-y-[-6px] hover:shadow-[0_30px_60px_rgba(0,0,0,0.5),0_0_30px_rgba(255,255,255,0.1)] hover:scale-[1.02] active:translate-y-[2px] active:scale-[0.98] flex items-center justify-center gap-3 overflow-hidden group/btn2"
              >
                {/* Metallic Shine Layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-400/10 via-transparent to-slate-600/20 opacity-40 group-hover/btn2:opacity-60 transition-opacity" />
                <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-slate-300/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover/btn2:animate-[shine_3s_infinite]" />
                
                <span className="relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] tracking-wide uppercase text-sm">{t.hero.cta2}</span>
              </a>
            </motion.div>

            {/* Trust Markers */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex flex-wrap items-center gap-x-6 lg:gap-x-10 gap-y-4 pointer-events-auto"
            >
              {t.hero.trustMarkers.map((marker, i) => (
                <div key={i} className="flex items-center gap-3 group shrink-0">
                  <div className="relative shrink-0">
                    <div className="absolute inset-0 bg-emerald-500 blur-sm opacity-20 group-hover:opacity-40 transition-opacity" />
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-emerald-500 fill-emerald-500/10 relative z-10" />
                  </div>
                  <span className="text-slate-200 text-sm md:text-base lg:text-lg font-semibold tracking-wide">
                    {marker}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Radar Chart Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(14px)' }}
            animate={{ opacity: 0.65, scale: 1, filter: 'blur(14px)' }}
            whileHover={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              filter: { duration: 0.4, delay: 0 },
              opacity: { duration: 0.4, delay: 0 }
            }}
            className="lg:col-span-6 xl:col-span-6 relative h-[600px] lg:h-[700px] w-full max-w-[800px] lg:mr-auto lg:ml-0 group cursor-help"
          >
            <div className="absolute inset-0 bg-slate-900/10 backdrop-blur-sm transition-all duration-500 group-hover:bg-transparent">
              {/* Hover Indicator Overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                <div className="bg-emerald-500/10 border border-emerald-500/20 px-6 py-3 rounded-full backdrop-blur-md">
                  <span className="text-emerald-400 font-bold text-sm uppercase tracking-widest animate-pulse">
                    Hover to explore potential
                  </span>
                </div>
              </div>
              
              <div className="absolute top-12 left-0 right-0 z-20 text-center">
                <h3 className="text-white font-bold text-2xl tracking-tight">
                  <VariableLengthDecryption text={t.radar.title} />
                </h3>
              </div>
              <div className="w-full h-full">
                <RadarChartSection />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Gradient Transition */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none" />
    </section>
  );
};
