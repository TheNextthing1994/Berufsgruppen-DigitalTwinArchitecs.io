import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Bot, User, ArrowRight, Loader2, GripHorizontal } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { GoogleGenAI } from "@google/genai";
import { cn } from '../lib/utils';

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface SolutionChatProps {
  industry: string | null;
  onClose: () => void;
  onCtaClick: (summary: string) => void;
}

export const SolutionChat: React.FC<SolutionChatProps> = ({ industry, onClose, onCtaClick }) => {
  const { t, language } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const constraintsRef = useRef(null);

  useEffect(() => {
    if (industry) {
      const initial = t.chat.initialMessage.replace('{industry}', industry);
      setMessages([{ role: 'model', text: initial }]);
    }
  }, [industry, t.chat.initialMessage]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || !industry || isLoading || isStreaming) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey || apiKey === 'undefined' || apiKey === '') {
        throw new Error('API Key missing');
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const streamPromise = ai.models.generateContentStream({
        model: "gemini-3-flash-preview",
        contents: [
          ...messages.map(m => ({ role: m.role, parts: [{ text: m.text }] })),
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: t.chat.systemPrompt.replace('{industry}', industry),
          temperature: 0.7,
          topP: 0.8,
          topK: 40,
        }
      });

      const stream = await streamPromise;
      
      // Add a placeholder message for the AI and stop initial loading
      setMessages(prev => [...prev, { role: 'model', text: '' }]);
      setIsLoading(false);
      setIsStreaming(true);

      let fullText = "";
      for await (const chunk of stream) {
        if (chunk.text) {
          fullText += chunk.text;
          setMessages(prev => {
            const newMessages = [...prev];
            if (newMessages.length > 0) {
              newMessages[newMessages.length - 1] = { 
                ...newMessages[newMessages.length - 1], 
                text: fullText 
              };
            }
            return newMessages;
          });
        }
      }
    } catch (error: any) {
      console.error('Chat error:', error);
      let errorMessage = language === 'de' 
        ? 'Fehler bei der Verbindung zum KI-System.' 
        : 'Ошибка подключения к системе ИИ.';
      
      if (error.message === 'API Key missing') {
        errorMessage = language === 'de'
          ? 'API-Schlüssel fehlt.'
          : 'Отсутствует API-ключ.';
      }

      setMessages(prev => [...prev, { role: 'model', text: errorMessage }]);
    } finally {
      setIsLoading(false);
      setIsStreaming(false);
    }
  };

  const handleCta = () => {
    const summary = messages.map(m => `${m.role === 'user' ? 'Nutzer' : 'KI'}: ${m.text}`).join('\n');
    onCtaClick(`Anfrage für ${industry}\n\nChat-Verlauf:\n${summary}`);
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[100]" ref={constraintsRef}>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.1}
        dragMomentum={false}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="pointer-events-auto absolute bottom-8 right-8 w-[400px] h-[580px] bg-[#020617] border border-slate-800 rounded-2xl shadow-[0_30px_100px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden ring-1 ring-white/5"
      >
        {/* Futuristic Dashboard Header */}
        <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/[0.02] cursor-grab active:cursor-grabbing relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
          
          <div className="flex items-center gap-4">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80 shadow-[0_0_8px_rgba(244,63,94,0.4)]" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.4)]" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white tracking-tight">{industry} AI Assistant</span>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 text-slate-500 hover:text-white hover:bg-white/5 rounded-lg transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Neural Processing Visualization (Subtle Accent) */}
        <div className="h-1 w-full bg-slate-900 overflow-hidden relative">
          <motion.div 
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"
          />
        </div>

        {/* Messages - Terminal Style */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.05)_0%,transparent_50%)]">
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col gap-2"
            >
              <div className={cn("flex items-center gap-2", m.role === 'user' && "flex-row-reverse")}>
                <span className={`text-[9px] font-mono font-bold uppercase tracking-widest ${
                  m.role === 'user' ? 'text-blue-400' : 'text-emerald-500'
                }`}>
                  {m.role === 'user' ? 'Experte' : 'D.T Assistent'}
                </span>
                <div className="h-[1px] flex-1 bg-white/5" />
              </div>
              <div className={`p-4 rounded-xl text-xs leading-relaxed font-mono ${
                m.role === 'user' 
                  ? 'bg-blue-500/5 text-blue-100 border border-blue-500/10' 
                  : 'bg-emerald-500/[0.03] text-slate-300 border border-emerald-500/10 shadow-[0_4px_20px_rgba(16,185,129,0.02)]'
              }`}>
                {m.text}
                {m.role === 'model' && isStreaming && i === messages.length - 1 && (
                  <span className="inline-block w-2 h-4 ml-1 bg-emerald-500 animate-pulse align-middle" />
                )}
              </div>
            </motion.div>
          ))}
          {isLoading && (
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-mono font-bold text-emerald-500 uppercase tracking-widest">Processing</span>
                <div className="h-[1px] flex-1 bg-white/5" />
              </div>
              <div className="p-4 rounded-xl bg-emerald-500/[0.03] border border-emerald-500/10">
                <div className="flex gap-1.5">
                  <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Technical Footer area */}
        <div className="px-6 py-4 bg-slate-900/40 border-t border-white/5 space-y-4">
          <button
            onClick={handleCta}
            className="w-full py-2.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-3 group relative overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.05)] hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            {t.chat.cta}
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="relative group">
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity" />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder={t.chat.placeholder}
              className="w-full bg-slate-950/80 border border-white/5 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-emerald-500/30 transition-all font-mono placeholder:text-slate-600 shadow-inner"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-emerald-500 hover:text-emerald-400 disabled:text-slate-800 transition-all"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
