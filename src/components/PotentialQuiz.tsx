import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, MessageSquare, Settings, BarChart3, HelpCircle, ArrowLeft, Users, Building, Laptop, Globe, Rocket, Clock, Calendar, Info, Banknote, Wallet, Coins, CheckCircle2, Sparkles, type LucideIcon } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useLanguage } from '../contexts/LanguageContext';
import { GlossyText } from './AdvancedTextEffects';

interface QuizStep {
  id: number;
  question: string;
  type?: 'options' | 'form';
  options?: {
    id: string;
    label: string;
    icon: LucideIcon;
  }[];
}

export const PotentialQuiz = () => {
  const { t, language } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: ''
  });

  const steps: QuizStep[] = [
    {
      id: 1,
      question: t.quiz.questions.goal.title,
      type: 'options',
      options: [
        { id: 'support', label: t.quiz.questions.goal.options.service, icon: MessageSquare },
        { id: 'processes', label: t.quiz.questions.goal.options.processes, icon: Settings },
        { id: 'data', label: t.quiz.questions.goal.options.data, icon: BarChart3 },
        { id: 'not_sure', label: t.quiz.questions.goal.options.unsure, icon: HelpCircle },
      ]
    },
    {
      id: 2,
      question: t.quiz.questions.size.title,
      type: 'options',
      options: [
        { id: 'small', label: t.quiz.questions.size.options.small, icon: Users },
        { id: 'medium', label: t.quiz.questions.size.options.medium, icon: Building },
        { id: 'large', label: t.quiz.questions.size.options.large, icon: Laptop },
        { id: 'enterprise', label: t.quiz.questions.size.options.enterprise, icon: Globe },
      ]
    },
    {
      id: 3,
      question: t.quiz.questions.timing.title,
      type: 'options',
      options: [
        { id: 'asap', label: t.quiz.questions.timing.options.asap, icon: Rocket },
        { id: 'short', label: t.quiz.questions.timing.options.short, icon: Clock },
        { id: 'medium', label: t.quiz.questions.timing.options.medium, icon: Calendar },
        { id: 'info', label: t.quiz.questions.timing.options.info, icon: Info },
      ]
    },
    {
      id: 4,
      question: t.quiz.questions.budget.title,
      type: 'options',
      options: [
        { id: 'low', label: t.quiz.questions.budget.options.low, icon: Banknote },
        { id: 'mid', label: t.quiz.questions.budget.options.mid, icon: Wallet },
        { id: 'high', label: t.quiz.questions.budget.options.high, icon: Coins },
        { id: 'veryHigh', label: t.quiz.questions.budget.options.veryHigh, icon: BarChart3 },
        { id: 'unsure', label: t.quiz.questions.budget.options.unsure, icon: HelpCircle },
      ]
    },
    {
      id: 5,
      question: t.quiz.questions.contact.title,
      type: 'form'
    }
  ];

  const totalSteps = 5;
  const progress = (currentStep / (totalSteps - 1)) * 100;

  const handleOptionSelect = (optionId: string) => {
    if (selectedOptionId) return;
    setSelectedOptionId(optionId);
    setAnswers(prev => ({ ...prev, [currentStep]: optionId }));
    
    setTimeout(() => {
      setSelectedOptionId(null);
      if (currentStep < steps.length - 1) {
        setCurrentStep(prev => prev + 1);
      }
    }, 600);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quiz Data:', { answers, contact: formData });
    alert('Thank you! Your request has been sent.');
  };

  const isFormStep = steps[currentStep]?.type === 'form';

  return (
    <section id="potential-quiz" className="relative py-32 overflow-hidden bg-slate-950">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight"
          >
            {t.quiz.titlePrefix} <GlossyText>{t.quiz.titleHighlight}</GlossyText>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light"
          >
            {t.quiz.subtitle}
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Background Glow */}
          <div className="absolute inset-x-0 -inset-y-12 bg-emerald-500/20 blur-[100px] rounded-full pointer-events-none" />

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="group relative p-1 rounded-[2.5rem] md:rounded-[3.5rem] bg-gradient-to-br from-emerald-500/20 via-slate-800/40 to-blue-500/20 backdrop-blur-3xl border border-white/10 overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-emerald-500/20"
          >
            <div className="bg-slate-950/95 rounded-[2.4rem] md:rounded-[3.4rem] overflow-hidden relative flex flex-col p-8 md:p-12">
              {/* Progress and Step Info */}
              <div className="mb-6 flex items-end justify-between px-1">
                <span className="text-sm font-medium text-slate-400 capitalize">
                  {t.quiz.step} {currentStep + 1} {language === 'de' ? 'von' : 'из'} {totalSteps}
                </span>
                <span className="text-sm font-mono text-emerald-500 font-bold drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">
                  {Math.round(progress)}%
                </span>
              </div>

              {/* Progress Bar (Simple Solid) */}
              <div className="mb-12">
                <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-white/5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all duration-700 ease-out"
                  />
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {!isFormStep ? (
                    <>
                      {/* Simple Heading instead of Bubble */}
                      <div className="mb-10 px-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                          {steps[currentStep]?.question}
                        </h3>
                      </div>

                      <div className="space-y-4">
                        {steps[currentStep]?.options?.map((option) => {
                          const isSelected = selectedOptionId === option.id;
                          const isOtherSelected = selectedOptionId !== null && !isSelected;

                          return (
                            <button
                              key={option.id}
                              onClick={() => handleOptionSelect(option.id)}
                              disabled={selectedOptionId !== null}
                              className={cn(
                                "w-full group relative flex items-center justify-between p-5 rounded-xl border-t-2 border-l border-r border-b-2 transition-all duration-300 text-left overflow-hidden",
                                isSelected 
                                  ? "bg-emerald-500/20 border-emerald-500/60 shadow-[0_0_25px_rgba(16,185,129,0.3),inset_0_2px_1px_rgba(255,255,255,0.1)]" 
                                  : "bg-slate-900/40 border-white/5 hover:border-emerald-500/40 hover:bg-emerald-500/5 shadow-lg",
                                isOtherSelected && "opacity-40 grayscale-[0.5]"
                              )}
                            >
                              {/* Selected Ripple/Fill Effect */}
                              <AnimatePresence>
                                {isSelected && (
                                  <motion.div 
                                    initial={{ x: '-100%' }}
                                    animate={{ x: '0%' }}
                                    className="absolute inset-0 bg-emerald-500/10 z-0"
                                    transition={{ duration: 0.6, ease: "circOut" }}
                                  />
                                )}
                              </AnimatePresence>

                              <div className="flex items-center gap-5 relative z-10">
                                <motion.div 
                                  animate={isSelected ? { scale: [1, 1.2, 1], rotate: [0, 10, 0] } : {}}
                                  className={cn(
                                    "w-10 h-10 rounded-lg flex items-center justify-center border transition-all duration-300",
                                    isSelected 
                                      ? "bg-emerald-500 border-emerald-400" 
                                      : "bg-slate-950 border-white/5 group-hover:border-emerald-500/30"
                                  )}
                                >
                                  <option.icon className={cn(
                                    "w-5 h-5 transition-colors",
                                    isSelected ? "text-slate-950" : "text-emerald-500/80 group-hover:text-emerald-500"
                                  )} />
                                </motion.div>
                                <span className={cn(
                                  "text-base font-medium transition-colors",
                                  isSelected ? "text-emerald-400" : "text-slate-300 group-hover:text-emerald-400"
                                )}>
                                  {option.label}
                                </span>
                              </div>
                              <div className="relative z-10 flex items-center">
                                {isSelected ? (
                                  <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="bg-emerald-500 rounded-full p-1"
                                  >
                                    <CheckCircle2 className="w-3 h-3 text-slate-950" />
                                  </motion.div>
                                ) : (
                                  <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                                )}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-6">
                        <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2">{t.quiz.questions.contact.title}</h3>
                      <p className="text-slate-400 mb-10 text-center max-w-sm">{t.quiz.questions.contact.subtitle}</p>

                      <form onSubmit={handleSubmit} className="w-full space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">{t.quiz.questions.contact.name}</label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleFormChange}
                              required
                              placeholder={t.quiz.questions.contact.namePlaceholder}
                              className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-colors placeholder:text-slate-700"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">{t.quiz.questions.contact.email}</label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleFormChange}
                              required
                              placeholder={t.quiz.questions.contact.emailPlaceholder}
                              className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-colors placeholder:text-slate-700"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">{t.quiz.questions.contact.company}</label>
                            <input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleFormChange}
                              placeholder={t.quiz.questions.contact.companyPlaceholder}
                              className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-colors placeholder:text-slate-700"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">{t.quiz.questions.contact.phone}</label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleFormChange}
                              placeholder={t.quiz.questions.contact.phonePlaceholder}
                              className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-colors placeholder:text-slate-700"
                            />
                          </div>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.01, translateY: -2 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          className="w-full group relative px-10 py-5 rounded-2xl font-black text-lg transition-all duration-500 bg-slate-950/80 backdrop-blur-xl border-t-2 border-l border-r border-b-2 border-emerald-500/30 hover:border-emerald-400/60 text-white shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(16,185,129,0.2),inset_0_2px_1px_rgba(255,255,255,0.2)] hover:shadow-[0_30px_60px_rgba(16,185,129,0.4),0_0_30px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-600/20 opacity-40 group-hover:opacity-60 transition-opacity" />
                          <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shine_3s_infinite]" />
                          
                          <span className="relative z-10 flex items-center justify-center gap-2 drop-shadow-md">
                            {t.quiz.questions.contact.cta}
                          </span>
                        </motion.button>
                      </form>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation back */}
              <div className="mt-12 flex justify-between items-center">
                <button
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  disabled={currentStep === 0}
                  className={cn(
                    "flex items-center gap-2 text-slate-500 hover:text-emerald-500 transition-colors text-xs font-bold uppercase tracking-widest",
                    currentStep === 0 && "opacity-0 pointer-events-none"
                  )}
                >
                  <ArrowLeft className="w-4 h-4" />
                  {t.quiz.back}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
