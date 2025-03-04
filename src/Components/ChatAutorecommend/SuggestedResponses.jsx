import React from 'react';
import './SuggestedResponses.css';

const SuggestedResponses = ({ suggestions = [], onSelectSuggestion }) => {
  // Limit to 3 max suggestions
  const displaySuggestions = suggestions.slice(0, 3);

  if (displaySuggestions.length === 0) return null;

  return (
    <div className="suggested-responses-container">
      {displaySuggestions.map((suggestion, index) => (
        <button 
          key={index} 
          className="suggested-response-button"
          onClick={() => onSelectSuggestion(suggestion)}
        >
          {suggestion.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default SuggestedResponses;