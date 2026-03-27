import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Stethoscope, 
  Scissors, 
  ShoppingBag, 
  Zap, 
  Briefcase, 
  Home, 
  Truck, 
  UserPlus, 
  Settings, 
  Hammer, 
  BarChart, 
  Headphones, 
  ClipboardList, 
  Users, 
  Megaphone, 
  Dumbbell, 
  Utensils, 
  PenTool, 
  Scale, 
  Calculator 
} from 'lucide-react';

const industryIcons: Record<string, any> = {
  'Hautärzte': Stethoscope,
  'Дерматологи': Stethoscope,
  'Frisöre': Scissors,
  'Парикмахеры': Scissors,
  'Online Shop Owner': ShoppingBag,
  'Владельцы интернет-магазинов': ShoppingBag,
  'Elektriker': Zap,
  'Электрики': Zap,
  'Büromitarbeiter': Briefcase,
  'Офисные сотрудники': Briefcase,
  'Immobilienmakler': Home,
  'Риелторы': Home,
  'Logistikleiter': Truck,
  'Логисты': Truck,
  'Praxispersonal': UserPlus,
  'Медперсонал': UserPlus,
  'E-Commerce Manager': Settings,
  'E-Commerce менеджеры': Settings,
  'Handwerksmeister': Hammer,
  'Мастера': Hammer,
  'Finanzberater': BarChart,
  'Финансовые консультанты': BarChart,
  'Kundenbetreuer': Headphones,
  'Менеджеры по работе с клиентами': Headphones,
  'Projektleiter': ClipboardList,
  'Руководители проектов': ClipboardList,
  'Vertriebsteams': Users,
  'Отделы продаж': Users,
  'Marketing Agenturen': Megaphone,
  'Маркетинговые агентства': Megaphone,
  'Fitnessstudio Besitzer': Dumbbell,
  'Владельцы фитнес-клубов': Dumbbell,
  'Gastronomen': Utensils,
  'Рестораторы': Utensils,
  'Architekten': PenTool,
  'Архитекторы': PenTool,
  'Rechtsanwälte': Scale,
  'Юристы': Scale,
  'Steuerberater': Calculator,
  'Налоговые консультанты': Calculator,
};

interface SolutionsProps {
  onSolutionClick: (industry: string) => void;
}

export const Solutions: React.FC<SolutionsProps> = ({ onSolutionClick }) => {
  const { t, language } = useLanguage();

  return (
    <section id="solutions" className="py-24 bg-slate-950/50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {language === 'de' ? 'Lösungen für jede Branche' : 'Решения для любой отрасли'}
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {language === 'de' 
              ? 'Wir transformieren Fachwissen in digitale Standards für Experten aus allen Bereichen.' 
              : 'Мы трансформируем экспертные знания в цифровые стандарты для специалистов из всех областей.'}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {t.targetGroups.map((group, i) => {
            const Icon = industryIcons[group] || Settings;
            return (
              <motion.button
                key={i}
                onClick={() => onSolutionClick(group)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5, backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col items-center text-center gap-4 transition-all group cursor-pointer w-full"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <Icon className="text-slate-400 group-hover:text-emerald-500 w-6 h-6" />
                </div>
                <span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                  {group}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
