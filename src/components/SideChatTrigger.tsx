import React from 'react';
import { MessageSquare, Phone, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
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
      gradient: 'from-rose-400 to-rose-600',
      shadow: 'shadow-[0_10px_30px_rgba(225,29,72,0.3)]',
      textColor: 'text-white',
      delay: 0.1,
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/436604763085',
      gradient: 'from-emerald-400 to-emerald-600',
      shadow: 'shadow-[0_10px_30px_rgba(16,185,129,0.3)]',
      textColor: 'text-white',
      delay: 0.2,
    },
    {
      icon: Mail,
      label: 'E-Mail',
      href: 'mailto:aptiakhmadov1994@gmail.com',
      gradient: 'from-slate-500 to-slate-700',
      shadow: 'shadow-[0_10px_30px_rgba(71,85,105,0.3)]',
      textColor: 'text-white',
      delay: 0.3,
    },
    {
      icon: MessageSquare,
      label: 'AI Chat',
      onClick: onChatClick,
      gradient: 'from-white to-slate-200',
      shadow: 'shadow-[0_10px_30px_rgba(255,255,255,0.2)]',
      textColor: 'text-slate-950',
      delay: 0.4,
    }
  ];

  return (
    <div className="fixed right-0 bottom-8 z-[100] flex flex-col gap-4 items-end pr-4 pointer-events-none">
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
              className={cn(
                "group flex items-center justify-end gap-3 h-14 min-w-[56px] bg-gradient-to-b rounded-full transition-all duration-300 hover:pr-6 hover:pl-6 hover:-translate-x-2 relative",
                trigger.gradient,
                trigger.shadow,
                trigger.textColor,
                "shadow-[inset_0_4px_8px_rgba(255,255,255,0.3),inset_0_-4px_8px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.3),inset_0_4px_12px_rgba(255,255,255,0.4)]"
              )}
            >
              <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-extrabold whitespace-nowrap text-xs uppercase tracking-widest">
                {trigger.label}
              </span>
              <div className="w-14 h-14 flex items-center justify-center shrink-0">
                <trigger.icon className="w-6 h-6 drop-shadow-lg" />
              </div>
            </a>
          ) : (
            <button
              onClick={trigger.onClick}
              className={cn(
                "group flex items-center justify-end gap-3 h-14 min-w-[56px] bg-gradient-to-b rounded-full transition-all duration-300 hover:pr-6 hover:pl-6 hover:-translate-x-2 relative",
                trigger.gradient,
                trigger.shadow,
                trigger.textColor,
                "shadow-[inset_0_4px_8px_rgba(255,255,255,0.3),inset_0_-4px_8px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.3),inset_0_4px_12px_rgba(255,255,255,0.4)]"
              )}
            >
              <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-extrabold whitespace-nowrap text-xs uppercase tracking-widest">
                {trigger.label}
              </span>
              <div className="w-14 h-14 flex items-center justify-center shrink-0">
                <trigger.icon className="w-6 h-6 drop-shadow-lg" />
              </div>
            </button>
          )}
        </motion.div>
      ))}
    </div>
  );
};
