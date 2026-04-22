import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const FAQ = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Wann macht KI-Automatisierung für mich Sinn?',
      a: 'Sobald Sie oder Ihr Team mehr als 2 Stunden am Tag mit Routineaufgaben wie Email-Sortierung, Dateneingabe oder Terminabstimmung verbringen. KI lohnt sich oft schon ab einer Reduzierung von 10-15 Stunden manueller Arbeit pro Woche.'
    },
    {
      q: 'Ist mein Unternehmen zu klein für KI?',
      a: 'Nein. KI-Lösungen sind heute modular und skalierbar. Wir haben Lösungen für Einzelunternehmer (z. B. intelligente Terminbuchung) bis hin zu großen mittelständischen Betrieben mit komplexen ERP-Systemen.'
    },
    {
      q: 'Wie sieht es mit dem Datenschutz (DSGVO) aus?',
      a: 'Sicherheit ist unsere Priorität. Wir setzen bevorzugt auf in Europa gehostete Modelle oder Microsoft Azure OpenAI Instanzen in Frankfurt, die DSGVO-kompatibel sind. Ihre Daten werden niemals zum Training öffentlicher Modelle verwendet.'
    },
    {
      q: 'Muss ich ein Technik-Experte sein?',
      a: 'Überhaupt nicht. Unser Ziel ist es, dass die KI im Hintergrund läuft. Für Sie ändert sich nichts an Ihren gewohnten Interfaces – außer dass Aufgaben von selbst erledigt werden.'
    },
    {
      q: 'Wie lange dauert die Implementierung?',
      a: 'Ein erster "Proof of Concept" (POC) ist meist innerhalb von 5 Werktagen einsatzbereit. Die vollständige Integration komplexer Abläufe dauert in der Regel 2 bis 4 Wochen.'
    }
  ];

  return (
    <section className="py-24 bg-slate-950 relative" id="faq">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Häufig gestellte <span className="text-emerald-500">Fragen</span>
          </motion.h2>
          <p className="text-slate-400">
            Alles, was Sie über die Zusammenarbeit mit uns wissen müssen.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="border border-white/10 rounded-2xl overflow-hidden bg-slate-900/30 backdrop-blur-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-semibold text-white">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-emerald-500 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 text-slate-400 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
