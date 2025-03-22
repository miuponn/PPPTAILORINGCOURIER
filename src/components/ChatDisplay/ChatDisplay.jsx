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

  // Return messages directly - no wrapper div
  return (
    <>
      {messages.map((msg, index) => (
        msg.type === 'user' 
          ? <UserMessage key={index} content={msg.content} />
          : <KitMessage key={index} content={msg.content} />
      ))}
      <div ref={messagesEndRef} />
    </>
  );
};

export default ChatDisplay;