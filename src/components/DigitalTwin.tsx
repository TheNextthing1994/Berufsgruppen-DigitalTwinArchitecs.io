import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Cpu, Zap, Share2 } from 'lucide-react';

export const DigitalTwin = () => {
  const { t } = useLanguage();

  const icons = [Cpu, Zap, Share2];

  return (
    <section id="digital-twin" className="py-32 relative overflow-hidden bg-slate-950">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #10b981 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-bold uppercase tracking-widest mb-8">
              <Cpu className="w-3 h-3" />
              Core Technology
            </div>
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tighter leading-[0.9]">
              {t.digitalTwin.title}
            </h2>
            <p className="text-2xl text-emerald-500 font-light mb-8 leading-tight">
              {t.digitalTwin.subtitle}
            </p>
            <p className="text-lg text-slate-400 leading-relaxed mb-12 max-w-xl">
              {t.digitalTwin.description}
            </p>
            
            <div className="flex flex-col gap-6">
              {t.digitalTwin.features.map((feature, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="w-1 h-12 bg-slate-800 group-hover:bg-emerald-500 transition-colors shrink-0" />
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">{feature.title}</h4>
                    <p className="text-slate-500 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-emerald-500/20 blur-[120px] rounded-full" />
            <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-br from-emerald-500/20 via-slate-800/40 to-blue-500/20 backdrop-blur-3xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="bg-slate-950/90 rounded-[2.4rem] p-10 overflow-hidden relative">
                {/* Simulated Data Interface */}
                <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-6">
                  <div className="flex gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500/30" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/30" />
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">System_Active // Twin_Sync</div>
                </div>

                <div className="space-y-8">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest mb-2">Efficiency_Gain</div>
                      <div className="text-5xl font-light text-white tracking-tighter">+84%</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2">Uptime</div>
                      <div className="text-2xl font-light text-white tracking-tighter">99.99%</div>
                    </div>
                  </div>

                  <div className="h-[1px] bg-white/5 w-full" />

                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-4">Neural_Processing</div>
                      <div className="space-y-2">
                        <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: '85%' }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="h-full bg-emerald-500" 
                          />
                        </div>
                        <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: '62%' }}
                            transition={{ duration: 1.5, delay: 0.7 }}
                            className="h-full bg-blue-500" 
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-4">Data_Throughput</div>
                      <div className="flex gap-1 items-end h-8">
                        {[40, 70, 45, 90, 65, 80, 50, 85].map((h, i) => (
                          <motion.div 
                            key={i}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h}%` }}
                            transition={{ duration: 0.5, delay: 0.8 + i * 0.05 }}
                            className="flex-1 bg-emerald-500/40 rounded-t-sm" 
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-8">
                    <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 font-mono text-[10px] text-emerald-500/70 leading-relaxed">
                      {`> INITIALIZING_KNOWLEDGE_BASE...
> EXTRACTING_EXPERT_PATTERNS...
> GENERATING_DIGITAL_TWIN_INSTANCE...
> STATUS: SYNCHRONIZED`}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
