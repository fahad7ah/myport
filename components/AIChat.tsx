
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiChatResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello! I'm Fahad's digital assistant. How can I help you learn more about his work today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    const response = await getGeminiChatResponse(userMessage, messages);
    
    setMessages(prev => [...prev, { role: 'model', text: response || 'No response available.' }]);
    setIsTyping(false);
  };

  return (
    <div className="max-w-2xl mx-auto border golden-border border-opacity-20 rounded-xl overflow-hidden shadow-2xl bg-black/40 backdrop-blur-xl">
      <div className="p-4 border-b golden-border border-opacity-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(212,175,55,1)]"></div>
          <span className="text-xs uppercase tracking-widest font-bold">Ornob-v3 Engine</span>
        </div>
        <button 
          onClick={() => setMessages([{ role: 'model', text: "Context reset. How can I assist you further?" }])}
          className="text-[10px] uppercase text-gray-500 hover:text-white"
        >
          Reset Session
        </button>
      </div>

      <div 
        ref={scrollRef}
        className="h-[400px] overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-amber-500/20"
      >
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-amber-500 text-black font-medium' 
                : 'bg-white/5 text-gray-300 border border-white/10'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex gap-1">
              <div className="w-1 h-1 bg-amber-500 rounded-full animate-bounce"></div>
              <div className="w-1 h-1 bg-amber-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div className="w-1 h-1 bg-amber-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t golden-border border-opacity-20 flex gap-4">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type your question..."
          className="flex-grow bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-amber-500/50 transition-all"
        />
        <button 
          onClick={handleSend}
          disabled={isTyping}
          className="bg-amber-500 text-black w-12 h-12 rounded-full flex items-center justify-center hover:bg-amber-400 transition-all disabled:opacity-50"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AIChat;
