import React, { useEffect, useState } from 'react';
import kitIcon from './kit.svg';
import './Messages.css';

const KitMessage = ({ content, isTyping }) => {
  const [lines, setLines] = useState([]);
  
  useEffect(() => {
    if (content && !isTyping) {
      // reset lines first to prevent duplication
      setLines([]);
      
      const contentLines = content.split('\n');
      
      // use  single timeout and update all at once to avoid duplication
      contentLines.forEach((line, i) => {
        setTimeout(() => {
          setLines(prev => {
            // Only add the line if it's not already present
            if (!prev.includes(line)) {
              return [...prev, line];
            }
            return prev;
          });
        }, i * 300);
      });
    }
  }, [content, isTyping]);

  return (
    <div className="message kit">
      <span className="kit-icon">
        <img src={kitIcon} alt="KIT" />
      </span>
      {isTyping ? (
        <div className="dots-container">
          <div className="dot dot-1"></div>
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
        </div>
      ) : (
        <div className="kit-content">
          {lines.map((line, index) => (
            <div 
              key={index} 
              className="kit-content-line"
              style={{animationDelay: `${index * 0.3}s`}}
            >
              {line || <br/>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default KitMessage;