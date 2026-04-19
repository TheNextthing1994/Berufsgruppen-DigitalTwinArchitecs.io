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

const data = [
  { subject: 'Management', A: 85, B: 18, fullMark: 100, details: 'KI unterstützt strategische Entscheidungen durch prädiktive Analysen, während menschliche Führung für Vision und Kultur unverzichtbar bleibt.' },
  { subject: 'Finanzen', A: 92, B: 22, fullMark: 100, details: 'Automatisierte Risikoanalyse und algorithmischer Handel sind bereits Standard, doch komplexe Beratung bleibt menschlich.' },
  { subject: 'IT & Software', A: 95, B: 35, fullMark: 100, details: 'KI-gestützte Code-Generierung und Systemüberwachung transformieren die Softwareentwicklung grundlegend.' },
  { subject: 'Ingenieurwesen', A: 78, B: 12, fullMark: 100, details: 'Generatives Design und Simulationen beschleunigen Innovationszyklen in der Produktentwicklung.' },
  { subject: 'Recht & Compliance', A: 88, B: 10, fullMark: 100, details: 'Die Analyse riesiger Dokumentenmengen und Rechercheaufgaben werden durch LLMs massiv effizienter.' },
  { subject: 'Bildung', A: 75, B: 15, fullMark: 100, details: 'Personalisiertes Lernen und adaptive Curricula ermöglichen eine neue Ära der individuellen Wissensvermittlung.' },
  { subject: 'Medien & Design', A: 82, B: 25, fullMark: 100, details: 'Generative KI revolutioniert die visuelle Erstellung und das Storytelling in Rekordzeit.' },
  { subject: 'Gesundheitswesen', A: 65, B: 8, fullMark: 100, details: 'KI-gestützte Diagnostik verbessert die Präzision, während die direkte Patientenpflege menschlich bleibt.' },
  { subject: 'Vertrieb', A: 72, B: 14, fullMark: 100, details: 'Prädiktive Lead-Generierung und automatisierte Kundenansprache steigern die Konversionsraten.' },
  { subject: 'Verwaltung', A: 90, B: 28, fullMark: 100, details: 'Standardisierte Prozesse und Datenmanagement bieten das höchste Potenzial für sofortige Automatisierung.' },
];

export const RadarChartSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<any>(null);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-950/90 backdrop-blur-xl border border-emerald-500/20 p-4 rounded-xl shadow-[0_0_30px_rgba(16,185,129,0.1)]">
          <p className="text-white font-bold mb-3 border-b border-slate-800 pb-2">{payload[0].payload.subject}</p>
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-8">
              <span className="text-slate-400 text-xs flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Potenzial
              </span>
              <span className="text-emerald-400 font-mono font-bold">{payload[0].value}%</span>
            </div>
            <div className="flex items-center justify-between gap-8">
              <span className="text-slate-400 text-xs flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                Nutzung
              </span>
              <span className="text-rose-400 font-mono font-bold">{payload[1].value}%</span>
            </div>
          </div>
          <div className="mt-4 pt-2 border-t border-slate-800 flex items-center gap-2 text-[9px] text-slate-500 uppercase tracking-widest">
            <ChevronRight className="w-3 h-3 text-emerald-500" />
            Klicken für Analyse
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative p-4">
      <div className="w-full h-[450px] md:h-[550px] relative">
        {/* Pulsating background glow for the chart */}
        <div className="absolute inset-0 bg-emerald-500/5 rounded-full blur-[100px] animate-pulse pointer-events-none" />
        
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart 
            cx="50%" 
            cy="50%" 
            outerRadius="75%" 
            data={data} 
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
              tick={{ fill: '#64748b', fontSize: 11, fontWeight: 500 }}
            />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#10b981', strokeWidth: 1 }} />
            <Radar
              name="Theoretisches Potenzial"
              dataKey="A"
              stroke="#10b981"
              strokeWidth={2}
              fill="url(#colorA)"
              fillOpacity={1}
              animationBegin={0}
              animationDuration={2000}
            />
            <Radar
              name="Aktuelle Nutzung"
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
              height={36}
              iconType="circle"
              wrapperStyle={{ paddingTop: '30px' }}
              formatter={(value) => <span className="text-slate-500 text-[10px] uppercase tracking-widest font-bold ml-2">{value}</span>}
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
                  <p className="text-slate-500 text-[10px] uppercase tracking-widest mt-1">Tiefenanalyse</p>
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
                <p className="text-slate-500 text-[9px] uppercase tracking-widest mb-2 font-bold">Theoretisches Potenzial</p>
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
                <p className="text-slate-500 text-[9px] uppercase tracking-widest mb-2 font-bold">Aktuelle Nutzung</p>
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

      <div className="mt-4 text-center">
        <p className="text-slate-600 text-[10px] uppercase tracking-[0.2em] font-medium">
          Datenquelle: Labor Market Impacts of AI (Anthropic Research)
        </p>
      </div>
    </div>
  );
};
