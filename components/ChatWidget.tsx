'use client';

import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  text: string;
}

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init-1',
      role: 'assistant',
      text: 'What can I tell you about my history?',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState('');

  const MAX_CHARS = 500;
  const WEBHOOK_URL = process.env.NEXT_PUBLIC_CHAT_WEBHOOK_URL || 'https://hnet.sylentt.com/webhook/61506b10-6711-4962-8025-43ccf7314403/chat';

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const hasOpened = useRef(false);

  // Initialize Session ID
  useEffect(() => {
    let storedSessionId = localStorage.getItem('chat_session_id');
    if (!storedSessionId) {
      storedSessionId = crypto.randomUUID();
      localStorage.setItem('chat_session_id', storedSessionId);
    }
    setSessionId(storedSessionId);
  }, []);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Focus management
  useEffect(() => {
    if (isOpen) {
      hasOpened.current = true;
      if (inputRef.current) {
        setTimeout(() => {
          inputRef.current?.focus();
        }, 300); // Wait for animation
      }
    } else if (hasOpened.current && triggerRef.current) {
      triggerRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();

    const trimmedInput = inputValue.trim();
    if (!trimmedInput || isLoading || trimmedInput.length > MAX_CHARS) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      text: trimmedInput,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch(
        WEBHOOK_URL,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            action: 'sendMessage',
            sessionId: sessionId,
            chatInput: userMessage.text,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      // Assuming the API returns an object with an 'output' field containing the text
      // Adjust this based on the actual API response structure if needed
      const botText = data.output || "I'm sorry, I couldn't process that.";

      const botMessage: Message = {
        id: crypto.randomUUID(),
        role: 'assistant',
        text: botText,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch {
      // Don't log full error details to console to prevent leakage
      console.error('Message delivery failed');
      const errorMessage: Message = {
        id: crypto.randomUUID(),
        role: 'assistant',
        text: "I'm having trouble connecting right now. Please try again later.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      // Keep focus on input after sending
      setTimeout(() => {
          inputRef.current?.focus();
      }, 10);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 z-50 w-[90vw] sm:w-[350px] h-[500px] bg-slate-900 border border-slate-700 rounded-xl shadow-2xl flex flex-col overflow-hidden"
            role="dialog"
            aria-modal="false"
            aria-label="Chat with assistant"
          >
            {/* Header */}
            <div className="bg-slate-800 p-4 flex items-center justify-between border-b border-slate-700">
              <h3 className="text-slate-100 font-serif font-medium text-lg">Let&apos;s chat.</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors p-1 rounded-full hover:bg-slate-700"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-800 rounded-2xl rounded-bl-none px-4 py-3 border border-slate-700">
                    <Loader2 className="w-5 h-5 animate-spin text-slate-400" aria-hidden="true" />
                    <span className="sr-only">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-slate-900 border-t border-slate-800">
              <form
                onSubmit={handleSendMessage}
                className="flex items-center gap-2"
              >
                <div className="flex-1 relative">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type a message..."
                    className={`w-full bg-slate-950 text-slate-200 rounded-lg pl-4 pr-12 py-3 text-sm border ${
                      inputValue.length > MAX_CHARS ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-slate-800 focus:border-blue-500 focus:ring-blue-500'
                    } focus:outline-none focus:ring-1 placeholder-slate-500 transition-all`}
                    disabled={isLoading}
                  />
                  <div
                    className={`absolute right-3 top-1/2 -translate-y-1/2 text-xs ${
                      inputValue.length > MAX_CHARS ? 'text-red-500 font-bold' : 'text-slate-600'
                    }`}
                    aria-live="polite"
                  >
                    {inputValue.length}/{MAX_CHARS}
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isLoading || !inputValue.trim() || inputValue.length > MAX_CHARS}
                  className="bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-500 text-white p-3 rounded-lg transition-colors flex-shrink-0"
                  aria-label="Send message"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <motion.button
        ref={triggerRef}
        className="fixed bottom-4 right-4 z-50 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-500"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </>
  );
};
