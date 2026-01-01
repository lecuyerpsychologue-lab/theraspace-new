import { useState } from 'react';
import { Send } from 'lucide-react';
import Header from '../layout/Header';
import SoftCard from '../ui/SoftCard';
import Input from '../ui/Input';

const quickSuggestions = [
  { emoji: '😔', label: 'Triste' },
  { emoji: '😤', label: 'Énervé' },
  { emoji: '😰', label: 'Peur' },
  { emoji: '😊', label: 'Content' },
];

export default function PsIAPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'psia',
      text: 'Salut! Comment tu te sens aujourd\'hui? 🌱',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      id: Date.now(),
      sender: 'user',
      text: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        sender: 'psia',
        text: 'Je comprends. Tu veux m\'en dire plus? Je suis là pour t\'écouter.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const handleQuickSuggestion = (label) => {
    setInputValue(label);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header title="PsIA" />
      <p className="px-6 text-sm text-text-secondary mb-4">
        Ton compagnon bienveillant
      </p>

      {/* Messages */}
      <div className="flex-1 px-6 space-y-4 overflow-y-auto pb-32">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                message.sender === 'user'
                  ? 'bg-text-primary text-white'
                  : 'bg-soft-gray text-text-primary'
              }`}
            >
              {message.sender === 'psia' && <span className="mr-2">🤖</span>}
              <span>{message.text}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Suggestions */}
      <div className="px-6 mb-4">
        <p className="text-sm text-text-secondary mb-2">Suggestions rapides:</p>
        <div className="flex gap-2 flex-wrap">
          {quickSuggestions.map((suggestion, idx) => (
            <button
              key={idx}
              onClick={() => handleQuickSuggestion(suggestion.label)}
              className="px-4 py-2 bg-soft-gray hover:bg-gray-200 rounded-xl text-sm font-medium transition-colors"
            >
              {suggestion.emoji} {suggestion.label}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="sticky bottom-0 bg-cream px-6 py-4 border-t border-gray-100">
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Écris ton message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1"
          />
          <button
            onClick={handleSend}
            className="bg-text-primary text-white p-3.5 rounded-xl hover:bg-text-primary/90 transition-colors active:scale-95"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
