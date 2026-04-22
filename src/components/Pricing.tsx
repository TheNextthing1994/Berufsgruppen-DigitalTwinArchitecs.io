import React from 'react';
import { motion } from 'motion/react';
import { Check, Zap, Rocket, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Pricing = () => {
  const { t } = useLanguage();

  const plans = [
    {
      name: 'Basic',
      price: 'Ab 499€',
      desc: 'Für kleine Unternehmen, die erste KI-Schritte machen wollen.',
      features: [
        'KI-Strategieberatung',
        'Chatbot-Integration',
        'Support via Email',
        'Monatlicher Performance-Report'
      ],
      icon: Zap,
      color: 'from-blue-600 to-blue-400'
    },
    {
      name: 'Business',
      price: 'Ab 1.499€',
      desc: 'Die ideale Lösung für wachsende Betriebe mit komplexen Abläufen.',
      features: [
        'Eigener Digitaler Zwilling',
        'Vollautomatisierte CRM-Koppelung',
        '24/7 Monitoring',
        'Priorisierter Support',
        'Live-Statistiken'
      ],
      icon: Rocket,
      color: 'from-emerald-600 to-emerald-400',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Individuell',
      desc: 'Maßgeschneiderte Lösungen für maximale Skalierung.',
      features: [
        'Vollständige Infrastruktur-Analyse',
        'KI-Training für Mitarbeiter',
        'Eigene Server-Infrastruktur',
        'Persönlicher Account Manager',
        'SLA-Garantie'
      ],
      icon: Shield,
      color: 'from-purple-600 to-purple-400'
    }
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden" id="pricing">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Investition in Ihre <span className="text-emerald-500 text-glow-emerald">Zukunft</span>
          </motion.h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Wählen Sie das passende Paket für Ihre digitale Transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-slate-900/50 backdrop-blur-xl border ${plan.popular ? 'border-emerald-500/50 shadow-[0_0_40px_rgba(16,185,129,0.1)]' : 'border-white/10'} rounded-3xl p-8 flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-emerald-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Empfehlung
                </div>
              )}

              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6`}>
                <plan.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold text-white mb-4">{plan.price}</div>
              <p className="text-slate-400 text-sm mb-8">
                {plan.desc}
              </p>

              <div className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={cn(
                "w-full py-4 rounded-xl font-bold transition-all relative overflow-hidden group/price-btn border-t-2 border-l border-r border-b-2",
                plan.popular 
                  ? "bg-slate-950/80 border-emerald-500/30 hover:border-emerald-400/60 shadow-[0_15px_35px_rgba(16,185,129,0.2),inset_0_2px_1px_rgba(255,255,255,0.1)] text-white" 
                  : "bg-slate-950/40 border-slate-700 hover:border-slate-500 shadow-[0_10px_20px_rgba(0,0,0,0.3),inset_0_2px_1px_rgba(255,255,255,0.05)] text-slate-300 hover:text-white"
              )}>
                {/* Metallic Shine Layers */}
                <div className={cn(
                  "absolute inset-0 opacity-20 group-hover/price-btn:opacity-40 transition-opacity",
                  plan.popular ? "bg-emerald-500/20" : "bg-white/5"
                )} />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover/price-btn:animate-[shine_3s_infinite]" />
                <span className="relative z-10">{language === 'de' ? 'Beratung anfordern' : 'Запросить консультацию'}</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
