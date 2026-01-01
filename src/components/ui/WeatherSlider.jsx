import { useState } from 'react';

const weatherLevels = [
  { emoji: '⛈️', label: 'Tempête', value: 1, color: '#4A5568' },
  { emoji: '🌩️', label: 'Orage', value: 2, color: '#6B7280' },
  { emoji: '🌧️', label: 'Pluie', value: 3, color: '#9CA3AF' },
  { emoji: '☁️', label: 'Nuageux', value: 4, color: '#D1D5DB' },
  { emoji: '🌥️', label: 'Couvert', value: 5, color: '#E5E7EB' },
  { emoji: '⛅', label: 'Éclaircies', value: 6, color: '#FEF3C7' },
  { emoji: '🌤️', label: 'Ensoleillé', value: 7, color: '#FDE68A' },
  { emoji: '☀️', label: 'Grand soleil', value: 8, color: '#FBBF24' },
];

export default function WeatherSlider({ value = 6, onChange }) {
  const [currentValue, setCurrentValue] = useState(value);

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value);
    setCurrentValue(newValue);
    if (onChange) onChange(newValue);
  };

  const currentWeather = weatherLevels[currentValue - 1];

  return (
    <div className="w-full py-4">
      <div className="text-center mb-4">
        <div className="text-4xl mb-2">{currentWeather.emoji}</div>
        <div className="text-lg font-semibold text-text-primary">{currentWeather.label}</div>
      </div>
      
      <div className="relative">
        <input
          type="range"
          min="1"
          max="8"
          value={currentValue}
          onChange={handleChange}
          className="w-full h-2 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, 
              #4A5568 0%, 
              #6B7280 14.28%, 
              #9CA3AF 28.56%, 
              #D1D5DB 42.84%, 
              #E5E7EB 57.12%, 
              #FEF3C7 71.4%, 
              #FDE68A 85.68%, 
              #FBBF24 100%)`,
          }}
        />
        <style jsx>{`
          input[type='range']::-webkit-slider-thumb {
            appearance: none;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: white;
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
            border: 3px solid ${currentWeather.color};
          }
          input[type='range']::-moz-range-thumb {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: white;
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
            border: 3px solid ${currentWeather.color};
          }
        `}</style>
      </div>

      <div className="flex justify-between mt-2 text-xs text-text-muted">
        <span>{weatherLevels[0].emoji}</span>
        <span>{weatherLevels[7].emoji}</span>
      </div>
    </div>
  );
}
