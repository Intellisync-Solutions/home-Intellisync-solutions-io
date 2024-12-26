import React from 'react';

const ChatbotWidget: React.FC = () => {
  return (
    <>
      <div id="intellisync-chat"></div>
      <script 
        src="https://intellisync-server-fbc47e09b67b.herokuapp.com/chatbot-embed.js" 
        data-intellisync-id="pNXqEuc4jTU3Y07ylF5I" 
        defer 
        type="module"
      />
    </>
  );
};

export default ChatbotWidget;
