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
      baseColor: 'bg-blue-950/90',
      borderColor: 'group-hover:border-blue-400/50 border-blue-500/30',
      glow: 'shadow-[0_0_20px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]',
      surface: 'from-blue-500/10 to-blue-600/20',
      textColor: 'text-blue-100',
      delay: 0.1,
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/436604763085',
      baseColor: 'bg-emerald-950/90',
      borderColor: 'group-hover:border-emerald-400/50 border-emerald-500/30',
      glow: 'shadow-[0_0_20px_rgba(16,185,129,0.2)] group-hover:shadow-[0_0_30_px_rgba(16,185,129,0.4)]',
      surface: 'from-emerald-500/10 to-emerald-600/20',
      textColor: 'text-emerald-100',
      delay: 0.2,
    },
    {
      icon: Mail,
      label: 'E-Mail',
      href: 'mailto:aptiakhmadov1994@gmail.com',
      baseColor: 'bg-slate-900/90',
      borderColor: 'group-hover:border-slate-400/50 border-slate-500/30',
      glow: 'shadow-[0_0_20px_rgba(148,163,184,0.2)] group-hover:shadow-[0_0_30px_rgba(148,163,184,0.4)]',
      surface: 'from-slate-500/10 to-slate-600/20',
      textColor: 'text-slate-100',
      delay: 0.3,
    },
    {
      icon: MessageSquare,
      label: 'AI Chat',
      onClick: onChatClick,
      baseColor: 'bg-white/95',
      borderColor: 'group-hover:border-emerald-400 border-white',
      glow: 'shadow-[0_0_30px_rgba(16,185,129,0.4)] group-hover:shadow-[0_0_40px_rgba(16,185,129,0.6)]',
      surface: 'from-emerald-100/50 to-white/20',
      textColor: 'text-slate-950',
      delay: 0.4,
    }
  ];

  return (
    <div className="fixed right-0 bottom-8 z-[100] flex flex-col gap-5 items-end pr-6 pointer-events-none">
      {triggers.map((trigger, i) => (
        <motion.div
          key={i}
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: trigger.delay, type: 'spring', damping: 20 }}
          className="pointer-events-auto"
        >
          {trigger.href ? (
            <a
              href={trigger.href}
              target={trigger.href.startsWith('http') ? '_blank' : undefined}
              rel={trigger.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={cn(
                "group flex items-center justify-end gap-3 h-14 min-w-[56px] rounded-full transition-all duration-500 hover:pr-8 hover:pl-6 hover:-translate-x-3 relative overflow-hidden backdrop-blur-xl border-t-2 border-l border-r border-b-2",
                trigger.baseColor,
                trigger.borderColor,
                trigger.glow,
                trigger.textColor,
                "shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.4)]"
              )}
            >
              {/* Shining Surface Effect */}
              <div className={cn("absolute inset-0 bg-gradient-to-br opacity-40 group-hover:opacity-60 transition-opacity", trigger.surface)} />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shine_3s_infinite]" />
              
              <span className="relative z-10 max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-700 font-black whitespace-nowrap text-[10px] uppercase tracking-[0.2em] drop-shadow-md">
                {trigger.label}
              </span>
              <div className="relative z-10 w-14 h-14 flex items-center justify-center shrink-0">
                <trigger.icon className="w-6 h-6 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-transform group-hover:scale-110" />
              </div>
            </a>
          ) : (
            <button
              onClick={trigger.onClick}
              className={cn(
                "group flex items-center justify-end gap-3 h-14 min-w-[56px] rounded-full transition-all duration-500 hover:pr-8 hover:pl-6 hover:-translate-x-3 relative overflow-hidden backdrop-blur-xl border-t-2 border-l border-r border-b-2",
                trigger.baseColor,
                trigger.borderColor,
                trigger.glow,
                trigger.textColor,
                "shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.4)]"
              )}
            >
              {/* Shining Surface Effect */}
              <div className={cn("absolute inset-0 bg-gradient-to-br opacity-40 group-hover:opacity-60 transition-opacity", trigger.surface)} />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shine_3s_infinite]" />
              
              <span className="relative z-10 max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-700 font-black whitespace-nowrap text-[10px] uppercase tracking-[0.2em] drop-shadow-md">
                {trigger.label}
              </span>
              <div className="relative z-10 w-14 h-14 flex items-center justify-center shrink-0">
                <trigger.icon className="w-5 h-5 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-transform group-hover:scale-110" />
              </div>
            </button>
          )}
        </motion.div>
      ))}
    </div>
  );
};
