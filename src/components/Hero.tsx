import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

import { ParticleWave } from './ParticleWave';
import { PhysicsCloud } from './PhysicsCloud';
import { RadarChartSection } from './RadarChartSection';

export const Hero = ({ onTileClick }: { onTileClick: (text: string) => void }) => {
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-48 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 xl:col-span-8 relative z-10 pointer-events-none">
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
              className="flex flex-col sm:flex-row gap-6 pointer-events-auto relative z-40"
            >
              <a 
                href="https://wa.me/436604763085"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-10 py-5 bg-emerald-600/90 backdrop-blur-md text-white rounded-2xl font-bold text-lg border border-emerald-400/30 shadow-[0_20px_50px_rgba(5,150,105,0.3)] hover:shadow-[0_20px_60px_rgba(5,150,105,0.5)] hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3"
              >
                {t.hero.cta1}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#case-studies" 
                className="group px-10 py-5 bg-slate-900/40 backdrop-blur-xl text-white border border-slate-700/50 rounded-2xl font-bold text-lg hover:bg-slate-800/60 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-1 active:scale-95 transition-all duration-300 text-center flex items-center justify-center"
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
            className="lg:col-span-5 xl:col-span-4 relative h-[500px] lg:h-[600px] w-full max-w-[500px] lg:ml-auto lg:mr-0 mx-auto"
          >
            <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm border border-slate-800/50 rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute top-6 left-6 z-10">
                <h3 className="text-white font-bold text-lg tracking-tight">KI-Potenzial</h3>
                <p className="text-slate-500 text-[10px] uppercase tracking-widest font-mono">Status vs. Potential</p>
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
