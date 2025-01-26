import React, { useEffect } from 'react';

interface ChatWidgetProps {
  chatbotId: string;
  src?: string;
  uniqueKey?: string;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({ 
  chatbotId, 
  src = 'https://intellisync-server-fbc47e09b67b.herokuapp.com/chatbot-embed.js',
  uniqueKey = chatbotId
}) => {
  useEffect(() => {
    // Create script element for chat widget
    const script = document.createElement('script');
    script.src = src;
    script.setAttribute('data-intellisync-id', chatbotId);
    script.setAttribute('data-unique-key', uniqueKey);
    script.defer = true;
    script.type = 'module';

    // Append script to body
    document.body.appendChild(script);

    // Cleanup function to remove script if component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, [chatbotId, src, uniqueKey]);

  return null; // This component doesn't render anything visually
};
