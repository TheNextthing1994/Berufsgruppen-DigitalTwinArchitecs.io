import React, { useState } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';
import { motion, AnimatePresence } from 'motion/react';
import { Info, X, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const RadarChartSection = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<any>(null);

  const data = [
    { subject: t.radar.labels.management, A: 85, B: 18, fullMark: 100, details: t.radar.details.management },
    { subject: t.radar.labels.finances, A: 92, B: 22, fullMark: 100, details: t.radar.details.finances },
    { subject: t.radar.labels.it, A: 95, B: 35, fullMark: 100, details: t.radar.details.it },
    { subject: t.radar.labels.engineering, A: 78, B: 12, fullMark: 100, details: t.radar.details.engineering },
    { subject: t.radar.labels.legal, A: 88, B: 10, fullMark: 100, details: t.radar.details.legal },
    { subject: t.radar.labels.education, A: 75, B: 15, fullMark: 100, details: t.radar.details.education },
    { subject: t.radar.labels.media, A: 82, B: 25, fullMark: 100, details: t.radar.details.media },
    { subject: t.radar.labels.health, A: 65, B: 8, fullMark: 100, details: t.radar.details.health },
    { subject: t.radar.labels.sales, A: 72, B: 14, fullMark: 100, details: t.radar.details.sales },
    { subject: t.radar.labels.admin, A: 90, B: 28, fullMark: 100, details: t.radar.details.admin },
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-950/90 backdrop-blur-xl border border-emerald-500/20 p-4 rounded-xl shadow-[0_0_30px_rgba(16,185,129,0.1)]">
          <p className="text-white font-bold mb-3 border-b border-slate-800 pb-2">{payload[0].payload.subject}</p>
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-8">
              <span className="text-slate-400 text-xs flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                {t.radar.potential}
              </span>
              <span className="text-emerald-400 font-mono font-bold">{payload[0].value}%</span>
            </div>
            <div className="flex items-center justify-between gap-8">
              <span className="text-slate-400 text-xs flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                {t.radar.usage}
              </span>
              <span className="text-rose-400 font-mono font-bold">{payload[1].value}%</span>
            </div>
          </div>
          <div className="mt-4 pt-2 border-t border-slate-800 flex items-center gap-2 text-[9px] text-slate-500 uppercase tracking-widest">
            <ChevronRight className="w-3 h-3 text-emerald-500" />
            {t.radar.analysis}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative p-0 overflow-visible">
      <div className="w-full h-full relative flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart 
            cx="50%" 
            cy="45%" 
            outerRadius="62%" 
            data={data} 
            margin={{ top: 20, right: 100, bottom: 40, left: 100 }}
            onClick={(e: any) => e && setSelectedCategory(e.activePayload?.[0]?.payload)}
          >
            <defs>
              <linearGradient id="colorA" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="colorB" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#f43f5e" stopOpacity={0.4}/>
              </linearGradient>
            </defs>
            <PolarGrid stroke="#1e293b" strokeDasharray="3 3" />
            <PolarAngleAxis 
              dataKey="subject" 
              tick={{ fill: '#94a3b8', fontSize: 13, fontWeight: 700 }}
            />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#10b981', strokeWidth: 1 }} />
            <Radar
              name={t.radar.potential}
              dataKey="A"
              stroke="#10b981"
              strokeWidth={2}
              fill="url(#colorA)"
              fillOpacity={1}
              animationBegin={0}
              animationDuration={2000}
            />
            <Radar
              name={t.radar.usage}
              dataKey="B"
              stroke="#f43f5e"
              strokeWidth={3}
              fill="url(#colorB)"
              fillOpacity={1}
              animationBegin={800}
              animationDuration={2000}
              className="animate-pulse-slow"
            />
            <Legend 
              verticalAlign="bottom" 
              height={30}
              iconType="circle"
              wrapperStyle={{ bottom: 0 }}
              formatter={(value) => {
                const isPotential = value === t.radar.potential;
                const colorClass = isPotential ? "text-emerald-400/80" : "text-rose-400/80";
                return (
                  <span className={`${colorClass} text-[11px] uppercase tracking-[0.2em] font-mono font-bold ml-2`}>
                    {value}
                  </span>
                );
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Details Panel */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="absolute bottom-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-lg bg-slate-950/90 backdrop-blur-2xl border border-slate-800 p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-30"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                  <Info className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg leading-none">{selectedCategory.subject}</h4>
                  <p className="text-slate-500 text-[10px] uppercase tracking-widest mt-1">{t.radar.deepAnalysis}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedCategory(null)}
                className="p-2 hover:bg-slate-800 rounded-full transition-colors group"
              >
                <X className="w-5 h-5 text-slate-500 group-hover:text-white" />
              </button>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light">
              {selectedCategory.details}
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="relative group">
                <div className="absolute -inset-2 bg-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-slate-500 text-[9px] uppercase tracking-widest mb-2 font-bold">{t.radar.potential}</p>
                <div className="flex items-end gap-2">
                  <p className="text-emerald-400 font-bold text-3xl font-mono">{selectedCategory.A}%</p>
                  <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden mb-2">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedCategory.A}%` }}
                      className="h-full bg-emerald-500"
                    />
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-2 bg-rose-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-slate-500 text-[9px] uppercase tracking-widest mb-2 font-bold">{t.radar.usage}</p>
                <div className="flex items-end gap-2">
                  <p className="text-rose-400 font-bold text-3xl font-mono">{selectedCategory.B}%</p>
                  <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden mb-2">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedCategory.B}%` }}
                      className="h-full bg-rose-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-[100px] text-center w-full z-30">
        <a 
          href="https://www.anthropic.com/research/labor-market-impacts"
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: '#10100f', borderColor: '#bae1cd' }}
          className="text-[#94a3b8] hover:text-emerald-400 text-[12px] uppercase tracking-[0.2em] font-mono border px-3 py-1.5 rounded-lg inline-block transition-colors cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.5)]"
        >
          {t.radar.source}
        </a>
      </div>
    </div>
  );
};
