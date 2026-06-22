'use client';

import { useChat } from 'ai/react';
import { useState, useRef, useEffect } from 'react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary hover:bg-primary-dim text-surface rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:scale-110 transition-all duration-300 z-50"
        aria-label="Toggle AI Assistant"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 h-[500px] max-h-[70vh] bg-surface/90 backdrop-blur-2xl border border-primary/20 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex flex-col z-50 overflow-hidden animate-fade-up">
          
          {/* Header */}
          <div className="bg-primary/10 border-b border-primary/20 p-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary flex items-center justify-center shrink-0">
              <span className="text-[10px] font-bold text-white">AI</span>
            </div>
            <div>
              <h3 className="text-white font-bold text-sm">Shariq&apos;s Assistant</h3>
              <p className="text-xs text-primary font-mono">Powered by Gemini AI</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-muted text-sm mt-4 font-mono">
                Hi! I am Muhammad Shariq&apos;s AI assistant. Ask me anything about his experience, skills, or projects.
              </div>
            )}
            
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-relaxed ${m.role === 'user' ? 'bg-primary text-surface rounded-br-none font-medium' : 'bg-white/10 text-white rounded-bl-none border border-white/5'}`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/10 text-white rounded-2xl rounded-bl-none px-4 py-3 text-sm flex gap-1 items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-white/10 bg-black/20">
            <input
              className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
              value={input}
              placeholder="Ask a question..."
              onChange={handleInputChange}
            />
          </form>

        </div>
      )}
    </>
  );
}
