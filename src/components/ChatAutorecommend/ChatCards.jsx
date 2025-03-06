import React, { useState, useEffect } from 'react';
import './ChatCards.css';
import { fetchStarterPrompts } from '../../services/api';

const ChatCard = ({ onSelectPrompt }) => {
    const [prompts, setPrompts] = useState([
        "What should I wear to a gallery opening?",
        "Suggest styling tips for minimalist wardrobe",
        "Tell me about tabi boots",
        "What are good fabrics for summer?"
    ]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadPrompts = async () => {
            try {
                setIsLoading(true);
                const data = await fetchStarterPrompts();
                setPrompts(data);
            } catch (error) {
                console.error("Error loading chat card prompts:", error);
                // Default prompts will remain
            } finally {
                setIsLoading(false);
            }
        };

        loadPrompts();
    }, []);

    return (
        <div className="chat-cards-container">
            {isLoading ? (
                <div className="chat-cards-loading">Loading suggestions...</div>
            ) : (
                prompts.map((prompt, index) => (
                    <div 
                        key={index} 
                        className="chat-card"
                        onClick={() => onSelectPrompt(prompt)}
                    >
                        {prompt}
                    </div>
                ))
            )}
        </div>
    );
};

export default ChatCard;