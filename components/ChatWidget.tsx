'use client';

import { useEffect, useRef } from 'react';

export const ChatWidget = () => {
  const isInitialized = useRef(false);

  useEffect(() => {
    if (isInitialized.current) return;
    isInitialized.current = true;

    // Add the n8n chat style
    if (!document.querySelector('link[href="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css"]')) {
      const link = document.createElement('link');
      link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }

    // Initialize the n8n chat widget
    const script = document.createElement('script');
    script.type = 'module';
    script.innerHTML = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      createChat({
        webhookUrl: '${process.env.NEXT_PUBLIC_CHAT_WEBHOOK_URL || 'https://hnet.sylentt.com/webhook/fafb5729-49b2-4719-b227-a8db849677c4/chat'}',
        streaming: true,
        initialMessages: [
          'What can I tell you about my history?'
        ],
        i18n: {
          en: {
            title: "Let's chat.",
            inputPlaceholder: 'Type a message...',
          }
        },
        metadata: {
          sourceSite: 'nicaslett.info',
        }
      });
    `;
    document.body.appendChild(script);

    return () => {
      // Cleanup script if necessary, though n8n-chat might not like being re-initialized
      // document.body.removeChild(script);
    };
  }, []);

  return null;
};
