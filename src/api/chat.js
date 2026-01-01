/**
 * Placeholder for PsIA chat API
 * This will be implemented with actual AI integration
 */

export async function sendMessage(message, conversationHistory = []) {
  // Placeholder implementation
  // TODO: Integrate with actual AI service
  
  return new Promise((resolve) => {
    setTimeout(() => {
      const responses = [
        "Je comprends. Tu veux m'en dire plus? Je suis là pour t'écouter.",
        "C'est normal de ressentir ça. Comment puis-je t'aider?",
        "Merci de partager ça avec moi. Qu'est-ce qui te préoccupe le plus?",
        "Je suis là pour toi. Parlons-en ensemble.",
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      resolve({
        message: randomResponse,
        timestamp: new Date().toISOString(),
      });
    }, 1000);
  });
}

export async function getConversationSummary(conversationId) {
  // Placeholder for getting conversation summary
  return {
    id: conversationId,
    summary: 'Résumé de la conversation',
    date: new Date().toISOString(),
  };
}
