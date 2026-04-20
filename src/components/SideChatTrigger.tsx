import React from 'react';
import { MessageSquare, Phone, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

interface SideChatTriggerProps {
  onChatClick: () => void;
}

export const SideChatTrigger: React.FC<SideChatTriggerProps> = ({ onChatClick }) => {
  const { t, language } = useLanguage();

  const triggers = [
    {
      icon: Phone,
      label: language === 'de' ? 'Anrufen' : 'Позвонить',
      href: 'tel:+436604763085',
      color: 'bg-yellow-500',
      delay: 0.1,
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/436604763085',
      color: 'bg-[#25D366]',
      delay: 0.2,
    },
    {
      icon: Mail,
      label: 'E-Mail',
      href: 'mailto:aptiakhmadov1994@gmail.com',
      color: 'bg-slate-800',
      delay: 0.3,
    },
    {
      icon: MessageSquare,
      label: 'AI Chat',
      onClick: onChatClick,
      color: 'bg-amber-500',
      delay: 0.4,
    }
  ];

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-3 items-end pr-4 pointer-events-none">
      {triggers.map((trigger, i) => (
        <motion.div
          key={i}
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: trigger.delay, type: 'spring', damping: 15 }}
          className="pointer-events-auto"
        >
          {trigger.href ? (
            <a
              href={trigger.href}
              target={trigger.href.startsWith('http') ? '_blank' : undefined}
              rel={trigger.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`group flex items-center justify-end gap-3 h-14 min-w-[56px] ${trigger.color} text-white rounded-full shadow-2xl transition-all duration-300 hover:pr-6 hover:pl-6`}
            >
              <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap text-sm uppercase tracking-wider">
                {trigger.label}
              </span>
              <div className="w-14 h-14 flex items-center justify-center shrink-0">
                <trigger.icon className="w-6 h-6" />
              </div>
            </a>
          ) : (
            <button
              onClick={trigger.onClick}
              className={`group flex items-center justify-end gap-3 h-14 min-w-[56px] ${trigger.color} text-white rounded-full shadow-2xl transition-all duration-300 hover:pr-6 hover:pl-6`}
            >
              <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap text-sm uppercase tracking-wider">
                {trigger.label}
              </span>
              <div className="w-14 h-14 flex items-center justify-center shrink-0">
                <trigger.icon className="w-6 h-6" />
              </div>
            </button>
          )}
        </motion.div>
      ))}
    </div>
  );
};
