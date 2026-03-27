import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ArrowRight, Bot } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface IndustrySolutionsModalProps {
  industry: string | null;
  onClose: () => void;
  onStartChat: (industry: string) => void;
}

export const IndustrySolutionsModal: React.FC<IndustrySolutionsModalProps> = ({ industry, onClose, onStartChat }) => {
  const { t, language } = useLanguage();

  const solutions = t.industrySolutions[industry as keyof typeof t.industrySolutions] || t.industrySolutions.default;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 40 }}
        className="relative w-full max-w-4xl bg-slate-900 border border-white/10 rounded-[2rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]"
      >
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative flex flex-col md:flex-row h-full min-h-[500px]">
          {/* Left Side: Title & Info */}
          <div className="w-full md:w-2/5 p-8 md:p-12 bg-slate-950/50 border-r border-white/5 flex flex-col justify-between">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-emerald-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-6"
              >
                {language === 'de' ? 'Branchen-Lösung' : 'Отраслевое решение'}
              </motion.div>
              <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-none mb-6">
                {industry}
              </h3>
              <p className="text-slate-400 text-lg font-light leading-relaxed">
                {language === 'de' 
                  ? 'Entdecken Sie, wie wir Ihr Fachwissen in einen digitalen Standard verwandeln.' 
                  : 'Узнайте, как мы превращаем ваш опыт в цифровой стандарт.'}
              </p>
            </div>

            <div className="mt-12">
              <button
                onClick={() => onStartChat(industry!)}
                className="group w-full py-5 bg-emerald-700 text-white rounded-2xl font-bold text-lg hover:bg-emerald-600 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-emerald-900/40"
              >
                <Bot className="w-6 h-6" />
                {language === 'de' ? 'Experten-Chat' : 'Чат с экспертом'}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Side: Solutions List */}
          <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto max-h-[600px] scrollbar-hide">
            <h4 className="text-white font-semibold mb-8 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-emerald-500" />
              {language === 'de' ? 'Was wir automatisieren' : 'Что мы автоматизируем'}
            </h4>
            
            <div className="grid grid-cols-1 gap-6">
              {solutions.map((solution: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="group relative p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-all duration-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] group-hover:scale-125 transition-transform" />
                    <span className="text-slate-200 text-lg font-medium leading-tight group-hover:text-white transition-colors">
                      {solution}
                    </span>
                  </div>
                  
                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
              <p className="text-sm text-emerald-400/80 italic">
                {language === 'de'
                  ? 'Dies sind nur Beispiele. In unserem Chat können wir Ihre spezifischen Anforderungen im Detail besprechen.'
                  : 'Это лишь примеры. В чате мы сможем детально обсудить ваши специфические требования.'}
              </p>
            </div>
          </div>
        </div>

        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-3 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-all z-20"
        >
          <X className="w-6 h-6" />
        </button>
      </motion.div>
    </div>
  );
};
