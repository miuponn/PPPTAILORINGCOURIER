import React, { useRef, useEffect } from 'react';
import UserMessage from './UserMessage';
import KitMessage from './KitMessage';
import './Messages.css';

const ChatDisplay = ({ messages }) => {
  const messagesEndRef = useRef(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat-messages">
      {messages.map((msg, index) => (
        msg.type === 'user' 
          ? <UserMessage key={index} content={msg.content} />
          : <KitMessage key={index} content={msg.content} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatDisplay;