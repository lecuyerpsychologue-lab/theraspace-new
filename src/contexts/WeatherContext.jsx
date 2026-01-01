import { createContext, useContext, useState, useEffect } from 'react';

const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [weatherHistory, setWeatherHistory] = useState(() => {
    const saved = localStorage.getItem('theraspace_weather');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('theraspace_weather', JSON.stringify(weatherHistory));
  }, [weatherHistory]);

  const addWeatherEntry = (value) => {
    const today = new Date().toDateString();
    setWeatherHistory((prev) => {
      const filtered = prev.filter(
        (entry) => new Date(entry.date).toDateString() !== today
      );
      return [
        ...filtered,
        {
          date: new Date().toISOString(),
          value,
        },
      ];
    });
  };

  const getTodayWeather = () => {
    const today = new Date().toDateString();
    const todayEntry = weatherHistory.find(
      (entry) => new Date(entry.date).toDateString() === today
    );
    return todayEntry?.value || null;
  };

  const getWeekWeather = () => {
    const now = new Date();
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    
    return weatherHistory.filter(
      (entry) => new Date(entry.date) >= weekAgo
    ).sort((a, b) => new Date(a.date) - new Date(b.date));
  };

  return (
    <WeatherContext.Provider 
      value={{ 
        weatherHistory, 
        addWeatherEntry, 
        getTodayWeather, 
        getWeekWeather 
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeather must be used within WeatherProvider');
  }
  return context;
}
