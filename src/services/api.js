const isProduction = window.location.hostname !== 'localhost';
const API_BASE_URL = isProduction ? "" : ""; // Empty for both since we use proxies

/**
 * Fetches starter prompts for chat cards
 * @returns {Promise<string[]>} Array of prompt strings
 */
export async function fetchStarterPrompts() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/starter-prompts`);
    if (!response.ok) throw new Error('Failed to fetch starter prompts');
    
    const data = await response.json();
    return data.prompts || [];
  } catch (error) {
    console.error('Error fetching starter prompts:', error);
    return [
      "What should I wear to a gallery opening?",
      "Suggest styling tips for minimalist wardrobe",
      "Tell me about tabi boots",
      "What are good fabrics for summer?"
    ];
  }
}

/**
 * Sends a message to the KIT bot
 * @param {string} message - User message
 * @param {File} [imageFile] - Optional image file
 * @param {Array} history - Chat history
 * @returns {Promise<Object>} Bot response with suggested follow-ups
 */
export async function sendMessage(message, imageFile = null, history = []) {
  try {
    // Format chat history
    const formattedHistory = history.map(msg => {
      if (msg.type === 'user') {
        return { role: 'user', content: msg.content };
      } else {
        return { role: 'assistant', content: msg.content };
      }
    });
    
    // Build request data
    const requestData = {
      message: message,
      history: formattedHistory
    };
    
    // Add image validation
    if (imageFile) {
      const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif'];
      const maxSize = 5 * 1024 * 1024; // 5MB
      
      if (!validTypes.includes(imageFile.type)) {
        return {
          text: "I couldn't process that image. Please upload a JPEG, PNG, or GIF file.",
          suggestedResponses: ["Try without image", "Which formats work?", "Send a different image"]
        };
      }
      
      if (imageFile.size > maxSize) {
        return {
          text: "That image is too large. Please upload an image smaller than 5MB.",
          suggestedResponses: ["Try without image", "How to resize images?", "Send a different image"]
        };
      }
      
      // Convert image to base64
      const imageBase64 = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(imageFile);
      });
      requestData.image = imageBase64;
    }
    
    // Make API call
    const response = await fetch(`${API_BASE_URL}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData)
    });
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    if (error.message.includes("413")) {
      return {
        text: "The image you sent is too large. Please try a smaller image (under 5MB).",
        suggestedResponses: ["Continue without image", "Try a different question"]
      };
    } else if (error.message.includes("415")) {
      return {
        text: "I can only process JPEG, PNG and GIF images. Please try a different format.",
        suggestedResponses: ["Continue without image", "Try a different question"]
      };
    } else {
      throw error; // Re-throw other errors to be caught by the calling function
    }
  }
}

/**
 * Fetches suggested responses based on a message and reply
 * @param {string} message - User message
 * @param {string} botReply - Bot's reply
 * @param {Array} [history] - Optional chat history
 * @returns {Promise<string[]>} Array of suggested responses
 */
export async function fetchSuggestedResponses(message, botReply, history = []) {
  try {
    // parameter order to match backend API expectation
    const response = await fetch(`${API_BASE_URL}/api/suggested-responses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        bot_reply: botReply,
        history
      })
    });
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    const data = await response.json();
    return data.suggestedResponses || [];
  } catch (error) {
    console.error('Error fetching suggested responses:', error);
    return ["Tell me more", "Other options?", "Different topic"];
  }
}

/**
 * Performs a health check on the API
 * @returns {Promise<boolean>} True if API is healthy
 */
export async function checkHealth() {
  try {
    console.log("Checking API health...");
    const response = await fetch(`${API_BASE_URL}/api/health`);
    
    if (!response.ok) {
      console.log("API health check failed: non-OK response");
      return false;
    }
    
    try {
      const data = await response.json();
      console.log("API health check response:", data);
      return data.status === "healthy";
    } catch (jsonError) {
      console.error("Error parsing health check JSON:", jsonError);
      return false;
    }
  } catch (error) {
    console.error('Health check failed:', error);
    return false;
  }
}