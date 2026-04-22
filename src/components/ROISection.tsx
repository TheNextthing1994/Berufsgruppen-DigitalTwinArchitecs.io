import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { BarChart3, TrendingUp, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { LineShadowText, VariableLengthDecryption } from './AdvancedTextEffects';

export const ROISection = () => {
  const { t } = useLanguage();

  const iconMap = [BarChart3, TrendingUp, ShieldCheck];

  return (
    <section className="py-32 relative bg-slate-950 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-bold uppercase tracking-widest mb-8"
          >
            <VariableLengthDecryption text="ROI & Efficiency" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tighter leading-tight"
          >
            <LineShadowText shadowColor="rgba(0, 163, 108, 0.4)">
              {t.roi.title}
            </LineShadowText>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 leading-relaxed max-w-2xl"
          >
            {t.roi.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.roi.cards.map((card, i) => {
            const Icon = iconMap[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="group relative"
              >
                <div className="relative p-8 h-full bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-3xl group-hover:border-emerald-500/30 transition-all duration-500 shadow-xl flex flex-col">
                  {/* Glassmorph Highlight */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                  
                  <div className="mb-8 relative">
                    <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-emerald-500 group-hover:scale-110 group-hover:bg-emerald-500/10 transition-all duration-500">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-6 tracking-tight group-hover:text-emerald-400 transition-colors">
                    {card.title}
                  </h3>
                  
                  <div className="text-slate-400 leading-relaxed mb-8 flex-grow space-y-4 text-sm">
                    {card.desc.split('\n\n').map((paragraph, idx, arr) => {
                      const isResult = paragraph.toLowerCase().includes('ergebnis');
                      const isHeaded = paragraph.includes(':');
                      
                      return (
                        <div key={idx} className={cn(
                          isHeaded && !isResult && "flex gap-3 items-start",
                          isResult && "text-emerald-400 font-bold bg-emerald-500/5 p-4 rounded-2xl border border-emerald-500/10 shadow-[0_0_20px_rgba(16,185,129,0.05)]"
                        )}>
                          {isHeaded && !isResult && (
                            <div className="shrink-0 mt-1.5">
                              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                            </div>
                          )}
                          <p className={cn(
                            isHeaded && !isResult ? "text-slate-100 text-base md:text-lg font-medium leading-snug" : "text-slate-400 text-sm",
                            isResult && "text-emerald-400 text-base md:text-lg"
                          )}>
                            {paragraph}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-6 border-t border-white/5">
                    <div className="text-[10px] uppercase tracking-widest text-emerald-500/70 font-mono mb-1">Impact_Metric</div>
                    <div className="text-2xl font-light text-white tracking-tighter">
                      {card.impact}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
