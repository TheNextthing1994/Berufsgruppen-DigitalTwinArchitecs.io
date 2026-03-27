import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Bot, User, ArrowRight, Loader2, GripHorizontal } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { GoogleGenAI } from "@google/genai";

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
    if (!input.trim() || !industry || isLoading) return;

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
      
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Timeout')), 20000)
      );

      const chatPromise = ai.models.generateContent({
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

      const response = await Promise.race([chatPromise, timeoutPromise]) as any;

      const aiText = response.text || (language === 'de' ? 'Entschuldigung, ich konnte keine Antwort generieren.' : 'Извините, я не смог сгенерировать ответ.');
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error: any) {
      console.error('Chat error:', error);
      let errorMessage = language === 'de' 
        ? 'Fehler bei der Verbindung zum KI-System.' 
        : 'Ошибка подключения к системе ИИ.';
      
      if (error.message === 'API Key missing') {
        errorMessage = language === 'de'
          ? 'API-Schlüssel fehlt.'
          : 'Отсутствует API-ключ.';
      } else if (error.message === 'Timeout') {
        errorMessage = language === 'de'
          ? 'Zeitüberschreitung.'
          : 'Тайм-аут.';
      }

      setMessages(prev => [...prev, { role: 'model', text: errorMessage }]);
    } finally {
      setIsLoading(false);
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
        className="pointer-events-auto absolute bottom-8 right-8 w-[360px] h-[520px] bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
      >
        {/* Drag Handle & Header */}
        <div className="p-3 border-b border-slate-800/50 flex items-center justify-between bg-slate-800/30 cursor-grab active:cursor-grabbing">
          <div className="flex items-center gap-2">
            <GripHorizontal className="w-4 h-4 text-slate-500" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">{industry} Assistant</span>
            </div>
          </div>
          <button onClick={onClose} className="p-1 text-slate-500 hover:text-white transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${
                m.role === 'user' ? 'bg-emerald-600' : 'bg-slate-800'
              }`}>
                {m.role === 'user' ? <User className="w-3 h-3 text-white" /> : <Bot className="w-3 h-3 text-emerald-500" />}
              </div>
              <div className={`max-w-[85%] p-3 rounded-xl text-xs leading-relaxed ${
                m.role === 'user' 
                  ? 'bg-emerald-600/10 text-emerald-50 border border-emerald-600/20' 
                  : 'bg-slate-800/50 text-slate-300 border border-slate-700/30'
              }`}>
                {m.text}
              </div>
            </motion.div>
          ))}
          {isLoading && (
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-md bg-slate-800 flex items-center justify-center">
                <Loader2 className="w-3 h-3 text-emerald-500 animate-spin" />
              </div>
              <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/30">
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-slate-600 rounded-full animate-bounce" />
                  <div className="w-1 h-1 bg-slate-600 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-1 h-1 bg-slate-600 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action & Input */}
        <div className="p-4 bg-slate-900/50 border-t border-slate-800/50 space-y-3">
          <button
            onClick={handleCta}
            className="w-full py-2 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-600/30 rounded-lg font-bold text-[11px] transition-all flex items-center justify-center gap-2 group"
          >
            {t.chat.cta}
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder={t.chat.placeholder}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-3 pr-10 py-2.5 text-xs text-white outline-none focus:border-emerald-600/50 transition-colors"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 text-emerald-500 hover:text-emerald-400 disabled:text-slate-700 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
