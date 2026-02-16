
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { getConciergeResponse } from '../services/geminiService';

export const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', text: string }[]>([
    { role: 'assistant', text: "Welcome to VL Interiors. I am your concierge. How may I assist with your design journey today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const response = await getConciergeResponse(userMessage);
    setMessages(prev => [...prev, { role: 'assistant', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-charcoal text-cream rounded-full flex items-center justify-center shadow-2xl hover:bg-stone-gray transition-colors group"
        >
          <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
      ) : (
        <div className="w-80 sm:w-96 h-[500px] bg-cream border border-warm-beige rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          <div className="bg-charcoal p-4 flex justify-between items-center text-cream">
            <div>
              <h4 className="font-serif text-lg tracking-wider">AI Concierge</h4>
              <p className="text-[10px] text-warm-beige uppercase tracking-widest">VL Interiors</p>
            </div>
            <button onClick={() => setIsOpen(false)}><X className="w-5 h-5 hover:text-soft-gold" /></button>
          </div>
          
          <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-soft-gold text-white rounded-br-none' 
                    : 'bg-warm-beige/30 text-charcoal rounded-bl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-warm-beige/30 p-3 rounded-xl rounded-bl-none">
                  <Loader2 className="w-4 h-4 animate-spin text-soft-gold" />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-warm-beige flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Inquire about our services..."
              className="flex-1 bg-transparent border-b border-stone-gray focus:border-soft-gold outline-none text-sm py-2"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="p-2 text-charcoal hover:text-soft-gold transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
