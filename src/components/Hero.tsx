import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';
import { useLanguage } from '../contexts/LanguageContext';

import { ParticleWave } from './ParticleWave';
import { PhysicsCloud } from './PhysicsCloud';
import { RadarChartSection } from './RadarChartSection';

export const Hero = ({ onTileClick }: { onTileClick: (text: string) => void }) => {
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-4xl relative z-10 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-600 text-xs font-bold uppercase tracking-widest mb-6 pointer-events-auto"
            >
              <Sparkles className="w-3 h-3" />
              {t.hero.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white tracking-tight leading-[0.85] mb-12 pointer-events-auto"
            >
              {t.hero.title1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-700">
                {t.hero.title2}
              </span>{' '}
              <br />
              <span className="text-4xl md:text-6xl lg:text-7xl font-light text-slate-500 tracking-normal">
                {t.hero.title3}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-400 max-w-3xl mb-12 leading-relaxed pointer-events-auto font-light"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pointer-events-auto"
            >
              <a 
                href="#contact" 
                className="group px-8 py-4 bg-emerald-700 text-white rounded-full font-bold text-lg hover:bg-emerald-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20"
              >
                {t.hero.cta1}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#case-studies" 
                className="px-8 py-4 bg-slate-900 text-white border border-slate-800 rounded-full font-bold text-lg hover:bg-slate-800 transition-all text-center"
              >
                {t.hero.cta2}
              </a>
            </motion.div>
          </div>

          {/* Radar Chart Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative h-[600px] lg:h-[700px] w-full"
          >
            <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm border border-slate-800/50 rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute top-6 left-6 z-10">
                <h3 className="text-white font-bold text-lg tracking-tight">KI-Transformations-Potential</h3>
                <p className="text-slate-500 text-xs uppercase tracking-widest font-mono">Theoretische Eignung vs. Tatsächliche Nutzung</p>
              </div>
              <RadarChartSection />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Gradient Transition */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none" />
    </section>
  );
};
