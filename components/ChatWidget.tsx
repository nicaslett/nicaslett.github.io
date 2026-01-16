'use client';

import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

// Define a type for the n8n createChat function to avoid 'any'
type CreateChatOptions = {
  webhookUrl: string;
  target: string | HTMLElement;
  mode?: 'window' | 'fullscreen';
  collapsed?: boolean;
  showWelcomeScreen?: boolean;
  initialMessages?: string[];
  i18n?: Record<string, unknown>;
  theme?: Record<string, unknown>;
};

type N8nCreateChat = (options: CreateChatOptions) => void;

interface WindowWithN8n extends Window {
  n8nCreateChat?: N8nCreateChat;
}

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasOpened, setHasOpened] = useState(false); // New state to track if chat has ever been opened
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const isInitializedRef = useRef(false); // Ref to track initialization status

  // Load the script when the component mounts or on interaction
  // We'll load it on mouse enter of the button or when clicked to be lazy but responsive.
  const loadScript = () => {
    if (isLoaded || document.getElementById('n8n-chat-script')) return;

    const script = document.createElement('script');
    script.id = 'n8n-chat-script';
    script.type = 'module';
    script.innerHTML = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      window.n8nCreateChat = createChat;
      document.dispatchEvent(new Event('n8n-chat-loaded'));
    `;
    document.body.appendChild(script);
  };

  const focusInput = () => {
    // Retry focusing for a while as the chat renders asynchronously
    let attempts = 0;
    const maxAttempts = 20; // 2 seconds (assuming 100ms interval)

    const interval = setInterval(() => {
      attempts++;
      const container = chatContainerRef.current;
      if (!container) return;

      const input = container.querySelector('textarea, input') as HTMLElement;
      if (input) {
        input.focus();
        if (document.activeElement === input) {
            clearInterval(interval);
        }
      }

      if (attempts >= maxAttempts) clearInterval(interval);
    }, 100);
  };

  const initializeChat = () => {
    if (!(window as unknown as WindowWithN8n).n8nCreateChat || !chatContainerRef.current) return;

    // Prevent double initialization using ref
    if (isInitializedRef.current) return;

    // Fallback check on content
    if (chatContainerRef.current.innerHTML !== '') {
        isInitializedRef.current = true;
        return;
    }

    (window as unknown as WindowWithN8n).n8nCreateChat?.({
      webhookUrl: 'https://hnet.sylentt.com/webhook/61506b10-6711-4962-8025-43ccf7314403/chat',
      target: chatContainerRef.current,
      mode: 'fullscreen', // Fills the target container
      showWelcomeScreen: false,
      initialMessages: [
        'Hi there! How can I help you today?'
      ],
      i18n: {
        en: {
          title: 'Assistant',
          getStarted: 'Start Chat',
          inputPlaceholder: 'Type your message...',
        },
      },
    });

    isInitializedRef.current = true;

    // Attempt to focus the input
    focusInput();
  };

  useEffect(() => {
    const handleScriptLoaded = () => {
      setIsLoaded(true);
      // If the chat is open (or was just opened), initialize it
      if (isOpen) {
        initializeChat();
      }
    };

    window.addEventListener('n8n-chat-loaded', handleScriptLoaded);

    // Check if already loaded
    if ((window as unknown as WindowWithN8n).n8nCreateChat) {
      setIsLoaded(true);
    }

    return () => {
      window.removeEventListener('n8n-chat-loaded', handleScriptLoaded);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const handleToggle = () => {
    if (!isOpen) {
      setHasOpened(true); // Ensure component is rendered
      setIsOpen(true);
      loadScript(); // Ensure script is loading/loaded
      if (isLoaded) {
        // If already loaded, initialize immediately (if not already)
        // We need a slight delay to ensure the DOM element is rendered by React
        setTimeout(initializeChat, 0);
      }
    } else {
      setIsOpen(false);
    }
  };

  const chatVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      display: "flex",
      transition: { duration: 0.2 }
    },
    closed: {
      opacity: 0,
      y: 20,
      scale: 0.95,
      transition: { duration: 0.2 },
      transitionEnd: { display: "none" }
    }
  };

  return (
    <>
      {/* We keep the component in the DOM once opened to preserve state and avoid re-initialization issues */}
      {hasOpened && (
        <motion.div
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          variants={chatVariants}
          className="fixed bottom-4 right-4 z-50 w-[90vw] h-[80vh] sm:w-[400px] sm:h-[600px] bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          style={{
              // Custom Properties for n8n chat
              '--chat--color-primary': '#334155', // slate-700
              '--chat--color-secondary': '#475569', // slate-600
              '--chat--color-background': '#020617', // slate-950
              '--chat--color-font': '#f8fafc', // slate-50
              '--chat--color-input': '#1e293b', // slate-800
              '--chat--color-input-font': '#f8fafc',
              '--chat--toggle--background': '#334155',
              '--chat--toggle--hover--background': '#475569',
              '--chat--message--bot--background': '#1e293b', // slate-800
              '--chat--message--bot--font': '#f8fafc',
              '--chat--message--user--background': '#334155', // slate-700
              '--chat--message--user--font': '#f8fafc',
          } as React.CSSProperties}
        >
            {/* Header for Close Button */}
            <div className="absolute top-2 right-2 z-10">
              <button onClick={() => setIsOpen(false)} className="p-2 bg-slate-900/50 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors">
                  <X size={20} />
              </button>
            </div>

            {/* Chat Container */}
            <div ref={chatContainerRef} className="w-full h-full" />

        </motion.div>
      )}

      <motion.button
        className="fixed bottom-4 right-4 z-50 p-4 bg-slate-100 text-slate-950 rounded-full shadow-lg hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 focus:ring-slate-100"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleToggle}
        onMouseEnter={loadScript} // Preload on hover
        aria-label="Toggle Chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </>
  );
};
